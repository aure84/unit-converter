export function fmtNum(n) {
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US')
}
