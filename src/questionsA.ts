export const NAME = 'name'
export const DISPLAY_NAME = 'displayName'
export const FROM = 'from'
export const SEX = 'sex'
export const FIVE_POINT = 'fivePoint'
export const TEXTAREA = 'textarea'
export const NUMBER = 'number'

export const titleA = 'アンケートについてのアンケート'

export const questionsA = [
  {
    id: 'Q1',
    type: NAME,
    title: '名前',
    slotCount: 4,
  },
  {
    id: 'Q2',
    type: DISPLAY_NAME,
    title: '公開名',
    slotCount: 4,
  },
  {
    id: 'Q3',
    type: FROM,
    title: '所属',
    slotCount: 4,
  },
  {
    id: 'Q4',
    type: SEX,
    title: '性別',
    slotCount: 4,
  },
  {
    id: 'Q5',
    type: FIVE_POINT,
    title: '大学の事務から依頼される調査アンケートに答えますか。',
    negative: 'あまり答えない',
    positive: 'よく答える',
    slotCount: 4,
  },
  {
    id: 'Q6',
    type: FIVE_POINT,
    title: '友人から依頼される調査アンケートに答えますか。',
    negative: 'あまり答えない',
    positive: 'よく答える',
    slotCount: 4,
  },
  {
    id: 'Q7',
    type: FIVE_POINT,
    title: '企業から依頼される調査アンケートに答えますか。',
    negative: 'あまり答えない',
    positive: 'よく答える',
    slotCount: 4,
  },
  {
    id: 'Q8',
    type: FIVE_POINT,
    title: '一般的に調査アンケートに回答することについてどう感じますか。',
    negative: 'つまらない',
    positive: '面白い',
    slotCount: 4,
  },
  {
    id: 'Q9',
    type: FIVE_POINT,
    title:
      'つまらないと感じるアンケートは回答者へのメリットがないためだという仮定についてどう思いますか。',
    negative: 'そう思わない',
    positive: 'そう思う',
    slotCount: 4,
  },
  {
    id: 'Q10',
    type: NUMBER,
    title:
      'もしもとある企業から所要時間30分のアンケートを依頼された場合、あなたが喜んで回答するには報酬はいくら以上必要だと思いますか。',
    unit: '円',
    slotCount: 4,
  },
  {
    id: 'Q11',
    type: NUMBER,
    title:
      '一般的に調査アンケートに答える際、設問が何問以上あると回答するのがしんどいと感じますか。',
    unit: '問',
    slotCount: 4,
  },
  {
    id: 'Q12',
    type: NUMBER,
    title:
      '一般的に調査アンケートに答える際、回答に何分以上かかると回答するのがしんどいと感じますか。',
    unit: '分',
    slotCount: 4,
  },
  {
    id: 'Q13',
    type: TEXTAREA,
    title:
      'どういう時（及び条件）なら調査アンケートに答えてもいいと感じますか。',
    slotCount: 4,
  },
  {
    id: 'Q14',
    type: TEXTAREA,
    title: '一般的な調査アンケートに対する不満があればお書きください。',
    slotCount: 4,
  },
  {
    id: 'Q15',
    type: TEXTAREA,
    title:
      'その他一般的な調査アンケートについて、または以上の回答への補足等何かあればお書きください。',
    slotCount: 4,
  },
]
