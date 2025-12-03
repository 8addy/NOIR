import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-noir-dark aspect-[3/4] mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
        <div>
          <h3 className="font-display text-lg mb-1 group-hover:text-white/80 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-noir-lighter mb-2">{product.category}</p>
          <p className="text-lg font-light">${product.price.toLocaleString()}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard

