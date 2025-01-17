import type { Casino } from '@/types/casino';

declare module '@/data/casinos.json' {
  const value: Casino[];
  export default value;
} 