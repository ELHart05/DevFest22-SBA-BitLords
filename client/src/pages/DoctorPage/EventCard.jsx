import './style.css';

const EventCard = ({title,description,time,url}) => {
    return (
            <div className="bg-slate-700 card w-full hover:bg-slate-400 transition-all p-8 flex flex-col sm:flex-row justify-center gap-6 rounded-lg shadow-xl">
                <div>
                    <img className='max-h-48 rounded-md' src={url} alt="logo" />
                </div>
                <div className='text-white mr-[10vw]'>
                    <div>
                        <ul className='pb-2'>
                            <li className='font-bold text-2xl'>Tiltle : </li>
                            <li className='text-lg'>{title}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pb-2'>
                            <li className='font-bold text-2xl'>Description : </li>
                            <li className='text-lg'>{description}</li>
                        </ul>
                        <ul className='pb-2'>
                            <li className='font-bold text-2xl'>Time : </li>
                            <li className='text-lg'>{time}</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default EventCard;