class Shape {
    constructor(text="", textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('Shape cannot render. Use child classes.');
    }
}

module.exports = Shape;