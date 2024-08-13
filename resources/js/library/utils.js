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