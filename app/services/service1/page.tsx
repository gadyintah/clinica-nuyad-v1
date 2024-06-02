import UnderConstruction from "@/components/ui/under-construction"
import Image from "next/image"
import serviceImage from "@/public/images/1teeth-whitening.jpg"
import Header from "@/components/ui/header"


export default function TeethWhitening() {
    return (
        // <UnderConstruction />
        <section>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                <Image
                    src={serviceImage}
                    width={1000}
                    height={760}
                    className="hidden md:block"
                    alt="Teeth Whitening"
                />
            </div>
        </section>
    )
  }