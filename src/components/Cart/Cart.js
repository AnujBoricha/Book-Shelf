import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import BookShelf from './CartItem/CartItem';
import useStyles from './styles';

const BookHolder = ({ bookholder, onUpdateBookHolder, onRemoveFromBookHolder, onEmptyBookHolder }) => {
  const classes = useStyles();

  const handleEmptyBookHolder = () => onEmptyBookHolder();

  const renderEmptyBookHolder = () => (
    <Typography variant="subtitle1">You have not choosen any book,
      <Link className={classes.link} to="/"> start adding some</Link>!
    </Typography>
  );

 /*  if (!bookholder.line_items) return 'Loading'; */

  const renderBookHolder = () => (
    <>
      <Grid container spacing={4}>
        {bookholder.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <BookShelf item={lineItem} onUpdateBookHolder={onUpdateBookHolder} onRemoveFromBookHolder={onRemoveFromBookHolder} />
          </Grid>
        ))}
      </Grid>
      
     
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
      <hr/>
      { !bookholder.line_items.length ? renderEmptyBookHolder() : renderBookHolder() }
    </Container>
  );
};

export default BookHolder;
