import s from './Weather.module.css'
import { useEffect, useState, useRef } from 'react';
import * as d3 from "d3";
import sun from '../../../../assets/pic/sun.svg'
import error from '../../../../assets/pic/error.svg'

let generatePlot = (refPoint, data, sizeX, sizeY, nowTime) => {

    const margin = { top: 10, right: 40, bottom: 150, left: 100 },
        width = sizeX - margin.left - margin.right,
        height = sizeY - margin.top - margin.bottom;

    //create svg element   
    const svg = d3
        .select(refPoint.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    //make data array for axis Y

    const yData = data.map((e) => {
        return e.temperature;
    })

    //create x axis
    const x = d3.scaleTime()
        .domain([data[0].time * 1000, nowTime])
        .range([0, width]);
    svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .style("font-size", 16)
        .style("fill", "#000")

    //create y axis
    const y = d3.scaleLinear()
        .domain([Math.min.apply(null, yData) - 1, Math.max.apply(null, yData) + 1])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .style("text-anchor", "end")
        .style("font-size", 16)
        .style("fill", "#000")

    //add div element for information about temperature
    const tooltip = d3.select(refPoint.current)
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("position", "absolute")
        .style("pointer-events", "none")
        .style("text-align", "center")

    //create handler for mouse moution
    const mouseover = function (event, d) {
        d3.select(this)

            .style("opacity", 1)
            .style("stroke", "white")
            .style("stroke-width", "2")
            .attr("r", 6)

        tooltip
            .transition().duration(200)
            .style("opacity", 1)
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY) + "px")
    }

    const mousemove = function (event, d) {
        const currentHours = new Date(d.time * 1000).getHours()
        const currentDate = new Date(d.time * 1000).getDate()
        const currentMonth = new Date(d.time * 1000).getMonth()
        const currentYear = new Date(d.time * 1000).getFullYear()

        tooltip
            .html(`Tempetarure: ${d.temperature} &degC <br>
            ${currentYear}-${currentMonth}-${currentDate} / ${currentHours}:00`)
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY) + "px");
    }

    const mouseleave = function (d) {
        d3.select(this)
            .style("opacity", 1)
            .style("stroke", "none")
            .attr("r", 4)
        tooltip
            .transition().duration(200)
            .style("opacity", 0)
    }

    //create circle point
    svg
        .selectAll("All")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(new Date(d.time * 1000)))
        .attr("cy", (d) => y(d.temperature))
        .attr("r", 4)
        .attr("fill", "steelblue")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)


    // create line between circle
    svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1)
        .attr("d", d3.line()
            .x(function (d) {
                return x(new Date(d.time * 1000))
            })
            .y(function (d) {
                return y(d.temperature)
            })
        )
    const legend_keys = ["Tempetarure"]

    const lineLegend = svg
        .selectAll(".lineLegend").data(legend_keys)
        .enter().append("g")
        .attr("class", "lineLegend")
        .attr("transform", `translate(${50}, ${height / 20})`);

    lineLegend.append("text").text(function (d) {
        return d;
    })
        .attr("transform", "translate(10,5)");

    lineLegend.append("circle")
        .attr("r", 5)
        .attr("fill", "steelblue")
}


let Weather = () => {
    const APIkey = 'fa0d06ddaa22e7cadbe342479a06dbbe'
    const [status, setStatus] = useState('Load');
    const myref = useRef();
    let outdoor = [];

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function successHandler(position) {
        getWeatherHistory(position.coords.latitude, position.coords.longitude, position.timestamp);
    }

    function errorHandler(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                break;
        }
    }

    async function getWeatherHistory(latitude, longitude, time) {
        const msInDay = 86400;
        for (let i = 5; i > 0; i--) {
            let url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${Math.round(time / 1000) - msInDay * i}&appid=${APIkey}`;
            await gatDataFromServer(url)
        }
        setStatus('')
        generatePlot(myref, outdoor, 900, 500, time)
        setStatus('')
    }

    async function gatDataFromServer(url) {
        const response = await fetch(url)
        dataFormatter(await response.json())
    }

    function dataFormatter(data) {
        let weather = {};
        for (let k = 0; k < data.hourly.length; k++) {
            weather[`temp${k}`] = Math.round(data.hourly[k].temp - 273.15);
            weather[`dt${k}`] = data.hourly[k].dt;
            const hours = new Date(data.hourly[k].dt * 1000).getHours();
            if (hours % 3 === 0) {
                outdoor.push(joinData(weather[`temp${k}`], `${data.hourly[k].dt}`));
            }
        }
    }

    function joinData(temperature, time) { return { temperature, time } }

    useEffect(() => {
        getLocation();
    }, [])

    if (status === 'Load') {
        return (
            <div className={s.loadingBlock}>
                <p>Please wait for data to load...</p>
                <img src={sun} alt="sun" />
            </div>
        )
    } else if (status === 'ERROR') {
        return (
            <div className={s.loadingBlock}>
                <img src={error} alt="error" />
            </div>
        )
    } else {
        return (
            <div ref={myref}>
            </div>
        )
    }
}

export default Weather;