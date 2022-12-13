interface PageProps {
  searchParams?: { code: string };
}

import { notFound } from "next/navigation";

async function fetchUser() {
  let res = await fetch(`https://httpstat.us/404`);
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}

export default async function HelloPage({ searchParams }: PageProps) {
  let user = await fetchUser();

  if (!user) {
    return notFound();
  }

  // // let res = await fetch(`${process.env.BASE_URL}/api/hello`);
  // let res = await fetch(`https://httpstat.us/${searchParams?.code || 200}`);

  // // fake the loading state
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // if (!res.ok) {
  //   throw new Error(res.statusText);
  // }

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
}
