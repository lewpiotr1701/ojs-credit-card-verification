function verifyCardNumber(number) {
  if (!algorithmLuhn(number)) return 'Not valid'

  return cardType(number);

}

function algorithmLuhn(number) {
  const reversedNumber = number.toString().split('').reverse();

  let evenNumbers = 0
  let oddNumbers = 0

  reversedNumber.forEach((element, index) => {
    if (index % 2 === 1) {
      oddNumbers += splitNumber(parseInt(element) * 2)
    } else {
      evenNumbers += parseInt(element)
    }
  });

  const sumNumber = evenNumbers + oddNumbers

  return (sumNumber % 10 === 0) ? true : false
}

function splitNumber(number) {
  if (number - 10 < 0) return number

  return (number - 10) % 10 + 1
}

function cardType(number) {
  const firstTwoNumbers = String(number).substring(0, 2)
  const numberArr = number.toString().split('')

  if (numberArr.length === 16
    && firstTwoNumbers === "51"
    || firstTwoNumbers === "52"
    || firstTwoNumbers == "53"
    || firstTwoNumbers === "54"
    || firstTwoNumbers === "55") {
    return 'Mastercard'
  } else if (numberArr.length === 16 || numberArr.length === 13 && numberArr[0] === '4') {
    return 'Visa'
  } else if (numberArr.length === 15 && firstTwoNumbers === '34' || firstTwoNumbers === '37') {
    return 'American Express'
  } else {
    return 'Not valid'
  }
}

export default verifyCardNumber