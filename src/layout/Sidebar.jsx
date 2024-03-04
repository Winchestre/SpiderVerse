import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logomark.svg';
import { menuItems } from '../constants/data';
import logout from '../assets/icons/logout.svg';
import CollapsibleMenuItem from '@/components/ui/collapsibleMenuItem';
import { NavIcon } from '@/components';
import { useLocation } from 'react-router-dom';



const Sidebar = () => {
    const pathname = useLocation().pathname;


    const [openMenuItem, setOpenMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setOpenMenuItem((prevOpenMenuItem) => (prevOpenMenuItem === index ? null : index));
  };
    return (
        <div className="w-[280px] top-0 h-full bg-gray-200 fixed flex flex-col overflow-y-auto side-scrollbar">
            <img src={logo} alt="Logo" className='pt-[33px] px-[32px] pb-10' />
            <ul className='flex flex-col gap-2 px-6 mb-10'>
                {menuItems.map((menuItem, index) => (
                    menuItem.submenu ? (
                        <CollapsibleMenuItem key={index} {...menuItem} onToggle={() => handleMenuItemClick(index)} isOpen={index === openMenuItem} pathname={pathname}/>
                    ) : (
                        <li key={index} className='mt-auto'>
                            <Link to={menuItem.path} className={`p-3 text-base font-light rounded-lg text-stone-950 flex items-center gap-3 ${pathname === menuItem.path ? 'bg-blue-900 text-white' : ''}`} onClick={() => handleMenuItemClick(index)}>
                                <NavIcon label={menuItem.label} icons={pathname === menuItem.path ? menuItem.activeIcons : menuItem.icons } />
                            </Link>
                        </li>
                    )
                ))}
            </ul>
            <Link to="/" className='py-3 mt-auto text-base font-light leading-normal px-9 text-stone-950 flex items-center gap-3'>
                <img src={logout} alt="logout icon" />
                Logout
            </Link>
        </div>
    )
}

export default Sidebar