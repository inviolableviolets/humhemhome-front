import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../models/post";
import { PostRepository } from "../services/post.repository";
import { ApiResponse, GetPostPayload } from "../types/api.response";

export type PostsState = {
  getPostsState: "loading" | "loaded" | null;
  posts: Post[];
  count: number;
  next: string | null;
  previous: string | null;
};

const initialState: PostsState = {
  getPostsState: null,
  posts: [] as Post[],
  count: 0,
  next: null,
  previous: null,
};

export const getPostAsync = createAsyncThunk<ApiResponse, GetPostPayload>(
  "posts/get",
  async ({ repo, url }) => {
    const response = await repo.getAll(url);
    return response;
  }
);

export const createPostAsync = createAsyncThunk<
  Post,
  { repo: PostRepository; post: FormData }
>("posts/create", async ({ repo, post }) => {
  return await repo.create(post);
});

export const editPostAsync = createAsyncThunk<
  Post,
  { repo: PostRepository; data: Partial<Post> }
>("posts/update", async ({ repo, data }) => {
  return await repo.update(data);
});

export const deletePostAsync = createAsyncThunk<
  string,
  { repo: PostRepository; id: Post["id"] }
>("post/delete", async ({ id, repo }) => {
  const response = await repo.delete(id);
  return response ? id : "";
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostAsync.fulfilled, (state, { payload }) => ({
      ...state,
      posts: payload,
      getPostsState: "loaded",
    }));

    builder.addCase(getPostAsync.pending, (state) => ({
      ...state,
      getPostsState: "loading",
    }));
    builder.addCase(createPostAsync.fulfilled, (state, { payload }) => ({
      ...state,
      posts: [...state.posts, payload],
    }));
    builder.addCase(editPostAsync.fulfilled, (state, { payload }) => ({
      ...state,
      posts: [payload],
    }));
    builder.addCase(deletePostAsync.fulfilled, (state, { payload }) => {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    });
  },
});

export default postsSlice.reducer;
export const ac = postsSlice.actions;
