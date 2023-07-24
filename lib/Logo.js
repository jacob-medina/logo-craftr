const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');
const Text = require('./Text');

class Logo {
    constructor(options={}) {
        const {text, textColor, shape, shapeColor} = options;

        this.text = new Text(text, textColor);

        switch(shape) {
            case "circle":
                this.shape = new Circle();
                break;
            
            case "square":
                this.shape = new Square();
                break;
            
            case "triangle":
                this.shape = new Triangle();
                break;
        }

        this.shape.setColor(shapeColor);
    }

    render() {
        const svg =
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.render()}

    ${this.text.render()}
</svg>`;
        return svg;
    }
}

module.exports = Logo;