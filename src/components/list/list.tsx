import { useEffect } from "react";
import { usePosts } from "../../hooks/use.posts";
import Post from "../post/post";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { BounceLoader } from "react-spinners";
import styles from "./list.module.scss";

export function List() {
  const { handleLoadPosts, posts } = usePosts();

  const { getPostsState } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  return (
    <>
      {getPostsState === "loading" && (
        <div className={styles.spinner}>
          <BounceLoader color="crimson" />
        </div>
      )}
      {getPostsState === "loaded" && (
        <ul>
          {posts.map((item) => (
            <Post key={item.id} item={item}></Post>
          ))}
        </ul>
      )}
    </>
  );
}
