import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context

import productContext from "./context/ProductContext";
import cartContext from "./context/CartContext"


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		const givenItem = {
			items: item,
		}
		setCart([
			...cart, givenItem
		])
	};

	return (
		<div className="App">
			{/* <Navigation cart={cart} /> */}

			{/* Routes */}
			{/* <Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/> */}

			{/* <Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/> */}


			<productContext.Provider value={{products, addItem}} >

				<cartContext.Provider value={{cart}}>

					<Navigation component={Navigation} />
					<Route exact path = "/" component={Products} />
					<Route path = "/cart" component={ShoppingCart} />

				</cartContext.Provider>


			</productContext.Provider>

		</div>
	);
}

export default App;
