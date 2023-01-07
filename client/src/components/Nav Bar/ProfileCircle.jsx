import { Link } from 'react-router-dom';


const ProfileCircle = ({user}) => {
    return (  
        <Link to="/profile" className='flex gap-3 rounded-2xl items-center px-3 '>
            <span className='bg-white h-12 w-12 rounded-full flex font-bold uppercase  justify-center items-center'>{user.firstname[0]+user.lastname[0]}</span>
            <div className='flex-col'>
                <p className='text-mainBlue font-bold max-w-[145px] overflow-hidden text-base'>{user.firstname+" "+user.lastname}</p>
                <p className='capitalize text-mainGrey'>{user.role}</p>
            </div>
        </Link>
    );
}
 
export default ProfileCircle;