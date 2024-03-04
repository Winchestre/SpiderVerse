import { Title } from "@/components"
import { getStyleByValue } from "@/utils/helper"

const data = [
    {paymentMode: "Mixpay", enabled: true},
    {paymentMode: "Depay", enabled: false},
    {paymentMode: "Balance", enabled: false},
]

const Payments = () => {
    return (
        <section className="section">
            <Title>Payments</Title>
            <p className="mb-8 mt-14">Payments Method</p>
            <div className="flex flex-col gap-6">
               {data.map((payment, index) => (
                <div key={index} className={`pr-2 rounded-[100px] font-medium text-base justify-start items-center gap-1 flex max-w-max
                                    ${getStyleByValue(payment.paymentMode).class} ${payment.enabled ? "" : "bg-zinc-500"}
                                `}>
                    <img src={getStyleByValue(payment.paymentMode).icon} alt={payment.paymentMode} className={`${payment.enabled ? '' : 'grayscale' }`}/>
                    <p>{payment.paymentMode}</p>
                </div>
               ))}
            </div>
        </section>
    )
}

export default Payments