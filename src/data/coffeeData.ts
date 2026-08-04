import { CoffeeItem, SubscriptionPlan, BeanDetail } from '../types';

export const SIGNATURE_COFFEES: CoffeeItem[] = [
  {
    id: 'velvet-flat-white',
    name: 'Velvet Flat White',
    tagline: 'A Harmonia Perfeita de Microespuma & Espresso Duplo',
    description: 'Extraído de grãos Single Origin da Mantiqueira de Minas (1.350m). Microespuma sedosa a 62°C para preservar os açúcares naturais do leite A2 caipira.',
    price: 28.00,
    origin: 'Mantiqueira de Minas, BR',
    altitude: '1.350m',
    process: 'Natural Anaeróbico 72h',
    notes: ['Avelã Tostada', 'Caramelo Salgado', 'Chocolate Amargo 70%'],
    roastLevel: 'Média-Clara',
    bodyScore: 5,
    acidityScore: 2,
    sweetnessScore: 4,
    category: 'signature',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=1600',
    badge: 'Mais Desejado',
    recommendedPairing: 'Croissant de Pistache com Flor de Sal'
  },
  {
    id: 'cold-brew-oak-aged',
    name: 'Cold Brew Oak-Aged',
    tagline: 'Infusão a Frio de 24h Maturada em Barril de Carvalho Francês',
    description: 'Extração gota a gota durante 24 horas a 4°C. Finalizado em barris de carvalho pré-envelhecidos com bourbon, liberando complexidade aromática inigualável.',
    price: 36.00,
    origin: 'Huila, Colômbia',
    altitude: '1.850m',
    process: 'Lavado Fermentado',
    notes: ['Baunilha Bourbon', 'Cacau Nibs', 'Toque Amadeirado', 'Damasco'],
    roastLevel: 'Média',
    bodyScore: 4,
    acidityScore: 3,
    sweetnessScore: 5,
    category: 'cold',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=1600',
    badge: 'Edição Limitada',
    recommendedPairing: 'Torta de Noz Pecã com Bourbon'
  },
  {
    id: 'soul-signature-pourover',
    name: 'Soul Signature Pour-Over',
    tagline: 'Lote Raro Geisha Panama extraído em V60 de Cristal',
    description: 'O ápice da elegância sensorial. Geisha de alta altitude com moagem sob medida no Comandante C40. Notas florais cristalinas e acidez brilhante de frutas cítricas nobres.',
    price: 48.00,
    origin: 'Boquete, Panamá (Barú Volcán)',
    altitude: '1.950m',
    process: 'Honey Process Processado a Frio',
    notes: ['Jasmim Silvestre', 'Bergamota Siciliana', 'Mel de Flor de Laranjeira'],
    roastLevel: 'Ligeira',
    bodyScore: 3,
    acidityScore: 5,
    sweetnessScore: 5,
    category: 'pourover',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1600',
    badge: 'Gourmet World Cup',
    recommendedPairing: 'Macaron de Lavanda & Limão Siciliano'
  },
  {
    id: 'espresso-double-extraction',
    name: 'Espresso Solos Raros',
    tagline: 'Extração Dupla com Ratios de Precisão 1:2.1',
    description: 'Extraído em nossa La Marzocco KB90 calibrada em 9.2 bar de pressão. Creme denso cor de avelã com listras tigradas e retrogosto prolongado de especiarias.',
    price: 22.00,
    origin: 'Cerrado Mineiro (Micro-Lote 07)',
    altitude: '1.200m',
    process: 'Natural Fermentado',
    notes: ['Amêndoas Tostadas', 'Cacau 85%', 'Nostalgia de Rapadura'],
    roastLevel: 'Média',
    bodyScore: 5,
    acidityScore: 3,
    sweetnessScore: 4,
    category: 'signature',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1600',
    badge: 'Clássico Impecável',
    recommendedPairing: 'Pequena Trufa de Chocolate Belga'
  },
  {
    id: 'nitro-cascara-tonic',
    name: 'Nitro Cáscara Tonic',
    tagline: 'Efervescência Sensorial da Casca Seca do Café Especiais',
    description: 'Infusão cremosa pressurizada com nitrogênio líquido e água tônica artesanal de quinino selvagem. Uma bebida refrescante, complexa e vibrante.',
    price: 32.00,
    origin: 'Carmo de Minas, BR',
    altitude: '1.400m',
    process: 'Secagem Natural ao Sol em Camas Suspensa',
    notes: ['Tamarindo', 'Chá Hibisco', 'Gengibre Fresco', 'Flor de Laranjeira'],
    roastLevel: 'Ligeira',
    bodyScore: 2,
    acidityScore: 5,
    sweetnessScore: 3,
    category: 'cold',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1600',
    badge: 'Verão Editorial',
    recommendedPairing: 'Toast de Figo Fresco com Queijo de Cabra'
  },
  {
    id: 'artisan-syphon-experience',
    name: 'Gaston Syphon Experience',
    tagline: 'A Alquimia do Café Extraído por Sifão Japonês Hario',
    description: 'Um espetáculo visual e de sabor. A extração por vácuo e vapor resulta numa xícara extremamente limpa, encorpada e de aroma envolvente sem igual.',
    price: 42.00,
    origin: 'Sidama, Etiópia',
    altitude: '2.100m',
    process: 'Washed Tradicional',
    notes: ['Pêssego Amarelo', 'Chá Preto Earl Grey', 'Cardamomo'],
    roastLevel: 'Ligeira',
    bodyScore: 4,
    acidityScore: 4,
    sweetnessScore: 4,
    category: 'artisan',
    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&q=80&w=1600',
    badge: 'Experiência Ritual',
    recommendedPairing: 'Sable Sarrasin com Flor de Sal'
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-entusiasta',
    name: 'O Entusiasta',
    tagline: 'Para quem está descobrindo a complexidade dos cafés especiais.',
    monthlyPrice: 119.00,
    gramsPerMonth: '500g (2x 250g)',
    bagsCount: 2,
    perks: [
      '2 pacotes de Micro-Lotes selecionados do mês',
      'Ficha técnica com notas de degustação em papel algodão',
      '10% de desconto em todas as visitas à Boutique Brew & Soul',
      'Acesso ao newsletter "Notas de Degustação" VIP'
    ],
    recommendedFor: 'Iniciantes em Specialty Coffee & Rotina Diária'
  },
  {
    id: 'plan-connoisseur',
    name: 'O Connoisseur',
    tagline: 'Nossa seleção mestra dos grãos mais premiados e raros do Brasil e do mundo.',
    monthlyPrice: 199.00,
    gramsPerMonth: '750g (3x 250g)',
    bagsCount: 3,
    perks: [
      '3 pacotes de Micro-Lotes pontuação 88+ SCAA',
      'Inclui 1 lote exclusivo de Origem Internacional (Etiópia, Panamá ou Colômbia)',
      'Convite cortesia para Cupping Mensal com o Mestre Torrefador',
      '15% de desconto em equipamentos e boutique física',
      'Frete Grátis para todo o Brasil em embalagem selada a vácuo'
    ],
    recommendedFor: 'Entusiastas Exigentes & Apreciadores de Métodos',
    isPopular: true
  },
  {
    id: 'plan-sommelier',
    name: 'Grand Sommelier',
    tagline: 'Curadoria ultra-exclusiva com grãos de nanolotes numerados.',
    monthlyPrice: 349.00,
    gramsPerMonth: '1000g (4x 250g)',
    bagsCount: 4,
    perks: [
      '4 pacotes de Nanolotes Inéditos e edições numeradas à mão',
      '1 garrafa de Cold Brew Oak-Aged envelhecida em barril como mimo mensal',
      'Reserva prioritária para a Barista Mestre Table sem fila',
      'Atendimento personalizado com Sommelier de Café dedicado',
      'Frete Expresso Grátis & Kit de Amostras de Torras Experimentais'
    ],
    recommendedFor: 'Colecionadores, Executivos & Experiência de Luxo Absoluta'
  }
];

