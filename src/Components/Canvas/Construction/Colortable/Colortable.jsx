import s from './Colortable.module.css'
import {buttonHandler} from "../../../../Redux/state";

let Colortable = (props) => {
    let changeColor = (color, id) => {
        props.dispatch(buttonHandler(color, id))
        props.Update();
    }

    let ButtonsLid = (props) => {
        return props.colors.map((value, index) =>
            <button onClick={() => changeColor(value, 1)}
                    key={`1${[index]}`}
                    className={s.cell}
                    style={{backgroundColor: value}}/>)
    }

    let ButtonsCap = (props) => {
        return props.colors.map((value, index) =>
            <button onClick={() => changeColor(value, 2)}
                    key={`2${[index]}`}
                    className={s.cell}
                    style={{backgroundColor: value}}/>)
    }

    return (
        <div className={s.container}>
            <div className={s.colorBlock}>
                <div className={s.text}>
                    Choose your color of cup lid
                </div>
                <div className={s.colorButtons}>
                    <ButtonsLid colors={props.colors}
                                dispatch={props.dispatch}
                                Update={props.Update}/>
                </div>

            </div>
            <div className={s.colorBlock}>
                <div className={s.text}>
                    Choose your color of cup
                </div>
                <div className={s.colorButtons}>
                    <ButtonsCap colors={props.colors}
                                dispatch={props.dispatch}
                                Update={props.Update}/>
                </div>

            </div>

        </div>
    )
}

export default Colortable;