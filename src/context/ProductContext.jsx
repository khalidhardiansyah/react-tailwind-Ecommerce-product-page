import { createContext, useState } from "react";

const ProductContext = createContext()
// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({children})=>{
    const [cart, setCart] = useState([])

    return(
        <ProductContext.Provider value={{cart, setCart}}>
            {children}
        </ProductContext.Provider>
    )
}

export const CartProducts = ProductContext;
export default ProductContextProvider;