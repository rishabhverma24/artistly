import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/artists">Artists</Link>
      <Link href="/onboarding">Onboard</Link>
    </nav>
  );
}
