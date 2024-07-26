/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";
const CartsContext = createContext(null)
const CartsDispatchContext = createContext(null)


function cartsReducer(state, action) {
    switch (action.type) {
        case 'ADDED':{
            return {
                carts: [
                  {
                    name: action.name,
                    image: action.image,
                    price: action.price,
                    qty: action.qty,
                    total_price: action.qty * action.price
                  }
                ]
              };
        }
        case 'DELETED':{
            const deleted = state.carts.filter(cart =>cart.name !== action.name)
             
            return {
                ...state,
                carts:deleted
            }
        } 
        default:
            {
                throw Error('Unknown action: ' + action.type);
              }
    }
}

const initialStores = {
    carts:[],
}


export const ListCartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartsReducer,initialStores)

    return (
        <CartsContext.Provider value={state}>
            <CartsDispatchContext.Provider value={dispatch}>
                {children}
            </CartsDispatchContext.Provider>
        </CartsContext.Provider>
    )
}


export function UseCartsContext(){
    return useContext(CartsContext)
}

export function UseCartsDispatchContext() {
    return useContext(CartsDispatchContext)
}