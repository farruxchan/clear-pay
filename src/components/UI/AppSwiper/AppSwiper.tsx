// @ts-nocheck

import React from "react";
import { Swiper, useSwiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { colors } from "../../../theme/colors";
import { AppIcon } from "../AppIcon/AppIcon";
import { SlidesWrapper } from "../../ServicePayments/ServicePayments.style";

interface IAppSwiperProps extends SwiperOptions {
  children: React.ReactNode;
}

export const AppSwiper: React.FC<IAppSwiperProps> = ({
  children,
  ...swiperParams
}) => {
  const swiper = useSwiper();

  return (
    <Swiper {...swiperParams}>
      <SlidesWrapper>{children}</SlidesWrapper>
      {/* <AppIcon
        className="nextSlideBtn _noSelect"
        name="slider-right"
        height="40"
        width="40"
        fill={colors.primeColor}
        onClick={() => swiper.slideNext(200)}
      /> */}
    </Swiper>
  );
};
