import React, { useState } from 'react';
import s from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import { Button, IconButton, Paper } from '@mui/material';
import clsx from 'clsx';
import {
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@mui/icons-material';
import { AccordionScaffold } from '@/components/accordion-scaffold'; // import ArrowUp from '@/public/assets/arrow-up.svg';
// import ArrowUp from '@/public/assets/arrow-up.svg';
// import ArrowDown from '@/public/assets/arrow-down.svg.svg';

type Props = {
  items: string[];
  title: string;
};

const SliderCategories = ({ title, items }: Props) => {
  const [selectedIdx, setSelectedIdx] = useState<number>();

  return (
    <AccordionScaffold title={title}>
      <Paper className={s.swiper_wrap}>
        <IconButton
          color="primary"
          className={clsx([`left_${title}`])}
          size="large"
        >
          <ArrowCircleLeftTwoTone fontSize="large" />
        </IconButton>
        <Swiper
          loop
          slidesPerView={'auto'}
          spaceBetween={50}
          grabCursor={true}
          modules={[Scrollbar, Navigation]}
          className={s.swiper}
          navigation={{
            prevEl: `.left_${title}`,
            nextEl: `.right_${title}`,
          }}
        >
          {items
            .concat(items)
            .concat(items)
            .concat(items)
            .map((item, index) => (
              <SwiperSlide key={item} className={s.slide}>
                <Button
                  variant="contained"
                  className={s.btn}
                  onClick={() => {
                    setSelectedIdx(index);
                  }}
                  startIcon={
                    index === selectedIdx ? (
                      <RadioButtonChecked />
                    ) : (
                      <RadioButtonUnchecked />
                    )
                  }
                >
                  {item}
                </Button>
              </SwiperSlide>
            ))}
        </Swiper>
        <IconButton
          color="primary"
          className={clsx([`right_${title}`])}
          size="large"
        >
          <ArrowCircleRightTwoTone fontSize="large" />
        </IconButton>
      </Paper>
    </AccordionScaffold>
  );
};

export default SliderCategories;
