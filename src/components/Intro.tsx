import Image from "next/image";
import me from "@/assets/images/me.png";
import Link from "next/link";

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
          <div className="flex w-[426px] justify-end items-center gap-[14px]">
            <Link href="https://github.com/merx88">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_1_20)">
                  <path
                    d="M10 0.247498C4.475 0.247498 0 4.725 0 10.2475C0 14.6667 2.865 18.4142 6.8375 19.735C7.3375 19.8292 7.52083 19.52 7.52083 19.2542C7.52083 19.0167 7.5125 18.3875 7.50833 17.5542C4.72667 18.1575 4.14 16.2125 4.14 16.2125C3.685 15.0583 3.0275 14.75 3.0275 14.75C2.12167 14.13 3.0975 14.1425 3.0975 14.1425C4.10167 14.2125 4.62917 15.1725 4.62917 15.1725C5.52083 16.7017 6.97 16.26 7.54167 16.0042C7.63167 15.3575 7.88917 14.9167 8.175 14.6667C5.95417 14.4167 3.62 13.5567 3.62 9.725C3.62 8.63333 4.0075 7.74166 4.64917 7.04166C4.53667 6.78916 4.19917 5.7725 4.73667 4.395C4.73667 4.395 5.57417 4.12666 7.48667 5.42C8.28667 5.1975 9.13667 5.0875 9.98667 5.0825C10.8367 5.0875 11.6867 5.1975 12.4867 5.42C14.3867 4.12666 15.2242 4.395 15.2242 4.395C15.7617 5.7725 15.4242 6.78916 15.3242 7.04166C15.9617 7.74166 16.3492 8.63333 16.3492 9.725C16.3492 13.5667 14.0117 14.4125 11.7867 14.6583C12.1367 14.9583 12.4617 15.5717 12.4617 16.5083C12.4617 17.8467 12.4492 18.9217 12.4492 19.2467C12.4492 19.5092 12.6242 19.8217 13.1367 19.7217C17.1375 18.41 20 14.66 20 10.2475C20 4.725 15.5225 0.247498 10 0.247498Z"
                    fill="#181717"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_20">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="https://merx88.github.io/">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_1_22)" />
                <defs>
                  <pattern
                    id="pattern0_1_22"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1_22"
                      transform="scale(0.00195312)"
                    />
                  </pattern>
                  <image
                    id="image0_1_22"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.7508 0.961243H18.8175L12.1175 8.61958L20 19.0387H13.8283L8.995 12.7187L3.46333 19.0387H0.395L7.56167 10.8471L0 0.962076H6.32833L10.6975 6.73874L15.7508 0.961243ZM14.675 17.2037H16.3742L5.405 2.70041H3.58167L14.675 17.2037Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1_24)">
                <path
                  d="M17.0392 17.0433H14.0775V12.4025C14.0775 11.2958 14.055 9.87167 12.5342 9.87167C10.99 9.87167 10.7542 11.0758 10.7542 12.3208V17.0433H7.7925V7.5H10.6375V8.80083H10.6758C11.0733 8.05083 12.04 7.25917 13.4842 7.25917C16.485 7.25917 17.04 9.23417 17.04 11.805L17.0392 17.0433ZM4.4475 6.19417C3.49417 6.19417 2.72833 5.4225 2.72833 4.47333C2.72833 3.525 3.495 2.75417 4.4475 2.75417C5.3975 2.75417 6.1675 3.525 6.1675 4.47333C6.1675 5.4225 5.39667 6.19417 4.4475 6.19417ZM5.9325 17.0433H2.9625V7.5H5.9325V17.0433ZM18.5208 0H1.47583C0.66 0 0 0.645 0 1.44083V18.5592C0 19.3558 0.66 20 1.47583 20H18.5183C19.3333 20 20 19.3558 20 18.5592V1.44083C20 0.645 19.3333 0 18.5183 0H18.5208Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_24">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

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
