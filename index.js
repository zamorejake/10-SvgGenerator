const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require('./lib/shapes.js');
const shape = new Circle();
shape.background = "blue";
shape.shapeColor = "red";
shape.textColor = "purple";
shape.text = "SVG";
const shape2 = shape.renderCircle();
const examples = './examples'; // Specify the path to the desired folder
const outputFilePath = path.join(examples, 'output.svg');
fs.mkdirSync(examples, { recursive: true });
fs.writeFile(outputFilePath, shape2, (err) => {
    if (err) {
      console.error(err);
      return;
    }});