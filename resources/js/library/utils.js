export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
export function cleanString(str) {
    return str
        .toLowerCase()  // Convert the string to lowercase
        .replace(/[^a-z0-9\s]/g, '-')  // Replace special characters with dashes
        .replace(/\s+/g, '-');  // Replace spaces with dashes
}

export function readableString(str) {
    return str.replace(/[^a-z0-9\s]/gi, ' ');  // Replace special characters with spaces
}

export function convertMinutes(mins) {
    if (mins < 60) {
        return `${mins} min${mins === 1 ? '' : 's'}`;
    } else {
        const hours = Math.floor(mins / 60);
        const remainingMins = mins % 60;
        let result = `${hours} hr${hours === 1 ? '' : 's'}`;

        if (remainingMins > 0) {
            result += ` ${remainingMins} min${remainingMins === 1 ? '' : 's'}`;
        }

        return result;
    }
}