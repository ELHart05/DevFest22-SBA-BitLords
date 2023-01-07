import { useState, useEffect } from "react";

export default function ErrorPage({ message }) {

  const [loading, setLoding] = useState(true)
  useEffect(() => {
    
    setTimeout(()=>{
      setLoding(false)
    },800)
  }, [])
  if (!loading) {
    return (
      <div className="dark:h-screen">
        <div className="absolute grid  text-center gap-10 left-1/2 translate-x-[-50%] bottom-1/2 ">
          <h1 className="font-bold text-5xl">Oops!</h1>
          <p >Sorry, an unexpected error has occurred.</p>
          <p>
            <i className="text-red-600">
              {message}
            </i>
          </p>
        </div>
      </div>

    );
  } else {
    return (
      <div className="dark:h-screen">
        <div className=" grid  text-center gap-10 justify-items-center pt-[30vh] ">
          <h1 className=" font-bold text-5xl">Loading</h1>
          <p >Wait please</p>
          <p>
            <li className=" inline-block w-24 h-24 
            border-8 
          
            border-b-blue-500 
           
            rounded-full 
            animate-spin"></li>
          </p>
        </div>
      </div>
    )
  }

}