export const FARENHEIT = 1;
export const CELSIUS = 200;


export function tempConverter(degrees, convertTO) {

    if (convertTO === FARENHEIT) {
        return (degrees * (9 / 5)) + 32;
    } else {
        return (degrees - 32) * (5 / 9);
    }


}

