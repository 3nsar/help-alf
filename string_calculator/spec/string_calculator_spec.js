describe('Help Alf', function() {
	beforeEach(function() {
		helpAlf = new HelpAlf();
	});

	it('should return 0 for an empty string', function() {
		expect(helpAlf.add('')).toEqual("Spaceship lost forever.");
	});
});
