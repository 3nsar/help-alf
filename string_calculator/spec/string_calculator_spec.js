describe('Help Alf', function() {
	beforeEach(function() {
		helpAlf = new HelpAlf();
	});

	it('should return message if spaceship is not found', function() {
		expect(helpAlf.add('')).toEqual("Spaceship lost forever.");
	});
	
	it('should return message if spaceship is not found', function() {
		expect(helpAlf.add('.')).toEqual("Spaceship lost forever.");
	});	
});
