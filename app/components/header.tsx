'use client';

export default function Header() {
 
  return (
        <header className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="w-1/3 flex justify-start">
       
        </div>

        <div className="w-1/3 flex justify-center">
          <img
            src="/assets/kaamelott_circle.png" 
            alt="Logo"
            className="size-fit"
          />
        </div>
        <div className="w-1/3 flex justify-end">

        </div>
      </div>
    </header>
   
  )
}
