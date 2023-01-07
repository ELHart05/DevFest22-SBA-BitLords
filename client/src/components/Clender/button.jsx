function Button({title,onClick,color}) {
    return ( 
        <div
          style={{
            backgroundColor:color
          }}
          onClick={onClick} className={"w-fit p-2  mr-2 px-5 shadow-md hover:shadow-sm cursor-pointer select-none rounded-xl leading-none "}>
             {title}
        </div>
     );
}

export default Button;