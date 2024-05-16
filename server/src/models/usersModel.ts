import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from './interfaces';

interface UserDocument extends User, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  methods: {
    type: [string];
    required: true;
  };
}

const Schema = mongoose.Schema;

const userSchema = new Schema<UserDocument, Model<UserDocument>>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        //ret.password = '************';
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const userModel = mongoose.model<UserDocument>('User', userSchema);
export default userModel;
