type Combined = number | string
type Output = 'as-text' | 'as-number'

function combine(n1: Combined, n2: Combined, output: Output): Combined {
  let result

  if ((typeof n1 === 'number' && typeof n2 === 'number') || output === 'as-number') {
    result = +n1 + +n2
  } else {
    result = n1.toString() + n2.toString()
  }

  return result
}
