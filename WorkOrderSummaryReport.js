function summarizeWorkOrders(workOrders) {

  let total = workOrders.length;
  let open = 0;
  let closed = 0;
  let totalHours = 0;

  for (let i = 0; i < workOrders.length; i++) {

    if (workOrders[i].status === "OPEN") {
      open++;
    }

    if (workOrders[i].status === "CLOSE") {
      closed++;
    }

    totalHours += workOrders[i].labourHours;
  }

  let avgLabourHours = (totalHours / total).toFixed(1);

  return {
    total: total,
    open: open,
    closed: closed,
    avgLabourHours: Number(avgLabourHours)
  };
}

const wos = [
  {id:"WO1001",status:"OPEN",labourHours:3.5},
  {id:"WO1002",status:"CLOSE",labourHours:6.0},
  {id:"WO1003",status:"OPEN",labourHours:2.0}
];

console.log(summarizeWorkOrders(wos));