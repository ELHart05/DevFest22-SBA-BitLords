import logo from './about.svg'
const AboutPage = () => {
    return (
        <section className='flex flex-col-reverse lg:flex-row p-16 pt-32 pb-[113px] hover:cursor-default'>
            <div className='grid justify-items-center lg:justify-items-start lg:w-[50%]'>
                <div className='text-center lg:text-left text-6xl font-extrabold text-blue-400 py-4'>
                    ABOUT US
                </div>
                <div className='text-center lg:text-left text-lg text-gray-500 py-8'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, aperiam saepe. Eligendi eum atque quidem magnam pariatur assumenda nobis, voluptatibus earum fuga harum hic delectus ipsa magni vitae. Aspernatur, delectus.
                </div>
                <div className=' mt-8 grid justify-center content-center bg-blue-400  hover:w-60 hover:cursor-pointer w-56 text-white px-8 py-2 2xl:py-0  rounded-lg text-lg hover:text-bold transition-all'>
                    Send the mail !
                </div>
            </div>
            <div className='mb-8 lg:mb-0 px-8'>
                <img src={logo} alt="about us" />
            </div>
        </section>
    )
}

export default AboutPage;