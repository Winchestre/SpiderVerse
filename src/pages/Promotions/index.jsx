import { PromotionHeader, PromotionsCards } from "@/components"
import { PromotionsIcon } from ".."

const Promotions = () => {
    return (
        <section className="section">
            <PromotionHeader />
            <PromotionsIcon />
            <PromotionsCards />
        </section>
    )
}
export default Promotions