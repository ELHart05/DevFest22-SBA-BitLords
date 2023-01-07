import { useDispatch } from 'react-redux'
import { deletUser } from '../../Redux/Slices/UserSlice';

export const SignOut = () => {
    const dispatch = useDispatch()
    return (
        <div className=" pt-[15%] pb-[20%]">
            <section className="max-w-screen-sm w-[90%] hover:cursor-default bg-gray-100 text-gray-600 rounded-xl grid  justify-items-center mx-auto">
                <div className="p-3 text-bold text-lg lg:text-2xl">
                    Are you sure you want to sign out ?
                </div>
                <div className="pt-8 pb-4 text-lg">
                    <div onClick={() => {
                        dispatch(deletUser())
                        window.location.pathname = '/'
                    }}
                        className="hover:bg-red-500 w-full rounded-lg hover:cursor-pointer hover:text-white px-[200px] py-2">Yes</div>
                    <div
                        onClick={() => {
                            window.location.pathname = '/home'
                        }}
                        className="hover:bg-green-500 w-full rounded-lg hover:cursor-pointer hover:text-white px-[200px] py-2">No</div>
                </div>
            </section>
        </div>


    );
}

