import trash from "../assets/icon-delete.svg"
import useCurrency from "../utils/useCurrency"
function CartItem({image, title,price, qty, total,onClick}) { //eslint-disable-line
  return (
    <div className=" h-[3.125rem] w-[19.5rem] grid grid-cols-5 grid-rows-2 items-center">
        <div className="col-start-1 row-span-2 cart__image__product w-[50px]">
            <img src={image} alt={title} className="object-cover object-center w-full h-full rounded-sm" />
        </div>
        <div className="col-span-4 text-secondary-dark-grayish-blue ">
            <h4>{title}</h4>
        </div>
        <div className="col-span-3 text-secondary-dark-grayish-blue">
            {useCurrency(price)} x {qty}
       
            <span className="ml-1 font-bold text-black-1000">{useCurrency(total)}</span>
        </div>
              <button className="fixed col-start-5 row-span-2 justify-self-end" onClick={onClick}><img src={trash} alt="delete" className="w-4" /></button>
    </div>
    // 
  )
}

export default CartItem