function snailCrawlsUp (height, dayDistance, nightDistance) {
    let coveredDistance = 0;
    let days = 1;
    
    while(coveredDistance < height) {
        coveredDistance += dayDistance;
        if(coveredDistance < height) {
            coveredDistance -= nightDistance;
            days++;
        } else {
            break;
        }
    }

    return days;
};

module.exports = snailCrawlsUp;