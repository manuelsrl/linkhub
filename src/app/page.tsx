import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-neutral-300">
      <Link href="/login">
        <Button size="lg">Sign in / Sign up</Button>
      </Link>
    </main>
  );
}
