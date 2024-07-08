export const debounce = (func, timeout) => {
    let timer;

    const debounced = (...args) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        func(...args);
        timer = null;
      }, timeout);
    };

    debounced.cancel = () => {
      clearTimeout(timer);
      timer = null;
    };

    return debounced;
  };
