const Shape = require('../lib/Shape');
const Square = require('../lib/Square');

describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Square class.', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        });

        it('should be a child of the Shape class.', () => {
            expect(Square.prototype).toBeInstanceOf(Shape);
        });
    });

    describe('Color', () => {
        it('should store the shape color from the Shape constructor', () => {
            const color = 'red';
            const square = new Square(color);
            expect(square.color).toBe(color);
        });
    });

    describe('Render', () => {
        it('should return a rect svg tag with its color', () => {
            const color = 'red';
            const square = new Square(color);
            expect(square.render()).toEqual(
                `<rect x="70" y="20" width="160" height="160" fill="${color}"/>`
            );
        });
    });
});