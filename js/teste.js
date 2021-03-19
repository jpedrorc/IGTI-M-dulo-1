function start() {
  var inputRange = document.querySelector('#inputRange');
  var inputCurrentNumber = document.querySelector('#inputCurrentNumber');
  var inputNumberText = document.querySelector('#inputNumberText');

  inputRange.addEventListener('input', (event) => {
    var currentValue = event.target.value;
    inputCurrentNumber.value = event.target.value;

    inputNumberText.value = numberToText(currentValue);
  });
}

function numberToText(number) {
  var size = number.toString().length;
  if (size > 1) {
    return multipleNumbers(number);
  }
  return size;
}
function multipleNumbers(number) {
  var value = number.split('');
}

start();
