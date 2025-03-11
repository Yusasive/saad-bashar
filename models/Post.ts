import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  categories: string[];
  year: number;
  image: string;
  description: string;
  users: string[];
  timeline: string;
  role: string;
  collaborators: string[];
  companyLogo: string;
  website: string;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    categories: { type: [String], required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    users: { type: [String], default: [] },
    timeline: { type: String, required: false },
    role: { type: String, required: false },
    collaborators: { type: [String], default: [] },
    companyLogo: { type: String, required: false }, 
    website: { type: String, required: false }, 
  },
  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model<IPost>("Post", PostSchema);
