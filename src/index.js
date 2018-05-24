import {toggle as toggleTheme} from './theme';
import {insertButton} from './toggleButton';

insertButton(toggleTheme);
document.addEventListener('keyup', ev => {
    if (ev.ctrlKey && ev.shiftKey && ev.key === 'E') {
        toggleTheme();
    }
});
