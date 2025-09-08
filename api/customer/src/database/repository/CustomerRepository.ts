import { Customer } from '../model/Customer';
import { EmailCode } from '../model/EmailCode';

export class CustomerRepository {
  async CreateCustomer({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const customer = new Customer({
      email: email,
      password: password,
    });
    const resCustomer = await customer.save();
    return resCustomer;
  }

  async FindCustomer({ email, password }: { email: string; password: string }) {
    return await Customer.findOne({ email, password });
  }

  async FindCustomerEmail({ email }: { email: string }) {
    return await Customer.findOne({ email });
  }

  async CreateEmailCode({ email, code }: { email: string; code: string }) {
    const emailCode = new EmailCode({
      email: email,
      code: code,
    });
    const res = await emailCode.save();
    return res;
  }

  async VerifyEmailCode({ email, code }: { email: string; code: string }) {
    const res = await EmailCode.findOne({ email, code });

    if (res) {
      await EmailCode.deleteMany({ email });
      return true;
    } else {
      return false;
    }
  }
}
