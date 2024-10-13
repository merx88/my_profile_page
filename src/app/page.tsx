import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <div>{`Mer's Page`}</div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img src="https://ghchart.rshah.org/000000/merx88" />
        <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=merx88&show_icons=true&hide_border=true&title_color=000000&icon_color=000000&layout=compact"
          alt="merx88's GitHub Stats"
        />
        <Image
          aria-hidden
          src="https://nextjs.org/icons/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
