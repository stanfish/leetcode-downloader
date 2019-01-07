/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let reVal=0;
    prices.forEach((price,i) => {
        let sell = Math.max(...prices.slice(i+1));
        let profit = sell - price;
        if (profit > reVal){
            reVal = profit;
        }
    });
    
    return reVal;
};
