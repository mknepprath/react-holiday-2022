import React from "react";

import Timer from "./timer";

export default function AboutPage() {
  console.log("where does this log?");
  return (
    <div>
      <h1>About Michael Knepprath</h1>

      <p>
        How about I just copy the information from the about page on my website?
        Here you go:
      </p>

      <p>
        Michael Knepprath is a Staff Software Engineer at{" "}
        <a href="https://www.walmartlabs.com">Walmart</a> (prev.{" "}
        <a href="https://hyper.online">Hyper</a>,{" "}
        <a href="https://whcc.com">WHCC</a>). He loves his family and working on
        side projects related to technology, design, film, video games, and so
        on.
      </p>

      <span>
        This time is from a a client component: <Timer />
      </span>
    </div>
  );
}
