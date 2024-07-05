// Function to return the current year
export function getFullYear() {
    return new Date().getFullYear();
}

// Function to return footer text based on isIndex boolean
export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
