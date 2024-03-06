import { Input } from "../ui";

const ScheduleNotification = () => {
    return (
        <>
            <div className="flex flex-col items-start gap-2 my-7">
                <h1 className="font-[500]">
                    Schedule <span className="pl-5 font-normal">(Optional)</span>
                </h1>
                <label htmlFor="" className="text-[14px]">Date and Time</label>
                <div className="border text-[#ADADAD] py-[14px] px-3 rounded-[8px] w-full ">
                    <input type="date" name="" id="" className="block w-full relative" />
                    <input type="time" name="" id="" className="block w-[35%] absolute top-[286px] right-[400px]" />
                </div>
                <p className="text-[#ADADAD] ">Schedule when push notification will be sent to users</p>
            </div>
            <div className="flex flex-col items-start gap-2 my-7">
                <h1 className="font-[500]">
                    Timer <span className="pl-5 font-normal">(Optional)</span>
                </h1>
                <label htmlFor="" className="text-[14px]">Date and Time</label>
                <div className="border text-[#ADADAD] py-[14px] px-3 rounded-[8px] w-full ">
                    <input type="date" name="" id="" className="block w-full relative" />
                    <input type="time" name="" id="" className="block w-[35%] absolute top-[466px] right-[400px]" />
                </div>
                <p className="text-[#ADADAD] ">set expiry time of Push Notification when creating it</p>
            </div>
            <div className="pt-3">
                <h1 className='leading-[24px] pb-3 font-[500]'>Message</h1>
                <label htmlFor="" className='flex flex-col gap-2 text-[#0C0903] text-[14px] font-[300]'>Title
                    <Input className='' />
                </label>

                <label htmlFor="" className='flex flex-col gap-2 pt-3 text-[#0C0903] text-[14px] font-[300]'>Message
                    <Input className='' />
                </label>
                <p className='text-[#A1A1A1] italic '>Approx. Display abe characters ; 80-300 chatacters</p>
            </div>
        </>
    );
};

export default ScheduleNotification;