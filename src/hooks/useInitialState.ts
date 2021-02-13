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

    return {
        addToCart,
        removeFromCart,
        state
    }
};

export default useInitialState;