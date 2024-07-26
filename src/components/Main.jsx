import { imagesProduct } from "../utils/imagesProduct";
import prev from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";
import { useState } from "react";
import { product } from "../utils/product";
import Button from "./Button";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import ProductZoom from "./ProductZoom";
import cartIcon from "../assets/icon-cart.svg";
import ImageThumbnail from "./ImageThumbnail";
import useCurrency from "../utils/useCurrency";
import {UseCartsDispatchContext } from "../context/ProductContextDispatch";

function Main() {
  const [imageActive, setImageActive] = useState(0);
  const [qty, setQty] = useState(0);
  const [zoom, setZoom] = useState(false);
  function slider(type) {
    setImageActive((currVal) => {
      let typeSlide = type === "next" ? currVal + 1 : currVal - 1;
      let condSlide =
        type === "next" ? currVal === imagesProduct.length - 1 : currVal === 0;
      if (condSlide) {
        return currVal;
      }
      return typeSlide;
    });
  }

  const tabImage = (index) => {
    if (index === imageActive) return;
    setImageActive(index);
  };

  const thumbnailList = imagesProduct.map((image, index) => (
    <ImageThumbnail
      key={index}
      images={image.thumbnail}
      onClick={() => tabImage(index)}
      index={index}
      active={index === imageActive}
    />

  ));
  const dispatch  = UseCartsDispatchContext()

  function addToCart() {
    dispatch({
      type: "ADDED",
      name: product.name,
      image:product.image,
      price:product.price,
      qty:qty,
    })
  }



  return (
    <main className="flex flex-wrap flex-col sm:flex-row sm:justify-center overflow-hidden lg:px-[212px] lg:justify-between lg:items-center  lg:py-[90px]  max-w-screen-2xl mx-auto">
    <div className="flex flex-row sm:justify-center items-center lg:justify-normal flex-wrap gap-y-[30px] lg:gap-x-32">
      <div className="lg:block relative w-[375px] h-[301px] lg:h-[445px] lg:w-[445px]">
        <img
          src={imagesProduct[imageActive].image}
          className="object-cover lg:rounded-xl"
          onClick={() => setZoom(true)}
        />
        
        <Button
          className="absolute lg:hidden left-6 top-1/2"
          icon={prev}
          onClick={() => slider("prev")}
        />
        <Button
          className="absolute lg:hidden right-6 top-1/2"
          icon={next}
          onClick={() => slider("next")}
        />
      </div>

      <div className="sm:w-[480px] sm:mt-12 lg:mt-0 ">
        <section className="p-6">
          <h3 className="mb-4 text-xs font-bold uppercase text-secondary-dark-grayish-blue">
            sneaker company
          </h3>
          <h4 className="mb-4 text-3xl font-bold capitalize lg:text-4xl">
            Fall Limited Edition Sneakers{" "}
          </h4>
          <p className=" text-black-750">
            These low-profile sneakers are your perfect casual wear
            companion. Featuring a durable rubber outer sole, they’ll
            withstand everything the weather can offer.
          </p>
        </section>
        <section className="grid grid-cols-3 grid-rows-3 px-6 gap-y-4">
          <h5 className="self-center col-span-1 col-start-1 row-start-1 text-2xl font-bold">
            {
              useCurrency(product.price)
            }
          </h5>
          <div className="self-center col-span-1 col-start-2 row-start-1">
            <div className="text-white h-[27px] grid place-items-center w-[51px] rounded font-bold text-xs bg-black-1000">
              <span>50%</span>
            </div>
          </div>
          <div className="self-center col-span-1 col-start-3 row-start-1 lg:row-start-2 lg:col-start-1 lg:self-start justify-self-end lg:justify-self-start lg:place-self-start">
            <h5 className="text-sm font-bold line-through text-black-750">
              {useCurrency(product.realPrice)}
            </h5>
          </div>
          <div className="flex justify-center col-span-3 rounded-lg lg:col-span-1 lg:row-start-3 h-14 bg-secondary-light-grayish-blue">
            <button
              className="flex items-center justify-center h-full lex w-14"
              onClick={() => setQty(qty - 1)}
              disabled={qty===0}
            >
              <img src={minus} />
            </button>
            <div className="flex items-center justify-center flex-1 text-sm font-bold">
              <span>{qty}</span>
            </div>
            <button
              className="flex items-center justify-center h-full w-14"
              onClick={() => setQty(qty + 1)
              }
              
            >
              <img src={plus} />
            </button>
          </div>
          <div className="col-span-3 row-start-3 lg:col-span-2 lg:ml-7 lg:row-start-3">
            <Button label="Add to Cart" icon={cartIcon} onClick={addToCart} disabled={qty===0}/>
          </div>
        </section>
      </div>

      <div className="flex-row hidden lg:w-[445px] justify-center gap-x-4 lg:flex">
        {thumbnailList}
      </div>

      <ProductZoom
        image={imagesProduct[imageActive].image}
        alt={imagesProduct[imageActive].label}
        zoom={zoom}
        imageLists={imagesProduct}
        onClick={(index) => tabImage(index)}
        active={imageActive}
        clickNext={() => slider("next")}
        clickPrev={() => slider("prev")}
        clickClose={() => setZoom(false)}
      />
    </div>
  </main>
  );
}

export default Main;
