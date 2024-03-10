import ProductCards from "./Product";
import FilterProducts from "./FilterProducts";
import { Breadcrumbs, Title } from ".";
import RewardIconsHeader from "./Rewards/RewardIconsHeader";

export default function Products() {
  return (
    <section className="section">
      <Title>Website</Title>
        <Breadcrumbs menu="Reward" subMenu="Exclude Product" />
        <RewardIconsHeader />
      <div className="flex justify-end">
        <FilterProducts />
        <ProductCards />
      </div>
    </section>
    
  );
}
