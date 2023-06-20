import Image from "next/image";
import "./page.scss";

export default function Home() {
  return (
    <main className="main">
      <Image
        src="/images/logo.svg"
        alt="Skilla"
        width={109}
        height={28}
      />
    </main>
  );
}
