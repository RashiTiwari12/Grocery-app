import {createStore} from "redux"
import { cartReducer } from "./reducers/cart-reducer"

const mystore = createStore(cartReducer)
export default mystore;