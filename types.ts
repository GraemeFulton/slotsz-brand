
export interface Game {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  tags: ('new' | 'exclusive')[];
  playingCount: number;
}

export interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Publisher {
  id: number;
  name: string;
  logoUrl: string;
  gameCount: number;
}