"use client";

interface Props {
  error: Error;
}

export default function HelloError({ error }: Props) {
  return (
    <>
      <p>Something went wrong!</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
}
