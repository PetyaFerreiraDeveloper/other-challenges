function asperandPixelCounter(k) {
    if (k == 1) {
        return 11;
    };

    // return k * k - (k - 2) * (k - 2) + 2 * (k + 2) + k + 1 + k + 1;
    return 8 * k + 2;
}

asperandPixelCounter(2);

module.exports = asperandPixelCounter;