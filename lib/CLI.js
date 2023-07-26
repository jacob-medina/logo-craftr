const inquirer = require('inquirer');
const Logo = require('./Logo');
const fs = require('fs');

function inquireLogo(relDir, filename) {
    inquirer
        .prompt([
            {
                name: 'text',
                type: 'input',
                message: 'Input logo text (max 3 characters):',
                validate: (input) => {
                    if (input.length > 0 && input.length <= 3) return true;
                    if (input.length < 1) return 'Logo text must be at least 1 character!';
                    return 'Logo text must be 3 or less characters!'
                }
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'Input text color:'
            },
            {
                name: 'shape',
                type: 'list',
                choices: ['circle', 'square', 'triangle'],
                message: 'Choose a shape:'
            },
            {
                name: 'shapeColor',
                type: 'input',
                message: 'Input shape color:'
            }
        ])
        .then((res) => new Logo(res).render())
        .then((svg) => writeSVG(svg, relDir, filename));
}

function writeSVG(svg, relDir, filename) {
    fs.writeFile(`${relDir}/${filename}`, svg, 'utf-8', () => {
        console.log('Generated logo.svg');
    })
}

module.exports.inquireLogo = inquireLogo;