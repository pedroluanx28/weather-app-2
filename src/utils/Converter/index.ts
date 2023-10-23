export function CelsiusFormat(temp: string) {
    const kelvin = Number(temp);
    const celsius = kelvin - 273.15;
    const celsiusFormated = String(celsius);

    return celsiusFormated.substring(0, 2) + '°C';
}