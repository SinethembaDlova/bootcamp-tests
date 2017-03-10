var isFromBellville = function(fromBell)
{
  var isFrom = fromBell.startsWith("CY");

  return isFrom;
};

isFromBellville("CY 1232 2233");
var bell = isFromBellville("CY 1232 2233");

console.log(bell);
