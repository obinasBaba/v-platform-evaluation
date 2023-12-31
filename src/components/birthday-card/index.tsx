import React from 'react';
import {
  Button,
  Card,
  CardActions,
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import s from './birthday_card.module.scss';
import { Delete } from '@mui/icons-material';
import moment from 'moment/moment';
import OnlineBadge from '@/components/online-badge';

type Props = {
  name: string;
  birthdate: Date;
  image?: string;
};

const BirthdayCard = ({ name, birthdate }: Props) => {
  const formattedDate =
    moment(birthdate).format('DD-MMM-YYYY') +
    ' | ' +
    moment(birthdate).fromNow();

  return (
    <Card className={s.container}>
      <Stack direction="row" alignItems="center">
        <Checkbox defaultChecked />

        <ListItem
          className={s.list_item}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <OnlineBadge />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h6">{name}</Typography>}
            secondary={formattedDate}
          />
        </ListItem>
      </Stack>

      <Divider />

      <CardActions className={s.actions}>
        <Button className={s.remove}>Remove</Button>
        <Button className={s.post}>Post</Button>
      </CardActions>
    </Card>
  );
};

export default BirthdayCard;
