import dayjs from "dayjs"

export default function FormatDate(miliseconds: number) {
    const date = dayjs(miliseconds * 1000).format('DD/MM/YYYY HH:mm:ss');

    return date;
}
