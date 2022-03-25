import s from './Construction.module.css'
import Colortable from './Colortable/Colortable';
import Logo from "./Logo/Logo";
import Stripe from "../Stripe/Stripe";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print'
import { CSSTransition } from 'react-transition-group';



const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

let Svg = (props) => {

    return (
        <div className={s.cup}>
            <Logo dispatch={props.dispatch} />
            <svg
                version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1045.7 1701.5" width={350}>
                <path className={s.st0} style={{ fill: props.colorLid }}
                    d="M987.5,136.5c0,74.6-207.6,135.1-463.7,135.1S60.1,211.1,60.1,136.5S267.7,1.4,523.8,1.4 S987.5,61.8,987.5,136.5z" />
                <path className={s.st0} style={{ fill: props.colorLid }}
                    d="M923.2,134.9c0,53.4-173.3,96.7-387.2,96.7s-387.2-43.3-387.2-96.7S322.2,38.2,536,38.2	S923.2,81.5,923.2,134.9z" />
                <path className={s.st1}
                    d="M262.1,75l270.1,156.6" />
                <path className={s.st1}
                    d="M259.1,73.5l-61.2,108.1" />
                <path className={s.st1}
                    d="M127.2,147.7l56.3,39.1c4.8,3.4-1.7,9.1-3.6,10.6l-3.4,2.5c-4.7,3.5-11.8,4.2-16.7,0.9 l-58.2-39.3c-4.9-3.3,0.3-8.1,4.7-12l2.3-2C113,143.7,122.3,144.4,127.2,147.7L127.2,147.7z" />
                <path className={s.st2} style={{ fill: props.colorCup }}
                    d="M29.3,391.3l180.2,1193c154.2,170,525.8,140.9,651.9-6.1l147.3-1183.8	C716.2,477.8,394.4,533.8,29.3,391.3L29.3,391.3z" />
                <path className={s.st0} style={{ fill: props.colorLid }}
                    d="M1,259.8l10.4,112.6c258.1,220.7,962.6,142.4,1024.2-9.6l6.9-99.9C763,430.8,423.2,390.3,1,259.8 L1,259.8z" />
                <path className={s.st0} style={{ fill: props.colorLid }}
                    d="M60.2,133.9l-12.4,57.9l-36.7,27.6l-9.6,42.2c100.9,134.7,829.3,210.2,1043.3,15.7l-5.2-45.7 l-36.7-36.9l-16.8-66C970.6,307.8,152.1,327.4,60.2,133.9L60.2,133.9z" />
            </svg>
        </div>


    );
}

let Construction = (props) => {

    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

    const printComponents = useRef(null);
    const handlePrint = useReactToPrint({ content: () => printComponents.current, copyStyles: true })

    const [showMessage, setShowMessage] = useState(false);

    const scrollToPay = () =>
    {        
        setShowMessage(true);
        setTimeout(executeScroll, 100)
        
    }

    return (
        <div className={s.mainbody}>
            <div className={s.constructor} >
                <div className={s.example} ref={printComponents}>
                    <Svg colorCup={props.Cup} colorLid={props.Lid} dispatch={props.dispatch} />
                </div>
                <div className={s.container}>
                    <Colortable colors={props.ColorOfCups} dispatch={props.dispatch} Update={props.Update} />
                    <div className={s.bunnonsBlock}>
                        <button onClick={scrollToPay} className={s.payButton}>BUY</button>
                        <button onClick={handlePrint} className={s.saveButton}>Save as PDF</button>
                    </div>
                </div>

            </div>
            <CSSTransition in={showMessage} timeout={0} unmountOnExit>
                <div className={s.AppWrapper} ref={myRef} >
                    <div className={s.fieldBlock}>
                    <Elements stripe={stripePromise}>
                        <Stripe />
                    </Elements>  
                    </div>

                </div>
            </CSSTransition>

            


        </div>
    )
}
export default Construction;