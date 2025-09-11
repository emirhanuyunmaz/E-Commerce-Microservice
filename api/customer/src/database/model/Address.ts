import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    street: String,
    postalCode: String,
    city: String,
    country: String,
    fullAddress: String,
  },
  { timestamps: true }
);

export const Address = mongoose.model('address', AddressSchema);
