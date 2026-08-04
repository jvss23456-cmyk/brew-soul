export interface CoffeeItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  origin: string;
  altitude: string;
  process: string;
  notes: string[];
  roastLevel: 'Ligeira' | 'Média-Clara' | 'Média' | 'Média-Escura';
  bodyScore: number; // 1-5
  acidityScore: number; // 1-5
  sweetnessScore: number; // 1-5
  category: 'signature' | 'pourover' | 'cold' | 'artisan';
  image: string;
  badge?: string;
  recommendedPairing?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  gramsPerMonth: string;
  bagsCount: number;
  perks: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface BeanDetail {
  id: string;
  title: string;
  subtitle: string;
  origin: string;
  altitude: string;
  farmer: string;
  varietal: string;
  process: string;
  tastingNotes: string[];
  story: string;
  image: string;
}

export interface ReservationData {
  date: string;
  time: string;
  guests: number;
  experienceType: 'cupping' | 'barista_table' | 'espresso_master' | 'lounge';
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  grind?: string;
  type: 'drink' | 'beans' | 'experience';
  image: string;
}
