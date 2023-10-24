export function CelsiusFormat(temp: string) {
    const kelvin = Number(temp);
    const celsius = kelvin - 273.15;
    const celsiusFormated = String(celsius);

    if (celsius < 10 && celsius > -1) {
        return celsiusFormated.substring(0, 1) + '°';
    } else if (celsius < 0 && celsius > -10) {
        return celsiusFormated.substring(0, 2) + '°';
    } else if (celsius < -10) {
        return celsiusFormated.substring(0, 3) + '°';
    } else {
        return celsiusFormated.substring(0, 2) + '°';
    }
}