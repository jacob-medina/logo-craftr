const Shape = require('../lib/Shape');

describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('Color', () => {
        it('should store the shape color from the constructor', () => {
            const color = 'red';
            const shape = new Shape(color);
            expect(shape.color).toBe(color);
        });

        it('should store the shape color when SetColor is called', () => {
            const color = "red";
            const shape = new Shape();
            shape.setColor(color);
            expect(shape.color).toBe(color);
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