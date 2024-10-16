import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-[105px] h-[300px] px-[27px] py-7 bg-gradient-to-br from-[#ff0072] to-[#ffbb00] rounded-tl-[30px] rounded-tr-[20px] rounded-bl-[10px] rounded-br-[30px] shadow justify-start items-center gap-2.5 inline-flex">
      <div className="w-[50px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch text-center text-black text-4xl font-bold font-['Inter']">
          📞
        </div>
        <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
          <div className="w-[50px] h-[50px] relative">
            <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-white/25 rounded-[10px]">
              <div className="w-6 h-6 left-[13px] top-[13px] absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_33)">
                    <path
                      d="M24 5.457V19.366C24 20.27 23.268 21.002 22.364 21.002H18.545V11.73L12 16.64L5.455 11.73V21.003H1.636C1.42107 21.003 1.20825 20.9606 1.0097 20.8784C0.811145 20.7961 0.63075 20.6755 0.47882 20.5235C0.32689 20.3714 0.206404 20.191 0.124246 19.9924C0.0420884 19.7938 -0.000131068 19.5809 3.05652e-07 19.366V5.457C3.05652e-07 3.434 2.309 2.279 3.927 3.493L5.455 4.64L12 9.548L18.545 4.638L20.073 3.493C21.69 2.28 24 3.434 24 5.457Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_33">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[50px] h-[50px] relative">
            <Link href="https://x.com/jangseungh74037">
              <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-white/25 rounded-[10px]">
                <div className="w-6 h-6 left-[13px] top-[13px] absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.901 1.153H22.581L14.541 10.343L24 22.846H16.594L10.794 15.262L4.156 22.846H0.474L9.074 13.016L0 1.154H7.594L12.837 8.086L18.901 1.153ZM17.61 20.644H19.649L6.486 3.24H4.298L17.61 20.644Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
