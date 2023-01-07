export const WorkshopCard = ({title,description,time,url,owner,location}) => {
    console.log(location);
    return (
        <section className={` ${(location ==='/clubs/'+owner || location==="/clubs") ? 'transition-all hover:-mt-2':  'hidden' }`}>
            <div className="bg-slate-700 hover:bg-slate-400 transition-all p-4 flex flex-col justify-between m-8 rounded-lg shadow-lg ">
            <div className='pb-2'>
                <img className='max-h-48' src={url} alt="logo" />
            </div>
            <div className='text-white '>
                <div>
                    <ul className='pb-2'>
                        <li className='font-bold text-lg'>Tiltle : </li>
                        <li className='text-sm'>{title}</li>
                    </ul>
                </div>
                <div>
                    <ul className='pb-2'>
                        <li className='font-bold text-lg'>Description : </li>
                        <li className='text-sm'>{description}</li>
                    </ul>
                    <ul className='pb-2'>
                        <li className='font-bold text-lg'>Time : </li>
                        <li className='text-sm'>{time}</li>
                    </ul>
                </div>
            </div>

        </div>
        </section>
        
    );
}