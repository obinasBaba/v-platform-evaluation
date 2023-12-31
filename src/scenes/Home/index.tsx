import React from 'react';
import s from './home.module.scss';
import BirthdayCard from '@/components/birthday-card';
import EndorsementCard from '@/components/endorsement-card';
import { Container, Stack } from '@mui/material';
import BlogPost from '@/components/blog-post';
import BlogCard from '@/components/blog-card';
import SliderCategories from '@/components/slider-categories';
import Head from 'next/head';
import SliderFiles from '@/components/slider-file';

const Home = () => {
  const items = [
    'General',
    'Category Name',
    'Two category',
    'Three category',
    'Eight category',
    'Nine category',
    'Ten',
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Henok Page</title>
      </Head>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Stack direction="row" gap="1rem" flexWrap="wrap" width="100%">
            <BirthdayCard
              name="Henoke Getachew"
              birthdate={new Date('1982-10-10')}
            />

            <EndorsementCard
              name="Henoke Getachew"
              birthdate={new Date('1982-10-10')}
              description=""
            />
          </Stack>

          <br />
          <br />

          <BlogCard
            description=""
            name="Henoke Getachew"
            birthdate={new Date('1982-10-10')}
          />

          <br />
          <br />

          <Container maxWidth="lg" sx={{ m: 0 }}>
            <SliderCategories title="Categories" items={items} />

            <SliderCategories title="Sub-Categories" items={items} />

            <SliderCategories title="Levels" items={items} />
            <SliderFiles title="Files" numberOfFiles={20} />
          </Container>

          <br />
          <br />

          <BlogPost />
        </div>
      </div>
    </>
  );
};

export default Home;
