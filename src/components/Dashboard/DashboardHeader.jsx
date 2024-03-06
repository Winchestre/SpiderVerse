import { DownloadIcon } from "@radix-ui/react-icons"
import { Button } from "../ui"

const DashboardHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-black text-3xl font-medium leading-9">Good day Smith👋</h1>
            <div>
                <Button variant="outline" size="icon" >
                    <DownloadIcon className="h-[18px] w-[18px]" />
                </Button>
            </div>
        </div>
    )
}

export default DashboardHeader