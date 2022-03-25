import Weather from './Weather/Weather';
import s from './Historical.module.css'

let About = () =>
{
    return (
        <div className={s.weatherBlock}>
            <Weather/>
        </div>
    )
}


export default About;