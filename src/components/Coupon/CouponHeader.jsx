import { PlusIcon } from "@radix-ui/react-icons"
import Title from "../Title"
import { Button } from "../ui"

const CouponHeader = ({ navigate }) => {
    return (
       <div className="flex justify-between items-center pb-10">
        <Title>Coupons</Title>
        <Button onClick={()=>{navigate('/coupons/create-coupon')}}>
            <PlusIcon className="mr-1" />
            Create New Coupon</Button>
       </div>
    )
}

export default CouponHeader