import ProductCards from "./Product";
import FilterProducts from "./FilterProducts";

export default function Products() {
  return (
    <div className="flex justify-end">
      <FilterProducts />
      <ProductCards />
    </div>
  );
}
