import { CouponTable } from "@/components";
import CouponHeader from "@/components/Coupon/CouponHeader";
import { useNavigate } from "react-router-dom"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { couponUserArray } from "@/constants/data";

const Coupons = () => {
  const navigate = useNavigate();

  return (
    <section className="section">
      <CouponHeader navigate={navigate} />
      <CouponTable />
      <div className="flex justify-between gap-[50%] items-center w-full text-[#ADADAD] mt-10">
      <h3 className="font-light text-sm">Showing 1 to <span className="font-semibold">{couponUserArray.length}</span> out of <span className="font-semibold">{couponUserArray.length}</span> records</h3>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>            
    </section>
  )
}
export default Coupons