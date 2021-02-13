import { createContext } from 'react';

const AppContext = createContext({
    state: {},
    removeFromCart: (val: any) => {},
    addToCart: (val: any) => {}
});

export default AppContext;