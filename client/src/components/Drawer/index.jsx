import { useLocation } from "react-router-dom";
import NavMenu from './NavMenu'
import closeIcon from './assets/close.svg';
import { Link } from "react-router-dom";
import logo from './logo-color.svg'

const Drawer = (props) => {
    const location = useLocation().pathname;
    const adminTools = [
        { title: "Requests", icon: "settings", link: "/requests" },
        { title: "Doctor", icon: "tasks", link: "/add-doctor-event" }

    ];
    const ClubTools = [
        { title: "Event", icon: "settings", link: "/add-event" }
    ];
    const mainMenu = [
        { title: "Home", icon: "home", link: "/home" },
        { title: "Calender", icon: "events", link: "/calender" },
        { title: "Clubs", icon: "departments", link: "/clubs" },
        { title: "Bus", icon: "resources", link: "/bus" },
        { title: "Doctor", icon: "tasks", link: "/doctor" },
        // { title: "Members", icon: "members", link: "/members" },
        // { title: "Finance", icon: "finance", link: "/finance" }
    ];
    const supportMenu = [
        { title: "About", icon: "settings", link: "/about" },
        { title: "Contact", icon: "help", link: "/contact" },
        { title: "Sign out", icon: "logout", link: "/logout" }
    ];

    if (location === '/login' || location === "/register" || location === '/' || location === "/resetpassword") {
        return null
    } else {
        return (
            <nav id='drawer' className={`rounded-lg transition-[left] ease-in-out duration-500 bg-white py-8 px-6 grid content-between gap-10 text-sm z-10 absolute lg:static ${props.isOpen ? "left-[-300px]  " : "left-0"}`}>
                <div className='space-y-12'>
                    <div className='flex justify-between items-center'>
                        <Link to='/'><div className="hover:cursor-pointer"><img src={logo} alt="logo" className="h-[30px] w-[150px]" /></div></Link>
                        <button onClick={props.toggleDrawer} className='block lg:hidden'><img src={closeIcon} alt="close" className='w-[20px]' /></button>
                    </div>
                    <div className='space-y-6'>
                        {
                            props.user.role === 'admin' && <div>
                                <NavMenu title="admin tools" pages={adminTools} location={location} />
                                <hr className='border-mainGrey' />
                            </div>
                        }{
                            props.user.role === 'club' && <div>
                                <NavMenu title="Club tools" pages={ClubTools} location={location} />
                                <hr className='border-mainGrey' />
                            </div>
                        }


                        <NavMenu title="main menu" pages={mainMenu} location={location} />
                        <hr className='border-mainGrey' />
                        <NavMenu title="support" pages={supportMenu} location={location} />
                    </div>
                </div>
            </nav>
        );
    }
}


export default Drawer