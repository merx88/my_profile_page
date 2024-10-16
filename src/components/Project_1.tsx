import Image from "next/image";
import wallet from "../assets/images/wallet.png";
import Link from "next/link";

export default function Project1() {
  const imageStyle = {
    borderRadius: "10px 10px 0px 0px",
    background: "lightgray -0.06px 0px / 100.035% 135.849% no-repeat",
    boxShadow: "0px 8px 24px 10px rgba(122, 160, 255, 0.25)",
  };

  return (
    <div className="inline-flex items-center gap-[8px]">
      {" "}
      <div className="flex w-[476px] pt-[23px] pr-[65px] pb-[0px] pl-[65px] flex-col items-start gap-[10px] rounded-[20px] bg-gradient-to-r from-[#1554F0] via-[#16378A] to-[#171717] shadow-[0px_8px_24px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col items-start gap-[8px] self-stretch">
          <div className="flex justify-center items-center gap-[175px] self-stretch">
            <div className="w-[200px] h-[24px] flex">
              <p className="text-white font-inter text-[20px] font-bold leading-normal">
                iamPocket
              </p>
              <p className="text-white font-inter text-[20px] font-light leading-normal">
                .com
              </p>
            </div>
            <Link href="https://github.com/yhl125/iampocket-wallet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <g clip-path="url(#clip0_18_19)">
                  <path
                    d="M10.5 0.247498C4.975 0.247498 0.5 4.725 0.5 10.2475C0.5 14.6667 3.365 18.4142 7.3375 19.735C7.8375 19.8292 8.02083 19.52 8.02083 19.2542C8.02083 19.0167 8.0125 18.3875 8.00833 17.5542C5.22667 18.1575 4.64 16.2125 4.64 16.2125C4.185 15.0583 3.5275 14.75 3.5275 14.75C2.62167 14.13 3.5975 14.1425 3.5975 14.1425C4.60167 14.2125 5.12917 15.1725 5.12917 15.1725C6.02083 16.7017 7.47 16.26 8.04167 16.0042C8.13167 15.3575 8.38917 14.9167 8.675 14.6667C6.45417 14.4167 4.12 13.5567 4.12 9.725C4.12 8.63333 4.5075 7.74166 5.14917 7.04166C5.03667 6.78916 4.69917 5.7725 5.23667 4.395C5.23667 4.395 6.07417 4.12666 7.98667 5.42C8.78667 5.1975 9.63667 5.0875 10.4867 5.0825C11.3367 5.0875 12.1867 5.1975 12.9867 5.42C14.8867 4.12666 15.7242 4.395 15.7242 4.395C16.2617 5.7725 15.9242 6.78916 15.8242 7.04166C16.4617 7.74166 16.8492 8.63333 16.8492 9.725C16.8492 13.5667 14.5117 14.4125 12.2867 14.6583C12.6367 14.9583 12.9617 15.5717 12.9617 16.5083C12.9617 17.8467 12.9492 18.9217 12.9492 19.2467C12.9492 19.5092 13.1242 19.8217 13.6367 19.7217C17.6375 18.41 20.5 14.66 20.5 10.2475C20.5 4.725 16.0225 0.247498 10.5 0.247498Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_18_19">
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
            <div className="text-[#E0E0E0] font-inter text-[10px] font-medium leading-normal">
              ✅ Completed project
            </div>
            <div className="text-[#E0E0E0] font-inter text-[10px] font-medium leading-normal">
              ❌ Not available
            </div>
          </div>
          <Image
            src={wallet}
            alt="page image"
            width={1438}
            style={imageStyle}
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-gradient-to-br from-[#1554F0] via-[#002682] to-[#001038] shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex w-[266px] h-[250px] p-[24px_31px] flex-col items-start gap-[12px] flex-shrink-0">
        <div className="text-white font-inter text-[20px] font-bold leading-normal">
          💸 iamPocket
        </div>
        <div className="text-[#E0E0E0] font-inter text-[14px] font-medium leading-normal">
          Simplify crypto journeys with iamPocket wallet
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="122"
          viewBox="0 0 125 122"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.6553 21.0782C14.0676 32.6703 3.53347 44.3965 2.24629 47.1346C-0.682319 53.3677 -0.75561 62.0892 2.07527 67.5268C3.26626 69.8162 14.4844 81.9232 27.002 94.4296L49.7605 117.17C49.7605 117.17 54.8056 121.806 58.7433 121.795C62.6604 121.784 67.6665 117.17 67.6665 117.17L95.6883 89.0336C111.101 73.5579 124.101 59.3357 124.577 57.4286C126.222 50.847 123.341 45.6207 111.081 32.9386C97.119 18.4959 90.7686 14.6108 84.8412 16.8848C82.7066 17.705 71.8258 27.6814 60.6642 39.0545C33.4929 66.7405 28.4007 70.9185 21.8334 70.9185C14.2493 70.9185 9.0685 65.2666 9.0685 56.9938C9.0685 50.9781 9.99075 49.6815 26.2462 32.826C35.6947 23.03 45.4363 14.1436 47.8977 13.0798C53.5442 10.6378 59.8183 12.622 63.2691 17.9393C66.129 22.347 71.1876 22.3763 73.8062 18.001C75.237 15.6113 74.2719 14.0511 67.3658 7.59445C60.3817 1.06532 58.3662 0 52.9823 0C46.9861 0 45.8349 0.888024 25.6553 21.0782ZM95.3921 31.0022C96.1601 33.4473 95.2364 35.3436 91.6771 38.6259C85.9604 43.897 85.7466 46.7276 90.6892 51.7166C95.5188 56.5945 97.0213 56.4851 102.21 50.8763C104.563 48.3325 107.362 46.2512 108.427 46.2512C111.22 46.2512 115.952 50.9457 115.952 53.7162C115.952 57.3654 62.4216 111.003 58.7784 111.003C55.4788 111.003 28.9183 85.4337 28.9183 82.2578C28.9183 81.2511 31.8392 78.1676 35.4076 75.4064C38.9775 72.6452 52.312 60.0403 65.0418 47.3952C85.6352 26.9398 88.5271 24.5902 91.2771 26.0764C92.9781 26.9953 94.8287 29.2123 95.3921 31.0022ZM98.8689 45.8488C98.1023 49.8665 93.0483 50.3152 93.0483 46.3638C93.0483 44.1576 94.0286 43.1678 96.2136 43.1678C98.3986 43.1678 99.2216 43.9988 98.8689 45.8488ZM77.1242 50.215C75.805 51.5485 74.7254 53.2829 74.7254 54.0692C74.7254 56.0195 77.3655 55.8823 78.5977 53.8688C79.1703 52.933 81.4881 52.657 84.0319 53.2213C89.1196 54.3498 90.0831 51.8584 85.5146 49.3886C81.5018 47.221 79.9383 47.3751 77.1242 50.215ZM81.0545 64.2229C81.227 69.1764 80.8376 74.8561 80.1902 76.8402C78.6206 81.6473 70.6898 84.7939 60.142 84.7939C50.1087 84.7939 48.9757 88.3244 58.7433 89.1461C77.2479 90.7002 89.1287 78.6225 85.6596 61.7839C83.7388 52.4612 80.7017 54.0692 81.0545 64.2229ZM46.4044 82.3781C44.4958 85.3181 44.34 86.8274 45.6822 89.3589C47.8 93.355 50.3148 92.1417 49.1589 87.6815C48.6108 85.5632 49.2017 83.8997 50.8294 82.9809C53.9595 81.2125 54.1153 78.6271 51.0935 78.6271C49.8537 78.6271 47.7435 80.3152 46.4044 82.3781Z"
            fill="#1554F0"
          />
        </svg>
      </div>
    </div>
  );
}
