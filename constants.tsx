import React from 'react';

export interface Tool {
  name: string;
  logo: string;
  url: string;
  article: string;
}

const placeholderArticle = `
  <p>Discover how this tool can revolutionize your workflow. With its advanced AI capabilities, it's designed to streamline processes, enhance creativity, and boost productivity.</p>
  <h3 class="text-xl font-bold text-gray-100 mt-6 mb-2">Key Features</h3>
  <ul class="list-disc list-inside space-y-2">
    <li><strong>Intuitive Interface:</strong> Get started in minutes with a user-friendly design that requires no technical expertise.</li>
    <li><strong>Powerful AI Engine:</strong> Leverage state-of-the-art algorithms to achieve high-quality results quickly and efficiently.</li>
    <li><strong>Seamless Integration:</strong> Connect with your favorite apps and platforms to create a unified and automated workflow.</li>
    <li><strong>Scalable Solutions:</strong> Whether you're a solo creator or a large enterprise, this tool scales to meet your needs.</li>
  </ul>
  <h3 class="text-xl font-bold text-gray-100 mt-6 mb-2">Who is it for?</h3>
  <p>This tool is perfect for content creators, marketers, designers, developers, and anyone looking to harness the power of AI. It helps professionals save time on repetitive tasks and focus on what truly matters: creating impactful work.</p>
`;

const soraLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="96" height="96" rx="10" stroke="currentColor" strokeWidth="4"/><path d="M30 70 C 40 50, 60 50, 70 70" stroke="currentColor" strokeWidth="4"/><path d="M30 30 C 40 50, 60 50, 70 30" stroke="currentColor" strokeWidth="4"/></svg>`;
const runwayLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 L 50 20 L 80 80 Z" stroke="currentColor" strokeWidth="4"/></svg>`;
const pikaLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20 H 80 V 80 H 20 Z" fill="currentColor"/><circle cx="50" cy="50" r="20" fill="black"/></svg>`;
const kaiberLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L 80 50 L 50 80 L 20 50 Z" stroke="currentColor" strokeWidth="4"/></svg>`;
const gen2Logo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="10" stroke="currentColor" strokeWidth="4"/><text x="50" y="60" textAnchor="middle" fill="currentColor" fontSize="30" fontWeight="bold">G2</text></svg>`;
const veedLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 25 L 50 75 L 75 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>`;
const synthesiaLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70 25 C 40 25, 40 75, 70 75" stroke="currentColor" strokeWidth="4"/><path d="M30 75 C 60 75, 60 25, 30 25" stroke="currentColor" strokeWidth="4"/></svg>`;
const invideoLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="25" width="10" height="50" fill="currentColor"/><path d="M55 25 L 75 50 L 55 75" stroke="currentColor" strokeWidth="4"/></svg>`;
const heygenLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 25 H 80 M 20 50 H 80 M 20 75 H 50" stroke="currentColor" strokeWidth="4" /><rect x="60" y="65" width="20" height="20" fill="currentColor"/></svg>`;
const lumaAiLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 C 80 10, 90 40, 90 50 S 80 90, 50 90 S 10 60, 10 50 S 20 10, 50 10" stroke="currentColor" strokeWidth="4"/></svg>`;
const captionsAiLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="60" height="40" rx="5" stroke="currentColor" strokeWidth="4"/><path d="M30 50 H 70" stroke="currentColor" strokeWidth="3"/><path d="M30 60 H 50" stroke="currentColor" strokeWidth="3"/></svg>`;


const pictoryLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20 V 80 H 80" stroke="currentColor" strokeWidth="4"/><path d="M40 40 L 60 60 M 60 40 L 40 60" stroke="currentColor" strokeWidth="4"/></svg>`;
const flikiLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 L 70 50 L 30 80 Z" stroke="currentColor" strokeWidth="4"/><path d="M70 20 V 80" stroke="currentColor" strokeWidth="4"/></svg>`;
const descriptLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="10" stroke="currentColor" strokeWidth="4"/><path d="M40 40 L 40 60 L 60 60" stroke="currentColor" strokeWidth="4"/></svg>`;
const opusClipLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 C 80 20, 80 80, 30 80" stroke="currentColor" strokeWidth="4"/><rect x="25" y="45" width="10" height="10" fill="currentColor"/></svg>`;

