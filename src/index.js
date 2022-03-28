import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {render} from './Redux/state'


let update = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App AppState={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 Update={update}/>
         </React.StrictMode>
        ,
        document.getElementById('root')
    );
}
store.dispatch({type: 'LOAD-LOGO'});
store.dispatch({type: 'MAKE-OBJECT'});
render(update);
reportWebVitals();
