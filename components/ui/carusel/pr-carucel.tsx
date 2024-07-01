"use client";
import { rightGreenIcon } from "@/assets/icons/global";
import ProductCard from "@/components/ui/card/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Thumbs } from "swiper/modules";
import Link from "next/link";
import "./pr-carucel.css";

const ProductsCarucel = ({ title }: any) => {
  return (
    <div>
      <div className="container flex justify-between items-center my-3 sm:my-4 md:my-8 lg:my-10">
        <b className="text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px]">
          {title}
        </b>
        <Link
          href={"/products"}
          className="text-[#1EB91E] border-[#1EB91E] bg-white border flex items-center rounded-lg px-[20px] py-[4px] sm:py-[6px] md:py-[8px] lg:py-[13px] gap-2 text-[12px] sm:text-[14px] md:text-[16px]"
        >
          Hammasi {rightGreenIcon}
        </Link>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Mousewheel, Thumbs]}
          navigation
          // mousewheel={true}
          spaceBetween={0}
          slidesPerView={4}
          breakpoints={{
            // 0: { slidesPerView: 1, spaceBetween: 10, centeredSlides: true },
            320: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1900: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsCarucel;
