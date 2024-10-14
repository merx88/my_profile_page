import Image from "next/image";
import Intro from "@/components/Intro";
import CommitStatus from "@/components/CommitStatus";
import meLogo from "@/assets/images/meLogo.png";
import MyStack from "@/components/MyStacks";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-[760px]">
        <div className="inline-flex justify-center items-center gap-[9.094px]">
          <Image aria-hidden src={meLogo} alt="File icon" width={32} />
          <div className="text-black font-inter text-[20px] font-bold leading-normal">{`Mer's Page`}</div>
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Intro />

        <div className="inline-flex items-center gap-[12px]">
          <MyStack />
          <Contact />
        </div>

        <CommitStatus />
      </main>
      <footer className="text-black font-inter text-[20px] font-bold leading-normal">
        Made by me ❤️
      </footer>
    </div>
  );
}
