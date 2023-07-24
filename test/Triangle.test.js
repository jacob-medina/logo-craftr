const Shape = require('../lib/Shape');
const Triangle = require('../lib/Triangle');

describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Triangle class.', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        });

        it('should be a child of the Shape class.', () => {
            expect(Triangle.prototype).toBeInstanceOf(Shape);
        });
    });

    describe('Color', () => {
        it('should store the shape color from the Shape constructor', () => {
            const color = 'red';
            const triangle = new Triangle(color);
            expect(triangle.color).toBe(color);
        });
    });

    describe('Render', () => {
        it('should return a polygon svg tag with its color', () => {
            const color = 'red';
            const triangle = new Triangle(color);
            expect(triangle.render()).toEqual(
                `<polygon points="150,0 244,162 56,162" fill="${color}" />`
            );
        });
    });
});