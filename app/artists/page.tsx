import React from "react";

async function getArtists() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch artists");
  return res.json();
}

export default async function ArtistsPage() {
  const data: unknown = await getArtists();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Artists</h1>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
