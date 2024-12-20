import styles from "./index.module.scss";
const Skeleton = ({ width = "100%", height = "20px", borderRadius = "4px" }) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    />
  );
};

export default Skeleton;
