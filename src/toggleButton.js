export function insertButton(clickHandler) {
    const btn = document.createElement('button');
    btn.style.position = 'fixed';
    btn.style.bottom = 0;
    btn.style.right = 0;
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
    btn.style.zIndex = '1000';
    btn.textContent = 'TOGGLE DARK MODE';
    document.body.appendChild(btn);
    btn.addEventListener('click', clickHandler);
}
