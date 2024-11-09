import Image from "next/image";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const navItems = [
  {
    id: 1,
    label: 'NATIONAL'
  },
  {
    id: 2,
    label: 'INTERNATIONAL'
  },
  {
    id: 3,
    label: 'INDUSTRY'
  },
];

const univItems = [
  { 
    src: '/assets/images/appalachian-state-university-logo.jpg',
  },
  { 
    src: '/assets/images/cologne-business-school.jpg',
  },
  { 
    src: '/assets/images/burgundy-school-of-business.png',
  },
  { 
    src: '/assets/images/bangkok-university-logo.jpeg',
  },
  { 
    src: '/assets/images/esc-dijon-logo.jpg',
  },
  { 
    src: '/assets/images/cau-university-logo.webp',
  },
  { 
    src: '/assets/images/asia-pacific-university-logo.avif',
  },
  { 
    src: '/assets/images/beijing-normal-university-logo.png',
  },
  { 
    src: '/assets/images/bournemoth-university-logo.jpg',
  },
]

const Footer = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <footer className="flex flex-col justify-center items-center gap-[14px] text-[#5E5E5E] w-full py-[80px]">
      <Image
        src={'/assets/icons/partnership-icon.png'}
        width={100}
        height={100}
        alt={''}
      />
      <div className="flex flex-col gap-[48px] w-full justify-center items-center">
        <div>
          <h1 className="text-[32px] font-medium">STRATEGIC PARTNERSHIP</h1>
          <p>to sustainably improve students academic and experience</p>
        </div>
        <ul className="flex gap-2">
          {navItems.map(item => (
            <li
              key={'navbar-footer-item-' + item.id}
              className={`${activeTab === item.id ? 'text-[#F28901] border-b-2 border-[#F28901]' : 'text-[#5E5E5E]'} cursor-pointer`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap w-2/3 gap-6 justify-center items-center">
          {univItems.map((item, key) => (
            <div key={'university-' + key} className="relative w-fit h-[80px]">
              <Image
                src={item.src}
                width={'0'}
                height={'0'}
                sizes="100vw"
                className="w-auto h-full"
                alt={''}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            className="flex items-center gap-2 hover:underline text-[#1185C7] font-medium"
          >
            View Details
            <FaChevronRight />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;