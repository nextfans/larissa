export interface Relationship {
  compatibility: number
  compatibilityText?: string
  relationshipType?: string[]
  relationshipSuccess?: string[]
  relationshipChallenges?: string[]
  challengeResolutionStrategies?: string[]
}
export interface MbtiCompatibility {
  [key: string]: Relationship
}

export const mbtiCompatibility: MbtiCompatibility = {
  'INTJ-A_ESTJ-A': {
    compatibility: 0.6,
    relationshipSuccess: [
      'Ambos compartilham a preferência por tomada de decisão baseada em lógica e racionalidade (Função Julgamento).',
      'Os dois tipos são orientados para a realização de objetivos e têm uma abordagem sistemática e organizada para atingir suas metas.',
      'A combinação de Intuição (INTJ-A) e Sensação (ESTJ-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'Os dois tipos são introvertidos em sua tomada de decisão, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode se frustrar com a resistência do ESTJ-A à mudança e à inovação, enquanto o ESTJ-A pode achar o INTJ-A muito teórico e distante da realidade.',
      'O INTJ-A valoriza a criatividade e a visão de futuro, enquanto o ESTJ-A valoriza a tradição e a experiência passada, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ESTJ-A se sinta desconectado ou não compreendido.',
      'Ambos os tipos têm uma tendência a serem teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ESTP-A': {
    compatibility: 0.6,
    relationshipSuccess: [
      'Ambos compartilham a preferência por tomada de decisão baseada em lógica e racionalidade (Função Julgamento).',
      'A combinação de Intuição (INTJ-A) e Sensação (ESTP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O INTJ-A pode ajudar o ESTP-A a desenvolver uma visão mais ampla e a considerar possíveis consequências futuras, enquanto o ESTP-A pode ajudar o INTJ-A a ser mais flexível e adaptável.',
      'O ESTP-A é energizado pelo mundo exterior e pode ajudar o INTJ-A a se envolver mais com o ambiente e as pessoas ao seu redor.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode achar o ESTP-A impulsivo e pouco planejado, enquanto o ESTP-A pode achar o INTJ-A muito teórico e distante da realidade.',
      'O INTJ-A valoriza a criatividade e a visão de futuro, enquanto o ESTP-A valoriza a ação e a experiência imediata, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ESTP-A se sinta desconectado ou não compreendido.',
      'O ESTP-A pode achar difícil cumprir compromissos e rotinas, o que pode levar a frustração e desentendimentos com o INTJ-A, que valoriza a previsibilidade e a organização.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ESFJ-A': {
    compatibility: 0.5,
    relationshipSuccess: [
      'A combinação de Intuição (INTJ-A) e Sensação (ESFJ-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ESFJ-A é naturalmente caloroso e solidário, o que pode ajudar o INTJ-A a se sentir mais à vontade para expressar emoções e compartilhar suas preocupações.',
      'O INTJ-A pode ajudar o ESFJ-A a desenvolver uma visão mais ampla e a considerar possíveis consequências futuras, enquanto o ESFJ-A pode ajudar o INTJ-A a ser mais consciente das necessidades emocionais dos outros.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode se frustrar com o foco do ESFJ-A nas tradições e na harmonia social, enquanto o ESFJ-A pode achar o INTJ-A muito teórico e distante da realidade.',
      'O INTJ-A valoriza a independência e a privacidade, enquanto o ESFJ-A valoriza a conexão e a comunidade, o que pode levar a conflitos sobre tempo e espaço pessoal.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ESFJ-A se sinta desconectado ou não compreendido.',
      'O ESFJ-A pode achar difícil lidar com o ceticismo e o questionamento do INTJ-A, que podem ser percebidos como críticas ou desafios à autoridade.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ESFP-A': {
    compatibility: 0.4,
    relationshipSuccess: [
      'A combinação de Intuição (INTJ-A) e Sensação (ESFP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ESFP-A é energizado pelo mundo exterior e pode ajudar o INTJ-A a se envolver mais com o ambiente e as pessoas ao seu redor.',
      'O ESFP-A é naturalmente caloroso e solidário, o que pode ajudar o INTJ-A a se sentir mais à vontade para expressar emoções e compartilhar suas preocupações.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode se frustrar com o foco do ESFP-A no presente e na busca pelo prazer imediato, enquanto o ESFP-A pode achar o INTJ-A muito teórico e distante da realidade.',
      'O INTJ-A valoriza a independência e a privacidade, enquanto o ESFP-A valoriza a conexão e a comunidade, o que pode levar a conflitos sobre tempo e espaço pessoal.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ESFP-A se sinta desconectado ou não compreendido.',
      'O ESFP-A pode achar difícil lidar com o ceticismo e o questionamento do INTJ-A, que podem ser percebidos como críticas ou desafios à autoridade.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ENTJ-A': {
    compatibility: 0.9,
    relationshipSuccess: [
      'Ambos compartilham a preferência por tomada de decisão baseada em lógica e racionalidade (Função Julgamento).',
      'Os dois tipos são orientados para a realização de objetivos e têm uma abordagem sistemática e organizada para atingir suas metas.',
      'A combinação de Intuição (INTJ-A) e Intuição (ENTJ-A) pode levar a uma conexão profunda com base na compreensão mútua e na busca por conhecimento e ideias.',
      'Os dois tipos valorizam a independência e podem respeitar as necessidades um do outro por tempo e espaço pessoal.',
    ],
    relationshipChallenges: [
      'Ambos os tipos têm uma tendência a serem teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
      'O INTJ-A pode achar o ENTJ-A dominador e controlador, enquanto o ENTJ-A pode achar o INTJ-A distante e desapegado.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ENTJ-A se sinta desconectado ou não compreendido.',
      'Ambos os tipos podem ser altamente críticos e exigentes, o que pode levar a conflitos e tensão no relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ENTP-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'Ambos compartilham a preferência pela Intuição (N), o que pode levar a uma conexão profunda com base na compreensão mútua e na busca por conhecimento e ideias.',
      'Os dois tipos são criativos e abertos a novas ideias e perspectivas, o que pode enriquecer a troca de pensamentos e promover o crescimento pessoal.',
      'A combinação de Julgamento (INTJ-A) e Percepção (ENTP-A) pode promover um equilíbrio entre a tomada de decisões e a adaptabilidade na resolução de problemas.',
      'Ambos os tipos valorizam a independência e podem respeitar as necessidades um do outro por tempo e espaço pessoal.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode achar o ENTP-A impulsivo e pouco confiável, enquanto o ENTP-A pode achar o INTJ-A rígido e inflexível.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ENTP-A se sinta desconectado ou não compreendido.',
      'Ambos os tipos têm uma tendência a serem teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
      'O INTJ-A pode se sentir sobrecarregado pela energia e entusiasmo do ENTP-A, enquanto o ENTP-A pode se sentir limitado pela abordagem mais reservada e estruturada do INTJ-A.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a criatividade de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ENFJ-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'Ambos compartilham a preferência pela Intuição (N), o que pode levar a uma conexão profunda com base na compreensão mútua e na busca por conhecimento e ideias.',
      'A combinação de Pensamento (INTJ-A) e Sentimento (ENFJ-A) pode promover um equilíbrio entre a lógica e a empatia na tomada de decisões e na resolução de problemas.',
      'Os dois tipos são orientados para a realização de objetivos e têm uma abordagem sistemática e organizada para atingir suas metas.',
      'O ENFJ-A é naturalmente empático e pode ajudar o INTJ-A a se conectar com suas emoções e expressar-se melhor.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode achar o ENFJ-A emocionalmente intenso e difícil de compreender, enquanto o ENFJ-A pode achar o INTJ-A emocionalmente distante e pouco expressivo.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ENFJ-A se sinta desconectado ou não compreendido.',
      'O INTJ-A pode se frustrar com a abordagem mais orientada para as pessoas do ENFJ-A, enquanto o ENFJ-A pode achar o foco do INTJ-A em eficiência e lógica insensível ou frio.',
      'Ambos os tipos têm uma tendência a serem teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a empatia de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ENFP-A': {
    compatibility: 0.5,
    relationshipSuccess: [
      'Ambos compartilham a preferência pela Intuição (N), o que pode levar a uma conexão profunda com base na compreensão mútua e na busca por conhecimento e ideias.',
      'A combinação de Pensamento (INTJ-A) e Sentimento (ENFP-A) pode promover um equilíbrio entre a lógica e a empatia na tomada de decisões e na resolução de problemas.',
      'O ENFP-A é naturalmente criativo e entusiasta, o que pode ajudar a estimular novas ideias e abordagens para o INTJ-A.',
      'O ENFP-A pode ajudar o INTJ-A a se conectar com suas emoções e expressar-se melhor, enquanto o INTJ-A pode ajudar o ENFP-A a se concentrar e organizar suas ideias.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode achar o ENFP-A emocionalmente intenso e difícil de compreender, enquanto o ENFP-A pode achar o INTJ-A emocionalmente distante e pouco expressivo.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ENFP-A se sinta desconectado ou não compreendido.',
      'O INTJ-A pode se frustrar com a abordagem mais orientada para as pessoas do ENFP-A, enquanto o ENFP-A pode achar o foco do INTJ-A em eficiência e lógica insensível ou frio.',
      'Ambos os tipos têm uma tendência a serem teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a criatividade e a empatia de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ISTJ-A': {
    compatibility: 0.8,
    relationshipSuccess: [
      'Ambos compartilham a preferência pela tomada de decisão baseada em lógica e racionalidade (Função Julgamento).',
      'Os dois tipos são introvertidos em sua tomada de decisão, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTJ-A) e Sensação (ISTJ-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'Ambos os tipos são orientados para a realização de objetivos e têm uma abordagem sistemática e organizada para atingir suas metas.',
    ],
    relationshipChallenges: [
      'O INTJ-A valoriza a criatividade e a visão de futuro, enquanto o ISTJ-A valoriza a tradição e a experiência passada, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'O INTJ-A pode se frustrar com a resistência do ISTJ-A à mudança e à inovação, enquanto o ISTJ-A pode achar o INTJ-A muito teórico e distante da realidade.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ISTJ-A se sinta desconectado ou não compreendido.',
      'Ambos os tipos têm uma tendência a serem teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ISTP-A': {
    compatibility: 0.6,
    relationshipSuccess: [
      'Ambos os tipos compartilham a preferência pela tomada de decisão baseada em lógica e racionalidade (Função Julgamento).',
      'Os dois tipos são introvertidos em sua tomada de decisão, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTJ-A) e Sensação (ISTP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'Ambos os tipos são independentes e autossuficientes, o que pode ajudar a criar um relacionamento em que cada pessoa respeita a autonomia do outro.',
    ],
    relationshipChallenges: [
      'O INTJ-A valoriza a criatividade e a visão de futuro, enquanto o ISTP-A valoriza a experiência prática e o pensamento no momento, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'O INTJ-A pode se frustrar com a resistência do ISTP-A à mudança e à inovação, enquanto o ISTP-A pode achar o INTJ-A muito teórico e distante da realidade.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ISTP-A se sinta desconectado ou não compreendido.',
      'Ambos os tipos podem ter dificuldade em comprometer e encontrar soluções mutuamente aceitáveis devido à sua tendência de serem teimosos e inflexíveis em suas opiniões.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ISFJ-A': {
    compatibility: 0.6,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos em sua tomada de decisão, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTJ-A) e Sensação (ISFJ-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O foco do INTJ-A na eficiência e do ISFJ-A no bem-estar dos outros pode criar um ambiente onde ambos os parceiros se sentem apoiados e motivados a atingir seus objetivos.',
      'Ambos os tipos são organizados e orientados para objetivos, o que pode levar a um bom trabalho em equipe e a um ambiente produtivo.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode se frustrar com a resistência do ISFJ-A à mudança e à inovação, enquanto o ISFJ-A pode achar o INTJ-A muito teórico e distante da realidade.',
      'O INTJ-A valoriza a criatividade e a visão de futuro, enquanto o ISFJ-A valoriza a tradição e a experiência passada, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ISFJ-A se sinta desconectado ou não compreendido.',
      'O INTJ-A pode ser percebido como insensível e crítico, enquanto o ISFJ-A pode ser visto como excessivamente emocional e apegado às suas próprias necessidades e sentimentos.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_ISFP-A': {
    compatibility: 0.4,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos em sua tomada de decisão, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTJ-A) e Sensação (ISFP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O foco do INTJ-A na eficiência e do ISFP-A na expressão pessoal e na estética pode criar um ambiente diversificado e estimulante.',
      'Ambos os tipos valorizam a autenticidade e a honestidade em suas interações, o que pode levar a um relacionamento baseado na confiança e na comunicação aberta.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode se frustrar com a falta de planejamento e organização do ISFP-A, enquanto o ISFP-A pode achar o INTJ-A rígido e excessivamente focado em metas.',
      'O INTJ-A valoriza a lógica e a racionalidade, enquanto o ISFP-A valoriza a emoção e a empatia, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ISFP-A se sinta desconectado ou não compreendido.',
      'O INTJ-A pode ser percebido como insensível e crítico, enquanto o ISFP-A pode ser visto como excessivamente emocional e indeciso.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a criatividade de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_INTJ-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'Ambos compartilham a preferência por tomada de decisão baseada em lógica e racionalidade (Função Julgamento).',
      'Os dois tipos são orientados para a realização de objetivos e têm uma abordagem sistemática e organizada para atingir suas metas.',
      'A combinação de Intuição (INTJ-A) e Intuição (INTJ-A) pode levar a uma compreensão profunda das ideias e conceitos um do outro.',
      'Ambos os tipos são introvertidos em sua tomada de decisão, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
    ],
    relationshipChallenges: [
      'Os dois tipos podem ser teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que ambos se sintam desconectados ou não compreendidos.',
      'Ambos os tipos têm uma tendência a serem críticos e exigentes, o que pode levar a um ambiente de relacionamento altamente competitivo e estressante.',
      'A falta de diversidade em suas abordagens e pontos de vista pode limitar o crescimento e o desenvolvimento pessoal dentro do relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'INTJ-A_INTP-A': {
    compatibility: 0.8,
    relationshipSuccess: [
      'Ambos os tipos têm uma preferência por Intuição, o que pode levar a discussões interessantes e estimulantes, bem como à compreensão das ideias e conceitos um do outro.',
      'A combinação do Pensamento e da Percepção do INTP-A pode complementar o Pensamento e o Julgamento do INTJ-A, resultando em soluções criativas e eficientes para problemas.',
      'De acordo com a Teoria dos Cinco Grandes Fatores de Personalidade, ambos podem compartilhar traços como abertura à experiência e baixa sociabilidade, o que pode ajudar a construir compreensão e empatia mútua.',
      'A Teoria do Apego sugere que ambos podem ter estilos de apego semelhantes, facilitando a sintonia emocional e a segurança no relacionamento.',
    ],
    relationshipChallenges: [
      'A natureza emocionalmente reservada de ambos os tipos pode dificultar a expressão de sentimentos e emoções, levando a mal-entendidos e desconexão emocional.',
      'De acordo com a Teoria da Complementaridade, a semelhança de alguns traços de personalidade pode dificultar o equilíbrio necessário em algumas áreas do relacionamento, como a tomada de decisões práticas e a comunicação emocional.',
      'Ambos os tipos têm uma tendência a serem críticos e exigentes, o que pode levar a um ambiente de relacionamento altamente competitivo e estressante.',
      'O INTP-A pode ser mais indeciso e menos organizado do que o INTJ-A, o que pode causar frustração e conflitos.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Buscar oportunidades para aprender com as diferenças e crescer juntos, tanto individualmente quanto como casal.',
    ],
  },
  'INTJ-A_INFJ-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'Ambos os tipos compartilham a preferência pela Intuição, o que pode levar a discussões interessantes e estimulantes, bem como a compreensão das ideias e conceitos um do outro.',
      'A combinação de Pensamento (INTJ-A) e Sentimento (INFJ-A) pode promover um equilíbrio entre abordagens lógicas e emocionais na resolução de problemas e tomada de decisões.',
      'De acordo com a Teoria dos Cinco Grandes Fatores de Personalidade, ambos podem compartilhar traços como abertura à experiência e baixa sociabilidade, o que pode ajudar a construir compreensão e empatia mútua.',
      'A Teoria do Apego sugere que ambos podem ter estilos de apego semelhantes, facilitando a sintonia emocional e a segurança no relacionamento.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode se frustrar com a abordagem emocional do INFJ-A na tomada de decisões, enquanto o INFJ-A pode achar o INTJ-A muito lógico e desconsiderando as emoções.',
      'De acordo com a Teoria da Complementaridade, a semelhança de alguns traços de personalidade pode dificultar o equilíbrio necessário em algumas áreas do relacionamento, como a tomada de decisões práticas e a comunicação emocional.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o INFJ-A se sinta desconectado ou não compreendido.',
      'Ambos os tipos podem ser teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Buscar oportunidades para aprender com as diferenças e crescer juntos, tanto individualmente quanto como casal.',
    ],
  },
  'INTJ-A_INFP-A': {
    compatibility: 0.5,
    relationshipSuccess: [
      'Ambos os tipos compartilham a preferência pela Intuição, o que pode levar a discussões interessantes e estimulantes, bem como a compreensão das ideias e conceitos um do outro.',
      'A combinação de Pensamento (INTJ-A) e Sentimento (INFP-A) pode promover um equilíbrio entre abordagens lógicas e emocionais na resolução de problemas e tomada de decisões.',
      'De acordo com a Teoria dos Cinco Grandes Fatores de Personalidade, ambos podem compartilhar traços como abertura à experiência e baixa sociabilidade, o que pode ajudar a construir compreensão e empatia mútua.',
      'A Teoria do Apego sugere que ambos podem ter estilos de apego semelhantes, facilitando a sintonia emocional e a segurança no relacionamento.',
    ],
    relationshipChallenges: [
      'O INTJ-A pode se frustrar com a abordagem emocional do INFP-A na tomada de decisões, enquanto o INFP-A pode achar o INTJ-A muito lógico e desconsiderando as emoções.',
      'De acordo com a Teoria da Complementaridade, a semelhança de alguns traços de personalidade pode dificultar o equilíbrio necessário em algumas áreas do relacionamento, como a tomada de decisões práticas e a comunicação emocional.',
      'A natureza emocionalmente reservada do INTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o INFP-A se sinta desconectado ou não compreendido.',
      'O INFP-A pode ter dificuldade em lidar com críticas e conflitos, o que pode ser desafiador para o INTJ-A, que tende a ser mais direto e crítico.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Buscar oportunidades para aprender com as diferenças e crescer juntos, tanto individualmente quanto como casal.',
    ],
  },

  'INTP-A_ESTJ-A': {
    compatibility: 0.4,
    relationshipSuccess: [
      'A combinação de Pensamento e Percepção do INTP-A pode complementar o Pensamento e o Julgamento do ESTJ-A, resultando em soluções criativas e eficientes para problemas.',
      'De acordo com a Teoria dos Cinco Grandes Fatores de Personalidade, ambos podem compartilhar traços como responsabilidade e baixa sociabilidade, o que pode ajudar a construir compreensão e empatia mútua.',
      'A Teoria da Complementaridade sugere que a combinação de Intuição e Sensação, bem como a Percepção e o Julgamento, pode ajudar a equilibrar e enriquecer o relacionamento.',
      'O foco do ESTJ-A na estrutura e organização pode ajudar o INTP-A a se tornar mais produtivo e focado, enquanto a abordagem mais aberta e criativa do INTP-A pode ajudar o ESTJ-A a se tornar mais flexível e adaptável.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o ESTJ-A muito rígido e autoritário, enquanto o ESTJ-A pode achar o INTP-A indeciso e pouco prático.',
      'Ambos os tipos podem ter dificuldade em expressar suas emoções e sentimentos, o que pode levar a mal-entendidos e desconexão emocional.',
      'O INTP-A pode se sentir sufocado pela necessidade do ESTJ-A de planejar e controlar, enquanto o ESTJ-A pode se frustrar com a tendência do INTP-A de procrastinar e evitar compromissos.',
      'De acordo com a Teoria do Apego, os estilos de apego dos dois tipos podem ser diferentes, o que pode levar a dificuldades na sintonia emocional e na segurança do relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Buscar oportunidades para aprender com as diferenças e crescer juntos, tanto individualmente quanto como casal.',
    ],
  },
  'INTP-A_ESTP-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'Ambos os tipos compartilham a preferência pelo Pensamento, o que pode levar a uma comunicação eficiente e uma abordagem lógica para resolver problemas.',
      'A combinação de Intuição e Sensação pode enriquecer o relacionamento com diferentes perspectivas e abordagens à vida.',
      'De acordo com a Teoria da Complementaridade, a combinação de Percepção em ambos os tipos pode contribuir para um ambiente mais descontraído e flexível no relacionamento.',
      'O ESTP-A pode ajudar o INTP-A a ser mais envolvido e ativo no mundo exterior, enquanto o INTP-A pode ajudar o ESTP-A a desenvolver uma visão mais profunda e analítica das situações.',
    ],
    relationshipChallenges: [
      'O INTP-A pode se sentir sobrecarregado pela energia e espontaneidade do ESTP-A, enquanto o ESTP-A pode achar o INTP-A excessivamente reservado e introvertido.',
      'Ambos os tipos podem ter dificuldade em expressar suas emoções e sentimentos, o que pode levar a mal-entendidos e desconexão emocional.',
      'O INTP-A pode achar o ESTP-A pouco reflexivo e impulsivo, enquanto o ESTP-A pode se frustrar com a tendência do INTP-A de analisar e ponderar as coisas antes de agir.',
      'De acordo com a Teoria do Apego, os estilos de apego dos dois tipos podem ser diferentes, o que pode levar a dificuldades na sintonia emocional e na segurança do relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Buscar oportunidades para aprender com as diferenças e crescer juntos, tanto individualmente quanto como casal.',
    ],
  },
  'INTP-A_ESFJ-A': {
    compatibility: 0.5,
    relationshipSuccess: [
      'O ESFJ-A pode ajudar o INTP-A a se conectar melhor com os outros e a ser mais consciente das necessidades emocionais das pessoas ao seu redor.',
      'O INTP-A pode ajudar o ESFJ-A a desenvolver uma abordagem mais lógica e racional na resolução de problemas e na tomada de decisões.',
      'De acordo com a Teoria da Complementaridade, a combinação de Intuição e Sensação pode enriquecer o relacionamento com diferentes perspectivas e abordagens à vida.',
      'O ESFJ-A é naturalmente solidário e atencioso, o que pode ser benéfico para o INTP-A, que pode lutar para expressar suas emoções e necessidades.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o ESFJ-A muito focado em tradições e normas sociais, enquanto o ESFJ-A pode achar o INTP-A desconectado e pouco prático.',
      'O INTP-A pode se sentir sobrecarregado pela natureza extrovertida e social do ESFJ-A, enquanto o ESFJ-A pode se sentir frustrado com a natureza introvertida e privada do INTP-A.',
      'Ambos os tipos têm diferentes estilos de comunicação e abordagens para lidar com conflitos, o que pode levar a mal-entendidos e desacordos frequentes.',
      'De acordo com a Teoria do Apego, os estilos de apego dos dois tipos podem ser diferentes, o que pode levar a dificuldades na sintonia emocional e na segurança do relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Buscar oportunidades para aprender com as diferenças e crescer juntos, tanto individualmente quanto como casal.',
    ],
  },
  'INTP-A_ESFP-A': {
    compatibility: 0.6,
    relationshipSuccess: [
      'Ambos os tipos são percebedores, o que pode levar a um ambiente descontraído e adaptável no relacionamento.',
      'A combinação de intuição (INTP-A) e sensação (ESFP-A) pode proporcionar uma abordagem equilibrada para a resolução de problemas, com o INTP-A trazendo ideias teóricas e o ESFP-A trazendo soluções práticas e orientadas para a ação.',
      'O INTP-A pode apreciar a natureza sociável e extrovertida do ESFP-A, enquanto o ESFP-A pode desfrutar da perspectiva original e do pensamento profundo do INTP-A.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o ESFP-A emocionalmente intenso e superficial, enquanto o ESFP-A pode achar o INTP-A excessivamente lógico e frio.',
      'O INTP-A valoriza a independência e a privacidade, enquanto o ESFP-A valoriza a conexão emocional e a interação social, o que pode levar a conflitos sobre como passar o tempo juntos.',
      'A natureza mais espontânea e impulsiva do ESFP-A pode ser frustrante para o INTP-A, que prefere planejar e analisar antes de agir.',
    ],
    challengeResolutionStrategies: [
      'Trabalhar juntos para encontrar um equilíbrio entre as necessidades emocionais e lógicas, valorizando as perspectivas e abordagens um do outro.',
      'Encontrar maneiras de se conectar emocionalmente sem comprometer a necessidade de independência e privacidade do INTP-A.',
      'Praticar a comunicação aberta e honesta para expressar preocupações e encontrar soluções mutuamente aceitáveis.',
    ],
  },
  'INTP-A_ENTJ-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'Ambos os tipos valorizam a lógica e o pensamento racional, o que pode levar a uma tomada de decisão eficaz e uma abordagem equilibrada para resolver problemas.',
      'O INTP-A pode apreciar a determinação e a habilidade de liderança do ENTJ-A, enquanto o ENTJ-A pode apreciar a criatividade e a perspectiva única do INTP-A.',
      'Ambos os tipos têm preferências intuitivas, o que pode levar a discussões interessantes e aprofundadas sobre ideias e conceitos abstratos.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o ENTJ-A controlador e autoritário, enquanto o ENTJ-A pode achar o INTP-A indeciso e excessivamente teórico.',
      'O INTP-A valoriza a independência e a privacidade, enquanto o ENTJ-A valoriza a estrutura e a organização, o que pode levar a conflitos sobre como gerenciar o tempo e as responsabilidades no relacionamento.',
      'Ambos os tipos podem ser emocionalmente reservados, o que pode dificultar a expressão de sentimentos e a criação de conexões emocionais profundas.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta para construir confiança e compreensão mútua, expressando preocupações e trabalhando juntos para encontrar soluções mutuamente aceitáveis.',
      'Ser consciente das necessidades emocionais do parceiro e fazer um esforço para expressar sentimentos e oferecer apoio emocional quando necessário.',
      'Encontrar um equilíbrio entre a independência e a estrutura, respeitando as necessidades e preferências um do outro ao planejar o tempo e as atividades juntos.',
    ],
  },
  'INTP-A_ENTP-A': {
    compatibility: 0.9,
    relationshipSuccess: [
      'Ambos os tipos são intuitivos e pensadores, o que pode levar a discussões estimulantes e envolventes sobre ideias e conceitos abstratos.',
      'O INTP-A e o ENTP-A são ambos tipos de personalidade exploratória e criativa, o que pode levar a uma conexão intelectual profunda e a um interesse compartilhado em aprender e crescer juntos.',
      'A natureza aberta e adaptável de ambos os tipos pode criar um ambiente de apoio mútuo e compreensão das necessidades e interesses um do outro.',
    ],
    relationshipChallenges: [
      'Ambos os tipos podem ser emocionalmente reservados e ter dificuldade em expressar sentimentos e emoções, o que pode criar barreiras na construção de uma conexão emocional profunda.',
      'Os dois tipos podem ter dificuldade em se comprometer com decisões e planos de longo prazo, o que pode levar a indecisão e procrastinação no relacionamento.',
      'O INTP-A e o ENTP-A podem ter dificuldade em estabelecer limites e estrutura, o que pode resultar em desorganização e falta de clareza em suas vidas juntas.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Trabalhar juntos para estabelecer metas comuns e criar planos de longo prazo que sejam flexíveis o suficiente para acomodar as necessidades de mudança e crescimento de ambos os parceiros.',
      'Desenvolver habilidades de gerenciamento de tempo e organização para garantir que as responsabilidades sejam compartilhadas e atendidas de maneira eficaz e eficiente.',
    ],
  },
  'INTP-A_ENFJ-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'O INTP-A e o ENFJ-A podem se complementar bem, com o INTP-A trazendo uma perspectiva lógica e analítica, enquanto o ENFJ-A oferece empatia e compreensão emocional.',
      'Ambos os tipos valorizam a comunicação e a troca de ideias, o que pode levar a discussões profundas e significativas.',
      'O ENFJ-A pode ajudar o INTP-A a se conectar com suas emoções e expressar suas necessidades emocionais de maneira mais eficaz.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar difícil compreender e responder às necessidades emocionais do ENFJ-A, enquanto o ENFJ-A pode se sentir frustrado com a natureza emocionalmente reservada do INTP-A.',
      'O ENFJ-A pode se sentir sobrecarregado pela necessidade do INTP-A de ter tempo e espaço pessoal, o que pode levar a sentimentos de rejeição e abandono.',
      'O INTP-A e o ENFJ-A podem ter abordagens diferentes para tomar decisões e resolver problemas, o que pode levar a conflitos e mal-entendidos.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'O INTP-A deve fazer um esforço consciente para se conectar emocionalmente com o ENFJ-A e demonstrar empatia e compreensão pelas necessidades emocionais do parceiro.',
      'Trabalhar juntos para encontrar um equilíbrio entre as necessidades de tempo pessoal e conexão emocional, garantindo que ambos os parceiros se sintam valorizados e apoiados no relacionamento.',
    ],
  },
  'INTP-A_ENFP-A': {
    compatibility: 0.75,
    relationshipSuccess: [
      'O INTP-A e o ENFP-A compartilham a preferência pela Intuição, o que pode levar a uma comunicação eficaz e a um entendimento mútuo em termos de ideias e conceitos abstratos.',
      'Ambos os tipos apreciam a exploração intelectual e são estimulados por discussões profundas e significativas.',
      'O ENFP-A pode ajudar o INTP-A a se conectar com suas emoções e expressar suas necessidades emocionais de maneira mais eficaz, enquanto o INTP-A pode fornecer uma perspectiva lógica e analítica.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar difícil lidar com a natureza emocionalmente expressiva do ENFP-A, enquanto o ENFP-A pode se sentir frustrado com a natureza emocionalmente reservada do INTP-A.',
      'O ENFP-A pode se sentir sobrecarregado pela necessidade do INTP-A de ter tempo e espaço pessoal, o que pode levar a sentimentos de rejeição e abandono.',
      'O INTP-A e o ENFP-A podem ter abordagens diferentes para tomar decisões e resolver problemas, o que pode levar a conflitos e mal-entendidos.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'O INTP-A deve fazer um esforço consciente para se conectar emocionalmente com o ENFP-A e demonstrar empatia e compreensão pelas necessidades emocionais do parceiro.',
      'Trabalhar juntos para encontrar um equilíbrio entre as necessidades de tempo pessoal e conexão emocional, garantindo que ambos os parceiros se sintam valorizados e apoiados no relacionamento.',
    ],
  },
  'INTP-A_ISTJ-A': {
    compatibility: 0.67,
    relationshipSuccess: [
      'Ambos os tipos compartilham a preferência pelo Pensamento Introvertido (Ti), o que pode levar a uma comunicação eficaz e a um entendimento mútuo em termos de lógica e análise.',
      'O INTP-A e o ISTJ-A são ambos orientados para a solução de problemas e podem trabalhar juntos de maneira eficaz para enfrentar desafios e tomar decisões informadas.',
      'Ambos valorizam a independência e podem dar um ao outro espaço e tempo pessoal quando necessário, o que pode criar um ambiente de respeito e apoio mútuo.',
    ],
    relationshipChallenges: [
      'O INTP-A e o ISTJ-A têm diferentes preferências em relação à Intuição e Sensação, o que pode levar a desentendimentos e conflitos em termos de abordagens para resolver problemas e tomar decisões.',
      'O INTP-A pode achar o ISTJ-A muito rígido e tradicional em suas abordagens, enquanto o ISTJ-A pode achar o INTP-A impraticável e desconectado da realidade.',
      'Ambos os tipos podem ter dificuldade em expressar e lidar com emoções, o que pode resultar em mal-entendidos e falta de apoio emocional no relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
    ],
  },
  'INTP-A_ISTP-A': {
    compatibility: 0.8,
    relationshipSuccess: [
      'Ambos os tipos valorizam o Pensamento Introvertido (Ti), o que pode levar a uma comunicação eficaz e a um entendimento mútuo em termos de lógica e análise.',
      'O INTP-A e o ISTP-A são independentes e podem dar um ao outro espaço e tempo pessoal quando necessário, o que pode criar um ambiente de respeito e apoio mútuo.',
      'Ambos os tipos são orientados para a solução de problemas e podem trabalhar juntos de maneira eficaz para enfrentar desafios e tomar decisões informadas.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o ISTP-A muito focado em detalhes e práticas, enquanto o ISTP-A pode achar o INTP-A muito teórico e desconectado da realidade.',
      'Ambos os tipos podem ter dificuldade em expressar e lidar com emoções, o que pode resultar em mal-entendidos e falta de apoio emocional no relacionamento.',
      'Como ambos os tipos são introvertidos, pode haver falta de iniciativa para abordar problemas e discutir questões importantes no relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
    ],
  },
  'INTP-A_ISFJ-A': {
    compatibility: 0.65,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTP-A) e Sensação (ISFJ-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ISFJ-A pode trazer estabilidade emocional e um senso de dever para o relacionamento, enquanto o INTP-A pode trazer criatividade e pensamento inovador.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o ISFJ-A muito focado em detalhes e rotinas, enquanto o ISFJ-A pode achar o INTP-A muito teórico e desconectado da realidade.',
      'O INTP-A pode se frustrar com a natureza emocional e às vezes sensível do ISFJ-A, enquanto o ISFJ-A pode se sentir desvalorizado ou não compreendido pelo INTP-A.',
      'Ambos os tipos podem ter dificuldade em expressar e lidar com emoções, o que pode resultar em mal-entendidos e falta de apoio emocional no relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
    ],
  },
  'INTP-A_ISFP-A': {
    compatibility: 0.63,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTP-A) e Sensação (ISFP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ISFP-A pode trazer uma abordagem mais emocional e criativa para o relacionamento, enquanto o INTP-A pode trazer uma perspectiva mais analítica e lógica.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o ISFP-A muito emocional e sensível, enquanto o ISFP-A pode achar o INTP-A muito distante e desconectado emocionalmente.',
      'O INTP-A pode se frustrar com a natureza impulsiva e espontânea do ISFP-A, enquanto o ISFP-A pode se sentir limitado pela abordagem mais estruturada e lógica do INTP-A.',
      'Ambos os tipos podem ter dificuldade em expressar e lidar com emoções, o que pode resultar em mal-entendidos e falta de apoio emocional no relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
    ],
  },
  'INTP-A_INTJ-A': {
    compatibility: 0.75,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTP-A) e Intuição (INTJ-A) pode promover uma abordagem conjunta para a solução de problemas e a tomada de decisões.',
      'Os dois tipos valorizam a lógica e a análise e compartilham uma preferência pela tomada de decisão baseada na razão.',
      'Ambos os tipos são orientados para a realização de objetivos e têm uma abordagem sistemática para atingir suas metas.',
    ],
    relationshipChallenges: [
      'O INTP-A pode achar o INTJ-A muito inflexível e teimoso, enquanto o INTJ-A pode achar o INTP-A indeciso e menos focado em seus objetivos.',
      'O INTP-A pode se sentir pressionado pela abordagem mais estruturada e focada do INTJ-A, enquanto o INTJ-A pode se frustrar com a natureza mais flexível e adaptável do INTP-A.',
      'Ambos os tipos têm dificuldade em lidar e expressar emoções, o que pode resultar em falta de apoio emocional e conexão no relacionamento.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Trabalhar juntos para estabelecer objetivos comuns e comprometer-se a alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
    ],
  },
  'INTP-A_INTP-A': {
    compatibility: 0.73,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTP-A) e Intuição (INTP-A) pode promover uma abordagem conjunta para a solução de problemas e a tomada de decisões.',
      'Os dois tipos valorizam a lógica e a análise e compartilham uma preferência pela tomada de decisão baseada na razão.',
      'Ambos os tipos são flexíveis e adaptáveis, o que pode facilitar a colaboração e a resolução de problemas.',
    ],
    relationshipChallenges: [
      'Ambos os tipos têm dificuldade em lidar e expressar emoções, o que pode resultar em falta de apoio emocional e conexão no relacionamento.',
      'O INTP-A pode achar difícil tomar decisões e definir metas claras, o que pode levar a um relacionamento menos focado e direcionado.',
      'Ambos os tipos podem ser indecisos e procrastinar, o que pode resultar em dificuldades para avançar e alcançar objetivos juntos.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
    ],
  },
  'INTP-A_INFJ-A': {
    compatibility: 0.71,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTP-A) e Intuição (INFJ-A) pode promover uma abordagem conjunta para a solução de problemas e a tomada de decisões.',
      'Ambos os tipos valorizam a análise e a exploração de ideias e conceitos abstratos.',
      'O INTP-A e o INFJ-A são abertos a novas ideias e perspectivas e podem se complementar no processo de tomada de decisões.',
    ],
    relationshipChallenges: [
      'O INTP-A pode ter dificuldade em expressar emoções e sentimentos, enquanto o INFJ-A é mais emocionalmente expressivo e sensível, o que pode levar a desconexões emocionais.',
      'O INTP-A pode ser indeciso e ter dificuldades para definir metas claras, enquanto o INFJ-A pode ser mais focado e direcionado, o que pode levar a desequilíbrios na relação.',
      'Ambos os tipos podem ser teimosos e inflexíveis em suas opiniões e crenças, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
    ],
  },
  'INTP-A_INFP-A': {
    compatibility: 0.65,
    relationshipSuccess: [
      'Ambos os tipos são introvertidos, o que pode levar a um entendimento mútuo das necessidades um do outro em relação ao tempo e ao espaço pessoal.',
      'A combinação de Intuição (INTP-A) e Intuição (INFP-A) pode promover uma abordagem conjunta para a solução de problemas e a tomada de decisões.',
      'O INTP-A e o INFP-A são abertos a novas ideias e perspectivas e podem se complementar no processo de tomada de decisões.',
      'Ambos os tipos valorizam a análise e a exploração de ideias e conceitos abstratos.',
    ],
    relationshipChallenges: [
      'O INTP-A pode ter dificuldade em expressar emoções e sentimentos, enquanto o INFP-A é mais emocionalmente expressivo e sensível, o que pode levar a desconexões emocionais.',
      'O INTP-A pode ser indeciso e ter dificuldades para definir metas claras, enquanto o INFP-A pode ser mais focado e direcionado, o que pode levar a desequilíbrios na relação.',
      'Ambos os tipos podem ser teimosos e inflexíveis em suas opiniões e crenças, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações, a fim de construir confiança e compreensão mútua no relacionamento.',
      'Ser aberto a abordagens diferentes e complementares para resolver problemas e tomar decisões, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
    ],
  },

  'ENTJ-A_ESTJ-A': {
    compatibility: 0.9,
    relationshipSuccess: [
      'Ambos os tipos são extrovertidos em sua tomada de decisão e compartilham uma preferência por tomada de decisão baseada em lógica e racionalidade (Função Julgamento).',
      'Sendo orientados para a realização de objetivos, os dois tipos têm uma abordagem sistemática e organizada para atingir suas metas.',
      'Ambos valorizam a estrutura e a organização, o que pode contribuir para um ambiente doméstico e profissional harmonioso.',
      'A combinação de Intuição (ENTJ-A) e Sensação (ESTJ-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode ser mais aberto a mudanças e inovações, enquanto o ESTJ-A pode ser mais resistente e valorizar a tradição e a experiência passada, o que pode levar a conflitos.',
      'Ambos os tipos têm uma tendência a serem teimosos e inflexíveis em suas opiniões, o que pode dificultar a busca de soluções mutuamente aceitáveis.',
      'A natureza emocionalmente reservada de ambos os tipos pode dificultar a expressão de sentimentos e emoções, levando a possíveis mal-entendidos e desconexão emocional.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Trabalhar conscientemente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'ENTJ-A_ESTP-A': {
    compatibility: 0.8,
    relationshipSuccess: [
      'Ambos os tipos são extrovertidos e orientados para a ação, o que pode levar a uma dinâmica animada e energética no relacionamento.',
      'A combinação de Intuição (ENTJ-A) e Sensação (ESTP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'Ambos os tipos valorizam a tomada de decisões baseada na lógica e racionalidade (Função Julgamento), o que pode facilitar a comunicação e a compreensão mútua.',
      'A natureza proativa e adaptável do ESTP-A pode complementar o estilo de liderança e a visão estratégica do ENTJ-A.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a falta de planejamento a longo prazo e a abordagem impulsiva do ESTP-A, enquanto o ESTP-A pode achar o ENTJ-A muito rígido e controlador.',
      'A natureza emocionalmente reservada do ENTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ESTP-A se sinta desconectado ou não compreendido.',
      'O ESTP-A pode se sentir sobrecarregado pela intensidade e altas expectativas do ENTJ-A, especialmente quando se trata de compromisso e responsabilidade.',
      'Ambos os tipos podem ter dificuldade em lidar com emoções e vulnerabilidades, o que pode levar a um relacionamento emocionalmente distante.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a adaptabilidade de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'ENTJ-A_ESFJ-A': {
    compatibility: 0.7,
    relationshipSuccess: [
      'Ambos os tipos são extrovertidos e orientados para a ação, o que pode levar a uma dinâmica animada e energética no relacionamento.',
      'A combinação de Intuição (ENTJ-A) e Sensação (ESFJ-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ESFJ-A é naturalmente solidário e atencioso, o que pode ajudar a equilibrar a natureza mais reservada emocionalmente do ENTJ-A.',
      'A capacidade do ESFJ-A de criar harmonia e conexões sociais pode ser um complemento valioso para o estilo de liderança e a visão estratégica do ENTJ-A.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a necessidade do ESFJ-A de aprovação social e conformidade, enquanto o ESFJ-A pode achar o ENTJ-A muito autoritário e insensível.',
      'O ENTJ-A valoriza a tomada de decisões baseada na lógica e racionalidade, enquanto o ESFJ-A valoriza a consideração pelas necessidades e sentimentos dos outros, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'A natureza emocionalmente reservada do ENTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode fazer com que o ESFJ-A se sinta desconectado ou não compreendido.',
      'Ambos os tipos podem ter dificuldade em lidar com emoções e vulnerabilidades, o que pode levar a um relacionamento emocionalmente distante.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a habilidade de criar harmonia de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'ENTJ-A_ESFP-A': {
    compatibility: 0.61,
    relationshipSuccess: [
      'Ambos os tipos são extrovertidos e orientados para a ação, o que pode levar a uma dinâmica animada e energética no relacionamento.',
      'A combinação de Intuição (ENTJ-A) e Sensação (ESFP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ESFP-A é naturalmente sociável e divertido, o que pode trazer leveza e entretenimento para o relacionamento com o ENTJ-A.',
      'A capacidade do ESFP-A de viver no presente e apreciar as experiências do momento pode ajudar a equilibrar a natureza mais orientada para o futuro do ENTJ-A.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a abordagem mais espontânea e menos organizada do ESFP-A, enquanto o ESFP-A pode achar o ENTJ-A muito controlador e rígido.',
      'O ENTJ-A valoriza a tomada de decisões baseada na lógica e racionalidade, enquanto o ESFP-A valoriza a consideração pelas necessidades e sentimentos dos outros, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'O ESFP-A pode ter dificuldade em lidar com o estilo de comunicação direto e às vezes crítico do ENTJ-A, o que pode levar a mal-entendidos e conflitos.',
      'Ambos os tipos podem ter dificuldade em lidar com emoções e vulnerabilidades, o que pode levar a um relacionamento emocionalmente distante.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a habilidade de apreciar o momento presente de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'ENTJ-A_ENTJ-A': {
    compatibility: 0.82,
    relationshipSuccess: [
      'Ambos os tipos compartilham a preferência por tomada de decisão baseada em lógica e racionalidade (Função Julgamento), o que pode levar a uma compreensão mútua e respeito pelas opiniões e abordagens um do outro.',
      'Os dois tipos são orientados para a realização de objetivos e têm uma abordagem sistemática e organizada para atingir suas metas, o que pode criar uma forte parceria em projetos e iniciativas conjuntas.',
      'A dupla ENTJ-A pode se apoiar mutuamente em suas ambições e desafios, com cada parceiro entendendo e valorizando a motivação e o desejo de sucesso do outro.',
      'A comunicação entre dois ENTJs-A tende a ser direta e clara, o que pode facilitar a resolução rápida de conflitos e mal-entendidos.',
    ],
    relationshipChallenges: [
      'Ambos os tipos têm uma tendência a serem dominantes e controladores, o que pode levar a lutas de poder e dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
      'A natureza emocionalmente reservada de ambos os ENTJs-A pode dificultar a expressão de sentimentos e emoções, o que pode resultar em um relacionamento emocionalmente distante.',
      'Como ambos os tipos são altamente competitivos e orientados para o sucesso, podem surgir conflitos se um parceiro perceber que o outro está ultrapassando ou ofuscando suas realizações.',
      'Ambos os ENTJs-A podem ser inflexíveis e teimosos em suas opiniões, o que pode levar a conflitos prolongados e dificuldades em resolver desentendimentos.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Trabalhar juntos para estabelecer metas comuns e apoiar um ao outro no processo de alcançá-las, em vez de competir ou tentar superar o outro.',
      'Fazer um esforço consciente para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Aprender a comprometer e encontrar soluções mutuamente aceitáveis para desentendimentos, em vez de insistir em ter razão ou manter-se inflexível.',
    ],
  },
  'ENTJ-A_ENTP-A': {
    compatibility: 0.825,
    relationshipSuccess: [
      'Ambos os tipos são extrovertidos e orientados a ação, o que pode levar a uma parceria energética e empolgante.',
      'A combinação de Intuição (ENTJ-A) e Percepção (ENTP-A) pode promover um equilíbrio entre abordagens teóricas e práticas na resolução de problemas, com cada parceiro trazendo uma perspectiva diferente e complementar.',
      'Ambos os tipos valorizam a comunicação aberta e direta, o que pode facilitar a resolução rápida de conflitos e mal-entendidos.',
      'A natureza curiosa e exploratória do ENTP-A pode ajudar a equilibrar a tendência do ENTJ-A de ser mais focado e determinado, criando um ambiente de aprendizado e crescimento mútuo.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a indecisão do ENTP-A e a falta de comprometimento com metas e objetivos específicos, enquanto o ENTP-A pode achar o ENTJ-A muito controlador e inflexível.',
      'Ambos os tipos podem ser dominantes e teimosos em suas opiniões, o que pode levar a conflitos e dificuldades em encontrar soluções mutuamente aceitáveis.',
      'A natureza emocionalmente reservada do ENTJ-A pode dificultar a expressão de sentimentos e emoções, o que pode resultar em um relacionamento emocionalmente distante.',
      'O ENTP-A pode se sentir sufocado pela necessidade do ENTJ-A de planejamento e estrutura, enquanto o ENTJ-A pode se sentir frustrado com a abordagem mais espontânea e desorganizada do ENTP-A.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, permitindo que cada parceiro contribua com suas habilidades e perspectivas únicas.',
    ],
  },
  'ENTJ-A_ENFJ-A': {
    compatibility: 0.7325,
    relationshipSuccess: [
      'Ambos os tipos são extrovertidos e orientados a ação, o que pode levar a uma parceria energética e empolgante.',
      'A combinação de Pensamento (ENTJ-A) e Sentimento (ENFJ-A) pode promover um equilíbrio entre lógica e emoção na tomada de decisão, com cada parceiro trazendo uma perspectiva diferente e complementar.',
      'Ambos os tipos valorizam a comunicação aberta e direta, o que pode facilitar a resolução rápida de conflitos e mal-entendidos.',
      'A natureza empática e carinhosa do ENFJ-A pode ajudar a equilibrar a tendência do ENTJ-A de ser mais focado e determinado, criando um ambiente de apoio e compreensão mútua.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a necessidade do ENFJ-A de agradar aos outros e evitar conflitos, enquanto o ENFJ-A pode achar o ENTJ-A muito crítico e insensível.',
      'O foco do ENTJ-A na lógica e na eficiência pode entrar em conflito com a ênfase do ENFJ-A na harmonia e nas necessidades emocionais dos outros.',
      'Ambos os tipos podem ser dominantes e teimosos em suas opiniões, o que pode levar a conflitos e dificuldades em encontrar soluções mutuamente aceitáveis.',
      'O ENFJ-A pode se sentir sufocado pela necessidade do ENTJ-A de planejamento e estrutura, enquanto o ENTJ-A pode se sentir frustrado com a abordagem mais emocional e empática do ENFJ-A.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, permitindo que cada parceiro contribua com suas habilidades e perspectivas únicas.',
    ],
  },
  'ENTJ-A_ENFP-A': {
    compatibility: 0.7553,
    relationshipSuccess: [
      'Ambos os tipos são extrovertidos, criativos e orientados para o futuro, o que pode levar a uma parceria estimulante e dinâmica.',
      'A combinação de Pensamento (ENTJ-A) e Sentimento (ENFP-A) pode promover um equilíbrio entre lógica e emoção na tomada de decisão, com cada parceiro trazendo uma perspectiva diferente e complementar.',
      'Ambos os tipos valorizam a comunicação aberta e direta, o que pode facilitar a resolução rápida de conflitos e mal-entendidos.',
      'O ENTJ-A e o ENFP-A compartilham a função de Intuição, o que pode levar a um entendimento mútuo de suas visões de mundo e abordagens para a resolução de problemas.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a tendência do ENFP-A de se distrair facilmente e ter dificuldade em se concentrar em detalhes e rotinas.',
      'O ENFP-A pode achar o ENTJ-A muito crítico e insensível, enquanto o ENTJ-A pode achar o ENFP-A muito emotivo e irracional.',
      'Ambos os tipos podem ser teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
      'O ENFP-A pode se sentir sufocado pela necessidade do ENTJ-A de planejamento e estrutura, enquanto o ENTJ-A pode se sentir frustrado com a abordagem mais espontânea e adaptável do ENFP-A.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, permitindo que cada parceiro contribua com suas habilidades e perspectivas únicas.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'ENTJ-A_ISTJ-A': {
    compatibility: 0.7412,
    relationshipSuccess: [
      'Ambos os tipos são orientados para o planejamento, a estrutura e a realização de objetivos, o que pode levar a uma parceria produtiva e eficiente.',
      'O ENTJ-A e o ISTJ-A compartilham a função de Pensamento, o que significa que ambos valorizam a lógica e a racionalidade na tomada de decisões.',
      'A combinação de Intuição (ENTJ-A) e Sensação (ISTJ-A) pode proporcionar um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'Ambos os tipos tendem a ser diretos e honestos em sua comunicação, o que pode facilitar a resolução de conflitos e mal-entendidos.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a resistência do ISTJ-A à mudança e à inovação, enquanto o ISTJ-A pode achar o ENTJ-A muito teórico e distante da realidade.',
      'O ENTJ-A valoriza a criatividade e a visão de futuro, enquanto o ISTJ-A valoriza a tradição e a experiência passada, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'O ISTJ-A pode se sentir oprimido pela energia extrovertida e dominante do ENTJ-A, enquanto o ENTJ-A pode achar o ISTJ-A muito reservado e rígido.',
      'Ambos os tipos podem ser teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos e a organização de ambos os tipos.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'ENTJ-A_ISTP-A': {
    compatibility: 0.6436,
    relationshipSuccess: [
      'Ambos os tipos valorizam a lógica e a racionalidade na tomada de decisões, graças à função Pensamento que compartilham.',
      'A combinação de Intuição (ENTJ-A) e Sensação (ISTP-A) pode proporcionar um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ENTJ-A pode ajudar o ISTP-A a ser mais organizado e focado em objetivos, enquanto o ISTP-A pode ajudar o ENTJ-A a ser mais adaptável e flexível.',
      'Ambos os tipos tendem a ser diretos e honestos em sua comunicação, o que pode facilitar a resolução de conflitos e mal-entendidos.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode se frustrar com a falta de planejamento e estrutura do ISTP-A, enquanto o ISTP-A pode achar o ENTJ-A muito controlador e inflexível.',
      'O ENTJ-A valoriza a criatividade e a visão de futuro, enquanto o ISTP-A valoriza a praticidade e a experiência imediata, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'O ISTP-A pode se sentir oprimido pela energia extrovertida e dominante do ENTJ-A, enquanto o ENTJ-A pode achar o ISTP-A muito reservado e desapegado.',
      'Ambos os tipos podem ser teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Conscientemente trabalhar para desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente.',
      'Estabelecer objetivos comuns e trabalhar juntos para alcançá-los, aproveitando a orientação para objetivos do ENTJ-A e a adaptabilidade do ISTP-A.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
    ],
  },
  'ENTJ-A_ISFJ-A': {
    compatibility: 0.5763,
    relationshipSuccess: [
      'O ENTJ-A pode ajudar o ISFJ-A a ser mais assertivo e confiante na tomada de decisões, incentivando o desenvolvimento pessoal e profissional.',
      'O ISFJ-A pode ajudar o ENTJ-A a ser mais sensível e atento às necessidades emocionais dos outros, promovendo uma comunicação mais empática.',
      'Ambos os tipos valorizam a responsabilidade e a confiabilidade, o que pode contribuir para uma base sólida de confiança no relacionamento.',
      'A combinação de Intuição (ENTJ-A) e Sensação (ISFJ-A) pode proporcionar uma abordagem equilibrada e complementar na resolução de problemas e tomada de decisões.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode achar o ISFJ-A muito sensível e emocional, enquanto o ISFJ-A pode achar o ENTJ-A muito crítico e insensível.',
      'O ISFJ-A tende a ser mais tradicional e orientado para o passado, enquanto o ENTJ-A é mais focado no futuro e na inovação, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'O ENTJ-A pode se frustrar com a resistência do ISFJ-A à mudança e à inovação, enquanto o ISFJ-A pode achar o ENTJ-A muito impaciente e impulsivo.',
      'O ISFJ-A pode se sentir oprimido pela energia extrovertida e dominante do ENTJ-A, enquanto o ENTJ-A pode achar o ISFJ-A muito reservado e passivo.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Reconhecer e valorizar as diferenças de personalidade, trabalhando juntos para aproveitar as forças de cada tipo em vez de tentar mudar um ao outro.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente para o ENTJ-A.',
    ],
  },
  'ENTJ-A_ISFP-A': {
    compatibility: 0.4637,
    relationshipSuccess: [
      'A combinação de Intuição (ENTJ-A) e Sensação (ISFP-A) pode proporcionar um equilíbrio entre abordagens teóricas e práticas na resolução de problemas.',
      'O ENTJ-A pode ajudar o ISFP-A a ser mais organizado e focado em objetivos, enquanto o ISFP-A pode ajudar o ENTJ-A a ser mais adaptável e sensível às necessidades emocionais dos outros.',
      'Ambos os tipos podem aprender um com o outro, com o ENTJ-A ganhando uma apreciação pela expressão artística e individualidade do ISFP-A e o ISFP-A ganhando uma apreciação pela visão de futuro e orientação para objetivos do ENTJ-A.',
    ],
    relationshipChallenges: [
      'O ENTJ-A pode achar o ISFP-A muito sensível e emocional, enquanto o ISFP-A pode achar o ENTJ-A muito crítico e insensível. Essa diferença na abordagem das emoções contribui para a compatibilidade mais baixa de 0.4637.',
      'O ISFP-A valoriza a independência e a liberdade, enquanto o ENTJ-A valoriza a estrutura e a organização, o que pode levar a conflitos na abordagem de problemas e tomada de decisões.',
      'O ENTJ-A pode se frustrar com a falta de planejamento e estrutura do ISFP-A, enquanto o ISFP-A pode achar o ENTJ-A muito controlador e inflexível.',
      'O ISFP-A pode se sentir oprimido pela energia extrovertida e dominante do ENTJ-A, enquanto o ENTJ-A pode achar o ISFP-A muito reservado e desapegado.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Reconhecer e valorizar as diferenças de personalidade, trabalhando juntos para aproveitar as forças de cada tipo em vez de tentar mudar um ao outro.',
      'Ser aberto a abordagens diferentes e complementares ao lidar com problemas, utilizando as forças de ambos os tipos para alcançar soluções mais eficazes.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente para o ENTJ-A.',
    ],
  },
  'ENTJ-A_INTJ-A': {
    compatibility: 0.9,
    relationshipSuccess: [
      'Ambos os tipos são orientados para objetivos e valorizam a lógica e a racionalidade na tomada de decisões, o que pode levar a um entendimento mútuo e respeito por suas abordagens.',
      'A combinação de extroversão (ENTJ-A) e introversão (INTJ-A) pode criar um equilíbrio saudável na dinâmica do relacionamento, com o ENTJ-A assumindo um papel mais ativo e sociável, enquanto o INTJ-A pode fornecer perspectivas mais introspectivas e reflexivas.',
      'Ambos os tipos têm uma visão de futuro e podem trabalhar juntos na criação de planos e estratégias de longo prazo, o que contribui para a compatibilidade de 0.7215.',
      'A natureza intelectual de ambos os tipos pode levar a discussões estimulantes e enriquecedoras, aprofundando a conexão emocional e intelectual no relacionamento.',
    ],
    relationshipChallenges: [
      'Os dois tipos podem ser teimosos e inflexíveis em suas opiniões, o que pode levar a dificuldades em comprometer e encontrar soluções mutuamente aceitáveis.',
      'O INTJ-A pode achar o ENTJ-A muito dominador e exigente, enquanto o ENTJ-A pode achar o INTJ-A muito reservado e distante.',
      'Ambos os tipos podem ter dificuldade em expressar suas emoções e ser emocionalmente disponíveis para o parceiro, o que pode levar a mal-entendidos e falta de apoio emocional.',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos, pensamentos e preocupações para construir confiança e compreensão mútua.',
      'Fazer um esforço para comprometer e encontrar soluções mutuamente aceitáveis, em vez de insistir em ter razão ou seguir uma abordagem específica.',
      'Desenvolver empatia e consideração pelas necessidades emocionais do parceiro, mesmo que isso não venha naturalmente para ambos os tipos.',
      'Reconhecer e valorizar as diferenças de personalidade, trabalhando juntos para aproveitar as forças de cada tipo em vez de tentar mudar um ao outro.',
      'Aprender a ser emocionalmente disponível e apoiar o parceiro, mesmo que isso exija um esforço consciente e prática.',
    ],
  },
  'ENTJ-A_INTP-A': {
    compatibility: 0.8,
    relationshipType: ['Romântico', 'Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTJ-A e INTP-A é alta devido às suas semelhanças e diferenças complementares. Ambos são analíticos, orientados para objetivos e apreciam abordagens lógicas. A combinação das habilidades de planejamento do ENTJ-A e da criatividade do INTP-A é benéfica para o relacionamento. No entanto, alguns desafios podem surgir, como o ENTJ-A sendo autoritário e o INTP-A indeciso. A compatibilidade é baseada em como eles podem superar esses desafios juntos.',
    relationshipSuccess: [
      'Comunicação aberta e honesta entre ambos',
      'Ambos valorizam a lógica e a objetividade na tomada de decisões',
      'Apreciam e respeitam as diferenças um do outro',
      'Colaboração eficaz em projetos e planejamento',
    ],
    relationshipChallenges: [
      'ENTJ-A pode ser muito autoritário e controlador',
      'INTP-A pode ser indeciso e ter dificuldade em se comprometer',
      'Ambos podem ter dificuldade em expressar emoções e compreender as necessidades emocionais do outro',
    ],
    challengeResolutionStrategies: [
      'Praticar a empatia e compreensão mútua',
      'Estabelecer limites e respeitar a autonomia do outro',
      'Incorporar momentos para discussão e resolução de problemas',
      'Buscar desenvolver habilidades de comunicação emocional',
    ],
  },
  'ENTJ-A_INFJ-A': {
    compatibility: 0.7,
    relationshipType: ['Romântico', 'Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTJ-A e INFJ-A é boa devido à combinação de suas semelhanças e diferenças complementares. Ambos são intuitivos e orientados para objetivos, o que permite uma comunicação fluida e colaboração eficiente. No entanto, alguns desafios podem surgir devido às diferenças em suas abordagens emocionais e estilos de comunicação. A compatibilidade é baseada em como eles podem superar esses desafios juntos.',
    relationshipSuccess: [
      'Compartilham uma visão de longo prazo e objetivos similares',
      'Ambos são motivados e comprometidos com seus valores e ideais',
      'São capazes de se conectar profundamente em um nível emocional',
      'Apreciam e valorizam a empatia e a compreensão mútua',
    ],
    relationshipChallenges: [
      'ENTJ-A pode ser autoritário e exigente, o que pode sobrecarregar o INFJ-A',
      'INFJ-A pode ser muito sensível e ter dificuldade em lidar com críticas',
      'Ambos podem ter dificuldade em expressar suas necessidades emocionais de maneira clara',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre sentimentos e emoções',
      'ENTJ-A deve aprender a ser mais sensível e apoiar as necessidades emocionais do INFJ-A',
      'INFJ-A deve trabalhar na assertividade e expressão de suas necessidades',
      'Desenvolver habilidades de escuta ativa e empatia para compreender melhor o ponto de vista do outro',
    ],
  },
  'ENTJ-A_INFP-A': {
    compatibility: 0.6142,
    relationshipType: ['Romântico', 'Amizade'],
    compatibilityText:
      'A compatibilidade entre ENTJ-A e INFP-A é moderada, pois ambos compartilham a função intuitiva, o que pode ajudar na comunicação e compreensão mútua. No entanto, existem diferenças significativas em suas abordagens emocionais e na tomada de decisões, o que pode levar a desafios no relacionamento. A compatibilidade é baseada em como eles podem superar esses desafios juntos.',
    relationshipSuccess: [
      'Conexão emocional profunda através de ideais e valores compartilhados',
      'Ambos são intuitivos e podem se comunicar bem em um nível conceitual',
      'Apreciam e valorizam a individualidade e a criatividade',
    ],
    relationshipChallenges: [
      'ENTJ-A pode ser autoritário e controlador, enquanto INFP-A valoriza a liberdade e a autonomia',
      'INFP-A pode ser muito sensível às críticas e ter dificuldade em lidar com conflitos',
      'Diferenças na tomada de decisões, com ENTJ-A sendo mais lógico e INFP-A sendo mais emocional',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta, respeitando as diferenças de estilo de comunicação',
      'ENTJ-A deve aprender a ser mais sensível e apoiar as necessidades emocionais do INFP-A',
      'INFP-A deve desenvolver habilidades de assertividade e lidar melhor com críticas',
      'Buscar compromissos e equilíbrio nas decisões, respeitando as perspectivas lógicas e emocionais',
    ],
  },

  'ENTP-A_ESTJ-A': {
    compatibility: 0.5231,
    relationshipType: ['Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ESTJ-A é moderada. Ambos são extrovertidos e podem trabalhar bem juntos em projetos e atividades sociais. No entanto, suas diferenças em termos de abordagem à vida e à tomada de decisões podem gerar tensão no relacionamento. A compatibilidade é baseada na capacidade de ambos superarem esses desafios juntos.',
    relationshipSuccess: [
      'Ambos são extrovertidos e podem ter interações sociais dinâmicas',
      'Capacidade de colaborar em projetos e resolver problemas',
      'Orientados a objetivos e motivados a alcançar o sucesso',
    ],
    relationshipChallenges: [
      'ENTP-A é mais inovador e aberto a mudanças, enquanto ESTJ-A é mais tradicional e gosta de seguir regras',
      'Diferenças na tomada de decisões, com ENTP-A sendo mais flexível e ESTJ-A mais estruturado',
      'ENTP-A pode se sentir limitado pela rigidez do ESTJ-A, e ESTJ-A pode se sentir desconfortável com a natureza imprevisível do ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver empatia e compreensão mútua para respeitar as diferenças um do outro',
      'Comunicar-se abertamente e estabelecer expectativas claras para o relacionamento',
      'Encontrar um equilíbrio entre inovação e tradição, adaptando-se às necessidades e preferências do outro',
      'Trabalhar juntos para criar estruturas flexíveis e abertas a mudanças',
    ],
  },
  'ENTP-A_ESTP-A': {
    compatibility: 0.7762,
    relationshipType: ['Romântico', 'Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ESTP-A é boa, já que ambos são extrovertidos, energéticos e se divertem em atividades sociais. Eles têm uma abordagem semelhante à vida e gostam de explorar novas ideias e experiências. A compatibilidade é baseada na capacidade de ambos se apoiarem e se complementarem em suas aventuras e projetos.',
    relationshipSuccess: [
      'Ambos são extrovertidos e gostam de atividades sociais e aventuras',
      'Compartilham interesses semelhantes e apreciam a companhia um do outro',
      'Apreciam a liberdade e a criatividade no relacionamento',
    ],
    relationshipChallenges: [
      'Ambos podem ter dificuldade em se comprometer e estabelecer raízes',
      'ENTP-A pode ser mais teórico e filosófico, enquanto ESTP-A é mais prático e orientado à ação',
      'Podem enfrentar desafios na comunicação emocional e no apoio emocional mútuo',
    ],
    challengeResolutionStrategies: [
      'Estabelecer metas e compromissos comuns para fortalecer o relacionamento',
      'Aprender a equilibrar as necessidades de ambos entre teoria e ação',
      'Desenvolver habilidades de comunicação emocional e empatia para apoiar um ao outro',
    ],
  },
  'ENTP-A_ESFJ-A': {
    compatibility: 0.5839,
    relationshipType: ['Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ESFJ-A é moderada, com pontos em comum e diferenças que podem ser complementares. O ENTP-A é criativo e adora explorar ideias, enquanto o ESFJ-A é carinhoso e focado nas necessidades dos outros. Essas diferenças podem levar a um relacionamento de apoio e aprendizado mútuo. No entanto, a compatibilidade é baseada na capacidade de ambos se adaptarem e respeitarem as necessidades e estilos de vida um do outro.',
    relationshipSuccess: [
      'Ambos podem aprender com as habilidades e pontos fortes do outro',
      'ENTP-A pode trazer criatividade e ideias inovadoras',
      'ESFJ-A pode fornecer apoio emocional e estabilidade',
    ],
    relationshipChallenges: [
      'ENTP-A pode ser percebido como insensível e desorganizado pelo ESFJ-A',
      'ESFJ-A pode parecer excessivamente preocupado com regras e expectativas sociais para o ENTP-A',
      'Podem enfrentar desafios na comunicação e compreensão das necessidades emocionais do outro',
    ],
    challengeResolutionStrategies: [
      'Praticar a empatia e compreensão mútua',
      'Estabelecer limites e respeitar as diferenças um do outro',
      'Desenvolver habilidades de comunicação emocional e oferecer apoio emocional',
    ],
  },
  'ENTP-A_ESFP-A': {
    compatibility: 0.6284,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ESFP-A é moderadamente alta, pois ambos compartilham uma natureza extrovertida e entusiasmada. O ENTP-A é criativo e gosta de explorar ideias, enquanto o ESFP-A é sociável e aprecia o momento presente. Essa combinação pode levar a um relacionamento divertido e estimulante. No entanto, a compatibilidade é baseada na capacidade de ambos se adaptarem e respeitarem as diferenças de personalidade e necessidades um do outro.',
    relationshipSuccess: [
      'Ambos são extrovertidos e apreciam a companhia um do outro',
      'ENTP-A pode trazer criatividade e ideias inovadoras',
      'ESFP-A pode fornecer energia e apreciação pelo momento presente',
    ],
    relationshipChallenges: [
      'ENTP-A pode ser percebido como desorganizado e teórico demais pelo ESFP-A',
      'ESFP-A pode parecer superficial e impulsivo para o ENTP-A',
      'Podem enfrentar dificuldades na comunicação e compreensão das necessidades de longo prazo um do outro',
    ],
    challengeResolutionStrategies: [
      'Praticar a empatia e compreensão mútua',
      'Estabelecer limites e respeitar as diferenças de personalidade um do outro',
      'Conversar abertamente sobre expectativas e necessidades de longo prazo',
    ],
  },
  'ENTP-A_ENTJ-A': {
    compatibility: 0.8281,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ENTJ-A é alta, já que ambos são personalidades extrovertidas, intuitivas e orientadas a objetivos. O ENTP-A é criativo e gosta de explorar novas ideias, enquanto o ENTJ-A é organizado e focado em planejamento e execução. Essa combinação pode resultar em um relacionamento dinâmico e produtivo. A compatibilidade é baseada na habilidade de ambos em equilibrar e complementar um ao outro em suas abordagens e habilidades.',
    relationshipSuccess: [
      'Ambos são orientados a objetivos e apreciam a lógica',
      'ENTP-A traz criatividade e ideias inovadoras',
      'ENTJ-A fornece estrutura e planejamento eficiente',
    ],
    relationshipChallenges: [
      'ENTP-A pode ser percebido como desorganizado e indeciso pelo ENTJ-A',
      'ENTJ-A pode parecer autoritário e inflexível para o ENTP-A',
      'Podem enfrentar dificuldades em lidar com emoções e necessidades emocionais um do outro',
    ],
    challengeResolutionStrategies: [
      'Praticar empatia e compreensão mútua',
      'Estabelecer limites e respeitar a autonomia e as diferenças de personalidade um do outro',
      'Trabalhar juntos para aprimorar habilidades de comunicação emocional e flexibilidade',
    ],
  },
  'ENTP-A_ENTP-A': {
    compatibility: 0.8301,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre dois ENTP-A é alta, já que compartilham muitas características em comum, como serem extrovertidos, intuitivos e orientados a objetivos. Ambos apreciam a troca de ideias e a busca por inovação. A similaridade de personalidade pode levar a um forte entendimento mútuo e a uma conexão profunda. No entanto, eles também podem enfrentar desafios relacionados à falta de estrutura e organização. A compatibilidade é baseada na habilidade de ambos em aprender e crescer juntos, superando as áreas em que precisam melhorar.',
    relationshipSuccess: [
      'Comunicação aberta e compreensão mútua devido à semelhança de personalidade',
      'Ambos são criativos e apreciam a busca por novas ideias e inovações',
      'Capacidade de trabalhar em conjunto para resolver problemas complexos',
    ],
    relationshipChallenges: [
      'Ambos podem ser desorganizados e indecisos, o que pode causar dificuldades no planejamento',
      'Pode haver falta de atenção às necessidades emocionais um do outro',
      'Podem enfrentar dificuldades em estabelecer limites e responsabilidades',
    ],
    challengeResolutionStrategies: [
      'Trabalhar juntos para desenvolver habilidades de organização e planejamento',
      'Praticar empatia e atenção às necessidades emocionais do parceiro',
      'Definir limites e responsabilidades claras no relacionamento',
    ],
  },
  'ENTP-A_ENFJ-A': {
    compatibility: 0.7932,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ENFJ-A é alta, pois ambos são extrovertidos, intuitivos e compartilham uma paixão por ideias e inovação. O ENTP-A traz criatividade e habilidades analíticas ao relacionamento, enquanto o ENFJ-A oferece empatia e habilidades de liderança. Essa combinação pode levar a uma parceria dinâmica e estimulante. No entanto, eles podem enfrentar desafios relacionados à tomada de decisões e expressão de emoções. A compatibilidade é baseada na capacidade de ambos superarem esses desafios juntos.',
    relationshipSuccess: [
      'Ambos são extrovertidos e intuitivos, facilitando a comunicação e compreensão mútua',
      'Complementam-se em habilidades e interesses',
      'Trabalham juntos de forma eficaz em projetos e planejamento',
    ],
    relationshipChallenges: [
      'ENTP-A pode ter dificuldade em expressar emoções e compreender as necessidades emocionais do ENFJ-A',
      'ENFJ-A pode ser muito sensível às críticas e ao feedback do ENTP-A',
      'Podem haver desafios na tomada de decisões devido a diferentes abordagens',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação emocional e empatia',
      'Aprender a dar e receber feedback de maneira construtiva',
      'Estabelecer processos claros de tomada de decisão e resolver conflitos de forma colaborativa',
    ],
  },
  'ENTP-A_ENFP-A': {
    compatibility: 0.8465,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ENFP-A é alta, já que ambos são extrovertidos, intuitivos e compartilham um amor por explorar novas ideias e possibilidades. O ENTP-A traz habilidades analíticas e pensamento crítico ao relacionamento, enquanto o ENFP-A oferece empatia e entusiasmo. Juntos, eles podem formar uma parceria estimulante e criativa. No entanto, eles podem enfrentar desafios na tomada de decisões e no comprometimento com planos de longo prazo. A compatibilidade é baseada na capacidade de ambos superarem esses desafios juntos.',
    relationshipSuccess: [
      'Ambos são extrovertidos e intuitivos, facilitando a comunicação e a compreensão mútua',
      'Compartilham interesses e paixões similares',
      'Apreciam e valorizam as habilidades e perspectivas do outro',
    ],
    relationshipChallenges: [
      'ENTP-A pode ser crítico e ter dificuldade em expressar emoções',
      'ENFP-A pode ser indeciso e lutar para se comprometer com planos de longo prazo',
      'Ambos podem ter dificuldade em lidar com detalhes e tarefas rotineiras',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação emocional e empatia',
      'Estabelecer metas claras e planos de longo prazo juntos',
      'Aprender a valorizar e apreciar as habilidades do outro na tomada de decisões e execução de tarefas',
    ],
  },
  'ENTP-A_ISTJ-A': {
    compatibility: 0.6213,
    relationshipType: ['Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ISTJ-A é moderada. Ambos têm pontos fortes distintos que podem complementar um ao outro, mas também possuem diferenças significativas em suas abordagens e valores. O ENTP-A é criativo, inovador e adora explorar novas ideias, enquanto o ISTJ-A é organizado, detalhista e valoriza a tradição e a estabilidade. Essas diferenças podem ser uma fonte de crescimento mútuo, mas também podem levar a conflitos e mal-entendidos. A compatibilidade é baseada na capacidade de ambos aceitarem e trabalharem com suas diferenças.',
    relationshipSuccess: [
      'ENTP-A pode ajudar ISTJ-A a ser mais aberto a novas ideias e possibilidades',
      'ISTJ-A pode auxiliar ENTP-A a ser mais organizado e focado em detalhes',
      'Ambos podem aprender e crescer com as habilidades e perspectivas do outro',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem e priorização de tarefas e projetos',
      'ENTP-A pode achar ISTJ-A muito rígido e inflexível',
      'ISTJ-A pode considerar ENTP-A imprudente e desorganizado',
    ],
    challengeResolutionStrategies: [
      'Desenvolver a comunicação e a compreensão mútua',
      'Encontrar um equilíbrio entre inovação e tradição',
      'Aprender a valorizar e apreciar as habilidades do outro',
    ],
  },
  'ENTP-A_ISTP-A': {
    compatibility: 0.8,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ISTP-A é alta, já que ambos são pensadores analíticos e orientados para a resolução de problemas. Eles têm uma abordagem semelhante à vida, apreciando a lógica e a flexibilidade. O ENTP-A é inovador e entusiasmado, enquanto o ISTP-A é prático e habilidoso. Essa combinação de habilidades e interesses complementares pode resultar em um relacionamento enriquecedor e gratificante. No entanto, desafios podem surgir quando se trata de comunicação emocional e planejamento a longo prazo. A compatibilidade é baseada na capacidade de ambos trabalharem juntos para superar esses desafios.',
    relationshipSuccess: [
      'Ambos valorizam a independência e a autonomia',
      'Apreciam a lógica e a objetividade na tomada de decisões',
      'Complementam-se em termos de habilidades e interesses',
    ],
    relationshipChallenges: [
      'Dificuldades na comunicação emocional e compreensão das necessidades do outro',
      'ENTP-A pode ser visto como impulsivo e indisciplinado pelo ISTP-A',
      'ISTP-A pode parecer excessivamente reservado e distante para o ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Praticar a empatia e a escuta ativa para melhorar a comunicação emocional',
      'Estabelecer metas e planos conjuntos para abordar as preocupações com o planejamento a longo prazo',
      'Respeitar e apoiar a independência e os interesses individuais do outro',
    ],
  },
  'ENTP-A_ISFJ-A': {
    compatibility: 0.5823,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ISFJ-A é moderada, pois esses tipos têm algumas semelhanças e diferenças que podem ser complementares ou desafiadoras. O ENTP-A é criativo, entusiasmado e gosta de explorar novas ideias, enquanto o ISFJ-A é cuidadoso, leal e focado em manter harmonia e estabilidade. A combinação de habilidades e perspectivas diferentes pode ser benéfica, mas também pode levar a desentendimentos e frustrações. A compatibilidade é baseada na capacidade de ambos trabalharem juntos para superar os desafios e apreciar as qualidades únicas um do outro.',
    relationshipSuccess: [
      'Ambos são comprometidos com o crescimento pessoal e a melhoria',
      'ENTP-A pode trazer novas perspectivas e ideias para o ISFJ-A',
      'ISFJ-A pode ajudar o ENTP-A a se concentrar em detalhes e tarefas práticas',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem à tomada de decisões e resolução de problemas',
      'ENTP-A pode ser visto como insensível e imprudente pelo ISFJ-A',
      'ISFJ-A pode parecer excessivamente preocupado com tradições e regras para o ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver a comunicação e a compreensão mútua',
      'Aceitar e apreciar as diferenças entre os estilos de personalidade',
      'Estabelecer limites e compromissos para abordar conflitos e expectativas',
    ],
  },
  'ENTP-A_ISFP-A': {
    compatibility: 0.6439,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e ISFP-A é moderadamente alta, pois ambos compartilham uma abordagem flexível e adaptável à vida. O ENTP-A é criativo, entusiasmado e gosta de explorar novas ideias, enquanto o ISFP-A é sensível, artístico e prefere viver no presente. Essas diferenças e semelhanças podem ser complementares, permitindo que ambos cresçam e aprendam um com o outro. No entanto, a compatibilidade depende de como eles abordam e superam os desafios que possam surgir em seu relacionamento.',
    relationshipSuccess: [
      'Ambos são abertos a novas experiências e ideias',
      'ENTP-A pode incentivar o ISFP-A a explorar e compartilhar suas paixões criativas',
      'ISFP-A pode ajudar o ENTP-A a se conectar com suas emoções e apreciar a beleza do momento presente',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem à tomada de decisões e comunicação',
      'ENTP-A pode ser visto como insensível ou impaciente pelo ISFP-A',
      'ISFP-A pode ser percebido como indeciso ou passivo pelo ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e empatia mútua',
      'Estabelecer limites e compromissos para abordar conflitos e expectativas',
      'Apreciar e valorizar as diferenças entre os estilos de personalidade',
    ],
  },
  'ENTP-A_INTJ-A': {
    compatibility: 0.7493,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e INTJ-A é alta, pois ambos são intuitivos, analíticos e orientados para objetivos. O ENTP-A é extrovertido, criativo e gosta de explorar novas ideias, enquanto o INTJ-A é introvertido, estratégico e focado na eficiência. Essas diferenças e semelhanças podem ser complementares, permitindo que ambos cresçam e aprendam um com o outro. A compatibilidade é baseada em como eles podem superar desafios e trabalhar juntos em direção a objetivos comuns.',
    relationshipSuccess: [
      'Ambos valorizam a lógica e a objetividade na tomada de decisões',
      'ENTP-A pode ajudar o INTJ-A a se tornar mais flexível e adaptável',
      'INTJ-A pode auxiliar o ENTP-A a ser mais estratégico e focado',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem à comunicação e interação social',
      'ENTP-A pode ser percebido como impulsivo ou disperso pelo INTJ-A',
      'INTJ-A pode ser visto como inflexível ou distante pelo ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e empatia mútua',
      'Respeitar e apoiar as diferenças entre os estilos de personalidade',
      'Apreciar e valorizar as contribuições únicas que cada um traz para o relacionamento',
    ],
  },
  'ENTP-A_INTP-A': {
    compatibility: 0.8735,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e INTP-A é bastante alta, uma vez que ambos compartilham a natureza intuitiva e o amor pelo pensamento analítico. O ENTP-A é extrovertido, criativo e energético, enquanto o INTP-A é introvertido, pensativo e focado em ideias complexas. Essas semelhanças e diferenças podem criar um relacionamento dinâmico e estimulante, permitindo que ambos cresçam e aprendam um com o outro. A compatibilidade é baseada na capacidade de trabalharem juntos e superarem desafios, explorando o potencial máximo de suas personalidades.',
    relationshipSuccess: [
      'Ambos valorizam a lógica e o pensamento analítico',
      'ENTP-A pode incentivar o INTP-A a explorar novas ideias e perspectivas',
      'INTP-A pode ajudar o ENTP-A a aprofundar seu conhecimento e compreensão',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem à comunicação e interação social',
      'ENTP-A pode ser visto como muito dominante ou impulsivo pelo INTP-A',
      'INTP-A pode ser percebido como indeciso ou distante pelo ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e empatia mútua',
      'Respeitar e apoiar as diferenças entre os estilos de personalidade',
      'Apreciar e valorizar as contribuições únicas que cada um traz para o relacionamento',
    ],
  },
  'ENTP-A_INFJ-A': {
    compatibility: 0.8156,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e INFJ-A é alta, pois ambos são intuitivos e compartilham uma visão de mundo semelhante. O ENTP-A é extrovertido, criativo e energético, enquanto o INFJ-A é introvertido, empático e orientado para os valores. A combinação de suas habilidades pode levar a um relacionamento equilibrado e enriquecedor. No entanto, podem surgir desafios relacionados à comunicação e às diferenças na abordagem dos problemas. A compatibilidade é baseada na capacidade de trabalharem juntos e superarem esses desafios, respeitando as diferenças e complementando um ao outro.',
    relationshipSuccess: [
      'Ambos são intuitivos e capazes de compreender as perspectivas um do outro',
      'ENTP-A traz criatividade e inovação para o relacionamento',
      'INFJ-A fornece compreensão emocional e apoio empático',
    ],
    relationshipChallenges: [
      'Diferenças na comunicação e na expressão emocional',
      'ENTP-A pode ser percebido como muito dominante ou impulsivo pelo INFJ-A',
      'INFJ-A pode ser visto como muito sensível ou idealista pelo ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e empatia mútua',
      'Respeitar e apoiar as diferenças entre os estilos de personalidade',
      'Focar no desenvolvimento conjunto e na aprendizagem a partir das contribuições únicas de cada um',
    ],
  },
  'ENTP-A_INFP-A': {
    compatibility: 0.7643,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre ENTP-A e INFP-A é boa, pois ambos são intuitivos e interessados em explorar ideias e conceitos. O ENTP-A é extrovertido, criativo e energético, enquanto o INFP-A é introvertido, empático e orientado para os valores. A combinação dessas características pode levar a um relacionamento enriquecedor e equilibrado. No entanto, podem surgir desafios relacionados à comunicação e à abordagem dos problemas. A compatibilidade é baseada na capacidade de trabalharem juntos e superarem esses desafios, respeitando as diferenças e complementando um ao outro.',
    relationshipSuccess: [
      'Ambos são intuitivos e abertos a explorar novas ideias e conceitos',
      'ENTP-A traz criatividade e inovação para o relacionamento',
      'INFP-A fornece compreensão emocional e apoio empático',
    ],
    relationshipChallenges: [
      'Diferenças na comunicação e na expressão emocional',
      'ENTP-A pode ser percebido como muito dominante ou impulsivo pelo INFP-A',
      'INFP-A pode ser visto como muito sensível ou idealista pelo ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e empatia mútua',
      'Respeitar e apoiar as diferenças entre os estilos de personalidade',
      'Focar no desenvolvimento conjunto e na aprendizagem a partir das contribuições únicas de cada um',
    ],
  },

  'INFJ-A_ESTJ-A': {
    compatibility: 0.6234,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ESTJ-A é moderada, já que ambos têm pontos fortes e fracos que podem se complementar. O INFJ-A é introspectivo, empático e focado na compreensão das emoções e motivações das pessoas, enquanto o ESTJ-A é prático, assertivo e focado na organização e na realização de objetivos. Essas diferenças podem ser benéficas, mas também podem levar a conflitos se não forem bem gerenciadas. A compatibilidade é baseada na capacidade de ambos se adaptarem e aprenderem um com o outro, respeitando as diferenças e encontrando um equilíbrio.',
    relationshipSuccess: [
      'INFJ-A traz empatia e compreensão emocional ao relacionamento',
      'ESTJ-A traz estrutura e organização para o relacionamento',
      'Ambos são comprometidos e leais em seus relacionamentos',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem da comunicação e tomada de decisões',
      'INFJ-A pode se sentir sobrecarregado pela assertividade do ESTJ-A',
      'ESTJ-A pode achar difícil compreender a natureza introspectiva do INFJ-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e compreensão mútua',
      'Respeitar e apoiar as diferenças de personalidade',
      'Encontrar um equilíbrio entre as necessidades emocionais e práticas do relacionamento',
    ],
  },
  'INFJ-A_ESTP-A': {
    compatibility: 0.5654,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ESTP-A é moderada, pois suas diferenças podem ser tanto complementares quanto desafiadoras. O INFJ-A é empático, introspectivo e focado no crescimento pessoal e espiritual, enquanto o ESTP-A é aventureiro, prático e orientado para ação. Essas diferenças podem trazer uma dinâmica interessante ao relacionamento, mas também podem levar a mal-entendidos e conflitos se não forem bem gerenciados. A compatibilidade é baseada na capacidade de ambos valorizarem e aprenderem um com o outro, apesar das diferenças.',
    relationshipSuccess: [
      'INFJ-A pode ajudar ESTP-A a aprofundar suas emoções e compreender os outros',
      'ESTP-A pode ajudar INFJ-A a ser mais presente e engajado no mundo exterior',
      'Ambos podem aprender com as perspectivas diferentes um do outro',
    ],
    relationshipChallenges: [
      'Diferenças significativas na abordagem da vida e tomada de decisões',
      'INFJ-A pode se sentir sobrecarregado pela energia e impulsividade do ESTP-A',
      'ESTP-A pode achar difícil se conectar com as preocupações emocionais e intelectuais do INFJ-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e compreensão mútua',
      'Apoiar e respeitar as diferenças de personalidade',
      'Trabalhar juntos para encontrar um equilíbrio entre a ação e a reflexão no relacionamento',
    ],
  },
  'INFJ-A_ESFJ-A': {
    compatibility: 0.6213,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ESFJ-A é moderada. Ambos são tipos empáticos e atenciosos que valorizam conexões emocionais profundas. No entanto, suas diferenças nas funções cognitivas podem levar a desafios no relacionamento. O INFJ-A é introspectivo e intuitivo, enquanto o ESFJ-A é mais prático e orientado para a ação. Se eles puderem aprender a apreciar e respeitar suas diferenças, podem se complementar e construir um relacionamento significativo.',
    relationshipSuccess: [
      'Ambos são sensíveis às necessidades emocionais dos outros',
      'Valorizam conexões profundas e significativas',
      'Podem aprender um com o outro e crescer juntos',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem da vida e tomada de decisões',
      'INFJ-A pode achar o ESFJ-A muito focado em detalhes e rotina',
      'ESFJ-A pode achar o INFJ-A muito introspectivo e distante',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e compreensão mútua',
      'Aceitar e valorizar as diferenças de personalidade',
      'Trabalhar juntos para encontrar um equilíbrio entre o prático e o intuitivo no relacionamento',
    ],
  },
  'INFJ-A_ESFP-A': {
    compatibility: 0.5632,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ESFP-A é moderada. Ambos valorizam conexões emocionais e têm um caráter empático. No entanto, suas diferenças nas funções cognitivas podem criar desafios no relacionamento. O INFJ-A é intuitivo e focado no futuro, enquanto o ESFP-A é mais voltado para o presente e busca desfrutar do momento. Se conseguirem apreciar e aprender com suas diferenças, eles podem construir um relacionamento significativo juntos.',
    relationshipSuccess: [
      'Ambos são emocionalmente conscientes e sensíveis às necessidades dos outros',
      'Podem se complementar com suas perspectivas diferentes',
      'Valorizam o apoio emocional mútuo',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem da vida e tomada de decisões',
      'INFJ-A pode achar o ESFP-A muito impulsivo e imediatista',
      'ESFP-A pode achar o INFJ-A muito preocupado com o futuro e introspectivo',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e compreensão mútua',
      'Aceitar e valorizar as diferenças de personalidade',
      'Encontrar um equilíbrio entre o foco no presente e no futuro no relacionamento',
    ],
  },
  'INFJ-A_ENTJ-A': {
    compatibility: 0.7123,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ENTJ-A é boa, pois eles compartilham uma abordagem intuitiva e orientada para o futuro. O INFJ-A é empático e focado em entender as emoções e motivações das pessoas, enquanto o ENTJ-A é assertivo e focado em alcançar objetivos. Essa combinação de características pode ser benéfica tanto em relacionamentos pessoais quanto profissionais. No entanto, desafios podem surgir devido às diferenças em como eles lidam com emoções e tomam decisões.',
    relationshipSuccess: [
      'Ambos são intuitivos e focados no futuro',
      'Complementam-se nas habilidades de liderança e empatia',
      'Podem trabalhar juntos efetivamente para alcançar objetivos comuns',
    ],
    relationshipChallenges: [
      'Diferenças na tomada de decisões e abordagem emocional',
      'ENTJ-A pode ser visto como insensível ou autoritário pelo INFJ-A',
      'INFJ-A pode ser visto como muito emotivo ou indeciso pelo ENTJ-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e compreensão mútua',
      'Aceitar e valorizar as diferenças de personalidade',
      'Estabelecer limites e respeitar a autonomia um do outro no relacionamento',
    ],
  },
  'INFJ-A_ENTP-A': {
    compatibility: 0.7561,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ENTP-A é bastante alta, pois ambos são intuitivos e compartilham uma abordagem criativa e orientada para o futuro. O INFJ-A é empático e focado em entender as emoções e motivações das pessoas, enquanto o ENTP-A é inovador e adora explorar novas ideias. Essa combinação de características pode ser benéfica em diversos tipos de relacionamento. No entanto, desafios podem surgir devido às diferenças na forma como lidam com emoções e tomam decisões.',
    relationshipSuccess: [
      'Ambos são intuitivos e criativos',
      'Complementam-se em termos de empatia e inovação',
      'Podem colaborar efetivamente em projetos e objetivos comuns',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem emocional e tomada de decisões',
      'ENTP-A pode ser visto como insensível ou impulsivo pelo INFJ-A',
      'INFJ-A pode ser visto como muito emotivo ou cauteloso pelo ENTP-A',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e compreensão mútua',
      'Aceitar e valorizar as diferenças de personalidade',
      'Estabelecer limites e respeitar a autonomia um do outro no relacionamento',
    ],
  },
  'INFJ-A_ENFJ-A': {
    compatibility: 0.7869,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ENFJ-A é alta, já que ambos são tipos empáticos e focados nas pessoas. Eles compartilham a intuição e têm uma compreensão profunda das emoções e necessidades dos outros. Essa combinação de características é benéfica para vários tipos de relacionamento, pois ambos são capazes de se conectar em um nível emocional profundo. No entanto, podem enfrentar desafios relacionados à comunicação e à tomada de decisões, já que ambos tendem a ser perfeccionistas e podem ter expectativas altas um do outro.',
    relationshipSuccess: [
      'Conexão emocional profunda e compreensão mútua',
      'Ambos são empáticos e focados nas pessoas',
      'Podem trabalhar juntos em projetos e objetivos comuns de forma eficaz',
    ],
    relationshipChallenges: [
      'Comunicação e expectativas podem ser desafios',
      'Ambos podem ser perfeccionistas e exigentes em relação ao outro',
      'Podem enfrentar dificuldades ao tomar decisões difíceis juntos',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação aberta e eficaz',
      'Aceitar e valorizar as diferenças de personalidade',
      'Estabelecer limites e respeitar a autonomia um do outro no relacionamento',
    ],
  },
  'INFJ-A_ENFP-A': {
    compatibility: 0.8412,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ENFP-A é muito alta, já que ambos são intuitivos, emocionalmente sintonizados e orientados para valores. Eles se conectam profundamente em um nível emocional e apreciam a criatividade e a paixão que cada um traz para o relacionamento. Ambos valorizam a comunicação aberta e honesta, o que fortalece a conexão. No entanto, eles podem enfrentar desafios na tomada de decisões práticas e na organização de suas vidas cotidianas, já que ambos tendem a ser mais focados em ideias e possibilidades futuras do que em detalhes concretos.',
    relationshipSuccess: [
      'Conexão emocional profunda e compreensão mútua',
      'Ambos valorizam a comunicação aberta e honesta',
      'Compartilham paixão por ideias e explorar novas possibilidades',
    ],
    relationshipChallenges: [
      'Tomada de decisões práticas e organização podem ser desafiadoras',
      'Ambos podem se distrair facilmente com ideias e possibilidades futuras',
      'Podem ter dificuldade em estabelecer e manter rotinas e estruturas',
    ],
    challengeResolutionStrategies: [
      'Trabalhar juntos para desenvolver habilidades de organização e planejamento',
      'Estabelecer metas concretas e prazos para ajudar a manter o foco',
      'Buscar equilíbrio entre exploração de ideias e realização de tarefas práticas',
    ],
  },
  'INFJ-A_ISTJ-A': {
    compatibility: 0.6431,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ISTJ-A é moderada, pois eles têm algumas semelhanças e diferenças complementares. Ambos são responsáveis, leais e valorizam a estabilidade em seus relacionamentos. No entanto, o INFJ-A é mais focado em emoções e valores, enquanto o ISTJ-A é mais prático e orientado a detalhes. Essas diferenças podem levar a desentendimentos e frustrações, mas também podem trazer equilíbrio e perspectivas únicas ao relacionamento se forem bem administradas.',
    relationshipSuccess: [
      'Ambos são responsáveis e leais aos compromissos',
      'Valorizam a estabilidade e a segurança em seus relacionamentos',
      'Podem trazer equilíbrio e perspectivas únicas um ao outro',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem emocional e prática para a vida',
      'Desentendimentos e frustrações devido a diferentes perspectivas',
      'INFJ-A pode se sentir incompreendido em suas necessidades emocionais',
    ],
    challengeResolutionStrategies: [
      'Aprender a apreciar e respeitar as diferenças um do outro',
      'Comunicar aberta e honestamente sobre necessidades e expectativas',
      'Trabalhar juntos para encontrar um equilíbrio entre emoção e praticidade',
    ],
  },
  'INFJ-A_ISTP-A': {
    compatibility: 0.6219,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ISTP-A é moderada, já que eles compartilham algumas semelhanças, mas também têm diferenças significativas. Ambos são introvertidos e desfrutam de tempo de qualidade juntos. No entanto, o INFJ-A é mais focado em emoções e valores, enquanto o ISTP-A é prático e orientado à ação. Essas diferenças podem levar a desentendimentos e tensões, mas também podem trazer equilíbrio e crescimento mútuo se forem bem gerenciadas.',
    relationshipSuccess: [
      'Ambos valorizam a privacidade e a independência',
      'Podem aprender e crescer juntos através de suas diferenças',
      'Desfrutam de tempo de qualidade em um ambiente mais reservado',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem emocional e prática para a vida',
      'Desentendimentos e tensões devido a diferentes perspectivas',
      'INFJ-A pode se sentir incompreendido em suas necessidades emocionais',
    ],
    challengeResolutionStrategies: [
      'Aprender a apreciar e respeitar as diferenças um do outro',
      'Comunicar aberta e honestamente sobre necessidades e expectativas',
      'Encontrar atividades e interesses compartilhados para fortalecer o vínculo',
    ],
  },
  'INFJ-A_ISFJ-A': {
    compatibility: 0.7421,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ISFJ-A é alta, pois ambos são tipos introvertidos e centrados nas pessoas. Eles valorizam relacionamentos significativos e têm uma forte conexão emocional. A principal diferença entre os dois é que o INFJ-A é mais intuitivo e focado no futuro, enquanto o ISFJ-A é detalhista e focado no presente. Essa diferença pode levar a desentendimentos, mas também pode complementar e fortalecer o relacionamento se for bem administrada.',
    relationshipSuccess: [
      'Ambos valorizam conexões emocionais profundas e significativas',
      'Compartilham uma abordagem compassiva e empática para com os outros',
      'Podem se apoiar e crescer juntos, tanto emocional quanto intelectualmente',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem do planejamento e da tomada de decisões',
      'INFJ-A pode ser mais abstrato e visionário, enquanto ISFJ-A é mais prático e concreto',
      'Ambos podem ter dificuldades em lidar com críticas e conflitos',
    ],
    challengeResolutionStrategies: [
      'Comunicar aberta e honestamente sobre necessidades e expectativas',
      'Aprender a apreciar e respeitar as diferenças um do outro',
      'Praticar a empatia e a compreensão mútua ao lidar com conflitos',
    ],
  },
  'INFJ-A_ISFP-A': {
    compatibility: 0.7135,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e ISFP-A é boa, pois ambos são tipos introvertidos e emocionais. Eles valorizam conexões pessoais profundas e têm uma abordagem gentil e empática. No entanto, o INFJ-A é mais intuitivo e focado no futuro, enquanto o ISFP-A é sensorial e presente. Essas diferenças podem gerar desentendimentos, mas também podem ser complementares se forem bem administradas e respeitadas.',
    relationshipSuccess: [
      'Valorizam conexões emocionais profundas e significativas',
      'Abordagem compassiva e empática para com os outros',
      'Ambos são criativos e expressivos em suas próprias maneiras',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem do planejamento e tomada de decisões',
      'INFJ-A pode ser mais teórico e visionário, enquanto ISFP-A é mais prático e concreto',
      'Ambos podem ter dificuldade em lidar com críticas e conflitos',
    ],
    challengeResolutionStrategies: [
      'Comunicação aberta e honesta sobre necessidades e expectativas',
      'Aprender a apreciar e respeitar as diferenças um do outro',
      'Desenvolver habilidades de comunicação e resolução de conflitos',
    ],
  },
  'INFJ-A_INTJ-A': {
    compatibility: 0.7321,
    relationshipType: ['Amizade', 'Romântico', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e INTJ-A é alta, pois ambos são intuitivos e julgadores. Eles têm uma abordagem profunda e analítica para a vida e valorizam a compreensão das motivações e necessidades das pessoas. No entanto, o INFJ-A é mais focado nas emoções e conexões pessoais, enquanto o INTJ-A é mais lógico e objetivo. Essas diferenças podem ser complementares, mas também podem levar a desentendimentos se não forem bem gerenciadas.',
    relationshipSuccess: [
      'Compartilham uma abordagem intuitiva e analítica para a vida',
      'Valorizam a independência e o crescimento pessoal',
      'Ambos são orientados para objetivos e apreciam a eficiência',
    ],
    relationshipChallenges: [
      'Diferenças na forma como lidam com emoções e tomam decisões',
      'INFJ-A é mais sensível e empático, enquanto INTJ-A é mais lógico e objetivo',
      'Ambos podem ser teimosos e ter dificuldade em lidar com críticas',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação aberta e honesta sobre necessidades e emoções',
      'Aprender a apreciar e respeitar as diferenças um do outro',
      'Desenvolver habilidades de resolução de conflitos e lidar com críticas',
    ],
  },
  'INFJ-A_INTP-A': {
    compatibility: 0.7632,
    relationshipType: ['Romântico', 'Amizade'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e INTP-A é alta devido às suas semelhanças e diferenças complementares. Ambos são intuitivos, o que significa que podem se conectar bem em um nível mais profundo e compreender as motivações e pensamentos um do outro. No entanto, a combinação do lado emocional do INFJ-A e a lógica do INTP-A pode levar a desentendimentos e conflitos. Ambos devem trabalhar juntos para equilibrar essas diferenças e fortalecer o relacionamento.',
    relationshipSuccess: [
      'Comunicação aberta e honesta',
      'Apreciação das diferenças e habilidades complementares',
      'Apoio mútuo e compreensão emocional',
      'Estabelecer metas e planos comuns',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem emocional e lógica',
      'INFJ-A pode ser muito sensível e exigente emocionalmente',
      'INTP-A pode ser distante e ter dificuldade em expressar emoções',
    ],
    challengeResolutionStrategies: [
      'Praticar a empatia e a escuta ativa',
      'Desenvolver habilidades de comunicação emocional',
      'Estabelecer limites e respeitar as necessidades do outro',
      'Encorajar o crescimento e desenvolvimento pessoal',
    ],
  },
  'INFJ-A_INFJ-A': {
    compatibility: 0.8321,
    relationshipType: ['Romântico', 'Amizade'],
    compatibilityText:
      'A compatibilidade entre dois INFJ-A é alta, já que eles compartilham muitas características e valores semelhantes. Ambos são intuitivos, empáticos e compreensivos, o que pode levar a uma conexão profunda e significativa. No entanto, eles também podem ter dificuldade em lidar com conflitos e expressar suas necessidades, já que ambos tendem a evitar confrontos. Para um relacionamento bem-sucedido, eles devem trabalhar juntos para melhorar a comunicação e enfrentar os desafios de forma aberta e honesta.',
    relationshipSuccess: [
      'Conexão emocional profunda e compreensão mútua',
      'Valores e objetivos semelhantes',
      'Apoio mútuo e incentivo ao crescimento pessoal',
      'Comunicação sincera e honesta',
    ],
    relationshipChallenges: [
      'Evitar conflitos e dificuldade em expressar necessidades',
      'Sobrecarga emocional e esgotamento',
      'Tendência a absorver as emoções do outro',
      'Dificuldade em tomar decisões práticas e lidar com questões do dia a dia',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades de comunicação e resolução de conflitos',
      'Estabelecer limites e praticar o autocuidado',
      'Encorajar a independência e a tomada de decisões',
      'Buscar atividades e interesses fora do relacionamento',
    ],
  },
  'INFJ-A_INFP-A': {
    compatibility: 0.8134,
    relationshipType: ['Romântico', 'Amizade'],
    compatibilityText:
      'A compatibilidade entre INFJ-A e INFP-A é alta, pois ambos são tipos intuitivos e emocionais. Eles valorizam a compreensão mútua, a empatia e o apoio emocional. Essa conexão profunda pode levar a um relacionamento significativo e duradouro. No entanto, ambos também podem ter dificuldades em lidar com questões práticas e tomar decisões, o que pode gerar conflitos. Para um relacionamento bem-sucedido, eles devem trabalhar juntos para desenvolver habilidades práticas e enfrentar desafios de forma aberta e honesta.',
    relationshipSuccess: [
      'Conexão emocional profunda e compreensão mútua',
      'Valores e objetivos semelhantes',
      'Apoio mútuo e incentivo ao crescimento pessoal',
      'Comunicação aberta e honesta',
    ],
    relationshipChallenges: [
      'Dificuldade em lidar com questões práticas e tomar decisões',
      'Sobrecarga emocional e esgotamento',
      'Tendência a absorver as emoções do outro',
      'Evitar conflitos e dificuldade em expressar necessidades',
    ],
    challengeResolutionStrategies: [
      'Desenvolver habilidades práticas e de resolução de conflitos',
      'Estabelecer limites e praticar o autocuidado',
      'Encorajar a independência e a tomada de decisões',
      'Buscar atividades e interesses fora do relacionamento',
    ],
  },

  'INFP-A_ESTJ-A': {
    compatibility: 0.6023,
    relationshipType: ['Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFP-A e ESTJ-A pode ser desafiadora devido às diferenças significativas em suas abordagens e valores. O INFP-A é sensível e orientado para valores, enquanto o ESTJ-A é prático e orientado para a ação. Essas diferenças podem gerar mal-entendidos e conflitos no relacionamento. No entanto, com esforço e comunicação, eles podem aprender e crescer com essas diferenças.',
    relationshipSuccess: [
      'Comunicação aberta e respeitosa entre ambos',
      'Compartilhar diferentes perspectivas e aprender um com o outro',
      'Equilibrar a lógica do ESTJ-A com a sensibilidade do INFP-A',
      'Respeitar a necessidade de espaço e privacidade do outro',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem da tomada de decisões e resolução de problemas',
      'INFP-A pode se sentir incompreendido ou desvalorizado pelo ESTJ-A',
      'ESTJ-A pode achar difícil lidar com as emoções do INFP-A',
      'Ambos têm diferentes necessidades de apoio e comunicação',
    ],
    challengeResolutionStrategies: [
      'Estabelecer limites e respeitar as diferenças um do outro',
      'Incorporar momentos de discussão e resolução de problemas',
      'Desenvolver habilidades de empatia e compreensão mútua',
      'Buscar compromissos e encontrar soluções que funcionem para ambos',
    ],
  },
  'INFP-A_ESTP-A': {
    compatibility: 0.47,
    relationshipType: ['Amizade'],
    compatibilityText:
      'A compatibilidade entre INFP-A e ESTP-A é moderada, já que ambos têm diferenças notáveis, mas também têm potencial para se complementarem. O INFP-A é idealista e introspectivo, enquanto o ESTP-A é orientado para a ação e prático. Essas diferenças podem criar oportunidades para aprendizado mútuo, mas também podem levar a mal-entendidos e conflitos.',
    relationshipSuccess: [
      'Comunicação aberta e respeitosa entre ambos',
      'Aprender com as diferenças e crescer juntos',
      'INFP-A aprecia o lado prático e direto do ESTP-A',
      'ESTP-A admira a profundidade emocional e a criatividade do INFP-A',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem da tomada de decisões e resolução de problemas',
      'INFP-A pode se sentir desvalorizado ou desentendido pelo ESTP-A',
      'ESTP-A pode achar difícil lidar com as emoções do INFP-A',
      'Ambos têm diferentes necessidades de apoio e comunicação',
    ],
    challengeResolutionStrategies: [
      'Estabelecer limites e respeitar as diferenças um do outro',
      'Incorporar momentos de discussão e resolução de problemas',
      'Desenvolver habilidades de empatia e compreensão mútua',
      'Buscar compromissos e encontrar soluções que funcionem para ambos',
    ],
  },
  'INFP-A_ESFJ-A': {
    compatibility: 0.6724,
    relationshipType: ['Amizade'],
    compatibilityText:
      'A compatibilidade entre INFP-A e ESFJ-A é moderada, pois compartilham algumas semelhanças e também têm diferenças significativas. Ambos valorizam relacionamentos fortes e autênticos, mas o INFP-A é introvertido e introspectivo, enquanto o ESFJ-A é extrovertido e organizado. Essas diferenças podem levar a mal-entendidos, mas também podem proporcionar oportunidades para crescimento pessoal e aprendizado mútuo.',
    relationshipSuccess: [
      'Comunicação aberta e respeitosa entre ambos',
      'Ambos se preocupam com a harmonia e o bem-estar emocional nos relacionamentos',
      'Aprender com as diferenças e crescer juntos',
      'Apoiar um ao outro e compartilhar responsabilidades',
    ],
    relationshipChallenges: [
      'Diferenças na comunicação e necessidades emocionais',
      'INFP-A pode se sentir sobrecarregado pela extroversão do ESFJ-A',
      'ESFJ-A pode achar difícil compreender a necessidade do INFP-A de privacidade e introspecção',
      'Ambos têm diferentes abordagens para resolver problemas e tomar decisões',
    ],
    challengeResolutionStrategies: [
      'Estabelecer limites e respeitar as diferenças um do outro',
      'Incorporar momentos de discussão e resolução de problemas',
      'Desenvolver habilidades de empatia e compreensão mútua',
      'Buscar compromissos e encontrar soluções que funcionem para ambos',
    ],
  },
  'INFP-A_ESFP-A': {
    compatibility: 0.6982,
    relationshipType: ['Amizade', 'Romântico'],
    compatibilityText:
      'A compatibilidade entre INFP-A e ESFP-A é moderada, com uma mistura de semelhanças e diferenças que podem enriquecer o relacionamento. Ambos são empáticos, afetuosos e valorizam a harmonia nos relacionamentos. O INFP-A é introvertido e reflexivo, enquanto o ESFP-A é extrovertido e aventureiro. Essas diferenças podem proporcionar equilíbrio e complementaridade, mas também podem levar a mal-entendidos e conflitos.',
    relationshipSuccess: [
      'Ambos são empáticos e se preocupam com os sentimentos dos outros',
      'Apreciam a autenticidade e a conexão emocional',
      'Complementaridade nas habilidades e interesses',
      'Desfrutam de momentos de qualidade juntos',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem da comunicação e da tomada de decisões',
      'INFP-A pode achar a extroversão e a energia do ESFP-A esgotantes',
      'ESFP-A pode achar difícil entender a necessidade do INFP-A de introspecção e tempo sozinho',
      'Ambos podem ter dificuldade em lidar com conflitos e críticas',
    ],
    challengeResolutionStrategies: [
      'Estabelecer limites e respeitar as diferenças um do outro',
      'Incorporar momentos de discussão e resolução de problemas',
      'Desenvolver habilidades de empatia e compreensão mútua',
      'Encontrar um equilíbrio entre as necessidades de socialização e introspecção',
    ],
  },
  'INFP-A_ENTJ-A': {
    compatibility: 0.6123,
    relationshipType: ['Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFP-A e ENTJ-A é moderada, pois ambos apresentam diferenças significativas. O INFP-A é introvertido, sensível e orientado para valores, enquanto o ENTJ-A é extrovertido, assertivo e orientado para objetivos. Essas diferenças podem trazer equilíbrio e aprendizado mútuo, mas também podem levar a conflitos e mal-entendidos se não forem abordados adequadamente.',
    relationshipSuccess: [
      'Oportunidades de crescimento pessoal através da exposição a diferentes perspectivas',
      'Complementaridade de habilidades e pontos fortes',
      'Ambos podem ser criativos e visionários',
      'Capacidade de trabalhar juntos em projetos e iniciativas',
    ],
    relationshipChallenges: [
      'Diferenças na comunicação e na tomada de decisões',
      'INFP-A pode se sentir dominado pela assertividade do ENTJ-A',
      'ENTJ-A pode achar difícil compreender as necessidades emocionais e os valores do INFP-A',
      'Ambos podem ter dificuldade em encontrar um equilíbrio entre objetividade e emoção',
    ],
    challengeResolutionStrategies: [
      'Praticar a empatia e a compreensão mútua',
      'Estabelecer limites e respeitar as diferenças um do outro',
      'Incorporar momentos de discussão e resolução de problemas',
      'Encontrar um equilíbrio entre objetividade e sensibilidade emocional',
    ],
  },
  'INFP-A_ENTP-A': {
    compatibility: 0.7234,
    relationshipType: ['Romântico', 'Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFP-A e ENTP-A é boa, já que ambos são tipos intuitivos e percebedores. Eles tendem a se conectar bem em um nível intelectual e emocional. O INFP-A valoriza a criatividade e os valores, enquanto o ENTP-A é conhecido por ser inovador e adaptável. Essas características podem ser complementares e contribuir para um relacionamento equilibrado e enriquecedor.',
    relationshipSuccess: [
      'Comunicação aberta e honesta',
      'Ambos apreciam a criatividade e a inovação',
      'Capacidade de se adaptar às mudanças e crescer juntos',
      'Compartilham interesses e objetivos similares',
    ],
    relationshipChallenges: [
      'Diferenças na abordagem à tomada de decisões e solução de problemas',
      'INFP-A pode ser mais sensível às emoções e necessidades dos outros',
      'ENTP-A pode ser mais focado na lógica e na racionalidade',
      'Encontrar um equilíbrio entre a necessidade de espaço pessoal e o apoio emocional',
    ],
    challengeResolutionStrategies: [
      'Praticar a empatia e a compreensão mútua',
      'Estabelecer limites e respeitar a autonomia do outro',
      'Incorporar momentos para discussão e resolução de problemas',
      'Buscar desenvolver habilidades de comunicação emocional',
    ],
  },
  'INFP-A_ENFJ-A': {
    compatibility: 0.8712,
    relationshipType: ['Romântico', 'Amizade', 'Trabalho'],
    compatibilityText:
      'INFP-A e ENFJ-A têm uma grande compatibilidade, pois compartilham a mesma função auxiliar de sentimento introvertido. Ambos têm uma abordagem sensível e compassiva para com os outros, além de uma forte ética pessoal. INFP-A pode se sentir atraído pela energia empática e carismática de ENFJ-A, enquanto ENFJ-A pode apreciar a criatividade e a visão única de mundo de INFP-A. Juntos, eles podem formar uma equipe forte e colaborativa em todas as áreas da vida.',
    relationshipSuccess: [
      'Comunicação aberta e honesta',
      'Capacidade de apreciar as diferenças e compartilhar interesses comuns',
      'Ambos valorizam a empatia e a compaixão',
      'Incentivo mútuo para o crescimento pessoal e profissional',
    ],
    relationshipChallenges: [
      'Diferenças na tomada de decisões e na abordagem de resolução de problemas',
      'ENFJ-A pode ser mais focado na organização e na eficiência',
      'INFP-A pode ser mais suscetível a se envolver em introspecção e reflexão pessoal',
      'Dificuldades em encontrar um equilíbrio entre autonomia pessoal e apoio emocional',
    ],
    challengeResolutionStrategies: [
      'Praticar a comunicação clara e assertiva',
      'Estabelecer metas e objetivos compartilhados',
      'Respeitar as diferenças e trabalhar em conjunto para superá-las',
      'Encontrar maneiras de equilibrar a independência pessoal e o apoio emocional',
    ],
  },
  'INFP-A_ENFP-A': {
    compatibility: 0.92,
    relationshipType: ['Romântico', 'Amizade', 'Trabalho'],
    compatibilityText:
      'A compatibilidade entre INFP-A e ENFP-A é grande, já que ambos são tipos intuitivos, emocionais e valorizam a autenticidade e a criatividade. Eles tendem a se conectar bem em um nível intelectual e emocional, compartilhando interesses e objetivos similares. A teoria da complementaridade sugere que suas diferenças podem ser complementares e contribuir para um relacionamento equilibrado e enriquecedor. No entanto, é importante que ambos sejam capazes de lidar com os desafios potenciais e trabalhar em conjunto para encontrar um equilíbrio entre suas necessidades e desejos.',
    relationshipSuccess: [
      'Comunicação aberta e honesta',
      'Ambos valorizam as relações interpessoais',
      'Capacidade de equilibrar a necessidade um do outro por conexão e autonomia',
    ],
    relationshipChallenges: [
      'Dificuldade em tomar decisões importantes ou estabelecer rotinas e estruturas',
      'Sensibilidade às emoções e necessidades dos outros pode tornar difícil estabelecer limites ou dizer "não"',
    ],
    challengeResolutionStrategies: [
      'Praticar a tomada de decisões compartilhadas',
      'Trabalhar juntos para estabelecer rotinas e estruturas',
      'Trabalhar em conjunto para estabelecer limites saudáveis',
    ],
  },
  'INFP-A_ISTJ-A': {
    compatibility: 0.5,
  },
  'INFP-A_ISTP-A': {
    compatibility: 0.4,
  },
  'INFP-A_ISFJ-A': {
    compatibility: 0.8,
  },
  'INFP-A_ISFP-A': {
    compatibility: 0.9,
  },
  'INFP-A_INTJ-A': {
    compatibility: 0.6,
  },
  'INFP-A_INTP-A': {
    compatibility: 0.7,
  },
  'INFP-A_INFJ-A': {
    compatibility: 0.9,
  },
  'INFP-A_INFP-A': {
    compatibility: 0.7,
  },

  'ENFJ-A_ESTJ-A': {
    compatibility: 0.7,
  },
  'ENFJ-A_ESTP-A': {
    compatibility: 0.8,
  },
  'ENFJ-A_ESFJ-A': {
    compatibility: 0.9,
  },
  'ENFJ-A_ESFP-A': {
    compatibility: 0.9,
  },
  'ENFJ-A_ENTJ-A': {
    compatibility: 0.9,
  },
  'ENFJ-A_ENTP-A': {
    compatibility: 0.8,
  },
  'ENFJ-A_ENFJ-A': {
    compatibility: 0.7,
  },
  'ENFJ-A_ENFP-A': {
    compatibility: 0.9,
  },
  'ENFJ-A_ISTJ-A': {
    compatibility: 0.6,
  },
  'ENFJ-A_ISTP-A': {
    compatibility: 0.7,
  },
  'ENFJ-A_ISFJ-A': {
    compatibility: 0.9,
  },
  'ENFJ-A_ISFP-A': {
    compatibility: 0.8,
  },
  'ENFJ-A_INTJ-A': {
    compatibility: 0.8,
  },
  'ENFJ-A_INTP-A': {
    compatibility: 0.7,
  },
  'ENFJ-A_INFJ-A': {
    compatibility: 0.9,
  },
  'ENFJ-A_INFP-A': {
    compatibility: 0.9,
  },

  'ENFP-A_ESTJ-A': {
    compatibility: 0.5,
  },
  'ENFP-A_ESTP-A': {
    compatibility: 0.8,
  },
  'ENFP-A_ESFJ-A': {
    compatibility: 0.9,
  },
  'ENFP-A_ESFP-A': {
    compatibility: 0.9,
  },
  'ENFP-A_ENTJ-A': {
    compatibility: 0.7,
  },
  'ENFP-A_ENTP-A': {
    compatibility: 0.9,
  },
  'ENFP-A_ENFJ-A': {
    compatibility: 0.9,
  },
  'ENFP-A_ENFP-A': {
    compatibility: 0.7,
  },
  'ENFP-A_ISTJ-A': {
    compatibility: 0.5,
  },
  'ENFP-A_ISTP-A': {
    compatibility: 0.7,
  },
  'ENFP-A_ISFJ-A': {
    compatibility: 0.8,
  },
  'ENFP-A_ISFP-A': {
    compatibility: 0.9,
  },
  'ENFP-A_INTJ-A': {
    compatibility: 0.7,
  },
  'ENFP-A_INTP-A': {
    compatibility: 0.9,
  },
  'ENFP-A_INFJ-A': {
    compatibility: 0.9,
  },
  'ENFP-A_INFP-A': {
    compatibility: 0.9,
  },

  'ISTJ-A_ESTJ-A': {
    compatibility: 0.9,
  },
  'ISTJ-A_ESTP-A': {
    compatibility: 0.6,
  },
  'ISTJ-A_ESFJ-A': {
    compatibility: 0.8,
  },
  'ISTJ-A_ESFP-A': {
    compatibility: 0.5,
  },
  'ISTJ-A_ENTJ-A': {
    compatibility: 0.7,
  },
  'ISTJ-A_ENTP-A': {
    compatibility: 0.5,
  },
  'ISTJ-A_ENFJ-A': {
    compatibility: 0.6,
  },
  'ISTJ-A_ENFP-A': {
    compatibility: 0.5,
  },
  'ISTJ-A_ISTJ-A': {
    compatibility: 0.8,
  },
  'ISTJ-A_ISTP-A': {
    compatibility: 0.7,
  },
  'ISTJ-A_ISFJ-A': {
    compatibility: 0.9,
  },
  'ISTJ-A_ISFP-A': {
    compatibility: 0.6,
  },
  'ISTJ-A_INTJ-A': {
    compatibility: 0.7,
  },
  'ISTJ-A_INTP-A': {
    compatibility: 0.5,
  },
  'ISTJ-A_INFJ-A': {
    compatibility: 0.6,
  },
  'ISTJ-A_INFP-A': {
    compatibility: 0.5,
  },

  'ISFJ-A_ESTJ-A': {
    compatibility: 0.8,
  },
  'ISFJ-A_ESTP-A': {
    compatibility: 0.6,
  },
  'ISFJ-A_ESFJ-A': {
    compatibility: 0.9,
  },
  'ISFJ-A_ESFP-A': {
    compatibility: 0.8,
  },
  'ISFJ-A_ENTJ-A': {
    compatibility: 0.6,
  },
  'ISFJ-A_ENTP-A': {
    compatibility: 0.5,
  },
  'ISFJ-A_ENFJ-A': {
    compatibility: 0.8,
  },
  'ISFJ-A_ENFP-A': {
    compatibility: 0.8,
  },
  'ISFJ-A_ISTJ-A': {
    compatibility: 0.9,
  },
  'ISFJ-A_ISTP-A': {
    compatibility: 0.7,
  },
  'ISFJ-A_ISFJ-A': {
    compatibility: 0.8,
  },
  'ISFJ-A_ISFP-A': {
    compatibility: 0.8,
  },
  'ISFJ-A_INTJ-A': {
    compatibility: 0.5,
  },
  'ISFJ-A_INTP-A': {
    compatibility: 0.5,
  },
  'ISFJ-A_INFJ-A': {
    compatibility: 0.7,
  },
  'ISFJ-A_INFP-A': {
    compatibility: 0.8,
  },

  'ESTJ-A_ESTJ-A': {
    compatibility: 0.9,
  },
  'ESTJ-A_ESTP-A': {
    compatibility: 0.7,
  },
  'ESTJ-A_ESFJ-A': {
    compatibility: 0.8,
  },
  'ESTJ-A_ESFP-A': {
    compatibility: 0.6,
  },
  'ESTJ-A_ENTJ-A': {
    compatibility: 0.9,
  },
  'ESTJ-A_ENTP-A': {
    compatibility: 0.7,
  },
  'ESTJ-A_ENFJ-A': {
    compatibility: 0.7,
  },
  'ESTJ-A_ENFP-A': {
    compatibility: 0.5,
  },
  'ESTJ-A_ISTJ-A': {
    compatibility: 0.8,
  },
  'ESTJ-A_ISTP-A': {
    compatibility: 0.6,
  },
  'ESTJ-A_ISFJ-A': {
    compatibility: 0.8,
  },
  'ESTJ-A_ISFP-A': {
    compatibility: 0.5,
  },
  'ESTJ-A_INTJ-A': {
    compatibility: 0.6,
  },
  'ESTJ-A_INTP-A': {
    compatibility: 0.4,
  },
  'ESTJ-A_INFJ-A': {
    compatibility: 0.5,
  },
  'ESTJ-A_INFP-A': {
    compatibility: 0.3,
  },

  'ESFJ-A_ESTJ-A': {
    compatibility: 0.8,
  },
  'ESFJ-A_ESTP-A': {
    compatibility: 0.7,
  },
  'ESFJ-A_ESFJ-A': {
    compatibility: 0.9,
  },
  'ESFJ-A_ESFP-A': {
    compatibility: 0.8,
  },
  'ESFJ-A_ENTJ-A': {
    compatibility: 0.7,
  },
  'ESFJ-A_ENTP-A': {
    compatibility: 0.6,
  },
  'ESFJ-A_ENFJ-A': {
    compatibility: 0.8,
  },
  'ESFJ-A_ENFP-A': {
    compatibility: 0.7,
  },
  'ESFJ-A_ISTJ-A': {
    compatibility: 0.8,
  },
  'ESFJ-A_ISTP-A': {
    compatibility: 0.5,
  },
  'ESFJ-A_ISFJ-A': {
    compatibility: 0.9,
  },
  'ESFJ-A_ISFP-A': {
    compatibility: 0.7,
  },
  'ESFJ-A_INTJ-A': {
    compatibility: 0.5,
  },
  'ESFJ-A_INTP-A': {
    compatibility: 0.4,
  },
  'ESFJ-A_INFJ-A': {
    compatibility: 0.7,
  },
  'ESFJ-A_INFP-A': {
    compatibility: 0.6,
  },

  'ISTP-A_ESTJ-A': {
    compatibility: 0.6,
  },
  'ISTP-A_ESTP-A': {
    compatibility: 0.8,
  },
  'ISTP-A_ESFJ-A': {
    compatibility: 0.5,
  },
  'ISTP-A_ESFP-A': {
    compatibility: 0.7,
  },
  'ISTP-A_ENTJ-A': {
    compatibility: 0.6,
  },
  'ISTP-A_ENTP-A': {
    compatibility: 0.7,
  },
  'ISTP-A_ENFJ-A': {
    compatibility: 0.6,
  },
  'ISTP-A_ENFP-A': {
    compatibility: 0.6,
  },
  'ISTP-A_ISTJ-A': {
    compatibility: 0.8,
  },
  'ISTP-A_ISTP-A': {
    compatibility: 0.9,
  },
  'ISTP-A_ISFJ-A': {
    compatibility: 0.6,
  },
  'ISTP-A_ISFP-A': {
    compatibility: 0.8,
  },
  'ISTP-A_INTJ-A': {
    compatibility: 0.6,
  },
  'ISTP-A_INTP-A': {
    compatibility: 0.7,
  },
  'ISTP-A_INFJ-A': {
    compatibility: 0.5,
  },
  'ISTP-A_INFP-A': {
    compatibility: 0.5,
  },

  'ISFP-A_ESTJ-A': {
    compatibility: 0.5,
  },
  'ISFP-A_ESTP-A': {
    compatibility: 0.7,
  },
  'ISFP-A_ESFJ-A': {
    compatibility: 0.6,
  },
  'ISFP-A_ESFP-A': {
    compatibility: 0.8,
  },
  'ISFP-A_ENTJ-A': {
    compatibility: 0.5,
  },
  'ISFP-A_ENTP-A': {
    compatibility: 0.6,
  },
  'ISFP-A_ENFJ-A': {
    compatibility: 0.7,
  },
  'ISFP-A_ENFP-A': {
    compatibility: 0.7,
  },
  'ISFP-A_ISTJ-A': {
    compatibility: 0.6,
  },
  'ISFP-A_ISTP-A': {
    compatibility: 0.8,
  },
  'ISFP-A_ISFJ-A': {
    compatibility: 0.7,
  },
  'ISFP-A_ISFP-A': {
    compatibility: 0.9,
  },
  'ISFP-A_INTJ-A': {
    compatibility: 0.4,
  },
  'ISFP-A_INTP-A': {
    compatibility: 0.5,
  },
  'ISFP-A_INFJ-A': {
    compatibility: 0.6,
  },
  'ISFP-A_INFP-A': {
    compatibility: 0.6,
  },

  'ESTP-A_ESTJ-A': {
    compatibility: 0.7,
  },
  'ESTP-A_ESTP-A': {
    compatibility: 0.9,
  },
  'ESTP-A_ESFJ-A': {
    compatibility: 0.7,
  },
  'ESTP-A_ESFP-A': {
    compatibility: 0.8,
  },
  'ESTP-A_ENTJ-A': {
    compatibility: 0.7,
  },
  'ESTP-A_ENTP-A': {
    compatibility: 0.8,
  },
  'ESTP-A_ENFJ-A': {
    compatibility: 0.6,
  },
  'ESTP-A_ENFP-A': {
    compatibility: 0.6,
  },
  'ESTP-A_ISTJ-A': {
    compatibility: 0.5,
  },
  'ESTP-A_ISTP-A': {
    compatibility: 0.7,
  },
  'ESTP-A_ISFJ-A': {
    compatibility: 0.6,
  },
  'ESTP-A_ISFP-A': {
    compatibility: 0.7,
  },
  'ESTP-A_INTJ-A': {
    compatibility: 0.5,
  },
  'ESTP-A_INTP-A': {
    compatibility: 0.6,
  },
  'ESTP-A_INFJ-A': {
    compatibility: 0.4,
  },
  'ESTP-A_INFP-A': {
    compatibility: 0.4,
  },

  'ESFP-A_ESTJ-A': {
    compatibility: 0.6,
  },
  'ESFP-A_ESTP-A': {
    compatibility: 0.8,
  },
  'ESFP-A_ESFJ-A': {
    compatibility: 0.8,
  },
  'ESFP-A_ESFP-A': {
    compatibility: 0.9,
  },
  'ESFP-A_ENTJ-A': {
    compatibility: 0.6,
  },
  'ESFP-A_ENTP-A': {
    compatibility: 0.7,
  },
  'ESFP-A_ENFJ-A': {
    compatibility: 0.7,
  },
  'ESFP-A_ENFP-A': {
    compatibility: 0.7,
  },
  'ESFP-A_ISTJ-A': {
    compatibility: 0.4,
  },
  'ESFP-A_ISTP-A': {
    compatibility: 0.6,
  },
  'ESFP-A_ISFJ-A': {
    compatibility: 0.7,
  },
  'ESFP-A_ISFP-A': {
    compatibility: 0.8,
  },
  'ESFP-A_INTJ-A': {
    compatibility: 0.3,
  },
  'ESFP-A_INTP-A': {
    compatibility: 0.4,
  },
  'ESFP-A_INFJ-A': {
    compatibility: 0.4,
  },
  'ESFP-A_INFP-A': {
    compatibility: 0.4,
  },
}
