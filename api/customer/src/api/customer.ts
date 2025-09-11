import { Channel } from 'amqplib';
import { Application } from 'express';
import { CustomerService } from '../service/CustomerService';
import { createJWT, SubscribeMessage } from '../utils';
import { SendEmail } from '../utils/send-email';
import { AuthMiddleware } from './middleware/AuthMiddleware';

export const customer = async (app: Application, channel: Channel) => {
  const service = new CustomerService();
  const sendEmail = new SendEmail();

  SubscribeMessage(channel, service);

  app.get('/deneme', async (req, res, next) => {
    return res.json({ message: 'success' });
  });

  app.post('/login', async (req, res, next) => {
    console.log('ASDDSA');
    const { email, password } = req.body;
    const result = await service.FindCustomer({ email, password });
    console.log(result);
    if (result != null) {
      const token = createJWT({
        email: result.email as string,
        isAdmin: result.isAdmin,
      });
      return res.status(200).json({ token });
    } else {
      return res.status(404).json({ message: 'User Not found' });
    }
  });

  app.post('/sendEmail', async (req, res, next) => {
    const { email } = req.body;
    const code = sendEmail.createCode() as string;

    const sendedMessage = await sendEmail.sendMessageVeriyEmail(
      email,
      code as string
    );

    if (sendedMessage) {
      service.CreateEmailCode({ email, code });
      res.status(201).json({ message: 'success' });
    } else {
      res.status(400).json({ message: 'ERROR EMAIL' });
    }
  });

  app.post('/verifyEmail', async (req, res, next) => {
    const { email, code } = req.body;

    const result = await service.VerifyEmailCode({ email, code });

    if (result) {
      return res.status(200).json({ message: 'success' });
    } else {
      return res.status(400).json({ message: 'Code is not found' });
    }
  });

  app.post('/createCustomer', async (req, res, next) => {
    const { email, password } = req.body;

    if (password != '') {
      await service.CreateCustomer({ email, password });
      res.status(201).json({ message: 'success' });
    } else {
      res.status(400).json({ message: 'Password is not emty' });
    }
  });

  app.get('/profile', AuthMiddleware, async (req, res, next) => {
    const { email } = req.headers;
    const customer = await service.FindCustomerEmail({
      email: email as string,
    });
    return res.status(200).json(customer);
  });

  app.post('/updateProfile', async (req, res, next) => {
    const { name, surname, email, phone } = req.body;
    const customer = await service.CustomerUpdateProfile({
      email,
      name,
      surname,
      phone,
    });
    res.status(201).json(customer);
  });

  app.post('/addAddress', AuthMiddleware, async (req, res, next) => {
    const { street, postalCode, city, country, fullAddress } = req.body;
    const { email } = req.headers;
    if (email) {
      const user = await service.FindCustomerEmail({ email: email as string });
      const userId = user!._id.toString();
      const newAddress = await service.AddAddress({
        userId: userId,
        street: street,
        postalCode: postalCode,
        city: city,
        country: country,
        fullAddress: fullAddress,
      });
      return res.status(201).json(newAddress);
    } else {
      return res.status(404).json({ message: 'Not authorized' });
    }
  });

  app.get('/addressList', AuthMiddleware, async (req, res, next) => {
    const { email } = req.headers;
    if (email) {
      const user = await service.FindCustomerEmail({ email: email as string });
      const userId = user!._id.toString();
      const addressList = await service.AddressList({ userId: userId });
      return res.status(200).json(addressList);
    }
    return res.status(404).json({ message: 'Not authorized' });
  });

  app.post('/updatePassword', AuthMiddleware, async (req, res, next) => {
    const { newPassword, oldPassword } = req.body;
    const { email } = req.headers;
    if (email) {
      const getOldPassword = await service.CustomerOldPassword({
        email: email as string,
      });
      if (oldPassword == getOldPassword?.password) {
        if (getOldPassword) {
          await service.UpdatePassword({
            email: email as string,
            newPassword: newPassword,
          });
          return res.status(200).json({ message: 'success' });
        } else {
          return res.status(404).json({ message: 'ERROR' });
        }
      } else {
        res.status(400).json({ message: 'Password not matches' });
      }
    } else {
      return res.status(404).json({ message: 'ERROR' });
    }
  });
};
