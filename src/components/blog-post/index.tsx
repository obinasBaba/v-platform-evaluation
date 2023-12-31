import React from 'react';
import s from './blog-post.module.scss';
import 'swiper/css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { ExpandMore, FormatQuote } from '@mui/icons-material'; // import ArrowUp from '@/public/assets/arrow-up.svg';
import CardBlog from '@/public/assets/card-default.svg';
import Image from 'next/image';
import dynamic from 'next/dynamic'; // import VVersePlayer from '@/components/blog-post/video-player';
import Thumbnail from '@/public/assets/video-default.jpeg';
import Gallery from '@/components/gallery';
import Copyrights from '@/components/copyrights';

const VVersePlayer = dynamic(() => import('@/components/video-player'), {
  ssr: false,
});

type Props = {
  items: string[];
  title: string;
};

const BlogPost = () => {
  return (
    <Stack>
      <Typography variant="h4">2. Blog Post</Typography>
      <Accordion className={s.container} expanded>
        <AccordionSummary expandIcon={<ExpandMore />} className={s.summary}>
          <Stack direction="row" gap="1rem" width="100%" alignItems="center">
            <Typography variant="h5" className={s.title}>
              Details
            </Typography>
            <div className={s.line} />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Paper className={s.content}>
            <Typography variant="h5" gutterBottom>
              Lorem ipsum dolor sit amet.
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              ipsa itaque laudantium minima necessitatibus, nesciunt rem
              tempore? Ad eos error esse facere harum id illum itaque laborum
              minima molestias nihil optio pariatur placeat quam reiciendis,
              rem, repellendus saepe sapiente vel. Accusantium asperiores atque
              consectetur cumque deleniti ea et eum explicabo iure, iusto
              molestias necessitatibus nisi nostrum numquam quam quibusdam quo
              sit suscipit voluptas voluptatem. Eveniet illo minus rerum
              tempore. Accusamus dolores eius et exercitationem facere illo
              inventore maxime, nemo nihil nisi nostrum perspiciatis quas quis
              quisquam rerum sit suscipit velit vitae. Asperiores, autem, nobis.
              Corporis dolor esse fuga iste libero mollitia officiis quas
              voluptate! Aliquam consequatur corporis culpa cumque doloribus, ea
              illo illum, ipsam laboriosam molestiae neque porro, quas quasi
              quisquam totam veniam vitae! Enim inventore sequi veritatis!
              Facilis minus nobis sit! Ab aliquam commodi dignissimos, dolorem
              eius inventore, iste iure laboriosam molestias nesciunt pariatur,
              repellat reprehenderit ullam vitae!
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              ipsa itaque laudantium minima necessitatibus, nesciunt rem
              tempore? Ad eos error esse facere harum id illum itaque laborum
              minima molestias nihil optio pariatur placeat quam reiciendis,
              rem, repellendus saepe sapiente vel. Accusantium asperiores atque
              consectetur cumque deleniti ea et eum explicabo iure, iusto
              molestias necessitatibus nisi nostrum numquam quam quibusdam quo
              sit suscipit voluptas voluptatem. Eveniet illo minus rerum
              tempore. Accusamus dolores eius et exercitationem facere illo
              inventore maxime, nemo nihil nisi nostrum perspiciatis quas quis
              quisquam rerum sit suscipit velit vitae. Asperiores, autem, nobis.
              Corporis dolor esse fuga iste libero mollitia officiis quas
              voluptate! Aliquam consequatur corporis culpa cumque doloribus, ea
              illo illum, ipsam laboriosam molestiae neque porro, quas quasi
              quisquam totam veniam vitae! Enim inventore sequi veritatis!
              Facilis minus nobis sit! Ab aliquam commodi dignissimos, dolorem
              eius inventore, iste iure laboriosam molestias nesciunt pariatur,
              repellat reprehenderit ullam vitae!
            </Typography>

            <div className={s.img}>
              <Image src={CardBlog} alt="card blog" />
            </div>

            <Stack className={s.grid_list}>
              <Typography variant="h5" gutterBottom>
                Lorem ipsum dolor sit amet.
              </Typography>
              <div className={s.grid}>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias ipsa itaque laudantium minima necessitatibus, nesciunt
                  rem mollitia officiis quas voluptate! Aliquam inventore, iste
                  iure laboriosam molestias nesciunt pariatur, repellat
                  reprehenderit ullam vitae!
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias ipsa itaque laudantium minima necessitatibus, nesciunt
                  inventore, iste iure laboriosam molestias nesciunt pariatur,
                  repellat reprehenderit ullam vitae!
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias ipsa itaque laudantium minima necessitatibus, nesciunt
                  inventore, iste iure laboriosam molestias nesciunt pariatur,
                  repellat reprehenderit ullam vitae!
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias ipsa itaque laudantium minima necessitatibus, nesciunt
                  inventore, iste iure laboriosam molestias nesciunt pariatur,
                  repellat reprehenderit ullam vitae!
                </li>
              </div>
            </Stack>

            <VVersePlayer classname={s.video_player} />

            <Stack direction="row" flexWrap="wrap" className={s.quote}>
              <div className={s.quote_text}>
                <FormatQuote className={s.quote_icon} />
                <Typography variant="h5" className={s.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam ex facere id ipsam modi placeat porro saepe Aperiam ex
                  facere id ipsam modi placeat porro saepe
                </Typography>
              </div>

              <div className={s.quote_img}>
                <Image src={Thumbnail} alt="card blog" />
              </div>
            </Stack>

            <Stack mt="2rem">
              <Typography variant="h5" gutterBottom>
                Lorem ipsum dolor sit amet.
              </Typography>

              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                ipsa itaque laudantium minima necessitatibus, nesciunt rem
                tempore? Ad eos error esse facere harum id illum itaque laborum
                consectetur cumque deleniti ea et eum explicabo iure, iusto
                molestias necessitatibus nisi nostrum numquam quam quibusdam quo
                sit suscipit voluptas voluptatem. Eveniet illo minus rerum
                tempore. Accusamus dolores eius et exercitationem facere illo
                inventore maxime, nemo nihil nisi nostrum perspiciatis quas quis
                quisquam rerum sit suscipit velit vitae. Asperiores, autem,
                nobis.
              </Typography>

              <VVersePlayer classname={s.video_player} />

              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                ipsa itaque laudantium minima necessitatibus, nesciunt rem
                tempore? Ad eos error esse facere harum id illum itaque laborum
                tempore. Accusamus dolores eius et exercitationem facere illo
                inventore maxime, nemo nihil nisi nostrum perspiciatis quas quis
                quisquam rerum sit suscipit velit vitae. Asperiores, autem,
                nobis.
              </Typography>
            </Stack>

            <Gallery title="Gallery" numberOfImg={5} />
            <Gallery title="Gallery" numberOfImg={3} />
            <Gallery title="Gallery" numberOfImg={8} hasFeatured={false} />

            <Copyrights title="Source & Copyrights" items={[]} />
          </Paper>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default BlogPost;
