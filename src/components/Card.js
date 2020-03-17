import React from "react";
import { CardStyle } from "./elements";

export default function Card({ title, value }) {
  return (
    <CardStyle>
      <h2>{title}</h2>
      <p>{value}</p>
    </CardStyle>
  );
}
