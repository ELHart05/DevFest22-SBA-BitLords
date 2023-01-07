import DoctorImage from './assets/esidoctor.jpg'

const DoctorDetails = () => {
    return (
        <div className='flex flex-col gap-5 items-start px-8 lg:px-0'>
            <h1 className='font-bold text-4xl'>Doctor Details</h1>
            <div className='flex flex-col md:gap-8 border rounded-md md:flex-row'>
                <div className='flex-1 doctor-img md:w-1/2'>
                    <img src={DoctorImage} alt="#" className='rounded-bl-md rounded-tl-md w-full h-full' />
                </div>
                <div className='doctor-info flex flex-col md:justify-center md:w-1/2 p-4 gap-8'>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-bold text-lg md:text-xl'>Full Name:</h3>
                        <p className='relative top-[1px]'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-bold text-lg md:text-xl'>Age:</h3>
                        <p className='relative top-[1px]'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-bold text-lg md:text-xl'>Speciality:</h3>
                        <p className='relative top-[1px]'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-bold text-lg md:text-xl'>Full Name:</h3>
                        <p className='relative top-[1px]'>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorDetails;