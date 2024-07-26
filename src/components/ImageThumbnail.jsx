   function ImageThumbnail({
    /*eslint-disable */
    images,
    active,
    ...props
    /*eslint-enable */
}) {  
  return (
    <button
      className=" relative hover:ring-2 hover:ring-primary rounded-xl w-[90px] h-[90px] overflow-hidden "
      {...props}
    >
      <span
        className={` absolute w-full h-full left-0 hover:bg-white hover:bg-opacity-50   ${
          active ? " bg-white bg-opacity-50" : null
        }`}
      ></span>
      <img src={images} className='object-cover w-full h-full ' />
    </button>
  );
}

export default ImageThumbnail;
