import {useState} from "react";
import s from "./Logo.module.css"


let Logo = (props) => {
    let [key, setKey] = useState(0);
    
    const nextLogo = () => {
        const length = props.dispatch({type: 'GET-LENGTH'})
        if(key < length-1)
        {
            setKey(key + 1)
        }
    }

    const prevLogo = () => {
        if(key !==  0)
        {
            setKey(key - 1)
        }
    }

    return (
        <div className={s.imageblock}>
            <button onClick={() => prevLogo()} className={s.button}>&larr;</button>
            <div className={s.divblock}>
                <img src={props.dispatch({type: 'IMAGE', key: key})} className={s.image} alt=""/>
            </div>
            <button onClick={() => nextLogo()} className={s.button}>&rarr;</button>
        </div>

    )
}

export default Logo;