import mongoose, { Error, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from './interfaces';

interface UserDocument extends User, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  isValidPassword: (newPassword: string) => Promise<boolean>;
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
        delete ret.password;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error as Error);
  }
});

userSchema.methods.isValidPassword = async function (newPassword: string) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw error;
  }
};

const userModel = mongoose.model<UserDocument>('User', userSchema);
export default userModel;
