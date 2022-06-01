//ビンゴカードの1列を作る
function makeColumn(base: number) {
  const array = [...Array(15)].map((_, i) => i + 15 * base + 1)
  const column = [...Array(5)].map(() => {
    const index = Math.floor(Math.random() * array.length)
    return array.splice(index, 1)[0]
  })
  return column
}
//ビンゴカードを作る
export function makeBingoCard() {
  const list = [...Array(5)].reduce<number[]>(
    (prev, _, i) => [...prev, ...makeColumn(i)],
    []
  )
  const bingoCard = list.map((value) => ({ value, isValid: false }))
  bingoCard[12] = {
    value: 0,
    isValid: true,
  }
  return bingoCard
}
