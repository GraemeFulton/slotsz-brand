import React, { useState, useEffect, useRef } from 'react';
import GameCard from './GameCard';
import PublisherCard from './PublisherCard';
import GameGrid from './GameGrid';
import PromoBanners from './PromoBanners';
import { newGames, publishers, navItems } from '../constants';
import { 
    SearchIcon, 
    DarkModeIcon, 
    HomeIcon, 
    ChevronRightIcon, 
    ChevronLeftIcon,
    TopGamesIcon,
    TableGamesIcon,
    GameControllerIcon,
    HamburgerMenuIcon,
    SlidersIcon,
    Cherries,
    NewIcon,
    InfoIcon,
    LightningIcon,
    PhonePortraitIcon,
    PhoneLandscapeIcon,
    CloseIcon,
    VerifyIcon,
    JoystickIcon,
    PulseIcon,
    StylizedECGIcon,
    StylizedECGIcon2,
    StylizedECGIcon3,
    StylizedECGIcon4,
    PulseLineIcon
} from './icons';
import type { NavItem, Game } from '../types';
import Logo from './Logo';
import Hero from './Hero';
import StyleGuideSidebar from './StyleGuideSidebar';
import DealsHero from './DealsHero';
import GameDetailModal from './GameDetailModal';

const ToggleSwitch: React.FC<{ enabled: boolean; setEnabled: () => void }> = ({ enabled, setEnabled }) => (
    <button
      onClick={(e) => { e.stopPropagation(); setEnabled(); }}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-gray-300 dark:bg-neutral-700'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
);

const Section: React.FC<{ title: string; children: React.ReactNode; id: string; }> = ({ title, children, id }) => (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-semibold border-b-2 border-primary/20 pb-2 mb-6 text-gray-800 dark:text-neutral-200">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
);

const SubSection: React.FC<{ title: string; description?: string; children: React.ReactNode }> = ({ title, description, children }) => (
    <div>
        <h3 className="text-xl font-semibold mb-1 text-gray-700 dark:text-neutral-300">{title}</h3>
        {description && <p className="text-gray-500 dark:text-neutral-400 mb-4 max-w-2xl">{description}</p>}
        <div className="bg-gray-100/50 dark:bg-neutral-900/50 p-6 rounded-xl border border-gray-200 dark:border-neutral-800 flex flex-wrap items-center gap-6">
            {children}
        </div>
    </div>
);

const SidebarNavItem: React.FC<{ item: NavItem; isActive: boolean; isCollapsed: boolean; onClick?: () => void; }> = ({ item, isActive, isCollapsed, onClick }) => (
    <li
      onClick={onClick}
      data-name={item.name}
      className={`flex items-center space-x-3 p-2 rounded-xl cursor-pointer transition-colors duration-200 relative ${
        isActive
          ? 'bg-primary/10 text-primary font-semibold'
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200'
      } ${isCollapsed ? 'justify-center' : 'pl-8'}`}
    >
      <item.icon className="h-6 w-6 shrink-0" />
      {!isCollapsed && <span>{item.name}</span>}
    </li>
  );

const JoltLinesStyleguide: React.FC = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 -top-[10px] text-primary opacity-40 dark:opacity-30 pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sg-fade-down-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="sg-fade-down-mask">
          <rect width="1920" height="1080" fill="url(#sg-fade-down-gradient)" />
        </mask>
      </defs>
      <g stroke="currentColor" strokeWidth="2" fill="none" mask="url(#sg-fade-down-mask)">
        <path d="M-100,0 L500,540 l-30,40 L600,700" />
        <path d="M100,0 L600,540 l-20,20 L700,650" />
        <path d="M300,0 L700,540 l30,30 L800,720" />
        <path d="M500,0 L800,540 l-10,50 L900,750" />
        <path d="M2020,0 L1420,540 l30,40 L1320,700" />
        <path d="M1820,0 L1320,540 l20,20 L1220,650" />
        <path d="M1620,0 L1220,540 l-30,30 L1120,720" />
        <path d="M1420,0 L1120,540 l10,50 L1020,750" />
      </g>
    </svg>
);
  
