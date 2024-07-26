import burgerMenu from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";
import { useEffect, useRef, useState } from "react";
import { menus } from "../utils/menu";
import Modal from "./Modal";
import CartItem from "./CartItem";
import Button from "./Button";
import { UseCartsContext, UseCartsDispatchContext } from "../context/ProductContextDispatch";

function Header() {
  const [opened, setOpen] = useState(false);
  const [showed, setShow] = useState(false);
  const state = UseCartsContext() 
  const dispatch = UseCartsDispatchContext()
  const {carts} = state

  const mobileMenu = useRef(null);
  function toggleMenu(event) {
    event.stopPropagation();
    setOpen(!opened);
  }

  useEffect(() => {
    if (!opened) return;
    function handleClick(event) {
      if (mobileMenu.current && !mobileMenu.current.contains(event.target)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [opened]);

  useEffect(() => {
    if (!showed) return;
    function disableScroll(e) {
      e.preventDefault()
      e.stopPropagation()
    }
    document.body.addEventListener("wheel",disableScroll,{passive:false})

    return () => {
      document.body.removeEventListener("wheel", disableScroll);
    };
  }, [showed])
  

  const listMenu = menus.map((menu, index) => (
    <a href={menu.path} key={index} className="font-bold capitalize">
      {menu.label}
    </a>
  ));
  const listMenuDesktop = menus.map((menu, index) => (
    <a href={menu.path} key={index} className="block text-center capitalize py-[42px] hover:font-bold hover:border-b-4 hover:border-b-primary capialize">
      {menu.label}
    </a>
  ));

  

  return (
    <nav className="w-full px-6 mx-auto bg-white lg:px-40 h-18 md:h-28 max-w-screen-2xl">
      <div className="flex items-center justify-between h-full lg:border-b lg:border-b-secondary-grayish-blue">
        <div className="flex items-center justify-between h-5 space-x-4 md:space-x-0 ">
          <button className="self-end md:hidden" onClick={toggleMenu}>
            <img src={burgerMenu} className=" h-[15px]" alt="menu" />
          </button>
          <a href="/" className="">
            <img src={logo} className="h-5 " alt="logo" />
          </a>
        </div>
        <div className="items-center justify-center hidden w-2/3 h-full md:flex gap-x-8">
          {
            listMenuDesktop
          }
        </div>
        <div className="flex">
        <button
          className=" ml-[5.5625rem]"
          onClick={(e) => {
            e.stopPropagation();
            setShow(!showed);
          }}
        >
          <img src={cartIcon} alt="cart" className="h-5" />
        </button>
        <div className="profile ml-[1.375rem]">
          <img src={avatar} alt="profile" className="w-6" />
        </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full z-20 h-full  bg-black-750 ease-in-out duration-200 ${
          opened ? " translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`w-[15.625rem] bg-white h-full px-6 ease-in-out duration-300 delay-100 ${
            opened ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={mobileMenu}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center h-18">
              <button type="button" onClick={toggleMenu}>
                <img src={close} className=" h-[0.875rem]" alt="close" />
              </button>
            </div>
            {listMenu}
          </div>
        </div>
      </div>
      <Modal
        showed={showed}
        onClose={() => setShow(false)}
        title="Cart"
        body={
          carts?.length?
          carts.map((product, index)=> <CartItem
          key={index}
          title={product.name}
          image={product.image}
          price={product.price}
          qty={product.qty}
          total={product.total_price}
          onClick={(e)=>{
            e.stopPropagation()
            dispatch({
              type:"DELETED",
              name:product.name
            })
          }}
        />)
         :
        <div className="grid h-48 -mt-12 place-items-center">
          <p className="font-bold text-secondary-dark-grayish-blue">Your cart is empty</p>
        </div>
        }
        footer={carts.length>0&&<Button label="checkout"/>}
      />
    </nav>
  );
}

export default Header;
