import HorizontalLine from "../line/horizontal-line";
import Logo from "../logo";
import Nav from "./nav";
import Tags from "./tags";

const Aside = () => {
  return (
    <aside className="min-w-60 w-68  px-4 py-3  min-h-screen hidden lg:block border-r border-Neutral-200 dark:border-Neutral-800">
      <div className="py-3">
        <Logo />
      </div>
      <div className="flex flex-col gap-2">
        <Nav />
        <HorizontalLine />
        <Tags />
      </div>
    </aside>
  );
};

export default Aside;
