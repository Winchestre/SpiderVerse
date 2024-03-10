
import ProductBody from "./Products/ProductBody";
import { ProductStore } from "./Products/ProductsHeader";

export default function Products() {
  return (
    <section className="section">
      <ProductStore />
      <ProductBody />
    </section>

  );
}
