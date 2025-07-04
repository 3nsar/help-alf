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


	it('should return message if spaceship is not found', function() {
		expect(helpAlf.add(
				'..........\n' +
				'..........\n' +
				'..........\n' +
				'..........\n' +
				'..........\n' +
				'..........')).toEqual("Spaceship lost forever.");
	});


	it('should return the correct coordinates [0, 0] when spaceship is found', function() {
		expect(helpAlf.add('X')).toEqual([0,0]);
	});

	
	it('should return the correct coordinates [1, 0] when spaceship is found', function() {
		expect(helpAlf.add('.X')).toEqual([1,0]);
	});

	it('should return the correct coordinates [7, 2] when spaceship is found', function() {
		expect(helpAlf.add(
				'..........\n' +
				'..........\n' +
				'..........\n' +
				'.......X..\n' +
				'..........\n' +
				'..........')).toEqual([7,2]);
	});


	it('should return the correct coordinates [10, 0] when spaceship is found', function() {
		expect(helpAlf.add(
				'..........\n' +
				'..........\n' +
				'..........\n' +
				'..........\n' +
				'..........\n' +
				'..........X')).toEqual([10,0]);
	});

});
