import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Button } from "../ui"

const AnalyticsTableHeader = () => {
    return (
        <div className="flex justify-between items-center mt-7">
            <h5 className="text-black text-xl font-medium font-['Poppins'] leading-[30px]">Most Ordered Products</h5>
            <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="border-2 border-slate-300">
                    <MixerHorizontalIcon className="h-[18px] w-[18px]" />
                </Button>
                <Button size="icon" >
                    By Country
                </Button>
            </div>
        </div>
    )
}

export default AnalyticsTableHeader