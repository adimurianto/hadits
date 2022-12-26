import { legacy_createStore as createStore, applyMiddleware } from "redux";

// Import thunk middleware
import thunk from "redux-thunk";

// Import all reducers created
import reducers from '../features/index';

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)