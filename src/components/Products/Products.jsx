import React from "react";
import { Grid, Button } from "@material-ui/core";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/2.jpeg";
import logo2 from "../../assets/4.jpeg";
import logo3 from "../../assets/3.jpeg";
import { Link } from "react-router-dom";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();


  return (
    <main className={classes.content} >
      <div className={classes.toolbar} />
      <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
        <Carousel.Item>
          <img className="d-block w-100" src={logo1} alt=" slide" />
          <Carousel.Caption>
            <Button className={classes.but} size="large"  variant="contained" color="default"  href="#pro" >
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo3} alt="Second slide" />
          <Carousel.Caption>
            <Button className={classes.but} size="large"  variant="contained" color="secondary" component={Link} to="/cart">
              Checkout Cart
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo2} alt="Second slide" />
          <Carousel.Caption>
          <Button className={classes.but} size="large"  variant="contained" color="primary" href ="###">  Other Works
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Grid className={classes.content} container justify="center" spacing={5}>
        {products
          .map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} id="pro">
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};

export default Products;
