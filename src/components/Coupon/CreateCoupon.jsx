import { Breadcrumbs, CouponForm } from ".."
import Title from "../Title"
import { CreateCouponHeader } from "./TopHeader"

const CreateCoupon = () => {
    return (
        <section className="section">
            <CreateCouponHeader />
            <div className="mt-4">
                <CouponForm />
            </div>
        </section>
    )
}
export default CreateCoupon