import { Fragment } from "react";
import Switch from "react-switch";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import styles from "./ThemeToggler.module.scss";
import useTheme from "../../hooks/useTheme";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Fragment>
      <label className={styles.toggleContainer}>
        <span className={styles.label}>Switch Theme</span>
        <Switch
          // use context values
          onChange={toggleTheme}
          checked={theme === "dark"}
          // Non-toggled mode:light
          checkedIcon={false}
          checkedHandleIcon={
            <MdDarkMode
              style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
            />
          }
          offColor="#eab308"
          // Toggled mode:dark
          uncheckedIcon={false}
          uncheckedHandleIcon={
            <MdLightMode
              style={{ color: "black", paddingLeft: "5px", fontSize: "20px" }}
            />
          }
          onColor="#eab308"
        ></Switch>
      </label>
    </Fragment>
  );
};

export default ThemeToggler;
