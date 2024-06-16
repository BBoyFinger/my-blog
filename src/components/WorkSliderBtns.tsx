"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type Props = {
  containerStyles: any;
  btnStyles: any;
  iconStyles: any;
};

const WorkSliderBtns = (props: Props) => {
  const swiper = useSwiper();
  return (
    <div className={props.containerStyles}>
      <button className={props.btnStyles}>
        <PiCaretLeftBold
          className={props.iconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={props.btnStyles}>
        <PiCaretRightBold
          className={props.iconStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
