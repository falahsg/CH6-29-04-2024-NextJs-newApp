import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <h1 className="mb-12">Hello FSW1 KM6</h1>

    <Link href="/login" className="bg-orange-700 p-10">Login</Link>

      <a href="/login" className="bg-red-600 p-10">
        Login
      </a>
    </>
  );
}
