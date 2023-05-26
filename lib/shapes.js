class Shape {
constructor(background, shapeColor, textColor, text){
this.background = background;
this.shapeColor = shapeColor;
this.textColor = textColor;
this.text = text;
}}

class Triangle extends Shape{
constructor(background, shapeColor, textColor, text){
    super(background, shapeColor, textColor, text)
    this.renderTriangle();

}
renderTriangle() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${this.background}"/>
    <polygon points="150,20 240,180 60,180" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    
}
}

class Square extends Shape{
constructor(background, shapeColor, textColor, text){
    super(background, shapeColor, textColor, text)
    this.renderSquare();

}
renderSquare() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${this.background}"/>
    <rect x="110" y="60" width="80" height="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
}
}
class Circle extends Shape{
constructor(background, shapeColor, textColor, text){
    super(background, shapeColor, textColor, text)
    this.renderCircle();

}
renderCircle() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${this.background}"/>
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
}
}

module.exports = {Triangle, Square, Circle};
