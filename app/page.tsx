import Header from "./components/header";
import Page from "./connection/page";

export default function Home() {
  return (
    <>
    <Header />
    <div className="py-4 px-4 md:px-30">
    <div className="flex flex-col items-center bg-white">
    <Page />
    </div>
    <div className="pt-10 flex justify-center mt-4">
    <a href="" className="bg-blue-400 hover:bg-blue-500 duration-300 ease-in p-[10px]  shadow-md rounded-lg shadow-md ">Changer de citation</a>
    </div>
    </div>
    </>
 
  );
}

