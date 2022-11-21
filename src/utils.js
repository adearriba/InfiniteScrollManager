function debounce(func, delay = 300) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

const utils = {
    debounce,
}

export { 
    debounce,
};

export default utils;
