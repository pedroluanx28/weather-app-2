export function Converterkm(value: number) {
    const kmH = value * 3.6;
    const kmHString = String(kmH);

    return kmHString.substring(0, 4);
}