const StyleGuide: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('logo');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainContentRef = useRef<HTMLElement>(null);
  const [isBrandIconLoaded, setBrandIconIsLoaded] = useState(false);

  const epicJokerGame: Game = {
    id: 999,
    title: 'Epic joker',
    subtitle: 'A classic joker game',
    imageUrl: 'https://storage.googleapis.com/www.ysi-group.com/screenshots/epicjoker/656x369.webp',
    tags: [],
    playingCount: 4242,
  };

  const sections = [
      { id: 'logo', title: 'Logo' },
      { id: 'colors', title: 'Colors' },
      { id: 'backgrounds', title: 'Backgrounds' },
      { id: 'decorations', title: 'Decorations' },
      { id: 'typography', title: 'Typography' },
      { id: 'icons', title: 'Icons' },
      { id: 'borders', title: 'Borders & Radius' },
      { id: 'buttons', title: 'Buttons & Tags' },
      { id: 'components', title: 'Components' },
      { id: 'dialogs', title: 'Dialogs' },
  ];
  
  const appIcons = [
    { name: 'HomeIcon', component: HomeIcon },
    { name: 'SearchIcon', component: SearchIcon },
    { name: 'Cherries', component: Cherries },
    { name: 'TopGamesIcon', component: TopGamesIcon },
    { name: 'TableGamesIcon', component: TableGamesIcon },
    { name: 'DarkModeIcon', component: DarkModeIcon },
    { name: 'GameControllerIcon', component: GameControllerIcon },
    { name: 'JoystickIcon', component: JoystickIcon },
    { name: 'ChevronLeftIcon', component: ChevronLeftIcon },
    { name: 'ChevronRightIcon', component: ChevronRightIcon },
    { name: 'HamburgerMenuIcon', component: HamburgerMenuIcon },
    { name: 'SlidersIcon', component: SlidersIcon },
    { name: 'NewIcon', component: NewIcon },
    { name: 'VerifyIcon', component: VerifyIcon },
    { name: 'InfoIcon', component: InfoIcon },
    { name: 'LightningIcon', component: LightningIcon },
    { name: 'PhonePortraitIcon', component: PhonePortraitIcon },
    { name: 'PhoneLandscapeIcon', component: PhoneLandscapeIcon },
    { name: 'CloseIcon', component: CloseIcon },
    { name: 'PulseIcon', component: PulseIcon },
    { name: 'StylizedECGIcon', component: StylizedECGIcon },
    { name: 'PulseLineIcon', component: PulseLineIcon },
  ];

  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

   useEffect(() => {
    const mainContent = mainContentRef.current;
    if (!mainContent) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        { 
          root: mainContent,
          rootMargin: '-20% 0px -70% 0px',
          threshold: 0,
        }
    );

    const sectionElements = sections.map(({ id }) => document.getElementById(id)).filter(el => el);
    sectionElements.forEach((el) => observer.observe(el!));

    return () => {
        sectionElements.forEach((el) => observer.unobserve(el!));
    };
  }, []);

const InfoDetail: React.FC<{ label: string; value: string | React.ReactNode; info?: boolean; }> = ({ label, value, info = false }) => (
    <div className="bg-gray-50 dark:bg-neutral-800/50 p-3 rounded-lg text-center">
        <div className="flex items-center justify-center space-x-1">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">{label}</h4>
            {info && <InfoIcon className="w-3 h-3 text-gray-400" />}
        </div>
        <p className="text-sm sm:text-base font-bold text-gray-800 dark:text-neutral-200 mt-1">{value}</p>
    </div>
);

const StaticModalContent: React.FC<{ game: Game }> = ({ game }) => {
    const [coinType, setCoinType] = useState<'GC' | 'SC'>('SC');

    return (
        <div className="relative">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
              <button 
                  className="sm:hidden absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors z-10 p-1 bg-white/20 dark:bg-black/20 rounded-full"
                  aria-label="Close dialog"
              >
                <CloseIcon className="w-6 h-6" />
              </button>

              <div className="relative w-full h-48 sm:h-64 bg-gray-200 dark:bg-neutral-800">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                  <div className="text-center">
                      <h2 id="static-game-title" className="text-3xl font-bold font-display text-gray-900 dark:text-white">{game.title}</h2>
                      <p className="mt-2 text-gray-600 dark:text-neutral-400">Play this awesome game and win great prizes!</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      <InfoDetail label="Top Prize" value="GC 8,373,000,000" />
                      <InfoDetail label="Min / Max" value="GC 50 / GC 500,000" info />
                      <InfoDetail label="Volatility" info value={
                          <span className="flex justify-center items-center text-orange-400 gap-0.5">
                              <LightningIcon className="w-5 h-5" />
                              <LightningIcon className="w-5 h-5" />
                              <LightningIcon className="w-5 h-5" />
                          </span>
                      } />
                      <InfoDetail label="Orientation" value={
                          <span className="flex justify-center items-center text-orange-400 gap-2">
                              <PhonePortraitIcon className="w-5 h-5" />
                              <PhoneLandscapeIcon className="w-5 h-5" />
                          </span>
                      } />
                  </div>

                  <div className="space-y-4">
                      <div className="bg-gray-100 dark:bg-neutral-800 rounded-full p-1 flex">
                          <button 
                              onClick={() => setCoinType('GC')}
                              className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-colors ${coinType === 'GC' ? 'bg-white dark:bg-neutral-700 text-gray-800 dark:text-white shadow' : 'text-gray-500'}`}
                          >
                              Gold Coins
                          </button>
                          <button 
                              onClick={() => setCoinType('SC')}
                              className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-colors ${coinType === 'SC' ? 'bg-white dark:bg-neutral-700 text-gray-800 dark:text-white shadow' : 'text-gray-500'}`}
                          >
                              Sweepstakes Coins
                          </button>
                      </div>
                      
                      {coinType === 'GC' ? (
                          <button className="w-full bg-gradient-to-b from-yellow-400 to-orange-500 text-white font-display rounded-xl py-3 text-center hover:opacity-90 transition-opacity">
                              <span className="block text-xl font-bold tracking-wider">PLAY</span>
                              <span className="block text-xs font-semibold opacity-80">WITH GOLD COINS</span>
                          </button>
                      ) : (
                          <button className="w-full bg-[linear-gradient(90deg,#1AAE42,#049347)] text-white font-display rounded-xl py-3 text-center hover:opacity-90 transition-opacity">
                              <span className="block text-xl font-bold tracking-wider">PLAY</span>
                              <span className="block text-xs font-semibold opacity-80">WITH SWEEPSTAKES COINS</span>
                          </button>
                      )}
                  </div>
              </div>
            </div>
            <button 
                className="hidden sm:block absolute top-0 left-full ml-4 text-gray-300 hover:text-white transition-colors z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full"
                aria-label="Close dialog"
            >
              <CloseIcon className="w-8 h-8" />
            </button>
        </div>
    );
};

