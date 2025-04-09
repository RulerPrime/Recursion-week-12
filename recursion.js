//1. Make a function that computes a factorial recursively

const factorial = function (num) {
  //base case
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
  //
};

//2. Make a function that recursively transposes a MIDI pitch down until it is in C Major

const cMajor = [0, 2, 4, 5, 7, 9, 11];

const scaleMap = function (midiIn) {
  if (cMajor.includes(midiIn % 12)) {
    return midiIn;
  } else {
    return scaleMap(midiIN - 1);
  }
};
