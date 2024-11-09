"use client"

import Image from "next/image";
import { Banner, Footer, Header } from "@/components/organisms";
import { FaAngleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center text-center p-4 w-full">
        <h1 className="text-[#3cafe0] text-[28px]">WELCOME TO</h1>
        <h1 className="text-[#3cafe0] text-[28px] font-semibold">MASS COMMUNICATION PROGRAM</h1>
        <Banner />
        <div className="flex gap-4 w-full">
          <div className="flex flex-1 flex-col justify-center items-center rounded-xl p-4 shadow-[0_0_12px_#00000029]">
            <Image
              src={'/assets/icons/graduate-profile.png'}
              width={100}
              height={100}
              alt=""
            />
            <div className="flex flex-col gap-10 justify-between items-center w-full h-full">
              <div className="text-[#5e5e5e] text-center">
                <h2 className="font-semibold">GRADUATE PROFILE</h2>
                <p className="text-sm">Our programs are designed to shape future leaders. Explore our programs below.</p>
              </div>
              <div className="flex flex-col justify-center gap-4 text-sm w-full">
                <div className="border-t-2 border-[#5e5e5e] text-[#5e5e5e] text-left w-full p-4">
                  <h2 className="font-semibold">Mastering Communication: Crafting Proficient Graduates</h2>
                  <span className="text-xs">September 13, 2023</span>
                </div>
                <div className="border-t-2 border-[#5e5e5e] text-[#5e5e5e] text-left w-full p-4">
                  <h2 className="font-semibold">Empowering Tomorrow&apos;s Communicators: The Graduate Profile</h2>
                  <span className="text-xs">September 13, 2023</span>
                </div>
              </div>
              <div className="w-full text-[#5e5e5e] text-sm text-center">
                <div className="flex gap-1 cursor-pointer justify-center items-center">
                  <button
                    className="flex gap-1 items-center hover:underline"
                  >
                    <span>
                      View More 
                    </span>
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col space-x-2 justify-center items-center rounded-xl p-4 shadow-[0_0_12px_#00000029] bg-[#028ED5]">
            <Image
              src={'/assets/icons/prospect-career.png'}
              width={100}
              height={100}
              alt=""
            />
            <div className="flex flex-col gap-10 justify-center items-center">
              <div className="text-white text-center">
                <h2 className="font-semibold">PROSPECT CAREER</h2>
                <p className="text-sm">Our programs are designed to shape future leaders. Explore our programs below.</p>
              </div>
              <div className="flex flex-col justify-center gap-4 text-sm">
                <div className="w-[360px] rounded-xl bg-white text-[#5e5e5e] p-2">
                  Marketing Communication Specialist
                </div>
                <div className="w-[360px] rounded-xl bg-white text-[#5e5e5e] p-2">
                  Brand Strategy Specialist
                </div>
                <div className="w-[360px] rounded-xl bg-white text-[#5e5e5e] p-2">
                  Event Specialist
                </div>
                <div className="w-[360px] rounded-xl bg-white text-[#5e5e5e] p-2">
                  Media Planner Specialist
                </div>
                <div className="w-[360px] rounded-xl bg-white text-[#5e5e5e] p-2">
                  Brand Community Specialist
                </div>
              </div>
              <div className="w-full text-white text-sm text-center">
                <div className="flex gap-1 cursor-pointer justify-center items-center">
                  <button
                    className="flex gap-1 items-center hover:underline"
                  >
                    <span>
                      View More 
                    </span>
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