// New Video Tool Logos
const flexClipLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30 L 50 30 L 80 70 L 50 70 Z" stroke="currentColor" strokeWidth="4"/></svg>`;
const vislaLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 50 L 50 20 L 80 50 L 50 80 Z" stroke="currentColor" strokeWidth="4"/><path d="M50 20 V 80" stroke="currentColor" strokeWidth="2" stroke-dasharray="4 4"/></svg>`;
const elaiIoLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 L 70 20 L 70 80 L 30 80" stroke="currentColor" strokeWidth="4"/><path d="M30 50 H 70" stroke="currentColor" strokeWidth="4"/></svg>`;
const colossyanLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="10" stroke="currentColor" strokeWidth="4"/><rect x="35" y="35" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="4"/></svg>`;
const dIdLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 25 H 50 C 70 25, 70 75, 50 75 H 30" stroke="currentColor" strokeWidth="4"/></svg>`;
const hourOneLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="70" height="70" rx="10" stroke="currentColor" strokeWidth="4"/><path d="M50 25 V 50 H 75" stroke="currentColor" strokeWidth="4"/></svg>`;
const synthesysLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 C 40 40, 60 40, 80 80 M 20 20 C 40 60, 60 60, 80 20" stroke="currentColor" strokeWidth="4"/></svg>`;
const genmoLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 C 20 40, 20 60, 50 90 C 80 60, 80 40, 50 10" stroke="currentColor" strokeWidth="4"/></svg>`;
const moonvalleyLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70 20 A 30 30 0 1 0 70 80" stroke="currentColor" strokeWidth="4"/><path d="M65 25 A 25 25 0 1 0 65 75" fill="currentColor"/></svg>`;
const domoAiLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="60" height="60" rx="10" stroke="currentColor" strokeWidth="4"/><path d="M40 40 H 60 L 60 60" stroke="currentColor" strokeWidth="4"/></svg>`;
const viggleAiLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 Q 50 20 80 80" stroke="currentColor" strokeWidth="4"/><path d="M35 80 Q 50 50 65 80" stroke="currentColor" strokeWidth="4"/></svg>`;
const haiperAiLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 50 H 80 M 50 20 V 80" stroke="currentColor" strokeWidth="4"/><rect x="35" y="35" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="4"/></svg>`;

// New Long Video Tool Logos
const lumen5Logo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20 L 20 80 L 80 80" stroke="currentColor" strokeWidth="4"/><path d="M50 50 H 80 V 20 H 50 Z" fill="currentColor"/></svg>`;
const rawShortsLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 L 70 20 L 70 60 L 50 80 L 30 60 Z" stroke="currentColor" strokeWidth="4"/></svg>`;
const waveVideoLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 50 C 30 30, 50 70, 70 50 S 90 30, 90 30" stroke="currentColor" strokeWidth="4"/></svg>`;
const wisecutLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 50 L 80 50 M 50 20 L 40 50 L 50 80" stroke="currentColor" strokeWidth="4"/><path d="M70 35 L 70 65" stroke="currentColor" strokeWidth="4"/></svg>`;
const munchLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 C 50 20, 50 20, 80 80 Z" stroke="currentColor" strokeWidth="4"/><path d="M35 80 C 50 50, 50 50, 65 80" stroke="currentColor" strokeWidth="4"/></svg>`;
const vidyoAiLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30 L 50 70 L 80 30" stroke="currentColor" strokeWidth="4"/><rect x="45" y="65" width="10" height="10" fill="currentColor"/></svg>`;
const quickvidLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20 L 80 50 L 20 80 Z" stroke="currentColor" strokeWidth="4"/><path d="M50 35 L 80 50 L 50 65" stroke="currentColor" strokeWidth="2"/></svg>`;
const clipchampLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30 H 80 M 20 70 H 80 M 50 30 V 70" stroke="currentColor" strokeWidth="4"/><rect x="40" y="40" width="20" height="20" fill="currentColor"/></svg>`;
const typeStudioLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 V 80 M 20 20 H 40" stroke="currentColor" strokeWidth="4"/><path d="M60 20 L 60 80 L 80 80 L 80 50 L 60 50" stroke="currentColor" strokeWidth="4"/></svg>`;
const kamuaLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 V 20 L 50 50 L 80 20 V 80" stroke="currentColor" strokeWidth="4"/></svg>`;

