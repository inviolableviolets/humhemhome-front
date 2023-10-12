import styles from "./PageTemplate.module.scss";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
}
