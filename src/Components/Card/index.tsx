import React, { FC, memo } from 'react';
import MUICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Card: FC<Props> = ({
  children,
  onClick
}) => {
  return (
    <MUICard>
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>Learn More</Button>
      </CardActions>
    </MUICard>
  );
};

export default memo(Card);
