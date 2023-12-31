import React from 'react';
import s from './gallery.module.scss';
import 'swiper/css';
import { Paper, Stack, Typography } from '@mui/material';
import Thumbnail from '@/public/assets/video-default.jpeg';
import Image from 'next/image';
import { AccordionScaffold } from '@/components/accordion-scaffold';
import clsx from 'clsx';

type Props = {
  numberOfImg: number;
  title: string;
  hasFeatured?: boolean;
};

const Gallery = ({ title, numberOfImg = 5, hasFeatured = true }: Props) => {
  return (
    <AccordionScaffold title={title}>
      <Paper className={s.gallery}>
        {Array.from(Array(numberOfImg), (_, i) => i + 1).map((item, index) => (
          <div
            key={index}
            className={clsx([
              s.img_wrap,
              hasFeatured && index === 0 && s.featured,
            ])}
          >
            <Image src={Thumbnail} alt="thumbnail" />

            {index === numberOfImg - 1 && numberOfImg > 4 && (
              <Stack className={s.more}>
                <Typography>+ 3</Typography>
                <Typography variant="h6">More</Typography>
              </Stack>
            )}
          </div>
        ))}
      </Paper>
    </AccordionScaffold>
  );
};

export default Gallery;
