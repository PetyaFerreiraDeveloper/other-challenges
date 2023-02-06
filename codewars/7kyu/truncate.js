const truncate = (str, num) => {
    if (num >= str.length) {
        return str;
    }
    if(num <= 3) {
        return str.substring(0, num) + '...';
    } else {
        let length = num - 3;
        return str.substring(0, length) + '...';
    }
};

module.exports = truncate;