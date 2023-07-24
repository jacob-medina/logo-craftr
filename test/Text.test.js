const Text = require('../lib/Text');

describe('Text', () => {
    describe('Text', () => {
        it('should have a default text of an empty string', () => {
            const text = new Text();
            expect(text.text).toBe("");
        });
    
        it('should store the text from the constructor', () => {
            const input = "SVG";
            const text = new Text(input);
            expect(text.text).toBe(input);
        });
    });

    describe('Color', () => {
        it('should store the color from the constructor', () => {
            const color = "red";
            const text = new Text("", color);
            expect(text.color).toBe(color);
        });
    });

    describe('Render', () => {
        it('should return an svg text tag with the proper text and color', () => {
            const input = "SVG";
            const color = "red";
            const text = new Text(input, color);
            expect(text.render()).toEqual(
                `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${input}</text>`
            );
        });
    });
});