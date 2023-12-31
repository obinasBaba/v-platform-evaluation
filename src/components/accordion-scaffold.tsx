import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';
import s from './components.module.scss';
import { ExpandMore } from '@mui/icons-material';

type AccordionScaffoldProps = {
  title: string;
  children: React.ReactNode;
};
export const AccordionScaffold = ({
  children,
  title,
}: AccordionScaffoldProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Accordion
      className={s.container}
      expanded={isExpanded}
      onChange={() => setIsExpanded(!isExpanded)}
    >
      <AccordionSummary expandIcon={<ExpandMore />} className={s.summary}>
        <Stack direction="row" gap="1rem" width="100%" alignItems="center">
          <Typography variant="h5" className={s.title}>
            {title}
          </Typography>
          <div className={s.line} />
        </Stack>
      </AccordionSummary>

      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
