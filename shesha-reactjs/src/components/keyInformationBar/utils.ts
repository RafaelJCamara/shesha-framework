
export const addPx = (value) => {
    value = value == null || value === '' || value === undefined ? "100%" : value;
    return /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
};

export const strings = {
    tooltip: 'You can use any unit (%, px, em, etc). px by default if without unit',
};