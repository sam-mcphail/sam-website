export async function getLeapYears() {
  let leapYearsArr = []
  for (let i = 1800; i <= 2400; i += 4) {
    if (i % 400 == 0) leapYearsArr.push(i)
    if (i % 100 !== 0) leapYearsArr.push(i)
  }
  return leapYearsArr
}
