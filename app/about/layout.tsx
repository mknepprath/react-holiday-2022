import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <Link href="/">Home</Link>
      <div>{children}</div>
    </main>
  );
}
