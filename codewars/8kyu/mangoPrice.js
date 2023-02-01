function mangoPrice(quantity, price) {
   let promotions = Math.floor(quantity / 3);
   let fruits = quantity % 3;
   return promotions*2*price + fruits*price;
}
module.exports = mangoPrice;