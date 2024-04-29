import Link from "next/link";

export default function LoginPage() {
  return (
    <form action="" className="bg-amber-300 ">
        <input type="text" className="border-solid border-spacing-8 mr-5"/>
        <input type="password" />
        <button className="bg-amber-950">Submit</button>
        <Link href="/about-us" className="bg-lime-500 p-10">About Us</Link>
    </form>
  )
}
