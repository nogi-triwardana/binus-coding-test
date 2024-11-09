"use client"

import { Swiper } from 'swiper/react';
import SwiperInstance from "swiper";
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import classNames from 'classnames';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms';

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
    >
      <Image
        src={'/assets/icons/btn-next.svg'}
        width={40}
        height={40}
        alt="next-button-slider"
      />
    </button>
  );
};

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slidePrev()}
    >
      <Image
        src={'/assets/icons/btn-prev.svg'}
        width={40}
        height={40}
        alt="prev-button-slider"
      />
    </button>
  );
};

const Slider = ({ 
  className,
  children 
}: TSliderProps) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative flex justify-center items-center flex-col h-screen">
      <div className="flex flex-col items-end justify-end space-x-4 w-full h-[480px] absolute z-[1000]">
        <div className="flex flex-col pb-8 justify-between items-center w-full h-1/2">
          <div className="flex justify-between w-full h-fit">
            <PrevButton swiperRef={swiperRef} />
            <NextButton swiperRef={swiperRef} />
          </div>
          <Button
          >
            Learn More
          </Button>
        </div>
      </div>
      

      <Swiper 
        autoplay
        loop
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay, A11y]} 
        className={
          classNames("w-[480px] h-[480px] cursor-pointer", className)
        }
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;