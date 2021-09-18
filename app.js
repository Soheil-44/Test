const bill = 230
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
console.log(`Bill=>${bill} and Tip=>${tip} and Tip + bill => ${tip+bill}`)