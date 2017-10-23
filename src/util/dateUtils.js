export function pad(n) {
    return (n < 10) ? (`0${n}`) : n;
}

export function formatDateToApi(data) {
    return (`${data.getFullYear()}-${this.pad(data.getMonth() + 1)}-${this.pad(data.getDate())}`);
}

export function formatDateToString(data) {
    return (`${this.pad(data.getDate())}/${this.pad(data.getMonth() + 1)}/${data.getFullYear()}`);
}
