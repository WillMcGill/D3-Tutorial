console.log(d3)
const svg = d3.select('svg');



const width = svg.attr('width');
const height = svg.attr('height')
const eyeSpacing = 100;
const eyeYOffset = -70
const eyeRadius = 30;
const eyebrowWidth = 70;
const eyebrowHeight = 20;

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

const leftEyebrow = eyesG.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', - eyeSpacing - eyebrowWidth / 2)
    .attr('y', -70)

const rightEyebrow = eyesG.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', eyeSpacing - eyebrowWidth / 2)
    .attr('y', -70)

const mouth = g.append('path')
    .attr('d', d3.arc()({
    innerRadius:160,
    outerRadius:175,
    startAngle:Math.PI / 2,
    endAngle:Math.PI *3 / 2
    }))
    