import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FOSSASIA Summit 2026",
  description: "Participant guide for international travelers for FOSSASIA Summit 2026 at Bangkok",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/guide/01-welcome' },
    ],
    sidebar: [
      {
        text: 'Participant Guide',
        items: [
          { text: 'Welcome & Quick Start', link: '/guide/01-welcome' },
          { 
            text: 'Pre-arrival and Visa', link: '/guide/02-pre-arrival',
            collapsed: true,
            items: [
              { text: 'Digital Arrival Card (TDAC)', link: '/guide/02-pre-arrival#digital-arrival-card-tdac' },
              { text: 'Visa Information', link: '/guide/02-pre-arrival#visa-information' },
              { text: 'Power', link: '/guide/02-pre-arrival#power' }
            ]
          },
          {
            text: 'Arrival at Airport', link: '/guide/03-arrival',
            collapsed: true,
            items: [
              { text: 'Suvarnabhumi Airport (BKK)', link: '/guide/03-arrival#suvarnabhumi-airport-bkk' },
              { text: 'Don Mueang Airport (DMK)', link: '/guide/03-arrival#don-mueang-airport-dmk' }
            ]
          },
          { text: 'Connectivity (eSIM & SIM Cards)', link: '/guide/04-connectivity' },
          { text: 'Payments (Cash, Card, QR)', link: '/guide/05-payments' },
          {
            text: 'Getting Around', link: '/guide/06-getting-around',
            collapsed: true,
            items: [
              { text: 'Trains', link: '/guide/06-getting-around#trains' },
              { text: 'Ride-Hailing Services', link: '/guide/06-getting-around#ride-hailing-services' },
              { text: 'Buses', link: '/guide/06-getting-around#buses' },
              { text: 'Tuk Tuk', link: '/guide/06-getting-around#tuk-tuk' },
              { text: 'Canal boats', link: '/guide/06-getting-around#canal-boats' },
              { text: 'River boats', link: '/guide/06-getting-around#river-boats' },
              { text: 'Bicycles', link: '/guide/06-getting-around#bicycles' }
            ]
          },
          {
            text: 'FOSSASIA Summit Venue', link: '/guide/07-fossasia-summit-venue',
            collapsed: true,
            items: [
              { text: 'Catering', link: '/guide/07-fossasia-summit-venue#catering' },
              { text: 'Nursing Mothers', link: '/guide/07-fossasia-summit-venue#nursing-mothers' },
              { text: 'Guests with Special Mobility Needs', link: '/guide/07-fossasia-summit-venue#guests-with-special-mobility-needs' },
              { text: 'Parking', link: '/guide/07-fossasia-summit-venue#parking' },
              { text: 'Lost and Found', link: '/guide/07-fossasia-summit-venue#lost-and-found' }
            ]
          },
          {
            text: 'Conference Program and Social Media', link: '/guide/08-conference-program-and-social-media',
            collapsed: true,
            items: [
              { text: 'Conference Schedule', link: '/guide/08-conference-program-and-social-media#conference-schedule' },
              { text: 'Social Media', link: '/guide/08-conference-program-and-social-media#social-media' },
              { text: 'Conference Photo', link: '/guide/08-conference-program-and-social-media#conference-photo' }
            ]
          },
          { text: 'Accommodation', link: '/guide/09-accommodation' },
          {
            text: 'Food in Bangkok', link: '/guide/10-food-in-bangkok',
            collapsed: true,
            items: [
              { text: 'Food', link: '/guide/10-food-in-bangkok#food' },
              { text: 'Food Delivery Services', link: '/guide/10-food-in-bangkok#food-delivery-services' },
              { text: 'Rooftop Bars', link: '/guide/10-food-in-bangkok#rooftop-bars' },
              { text: 'Dessert / Afternoon Tea', link: '/guide/10-food-in-bangkok#dessert-afternoon-tea' },
              { text: 'Must-try Dishes (local recommended)', link: '/guide/10-food-in-bangkok#must-try-dishes-local-recommended' }
            ]
          },
          {
            text: 'Wellness & Leisure', link: '/guide/11-wellness-and-leisure',
            collapsed: true,
            items: [
              { text: 'Traditional Massage', link: '/guide/11-wellness-and-leisure#traditional-massage' },
              { text: 'Points of Interest', link: '/guide/11-wellness-and-leisure#points-of-interest' }
            ]
          },
          { text: 'Emergency Numbers', link: '/guide/12-emergency' }
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
