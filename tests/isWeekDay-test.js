describe('isWeekDay()', function()
{
    it('it should display the week day', function()
    {
        assert.equal(isWeekDay("Thursday"), false);
    });
    it('it should display the week day', function()
    {
        assert.equal(true, isWeekDay("Friday"));
    });
});
