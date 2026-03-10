import Link from "next/link";
import { ReactNode } from "react";

interface LinkBtnProps {
  text: string;
  icon: ReactNode;
  href: string;
  isActive: boolean;
}

const LinkBtn = ({ text, icon, href, isActive }: LinkBtnProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-col gap-1 p-1 items-center radius-4 w-20 text-Neutral-600 ${isActive && "bg-Blue-50 dark:bg-Neutral-700"}`}
    >
      <div className={` ${isActive && "text-Blue-500"}`}>{icon}</div>
      <span className={`text-preset-6 hidden md:block ${isActive && "text-Blue-500"}`}>{text}</span>
    </Link>
  );
};

export default LinkBtn;
