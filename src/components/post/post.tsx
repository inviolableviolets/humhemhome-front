import { Post } from "../../models/post";
import styles from "./post.module.scss";
type Props = {
  item: Post;
};
function Card({ item }: Props) {
  return (
    <li className={styles.card}>
      <img
        loading="lazy"
        src={item.images[0].url}
        alt={`Imagen de ${item.title}`}
      />
      <div>
        <span>{item.title}</span>
        <span>{item.description}</span>
      </div>
    </li>
  );
}
export default Card;