// Placeholder logos for new categories
const genericWritingLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 L30 40 L50 60 L70 40 L80 80 M35 70 H 65" stroke="currentColor" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const genericAudioLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 40 V 60 M 40 30 V 70 M 50 20 V 80 M 60 30 V 70 M 70 40 V 60" stroke="currentColor" strokeWidth="4" stroke-linecap="round"/></svg>`;
const genericChatbotLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20 H 80 V 70 H 40 L 20 90 V 70 H 20 Z" stroke="currentColor" strokeWidth="4" stroke-linejoin="round"/></svg>`;
const genericCodeLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 40 L 20 50 L 30 60 M 70 40 L 80 50 L 70 60 M 45 30 L 55 70" stroke="currentColor" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const genericResearchLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="50" height="50" rx="5" stroke="currentColor" strokeWidth="4"/><path d="M65 65 L 80 80" stroke="currentColor" strokeWidth="4" stroke-linecap="round"/></svg>`;
const genericBusinessLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 V 30 H 80 V 80 M 20 80 H 80 M 40 80 V 60 H 60 V 80 M 40 50 H 60" stroke="currentColor" strokeWidth="4" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
const genericProductivityLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30 L 40 50 L 80 20 M 20 70 L 40 90 L 80 60" stroke="currentColor" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const genericDataLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 80 V 60 M 40 80 V 40 M 60 80 V 20 M 80 80 V 50" stroke="currentColor" strokeWidth="4" stroke-linecap="round"/></svg>`;
const genericEducationLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 40 L 50 20 L 80 40 L 50 60 Z" stroke="currentColor" strokeWidth="4" stroke-linejoin="round" stroke-linecap="round"/><path d="M30 50 V 70 C 30 80, 50 90, 50 90 C 50 90, 70 80, 70 70 V 50" stroke="currentColor" strokeWidth="4" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
const genericHealthcareLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 V 80 M 20 50 H 80" stroke="currentColor" strokeWidth="6" stroke-linecap="round"/><path d="M30 80 Q 50 60 70 80" stroke="currentColor" strokeWidth="4" stroke-linecap="round"/></svg>`;
const genericLegalFinanceLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 80 H 70 M 50 80 V 30 M 20 30 H 80" stroke="currentColor" strokeWidth="4" stroke-linecap="round"/><path d="M40 50 C 40 40, 60 40, 60 50 S 40 60, 60 60" stroke="currentColor" strokeWidth="4"/></svg>`;
const genericEcommerceLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 30 H 80 L 70 60 H 30 Z" stroke="currentColor" strokeWidth="4"/><rect x="30" y="70" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="4"/><rect x="60" y="70" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="4"/></svg>`;
const genericHrLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="25" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="4"/><path d="M30 80 C 40 60, 60 60, 70 80" stroke="currentColor" strokeWidth="4" stroke-linecap="round"/></svg>`;
const genericGamingLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 50 H 40 M 60 50 H 80 M 30 40 V 60 M 70 40 V 60" stroke="currentColor" strokeWidth="4" stroke-linecap="round"/><rect x="10" y="30" width="80" height="40" rx="10" stroke="currentColor" strokeWidth="4"/></svg>`;
const genericStorytellingLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 20 H 70 V 80 H 30 Z" stroke="currentColor" strokeWidth="4"/><path d="M30 80 L 50 70 L 70 80" stroke="currentColor" strokeWidth="4"/><path d="M40 35 H 60 M 40 50 H 60 M 40 65 H 50" stroke="currentColor" strokeWidth="3"/></svg>`;
const genericAutomationLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="25" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="4"/><rect x="55" y="55" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="4"/><path d="M35 45 V 65 H 55" stroke="currentColor" strokeWidth="4"/><path d="M45 35 H 65 V 55" stroke="currentColor" strokeWidth="4" stroke-dasharray="4 4"/></svg>`;
const genericSecurityLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 L 90 30 V 60 C 90 80, 50 90, 50 90 C 50 90, 10 80, 10 60 V 30 Z" stroke="currentColor" strokeWidth="4" stroke-linejoin="round"/><rect x="40" y="45" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="4"/><path d="M50 65 V 75" stroke="currentColor" strokeWidth="4"/></svg>`;
const genericSandboxLogo = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 70 L 30 30 H 70 L 80 70 H 20 Z" stroke="currentColor" strokeWidth="4"/><path d="M20 70 C 40 80, 60 80, 80 70" stroke="currentColor" strokeWidth="4"/></svg>`;

