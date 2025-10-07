import type { Game, NavItem, Publisher } from './types';
import { HomeIcon, SearchIcon,Cherries, TopGamesIcon, TableGamesIcon, DarkModeIcon } from './components/icons';

export const navItems: NavItem[] = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Search', icon: SearchIcon },
  { name: 'Slots', icon: Cherries },
  { name: 'Top Games', icon: TopGamesIcon },
  { name: 'Table Games', icon: TableGamesIcon },
];

export const themeItem: NavItem = { name: 'Dark theme', icon: DarkModeIcon };

export const newGames: Game[] = [
  { id: 1, title: 'Rockin\' Joker', subtitle: 'Rockin Joker Hold & Win', imageUrl: 'https://i.postimg.cc/8cDJtrjD/03f5459a-c3ee-4fba-9503-4d5a253d688e.png', tags: [], playingCount: 1234 },
  { id: 2, title: 'Deadly Outlaws', subtitle: 'Deadly Outlaws', imageUrl: 'https://i.postimg.cc/7Z1vy8W9/2243b431-2f2a-4f3b-887a-54d8b126d0f6.png', tags: [], playingCount: 876 },
  { id: 3, title: 'Hot Potato', subtitle: 'Slotsz Vegas Rodeo', imageUrl: 'https://i.postimg.cc/NG7MjgtR/3e9b03af-b43e-47a3-a3a0-33bdded96960.png', tags: ['exclusive'], playingCount: 2345 },
  { id: 4, title: 'Shamrock Trio', subtitle: 'Shamrock Trio', imageUrl: 'https://i.postimg.cc/gjDWH9bN/28488464-b366-4df2-8a20-951edc4d0dea.png', tags: [], playingCount: 543 },
  { id: 5, title: 'Brilliant Gems', subtitle: 'Brilliant Gems', imageUrl: 'https://i.postimg.cc/Hkh1W4tv/2fb29192-213b-4ce6-91d2-fa5a525b23a0.png', tags: [], playingCount: 987 },
  { id: 6, title: 'Mystic Lanterns', subtitle: 'Mystic Lanterns', imageUrl: 'https://i.postimg.cc/bNPmbDJy/df5080e7-e0ca-425e-a881-173ecadf36eb-1.png', tags: [], playingCount: 1765 },
  { id: 19, title: 'Thor Power Coins', subtitle: 'Thor Power Coins', imageUrl: 'https://i.postimg.cc/VvCd4kkm/49e7feff-1c3e-4bc7-a236-9cb98dd9641b.png', tags: [], playingCount: 654 },
  { id: 20, title: 'Wolf Gold 4 Pack', subtitle: 'Wolf gold 4 pack', imageUrl: 'https://i.postimg.cc/zXy7hsZj/21fd4ae3-803d-4330-8b40-1bc45b0e19d3.png', tags: [], playingCount: 2109 },
  { id: 21, title: 'Rockin\' Joker', subtitle: 'Rockin Joker Hold & Win', imageUrl: 'https://i.postimg.cc/8cDJtrjD/03f5459a-c3ee-4fba-9503-4d5a253d688e.png', tags: [], playingCount: 1234 },
  { id: 22, title: 'Deadly Outlaws', subtitle: 'Deadly Outlaws', imageUrl: 'https://i.postimg.cc/7Z1vy8W9/2243b431-2f2a-4f3b-887a-54d8b126d0f6.png', tags: [], playingCount: 876 },
  { id: 23, title: 'Hot Potato', subtitle: 'Slotsz Vegas Rodeo', imageUrl: 'https://i.postimg.cc/NG7MjgtR/3e9b03af-b43e-47a3-a3a0-33bdded96960.png', tags: ['exclusive'], playingCount: 2345 },
  { id: 24, title: 'Shamrock Trio', subtitle: 'Shamrock Trio', imageUrl: 'https://i.postimg.cc/gjDWH9bN/28488464-b366-4df2-8a20-951edc4d0dea.png', tags: [], playingCount: 543 },
  { id: 25, title: 'Brilliant Gems', subtitle: 'Brilliant Gems', imageUrl: 'https://i.postimg.cc/Hkh1W4tv/2fb29192-213b-4ce6-91d2-fa5a525b23a0.png', tags: [], playingCount: 987 },
  { id: 26, title: 'Mystic Lanterns', subtitle: 'Mystic Lanterns', imageUrl: 'https://i.postimg.cc/bNPmbDJy/df5080e7-e0ca-425e-a881-173ecadf36eb-1.png', tags: [], playingCount: 1765 },
  { id: 29, title: 'Thor Power Coins', subtitle: 'Thor Power Coins', imageUrl: 'https://i.postimg.cc/VvCd4kkm/49e7feff-1c3e-4bc7-a236-9cb98dd9641b.png', tags: [], playingCount: 654 },
  { id: 30, title: 'Wolf Gold 4 Pack', subtitle: 'Wolf gold 4 pack', imageUrl: 'https://i.postimg.cc/zXy7hsZj/21fd4ae3-803d-4330-8b40-1bc45b0e19d3.png', tags: [], playingCount: 2109 },
];

