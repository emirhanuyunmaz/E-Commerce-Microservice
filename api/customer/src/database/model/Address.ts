import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    street: String,
    postalCode: String,
    city: String,
    country: String,
  },
  { timestamps: true }
);

export const Customer = mongoose.model('address', AddressSchema);
