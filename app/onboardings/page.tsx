'use client';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.string().required(),
  fee: yup.string().required(),
  location: yup.string().required(),
});

export default function OnboardingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Submitted! Check console.");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Artist Onboarding</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="w-full border p-2 rounded" />
        <p className="text-red-500">{errors.name?.message}</p>

        <textarea {...register("bio")} placeholder="Bio" className="w-full border p-2 rounded" />
        <p className="text-red-500">{errors.bio?.message}</p>

        <select {...register("category")} className="w-full border p-2 rounded">
          <option value="">Select Category</option>
          <option value="DJ">DJ</option>
          <option value="Singers">Singers</option>
        </select>
        <p className="text-red-500">{errors.category?.message}</p>

        <input {...register("fee")} placeholder="Fee Range" className="w-full border p-2 rounded" />
        <p className="text-red-500">{errors.fee?.message}</p>

        <input {...register("location")} placeholder="Location" className="w-full border p-2 rounded" />
        <p className="text-red-500">{errors.location?.message}</p>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
