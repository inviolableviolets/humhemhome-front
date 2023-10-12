import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { PostRepository } from "../services/post.repository";
import { useCallback, useMemo } from "react";
import {
  createPostAsync,
  editPostAsync,
  getPostAsync,
  deletePostAsync,
} from "../redux/posts.slice";
import { Post } from "../models/post";
import { url } from "../config";

export function usePosts() {
  const { posts } = useSelector((state: RootState) => state.posts);

  const dispatch: AppDispatch = useDispatch();

  const repo: PostRepository = useMemo(() => new PostRepository(url), []);

  const handleLoadPosts = useCallback(async () => {
    await dispatch(getPostAsync({ repo, url: url + "posts" }));
  }, [repo, dispatch]);

  const handleCreatePost = async (post: FormData) => {
    await dispatch(createPostAsync({ repo, post }));
  };

  const handlePaging = async (url: string) => {
    await dispatch(getPostAsync({ repo, url }));
  };

  const loadFiltered = async (region: string) => {
    await dispatch(getPostAsync({ repo, url, region }));
  };

  const handleEditPost = async (data: Partial<Post>) => {
    await dispatch(editPostAsync({ repo, data }));
  };

  const handleDeletePost = async (id: Post["id"]) => {
    await dispatch(deletePostAsync({ repo, id }));
  };

  return {
    posts,
    handleLoadPosts,
    handlePaging,
    handleCreatePost: handleCreatePost,
    loadFiltered,
    handleEditPost,
    handleDeletePost,
  };
}
