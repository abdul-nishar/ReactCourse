import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test1"
          price={6}
          description="This is first product - amazing!"
          id={1}
        />
        <ProductItem
          title="Test2"
          price={10}
          description="This is second product - good!"
          id={2}
        />
      </ul>
    </section>
  );
};

export default Products;
