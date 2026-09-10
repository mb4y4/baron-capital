import type { Product } from '@/types'

export const products: Product[] = [
  {
    slug: 'logbook-loan',
    name: 'Logbook Loan',
    tagline: 'Keep driving. Get cash.',
    description:
      'Unlock the value of your vehicle without giving up the keys. Fast approval, fair terms.',
    features: ['Up to 80% financing', 'Fast approval', 'Flexible repayment'],
    howItWorks: [
      'Bring your logbook and ID for a quick valuation',
      'Get approved, often within hours',
      'Drive away with cash in your account',
    ],
  },
  {
    slug: 'title-deed-loan',
    name: 'Title Deed Loan',
    tagline: 'Keep your land. Unlock its value.',
    description:
      'Secure funding against your land title without selling it. Flexible terms built around you.',
    features: ['Secure funding without selling land', 'Flexible terms', 'Transparent valuation'],
    howItWorks: [
      'Submit your title deed for valuation',
      'Receive a same-week offer',
      'Access funds while you keep ownership',
    ],
  },
  {
    slug: 'asset-finance',
    name: 'Asset Finance',
    tagline: 'Upgrade without upfront cash.',
    description:
      'Finance vehicles, machinery, and equipment so your business can grow without draining cash flow.',
    features: ['Finance vehicles, machinery, equipment', 'Preserve working capital', 'Flexible terms'],
    howItWorks: [
      'Tell us what asset you need',
      'We structure a financing plan',
      'Take delivery and repay over time',
    ],
  },
  {
    slug: 'trade-finance',
    name: 'Trade Finance (Bid Bonds)',
    tagline: 'Win tenders without tying up cash.',
    description:
      'Bid bonds and trade finance that let you compete for contracts without locking up capital.',
    features: ['Up to KES 10M in 1 hour', 'No cash upfront', 'Tender-ready fast'],
    howItWorks: [
      'Share your tender documents',
      'Get your bid bond issued fast',
      'Submit your bid with confidence',
    ],
  },
  {
    slug: 'cargo-clearance-finance',
    name: 'Cargo Clearance Finance',
    tagline: 'Clear goods now, pay as you sell.',
    description:
      'Free up your cargo at the port without upfront cash, and repay as you sell your goods.',
    features: ['No upfront cash', 'Smooth clearance', 'Repay as you sell'],
    howItWorks: [
      'Send us your shipping documents',
      'We finance the clearance costs',
      'Repay flexibly as goods move',
    ],
  },
]

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug)
