import mongoose from "mongoose";

const Schema = mongoose.Schema

const EmailCodeSchema = new Schema({
  email: String,
  code: String,
  createdAt: { type: Date, expires: '10m', default: Date.now }
});

export const EmailCode = mongoose.model("email-code" , EmailCodeSchema) 