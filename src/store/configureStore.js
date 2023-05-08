import {legacy_createStore as createStore} from "redux"
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const preloadedState = window.__PRELOADED_STATE__

export function configureStore(){
    return createStore(rootReducer, devToolsEnhancer())
}