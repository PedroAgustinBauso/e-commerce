import axios from "axios";
import { addItemToCart } from "../store/cart";

export const addToCartItem = (newItem, dispatch, user, cart) => {
  const index = cart.findIndex((item) => item.name === newItem.name);
  if (cart[index].stock > cart[index].quantity) {
    if (user.userId) {
      axios
        .post("http://localhost:3001/api/cart", {
          productId: newItem.productId || newItem.id,
          quantity: newItem.quantity,
          userId: user.userId,
        })
        .then(() => dispatch(addItemToCart(newItem)));
    } else {
      dispatch(addItemToCart(newItem));
    }
  } else {
    console.log("stock superado");
  }
};
