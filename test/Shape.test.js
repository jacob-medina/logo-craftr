const Shape = require('../lib/Shape');

describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('Text', () => {
        it('should have a default text of an empty string', () => {
            const shape = new Shape();
            expect(shape.text).toBe("");
        });

        it('should store the text from the constructor', () => {
            const text = "SVG";
            const shape = new Shape(text);
            expect(shape.text).toBe(text);
        });

        it('should throw an error if the text is longer than three characters', () => {
            const text = "SVGA";
            const error = new Error("Must input a maximum of three characters.");
            const shape = () => new Shape(text);
            expect(shape).toThrow(error);
        });
    });

    describe('Color', () => {
        it('should store the text color keyword from the constructor', () => {
            const color = 'blue';
            const shape = new Shape("", color, color);
            expect(shape.textColor).toBe(color);
        });

        it('should store the text color hexidecimal from the constructor', () => {
            const color = '#ffff00';
            const shape = new Shape("", color, color);
            expect(shape.textColor).toBe(color);
        });

        it('should store the shape color keyword from the constructor', () => {
            const color = 'red';
            const shape = new Shape("", color, color);
            expect(shape.shapeColor).toBe(color);
        });

        it('should store the shape color hexidecimal from the constructor', () => {
            const color = '#00ff00';
            const shape = new Shape("", color, color);
            expect(shape.shapeColor).toBe(color);
        });
    });

    describe('Render', () => {
        it('should throw an error', () => {
            const shape = new Shape();
            const error = new Error('Shape cannot render. Use child classes.');
            expect(shape.render).toThrow(error);
        });
    });
});