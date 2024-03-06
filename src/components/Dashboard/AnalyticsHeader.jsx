import { DownloadIcon } from "@radix-ui/react-icons"
import { Button } from "../ui"

const AnalyticsHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <Button size="sm">All Stores</Button>
            <div>
                <Button variant="outline" size="icon">
                    <DownloadIcon className="h-[18px] w-[18px]" />
                </Button>
            </div>
        </div>
    )
}
export default AnalyticsHeader