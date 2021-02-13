import { createContext } from 'react';

const AppContext = createContext({
    state: {},
    removeFromCart: (val: any, itemToRemove: number) => {},
    addToCart: (val: any) => {}
});

export default AppContext;