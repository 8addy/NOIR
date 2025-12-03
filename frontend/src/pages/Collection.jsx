import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'
import ProductCard from '../components/ProductCard'

const Collection = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.getProductsByCategory(category)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [category])

  const getCategoryName = (slug) => {
    const names = {
      men: 'Men\'s Collection',
      women: 'Women\'s Collection',
      bags: 'Bags',
      shoes: 'Shoes',
      accessories: 'Accessories'
    }
    return names[slug] || slug
  }

  if (loading) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-noir-lighter">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-display mb-12 text-center">
          {getCategoryName(category).toUpperCase()}
        </h1>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-noir-lighter">No products found in this collection.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Collection

