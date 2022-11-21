import React from "react";
import classes from "./Card.module.css";

const Card: React.FC<{ className?: string; children?: React.ReactNode }> = (
  props
) => {
  const style = `${classes.Card} + ${props.className}`;

  return <div className={style}>{props.children}</div>;
};

export default Card;
