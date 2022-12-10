export default async function HelloPage() {
  let req = await fetch(`${process.env.BASE_URL}/api/hello`);
  let res = await req.json();

  // proc the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Hello {res.name}</h1>
    </div>
  );
}
