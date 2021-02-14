import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Layout from '../components/Layout';
import {
  Home,
  Information,
  Checkout,
  NotFound,
  Payment,
  Success
} from "../containers";
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {

  const { addToCart, removeFromCart, state, addToBuyer } = useInitialState();

  return (
    <AppContext.Provider value={{
      addToCart,
      removeFromCart,
      state,
      addToBuyer
    }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
