import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './indexreducer'




const Store = createStore(rootReducer,composeWithDevTools() )

export default Store