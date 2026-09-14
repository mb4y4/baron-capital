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
  {
    slug: 'trade-finance',
    name: 'Trade Finance',
    tagline: 'Win tenders and execute contracts with confidence.',
    description:
      'Baron Capital provides trade-finance solutions that help contractors, suppliers and established businesses secure opportunities, execute contracts and manage working-capital requirements.',
    introParagraphs: [
      'Our trade-finance instruments are structured and arranged through approved partner financial institutions, subject to assessment, documentation and approval.',
    ],
    features: [],
    howItWorks: [],
    instruments: [
      {
        title: 'Bid Bonds',
        description:
          'A bid bond, also known as tender security, supports businesses participating in tenders by assuring the procuring entity that the bidder will honour the tender terms if awarded the contract.',
      },
      {
        title: 'Performance Bonds',
        description:
          'A performance bond assures the employer or contracting authority that the contractor will fulfil their contractual obligations according to the agreed terms.',
      },
      {
        title: 'Advance Payment Guarantees',
        description:
          'This guarantee protects an employer who makes an advance payment to a contractor or supplier. It assures repayment if the contractor fails to apply the advance toward the intended contract.',
      },
      {
        title: 'Payment Guarantees',
        description:
          'A payment guarantee assures a supplier or service provider that payment will be made for goods or services supplied under an agreed commercial arrangement.',
      },
      {
        title: 'Retention Money Guarantees',
        description:
          'A retention money guarantee allows a contractor to access funds that would otherwise be withheld until completion of the defects-liability period, while providing the employer with continued financial protection.',
      },
      {
        title: 'LPO Financing',
        description:
          'We provide financing against confirmed Local Purchase Orders to help businesses acquire goods, pay suppliers and successfully execute supply contracts.',
      },
      {
        title: 'Contract Financing',
        description:
          'Contract financing provides working capital to contractors and suppliers undertaking confirmed projects. Funds may be used for approved project expenses, including materials, labour, equipment and other direct execution costs.',
      },
      {
        title: 'Invoice Discounting',
        description:
          'Businesses with approved, completed and invoiced supplies can access funds before their customers settle the invoices. This helps improve cash flow and maintain day-to-day operations.',
      },
      {
        title: 'Certificate Discounting',
        description:
          'Contractors with certified work certificates can access financing against expected payments from reputable government institutions, corporations and other approved organizations.',
      },
    ],
    whyChooseUs: [
      'Fast and professional assessment',
      'Flexible financing structures',
      'Support for contractors, suppliers and established businesses',
      'Solutions tailored to individual contracts and transactions',
      'Access to approved partner financial institutions',
      'Transparent documentation and clear repayment terms',
    ],
    closingHeading: 'Grow your business with confidence',
    closingParagraph:
      'Whether you are bidding for a contract, financing an awarded project or waiting for payment on completed work, Baron Capital can structure a solution to help you move forward.',
    disclaimer:
      'All facilities and guarantees are subject to assessment, satisfactory documentation, applicable fees and approval. Terms and conditions apply.',
  },
]

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug)