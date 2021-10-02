console.log(d3)
const svg = d3.select('svg');



const width = svg.attr('width');
const height = svg.attr('height')
const eyeSpacing = 100;
const eyeYOffset = -70
const eyeRadius = 30;

const g = svg.append('g')
    .attr('transform', `translate(${width / 2},${height/2})`)


const circle = g.append('circle')
    .attr('r', width / 3 )
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const eyesG = g.append('g')
    .attr('transform', `translate(0,${eyeYOffset})`)

const leftEye = eyesG.append('circle')
    .attr('r', eyeRadius )
    .attr('cx',  - eyeSpacing);

const rightEye = eyesG.append('circle')
    .attr('r', eyeRadius )
    .attr('cx',  + eyeSpacing);


const mouth = g.append('path')
    .attr('d', d3.arc()({
    innerRadius:80,
    outerRadius:100,
    startAngle:Math.PI / 2,
    endAngle:Math.PI *3 / 2
    }))
    