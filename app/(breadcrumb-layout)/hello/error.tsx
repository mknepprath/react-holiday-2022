"use client";

import { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function HelloError({ error, reset }: Props) {
  useEffect(() => {
    // Log the error to the console
    console.error(error);
  }, [error]);

  return (
    <>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </>
  );
}