export const INITIAL_VIDEO_TOOLS: Tool[] = [
  { name: 'iMyFone', logo: '<img src="https://ik.imagekit.io/bensusx9i/unnamed-1_4_11zon.webp" alt="iMyFone Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.imyfone.com/', article: placeholderArticle },
  { name: 'Imagine art', logo: '<img src="https://ik.imagekit.io/bensusx9i/jjjjknbkm(1)(1)_5_11zon.webp" alt="Imagine art Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.imagine.art/', article: placeholderArticle },
  { name: 'Pollo Ai', logo: '<img src="https://ik.imagekit.io/bensusx9i/ljkhhkhkk(1)(1)_7_11zon.webp" alt="Pollo Ai Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.pollo.ai/', article: placeholderArticle },
  { name: 'Artist', logo: '<img src="https://ik.imagekit.io/bensusx9i/Copilot_20251019_125715(1)_11zon.png" alt="Artist Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://artist.ai/', article: placeholderArticle },
  { name: 'Vidnoz', logo: '<img src="https://ik.imagekit.io/bensusx9i/4KWfOYnR_400x400(1)(1)_11zon(1).jpg" alt="Vidnoz Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.vidnoz.com/', article: placeholderArticle },
  { name: 'Higgsfield', logo: '<img src="https://ik.imagekit.io/bensusx9i/higgsfield_logo(1)(1)_9_11zon.webp" alt="Higgsfield Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.higgsfield.com/', article: placeholderArticle },
  { name: 'VidFly', logo: '<img src="https://ik.imagekit.io/bensusx9i/vidfly-icon-filled-256(1)(1)(1)_15_11zon.webp" alt="VidFly Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://vidfly.ai/', article: placeholderArticle },
  { name: 'Leonardo', logo: '<img src="https://ik.imagekit.io/bensusx9i/leonardo-logo_1_-removebg-preview(1)_11_11zon.webp" alt="Leonardo Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://leonardo.ai/', article: placeholderArticle },
  { name: 'DeeVid AI', logo: '<img src="https://ik.imagekit.io/bensusx9i/22247730-deevid-logo-422x422-removebg-preview(1)_14_11zon.webp" alt="DeeVid AI Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://deevid.ai/', article: placeholderArticle },
  { name: 'PIXLR', logo: '<img src="https://ik.imagekit.io/bensusx9i/X4uS5WUa_400x400(1)(1)_13_11zon.webp" alt="PIXLR Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://pixlr.com/', article: placeholderArticle },
  { name: 'Zebracat', logo: '<img src="https://ik.imagekit.io/bensusx9i/zebracat-icon-filled-256(1)(1)_6_11zon.webp" alt="Zebracat Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.zebracat.ai/', article: placeholderArticle },
  { name: 'Fliki Ai', logo: '<img src="https://ik.imagekit.io/bensusx9i/fliki-icon-filled-256-1(1)_10_11zon.webp" alt="Fliki Ai Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://fliki.ai/', article: placeholderArticle },
];

export const INITIAL_IMAGE_TOOLS: Tool[] = [
  { name: 'Leonardo', logo: '<img src="https://ik.imagekit.io/bensusx9i/leonardo-logo_1_-removebg-preview(1)_11_11zon.webp" alt="Leonardo Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://leonardo.ai/', article: placeholderArticle },
];

