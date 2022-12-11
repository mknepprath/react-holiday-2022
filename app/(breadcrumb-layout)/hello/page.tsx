interface PageProps {
  searchParams?: { code: string };
}

export default async function HelloPage({ searchParams }: PageProps) {
  // let res = await fetch(`${process.env.BASE_URL}/api/hello`);
  let res = await fetch(`https://httpstat.us/${searchParams?.code || 200}`);

  // fake the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return (
    <div>
      <h1>{`${res.statusText} (${res.status})`}</h1>
    </div>
  );
}
