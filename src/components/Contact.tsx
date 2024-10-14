export default function Contact() {
  return (
    <div className="w-[105px] h-[300px] px-[27px] py-7 bg-gradient-to-br from-[#ff0072] to-[#ffbb00] rounded-tl-[30px] rounded-tr-[20px] rounded-bl-[10px] rounded-br-[30px] shadow justify-start items-center gap-2.5 inline-flex">
      <div className="w-[50px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch text-center text-black text-4xl font-bold font-['Inter']">
          📞
        </div>
        <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
          <div className="w-[50px] h-[50px] relative">
            <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-white/25 rounded-[10px]"></div>
            <div className="w-6 h-6 left-[13px] top-[13px] absolute"></div>
          </div>
          <div className="w-[50px] h-[50px] relative">
            <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-white/25 rounded-[10px]"></div>
            <div className="w-6 h-6 left-[13px] top-[13px] absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
