import React, { useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import s from './endorsement.module.scss';
import {
  CancelOutlined,
  Check,
  FlagOutlined,
  MoreVert,
  PriorityHigh,
} from '@mui/icons-material';
import moment from 'moment/moment';
import OnlineBadge from '@/components/online-badge';

type Props = {
  name: string;
  birthdate: Date;
  image?: string;
  description: string;
};

const BlogCard = ({ name, birthdate }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const formattedDate =
    moment(birthdate).format('DD-MMM-YYYY') +
    ' | ' +
    moment(birthdate).fromNow();

  return (
    <Card className={s.container}>
      <Stack direction="row" alignItems="center">
        <Checkbox defaultChecked={false} />

        <Popover
          sx={{
            '& .MuiPaper-root': {
              borderRadius: '1rem',
            },
          }}
          className={s.popover}
          elevation={5}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List sx={{ width: '15rem', borderRadius: '1rem' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Accept" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CancelOutlined />
                </ListItemIcon>
                <ListItemText primary="Decline" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FlagOutlined />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItemButton>
            </ListItem>
          </List>
        </Popover>

        <ListItem
          className={s.list_item}
          secondaryAction={
            <Stack
              direction="row"
              alignItems="center"
              gap="1rem"
              className={s.header_action}
            >
              <Button className={s.status}>Pending</Button>

              <Divider orientation="vertical" flexItem />

              <Typography color="gray" fontWeight={300}>
                {moment().format('DD-MMM-YYYY hh:mm A')}
              </Typography>

              <Divider orientation="vertical" flexItem />

              <Tooltip title="information" placement="top">
                <IconButton edge="end" aria-label="delete">
                  <PriorityHigh />
                </IconButton>
              </Tooltip>

              <IconButton
                sx={{
                  boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.1)',
                }}
                onClick={handleClick}
              >
                <MoreVert />
              </IconButton>
            </Stack>
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

      <Typography className={s.desc} variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
        aspernatur doloremque enim itaque laborum nulla quas reprehenderit
        suscipit temporibus voluptates. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Animi, aspernatur doloremque enim itaque laborum nulla
        quas reprehenderit suscipit temporibus voluptates.
      </Typography>
    </Card>
  );
};

export default BlogCard;
