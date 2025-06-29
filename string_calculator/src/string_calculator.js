function HelpAlf() {}

HelpAlf.prototype.add = function(string_numbers) {
  if (string_numbers[0] == 'X') {
    return [0, 0];
  } else {
    return "Spaceship lost forever.";
  }
};
