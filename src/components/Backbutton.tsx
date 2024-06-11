"use client";

import { useRouter } from "next/navigation";

export default function Backbutton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="ml-auto block bg-third px-3 py-2 text-sm"
    >
      뒤로가기
    </button>
  );
}
