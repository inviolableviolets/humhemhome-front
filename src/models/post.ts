import { Image } from "../types/image";

export type Post = {
  id: string;
  title: string;
  description: string;
  images: Image[];
};