export const exclusiveGames: Game[] = [
  { id: 7, title: 'Buffalo Wild Charge', subtitle: 'Buffalo Wild Charge', imageUrl: 'https://i.postimg.cc/RZJNczRv/f3c1a1f0-0311-4fa4-8024-bd307ccf96cf.png', tags: ['new'], playingCount: 3456 },
  { id: 8, title: 'Lucky Penny 2', subtitle: 'Lucky Penny 2', imageUrl: 'https://i.postimg.cc/dtQ8gWs3/ee222b4e-53b9-4e95-b27d-a38220060057.png', tags: ['exclusive', 'new'], playingCount: 456 },
  { id: 9, title: 'Deep Treasure Goldmine', subtitle: 'Deep treasure Goldmine', imageUrl: 'https://i.postimg.cc/L4GpbWBB/9251c38a-a003-43a2-a9f0-41425287470a.png', tags: ['exclusive', 'new'], playingCount: 1987 },
  { id: 11, title: '777 Volt', subtitle: '777 Volt Gigablox', imageUrl: 'https://i.postimg.cc/pdHgKhbg/11364d9d-d0af-48b1-99a2-caf668eca682.png', tags: ['exclusive', 'new'], playingCount: 789 },
  { id: 10, title: '3 Pigs Bacon Bankroll', subtitle: 'Wolf Gold 4 Pack', imageUrl: 'https://i.postimg.cc/Bbb97XgM/31d506af-884c-4ff2-a91f-b22dfa8a5d9a.png', tags: ['new'], playingCount: 2543 },
  { id: 22, title: 'Gold Rush Gus', subtitle: 'Gold Rush Gus', imageUrl: 'https://i.postimg.cc/WbXLLmKS/97cfbcb0-a6aa-4745-9029-03f8f98f1dbc.png', tags: ['exclusive'], playingCount: 2876 },
  { id: 12, title: 'Lucky Penny 2', subtitle: 'Lucky Penny 2 x1000', imageUrl: 'https://i.postimg.cc/7Ynm9Tk9/749c6a48-9fa3-4197-b801-863cd76b2301.png', tags: ['exclusive', 'new'], playingCount: 1321 },
  { id: 21, title: 'Slotsz Party', subtitle: 'Slotsz Party Megaways', imageUrl: 'https://i.postimg.cc/DfR4Qs5j/54ad1b9e-9a5b-4732-a6cb-bc7da98a977b.png', tags: ['exclusive', 'new'], playingCount: 4321 },
  { id: 107, title: 'Buffalo Wild Charge', subtitle: 'Buffalo Wild Charge', imageUrl: 'https://i.postimg.cc/RZJNczRv/f3c1a1f0-0311-4fa4-8024-bd307ccf96cf.png', tags: ['new'], playingCount: 3456 },
  { id: 108, title: 'Lucky Penny 2', subtitle: 'Lucky Penny 2', imageUrl: 'https://i.postimg.cc/dtQ8gWs3/ee222b4e-53b9-4e95-b27d-a38220060057.png', tags: ['exclusive', 'new'], playingCount: 456 },
  { id: 109, title: 'Deep Treasure Goldmine', subtitle: 'Deep treasure Goldmine', imageUrl: 'https://i.postimg.cc/L4GpbWBB/9251c38a-a003-43a2-a9f0-41425287470a.png', tags: ['exclusive', 'new'], playingCount: 1987 },
  { id: 111, title: '777 Volt', subtitle: '777 Volt Gigablox', imageUrl: 'https://i.postimg.cc/pdHgKhbg/11364d9d-d0af-48b1-99a2-caf668eca682.png', tags: ['exclusive', 'new'], playingCount: 789 },
  { id: 110, title: '3 Pigs Bacon Bankroll', subtitle: 'Wolf Gold 4 Pack', imageUrl: 'https://i.postimg.cc/Bbb97XgM/31d506af-884c-4ff2-a91f-b22dfa8a5d9a.png', tags: ['new'], playingCount: 2543 },
  { id: 122, title: 'Gold Rush Gus', subtitle: 'Gold Rush Gus', imageUrl: 'https://i.postimg.cc/WbXLLmKS/97cfbcb0-a6aa-4745-9029-03f8f98f1dbc.png', tags: ['exclusive'], playingCount: 2876 },
  { id: 112, title: 'Lucky Penny 2', subtitle: 'Lucky Penny 2 x1000', imageUrl: 'https://i.postimg.cc/7Ynm9Tk9/749c6a48-9fa3-4197-b801-863cd76b2301.png', tags: ['exclusive', 'new'], playingCount: 1321 },
  { id: 121, title: 'Slotsz Party', subtitle: 'Slotsz Party Megaways', imageUrl: 'https://i.postimg.cc/DfR4Qs5j/54ad1b9e-9a5b-4732-a6cb-bc7da98a977b.png', tags: ['exclusive', 'new'], playingCount: 4321 },
];

