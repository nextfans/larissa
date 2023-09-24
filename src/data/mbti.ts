interface MBTIPersonalityType {
  id: number
  name: string
  code: string
  category: string
  categoryCode: string
  emoji: string
  categoryEmoji: string
}

export const mbtiTypes: MBTIPersonalityType[] = [
  {
    id: 0,
    name: 'Arquiteto',
    code: 'INTJ-A',
    category: 'Analistas',
    categoryCode: 'NT',
    emoji: '📐',
    categoryEmoji: '🧪',
  },
  {
    id: 1,
    name: 'Lógico',
    code: 'INTP-A',
    category: 'Analistas',
    categoryCode: 'NT',
    emoji: '🔍',
    categoryEmoji: '🧪',
  },
  {
    id: 2,
    name: 'Comandante',
    code: 'ENTJ-A',
    category: 'Analistas',
    categoryCode: 'NT',
    emoji: '👩‍✈️',
    categoryEmoji: '🧪',
  },
  {
    id: 3,
    name: 'Inovador',
    code: 'ENTP-A',
    category: 'Analistas',
    categoryCode: 'NT',
    emoji: '💡',
    categoryEmoji: '🧪',
  },
  {
    id: 4,
    name: 'Advogado',
    code: 'INFJ-A',
    category: 'Diplomatas',
    categoryCode: 'NF',
    emoji: '⚖️',
    categoryEmoji: '🕊️',
  },
  {
    id: 5,
    name: 'Mediador',
    code: 'INFP-A',
    category: 'Diplomatas',
    categoryCode: 'NF',
    emoji: '🎨',
    categoryEmoji: '🕊️',
  },
  {
    id: 6,
    name: 'Protagonista',
    code: 'ENFJ-A',
    category: 'Diplomatas',
    categoryCode: 'NF',
    emoji: '🎭',
    categoryEmoji: '🕊️',
  },
  {
    id: 7,
    name: 'Ativista',
    code: 'ENFP-A',
    category: 'Diplomatas',
    categoryCode: 'NF',
    emoji: '🌟',
    categoryEmoji: '🕊️',
  },
  {
    id: 8,
    name: 'Inspetor',
    code: 'ISTJ-A',
    category: 'Sentinelas',
    categoryCode: 'SJ',
    emoji: '🔎',
    categoryEmoji: '🛡️',
  },
  {
    id: 9,
    name: 'Defensor',
    code: 'ISFJ-A',
    category: 'Sentinelas',
    categoryCode: 'SJ',
    emoji: '💪',
    categoryEmoji: '🛡️',
  },
  {
    id: 10,
    name: 'Executivo',
    code: 'ESTJ-A',
    category: 'Sentinelas',
    categoryCode: 'SJ',
    emoji: '💼',
    categoryEmoji: '🛡️',
  },
  {
    id: 11,
    name: 'Cônsul',
    code: 'ESFJ-A',
    category: 'Sentinelas',
    categoryCode: 'SJ',
    emoji: '🤝',
    categoryEmoji: '🛡️',
  },
  {
    id: 12,
    name: 'Virtuoso',
    code: 'ISTP-A',
    category: 'Exploradores',
    categoryCode: 'SP',
    emoji: '🛠️',
    categoryEmoji: '🧭',
  },
  {
    id: 13,
    name: 'Aventureiro',
    code: 'ISFP-A',
    category: 'Exploradores',
    categoryCode: 'SP',
    emoji: '🌄',
    categoryEmoji: '🧭',
  },
  {
    id: 14,
    name: 'Empresário',
    code: 'ESTP-A',
    category: 'Exploradores',
    categoryCode: 'SP',
    emoji: '🚀',
    categoryEmoji: '🧭',
  },
  {
    id: 15,
    name: 'Animador',
    code: 'ESFP-A',
    category: 'Exploradores',
    categoryCode: 'SP',
    emoji: '🎉',
    categoryEmoji: '🧭',
  },
]

export type MbtiType =
  | 'INTJ-A'
  | 'INFJ-A'
  | 'ISTJ-A'
  | 'ISFJ-A'
  | 'INTP-A'
  | 'INFP-A'
  | 'ISTP-A'
  | 'ISFP-A'
  | 'ENTJ-A'
  | 'ENFJ-A'
  | 'ESTJ-A'
  | 'ESFJ-A'
  | 'ENTP-A'
  | 'ENFP-A'
  | 'ESTP-A'
  | 'ESFP-A'

function getFunctions(type: MbtiType): string {
  const functionMapping: Record<MbtiType, string> = {
    'INTJ-A': 'NiTeFiSe',
    'INFJ-A': 'NiFeTiSe',
    'ISTJ-A': 'SiTeFiNe',
    'ISFJ-A': 'SiFeTiNe',
    'INTP-A': 'TiNeSiFe',
    'INFP-A': 'FiNeSiTe',
    'ISTP-A': 'TiSeNiFe',
    'ISFP-A': 'FiSeNiTe',
    'ENTJ-A': 'TeNiSeFi',
    'ENFJ-A': 'FeNiSeTi',
    'ESTJ-A': 'TeSiNeFi',
    'ESFJ-A': 'FeSiNeTi',
    'ENTP-A': 'NeTiFeSi',
    'ENFP-A': 'NeFiTeSi',
    'ESTP-A': 'SeTiFeNi',
    'ESFP-A': 'SeFiTeNi',
  }

  return functionMapping[type]
}

export function calculateCompatibility(
  typeA: MbtiType,
  typeB: MbtiType,
): number {
  let sharedPreferences = 0
  let complementaryFunctions = 0

  for (let i = 0; i < 4; i++) {
    if (typeA[i] === typeB[i]) {
      sharedPreferences++
    }
  }

  const typeAFunctions = getFunctions(typeA)
  const typeBFunctions = getFunctions(typeB)

  for (let i = 0; i < 4; i += 2) {
    if (typeAFunctions[i] === typeBFunctions[i + 1]) {
      complementaryFunctions++
    }
  }

  const compatibilityScore = sharedPreferences / 4 + complementaryFunctions / 4
  return compatibilityScore
}
