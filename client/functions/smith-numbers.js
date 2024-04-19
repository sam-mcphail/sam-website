// A Smith number is a composite number whose digit sum is equal to the sum of the digits of its prime factors.
// One example of a Smith number is the number 666 = 2 × 3 × 3 × 37, since 6 + 6 + 6 = 2 + 3 + 3 + (3 + 7) = 18.
// Print all the Smith numbers from 0 to 10,000 inclusive, each on their own line.

// SUM OF DIGITS //
export function digitSum(num) {
  // to string
  let numString = num.toString()
  // to array
  let numArr = numString.split('')
  // to number (parseInt())
  // sum digits
  let sum = 0
  for (let i = 0; i < numArr.length; i++) {
    sum += parseInt(numArr[i])
  }
  // return sum
  return sum
}

// IS PRIME //
export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

// PRIME FACTORS //
export function primeFactors(num) {
  let myNum = num
  let factors = []
  // lowest prime factor added to array, num divided by factor
  for (let i = 2; i < myNum; i) {
    if (myNum % i == 0 && isPrime(i)) {
      factors.push(i)
      myNum = myNum / i
    } else {
      i++
    }
  }
  if (myNum < num) {
    factors.push(myNum)
  }
  if (factors.length == 0) {
    return [0]
  }
  return factors
}

// SUM OF PRIME FACTORS //
export function sumOfDigitsOfPrimeFactors(factors) {
  let sum = 0
  factors.map((factor) => {
    sum += digitSum(factor)
  })
  return sum
}

// IS SMITH //
export function isSmith(num) {
  let sum = digitSum(num)
  let sumFactors = sumOfDigitsOfPrimeFactors(primeFactors(num))
  if (num == 0) return false
  if (sum == sumFactors) return true
  return false
}

// PRINT SMITH NUMBERS //
export function listSmithNumbers(min, max) {
  let smithArr = []
  for (let i = min; i <= max; i++) {
    if (isSmith(i)) {
      smithArr.push(i)
    }
  }
  return smithArr
}
