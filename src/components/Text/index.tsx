import React, { FunctionComponent } from "react";

import styles from "./styles.css";

const Text: FunctionComponent<{ value: string }> = ({ value = "" }) => {
  return <h1 className={styles.header}>{value}</h1>;
};

export default Text;
