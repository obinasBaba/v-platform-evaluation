import React from 'react';
import s from './copyrights.module.scss';
import 'swiper/css';
import { Link, Paper, Stack } from '@mui/material';
import NextLink from 'next/link';
import { AccordionScaffold } from '@/components/accordion-scaffold'; // import ArrowUp from '@/public/assets/arrow-up.svg';

type Props = {
  items: string[];
  title: string;
};

const Copyrights = ({ title, items = [] }: Props) => {
  return (
    <AccordionScaffold title={title}>
      <Stack component={Paper} className={s.items}>
        {[1, 2, 3].map((item, index) => (
          <Stack key={index} direction="row" gap=".1rem">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
              aliquam architecto asperiores at atque, consequatur cum deserunt
              eaque earum eius eveniet fugiat hic impedit in ipsa iure nesciunt
              officia placeat provident, quaerat quas quidem, quis quos vitae!
              Corporis, harum.
            </li>
            <Link href="/" component={NextLink}>
              Click here
            </Link>
          </Stack>
        ))}
      </Stack>
    </AccordionScaffold>
  );
};

export default Copyrights;
