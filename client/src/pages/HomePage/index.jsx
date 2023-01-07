import './style.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Bus from '../../components/Bus/bus';
import Calender from '../../components/Clender';

const HomePage = ({user}) => {
    return (
        <>
            <section className='grid grid-cols-2 gap-4 py-20 px-8'>
                <div className='flex flex-col gap-4'>
                    <Calender user={user}/>
                    
                </div>
                <div className='flex flex-col gap-8'>
                 <div className=' rounded-lg w-full mt-8'>
                    <div className=' border-solid border-[1px] rounded-xl bg-white border-mainGrey lg:p-5'>
                        <div className='cont1 flex justify-between mb-[3%] '>
                            <h1 className='font-bold text-xl '>Latest Notifications</h1>
                        </div>

                        <div className='flex flex-row py-2 px-4 justify-between items-center w-full notification'>
                            <div className='flex flex-row items-center'>
                                <span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span>
                                <h2 className="w-full  pr-4">Bahaa added new resources file</h2>
                            </div>
                            <div className='flex flex-row items-center gap-4'>
                                <p className='text-mainGrey'>07:00 AM</p>
                                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row py-2 px-4 justify-between items-center notification w-full '>
                            <div className='flex flex-row items-center'>
                                <span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span>
                                <h2 className="w-full  pr-4">Meeting of the alpha.ai event today</h2>
                            </div>
                            <div className='flex flex-row items-center gap-4'>
                                <p className='text-mainGrey'>Yesterday, 04:00 PM</p>
                                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row py-2 px-4 justify-between items-center w-full notification'>
                            <div className='flex flex-row items-center'>
                                <span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span>
                                <h2 className="w-full  pr-4">Bahaa added new resources file</h2>
                            </div>
                            <div className='flex flex-row items-center gap-4'>
                                <p className='text-mainGrey'>07:00 AM</p>
                                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>   
                <div>
                    Bus schedule : 
                  <Bus user={user}/>  
                </div>
                
                </div>
                
            </section>
        </>

    )
}

export default HomePage;