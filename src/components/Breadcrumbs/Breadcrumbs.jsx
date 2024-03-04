import { arrow_right } from "../../assets/icons"

const Breadcrumbs = ({ menu, subMenu, nextMenu }) => {
    return (
        <div className="flex items-start justify-start gap-1 mt-1">
            <p className="text-sm font-light leading-tight text-black">{menu}</p>
            <img src={arrow_right} alt='arrow-right' />
            <p className="text-sm font-light leading-tight text-black">{subMenu}</p>
            {nextMenu && 
                <>
                    <img src={arrow_right} alt="arrow-right" />
                    <p className="text-sm font-light leading-tight text-black">{nextMenu}</p>
                </>
            }
        </div>
    )
}

export default Breadcrumbs