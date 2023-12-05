// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import slideData from "./../data/slideData.json";
// import required modules
import { Autoplay } from 'swiper/modules';

export default () => {
  return (<><Swiper loop={true}
    autoplay={{
      delay: 1200,
      disableOnInteraction: true,
    }}
    autoHeight={true}
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      480: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 5,
      },


      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

    }}

    modules={[Autoplay]}

    className="prose max-w-[300px] sm:max-w-[480px] md:max-w-[560px] tb:max-w-[800px] "

  >{slideData.map((item) => (<SwiperSlide><div className='flex flex-col items-center gap-3'><img src={item.urlImg} alt={item.slideAlt} width={300} height={400} /><a className='link-1 uppercase' target='_blank' href={item.pathCont}>смотреть</a></div></SwiperSlide>))}

  </Swiper ></>

  );
};