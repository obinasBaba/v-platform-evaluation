import React from 'react';
import s from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import { IconButton, Paper } from '@mui/material';
import clsx from 'clsx';
import {
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
} from '@mui/icons-material';
import FileIcon from '@/public/assets/icon-excel file.svg';
import Image from 'next/image';
import { AccordionScaffold } from '@/components/accordion-scaffold';

type Props = {
  numberOfFiles: number;
  title: string;
};

const SliderFiles = ({ title, numberOfFiles = 15 }: Props) => {
  return (
    <AccordionScaffold title={title}>
      <Paper className={s.swiper_wrap}>
        <IconButton color="primary" className={clsx(['left'])} size="large">
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
            prevEl: '.left',
            nextEl: '.right',
          }}
        >
          {Array.from(Array(numberOfFiles), (_, i) => i + 1).map(
            (item, index) => (
              <SwiperSlide key={item} className={s.slide}>
                <div className={s.file_item}>
                  <Image src={FileIcon} alt="" />
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
        <IconButton color="primary" className={clsx(['right'])} size="large">
          <ArrowCircleRightTwoTone fontSize="large" />
        </IconButton>
      </Paper>
    </AccordionScaffold>
  );
};

export default SliderFiles;
