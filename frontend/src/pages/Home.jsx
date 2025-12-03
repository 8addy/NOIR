import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { api } from '../services/api'
import { useTranslation } from '../hooks/useTranslation'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const { t } = useTranslation()
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [showNewsletter, setShowNewsletter] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.getProducts()
        // Get first 4 products as featured
        setFeaturedProducts(response.data.slice(0, 4))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', newsletterEmail)
    setShowNewsletter(false)
    setNewsletterEmail('')
    alert('Thank you for subscribing!')
  }

  const collections = [
    { nameKey: 'nav.men', path: '/collection/men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800' },
    { nameKey: 'nav.women', path: '/collection/women', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800' },
    { nameKey: 'nav.bags', path: '/collection/bags', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800' },
    { nameKey: 'nav.shoes', path: '/collection/shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800' },
    { nameKey: 'nav.accessories', path: '/collection/accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800' }
  ]

  const brandValues = [
    {
      titleKey: 'home.philosophy.craftsmanship.title',
      descriptionKey: 'home.philosophy.craftsmanship.description',
      icon: '✨'
    },
    {
      titleKey: 'home.philosophy.minimalism.title',
      descriptionKey: 'home.philosophy.minimalism.description',
      icon: '🎨'
    },
    {
      titleKey: 'home.philosophy.quality.title',
      descriptionKey: 'home.philosophy.quality.description',
      icon: '💎'
    }
  ]

  const testimonials = [
    {
      name: 'Sophie Laurent',
      role: 'Fashion Editor',
      quote: 'NOIR Atelier embodies everything I love about minimal luxury. Each piece is a statement of refined elegance.',
      rating: 5
    },
    {
      name: 'Alexander Chen',
      role: 'Designer',
      quote: 'The quality and attention to detail is exceptional. These pieces will be in my wardrobe for years to come.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Stylist',
      quote: 'Perfect for building a capsule wardrobe. Timeless, elegant, and incredibly well-made.',
      rating: 5
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 tracking-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-noir-lighter">
            {t('home.hero.tagline')}
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-noir-lighter transition-colors"
          >
            {t('home.hero.cta')}
          </Link>
        </motion.div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 px-4 bg-noir-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">{t('home.philosophy.title')}</h2>
            <p className="text-lg text-noir-lighter max-w-3xl mx-auto leading-relaxed">
              {t('home.philosophy.description')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-display mb-3">{t(value.titleKey)}</h3>
                <p className="text-noir-lighter leading-relaxed">{t(value.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">{t('home.collections.title')}</h2>
            <p className="text-noir-lighter text-lg">{t('home.collections.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={collection.path} className="group block">
                  <div className="relative overflow-hidden bg-noir-dark aspect-[3/4] mb-4">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-lg font-light tracking-widest">EXPLORE</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-display text-center group-hover:text-white/80 transition-colors">
                    {t(collection.nameKey)}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-noir-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">{t('home.featured.title')}</h2>
            <p className="text-noir-lighter text-lg">{t('home.featured.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block border border-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors"
            >
              {t('home.featured.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Lookbook Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">{t('home.editorial.title')}</h2>
            <p className="text-noir-lighter text-lg">{t('home.editorial.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden aspect-[4/5] bg-noir-dark"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
                alt="Editorial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-display mb-2">{t('home.editorial.spring.title')}</h3>
                  <p className="text-noir-lighter">{t('home.editorial.spring.subtitle')}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden aspect-[4/5] bg-noir-dark"
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
                alt="Editorial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-display mb-2">{t('home.editorial.monochrome.title')}</h3>
                  <p className="text-noir-lighter">{t('home.editorial.monochrome.subtitle')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-noir-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-noir-lighter text-lg">{t('home.testimonials.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-black/50 p-8 border border-noir-gray"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-noir-lighter mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-noir-lighter">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">{t('home.newsletter.title')}</h2>
            <p className="text-noir-lighter mb-8 font-light text-lg">
              {t('home.newsletter.subtitle')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t('home.newsletter.placeholder')}
                required
                className="flex-1 bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 font-medium hover:bg-noir-lighter transition-colors"
              >
                {t('home.newsletter.subscribe')}
              </button>
            </form>
            <p className="text-xs text-noir-lighter mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-noir-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">{t('home.cta.title')}</h2>
            <p className="text-lg text-noir-lighter mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="inline-block bg-white text-black px-8 py-4 font-medium hover:bg-noir-lighter transition-colors"
              >
                {t('home.cta.shopNow')}
              </Link>
              <Link
                to="/about"
                className="inline-block border border-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-colors"
              >
                {t('home.cta.learnMore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

