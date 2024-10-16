import Image from "next/image";
import waktaplay from "../assets/images/V-Stage Player.png";
import Link from "next/link";

export default function Project2() {
  const imageStyle = {
    borderRadius: "10px 10px 0px 0px",
    background: "lightgray 0px -0.18px / 99.874% 121.899% no-repeat",
    boxShadow: "0px 8px 24px 0px rgba(0, 255, 200, 0.25)",
  };
  return (
    <div className="inline-flex items-center gap-[8px]">
      {" "}
      <div className="flex w-[476px] pt-[23px] pr-[65px] pb-0 pl-[65px] flex-col items-start gap-[10px] rounded-[20px] bg-gradient-to-r from-[#FFF] via-[#91FFED] to-[#00F6FF] shadow-[0px_8px_24px_rgba(0,0,0,0.15)]">
        {" "}
        <div className="flex flex-col items-start gap-[8px] self-stretch">
          <div className="flex justify-center items-center gap-[175px] self-stretch">
            <div className="w-[200px] h-[24px] flex">
              <p className="text-[#191919] font-inter text-[20px] font-bold leading-normal">
                Comming Soon
              </p>
            </div>
            <Link href="https://github.com/waktaplay/waktaplay_music_desktop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <g clip-path="url(#clip0_23_26)">
                  <path
                    d="M10.5 0.247498C4.975 0.247498 0.5 4.725 0.5 10.2475C0.5 14.6667 3.365 18.4142 7.3375 19.735C7.8375 19.8292 8.02083 19.52 8.02083 19.2542C8.02083 19.0167 8.0125 18.3875 8.00833 17.5542C5.22667 18.1575 4.64 16.2125 4.64 16.2125C4.185 15.0583 3.5275 14.75 3.5275 14.75C2.62167 14.13 3.5975 14.1425 3.5975 14.1425C4.60167 14.2125 5.12917 15.1725 5.12917 15.1725C6.02083 16.7017 7.47 16.26 8.04167 16.0042C8.13167 15.3575 8.38917 14.9167 8.675 14.6667C6.45417 14.4167 4.12 13.5567 4.12 9.725C4.12 8.63333 4.5075 7.74166 5.14917 7.04166C5.03667 6.78916 4.69917 5.7725 5.23667 4.395C5.23667 4.395 6.07417 4.12666 7.98667 5.42C8.78667 5.1975 9.63667 5.0875 10.4867 5.0825C11.3367 5.0875 12.1867 5.1975 12.9867 5.42C14.8867 4.12666 15.7242 4.395 15.7242 4.395C16.2617 5.7725 15.9242 6.78916 15.8242 7.04166C16.4617 7.74166 16.8492 8.63333 16.8492 9.725C16.8492 13.5667 14.5117 14.4125 12.2867 14.6583C12.6367 14.9583 12.9617 15.5717 12.9617 16.5083C12.9617 17.8467 12.9492 18.9217 12.9492 19.2467C12.9492 19.5092 13.1242 19.8217 13.6367 19.7217C17.6375 18.41 20.5 14.66 20.5 10.2475C20.5 4.725 16.0225 0.247498 10.5 0.247498Z"
                    fill="#0F0F0F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_23_26">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="flex w-auto flex-col items-start gap-[4px]">
            <div className="text-[#454545] font-inter text-[10px] font-medium leading-normal">
              ❌ Completed project
            </div>
            <div className="text-[#454545] font-inter text-[10px] font-medium leading-normal">
              ❌ Not available
            </div>
          </div>
          <Image
            src={waktaplay}
            alt="page image"
            width={1438}
            style={imageStyle}
          />
        </div>
      </div>
      <div className="flex w-[266px] h-[250px] p-[24px_31px] flex-col items-start gap-[12px] flex-shrink-0 rounded-[20px] bg-gradient-to-bl from-[#FFF] via-[#91FEEC] to-[#00F6FF] shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
        <div className="text-black font-inter text-[20px] font-bold leading-normal">
          🎧 Waktaplay
        </div>
        <div className="text-[#474747] font-inter text-[14px] font-medium leading-normal">
          Music desktop app for Waktaverse fans
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="125"
          viewBox="0 0 125 125"
          fill="none"
        >
          <rect width="17.5" height="125" fill="url(#paint0_linear_12_751)" />
          <rect
            x="26.6667"
            y="14.1667"
            width="17.5"
            height="96.6667"
            fill="url(#paint1_linear_12_751)"
          />
          <rect
            x="53.3333"
            y="29.1666"
            width="17.5"
            height="66.6667"
            fill="url(#paint2_linear_12_751)"
          />
          <rect
            x="80"
            y="14.1667"
            width="17.5"
            height="96.6667"
            fill="url(#paint3_linear_12_751)"
          />
          <rect
            x="107.5"
            width="17.5"
            height="125"
            fill="url(#paint4_linear_12_751)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_12_751"
              x1="8.75"
              y1="0"
              x2="8.75"
              y2="125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#47F998" />
              <stop offset="1" stop-color="#60E2D2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_12_751"
              x1="35.4167"
              y1="14.1667"
              x2="35.4167"
              y2="110.833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#47F998" />
              <stop offset="1" stop-color="#60E2D2" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_12_751"
              x1="62.0833"
              y1="29.1666"
              x2="62.0833"
              y2="95.8333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#47F998" />
              <stop offset="1" stop-color="#60E2D2" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_12_751"
              x1="88.75"
              y1="14.1667"
              x2="88.75"
              y2="110.833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#47F998" />
              <stop offset="1" stop-color="#60E2D2" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_12_751"
              x1="116.25"
              y1="0"
              x2="116.25"
              y2="125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#47F998" />
              <stop offset="1" stop-color="#60E2D2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
