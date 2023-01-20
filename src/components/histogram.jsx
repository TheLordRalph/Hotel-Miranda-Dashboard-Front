import React, { Component } from "react";
import * as d3 from "d3";
import styled from 'styled-components';
import { ScaleBand } from "d3";

import dataReservation from '../JSON/reservation.json';



const LeyendBar = styled.div`
.leyendBar {
    position: absolute;
    width: fit-content;
    text-align: center;
    padding: 0.5rem;
    background: #FFFFFF;
    color: #313639;
    border: 1px solid #313639;
    border-radius: 8px;
    pointer-events: none;
    font-size: 1.3rem;
}
`;



class Histogram extends Component {

    componentDidMount() {
        this.drawChart();
    }


    drawChart() {
        // set the dimensions and margins of the graph
        const margin = { top: 10, right: 40, bottom: 20, left: 50 },
            width = 460 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;


        // append the svg object to the body of the page
        const svg = d3.select('#my_dataviz')
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);


        var div = d3.select('#leyendBar').append('div')
            .attr("class", "leyendBar")
            .style("opacity", 0);


        const typeData = ['price', 'ocupation'];
        // List of groups = species here = value of the first column called group -> I show them on the X axis
        const escale = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Add X axis
        const x = d3.scaleBand()
            .domain(escale)
            .range([0, width])
            .padding(0.2)
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x).tickSize(0));

        // Add Y axis
        const y = d3.scaleLinear()
            .domain([10, 60])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y).ticks(5).tickFormat(function(d) { return d + "€"; }).tickSize(10));

        const y2 = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);
        svg.append("g")
            .attr("transform", `translate(0, 0)`)
            .call(d3.axisRight(y2).ticks(5).tickFormat(function(d) { return d + "%"; }).tickSize(width));

        // Another scale for subgroup position?
        const xSubgroup = d3.scaleBand()
            .domain(typeData)
            .range([0, x.bandwidth()])
            .padding(0.2);

        // color palette = one color per subgroup
        const color = d3.scaleOrdinal()
            .domain(typeData)
            .range(['#135846', '#E23428']);

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
            .on('mouseover', (e, d) => {
                d3.select(this).transition()
                        .duration(50)
                        .attr('opacity', '.85');
                div.transition()
                        .duration(50)
                        .style("opacity", 1);
                div.html(type === 'price' ? d[type] + " €" : d[type] + " %")
                        .style("left", e.clientX + "px")
                        .style("top", e.clientY + "px");
            })
            .on('mouseout', function (e, d) {
                d3.select(this).transition()
                        .duration(50)
                        .attr('opacity', '1');
                div.transition()
                        .duration(50)
                        .style("opacity", 0);
            })
        ));

    }

    render(){
        return <div id='my_dataviz'><LeyendBar id="leyendBar"/></div>
    }

}


export default Histogram;
