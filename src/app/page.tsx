import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black" data-scroll-container>
      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  )
}
