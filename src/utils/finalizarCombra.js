import axios from "axios";
import { removeAllItems } from "../store/cart";

export const finalizarCompra = (user, dispatch) => {
  if (user.userId) {
    axios
      .post(`http://localhost:3001/api/checkout/${user.userId}`)
      .then((res) => dispatch(removeAllItems()));
  }
};
