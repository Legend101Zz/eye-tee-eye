import mongoose, { Schema } from 'mongoose';
import { IModel } from '@core/interfaces/validationSchema';
import { IDesigner } from './designer.interface';

const ImageSchema: Schema<IModel> = new Schema({
  url: String,
  filename: String,
});

const ProductSchema: Schema<IDesigner> = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  profileImage: { type: String, required: true },
  Designs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
  image: [ImageSchema],
});

const designer = mongoose.model<IDesigner>('Product', ProductSchema);
// eslint-disable-next-line import/prefer-default-export
export { designer };
