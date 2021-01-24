const area = document.getElementById('haste');

const iconInfo = document.getElementById('nav__info');
const iconClear = document.getElementById('nav__clear');
const heroImage = document.querySelector('img');

const localStorageStatus = true;

const goTo = (url) => {
    location.href = url;
}

const goToNew = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
}

const testLocalStorage = () => {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
    } catch {
        localStorageStatus = false;
        console.error('Saving haste failed! LocalStorage is not defined.');
    }
}

const saveHaste = (text) => {
    localStorage.setItem('hasteValue', text);
}

const loadHaste = () => {
    const hValue = localStorage.getItem('hasteValue');
    area.value = hValue;
}

area.addEventListener('input', () => {
    saveHaste(area.value);
});

heroImage.addEventListener('click', () => {
    goTo('./');
});

loadHaste();