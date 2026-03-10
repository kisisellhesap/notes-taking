"use client";
import { TagIcon } from "@/app/components/icons/icons";
import Button from "../button";
import { useSearchParams, useRouter } from "next/navigation";

const Tags = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-preset-4 text-Neutral-500 p-2">Tags</h2>

      <div className="flex flex-col gap-1">
        <Button text="Work" Icon={TagIcon} />
        <Button text="Personal" Icon={TagIcon} />
        <Button text="Ideas" Icon={TagIcon} />
        <button
          onClick={() => {
            const params = new URLSearchParams(searchParams?.toString() ?? "");
            params.set("tag", "deneme");
            router.push(`${window.location.pathname}?${params.toString()}`);
          }}
        >
          deneme
        </button>
      </div>
    </div>
  );
};

export default Tags;
