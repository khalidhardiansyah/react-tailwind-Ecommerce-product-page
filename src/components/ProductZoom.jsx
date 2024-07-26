import prev from "../assets/icon-previous.svg"
import next from "../assets/icon-next.svg"
import ImageThumbnail from "./ImageThumbnail"
import Button from "./Button"
/*eslint-disable */
function ProductZoom({
    image,
    alt,
    zoom,
    imageLists,
    onClick,
    active,
    clickNext,
    clickPrev,
    clickClose
    
/*eslint-enable */




}) {
  const BTN_STYLES = 'absolute transition-all duration-300 ease-in-out delay-100'

  const tabs = imageLists.map((tab, index)=><ImageThumbnail key={index} active={index === active} images={tab.thumbnail}  onClick={()=>{onClick(index)}} />)
  return (
    <>
    <div className={` fixed top-0 left-0 hidden  lg:flex flex-col items-center justify-center w-full h-full bg-black-750 transition-all ease-in-out duration-200 overflow-hidden ${zoom?' scale-100 opacity-100':' scale-0 opacity-0'}`}>
        <div className={`flex items-center relative w-[606px]  justify-center transition-all ease-in-out duration-200 delay-100 ${zoom?' opacity-100 scale-100':' opacity-0 scale-0'}`}>
        <button className="absolute -top-8 right-6" onClick={clickClose}><svg width="21" height="21" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fillRule="evenodd"/></svg></button>
        <img src={image} alt={alt} className={` w-[550px] h-[550px] rounded-xl transition-all ease-in-out delay-100 duration-300  ${zoom?' opacity-100 scale-y-100  ':' opacity-0 scale-y-0  '}`}/>
          <Button icon={prev} onClick={clickPrev} className={`${BTN_STYLES} ${zoom?' -translate-x-[275px]':''}`} />
          <Button icon={next} onClick={clickNext} className={`${BTN_STYLES} ${zoom?'  translate-x-[275px]':''}`}/>

            {/* <button className={`absolute transition-all delay-100 ease-in-out duration-300  grid bg-white rounded-full h-14 w-14 place-items-center ${zoom?' -translate-x-[275px]':''}`} onClick={clickPrev}><img src={prev} alt="" /></button> */}
            {/* <button className={`absolute  transition-all delay-100 ease-in-out duration-300  grid bg-white rounded-full h-14 w-14 place-items-center ${zoom?'  translate-x-[275px]':''}`} onClick={clickNext}><img src={next} alt="" /></button> */}
        </div>
        <div className="flex items-center justify-center mt-6 gap-x-7">
        {
          tabs
        }
        </div>



</div>

    </>
  )
}

export default ProductZoom