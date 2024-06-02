export const metadata = {
  title: 'Home',
  description: 'Landing Page',
}

import Hero from '@/components/hero'
import Location from '@/components/location'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import Booking from '@/components/booking'

export default function Home() {
  return (
    <>
      <Hero />
      <Booking />
      <Services />
      <Location />
      <Testimonials />
    </>
  )
}