export const LONG_VIDEO_TOOLS: Tool[] = [
  { name: 'Zebracat', logo: '<img src="https://ik.imagekit.io/bensusx9i/zebracat-icon-filled-256(1)(1)_6_11zon.webp" alt="Zebracat Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.zebracat.ai/', article: placeholderArticle },
  { name: 'Colossyan', logo: '<img src="https://ik.imagekit.io/bensusx9i/images(1)_8_11zon.webp" alt="Colossyan Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.colossyan.com/', article: placeholderArticle },
  { name: 'Fliki Ai', logo: '<img src="https://ik.imagekit.io/bensusx9i/fliki-icon-filled-256-1(1)_10_11zon.webp" alt="Fliki Ai Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://fliki.ai/', article: placeholderArticle },
  { name: 'VEED', logo: '<img src="https://ik.imagekit.io/bensusx9i/idZ6QLGyv0-removebg-preview_16_11zon.webp" alt="VEED Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.veed.io/', article: placeholderArticle },
  { name: 'Pictory', logo: '<img src="https://ik.imagekit.io/bensusx9i/pictory_500-removebg-preview(1)_18_11zon.webp" alt="Pictory Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://pictory.ai/', article: placeholderArticle },
  { name: 'Synthesia', logo: '<img src="https://ik.imagekit.io/bensusx9i/imagesfhvn_19_11zon.webp" alt="Synthesia Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.synthesia.io/', article: placeholderArticle },
  { name: 'HeyGen', logo: '<img src="https://ik.imagekit.io/bensusx9i/apps.10279.13b71432-e992-43be-af65-123449130199.19fc4577-aa0a-4a42-b54d-4d75859dc0c8_20_11zon.webp" alt="HeyGen Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.heygen.com/', article: placeholderArticle },
  { name: 'AKOOL', logo: '<img src="https://ik.imagekit.io/bensusx9i/akool_21_11zon.webp" alt="AKOOL Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://akool.com/', article: placeholderArticle },
  { name: 'Descript', logo: '<img src="https://ik.imagekit.io/bensusx9i/descript-icon-vrjwgsy86fm07riycz7zt63-removebg-preview(1)_22_11zon.webp" alt="Descript Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.descript.com/', article: placeholderArticle },
  { name: 'InVideo', logo: '<img src="https://ik.imagekit.io/bensusx9i/unnamedhfhb_24_11zon.webp" alt="InVideo Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://invideo.io/', article: placeholderArticle },
  { name: 'Ai Studios', logo: '<img src="https://ik.imagekit.io/bensusx9i/unnamedkhjknm_25_11zon.webp" alt="Ai Studios Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://aistudios.com/', article: placeholderArticle },
  { name: 'Elai', logo: '<img src="https://ik.imagekit.io/bensusx9i/imagesjhgjkbn_30_11zon.webp" alt="Elai Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://elai.io/', article: placeholderArticle },
  { name: 'Kapwing', logo: '<img src="https://ik.imagekit.io/bensusx9i/kapwing_23_11zon.webp" alt="Kapwing Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.kapwing.com/', article: placeholderArticle },
  { name: 'Renderforest', logo: '<img src="https://ik.imagekit.io/bensusx9i/RenderForest_2017-icon-removebg-preview_29_11zon.webp" alt="Renderforest Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.renderforest.com/', article: placeholderArticle },
];

export const VIRAL_SHORT_TOOLS: Tool[] = [
  { name: 'Short Ai', logo: '<img src="https://ik.imagekit.io/bensusx9i/219620309-removebg-preview(1)_26_11zon.webp" alt="Short Ai Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.short-ai.com/', article: placeholderArticle },
  { name: 'Klap', logo: '<img src="https://ik.imagekit.io/bensusx9i/7XMz-YQq_400x400-removebg-preview_27_11zon.webp" alt="Klap Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://klap.app/', article: placeholderArticle },
  { name: 'Quso Ai', logo: '<img src="https://ik.imagekit.io/bensusx9i/quso_ai_logo_28_11zon.webp" alt="Quso Ai Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://quso.ai/', article: placeholderArticle },
];

export const WRITING_TOOLS: Tool[] = [
    { name: 'Rytr', logo: '<img src="https://ik.imagekit.io/bensusx9i/jgjgjkkj_38_11zon.webp" alt="Rytr Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://rytr.me/', article: placeholderArticle },
    { name: 'Frase', logo: '<img src="https://ik.imagekit.io/bensusx9i/hkdffkhvb_37_11zon.webp" alt="Frase Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.frase.io/', article: placeholderArticle },
    { name: 'Grammarly', logo: '<img src="https://ik.imagekit.io/bensusx9i/jdjfvbjbj-removebg-preview_35_11zon.webp" alt="Grammarly Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://www.grammarly.com/', article: placeholderArticle },
    { name: 'Writesonic', logo: '<img src="https://ik.imagekit.io/bensusx9i/jkfhjvnv_34_11zon.webp" alt="Writesonic Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://writesonic.com/', article: placeholderArticle },
];

