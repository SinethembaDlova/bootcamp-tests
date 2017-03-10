describe('isFromBellville()', function()
{
    it('it should display all the correct bellville number plates', function(){
        assert.equal(isFromBellville("CY 1232 2233"), true);
    });
    it('should display all the correct bellville number plates', function()
    {
        // this test will fail - can you fix it?
        assert.equal(true, isFromBellville("CY 551 325"));
    });
});
