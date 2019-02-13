const brain = require('brain.js');
const data = require('./data.json');

data.forEach(item => {
  item.input.r = parseInt(item.input.r) / 255
  item.input.g = parseInt(item.input.g) / 255
  item.input.b = parseInt(item.input.b) / 255
})

const network = new brain.NeuralNetwork();

network.train(data);

const textColourIsLight = brain.likely({ r: 86/255, g: 120/255, b: 144/255 }, network);
console.log(textColourIsLight)

