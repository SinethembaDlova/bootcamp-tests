var findItemsOver = function(items,threshold)
{
    var over20 = [];

    for(var i = 0; i < items.length; i++)
    {
      if(items[i].price > threshold)
      {
        over20.push(items[i]);
      }
    }
    return over20;
}

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3}];

var itemList2 = [
        {name : 'coffee', price : 25},
        {name : 'tea', price : 15},
        {name : 'sandwich', price : 25},
        {name : 'muffin', price : 10}];

var bamba = findItemsOver(itemList,20);
var bamba2 = findItemsOver(itemList2,20);
