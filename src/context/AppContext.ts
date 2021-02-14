import { createContext } from 'react';

const AppContext = createContext({
    state: {},
    removeFromCart: (val: any, itemToRemove: number) => {},
    addToCart: (val: any) => {},
    addToBuyer: (val: any) => {}
});

export default AppContext;