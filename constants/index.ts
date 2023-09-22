import healios1 from '@/assets/images/healios/1.png'
import ug1 from '@/assets/images/uncommongood/1.png'
import foodstream from '@/assets/images/foodstream.png'
import nutridoc from '@/assets/images/nutridoc.png'
import engage from '@/assets/images/engage.png'

export interface IProject {
  title: string
  description: string
  location: string
  teamSize: string
  frontEnd: string
  backEnd: string
  responsibilities: string[]
  images: string[] | null
  link: string | null
}

export const projects: IProject[] = [
  {
    title: 'Healios.io',
    link: 'https://healios.io/',
    description:
      'Healthcare digital tools that measure and collect health information to help improve research in neuroscience. Healios innovates digital technologies to provide solutions in clinical research and patient monitoring, utilizing patented Digital Biomarkers to measure motor and cognitive functions in neurological disorder patients with unprecedented sensitivity.',
    location: 'Madrid, Spain',
    frontEnd:
      'Javascript, HTML5, SASS (CSS), Vue 2, Vuex, Vite, Bootstrap, Storybook',
    backEnd: 'MongoDB, Express, Angular, and Node.js',
    responsibilities: [
      'Developed login and registration pages with email and password validation (including checking if email is already used and if the user has used the password before). Also created a reset password page with Regex validation.',
      'Built an "Add Participant" page with custom form components (such as text input, range, selectors, date picker) tested by Storybook and custom validation using Vue.',
      'Rendered all patient data on a configurable table using Bootstrap with custom columns (text, buttons, numbers, links, pictures). Implemented pagination for tables with many rows.',
      'Implemented logic to add, edit, and remove participants while checking user permissions.',
      ' Developed a role system with a list of user types and corresponding permissions (e.g. user A can request permission from user B to modify user C).',
      'Built a component library for reusable web components using Storybook',
      'Unit testing using Jest'
    ],
    teamSize: '14 developers, 2 designer, 1 QA, 7 managers, 1 COO (25)',
    images: [healios1]
  },
  {
    title: 'Uncommongood',
    link: 'https://uncommongood.io/',
    description:
      'UncommonGoods engagement platform cultivates a community oriented towards progress, providing access to fundraising tools, value-driven sweepstakes, volunteer opportunities, branding and storytelling support, and so much more.',
    location: 'NYC, USA',
    teamSize: '3 frontend, 2 backend, 2 designer, 1 QA, 1 PM (9)',
    frontEnd:
      'JavaScript, HTML5, SASS, Nuxt, Vue 2, Vuex, Strapi, Google maps, OpenServer, Docker',
    backEnd: 'PHP, Laravel, MySQL, Apache, PHPUnit, Redis',
    responsibilities: [
      'Designed and developed template emails for major email services including Gmail, Outlook, and Yahoo',
      'Designed the payment process page allows users to either select suggested amounts or input any desired amount to pay. The Strapi API then handles the payment process and confirms successful completion.',
      'Integrated Mailchimp service to send custom mail templates to subscribers.',
      'Optimized page load speed, reducing it from 4 seconds to 1.7 seconds.',
      'Developed a sorting and filtering system that recommends products to users based on filter settings using Vue, Vuex',
      'Implemented an items review system that includes comments, star ratings, and reviews.',
      'Created an article constructor using that provides various text styles including bullet points, font modification, alignment, indentation, and spacing (similar to MS Word)',
      'Designed custom layouts for mobile and tablet devices in-house using Nuxt' +
        'Integrated the Strapi payment system for seamless payment processing.'
    ],
    images: [ug1]
  },
  {
    title: 'Foodstream',
    link: 'https://foodstreamnetwork.com/',
    description:
      'UncommonGoods engagement platform cultivates a community oriented towards progress, providing access to fundraising tools, value-driven sweepstakes, volunteer opportunities, branding and storytelling support, and so much more.',
    location: 'NYC, USA',
    teamSize: '3 frontend, 2 backend, 2 designer, 1 QA, 1 PM (9)',
    frontEnd:
      'JavaScript, HTML5, SASS, Nuxt, Vue 2, Vuex, Strapi, Google maps, OpenServer, Docker',
    backEnd: 'PHP, Laravel, MySQL, Apache, PHPUnit, Redis',
    responsibilities: [],
    images: [foodstream]
  },
  {
    title: 'Nutridoc',
    link: 'https://www.nutridoc.it/',
    description:
      'UncommonGoods engagement platform cultivates a community oriented towards progress, providing access to fundraising tools, value-driven sweepstakes, volunteer opportunities, branding and storytelling support, and so much more.',
    location: 'NYC, USA',
    teamSize: '3 frontend, 2 backend, 2 designer, 1 QA, 1 PM (9)',
    frontEnd:
      'JavaScript, HTML5, SASS, Nuxt, Vue 2, Vuex, Strapi, Google maps, OpenServer, Docker',
    backEnd: 'PHP, Laravel, MySQL, Apache, PHPUnit, Redis',
    responsibilities: [],
    images: [nutridoc]
  },
  {
    title: 'Engage Jeweler',
    link: 'https://web.archive.org/web/20220217113051/https://www.engagejeweler.com/',
    description:
      'UncommonGoods engagement platform cultivates a community oriented towards progress, providing access to fundraising tools, value-driven sweepstakes, volunteer opportunities, branding and storytelling support, and so much more.',
    location: 'NYC, USA',
    teamSize: '3 frontend, 2 backend, 2 designer, 1 QA, 1 PM (9)',
    frontEnd:
      'JavaScript, HTML5, SASS, Nuxt, Vue 2, Vuex, Strapi, Google maps, OpenServer, Docker',
    backEnd: 'PHP, Laravel, MySQL, Apache, PHPUnit, Redis',
    responsibilities: [],
    images: [engage]
  }
]
