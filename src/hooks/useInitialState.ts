import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
    const [state, setState] = useState<any>(initialState);

    const addToCart = (payload: any) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload: any, indexToRemove: number) => {
        setState({
            ...state,
            cart: state.cart.filter((item: any, idx: number) => idx !== indexToRemove)
        });
    }

    const addToBuyer = (payload: any) => {
        setState({
            ...state,
            buyer: [state.buyer, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        state,
        addToBuyer
    }
};

export default useInitialState;