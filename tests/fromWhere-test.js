describe('fromWhere()', function()
{
    it('it should check the fuction is from Cape Town or not', function()
    {
      assert.equal(fromWhere("CA 1256-4366"), "Cape Town");
    });
    it('it should display the plate is from other place', function()
    {
        // this test will fail - can you fix it?
        assert.equal(fromWhere("DT 1256-4366 JHB"), "Some other place!");
    });
});
