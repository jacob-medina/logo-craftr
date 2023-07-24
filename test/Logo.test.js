const Logo = require('../lib/Logo');
const Circle = require('../lib/Circle');

describe('Logo', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Logo class', () => {
            const logo = new Logo();
            expect(logo).toBeInstanceOf(Logo);
        });
    });

    describe('Render', () => {
        it('should return an svg element with dimensions of 300x200 and adhere to the given options', () => {
            const options = {
                text: "SVG",
                textColor: "red",
                shape: "circle",
                shapeColor: "black"
            };
            const logo = new Logo(options);
            expect(logo.render()).toEqual(
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${new Circle(options.shapeColor).render()}

    ${new Text(options.text, options.textColor).render()}
</svg>`
            );
        });
    });
});