export const AUDIO_TOOLS: Tool[] = [
    { name: 'Murf.ai', logo: '<img src="https://ik.imagekit.io/bensusx9i/83059529_32_11zon.webp" alt="Murf.ai Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://murf.ai/', article: placeholderArticle },
    { name: 'ElevenLabs', logo: '<img src="https://ik.imagekit.io/bensusx9i/hfhhbn_31_11zon.webp" alt="ElevenLabs Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://elevenlabs.io/', article: placeholderArticle },
    { name: 'Speechify', logo: '<img src="https://ik.imagekit.io/bensusx9i/8f38b537a39fd6abb27fdc313e3f02f6_33_11zon.webp" alt="Speechify Logo" loading="lazy" style="object-fit: contain; width: 100%; height: 100%;" />', url: 'https://speechify.com/', article: placeholderArticle },
];

export const CHATBOT_TOOLS: Tool[] = [
    { name: 'ChatGPT', logo: soraLogo, url: 'https://chat.openai.com/', article: placeholderArticle },
    { name: 'Google Gemini', logo: genericChatbotLogo, url: 'https://gemini.google.com/', article: placeholderArticle },
    { name: 'Tidio', logo: genericChatbotLogo, url: 'https://www.tidio.com/', article: placeholderArticle },
    { name: 'ManyChat', logo: genericChatbotLogo, url: 'https://manychat.com/', article: placeholderArticle },
    { name: 'Drift', logo: genericChatbotLogo, url: 'https://www.drift.com/', article: placeholderArticle },
    { name: 'Intercom', logo: genericChatbotLogo, url: 'https://www.intercom.com/', article: placeholderArticle },
    { name: 'Character.AI', logo: genericChatbotLogo, url: 'https://character.ai/', article: placeholderArticle },
];

export const CODING_TOOLS: Tool[] = [
    { name: 'GitHub Copilot', logo: genericCodeLogo, url: 'https://github.com/features/copilot', article: placeholderArticle },
    { name: 'Replit', logo: genericCodeLogo, url: 'https://replit.com/', article: placeholderArticle },
    { name: 'Tabnine', logo: genericCodeLogo, url: 'https://www.tabnine.com/', article: placeholderArticle },
    { name: 'Amazon CodeWhisperer', logo: genericCodeLogo, url: 'https://aws.amazon.com/codewhisperer/', article: placeholderArticle },
    { name: 'Mutable.ai', logo: genericCodeLogo, url: 'https://mutable.ai/', article: placeholderArticle },
    { name: 'Sourcegraph Cody', logo: genericCodeLogo, url: 'https://sourcegraph.com/cody', article: placeholderArticle },
];

export const RESEARCH_TOOLS: Tool[] = [
    { name: 'Perplexity AI', logo: genericResearchLogo, url: 'https://www.perplexity.ai/', article: placeholderArticle },
    { name: 'Elicit', logo: genericResearchLogo, url: 'https://elicit.org/', article: placeholderArticle },
    { name: 'Scite', logo: genericResearchLogo, url: 'https://scite.ai/', article: placeholderArticle },
    { name: 'Consensus', logo: genericResearchLogo, url: 'https://consensus.app/', article: placeholderArticle },
    { name: 'ChatPDF', logo: genericResearchLogo, url: 'https://www.chatpdf.com/', article: placeholderArticle },
    { name: 'Semantic Scholar', logo: genericResearchLogo, url: 'https://www.semanticscholar.org/', article: placeholderArticle },
];

export const BUSINESS_TOOLS: Tool[] = [
    { name: 'HubSpot AI', logo: genericBusinessLogo, url: 'https://www.hubspot.com/artificial-intelligence', article: placeholderArticle },
    { name: 'Zendesk AI', logo: genericBusinessLogo, url: 'https://www.zendesk.com/service/ai-bots/', article: placeholderArticle },
    { name: 'Salesforce Einstein', logo: genericBusinessLogo, url: 'https://www.salesforce.com/products/einstein/overview/', article: placeholderArticle },
    { name: 'AdCreative.ai', logo: genericBusinessLogo, url: 'https://www.adcreative.ai/', article: placeholderArticle },
    { name: 'Surfer SEO', logo: genericBusinessLogo, url: 'https://surferseo.com/', article: placeholderArticle },
    { name: 'Gong', logo: genericBusinessLogo, url: 'https://www.gong.io/', article: placeholderArticle },
];

