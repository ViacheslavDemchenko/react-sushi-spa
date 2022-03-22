import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import s from './Slider.module.scss';


const Slider = () => {

    return(
      <Swiper
          className={s.swiper}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{delay: 5000}}
          loop={true}
          pagination={{ 
            bulletClass: s.dot,
            bulletActiveClass: s.dotActive,
            clickable: true,
          }}
        >
        <SwiperSlide className={s.slider}>
          <img src="https://i.artfile.me/wallpaper/28-01-2018/1920x1080/eda-ryba--moreprodukty--sushi--rolly-imb-1298244.jpg" alt="" />
          <div className={s.overlay}></div>
          <div className={s.content}>
            <h1 className={s.title}>Счастливые часы
              <span className={s.discount}>скидка 15%</span>
            </h1>
            <h2 className={s.subtitle}>с 11:00 до 16:00 в будние дни</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s1.1zoom.ru/b5050/225/Seafoods_Sushi_465275_1920x1200.jpg" alt="" />
          <div className={s.overlay}></div>
          <div className={s.content}>
            <h1 className={s.title}>Бесплатная доставка</h1>
            <h2 className={s.subtitle}>при заказе от 1500 рублей</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mybiggeneva.com/wp-content/uploads/2019/10/Tanuki.jpg" alt="" />
          <div className={s.overlay}></div>
          <div className={s.content}>
            <h1 className={s.title}>Каждый 10 ролл в подарок</h1>
            <h2 className={s.subtitle}>при заказе от 2000 рублей</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://kidbooms.ru/wp-content/uploads/3/9/9/399d39db6e7218a4ecc281cfa67b08f6.jpg" alt="" />
          <div className={s.overlay}></div>
          <div className={s.content}>
            <h1 className={s.title}>На каждый 5 заказ
              <div className={s.discount}>скидка 10%</div>
            </h1>
            <h2 className={s.subtitle}>с 10:00 до 18:00 в выходные дни</h2>
          </div>
        </SwiperSlide>
      </Swiper> 
    );
}

export { Slider };