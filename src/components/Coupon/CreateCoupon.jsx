import { Breadcrumbs, CouponForm } from ".."
import Title from "../Title"

const CreateCoupon = () => {
    return (
        <section className="section">
            <Title>Create Coupon</Title>
            <Breadcrumbs menu="Coupon" subMenu="Create Coupon" />
            <div className="pt-4">
                <CouponForm />
            </div>
        </section>
    )
}
export default CreateCoupon