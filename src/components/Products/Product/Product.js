import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button,CardActionArea} from '@material-ui/core';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import JungleBook from '../../../Shelf/JungleBook';
const Product = ({product, onAddToWishList}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <Link to={`product-view/${product.id}`} >
        <CardActionArea>
        <CardMedia className={classes.media} image={product.media.source} title={product.name}  />
        </CardActionArea>
        </Link>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography  variant="h6">
            {product.name}
            </Typography>
            
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          
          <Button variant="contained" className={classes.button2} endIcon={<LibraryAddOutlinedIcon />}  >
            <Link to="/JungleBook"><b>Read...</b> </Link>       
          </Button>
        </CardActions>
        </Card>
    )
}

export default Product;