import * as d3 from 'd3';
import 'babel-polyfill'; 
const ScrollMagic = require('scrollmagic');

import './style.css';
//import url from './assets/envelope-advantage-for-web-01.svg';
import url from './assets/envelope-advantage-for-web-20180823-01.svg';
import * as states from './config.js';


//Global ScrollMagic controller
const controller = new ScrollMagic.Controller({
		addIndicators: true
	});

const init = async function(){

	const svg = await d3.svg(url).then(doc => d3.select(doc).select('svg')); //d3 selection

	//Append <svg> image to document
	svg.style('width', '450px');
	d3.select('#animation').append(() => svg.node());

	//Set up ScrollMagic scenes triggered by captions
	d3.selectAll('.caption').nodes().forEach(el => {
		
		const state = el.getAttribute('data-state');
		const scene = new ScrollMagic.Scene({
			triggerElement: el,
			triggerHook: 'onCenter',
			reverse: true,
			duration: el.clientHeight
		});

		const animate = setState(svg, states[state]);

		scene
			.on('enter', () => {
				//console.log(state + ' enter');
				animate(1000);
			})
			.on('progress', event => {
				animate(null, event.progress);
			})
			.on('leave', () => {
				//console.log(state + ' leave');
			});

		scene.addTo(controller);

	});

	//Set up an extra scene to pin the animation in place
	const enterExitScene = new ScrollMagic.Scene({
		triggerElement: '#animation',
		triggerHook: 'onLeave',
		duration: d3.select('.full-screen').node().clientHeight * 6.5 //specifies how long the image is pinned
	});

	enterExitScene
		.setPin('#animation', {pushFollowers: false});

	enterExitScene.addTo(controller);


	//Set initial animation state before moving on;
	await setState(svg, states.state1)(0);

}

//Applies animation state to <svg> image, and animates it in "duration" milliseconds
function setState(svg, state){

	//Each object in state.layers correspond to an immediately triggered transition with the specified target state
	const layerVisibility = state.layers.map(l => {
		if(typeof l === 'string') return {layer: l, style: {opacity:1}};
		else return l;
	});
	//Each object in state.progress correspond to a progressed based animation
	const layerProgress = state.progress || [];

	//d3 selection of <g> layers; discard <style> layer
	const layers = svg.selectAll(function(){
			return this.children;
		})
		.filter(function(){
			return this.tagName === 'g';
		});

	//Return an "animate" function, which can either immediately start a transition based on "duration", or animate based on progress %
	return function(duration, progress){

		//If duration parameter is supplied, transition layer to the target state
		if(duration != null){
			layers.each(function(){
					const setting = layerVisibility.filter(d => d.layer === this.id);

					if(!setting.length){
						//if layer setting is not specified, hide this layer
						d3.select(this).transition().duration(duration).style('opacity', 0);
					}else{
						const {style} = setting[0];
						d3.select(this).transition().duration(duration).style('opacity', style.opacity);
					}
				});
			return delay(duration);
		}else if(layerProgress.length){

			//progress based animation
			state.progress.forEach(({layer, subSelector}) => {

				layers.filter(function(){ return this.id === layer})
					.selectAll(subSelector)
					.each(function(){
						const length = this.getTotalLength();
						d3.select(this)
							.attr('stroke-dasharray', `${length} ${length}`)
							.attr('stroke-dashoffset', `${(1 - progress)*length}`);
					});

			});
			return Promise.resolve(progress);

		}else{
			return Promise.resolve(0);
		}

	}

}

const delay = duration => new Promise((resolve, reject) => {
	setTimeout(resolve, duration);
});

init();