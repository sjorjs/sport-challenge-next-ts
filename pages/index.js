import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/fixtures" className="text-blue-700 hover:text-blue-900">
        Go to Fixtures page
      </Link>
    </div>
  );
}
