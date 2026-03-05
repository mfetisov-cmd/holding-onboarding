export type DocConfig = {
  key: string;
  name: string;
  desc: string;
  icon: 'doc' | 'users' | 'file';
};

export type BusinessTypeConfig = {
  label: string;
  title: string;
  subtitle: string;
  docs: DocConfig[];
};

export const DOC_CONFIGS: Record<string, BusinessTypeConfig> = {
  legal_entity: {
    label: 'Legal Entity',
    title: 'Open your account faster',
    subtitle:
      "We already pre-fill your application from public registries. Upload your company documents and we'll extract even more — so you can skip most of the typing.",
    docs: [
      {
        key: 'registry_extract',
        name: 'Handelsregisterauszug',
        desc: 'Company name, address, legal form, registration number',
        icon: 'doc',
      },
      {
        key: 'shareholder_list',
        name: 'Gesellschafterliste',
        desc: 'Shareholders and their ownership percentages',
        icon: 'users',
      },
      {
        key: 'articles',
        name: 'Satzung / Gesellschaftsvertrag',
        desc: 'Business purpose, share capital, articles of association',
        icon: 'file',
      },
    ],
  },
  freelance_non_reg: {
    label: 'Non-reg Freelancer',
    title: 'Open your account faster',
    subtitle:
      "We already pre-fill your application from public sources. Upload your Gewerbeanmeldung and we'll extract the rest — no typing needed.",
    docs: [
      {
        key: 'gewa',
        name: 'Gewerbeanmeldung',
        desc: 'Business name, activity, address, registration date',
        icon: 'doc',
      },
    ],
  },
  partnership: {
    label: 'Partnership',
    title: 'Open your account faster',
    subtitle:
      "We already pre-fill your application from public registries. Upload your partnership documents and we'll do the rest.",
    docs: [
      {
        key: 'partnership_agreement',
        name: 'Gesellschaftsvertrag',
        desc: 'Partners, ownership shares, business purpose',
        icon: 'file',
      },
      {
        key: 'registry_extract',
        name: 'Handelsregisterauszug',
        desc: 'Partnership name, address, legal form',
        icon: 'doc',
      },
    ],
  },
  freelance: {
    label: 'Reg. Freelancer',
    title: 'Open your account faster',
    subtitle:
      "We already pre-fill your application from public sources. Upload a document about your activity and we'll fill in the details for you.",
    docs: [
      {
        key: 'tax_registration',
        name: 'Steuernummer-Bescheid',
        desc: 'Tax number, freelance activity, address',
        icon: 'doc',
      },
    ],
  },
};

export const BUSINESS_TYPES = Object.keys(DOC_CONFIGS);
