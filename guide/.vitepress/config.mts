import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/guide/',
  title: "FOSSASIA Summit 2026",
  description: "Participant guide for international travelers for FOSSASIA Summit 2026 at Bangkok",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Guide', link: '/guide/' }
    //     ]
    //   }
    // ],
    sidebar: [
      {
        text: 'Participant Guide',
        items: [
          { text: 'Welcome & Quick Start', link: '#_1-welcome-information-quick-start' },

          {
            text: 'Pre-arrival & Visa', link: '#_2-pre-arrival-and-visa',
            collapsed: true,
            items: [
              { text: 'Digital Arrival Card (TDAC)', link: '#_2-1-digital-arrival-card-tdac' },
              { text: 'Visa Information', link: '#_2-2-visa-information' },
              { text: 'Power', link: '#_2-3-power' }
            ]
          },

          {
            text: 'Arrival at Airport', link: '#_3-arrival-at-airport',
            collapsed: true,
            items: [
              { text: 'Suvarnabhumi Airport (BKK)', link: '#_3-1-suvarnabhumi-airport-bkk' },
              { text: 'Don Mueang Airport (DMK)', link: '#_3-2-don-mueang-airport-dmk' }
            ]
          },

          { text: 'Connectivity (eSIM & SIM Cards)', link: '#_4-connectivity-esim-sim-cards' },
          { text: 'Payments (Cash, Card, QR)', link: '#_5-payments-cash-card-qr' },
          {
            text: 'Getting Around', link: '#_6-getting-around',
            collapsed: true,
            items: [
              { text: 'Trains', link: '#trains' },
              { text: 'Ride-Hailing Services', link: '#ride-hailing-services' },
              { text: 'Buses', link: '#buses' },
              { text: 'Tuk Tuk', link: '#tuk-tuk' },
              { text: 'Canal boats', link: '#canal-boats' },
              { text: 'River boats', link: '#river-boats' },
              { text: 'Bicycles', link: '#bicycles' }
            ]
          },
          {
            text: 'FOSSASIA Summit Venue', link: '#_7-fossasia-summit-venue',
            collapsed: true,
            items: [
              { text: 'Catering', link: '#_7-1-catering' },
              { text: 'Nursing Mothers', link: '#_7-2-nursing-mothers' },
              { text: 'Guests with Special Mobility Needs', link: '#_7-3-guests-with-special-mobility-needs' },
              { text: 'Parking', link: '#_7-4-parking' },
              { text: 'Lost and Found', link: '#_7-5-lost-and-found' }
            ]
          },

          {
            text: 'Conference Program and Social Media', link: '#_8-conference-program-and-social-media',
            collapsed: true,
            items: [
              { text: 'Conference Schedule', link: '#_8-1-conference-schedule' },
              { text: 'Social Media', link: '#_8-2-social-media' },
              { text: 'Conference Photo', link: '#_8-3-conference-photo' }
            ]
          },
          { text: 'Accommodation', link: '#_9-accommodation' },
          {
            text: 'Food in Bangkok', link: '#_10-food-in-bangkok',
            collapsed: true,
            items: [
              { text: 'Food', link: '#_10-1-food' },
              { text: 'Food Delivery Services', link: '#_10-2-food-delivery-services' },
              { text: 'Rooftop Bars', link: '#_10-3-rooftop-bars' },
              { text: 'Dessert / Afternoon Tea', link: '#_10-4-dessert-afternoon-tea' },
              { text: 'Must-try Dishes (local recommended)', link: '#_10-5-must-try-dishes-local-recommended' }
            ]
          },
          {
            text: 'Wellness & Leisure', link: '#_11-wellness-leisure',
            collapsed: true,
            items: [
              { text: 'Traditional Massage', link: '#_11-1-traditional-massage' },
              { text: 'Points of Interest', link: '#_11-2-points-of-interest' }
            ]
          },
          { text: 'Emergency Numbers', link: '#_12-emergency-numbers' }
        ]
      },
    ],
    socialLinks: [
      {
        icon: {
          svg: `<svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                  <path xmlns="http://www.w3.org/2000/svg" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                </svg>`
        },
        link: 'https://fossasia.org/'
      }
    ]
  },

})
