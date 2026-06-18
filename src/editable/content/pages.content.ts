import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press visibility, and announcement reach',
      description: 'Plan, publish, and discover media distribution campaigns, press releases, newsroom updates, and visibility reports.',
      openGraphTitle: 'Media distribution that moves announcements into view',
      openGraphDescription: 'A focused media distribution website for campaigns, public updates, press visibility, and publishing workflows.',
      keywords: ['media distribution', 'press release distribution', 'newswire', 'media campaigns'],
    },
    hero: {
      badge: 'Media distribution command center',
      title: ['Amplify Every', 'Media Moment'],
      description: 'Distribute announcements, press releases, launch updates, and campaign stories through a focused publishing experience built for discoverability.',
      primaryCta: { label: 'Browse media updates', href: '/media-distribution' },
      secondaryCta: { label: 'Plan a campaign', href: '/contact' },
      searchPlaceholder: 'Search releases, campaigns, outlets, and topics',
      focusLabel: 'Distribution focus',
      featureCardBadge: 'live desk',
      featureCardTitle: 'Latest campaigns shape the homepage conversation.',
      featureCardDescription: 'Recent releases, media angles, and visibility signals stay easy to scan without changing backend behavior.',
    },
    intro: {
      badge: 'Who we are',
      title: 'Your partner in media distribution and public visibility.',
      paragraphs: [
        'We help teams package announcements, organize campaign context, and make media updates easier for audiences to discover.',
        'The site keeps releases, categories, search, and publishing workflows connected so visitors can move from headline to detail without friction.',
        'Every page is tuned for media distribution: clear positioning, concise summaries, fast archive scanning, and practical contact paths.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Press release and announcement publishing workflows.',
        'Searchable archive for media updates and campaign stories.',
        'Clear campaign summaries without overloaded homepage cards.',
        'Contact and signup flows designed for media teams.',
      ],
      primaryLink: { label: 'Browse media archive', href: '/media-distribution' },
      secondaryLink: { label: 'Talk to the desk', href: '/contact' },
    },
    cta: {
      badge: 'Ready to distribute',
      title: 'Ready to dominate the media landscape?',
      description: 'Create a stronger distribution plan for launches, public updates, and press-ready announcements.',
      primaryCta: { label: 'Get Started', href: '/signup' },
      secondaryCta: { label: 'Contact the desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest media distribution posts in this section.',
    },
  },
  about: {
    badge: 'Who we are',
    title: 'A distribution partner for brands with something important to say.',
    description: `${slot4BrandConfig.siteName} helps announcements become organized, searchable, and ready for the audiences that matter.`,
    paragraphs: [
      'Media distribution works best when the message, source, audience, and next step are all clear. This site is built around that rhythm.',
      'We focus on press releases, public updates, campaign narratives, and structured discovery so each story can move beyond a single post.',
    ],
    values: [
      {
        title: 'Strategic positioning',
        description: 'We shape media updates around audience intent, clarity, and the distribution angle behind each campaign.',
      },
      {
        title: 'Publication-ready structure',
        description: 'Every layout gives headlines, summaries, categories, and actions room to breathe without stretching across the page.',
      },
      {
        title: 'Measurable visibility',
        description: 'Search, archive, and detail pages are designed to make campaigns easier to find and easier to evaluate.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Bring your next announcement to the media desk.',
    description: 'Share the campaign, release, or media distribution goal you want to move forward. We will help route it into the right publishing and visibility workflow.',
    formTitle: 'Send a distribution brief',
  },

  search: {
    metadata: {
      title: 'Search media distribution archive',
      description: 'Search releases, campaigns, categories, and media distribution posts across the site.',
    },
    hero: {
      badge: 'Search the media archive',
      title: 'Find releases, campaigns, and visibility stories faster.',
      description: 'Use keywords, categories, and content types to locate media distribution posts from every active section.',
      placeholder: 'Search by campaign, company, topic, category, or title',
    },
    resultsTitle: 'Latest media distribution content',
  },
  create: {
    metadata: {
      title: 'Create media content',
      description: 'Create and submit media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create media distribution content.',
      description: 'Use your account to open the publishing workspace and prepare press releases, campaign updates, and media posts.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a distribution-ready media post.',
      description: 'Choose the content type, add the campaign details, and prepare a clear post with source links, summary, and body content.',
    },
    formTitle: 'Distribution details',
    submitLabel: 'Submit media content',
    successTitle: 'Media content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to the media distribution workspace.',
      badge: 'Member access',
      title: 'Welcome back to the distribution desk.',
      description: 'Login to continue creating, searching, and managing media distribution submissions from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup for media distribution access.',
      badge: 'Distribution access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to access the media publishing workspace, save details, and submit distribution-ready content.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
