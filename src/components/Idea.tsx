import layer2 from "../assets/images/layer2.png";
import image from "../assets/images/image.png";
import Link from "next/link";
import Image from "next/image";

export default function Idea() {
  const imageStyle = {
    borderRadius: "10px 10px 10px 10px",
  };
  return (
    <div className="flex w-[760px] h-auto p-[36px_40px] flex-col items-start gap-[10px] shrink-0 rounded-[20px] bg-gradient-to-t from-[rgba(0,0,0,0.10)] to-[rgba(255,255,255,0.10)] shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
      <div className="flex w-[679px] flex-col items-start gap-[16px]">
        <span className="text-black font-inter text-[20px] font-bold leading-normal">
          💁‍♂️ Layer 2 Recommendation System
        </span>

        <div className="text-[#454545] font-inter text-[16px] font-medium leading-normal">
          🎯 주제 : 레이어 2를 시각적으로 비교하고 추천해주는 시스템 <br />
          <br />
          🏞️ 배경 : 단일 시퀀서의 중앙화 문제를 시각화 하려고 했으나 지난번 Pos
          밸리데이터 추천 시스템을 보고 이보다는 좀더 포괄적인 내가 원하는
          지표를 가지고 레이어2를 시각화 하여 보여주고 이를 추천해주는 시스템을
          만들면 좋겠다고 생각했음 <br />
          <br />
          ✅ 필요성 : 현재 이더리움의 확장성을 위해 다양한 레이어2가 존재하나
          이를 비교해서 시각화 해주는 프로그램은 존재하지 않음 (물론 모든 레이어
          2 솔루션을 대쉬보드 형태로 보여주는 사이트는 존재함 :
          https://l2beat.com/scaling/summary) 그리고 개발자, 투자자, 밸리데이터
          참여자 등등 해당 레이어 2의 정보를 확인하고자 하는 정보는 다를
          것이기에 이를 시각화하면 좋을 것 같다고 생각함 <br />
          <br />
          <br />
          🛣️ 계획 : 이더리움은 현재 확장성, 보안성, 2.0 향해
          나아가고 있는 중임, merge를 통해 PoS를 도입했지만 아직 속도 개선을
          완벽하게 하지는 못했고 비탈릭이 레이어2 솔루션을 적극적으로 활용할
          것이라 밝힘 최근 업그레이드에서도 레이어2를 위한 블롭을 도입함 <br />
          <br />
          레이어2의 목적은 이더리움 확장성으로 같으나 확장성에 도달하는 방식이
          달라 많이 생겨났음, 데이터를 어디에 저장할지, 무슨 방식으로 트랜잭션을
          검증 할 것인지 등등 <br />
          <br />
          방식으로 인한 차이가 레이어 2의 특성을 만들어 내고 강점과 약점이
          생기게 됨.
        </div>
        <Image src={layer2} alt="page image" width={700} style={imageStyle} />
        <div className="text-[#454545] font-inter text-[16px] font-medium leading-normal">
          위 사진은 아비트럼 레이어2 솔루션의 간략한 정보임
          <br />
          위의 정보를 아래 그림과 함께 살펴보면
        </div>
        <Image src={image} alt="page image" width={700} style={imageStyle} />
        <div className="text-[#454545] font-inter text-[16px] font-medium leading-normal">
        TVL : 에치된 코인 수 -> (투자자)말그대로 예치된 코인의 수 투자자들은 예치된 코인이 많을 수록 코인가치가 올라가기 때문에 중요함<br/>
        <br/>
        Daily TPS : 트랜잭션 속도 -> (개발자) 앱을 만드는 개발자들은 속도가 빨라야 더 나은 ux를 제공할수있기에 중요함<br/>
        <br/>
        30D tx count : 사용량 -> 당연히 사용량은 해당 레이어2의 활성화 정도를 보는거기 때문에 누구에게나 중요함<br/>
        <br/>
        DATA AVAILABILITY : 데이터 가용성 -> 검증을 최대한 할수있어야 하기 때문에 데이터를 접근 하는 정도는 누구에게나 중요함<br/>
        <br/>
        STATE VALIDATION : 상태 증명 -> 블록체인에 악의적인 사용자를 걸러내고 잘 저장하기 위해 상태를 검증하는 것은 중요함<br/>
        <br/>
        SEQUENCER fAILURE : 시퀀서 실패 -> 레이어2는 트랜잭션을 모아 보내기 때문에 이는 실패지점이 될수있기에 중요함<br/>
        <br/>
        PROPOSER fALURE : 제안자 실패 ->(밸리데이터) 자유로운 검증자 참여는 필수이기에 중요함<br/>
        <br/>
        이와 같은 지표들로 레이어 2 솔루션을 비교 가능하고 사용자가 직접 비교하며 자신에게 맞는 레이어 2 솔루션을 고를 수있도록 지원하는 시스템을 만들고자 함
        </div>
      </div>
    </div>
  );
}
