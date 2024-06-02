import Header from "./header";
import Image from "next/image";

export default function UnderConstruction() {
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">This Webpage is currently</h1>
                <Image src={'/images/under-construction.jpg'} width={1920} height={1080} alt='under-construction' />
                </div>
            </div> 
            </div>
        </section>
    );
  }