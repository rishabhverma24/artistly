import React from "react";

async function getOnboardings() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch onboardings");
  return res.json();
}

export default async function OnboardingsPage() {
  const data: unknown = await getOnboardings();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Onboarding</h1>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