export const PRODUCTIVITY_TOOLS: Tool[] = [
    { name: 'Notion AI', logo: genericProductivityLogo, url: 'https://www.notion.so/product/ai', article: placeholderArticle },
    { name: 'Motion', logo: genericProductivityLogo, url: 'https://www.usemotion.com/', article: placeholderArticle },
    { name: 'Todoist', logo: genericProductivityLogo, url: 'https://todoist.com/', article: placeholderArticle },
    { name: 'Zapier', logo: genericProductivityLogo, url: 'https://zapier.com/', article: placeholderArticle },
    { name: 'Fireflies.ai', logo: genericProductivityLogo, url: 'https://fireflies.ai/', article: placeholderArticle },
    { name: 'SaneBox', logo: genericProductivityLogo, url: 'https://www.sanebox.com/', article: placeholderArticle },
];

export const DATA_TOOLS: Tool[] = [
    { name: 'Tableau', logo: genericDataLogo, url: 'https://www.tableau.com/', article: placeholderArticle },
    { name: 'Power BI', logo: genericDataLogo, url: 'https://powerbi.microsoft.com/', article: placeholderArticle },
    { name: 'Julius AI', logo: genericDataLogo, url: 'https://julius.ai/', article: placeholderArticle },
    { name: 'Polymer', logo: genericDataLogo, url: 'https://www.polymersearch.com/', article: placeholderArticle },
    { name: 'Databricks', logo: genericDataLogo, url: 'https://www.databricks.com/', article: placeholderArticle },
    { name: 'Akkio', logo: genericDataLogo, url: 'https://www.akkio.com/', article: placeholderArticle },
];

export const EDUCATION_TOOLS: Tool[] = [
    { name: 'Khanmigo', logo: genericEducationLogo, url: 'https://www.khanacademy.org/khan-labs', article: placeholderArticle },
    { name: 'Quizlet', logo: genericEducationLogo, url: 'https://quizlet.com/', article: placeholderArticle },
    { name: 'Gradescope', logo: genericEducationLogo, url: 'https://www.gradescope.com/', article: placeholderArticle },
    { name: 'Socratic', logo: genericEducationLogo, url: 'https://socratic.org/', article: placeholderArticle },
    { name: 'Coursera', logo: genericEducationLogo, url: 'https://www.coursera.org/', article: placeholderArticle },
];

export const HEALTHCARE_TOOLS: Tool[] = [
    { name: 'Ada Health', logo: genericHealthcareLogo, url: 'https://ada.com/', article: placeholderArticle },
    { name: 'Woebot Health', logo: genericHealthcareLogo, url: 'https://woebothealth.com/', article: placeholderArticle },
    { name: 'Babylon Health', logo: genericHealthcareLogo, url: 'https://www.babylonhealth.com/', article: placeholderArticle },
    { name: 'MyFitnessPal', logo: genericHealthcareLogo, url: 'https://www.myfitnesspal.com/', article: placeholderArticle },
];

export const LEGAL_FINANCE_TOOLS: Tool[] = [
    { name: 'LawGeex', logo: genericLegalFinanceLogo, url: 'https://www.lawgeex.com/', article: placeholderArticle },
    { name: 'Casetext', logo: genericLegalFinanceLogo, url: 'https://casetext.com/', article: placeholderArticle },
    { name: 'QuickBooks', logo: genericLegalFinanceLogo, url: 'https://quickbooks.intuit.com/', article: placeholderArticle },
    { name: 'TaxAct', logo: genericLegalFinanceLogo, url: 'https://www.taxact.com/', article: placeholderArticle },
];

export const ECOMMERCE_TOOLS: Tool[] = [
    { name: 'Jasper', logo: genericEcommerceLogo, url: 'https://www.jasper.ai/', article: placeholderArticle },
    { name: 'Optimove', logo: genericEcommerceLogo, url: 'https://www.optimove.com/', article: placeholderArticle },
    { name: 'Persado', logo: genericEcommerceLogo, url: 'https://persado.com/', article: placeholderArticle },
    { name: 'ChatGPT', logo: genericEcommerceLogo, url: 'https://chat.openai.com/', article: placeholderArticle },
];

