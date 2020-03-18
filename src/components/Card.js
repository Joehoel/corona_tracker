import React from "react";
import { CardStyle } from "./elements";

export default function Card({ title, value, children }) {
  return (
    <CardStyle>
      <h2>{title || children}</h2>
      <p>{value}</p>
    </CardStyle>
  );
}
