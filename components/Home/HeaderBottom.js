import styles from "./HeaderBootom.module.css";

// ------------------------

const HeaderBottom = () => {
  return (
    <section className="relative">
      <div className={styles["bg__image"]} />
      {/* search box on image section */}

      <div className="absolute flex items-center justify-center">salam</div>
    </section>
  );
};
export default HeaderBottom;
