export interface Casino {
  id: string;
  name: string;
  rating: number;
  welcome_bonus: string;
  description?: string;
  short_description?: string;
  pros: string[];
  cons: string[];
  logo: string;
} 