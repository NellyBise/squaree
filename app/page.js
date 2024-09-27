import Header from './components/Header'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Stats from './components/Stats'
import Productivity from './components/Productivity'
import Apps from './components/Apps'
import Reviews from './components/Reviews'
import PricingCards from './components/PricingCards'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="max-w-screen overflow-hidden ">
      <Header></Header>
      <Hero />
      <Companies />
      <Stats />
      <Productivity />
      <Apps />
      <Reviews />
      <PricingCards />
      <Footer />
    </main>
  )
}