export const HR_RECRUITING_TOOLS: Tool[] = [
    { name: 'HireVue', logo: genericHrLogo, url: 'https://www.hirevue.com/', article: placeholderArticle },
    { name: 'Textio', logo: genericHrLogo, url: 'https://textio.com/', article: placeholderArticle },
    { name: 'Paradox', logo: genericHrLogo, url: 'https://www.paradox.ai/', article: placeholderArticle },
    { name: 'Eightfold.ai', logo: genericHrLogo, url: 'https://eightfold.ai/', article: placeholderArticle },
];

export const GAMING_TOOLS: Tool[] = [
    { name: 'Inworld AI', logo: genericGamingLogo, url: 'https://inworld.ai/', article: placeholderArticle },
    { name: 'Scenario', logo: genericGamingLogo, url: 'https://www.scenario.com/', article: placeholderArticle },
    { name: 'Ludo.ai', logo: genericGamingLogo, url: 'https://ludo.ai/', article: placeholderArticle },
    { name: 'Charisma.ai', logo: genericGamingLogo, url: 'https://charisma.ai/', article: placeholderArticle },
];

export const STORYTELLING_TOOLS: Tool[] = [
    { name: 'Sudowrite', logo: genericStorytellingLogo, url: 'https://www.sudowrite.com/', article: placeholderArticle },
    { name: 'NovelAI', logo: genericStorytellingLogo, url: 'https://novelai.net/', article: placeholderArticle },
    { name: 'Plot Factory', logo: genericStorytellingLogo, url: 'https://plotfactory.com/', article: placeholderArticle },
    { name: 'Campfire', logo: genericStorytellingLogo, url: 'https://www.campfirewriting.com/', article: placeholderArticle },
];

export const AUTOMATION_TOOLS: Tool[] = [
    { name: 'Zapier', logo: genericAutomationLogo, url: 'https://zapier.com/', article: placeholderArticle },
    { name: 'Make', logo: genericAutomationLogo, url: 'https://www.make.com/', article: placeholderArticle },
    { name: 'IFTTT', logo: genericAutomationLogo, url: 'https://ifttt.com/', article: placeholderArticle },
    { name: 'n8n', logo: genericAutomationLogo, url: 'https://n8n.io/', article: placeholderArticle },
];

export const SEARCH_DISCOVERY_TOOLS: Tool[] = [
    { name: 'Perplexity AI', logo: genericResearchLogo, url: 'https://www.perplexity.ai/', article: placeholderArticle },
    { name: 'You.com', logo: genericResearchLogo, url: 'https://you.com/', article: placeholderArticle },
    { name: 'Phind', logo: genericResearchLogo, url: 'https://www.phind.com/', article: placeholderArticle },
    { name: 'Andi', logo: genericResearchLogo, url: 'https://andisearch.com/', article: placeholderArticle },
];

export const SECURITY_PRIVACY_TOOLS: Tool[] = [
    { name: 'Darktrace', logo: genericSecurityLogo, url: 'https://www.darktrace.com/', article: placeholderArticle },
    { name: 'CrowdStrike', logo: genericSecurityLogo, url: 'https://www.crowdstrike.com/', article: placeholderArticle },
    { name: 'Sift', logo: genericSecurityLogo, url: 'https://sift.com/', article: placeholderArticle },
    { name: 'Auth0', logo: genericSecurityLogo, url: 'https://auth0.com/', article: placeholderArticle },
];

export const EXPERIMENT_SANDBOX_TOOLS: Tool[] = [
    { name: 'Hugging Face', logo: genericSandboxLogo, url: 'https://huggingface.co/', article: placeholderArticle },
    { name: 'OpenAI Playground', logo: genericSandboxLogo, url: 'https://platform.openai.com/playground', article: placeholderArticle },
    { name: 'Replicate', logo: genericSandboxLogo, url: 'https://replicate.com/', article: placeholderArticle },
    { name: 'Google Colab', logo: genericSandboxLogo, url: 'https://colab.research.google.com/', article: placeholderArticle },
];