export const PROCESS_STEPS: BeanDetail[] = [
  {
    id: 'torra-controlada',
    title: '01. Torra Controlada de Precisão',
    subtitle: 'A Arte da Curva de Temperatura Milimétrica',
    origin: 'Torrefação Própria Brew & Soul',
    altitude: 'Desenvolvido por Mestres Torrefadores',
    farmer: 'Curadoria do Mestre Torrefador Gabriel Mello',
    varietal: 'Catuaí Vermelho 144 / Bourbon Amarelo',
    process: 'Torra Ligeira a Média em Torrador de Leito Fluidizado Loring',
    tastingNotes: ['Reação de Maillard Controlada', 'Preservação de Óleos Essenciais', 'Acidez Cítrica Limpa'],
    story: 'Cada lote de café possui uma assinatura biológica única. Nossas torras são ajustadas através de sensores infravermelhos em tempo real para revelar a doçura natural do grão sem jamais queimar suas características aromáticas.',
    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'selecao-manual',
    title: '02. Seleção Manual em Altitude',
    subtitle: 'Colheita Seletiva Cativa de Cerejas Maduras',
    origin: 'Sítio Sol Nascente, Mantiqueira de Minas',
    altitude: '1.450m de altitude',
    farmer: 'Família Pereira (3ª Geração de Produtores)',
    varietal: 'Geisha & Catuaí Amarelo',
    process: 'Catação Manual Cativa (Apenas Cerejas em Brix > 24°)',
    tastingNotes: ['Açúcares Naturais Elevados', 'Corpo Aveludado', 'Pureza de Terroir'],
    story: 'Rejeitamos atalhos industriais. Nossos parceiros colhem exclusivamente os frutos no ápice de sua maturação em montanhas íngremes de Minas Gerais e Espírito Santo, onde o microclima frio prolonga o amadurecimento.',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'extracao-perfeita',
    title: '03. Extração Perfeita & Ritual Barista',
    subtitle: 'Geometria do Fluxo e Temperatura da Água',
    origin: 'Laboratório Brew & Soul',
    altitude: 'Ratios Personalizados por Grão',
    farmer: 'Baristas Campeões Nacionais',
    varietal: 'Métodos V60, Chemex, Aeropress, Sifão e Espresso',
    process: 'Água Remineralizada a 93.5°C com 120ppm de Minerais Nobres',
    tastingNotes: ['Equilíbrio Harmônico', 'Sem Amargor Residual', 'Textura Aveludada'],
    story: 'Até mesmo a água é desenhada do zero: ajustamos os níveis de cálcio e magnésio para criar a ponte perfeita com os compostos solúveis do café. O resultado na xícara é poesia em estado líquido.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1600'
  }
];

