import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./fonts";

const App = () => <Image
  src="/images/tooth-outline.svg"
  alt="Clinica Nuyad"
  className="h-12 w-12 rotate-[-15deg]"
  width={100}
  height={44}
  priority
/>

export default function ToothLogo() {
  return (
    <Link href="/" className="block" aria-label="tooth-logo-landing-page">
      <div className={`${lusitana.className} flex flex-row items-center leading-none text-black`}>
        <App />
        <p className="text-[44px] align-bottom">Clinica Nuyad</p>
      </div>
    </Link>
  );
}
