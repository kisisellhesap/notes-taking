"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchIcon, SettingsIcon } from "../icons/icons";

const Header = () => {
  const path = usePathname();

  const headerTitle = [
    {
      path: "/notes",
      title: "All Notes",
    },
    {
      path: "/archived",
      title: "Archived Notes",
    },
    {
      path: "/settings",
      title: "Settings",
    },
  ];
  const title = headerTitle.find((item) => item.path === path || path.startsWith(item.path))?.title;
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-Neutral-200 dark:border-Neutral-700">
      <h2 className="text-Neutral-950 text-preset-1 dark:text-white">{title}</h2>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center px-4 py-3 border border-Neutral-300 dark:border-Neutral-600 radius-8 text-Neutral-500 dark:text-Neutral-400">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by title, content, or tags…"
            className="text-preset-5 outline-none border-none w-75"
          />
        </div>
        <Link href="/settings/color-theme">
          <SettingsIcon className="text-Neutral-500 dark:text-Neutral-400" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
