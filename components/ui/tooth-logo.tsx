import Image from "next/image";
import Link from "next/link";

const App = () => <Image
  src="/images/tooth-outline.svg"
  alt="Clinica Nuyad"
  className="h-12 w-12"
  width={100}
  height={44}
  priority
/>

export default function ToothLogo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <App />
    </Link>
  );
}
