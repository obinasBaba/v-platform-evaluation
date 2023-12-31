import React from 'react';
import { Button, Card, Divider, Stack, Typography } from '@mui/material';

import CardImg from '@/public/assets/card-default.jpeg';

import s from './blog-card.module.scss';
import moment from 'moment/moment';
import Image from 'next/image';
import OnlineBadge from '@/components/online-badge';
import Img from '@/public/assets/AvatarProfileFallback.svg';

import {
  Check,
  Message,
  MoreVert,
  Share,
  ThumbsUpDown,
  ThumbUp,
} from '@mui/icons-material';

type Props = {
  name: string;
  birthdate: Date;
  image?: string;
  description: string;
};

const BlogCard = ({ name, birthdate }: Props) => {
  return (
    <Card className={s.container}>
      <div className={s.card_img}>
        <Image src={CardImg} alt="card image" />
      </div>

      <Stack className={s.card_content}>
        <Stack component="header">
          <Stack className={s.btn} gap=".5rem">
            {['Featured', 'Public', 'General'].map((label) => (
              <Button key={label} startIcon={<Check />} size="small">
                {label}
              </Button>
            ))}
          </Stack>

          <div>
            <OnlineBadge
              avatarProps={{
                src: Img.src,
              }}
            />
          </div>
        </Stack>

        <Stack className={s.card_info} gap=".5rem">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>{moment().format('DD-MMM-YYYY | hh:mm A')}</Typography>

            <MoreVert />
          </Stack>

          <Divider flexItem />

          <Typography variant="h6" className={s.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          </Typography>

          <Divider flexItem />

          <Stack className={s.stat}>
            <Button startIcon={<Message />}>100</Button>
            <Button startIcon={<ThumbUp />}>1.2k</Button>
            <Button startIcon={<Share />}>200</Button>
            <Button startIcon={<ThumbsUpDown />}>4.8(100)</Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default BlogCard;
