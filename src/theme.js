const css = `
a, td {
    background-color: black;
    color: white;
    padding: 10;
}`;
const styleElement = document.createElement('style');
let isActive = false;
document.body.appendChild(styleElement);

export function toggle() {
    if (isActive) {
        styleElement.sheet.deleteRule(0);
    } else {
        styleElement.sheet.insertRule(css, 0);
    }
    isActive = !isActive;
}