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

    const removeFromCart = (payload: any) => {
        setState({
            ...state,
            cart: state.cart.filter((item: any) => item?.id !== payload?.id)
        });
    }

    return {
        addToCart,
        removeFromCart,
        state
    }
};

export default useInitialState;