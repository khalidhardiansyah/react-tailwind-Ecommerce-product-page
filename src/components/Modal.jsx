import { useRef } from "react"
import useOutsideClick from "../utils/useOutsideClick"

function Modal({title, body, footer, onClose, showed}) { //eslint-disable-line
  const modalWrapper = useRef(null)

  useOutsideClick(modalWrapper, onClose)
  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0  w-svw h-svh transition-all ease-in-out -z-10 ${showed?' opacity-100 z-10':' opacity-0'}`}>
      <div className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-all ease-in-out  ${showed?' opacity-100':' opacity-0'}`} >
        <div className={`absolute top-0 bottom-0 left-0 right-0 flex justify-center  ease-in-out duration-300 transition-all ${showed?' translate-y-20':' -translate-y-44'}`}>
        <div className={`h-64 w-[22.5rem] absolute lg:right-[89px] rounded-lg bg-white  shadow-xl ease-in-out transition-all duration-300 `} ref={modalWrapper}>
        <div className="border-b border-secondary-light-grayish-blue h-[4.25rem] p-6">
            <h3 className="font-bold ">{title}</h3>
        </div>
        <div className="w-full p-6 body">
            {body}
        </div>
        <div className="px-6 footer">
            {footer}
        </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Modal