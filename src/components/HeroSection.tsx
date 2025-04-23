import logo from "../assets/mimini-logo.svg";
import bgBottom from "../assets/bg.svg";
import arrow from "../assets/arrow.svg";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full  h-screen bg-[#000]"
        style={{ backgroundImage: `url(${bgBottom})` }}
      >
        <div className="w-[1220px] pt-[50px] m-auto ">
          <div className="flex  justify-between items-center bg-[#000] text-white">
            <button className="cursor-pointer ">
              <img src={logo} alt="" />
            </button>
            <button className="bg-[#fff] w-[142px] cursor-pointer py-3 px-4 rounded-[10px] text-black text-[15px] ">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center border items-center text-center  h-[calc(100vh-130px)] w-full ">
          <p className="text-[15px] text-[#BABABA]  mb-2">
            🔥 Receive & Send money on your terms.
          </p>
          <h1 className="text-transparent bg-clip-text leading-[4.5rem] bg-gradient-to-r from-white to-[#8A8A8A] text-[59px] font-[700]">
            Join The Waitlist for <br /> Mimoni Today!
          </h1>
          <p className="text-[15px] text-[#BABABA] w-[45%] ">
            We believe everyone has the right to when and how they want to send
            or receive money, so we built Mimoni, a platform that allows you to
            send or receive money on your own terms.
          </p>

          <form action="" className="w-[40%] relative mt-8 ">
            <div className="flex justify-between items-center w-full gap-2 ">
              <input
                type="email"
                placeholder="Your email address"
                name="recipient"
                // value={formData.recipient}
                // onChange={handleChange}
                // onBlur={() =>
                //   validateField("recipient", formData.recipient)
                // }
                className={`p-[11px] pl-5 pr-3 border text-[#BABABA] placeholder-[#BABABA] text-[15px] bg-[#59595999] border-[#59595999] w-[73%]  outline-none rounded-[10px]`}
              />

              <button className="bg-[#fff]  w-[27%] cursor-pointer py-[11px] px-4 rounded-[10px] text-black text-[15px] ">
                Get Started
              </button>
              <img
                className="absolute right-[-5rem] bottom-[8px] "
                src={arrow}
                alt=""
              />
            </div>
          </form>
        </div>
        {/* <img src={bgBottom} className="absolute bottom-0 z-10" alt="" /> */}
      </div>
    </>
  );
};

export default HeroSection;
