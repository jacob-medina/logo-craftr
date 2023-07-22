class Shape {
    constructor(text="", textColor, shapeColor) {
        if (text.length > 3) throw new Error("Must input a maximum of three characters.");

        this.text = text;
    }

    render() {
        throw new Error('Shape cannot render. Use child classes.');
    }
}

module.exports = Shape;