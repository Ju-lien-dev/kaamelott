"use client";

export default function Header() {
  return (
    <header className="max-h-[500px] w-full  ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="w-1/3 flex justify-start"></div>

        <div className="xs:w-1/3 flex justify-center">
          <img
            src="/assets/kaamelott_circle.png"
            alt="Logo"
            className="object-contain min-w-[150px] min-h-[150px] max-w-full"
          />
        </div>

        <div className="md:w-1/3 flex justify-end"></div>
      </div>
    </header>
  );
}
