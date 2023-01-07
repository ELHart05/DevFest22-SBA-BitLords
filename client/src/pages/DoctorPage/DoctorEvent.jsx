import DoctorImage from './assets/esidoctor.jpg'

const DoctorEvents = () => {
    return (
        <div className='flex flex-col md:gap-8 border rounded-md md:flex-row-reverse'>
                <div className='flex-1 doctor-img md:w-1/2'>
                    <img src={DoctorImage} alt="#" className='rounded-bl-md rounded-tl-md w-full h-full' />
                </div>
                <div className='doctor-info flex flex-col md:justify-center md:w-1/2 p-4 gap-8'>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-bold text-lg md:text-xl'>Event:</h3>
                        <p className='relative top-[1px]'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center justify-start gap-4'>
                        <h3 className='font-bold text-lg md:text-xl'>Details:</h3>
                        <p className='relative top-[1px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque odit corrupti excepturi accusantium expedita facere laboriosam natus provident cupiditate, ea nihil a error repellendus similique unde atque harum distinctio tenetur.</p>
                    </div>
                </div>
            </div>
    )
}

export default DoctorEvents;