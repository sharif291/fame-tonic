import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full md:px-[210px] flex flex-wrap-reverse md:flex-nowrap justify-center md:justify-between items-start pb-[30px]">
      <div className="md:w-[52%] md:mr-[-160px] z-10 p-[20px] md:p-0">
        <h1 className="text-[25px] md:text-[35px] font-extrabold md:font-bold font-[urbanist] leading-[100%] text-center md:text-left px-[30px] md:px-0">
          Want to Turn Social Media Into a Profitable Career?
        </h1>

        <h2
          className="text-[25px] md:text-[35px]  font-extrabold md:font-bold font-[urbanist] text-[#00E7F9] leading-[100%] text-center md:text-left px-[20px] md:px-0"
          style={{
            textShadow: "#FC004E 0px 4px 4px",
          }}
        >
          Discover your way to success with Fametonic:
        </h2>

        <ul className="font-[figtree] font-medium md:font-semibold text-[16px] mt-[22px] md:mt-[16px] leading-[22px]">
          <li className="mb-[13px] flex items-center">
            <div>✨</div>
            <div className="ml-[10px]">
              Start growing your influence right away—no waiting required!
            </div>
          </li>
          <li className="mb-[13px] flex items-center">
            <div>✨</div>
            <div className="ml-[10px]">
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </div>
          </li>
          <li className="mb-[13px] flex items-center">
            <div>✨</div>
            <div className="ml-[10px]">
              Use a Personal AI Worker to boost your content
            </div>
          </li>
          <li className="mb-[13px] flex items-center">
            <div>✨</div>
            <div className="ml-[10px]">
              Learn from expert-led courses designed for aspiring influencers
            </div>
          </li>
        </ul>

        <div className="md:hidden px-[20px] text-center">
          <p className="mt-[30px] font-medium text-[12px] text-[#ABABAB]">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="mt-[12px] font-medium text-[10px] text-[#ABABAB]">
            Fametonic 2025 © All Rights Reserved.
          </p>
        </div>

        <div className="w-[313px] text-center m-auto md:m-0">
          <div
            className="flex justify-center items-center w-full h-[40px] bg-[#FC004E] font-[figtree] font-bold text-[20px] text-white rounded-[10px] mt-[30px]"
            style={{
              boxShadow: "#00E7F9 2px 2px 10px 0px",
            }}
          >
            <Link href="#" className=" font-bold text-[20px]">
              GET STARTED
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block ml-[10px] mt-[-5px]"
              >
                <path
                  d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </Link>
          </div>
          <p className=" mt-[10px] font-normal text-[12px] ">
            1-minute quiz for personalized Insights
          </p>
        </div>

        <div className="hidden md:block">
          <p className="mt-[30px] font-medium text-[12px] text-[#ABABAB]">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
          <p className="mt-[12px] font-medium text-[10px] text-[#ABABAB]">
            Fametonic 2025 © All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="md:w-[57%] flex justify-center">
        <Image
          src={"/hero-image.png"}
          alt="hero"
          width={666}
          height={679}
          className="mt-[-40px] md:mt-[-100px] w-[70%] h-auto md:w-[666px] md:h-[679px]"
        />
      </div>
    </div>
  );
};
export default Hero;
