const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,0 244,162 56,162" fill="${this.color}" />`;
    }
}

module.exports = Triangle;