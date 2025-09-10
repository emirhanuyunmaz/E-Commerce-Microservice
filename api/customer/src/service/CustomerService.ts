import { CustomerRepository } from '../database/repository/CustomerRepository';
import { FormateData } from '../utils';

export class CustomerService {
  private readonly repository;

  constructor() {
    this.repository = new CustomerRepository();
  }

  async deneme() {
    return FormateData({ message: 'Succes' });
  }

  async CreateCustomer({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    return await this.repository.CreateCustomer({ email, password });
  }

  async CreateEmailCode({ email, code }: { email: string; code: string }) {
    return await this.repository.CreateEmailCode({ email, code });
  }

  async VerifyEmailCode({ email, code }: { email: string; code: string }) {
    return await this.repository.VerifyEmailCode({ email, code });
  }

  async FindCustomer({ email, password }: { email: string; password: string }) {
    return await this.repository.FindCustomer({ email, password });
  }

  async FindCustomerEmail({email}:{email:string}){
    return await this.repository.FindCustomerEmail({email:email})
  }

  async CustomerUpdateProfile({email,name,surname,phone}:{email:string,name:string,surname:string,phone:string}){
    return await this.repository.UpdateProfile({email:email,name:name,surname:surname,phone:phone})
  }

  async AddAddress({userId,street,postalCode,city,country,fullAddress}:{userId:string,street:string,postalCode:string,city:string,country:string,fullAddress:string}){
    return await this.repository.AddAddress({userId:userId,street:street,postalCode:postalCode,city:city,country:country,fullAddress:fullAddress})
  }

  async AddressList({userId}:{userId:string}){
    return this.repository.AddressList({userId})
  }

  async GetWishList(customerId: string) {
    // const wishListItems = await this.repository.Wishlist(customerId);
    return FormateData({ message: 'success' });
  }

  async AddToWishlist(customerId: string, product: any) {
    //  const wishlistResult = await this.repository.AddWishlistItem(customerId, product);
    return FormateData({ message: 'succes' });
  }

  async ManageCart(customerId: string, product: any, qty: any, isRemove: any) {
    // const cartResult = await this.repository.AddCartItem(customerId, product, qty, isRemove);
    //    return FormateData(cartResult);
  }

  async ManageOrder(customerId: string, order: any) {
    // const orderResult = await this.repository.AddOrderToProfile(customerId, order);
    return FormateData({ message: 'succes' });
  }

  async SubscribeEvents(payload: any) {
    console.log('Triggering.... Customer Events');

    payload = JSON.parse(payload);

    const { event, data } = payload;

    const { userId, product, order, qty } = data;

    switch (event) {
      case 'ADD_TO_WISHLIST':
      case 'REMOVE_FROM_WISHLIST':
        this.AddToWishlist(userId, product);
        break;
      case 'ADD_TO_CART':
        this.ManageCart(userId, product, qty, false);
        break;
      case 'REMOVE_FROM_CART':
        this.ManageCart(userId, product, qty, true);
        break;
      case 'CREATE_ORDER':
        this.ManageOrder(userId, order);
        break;
      default:
        break;
    }
  }
}
