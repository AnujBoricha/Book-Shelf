import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const BookShelf = ({ item, onUpdateBookShelf, onRemoveFromBookShelf }) => {
  const classes = useStyles();

  const handleUpdateBookShelf = (lineItemId, newQuantity) => onUpdateBookShelf(lineItemId, newQuantity);

  const handleRemoveFromBookShelf = (lineItemId) => onRemoveFromBookShelf(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6" color='secondary' >{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateBookShelf(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleRemoveFromBookShelf(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button className={classes.button} variant="contained" type="button" color='secondary' onClick={() => handleRemoveFromBookShelf(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default BookShelf;
