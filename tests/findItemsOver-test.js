describe('findItemsOver()', function()
{
    it('it should display items that are over 20', function()
    {
      assert.deepEqual(bamba, findItemsOver(itemList,20));
    });
    it('it should display items that are over 20', function()
    {
        // this test will fail - can you fix it?
      assert.deepEqual(bamba2, findItemsOver(itemList2,20));
    });
});
