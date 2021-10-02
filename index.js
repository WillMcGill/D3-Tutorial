console.log(d3)
const svg = d3.select('svg');

const circle = svg.append('circle');

const width = svg.attr('width');
const height = svg.attr('height')

circle.attr('r', width /3 );
circle.attr('cx', width / 2);
circle.attr('cy', height / 2);