import Navigation from "./Components/Navigation/Navigation";
import Construction from "./Components/Canvas/Construction/Construction";
import Information from "./Components/Information/Information";
import Historical from "./Components/Canvas/Historical/Historical";
import Mainpage from "./Components/Canvas/Mainpage/Mainpage";
import { HashRouter, Routes, Route } from "react-router-dom";
import s from "./App.module.css"


function App(props) {
    
    return (

        <div className={s.marketbody}>
            <HashRouter>
                <Navigation />
                <Routes>
                    <Route path='/constructor' element={<Construction
                        Cup={props.AppState.color.cup}
                        Lid={props.AppState.color.lid}
                        ColorOfCups={props.AppState.colorsCups}
                        dispatch={props.dispatch}
                        Update={props.Update} />} />
                    <Route path='/historical' element={<Historical />} />
                    <Route path='/' element={<Mainpage />} />
                </Routes>
                <Information />
            </HashRouter>
        </div>

    );
}

export default App;