export const topGames: Game[] = [
  { id: 101, title: 'Rockin\' Joker', subtitle: 'Rockin Joker Hold & Win', imageUrl: 'https://i.postimg.cc/8cDJtrjD/03f5459a-c3ee-4fba-9503-4d5a253d688e.png', tags: ['new'], playingCount: 5234 },
  { id: 102, title: 'Deadly Outlaws', subtitle: 'Deadly Outlaws', imageUrl: 'https://i.postimg.cc/7Z1vy8W9/2243b431-2f2a-4f3b-887a-54d8b126d0f6.png', tags: [], playingCount: 4876 },
  { id: 103, title: 'Hot Potato', subtitle: 'Slotsz Vegas Rodeo', imageUrl: 'https://i.postimg.cc/NG7MjgtR/3e9b03af-b43e-47a3-a3a0-33bdded96960.png', tags: ['exclusive'], playingCount: 6345 },
  { id: 104, title: 'Shamrock Trio', subtitle: 'Shamrock Trio', imageUrl: 'https://i.postimg.cc/gjDWH9bN/28488464-b366-4df2-8a20-951edc4d0dea.png', tags: ['new'], playingCount: 3543 },
  { id: 105, title: 'Brilliant Gems', subtitle: 'Brilliant Gems', imageUrl: 'https://i.postimg.cc/Hkh1W4tv/2fb29192-213b-4ce6-91d2-fa5a525b23a0.png', tags: [], playingCount: 2987 },
  { id: 106, title: 'Mystic Lanterns', subtitle: 'Mystic Lanterns', imageUrl: 'https://i.postimg.cc/bNPmbDJy/df5080e7-e0ca-425e-a881-173ecadf36eb-1.png', tags: [], playingCount: 4765 },
  { id: 119, title: 'Thor Power Coins', subtitle: 'Thor Power Coins', imageUrl: 'https://i.postimg.cc/VvCd4kkm/49e7feff-1c3e-4bc7-a236-9cb98dd9641b.png', tags: ['exclusive'], playingCount: 3654 },
  { id: 120, title: 'Wolf Gold 4 Pack', subtitle: 'Wolf gold 4 pack', imageUrl: 'https://i.postimg.cc/zXy7hsZj/21fd4ae3-803d-4330-8b40-1bc45b0e19d3.png', tags: [], playingCount: 7109 },
  { id: 121, title: 'Rockin\' Joker', subtitle: 'Rockin Joker Hold & Win', imageUrl: 'https://i.postimg.cc/8cDJtrjD/03f5459a-c3ee-4fba-9503-4d5a253d688e.png', tags: ['new'], playingCount: 5234 },
  { id: 122, title: 'Deadly Outlaws', subtitle: 'Deadly Outlaws', imageUrl: 'https://i.postimg.cc/7Z1vy8W9/2243b431-2f2a-4f3b-887a-54d8b126d0f6.png', tags: [], playingCount: 4876 },
  { id: 123, title: 'Hot Potato', subtitle: 'Slotsz Vegas Rodeo', imageUrl: 'https://i.postimg.cc/NG7MjgtR/3e9b03af-b43e-47a3-a3a0-33bdded96960.png', tags: ['exclusive'], playingCount: 6345 },
  { id: 124, title: 'Shamrock Trio', subtitle: 'Shamrock Trio', imageUrl: 'https://i.postimg.cc/gjDWH9bN/28488464-b366-4df2-8a20-951edc4d0dea.png', tags: ['new'], playingCount: 3543 },
  { id: 125, title: 'Brilliant Gems', subtitle: 'Brilliant Gems', imageUrl: 'https://i.postimg.cc/Hkh1W4tv/2fb29192-213b-4ce6-91d2-fa5a525b23a0.png', tags: [], playingCount: 2987 },
  { id: 126, title: 'Mystic Lanterns', subtitle: 'Mystic Lanterns', imageUrl: 'https://i.postimg.cc/bNPmbDJy/df5080e7-e0ca-425e-a881-173ecadf36eb-1.png', tags: [], playingCount: 4765 },
  { id: 129, title: 'Thor Power Coins', subtitle: 'Thor Power Coins', imageUrl: 'https://i.postimg.cc/VvCd4kkm/49e7feff-1c3e-4bc7-a236-9cb98dd9641b.png', tags: ['exclusive'], playingCount: 3654 },
  { id: 130, title: 'Wolf Gold 4 Pack', subtitle: 'Wolf gold 4 pack', imageUrl: 'https://i.postimg.cc/zXy7hsZj/21fd4ae3-803d-4330-8b40-1bc45b0e19d3.png', tags: [], playingCount: 7109 },
];

export const publishers: Publisher[] = [
  { id: 1, name: 'Enjoy Gaming', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/enjoygaming.png', gameCount: 42 },
  { id: 2, name: 'Yggdrasil', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/yggdrasil.png', gameCount: 112 },
  { id: 3, name: 'Betsoft', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/betsoft.png', gameCount: 68 },
  { id: 4, name: 'BGaming', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/bgaming.png', gameCount: 85 },
  { id: 5, name: 'Rubyplay', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/rubyplay.png', gameCount: 34 },
  { id: 6, name: 'Relax Gaming', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/gamzix.png', gameCount: 55 },
  { id: 7, name: 'Fantasma Games', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/fantasma-games.png', gameCount: 21 },
  { id: 8, name: 'Habanero', logoUrl: 'https://storage.googleapis.com/www.ysi-group.com/ysi-images/game-providers/habanero.png', gameCount: 48 },
];