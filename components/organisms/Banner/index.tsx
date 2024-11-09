import { Slider } from "@/components/molecules";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const ImageList = [
  "/assets/images/banner-1.png",
  "/assets/images/banner-1.png",
];

const Banner = () => {
  return (
    <Slider className="w-full">
      {ImageList.map((el, key) => (
        <SwiperSlide key={'slide-banner-' + key}>
          <div className="w-full h-auto">
            <Image
              width={'0'}
              height={'0'}
              sizes={'100vw'}
              className="w-full h-auto"
              src={el}
              alt={"banner-" + key}
            />
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Banner;