const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

const svg = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="blue" />

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`

const examples = './examples'; // Specify the path to the desired folder
const outputFilePath = path.join(examples, 'output.svg');
fs.mkdirSync(examples, { recursive: true });
fs.writeFile(outputFilePath, svg, (err) => {
    if (err) {
      console.error(err);
      return;
    }});