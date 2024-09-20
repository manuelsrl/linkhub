import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign up</Link>
        </nav>
      </div>
    </header>
  );
};