const GlowingOrbBackground: React.FC = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none
      bg-[radial-gradient(circle,rgba(254,19,156,0.5)_0%,rgba(199,28,184,0.35)_20%,rgba(100,50,200,0.2)_40%,transparent_60%)] 
      dark:bg-[radial-gradient(circle,rgba(254,19,156,0.5)_0%,rgba(199,28,184,0.3)_20%,rgba(100,50,200,0.15)_40%,transparent_60%)]"
    />
);

const DecoratedMenuExample: React.FC<{ isCollapsed: boolean; title: string; }> = ({ isCollapsed, title }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const navListRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    const navList = navListRef.current;
    if (!navList) return;

    const activeLink = navList.querySelector(`[data-name="${activeItem}"]`) as HTMLLIElement;
    if (activeLink) {
        if (isCollapsed) {
            setIndicatorStyle({
                opacity: 1,
                top: `${activeLink.offsetTop + activeLink.offsetHeight - 4}px`,
                left: '50%',
                transform: 'translateX(-50%)',
                height: '6px',
                width: '16px',
            });
        } else {
            setIndicatorStyle({
                opacity: 1,
                top: `${activeLink.offsetTop + (activeLink.offsetHeight / 2)}px`,
                left: '10px',
                transform: 'translateY(-50%)',
                height: '20px',
                width: '6px',
            });
        }
    }
  }, [activeItem, isCollapsed]);

  return (
    <div className="text-center">
      <div className={`relative inline-block ${isCollapsed ? 'w-24' : 'w-64'}`}>
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-xl bg-gradient-to-b from-transparent via-primary to-transparent blur-md opacity-20 dark:opacity-20"
        ></div>
        <nav className="relative dark:bg-neutral-800 bg-white p-4 rounded-xl border border-gray-200 dark:border-neutral-800">
          <div className="relative">
            {!isCollapsed && (
              <div
                className="absolute top-0 left-3 h-full w-[1.4px] bg-primary/40 dark:bg-primary/40 rounded-xl"
                aria-hidden="true"
              />
            )}

            <div
              className="absolute bg-primary rounded-full shadow-[0_0_10px_theme(colors.primary)] transition-all duration-300 ease-in-out"
              style={indicatorStyle}
              aria-hidden="true"
            />

            <ul ref={navListRef} className="space-y-2">
              {navItems.map((item) => (
                <SidebarNavItem
                  key={item.name}
                  item={item}
                  isActive={activeItem === item.name}
                  onClick={() => setActiveItem(item.name)}
                  isCollapsed={isCollapsed}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
       <p className="font-semibold mt-4">{title}</p>
    </div>
  );
};


  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-300 flex flex-col h-screen overflow-hidden">
      {isModalOpen && <GameDetailModal game={epicJokerGame} onClose={() => setIsModalOpen(false)} />}
      <header className="bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-200 dark:border-neutral-800 p-4 flex justify-between items-center shrink-0 z-50">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">Brand Book & Style Guide</h1>
        <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
                <DarkModeIcon className="h-6 w-6 text-gray-500 dark:text-neutral-400"/>
                <ToggleSwitch enabled={theme === 'dark'} setEnabled={toggleTheme} />
            </div>
            <button
              onClick={() => window.location.hash = ''}
              className="px-4 py-2 text-sm font-semibold text-white bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] rounded-xl hover:opacity-90 transition"
            >
                Back to App
            </button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <StyleGuideSidebar sections={sections} activeSection={activeSection} onSectionClick={handleSectionClick} />
        <main ref={mainContentRef} className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto overflow-y-auto">
          <Section id="logo" title="Logo">
              <SubSection title="Logotype Variations" description="The primary brand logo. The appropriate version should be used to ensure high contrast against the background.">
                  <div className="w-full space-y-6">
                      <div>
                          <SubSection title="Logo" description="The logo mark introduced is a pulsing circle with a central S mark, and was used as a reference point to define other brand elements.">
                          <div className="flex flex-col sm:flex-row items-center gap-8">
                              <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
                                  <Logo className="h-10" />
                                  <p className="text-sm mt-4 text-gray-600">Default (Light BG)</p>
                              </div>
                              <div className="dark p-8 bg-neutral-900 rounded-xl border border-neutral-800 text-center">
                                  <Logo className="h-10" />
                                  <p className="text-sm mt-4 text-neutral-400">Dark Mode (Dark BG)</p>
                              </div>
                          </div>
                              </SubSection>
                      </div>
                      {/* <div className="pt-6 border-t border-gray-200 dark:border-neutral-800">
                         <SubSection title="Alternative Logo Idea" description="This concept presents an alternative logotype. It's not necessary, but an idea.">
                            <div className="flex flex-col sm:flex-row items-center gap-8">
                                <div className="p-8 bg-white rounded-xl border border-gray-200 dark:border-neutral-700 text-center">
                                    <img src="https://i.postimg.cc/LsYBxpz6/Frame-3.png" alt="Alternative Logo Idea" className="h-10" />
                                    <p className="text-sm mt-4 text-gray-600">Possible adjustment to original P</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
                                  <img src="https://i.postimg.cc/pTt860gF/Frame-12-2.png" alt="Updated Logo Light Mode" className="h-10" />
                                  <p className="text-sm mt-4 text-gray-600">Default (Light BG)</p>
                              </div>
                              <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-800 text-center">
                                  <img src="https://i.postimg.cc/prrdGzXj/Frame-13-3.png" alt="Updated Logo Dark Mode" className="h-10" />
                                  <p className="text-sm mt-4 text-neutral-400">Dark Mode (Dark BG)</p>
                              </div>
                            </div>
                        </SubSection>
                      </div> */}
                  </div>
              </SubSection>
              {/* <SubSection title="Logo Mark" description="The brand's abstract logo mark. It can be used in various sizes where the brand is already established.">
                  <div className="flex items-end gap-8 text-center">
                      <div className="flex flex-col items-center">
                          <img src="https://i.postimg.cc/Vvfp2vsc/Frame-23-6.png" alt="Logo Mark Large" className="w-48" />
                          <p className="text-sm mt-4 text-gray-600 dark:text-neutral-400">Large</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img src="https://i.postimg.cc/Vvfp2vsc/Frame-23-6.png" alt="Logo Mark Medium" className="w-32" />
                          <p className="text-sm mt-4 text-gray-600 dark:text-neutral-400">Medium</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img src="https://i.postimg.cc/Vvfp2vsc/Frame-23-6.png" alt="Logo Mark Small" className="w-24" />
                          <p className="text-sm mt-4 text-gray-600 dark:text-neutral-400">Small</p>
                      </div>
                  </div>
              </SubSection> */}
              {/*<SubSection title="Logo Tile" description="A simplified, tileable version of the logo mark for use as a background pattern or subtle branding element.">
                  <div className="flex items-end gap-8 text-center">
                      <div className="flex flex-col items-center">
                          <img src="https://i.postimg.cc/MHvXdNWx/circles-shape-15.png" alt="Logo Tile Large" className="w-32" />
                          <p className="text-sm mt-4 text-gray-600 dark:text-neutral-400">Large</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img src="https://i.postimg.cc/MHvXdNWx/circles-shape-15.png" alt="Logo Tile Medium" className="w-24" />
                          <p className="text-sm mt-4 text-gray-600 dark:text-neutral-400">Medium</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img src="https://i.postimg.cc/MHvXdNWx/circles-shape-15.png" alt="Logo Tile Small" className="w-16" />
                          <p className="text-sm mt-4 text-gray-600 dark:text-neutral-400">Small</p>
                      </div>
                  </div>
              </SubSection>*/}
          </Section>
          <Section id="colors" title="Colors">
              <SubSection title="Palette" description="The core color palette defines the brand's identity. Functional colors are used for specific actions like gameplay buttons.">
                  <div className="text-center">
                      <div className="w-24 h-24 rounded-xl bg-primary mb-2 shadow-md"></div>
                      <p className="font-semibold">Primary</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">#fe139c</p>
                  </div>
                  <div className="text-center">
                      <div className="w-24 h-24 rounded-xl bg-accent mb-2 shadow-md"></div>
                      <p className="font-semibold">Accent</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">#c71cb8</p>
                  </div>
                  <div className="text-center">
                      <div className="w-24 h-24 rounded-xl bg-gray-800 dark:bg-neutral-200 mb-2 shadow-md border border-gray-200 dark:border-neutral-800"></div>
                      <p className="font-semibold">Text</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">Gray Tones</p>
                  </div>
                  <div className="text-center">
                      <div className="w-24 h-24 rounded-xl bg-white dark:bg-neutral-950 mb-2 shadow-md border border-gray-200 dark:border-neutral-800"></div>
                      <p className="font-semibold">Background</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">White / Dark</p>
                  </div>
                  <div className="text-center">
                      <div className="w-24 h-24 rounded-xl bg-orange-400 mb-2 shadow-md"></div>
                      <p className="font-semibold">Orange</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">bg-orange-400</p>
                  </div>
                  <div className="text-center">
                      <div className="w-24 h-24 rounded-xl bg-green-500 mb-2 shadow-md"></div>
                      <p className="font-semibold">Green</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">bg-green-500</p>
                  </div>
              </SubSection>
              <SubSection title="Functional Gradients" description="Gradients are used for primary call-to-actions and promotional materials to draw attention. Specific functional gradients are designated for key user actions.">
                  <div className="text-center">
                      <div className="w-48 h-24 rounded-xl bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] mb-2 shadow-md"></div>
                      <p className="font-semibold">Primary Brand</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">For registration, social, etc.</p>
                  </div>
                  <div className="text-center">
                      <div className="w-48 h-24 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-2 shadow-md"></div>
                      <p className="font-semibold">Instagram Promo</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">For social media banners.</p>
                  </div>
                  <div className="text-center">
                      <div className="w-48 h-24 rounded-xl bg-gradient-to-b from-yellow-400 to-orange-500 mb-2 shadow-md"></div>
                      <p className="font-semibold">Orange Gradient</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">Gold Coin actions.</p>
                  </div>
                  <div className="text-center">
                      <div className="w-48 h-24 rounded-xl bg-[linear-gradient(90deg,#1AAE42,#049347)] mb-2 shadow-md"></div>
                      <p className="font-semibold">Green Gradient</p>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">Gameplay buttons.</p>
                  </div>
              </SubSection>
          </Section>
          
          <Section id="backgrounds" title="Backgrounds">
              <SubSection title="Decorative Orb Gradients" description="These subtle, corner-placed orb gradients are used on promotional cards to add visual depth and a touch of brand personality. The circular orb motif is derived directly from the brand's logo mark, creating a cohesive visual system that works backwards from the primary logo.">
                  <div className="w-full grid sm:grid-cols-2 gap-6">
                      <div className="text-center">
                          <div className="relative w-full h-48 rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-white">
                              <div 
                                className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#fe139c80_0%,#fe139c80_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb880_0%,#c71cb880_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c33_0%,#fe139c33_16%,transparent_18%)] pointer-events-none"
                                aria-hidden="true"
                              ></div>
                              <div 
                                className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,_rgba(254,19,156,0.1)_0%,_transparent_50%)] pointer-events-none"
                                aria-hidden="true"
                              ></div>
                          </div>
                          <p className="font-semibold mt-4">Light Mode Card</p>
                          <p className="text-sm text-gray-500 dark:text-neutral-400">Used on light backgrounds.</p>
                      </div>
                      <div className="text-center">
                          <div className="relative w-full h-48 rounded-xl shadow-lg border border-neutral-800 overflow-hidden bg-neutral-900">
                              <div 
                                className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#fe139c99_0%,#fe139c99_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb899_0%,#c71cb899_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c40_0%,#fe139c40_16%,transparent_18%)] pointer-events-none"
                                aria-hidden="true"
                              ></div>
                              <div 
                                className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,_rgba(254,19,156,0.15)_0%,_transparent_50%)] pointer-events-none"
                                aria-hidden="true"
                              ></div>
                          </div>
                          <p className="font-semibold mt-4">Dark Mode Card</p>
                          <p className="text-sm text-gray-500 dark:text-neutral-400">Used on dark backgrounds.</p>
                      </div>
                  </div>
              </SubSection>
              <SubSection title="Glowing Orb Background" description="A large, soft orb used as a background element to create an atmospheric glow behind primary content sections.">
                <div className="w-full grid sm:grid-cols-2 gap-6">
                    <div className="text-center">
                        <div className="relative w-full h-64 rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-white">
                            <GlowingOrbBackground />
                            <div className="relative z-10 m-8 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 text-left">
                                <h4 className="text-lg font-bold text-gray-800">Card Content</h4>
                                <p className="text-sm text-gray-600 mt-2">This card sits over the glowing orb background.</p>
                            </div>
                        </div>
                        <p className="font-semibold mt-4">Light Mode Example</p>
                    </div>
                    <div className="text-center">
                      <div className="dark">
                        <div className="relative w-full h-64 rounded-xl shadow-lg border border-neutral-800 overflow-hidden bg-neutral-950">
                            <GlowingOrbBackground />
                            <div className="relative z-10 m-8 p-6 bg-neutral-900/70 backdrop-blur-sm rounded-lg border border-white/10 text-left">
                                <h4 className="text-lg font-bold text-neutral-200">Card Content</h4>
                                <p className="text-sm text-neutral-400 mt-2">This card sits over the glowing orb background.</p>
                            </div>
                        </div>
                        <p className="font-semibold mt-4 text-neutral-200">Dark Mode Example</p>
                      </div>
                    </div>
                </div>
              </SubSection>
              {/*<SubSection title="Electric Jolt Background" description="Energetic, crackling lines that radiate from the corners to add a dynamic, electric feel to backgrounds, typically used behind hero or promotional sections.">
                <div className="w-full">
                    <div className="text-center">
                        <div className="relative w-full h-64 rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-white">
                            <JoltLinesStyleguide />
                            <div className="relative z-10 m-8 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 text-left">
                                <h4 className="text-lg font-bold text-gray-800">Card Content</h4>
                                <p className="text-sm text-gray-600 mt-2">This card sits over the jolt lines background.</p>
                            </div>
                        </div>
                        <p className="font-semibold mt-4">Light Mode Example</p>
                    </div>
                </div>
              </SubSection>*/}
          </Section>

          <Section id="decorations" title="Decorations">
              <SubSection title="Decorative Icons" description="Specialized, stylized icons used for background elements and promotional flair. The motif of a pulse line ending in a circle is a direct visual reference to the brand's logo mark, reinforcing a cohesive and energetic identity.">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div>
                        <div className="relative w-full h-40 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 flex items-center justify-center p-4">
                            <StylizedECGIcon className="h-24 text-primary" />
                        </div>
                        <p className="font-semibold mt-4">StylizedECGIcon</p>
                        <p className="text-sm text-gray-500 dark:text-neutral-400">Original version, strong glow, stroke 4.</p>
                    </div>
                    <div>
                        <div className="relative w-full h-40 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 flex items-center justify-center p-4">
                            <StylizedECGIcon2 className="h-24 text-primary" />
                        </div>
                        <p className="font-semibold mt-4">StylizedECGIcon2</p>
                        <p className="text-sm text-gray-500 dark:text-neutral-400">Subtle glow, stroke 2, end circles.</p>
                    </div>
                    <div>
                        <div className="relative w-full h-40 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 flex items-center justify-center p-4">
                            <StylizedECGIcon3 className="h-24 text-primary" />
                        </div>
                        <p className="font-semibold mt-4">StylizedECGIcon3</p>
                        <p className="text-sm text-gray-500 dark:text-neutral-400">Similar to v2, smaller center circle.</p>
                    </div>
                    <div>
                        <div className="relative w-full h-40 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 flex items-center justify-center p-4">
                            <StylizedECGIcon4 className="h-24 text-primary" />
                        </div>
                        <p className="font-semibold mt-4">StylizedECGIcon4 (New)</p>
                        <p className="text-sm text-gray-500 dark:text-neutral-400">Longer version of v3 for wide banners.</p>
                    </div>
                    <div>
                        <div className="relative w-full h-40 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 flex items-center justify-center p-4">
                            <PulseLineIcon className="h-24 text-primary" />
                        </div>
                        <p className="font-semibold mt-4">PulseLineIcon</p>
                        <p className="text-sm text-gray-500 dark:text-neutral-400">Alternate version with subtle glow and end-point dot.</p>
                    </div>
                </div>
              </SubSection>
          </Section>

          <Section id="typography" title="Typography">
              <SubSection title="Font Roles" description="The typography system is built on a clear separation of roles to balance brand personality with user interface legibility.">
                  <div className="flex flex-col md:flex-row w-full gap-6">
                      <div className="w-full md:w-1/2">
                          <h4 className="font-display text-2xl font-bold mb-2">Poppins (Display Font)</h4>
                          <p className="font-sans text-gray-600 dark:text-neutral-400">Used for elements that need a strong brand personality and visual impact.</p>
                          <ul className="list-disc list-inside mt-2 font-sans text-gray-600 dark:text-neutral-400">
                              <li>Headings (h1, h2, etc.)</li>
                              <li>Hero sections</li>
                              <li>Primary Call-to-Action buttons</li>
                          </ul>
                      </div>
                      <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 dark:border-neutral-800 pt-6 md:pt-0 md:pl-6">
                          <h4 className="font-sans text-2xl font-bold mb-2">Inter (System Font)</h4>
                          <p className="font-sans text-gray-600 dark:text-neutral-400">Used for all standard UI text to ensure maximum readability and clarity across the application.</p>
                          <ul className="list-disc list-inside mt-2 font-sans text-gray-600 dark:text-neutral-400">
                              <li>Body text & paragraphs</li>
                              <li>Navigation links</li>
                              <li>Secondary buttons & labels</li>
                              <li>Form elements & tags</li>
                          </ul>
                      </div>
                  </div>
              </SubSection>
              <SubSection title="Scale & Hierarchy" description="A consistent typographic scale is used to maintain rhythm and hierarchy. Major article or blog titles use `font-bold` for maximum impact. For other high-impact display text, such as in the hero jumbotron and promotional banners, `font-semibold` with `tracking-tight` is used. This pairing offers strong visual impact while preserving legibility. Standard UI section headings also use `font-semibold` for a clean, cohesive look.">
                  <div className="space-y-4 w-full">
                      <div>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">Poppins Bold - 36px, tracking-tight</p>
                          <h1 className="text-4xl font-bold tracking-tight">Blog Post Title Heading</h1>
                      </div>
                      <div>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">Poppins Semibold - 30px, tracking-tight</p>
                          <h2 className="text-3xl font-semibold tracking-tight">Display Heading (Banners, etc.)</h2>
                      </div>
                      <div>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">Poppins Semibold - 20px</p>
                          <h3 className="text-xl font-semibold">Section Heading (Game Grids, etc.)</h3>
                      </div>
                      <div>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">Inter Regular - 16px</p>
                          <p className="text-base">This is a paragraph of body text. It is set in Inter for maximum readability and clarity for the user.</p>
                      </div>
                      <div>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">Inter Medium - 14px</p>
                          <p className="text-sm font-medium">This is some smaller text, perfect for UI labels or captions.</p>
                      </div>
                  </div>
              </SubSection>
              <SubSection title="Text Spacing (Kerning)" description="Headings use tight letter spacing (`tracking-tight`) to create a more compact and impactful display appearance. Body text maintains its default spacing for optimal readability.">
                  <div className="space-y-4 w-full">
                      <div>
                          <p className="text-xs text-gray-500 dark:text-neutral-400 mb-1">Heading with Tight Tracking (Default)</p>
                          <h2 className="text-2xl font-semibold">Compact Heading</h2>
                      </div>
                      <div>
                          <p className="text-xs text-gray-500 dark:text-neutral-400 mb-1">Heading with Normal Tracking (For Comparison)</p>
                          <h2 className="text-2xl font-semibold tracking-normal">Normal Spacing Heading</h2>
                      </div>
                      <div className="pt-4 border-t border-gray-200 dark:border-neutral-800">
                          <p className="text-xs text-gray-500 dark:text-neutral-400 mb-1">Body Text with Normal Tracking</p>
                          <p className="font-sans">Body text uses normal letter spacing to ensure it's easy to read.</p>
                      </div>
                  </div>
              </SubSection>
          </Section>
          
          <Section id="icons" title="Icons">
              <SubSection title="Application Icons" description="The primary set of icons used throughout the user interface. These icons share a soft, rounded aesthetic for a friendly and cohesive visual language. Avoid sharp corners or overly complex designs to maintain this style.">
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6 w-full">
                      {appIcons.map(({ name, component: IconComponent }) => (
                          <div key={name} className="flex flex-col items-center text-center gap-2">
                              <div className="w-16 h-16 bg-gray-200 dark:bg-neutral-800 rounded-xl flex items-center justify-center">
                                  <IconComponent className="w-8 h-8 text-gray-800 dark:text-neutral-200" />
                              </div>
                              <p className="text-xs font-mono text-gray-500 dark:text-neutral-400">{name}</p>
                          </div>
                      ))}
                  </div>
              </SubSection>
          </Section>

          <Section id="borders" title="Borders & Radius">
              <SubSection title="Consistent Radius" description="Most major UI elements, including buttons, cards, menus, and inputs, use a consistent border-radius of `rounded-xl`. This creates a unified, modern, and soft aesthetic. Key exceptions include grouped buttons like carousel controls, which use `rounded-full` to form a cohesive pill shape.">
                  <div className="w-24 h-24 rounded-xl bg-primary/20 border-2 border-primary/50 flex items-center justify-center">
                      <span className="font-semibold text-primary">rounded-xl</span>
                  </div>
              </SubSection>
          </Section>
          
          <Section id="buttons" title="Buttons & Tags">
              <SubSection title="Button Typography" description="Key action buttons use the 'Poppins' display font with a semibold weight for a confident but not overpowering appearance. UI-focused buttons (like icon buttons) use 'Inter' for legibility.">
                  <div className="flex flex-col items-start gap-4">
                      <p className="font-sans text-sm text-gray-500 dark:text-neutral-400 w-full mb-2">Primary CTA Button (font-display: Poppins Semibold)</p>
                      <p className="font-sans text-xs text-gray-500 dark:text-neutral-400 w-full -mt-3 mb-2">For primary actions on a page - try to limit to 1.</p>
                      <button className="px-4 py-2 text-sm font-semibold font-display tracking-wide text-white bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] rounded-xl hover:opacity-90 transition">
                          Register
                      </button>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                      <p className="font-sans text-sm text-gray-500 dark:text-neutral-400 w-full mb-2">Ghost Button</p>
                      <p className="font-sans text-xs text-gray-500 dark:text-neutral-400 w-full -mt-3 mb-2">For secondary actions that need to be available but not distracting. Features a transparent background with a keyline border.</p>
                      <button className="px-4 py-2 text-sm font-semibold font-display text-primary border-2 border-primary rounded-xl hover:bg-primary/10 transition">
                          Learn More
                      </button>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                      <p className="font-sans text-sm text-gray-500 dark:text-neutral-400 w-full mb-2">Tertiary Button</p>
                      <p className="font-sans text-xs text-gray-500 dark:text-neutral-400 w-full -mt-3 mb-2">For tertiary actions. No border, subtle gray background, and a slightly more prominent background on hover.</p>
                      <button className="px-4 py-2 text-sm font-semibold font-display text-primary bg-gray-50 dark:bg-neutral-800 rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 transition">
                          Login
                      </button>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                      <p className="font-sans text-sm text-gray-500 dark:text-neutral-400 w-full mb-2">Icon Button (font-sans: Inter)</p>
                      <button className="p-2 rounded-xl border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
                          <ChevronLeftIcon className="h-4 w-4 text-gray-600 dark:text-neutral-300" />
                      </button>
                  </div>
              </SubSection>
              <SubSection title="Gradient Action Buttons" description="High-impact buttons used for primary gameplay actions. They feature a two-line text structure to create a clear and compelling call-to-action.">
                  <div className="flex flex-col items-start gap-4">
                      <p className="font-sans text-sm text-gray-500 dark:text-neutral-400 w-full mb-2">Gold Coin Play Button</p>
                      <button className="w-48 bg-gradient-to-b from-yellow-400 to-orange-500 text-white font-display rounded-xl py-3 text-center hover:opacity-90 transition-opacity">
                          <span className="block text-xl font-bold tracking-wider">PLAY</span>
                          <span className="block text-xs font-semibold opacity-80">WITH GOLD COINS</span>
                      </button>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                      <p className="font-sans text-sm text-gray-500 dark:text-neutral-400 w-full mb-2">Sweepstakes Coin Play Button</p>
                      <button className="w-48 bg-[linear-gradient(90deg,#1AAE42,#049347)] text-white font-display rounded-xl py-3 text-center hover:opacity-90 transition-opacity">
                          <span className="block text-xl font-bold tracking-wider">PLAY</span>
                          <span className="block text-xs font-semibold opacity-80">WITH SWEEPSTAKES COINS</span>
                      </button>
                  </div>
              </SubSection>
              <SubSection title="Button Groups" description="Button groups are used to visually connect a set of related actions, making the UI clearer and more compact. Use them for controls like pagination, carousels, or filter toggles.">
                  <div className="w-full space-y-6">
                      <div>
                          <h4 className="font-semibold text-gray-700 dark:text-neutral-300 mb-2">Pill Group (for paired actions)</h4>
                          <p className="text-sm text-gray-500 dark:text-neutral-400 mb-3">Uses `rounded-full` for opposing controls like next/previous. The border between buttons is removed.</p>
                          <div className="flex items-center">
                              <button aria-label="Scroll left" className="p-2 rounded-l-full border border-r-0 border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
                                  <ChevronLeftIcon className="h-4 w-4 text-gray-600 dark:text-neutral-300" />
                              </button>
                              <button aria-label="Scroll right" className="p-2 rounded-r-full border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
                                  <ChevronRightIcon className="h-4 w-4 text-gray-600 dark:text-neutral-300" />
                              </button>
                          </div>
                      </div>
                      <div className="pt-6 border-t border-gray-200 dark:border-neutral-800">
                          <h4 className="font-semibold text-gray-700 dark:text-neutral-300 mb-2">Standard Group (for multiple choices)</h4>
                          <p className="text-sm text-gray-500 dark:text-neutral-400 mb-3">Uses a container with a pill-shaped background for the active item. Ideal for filter toggles or view switchers. This provides a modern, clean way to handle selection states, clearly indicating the active filter within a visually cohesive group.</p>
                          <div className="bg-gray-100 dark:bg-neutral-800 rounded-full p-1 inline-flex items-center space-x-1">
                              <button className="px-4 py-1.5 text-sm font-semibold font-sans text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors">
                                  My Bets
                              </button>
                              <button className="px-4 py-1.5 text-sm font-semibold font-sans text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors">
                                  All Bets
                              </button>
                              <button className="px-4 py-1.5 text-sm font-semibold font-sans text-gray-900 dark:text-white bg-white dark:bg-neutral-700 rounded-full shadow-sm transition-colors">
                                  High Rollers
                              </button>
                              <button className="flex items-center space-x-2 px-4 py-1.5 text-sm font-semibold font-sans text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors">
                                  <span>Leaderboard</span>
                                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                              </button>
                          </div>
                      </div>
                  </div>
              </SubSection>
              <SubSection title="Tags" description="Tags use the 'Inter' system font for clarity and legibility on component cards.">
                  <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-xl">New</span>
                  <div className="bg-white leading-loose border border-gray-200 dark:bg-neutral-900 dark:border-neutral-800 text-xs font-medium px-2 h-6 flex flex-col justify-center align-center rounded-xl">
                      <span className="leading-loose bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          Exclusive
                      </span>
                </div>
                <div className="inline-block bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-base font-medium px-2 py-0.5 rounded-xl">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Welcome Offer
                  </span>
                </div>
              </SubSection>
          </Section>

          <Section id="components" title="Components">
              <SubSection title="Cards">
                  {/* FIX: The 'onClick' prop is required by GameCard. Added a no-op function for the style guide. */}
                  <GameCard game={newGames[2]} onClick={() => {}} />
                  <PublisherCard publisher={publishers[1]} />
              </SubSection>
              <SubSection title="Inputs" description="Standard input field used for search functionality.">
                  <div className="relative w-full max-w-md">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <SearchIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input type="text" placeholder="Search games" className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500"/>
                  </div>
              </SubSection>
              <SubSection title="Menus" description="Sidebar navigation provides access to main app sections.">
                  <div className="flex gap-4">
                      {/* Expanded */}
                      <div className="w-64 dark:bg-neutral-800 bg-white p-4 rounded-xl border dark:border-neutral-700 border-gray-200">
                          <p className="text-sm font-bold mb-2 text-center">Expanded</p>
                          <ul className="space-y-2">
                              <SidebarNavItem item={navItems[0]} isActive={true} isCollapsed={false} />
                              <SidebarNavItem item={navItems[1]} isActive={false} isCollapsed={false} />
                              <SidebarNavItem item={navItems[2]} isActive={false} isCollapsed={false} />
                          </ul>
                      </div>
                      {/* Collapsed */}
                      <div className="w-24 dark:bg-neutral-800 bg-white p-4 rounded-xl border dark:border-neutral-700 border-gray-200">
                          <p className="text-sm font-bold mb-2 text-center">Collapsed</p>
                          <ul className="space-y-2">
                            <SidebarNavItem item={navItems[0]} isActive={true} isCollapsed={true} />
                              <SidebarNavItem item={navItems[1]} isActive={false} isCollapsed={true} />
                          </ul>
                      </div>
                  </div>
              </SubSection>
               <SubSection title="Decorated Menu" description="The main application menu features several decorative elements for a rich user experience. This includes a soft background glow, a vertical guide line, and an animated active item indicator that adapts to both expanded and collapsed states.">
                <div className="flex flex-wrap gap-8 justify-around w-full">
                    <DecoratedMenuExample isCollapsed={false} title="Expanded Menu" />
                    <DecoratedMenuExample isCollapsed={true} title="Collapsed Menu" />
                </div>
              </SubSection>
              <div className="w-full">
                  <SubSection title="Banners" description="Promotional banners are used to highlight offers and social media campaigns.">
                      <div className="w-full">
                      <PromoBanners />
                      </div>
                  </SubSection>
              </div>
              <div className="w-full">

                  <SubSection title="Hero Banner (Deals)" description="A promotional hero variant for special events or deals, featuring a two-column layout.">
                      <div className="w-full">
                          <DealsHero />
                      </div>
                  </SubSection>

                  <div className="my-6"/>
                  <SubSection title="Hero Section" description="The hero section uses 'Poppins' for the main heading and primary CTA to create a strong brand statement.">
                      <div className="w-full">
                          <Hero />
                      </div>
                  </SubSection>
              </div>
              <div className="w-full">
                  <SubSection title="Carousels / Rows" description="Carousels are used to display lists of games and publishers horizontally.">
                      <div className="w-full">
                          <GameGrid title="Example Carousel" games={newGames} />
                      </div>
                  </SubSection>
              </div>
          </Section>
          <Section id="dialogs" title="Dialogs">
            <SubSection title="Static Content" description="This shows the content of a dialog component as it would appear, without the overlay. This is useful for reviewing the layout and content in isolation.">
                <StaticModalContent game={epicJokerGame} />
            </SubSection>
            <SubSection title="Interactive Example" description="Click the button to open the fully interactive dialog component, including the overlay and close functionality.">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 text-sm font-semibold font-display text-white bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] rounded-xl hover:opacity-90 transition"
                >
                  Open Game Detail Dialog
                </button>
            </SubSection>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default StyleGuide;