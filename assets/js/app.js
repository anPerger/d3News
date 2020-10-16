// // @TODO: YOUR CODE HERE!
// const margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// const svg = d3.select("#scatter")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");


d3.csv("data.csv", function(data) {
    const dataset = data;
    const w = 600;
    const h = 300;

   

//Create SVG element
    const svg = d3.select("scatter")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return d[0];
      })
      .attr("cy", function(d) {
       return d[1];
      })
      .attr("r", function(d) {
       return Math.sqrt(h - d[1]);
      })
      .attr("fill", "#00aa88");

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d) {
        return d[0] + "," + d[1];
      })
      .attr("x", function(d) {
        return d[0];
      })
      .attr("y", function(d) {
        return d[1];
      })
      .attr("font-size", "15px")
      .attr("fill", "white")
})