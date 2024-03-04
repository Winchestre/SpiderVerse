import { Input, Button } from "@/components/ui";
import { notification, dollar_circle, medal_star, search } from "../assets/icons";

const buttonsData = [
  { icon: notification, alt: 'notification' },
  { icon: dollar_circle, alt: 'dollar-circle' },
  { icon: medal_star, alt: 'medal-star' },
];

const Header = () => {
  return (
    <header className="fixed px-16 py-4 bg-white h-[88px] border-b border-b-neutral-200 top-0 z-50 flex justify-between items-center w-[calc(100%-280px)]">
      <Input type="text" placeholder="Customer" icon={search} className="border-zinc-400 placeholder:text-zinc-400 w-[60%] min-w-52" />
      <div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {buttonsData.map((button) => (
              <Button variant="icon" size="icon" key={button.alt}>
                <img src={button.icon} alt={button.alt} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header