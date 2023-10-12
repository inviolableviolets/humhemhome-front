import { Post } from "../models/post";
import { PostRepository } from "../services/post.repository";

export type ApiResponse = Post[];
// {
// items: Post[];
// next: string | null;
// previous: string | null;
// count: number;
// };

export type GetPostPayload = {
  repo: PostRepository;
  url: string;
  region?: string;
};
