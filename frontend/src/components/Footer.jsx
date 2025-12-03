import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-noir-dark border-t border-noir-gray mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-display font-bold mb-4">NOIR ATELIER</h2>
            <p className="text-sm text-noir-lighter font-light leading-relaxed">
              {t('home.hero.tagline')}
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider">{t('footer.shop')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collection/men" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('nav.men')}
                </Link>
              </li>
              <li>
                <Link to="/collection/women" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('nav.women')}
                </Link>
              </li>
              <li>
                <Link to="/collection/bags" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('nav.bags')}
                </Link>
              </li>
              <li>
                <Link to="/collection/shoes" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('nav.shoes')}
                </Link>
              </li>
              <li>
                <Link to="/collection/accessories" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('nav.accessories')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('footer.shipping')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-noir-lighter hover:text-white transition-colors">
                  {t('footer.returns')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider">{t('footer.newsletter')}</h3>
            <p className="text-sm text-noir-lighter mb-4 font-light">
              {t('footer.newsletterText')}
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t('home.newsletter.placeholder')}
                className="bg-noir-gray border border-noir-gray px-4 py-2 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-noir-lighter transition-colors"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-noir-gray mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-noir-lighter">
            © {new Date().getFullYear()} NOIR Atelier. {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-noir-lighter hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-xs text-noir-lighter hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

