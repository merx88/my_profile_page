import Image from "next/image";
import me from "@/assets/images/me.png";

export default function Intro() {
  return (
    <div className="inline-flex items-center gap-[12px]">
      <div className="flex w-[250px] h-[250px] justify-center items-end gap-[10px] shrink-0 rounded-[20px_30px_10px_30px] bg-[linear-gradient(0deg,_rgba(0,0,0,0.20)_0%,_rgba(0,0,0,0.20)_100%),_linear-gradient(180deg,_#A58FFF_0%,_#1D008E_100%)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]">
        <div className="flex w-[207px] flex-col justify-center items-start shrink-0">
          <span className="text-white font-inter text-[20px] font-bold leading-normal">{`HI , I’m SeungHoon`}</span>
          <Image aria-hidden src={me} alt="File icon" width={192} />
        </div>
      </div>
      <div className="flex w-[498px] h-[250px] p-[32px_36px] flex-col justify-center items-start gap-4 shrink-0 rounded-[30px_20px_20px_10px] bg-[linear-gradient(76deg,_rgba(255,217,0,0.43)_0%,_rgba(255,255,255,0.27)_32.53%)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]">
        <div className="flex w-[426px] justify-end items-center gap-[14px]"></div>
        <div className="flex flex-col items-start gap-[12px] self-stretch">
          <span className="text-black font-inter text-[20px] font-bold leading-normal">
            {`Programmers with back-to-basics, evidence-based problem-solving skills`}
          </span>
          <span className="text-[#474747] font-inter text-[12px] font-medium leading-normal">
            {`I don't know what I'm going to write, but I'll write it down first,
          and maybe next time I get a chance. It's too hard, it's annoying, I
          can't say no, it's a jana assignment, but what the heck, you're
          introducing yourself twice today.`}
          </span>
        </div>
      </div>
    </div>
  );
}
