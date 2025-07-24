"use client";

const Header = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-3">
    <div className="flex items-center  text-[#111518]">
      <img src="/logo1.png" alt="Logo1" className="h-8 w-8 mr-2" />
      <img src="/logo.png" alt="Logo" className="h-9 w-36 mr-3" />
    </div>
    <div className="flex flex-1 justify-end gap-8">
      <div className="flex items-center gap-9">
        <a className="text-[#111518] text-sm font-medium leading-normal" href="/">Home</a>
        <a className="text-[#111518] text-sm font-medium leading-normal" href="/dashboard">Dashboard</a>
        <a className="text-[#111518] text-sm font-medium leading-normal" href="/tests">Tests</a>
      </div>
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style={{ backgroundImage: 'url("/prof1.jpg")' }}
      ></div>
    </div>
  </header>
);

export default Header;
