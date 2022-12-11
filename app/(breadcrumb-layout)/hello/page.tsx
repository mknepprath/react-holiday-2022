export default async function HelloPage() {
  // let res = await fetch(`${process.env.BASE_URL}/api/hello`);
  let res = await fetch("https://httpstat.us/500");
  let data = await res.json();

  // proc the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Hello {data.name}</h1>
    </div>
  );
}
