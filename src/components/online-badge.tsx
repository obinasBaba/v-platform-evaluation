import React from 'react';
import { Avatar, Badge } from '@mui/material';
import Img from '@/public/assets/AvatarBusiness.png';
import { styled } from '@mui/system';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    width: '.7rem',
    height: '.7rem',
    borderRadius: '50%',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '.7rem',
      height: '.7rem',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

type Props = {
  avatarProps?: Record<string, any>;
} & Record<string, any>;

const OnlineBadge = ({ avatarProps, ...props }: Props) => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      {...props}
    >
      <Avatar
        src={Img.src}
        sx={{ width: '3rem', height: '3rem' }}
        {...avatarProps}
      />
    </StyledBadge>
  );
};

export default OnlineBadge;
