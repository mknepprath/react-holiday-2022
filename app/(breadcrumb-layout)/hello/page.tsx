export default async function HelloPage() {
  let req = await fetch("http://localhost:3000/api/hello");
  let res = await req.json();

  return (
    <div>
      <h1>Hello {res.name}</h1>
    </div>
  );
}
