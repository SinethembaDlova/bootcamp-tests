describe('countAllFromTown()', function()
{
    it('it should display how many number plates from Jozi', function()
    {
        assert.deepEqual(fromJozi, 2);
    });
    it('it should display how many number plates from Jozi', function()
    {
        // this test will fail - can you fix it?
        assert.deepEqual(countAllFromTown("33482 JHB, Tido JHB, CA 134324, 10111 JHB, DBN 3484123, SNE JHB, 124392 JHB"), 5);
    });
});
