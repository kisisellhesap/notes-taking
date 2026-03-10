import Aside from "@/app/components/aside";
import Header from "@/app/components/header";

const MainLayout = ({
  children,
  notes,
  detail,
  notesBtn,
}: {
  children: React.ReactNode;
  notes: React.ReactNode;
  detail: React.ReactNode;
  notesBtn: React.ReactNode;
}) => {
  const arr = Array.from({ length: 1 });
  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen">
      <Aside />
      <div className="flex flex-col  w-full h-full">
        <Header />

        <div className="h-[calc(100vh-109px)] md:h-[calc(100vh-135.4px)] lg:h-[calc(100vh-83px)] grid-cols-[repeat(12,minmax(auto,1fr))] w-full hidden lg:grid">
          <div className="col-start-1 col-end-4 min-w-62.5 border-r border-Neutral-200 dark:border-Neutral-700 pl-8 pr-4 lg:py-5 overflow-y-auto h-full scrollbar-hide">
            {notes}
          </div>
          <div
            className={`col-start-4 col-end-10 w-full h-[calc(100vh-109px)] md:h-[calc(100vh-135.4px)] bg-white dark:bg-Neutral-950 ${arr.length === 0 ? "hidden" : "block"}`}
          >
            {detail}
          </div>

          <div
            className={`col-start-10 col-end-13 hidden lg:block min-w-50 pl-4 pr-8 py-5 ${arr.length === 0 ? "hidden" : "block border-l border-Neutral-200 dark:border-Neutral-700"} `}
          >
            {notesBtn}
          </div>
        </div>
      </div>
    </div>

    //     <div className="h-[calc(100vh-109px)] md:h-[calc(100vh-135.4px)] w-full flex lg:hidden">
    //   {children}
    // </div>
  );
};

export default MainLayout;

{
  /* <div className="grid grid-cols-[repeat(8,minmax(28.88px,1fr))] md:grid-cols-[repeat(8,minmax(67px,1fr))] lg:grid-cols-[repeat(12,minmax(auto,1fr))] w-full h-full">
  <div className="col-start-1 col-end-9 lg:col-start-1 lg:col-end-4  min-w-62.5 border-r border-Neutral-200 dark:border-Neutral-700 px-4 py-5 md:px-8 md:py-6 lg:pl-8 lg:pr-4 lg:py-5 overflow-y-auto h-full scrollbar-hide">
    {listSide}
  </div>

  <div
    className={`px-4 py-5 md:px-8 md:py-6 ${activeContent || activeParams ? "absolute" : "hidden"} left-0 top-15 w-full h-[calc(100vh-109px)] md:h-[calc(100vh-135.4px)] z-10 bg-white dark:bg-Neutral-950 lg:static lg:block lg:col-start-4  ${infoSide ? " lg:col-end-10" : " lg:col-end-13"}`}
  >
    {activeParams ? <ComponentContent type={searchParams.get("search") ? "search" : "tags"} /> : contentSide}
  </div>

  {infoSide && (
    <div
      className={`col-start-10 col-end-13 hidden lg:block min-w-50 pl-4 pr-8 py-5 ${infoSide && "border-l border-Neutral-200 dark:border-Neutral-700"}`}
    >
      {infoSide}
    </div>
  )}
</div>; */
}
