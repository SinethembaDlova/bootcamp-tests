var countRegNumber = function(regnum)
{
  var splReg = regnum.split(",");
  return splReg.length;
  //return splReg.length
};
countRegNumber("CA 182736, CY 523519, CJ 812328");
countRegNumber("CA 42665, AA 12 RT GP");

var reg1 = countRegNumber("CA 182736, CY 523519, CJ 812328");
var reg2 = countRegNumber("CA 42665, AA 12 RT GP");

console.log(reg1);
console.log(reg1.length);
console.log(reg2);
console.log(reg2.length);
