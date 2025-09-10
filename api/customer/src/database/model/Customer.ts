import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    name:String,
    surname:String,
    email: String,
    password: String,
    phone: String,
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Customer = mongoose.model('customer', CustomerSchema);
