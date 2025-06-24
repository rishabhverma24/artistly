'use client';
import { useState, useEffect } from 'react';

export default function ArtistList() {
  const [artists, setArtists] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('/data/artists.json')
      .then((res) => res.json())
      .then((data) => {
        setArtists(data);
        setFiltered(data);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Artist Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((artist: any) => (
          <div key={artist.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{artist.name}</h2>
            <p>{artist.category}</p>
            <p>{artist.price}</p>
            <p>{artist.location}</p>
            <button className="bg-blue-500 text-white mt-2 px-4 py-1 rounded">Ask for Quote</button>
          </div>
        ))}
      </div>
    </div>
  );
}
