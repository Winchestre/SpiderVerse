import { CouponForm } from ".."
import EditCouponHeader from "./TopHeader"

const EditCoupon = () => {
    return (
        <section className="section">
           <EditCouponHeader />
            <div className="pt-4">
                <CouponForm />
            </div>
        </section>
    )
}
export default EditCoupon