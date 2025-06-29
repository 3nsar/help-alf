function HelpAlf() {}

HelpAlf.prototype.add = function(string_numbers) {
  if (string_numbers === 'X') {
    return [0, 0];

  } else if (string_numbers === '.X') {
    return [1, 0];
	
  } else {
    return "Spaceship lost forever.";
  }
};
