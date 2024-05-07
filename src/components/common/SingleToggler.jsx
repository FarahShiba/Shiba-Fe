import { InnerMoon } from "@theme-toggles/react";
// DOCS: https://toggles.dev/docs/react

import useTheme from "../../hooks/useTheme";
import styles from "../../scss/components/_singleToggler.scss";

const SingleToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleContainer}>
      <InnerMoon
        className={theme === "dark" ? styles.darkToggle : styles.lightToggle}
        toggled={theme === "dark"}
        toggle={toggleTheme}
      />
    </div>
  );
};

export default SingleToggler;
