import { useState } from 'react';
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";


export default function Section({title, children, ...props}) {

  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}