import ProductCards from "../Product";
import FilterProducts from "../FilterProducts";
import RewardIconsHeader from "../Rewards/RewardIconsHeader";

const ProductBody = () => {
    return (
        <>
            <RewardIconsHeader />
            <div className="flex justify-end">
                <FilterProducts />
                <ProductCards />
            </div>
        </>
    )
}
export default ProductBody