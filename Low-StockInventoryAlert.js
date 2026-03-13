function getLowStockItems(inventory, threshold) {
     return inventory
    .filter(item => item.quantity <= threshold)
    .sort((a, b) => a.quantity - b.quantity)
    .map(item => item.name);

}

const inventory = [
  {name:"Pump Seal", quantity:3},
  {name:"Bolt M12", quantity:120},
  {name:"Filter", quantity:5},
  {name:"Gasket", quantity:1}
];

console.log(getLowStockItems(inventory, 5));