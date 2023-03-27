import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className=" h-[10vh] bg-[#06202A] flex justify-between p-7 sticky top-0 z-50">
      <div className="">
        <h1 className="text-4xl font-medium ">HIMANSHU SINGH</h1>
      </div>
      {/* flex-grow to use up as much space as you possibly can */}
      <div className="flex flex-grow justify-evenly max-w-5xl">
        <HeaderItem title="ABOUT" link="#" />
        <HeaderItem title="EDUCATION" link="#education" />
        <HeaderItem title="PUBLICATIONS" link="#publications" />
        <HeaderItem title="EXPERIENCE" link="#experience" />
        <HeaderItem title="PROJECTS" link="#projects" />
      </div>
    </header>
  );
}

export default Header;
