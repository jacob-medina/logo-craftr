class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Shape cannot render. Use child classes.');
    }
}

module.exports = Shape;