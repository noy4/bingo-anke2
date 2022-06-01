export type Square = {
  value: number
  isValid: boolean
}

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
  const bingoCard: Square[] = list.map((value) => ({ value, isValid: false }))
  bingoCard[12] = {
    value: 0,
    isValid: true,
  }
  return bingoCard
}

//ビンゴの数をチェックする
export function checkBingo(bingoCard: Square[]) {
  let counter = 0
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ]
  for (const line of lines) {
    const [a, b, c, d, e] = line
    if (
      bingoCard[a].isValid &&
      bingoCard[b].isValid &&
      bingoCard[c].isValid &&
      bingoCard[d].isValid &&
      bingoCard[e].isValid
    ) {
      counter++
    }
  }
  return counter
}
