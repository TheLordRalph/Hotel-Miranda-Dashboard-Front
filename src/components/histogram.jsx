import React, { Component } from "react";
import * as d3 from "d3";

import dataReservation from '../JSON/reservation.json';

class Histogram extends Component {

    componentDidMount() {
        this.drawChart();
    }


    drawChart() {
        // set the dimensions and margins of the graph
        const margin = { top: 10, right: 30, bottom: 20, left: 50 },
            width = 560 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;



        // append the svg object to the body of the page
        const svg = d3.select('#my_dataviz')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("transform", `translate(${margin.left},${margin.top})`);

    

        console.log(dataReservation.checkIn);


        const typeData = ['price', 'ocupation'];
        // List of groups = species here = value of the first column called group -> I show them on the X axis
        const escale = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Add X axis
        const x = d3.scaleBand()
            .domain(escale)
            .range([0, width])
            .padding([0.2])
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x).tickSize(0));

        // Add Y axis
        const y = d3.scaleLinear()
            .domain([10, 60])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        const y2 = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);
        svg.append("g")
            .attr("transform", `translate(${width}, 0)`)
            .call(d3.axisRight(y2));

        // Another scale for subgroup position?
        const xSubgroup = d3.scaleBand()
            .domain(typeData)
            .range([0, x.bandwidth()])
            .padding([0.2])

        // color palette = one color per subgroup
        const color = d3.scaleOrdinal()
            .domain(typeData)
            .range(['#e41a1c', '#4daf4a'])

        // Show the bars
        typeData.map(type => (
            svg.selectAll(".var")
            .data(dataReservation.checkIn)
            .enter()
            .append("g")
            .attr("transform", function(d, i) { return "translate(" + x(escale[i]) + ",0)"; })
            .append("rect")   
                .attr("x", (d, i) => xSubgroup(type))
                .attr("y", (d, i) => type === 'price' ? y(d[type]) : y2(d[type]))
                .attr("width", xSubgroup.bandwidth())
                .attr("height", (d, i) => type === 'price' ? height - y(d[type]) : height - y2(d[type]))
                .attr("fill", (d, i) => color(type))
        ));

    }

    render(){
        return <div id='my_dataviz'></div>
    }

}


export default Histogram;




// .attr("transform", d => `translate(${x(0)}, 0)`)
// .selectAll("rect")
// .data(function (d) { return d.checkIn.map(function (sub) { return sub; }); })
// .join("rect")

// .attr("x", d => xSubgroup(d.day))
// .attr("y", d => y(d.value))
// .attr("width", xSubgroup.bandwidth())
// .attr("height", d => height - y(d.value))
// .attr("fill", d => color(d.key));