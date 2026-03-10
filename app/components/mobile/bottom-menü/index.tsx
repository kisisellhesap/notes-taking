import { DownloadBoxIcon, HomeIcon, SearchIcon, SettingsIcon, TagIcon } from "@/app/components/icons/icons";
import LinkBtn from "./link-btn";
import { usePathname, useSearchParams } from "next/navigation";
import VerticalLine from "../../line/vertical-line";

const MobileAside = () => {
  const path = usePathname();
  const params = useSearchParams();

  const searchParam = params.get("search") || params.get("tags");

  // console.log("MobileAside path:", path);
  // console.log("MobileAside params:", params);
  // console.log("MobileAside searchParam:", searchParam);
  return (
    <div className="px-4 py-3 sm:px-8 sm:py-3 flex justify-between items-center bg-white dark:bg-Neutral-950 border-t border-Neutral-200 dark:border-Neutral-800 shadow-[0_-4px_6px_rgba(240,240,240,0.6)] dark:shadow-[0_-4px_6px_rgba(0,0,0,0.3)] fixed bottom-0 z-20 w-full">
      <LinkBtn href="/notes" text="Home" icon={<HomeIcon />} isActive={path === "/notes" && !searchParam} />
      <VerticalLine />
      <LinkBtn href="?search=open" text="Search" icon={<SearchIcon />} isActive={searchParam === "open"} />
      <VerticalLine />
      <LinkBtn
        href="/notes/archived"
        text="Archived"
        icon={<DownloadBoxIcon />}
        isActive={path === "/notes/archived" && !searchParam}
      />
      <VerticalLine />
      <LinkBtn href="/notes?tag=true" text="Tags" icon={<TagIcon />} isActive={searchParam === "true"} />
      <VerticalLine />
      <LinkBtn
        href="/settings"
        text="Settings"
        icon={<SettingsIcon />}
        isActive={path === "/settings" && !searchParam}
      />
    </div>
  );
};

export default MobileAside;
