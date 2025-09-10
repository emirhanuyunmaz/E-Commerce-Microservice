import { ObjectId } from 'mongoose';
import { Address } from '../model/Address';
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

  async UpdateProfile({email,name,surname,phone}:{email:string,name:string,surname:string,phone:string}){    
    return await Customer.findOneAndUpdate({email:email},{name:name,surname:surname,phone:phone})
  }

  async AddAddress({userId,street,postalCode,city,country,fullAddress}:{userId:string,street:string,postalCode:string,city:string,country:string,fullAddress:string}){
    const newAddress = new Address({
      userId:userId,
      city:city,
      country:country,
      fullAddress:fullAddress,
      postalCode:postalCode,
      street:street
    })
    await newAddress.save()
    return newAddress
  }

  async AddressList({userId}:{userId:string}){
    return await Address.find({userId:userId})
  }

}
