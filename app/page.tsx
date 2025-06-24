import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Artistly</h1>
        <p className="mt-2 text-lg">Book talented performers for your events</p>
        <Link href="/artists" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
          Explore Artists
        </Link>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {['Singers', 'Dancers', 'Speakers', 'DJs'].map((cat) => (
          <div key={cat} className="bg-gray-100 p-4 rounded text-center shadow">
            <h2 className="text-xl font-semibold">{cat}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
