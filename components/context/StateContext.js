import React, { createContext, useContext, useState ,useEffect} from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const Context = createContext();

export const StateContextProvider = ({ children }) => {
    const [showCart, setshowcart] = useState(false);
    const [cartsItems, setcartItems] = useState([]);
    const [totalprice, settotalprice] = useState(0);
    const [totalquantities, setquantities] = useState(0);
    const [qty, setqty] = useState(1);
  
    const incqty = () => {
      setqty((pervqty) => pervqty + 1);
    };
  
    const decqty = () => {
      setqty((pervqty) => {
        if (pervqty - 1 < 1) return 1;
        return pervqty - 1;
      });
    };
  
    const addtoshop = (newCartItem) => {
      // Check if the item already exists in the cart
      const existingCartItem = cartsItems.find(
        (cartItem) => cartItem.name === newCartItem.name
      );
  
      // If it exists, update the quantity
      if (existingCartItem) {
        const updatedCartItems = cartsItems.map((cartItem) =>
          cartItem.name === newCartItem.name
            ? { ...cartItem, quantity: cartItem.quantity + newCartItem.quantity }
            : cartItem
        );
        setcartItems(updatedCartItems);
      } else {
        // If it doesn't exist, add it to the cart
        setcartItems([...cartsItems, newCartItem]);
      }
      setqty(1);
      setquantities((prevTotal) => prevTotal + newCartItem.quantity);
      settotalprice((preprice) => preprice +newCartItem.quantity * newCartItem.price )
    };
    
    //delete function
    const deleteFromCart = (itemName, totalQuantities) => {
      const updatedCartItems = cartsItems.filter(
        (cartItem) => cartItem.name !== itemName
      );
      // Find the card item that was deleted
      const deletedCardItem = cartsItems.find(
        (cartItem) => cartItem.name === itemName
      );  
      // Update the quantity by subtracting the card item quantity
           setcartItems(updatedCartItems);
           setquantities((prevTotal) => prevTotal - deletedCardItem.quantity);
           settotalprice((preprice) => preprice -deletedCardItem.quantity * deletedCardItem.price )
           
    };



    //increase method 
    const handleIncreaseOrder = (itemName) => {
      // Find the card item to increase the order
      const cardItem = cartsItems.find((cartItem) => cartItem.name === itemName);
    
      // Check if the current quantity is already at the maximum (99)
      if (cardItem.quantity >= 99) {
        // No further increase allowed
        return;
      }
    
      // Perform the necessary updates for increasing the order
      const updatedQuantity = cardItem.quantity + 1;
      const updatedTotalPrice = totalprice + cardItem.price;
      const updatedCartItems = cartsItems.map((cartItem) =>
        cartItem.name === itemName ? { ...cartItem, quantity: updatedQuantity } : cartItem
      );
    
      // Call the appropriate state update functions with the updated values
      setcartItems(updatedCartItems);
      setquantities((prevTotal) => prevTotal + 1);
      settotalprice(updatedTotalPrice);
    };


    //decrese method
    const handleDecreaseOrder = (itemName) => {
      // Find the card item to decrease the order
      const cardItem = cartsItems.find((cartItem) => cartItem.name === itemName);
    
      // Check if the current quantity is already at the minimum (1)
      if (cardItem.quantity <= 1) {
        // No further decrease allowed
        return;
      }
    
      // Perform the necessary updates for decreasing the order
      const updatedQuantity = cardItem.quantity - 1;
      const updatedTotalPrice = totalprice - cardItem.price;
      const updatedCartItems = cartsItems.map((cartItem) =>
        cartItem.name === itemName ? { ...cartItem, quantity: updatedQuantity } : cartItem
      );
    
      // Call the appropriate state update functions with the updated values
      setcartItems(updatedCartItems);
      setquantities((prevTotal) => prevTotal - 1);
      settotalprice(updatedTotalPrice);
    };
    
    

    const shipitems = () => {

      
      setshowcart(false);
      setcartItems([]);
      settotalprice(0);
      setquantities(0);
      setqty(1);
    };
  
    const router = useRouter();
    useEffect(() => {
      setqty(1);
    }, [router.query.id] );
  
    // Load the state from localStorage
    useEffect(() => {
      const storedCartItems = localStorage.getItem("cartItems");
      const storedTotalPrice = localStorage.getItem("totalPrice");
      const storedTotalQuantities = localStorage.getItem("totalQuantities");
      if (storedCartItems) setcartItems(JSON.parse(storedCartItems));
      if (storedTotalPrice) settotalprice(JSON.parse(storedTotalPrice));
      if (storedTotalQuantities)
        setquantities(JSON.parse(storedTotalQuantities));
    }, []);
  
    // Save the state to localStorage
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartsItems));
      localStorage.setItem("totalPrice", JSON.stringify(totalprice));
      localStorage.setItem("totalQuantities", JSON.stringify(totalquantities));
    }, [cartsItems, totalprice, totalquantities]);
  
    return (
      <Context.Provider
        value={{
          showCart,
          cartsItems,
          totalprice,
          totalquantities,
          qty,
          incqty,
          decqty,
          addtoshop,
          shipitems,
          deleteFromCart,
          handleDecreaseOrder,
          handleIncreaseOrder 
        }}
      >
        {children}
      </Context.Provider>
    );
  };
  
export const useStateContext = () => useContext(Context);
