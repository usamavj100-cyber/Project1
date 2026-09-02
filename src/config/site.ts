/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every piece of copy on the site lives here. Change text without touching a
 * single component. Layout is driven by geometry (see `tokens.ts`), never by
 * the length of the content that happens to be sitting in it today.
 * ---------------------------------------------------------------------------
 */

export const site = {
  /** Shown letter-by-letter in the hero. Keep it short — it is the poster. */
  displayWord: 'PORTFOLIO',
  /** Index of the character in `displayWord` that the face illustration replaces. */
  faceLetterIndex: 5, // P-O-R-T-F-[O]-L-I-O

  eyebrow: 'OPERATIONS / PLATFORM SPECIALIST',
  year: '2026',

  firstName: 'Mohammed Usama M',
  /**
   * The signature form the hero reveals as the visitor starts scrolling —
   * deliberately separate from `firstName`, which the introduction, the poster
   * and the contact note all use.
   */
  signatureName: 'USAMA.VJM',
  /** Leave empty until a surname is supplied — the black strip adapts either way. */
  lastName: '',

  /**
   * An invitation, not a job application. "Available to talk" rather than
   * "available for hire" is the whole difference between a personal site and
   * a job board, and it is carried by four words.
   */
  connect: {
    status: 'is available to talk',
    cta: "Let's connect",
    /** Points at the CONTACT section. Swap for a mailto: if you prefer. */
    href: '#contact',
  },

  intro: {
    heading: 'HELLO',
    lede: "Hi, I'm MOHAMMED USAMA M.",
    paragraphs: [
      'Performance-driven Operations Specialist with over 4 years of experience combining YouTube platform management with high-speed logistics data support.',
      'On the digital media side, I manage end-to-end channel workflows, ensure strict policy compliance, and utilize analytics to optimize platform visibility.',
      'On the logistics side, I demonstrate exceptional data integrity by managing 200+ CRM records daily and resolving 60+ critical support tickets while consistently exceeding operational targets by 130%.',
    ],
  },

  education: {
    heading: 'EDUCATION',
    items: [
      {
        degree: 'B.Sc. Software Computer Science',
        detail: 'Islamiah College (Thiruvalluvar University) | 2016 – 2019',
      },
    ],
  },

  skills: {
    heading: 'SKILLS',
    /**
     * Three columns, two rows, in file order as supplied.
     */
    items: [
      { label: 'Platform Operations', short: 'PO', src: '/assets/skills/photoshop.png', scale: 1 },
      { label: 'YouTube Analytics', short: 'YT', src: '/assets/skills/premiere-pro.png', scale: 1 },
      { label: 'CRM Management', short: 'CRM', src: '/assets/skills/figma.png', scale: 0.96 },
      { label: 'SEO & Metadata', short: 'SEO', src: '/assets/skills/claude.png', scale: 1 },
      { label: 'Logistics Operations', short: 'LO', src: '/assets/skills/procreate.png', scale: 1 },
      { label: 'Quality Assurance', short: 'QA', src: '/assets/skills/blender.png', scale: 1.06 },
    ] as { label: string; short: string; src: string | null; scale: number }[],
  },

  /**
   * THE STU — abbreviated on purpose. Do not expand it.
   */
  studio: {
    heading: 'THE STU',
    items: [
      {
        quote: "You can't compete with someone who's having fun.",
        author: 'Tiago Forte',
        rotation: -5,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
      {
        quote: 'He who is back again, never quit, quick to sail.',
        author: 'Lil Yachty',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        objectPosition: '56% 38%',
        href: null as string | null,
      },
      {
        quote:
          'I know of no better life purpose than to perish in attempting the great and the impossible.',
        author: 'Friedrich Nietzsche',
        rotation: 4,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
    ],
  },

  experience: {
    heading: 'EXPERIENCE',
    items: [
      { period: 'July 2023 – Present', role: 'Platform Operations & Content Specialist', company: 'MMU Reviews' },
      { period: 'Feb 2022 – June 2023', role: 'Logistics Operations Associate', company: 'BlackBuck (Zinka Logistics)' },
      { period: 'July 2019 – Dec 2021', role: 'Retail Operations & Customer Support Executive', company: 'Hatsun Agro Product' },
    ],
  },

  /**
   * The last page.
   */
  footer: {
    heading: "Let's connect",
    acknowledged: 'See you there',
    sub: 'Have an operational query, platform project, or simply want to connect?',
    /** The ask goes to your inbox. */
    href: 'mailto:usamavj100@gmail.com',
    marquee: ['USAMA', 'OPERATIONS', 'ANALYTICS'],
    links: [
      { label: 'Email', href: 'mailto:usamavj100@gmail.com' as string | null },
      { label: 'Phone', href: 'tel:7418392576' as string | null },
    ],
  },
} as const

export type Site = typeof site
