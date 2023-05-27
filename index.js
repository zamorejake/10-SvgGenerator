const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

console.info('\x1b[34m',"Welcome to the SVG shape generator! Please respond below.")
inquirer
  .prompt([
    {
      type: "input",
      message: "What 3 letters do you want?:",
      name: "Text",
      validate: (Text) => {
        if (Text.length > 3){
          throw new Error(`\x1b[31mCannot be more than 3 letters, try again.\n`)
        }
        return true;
      }
    },
    {
      type: "input",
      message: "What text color do you want for the text? (Color or HEXcode with # in front):",
      name: "TextColor",
    },
    {
      type: "list",
      message: "Which shape do you want?:",
      name: "Shape",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      message: "What color do you want for the shape? (Color or HEXcode with # in front):",
      name: "ShapeColor",
    },
    {
      type: "input",
      message: "What color do you want for the background? (Color or HEXcode with # in front):",
      name: "BackgroundColor",
    },
  ])
  .then((response) => {
    switch (response.Shape) {
      case "Triangle":
        response.Shape = new Triangle();
        break;
      case "Square":
        response.Shape = new Square();
        break;
      case "Circle":
        response.Shape = new Circle();
        break;
    }
    return response;
  })
  .then((response) => {
    const shape = response.Shape;
    shape.background = response.BackgroundColor;
    shape.shapeColor = response.ShapeColor;
    shape.textColor = response.TextColor;
    shape.text = response.Text;
    const shape2 = shape.renderShape();
    const examples = "./examples";
    const outputFilePath = path.join(examples, "logo.svg");
    fs.mkdirSync(examples, { recursive: true });
    fs.writeFile(outputFilePath, shape2, (err) => {
      if (err) {
        console.error(err);
        console.log("Please try again")
      } else {
        console.info('\x1b[32m',"Generated logo.svg!");
      }
    });
  });
