Low-Stock Inventory Alert
Description

This program identifies items in a warehouse inventory that are running low in stock.

Each inventory item contains:

name – the name of the item

quantity – the number of items available in stock

The function checks which items have a quantity less than or equal to a given threshold value and returns their names sorted by quantity from lowest to highest.

Example Inventory
[
 {name:"Pump Seal", quantity:3},
 {name:"Bolt M12", quantity:120},
 {name:"Filter", quantity:5},
 {name:"Gasket", quantity:1}
]
Example Output
["Gasket","Pump Seal","Filter"]

This means these items need restocking because their quantities are low.

2. Work Order Summary Report
Description

This program generates a summary report for work orders received from a system such as IBM Maximo.

Each work order contains:

id – work order ID

status – OPEN or CLOSE

labourHours – number of hours spent on the work order

The function calculates:

Total number of work orders

Number of open work orders

Number of closed work orders

Average labour hours spent on all work orders

Example Output
{
 total: 3,
 open: 2,
 closed: 1,
 avgLabourHours: 3.8
}
Technologies Used

JavaScript (Vanilla JS)

Arrays and objects

Loops and conditions

Array methods
