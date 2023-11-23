//initialize the structure of the Item
class Item {
  constructor(weight, profit) {
    this.weight = weight;
    this.profit = profit;
  }
}

//Compare the items to sort them in non-increasing order
const compare = (a, b) => {
  let cmp1 = a.profit / a.weight;
  let cmp2 = b.profit / b.weight;
  return cmp1 > cmp2;
};
//Main function to perform the evaluation
const fractionalKnapsack = (maxWeight, arr) => {
  let finalProfit = 0.0;
  //sort the item based on ratio
  arr.sort(compare);

  for (i = 0; i < arr.length; i++) {
    if (arr[i].weight <= maxWeight) {
      maxWeight -= arr[i].weight;
      finalProfit += arr[i].profit;
    } else {
      //what if the weight is greater than the remaining weight? We add a fraction,,,sounds good,huh!!
      finalProfit += arr[i].profit * (maxWeight / arr[i].weight);
      break;
    }
  }
  return finalProfit;
};
let maxWeight = 50;
let arr = [new Item(60, 10), new Item(100, 20), new Item(120, 30)];
console.log(fractionalKnapsack(maxWeight, arr));
