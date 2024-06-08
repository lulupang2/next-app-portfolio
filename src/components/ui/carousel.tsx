import Image from 'next/image';
import React, { Fragment } from 'react';

import {
  FreeMode,
  Navigation,
  Thumbs,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import Spinner from './spinner';

const Carousel = ({
  imgs,
  thumb,
}: {
  thumb: string;
  imgs: string[];
}) => {
  const [thumbsSwiper, setThumbsSwiper] =
    React.useState(null);
  const [loading, setLoading] = React.useState<boolean[]>(
    new Array(imgs.length + 1).fill(true)
  );

  const handleSwiper = (swiper: SwiperType) =>
    setThumbsSwiper(swiper as any);
  const handleImageLoad = (index: number) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <Fragment>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper"
      >
        <SwiperSlide>
          {loading[0] && <Spinner />}

          <Image
            src={thumb}
            alt={'work images'}
            fill
            // className="skeleton"
            onLoadingComplete={() => handleImageLoad(0)}
          />
        </SwiperSlide>
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            {loading[index + 1] && <Spinner />}

            <Image
              src={img}
              alt={'work images'}
              fill
              // className="skeleton"
              onLoadingComplete={() =>
                handleImageLoad(index + 1)
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={handleSwiper}
        slidesPerView={3.5}
        watchSlidesProgress={true}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbSwiper"
      >
        <SwiperSlide>
          {loading[0] && <Spinner />}

          <Image
            src={thumb}
            alt={'work thumbnail images'}
            fill
            className="skeleton"
            onLoadingComplete={() => handleImageLoad(0)}
          />
        </SwiperSlide>
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            {loading[index + 1] && <Spinner />}

            <Image
              src={img}
              alt={'work thumbnail images'}
              fill
              className="skeleton"
              onLoadingComplete={() => handleImageLoad(0)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default Carousel;
