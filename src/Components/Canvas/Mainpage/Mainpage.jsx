import s from './Mainpage.module.css'
import photo from '../../../assets/pic/photo.jpeg'
let Mainpage = () => {
    return (
        <div className={s.container}>
            <div className={s.hero}>
                <div><img src={photo} alt="me" className={s.photo} /></div>
                <div className={s.hero_imformation}>
                    <h1>Hello, My name is Alexandr</h1>
                    <h2>and I'm Junior Frontend developer</h2>
                </div>
            </div>
            <div className={s.site_discription}>
            <span>I am engaged in development of medical equipment, in particular,
                high-frequency surgical equipment.
                My strong skill is low level programming as C, Verilog.
                In my project I use C++ to work with graphic.
                I'm currently learning JavaScript and React. </span>

                <span>In this simple single-page application, you can choose a cup with a lid
                from the available colors, save as a pdf,
                and see the weather history for the past 5 days.</span>
                <ul>I used the following APIs and libraries to create this application:
                <li>Stripe API</li>
                <li>Openweather API</li>
                <li>Geolocation</li>
                <li>React</li>
                <li>D3</li>
                <li>ReactToPrint</li>
            </ul>
            </div>
            {/* <div>
 
            
            <h2>and I'm Junior Frontend developer</h2>
            <span>I am engaged in development of medical equipment, in particular,
                high-frequency surgical equipment.
                My strong skill is low level programming as C, Verilog.
                In my project I use C++ to work with graphic.
                I'm currently learning JavaScript and React. </span>

            <span>In this simple single-page application, you can choose a cup with a lid
                from the available colors, save as a pdf,
                and see the weather history for the past 5 days.</span>

            <ul>I used the following APIs and libraries to create this application:
                <li>Stripe API</li>
                <li>Openweather API</li>
                <li>Geolocation</li>
                <li>React</li>
                <li>D3</li>
                <li>ReactToPrint</li>
            </ul>
            </div> */}




        </div>
    )
}

export default Mainpage;