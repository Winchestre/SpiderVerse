import { useState } from "react";
import { Input } from "../ui";

const ScheduleNotification = () => {
    const [selectDate, setSelectDate] = useState('');

    const handleDateChange = (event) => {
        setSelectDate(event.target.value);
    }
    
    return (
        <div className="w-2/3">
            <div className="flex flex-col items-start gap-2 my-7">
                <h1 className="font-[500]">
                    Schedule <span className="pl-5 font-normal">(Optional)</span>
                </h1>
                <label htmlFor="" className="text-[14px]">Date and Time</label>
                <div className="border text-[#ADADAD] py-[14px] px-3 rounded-[8px] w-full">
                    <input type="date" name="" id="" value={selectDate} onChange={handleDateChange} className="block w-full relative" placeholder={selectDate} />
                    <input type="time" name="" id="" className="block w-[35%] absolute top-[284px] right-[470px]" />
                </div>
                <p className="text-[#ADADAD] italic">Schedule when push notification will be sent to users</p>
            </div>
            <div className="flex flex-col items-start gap-2 my-7">
                <h1 className="font-[500]">
                    Timer <span className="pl-5 font-normal">(Optional)</span>
                </h1>
                <label htmlFor="" className="text-[14px]">Date and Time</label>
                <div className="border text-[#ADADAD] py-[14px] px-3 rounded-[8px] w-full">
                    <input type="date" name="date" id="date" value={selectDate} onChange={handleDateChange} className="block w-full relative" />
                    <input type="time" name="time" id="time" className="block w-[35%] absolute top-[460px] right-[470px]" />
                </div>
                <p className="text-[#ADADAD] italic">set expiry time of Push Notification when creating it</p>
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
        </div>
    );
};

export default ScheduleNotification;