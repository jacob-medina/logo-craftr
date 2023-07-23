const Shape = require('../lib/Shape');
const Circle = require('../lib/Circle');

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Circle class.', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        });

        it('should be a child of the Shape class.', () => {
            expect(Circle.prototype).toBeInstanceOf(Shape);
        });
    });

    describe('Color', () => {
        it('should store the shape color from the Shape constructor', () => {
            const color = 'red';
            const circle = new Circle(color);
            expect(circle.color).toBe(color);
        });
    });

    describe('Render', () => {
        it('should return a circle svg tag with its color', () => {
            const color = 'red';
            const circle = new Circle(color);
            expect(circle.render()).toEqual(
                `<circle cx="50" cy="50" r="50" fill="${color}" />`
            );
        });
    });
});