export const BOUTIQUE_LOCATIONS = [
  {
    id: 'jardins-sp',
    city: 'São Paulo',
    neighborhood: 'Jardins (Rua Oscar Freire)',
    address: 'Rua Oscar Freire, 1420 - Jardins, São Paulo - SP',
    phone: '+55 11 3088-9210',
    hours: 'Seg a Dom: 08h às 20h',
    features: ['Espaço Barista Mestre', 'Jardim de Inverno', 'Torrefação Viva no Local', 'Valet VIP'],
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'leblon-rj',
    city: 'Rio de Janeiro',
    neighborhood: 'Leblon (Av. Ataulfo de Paiva)',
    address: 'Av. Ataulfo de Paiva, 880 - Leblon, Rio de Janeiro - RJ',
    phone: '+55 21 2512-4090',
    hours: 'Seg a Dom: 07h30 às 21h',
    features: ['Lounge de Cold Brew', 'Vista para o Mar', 'Degustação Harmonizada', 'Pet Friendly Gourmet'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'batel-curitiba',
    city: 'Curitiba',
    neighborhood: 'Batel (Al. Dom Pedro II)',
    address: 'Al. Dom Pedro II, 450 - Batel, Curitiba - PR',
    phone: '+55 41 3342-1080',
    hours: 'Ter a Dom: 09h às 19h30',
    features: ['Lareira Central', 'Estufa de Pâtisserie Própria', 'Salão Privativo de Reuniões'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600'
  }
];
