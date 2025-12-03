import { useState, useEffect } from 'react'
import { api } from '../services/api'
import ProductCard from '../components/ProductCard'
import FilterPanel from '../components/FilterPanel'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('latest')
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [],
    colors: [],
    sizes: [],
    materials: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [productsRes, categoriesRes] = await Promise.all([
          api.getProducts(),
          api.getCategories()
        ])
        setProducts(productsRes.data)
        setFilteredProducts(productsRes.data)
        setCategories(categoriesRes.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p =>
        filters.categories.includes(p.category)
      )
    }

    // Price filter
    if (filters.priceRange.length > 0) {
      filtered = filtered.filter(p => {
        return filters.priceRange.some(range => {
          if (range.max === Infinity) {
            return p.price >= range.min
          }
          return p.price >= range.min && p.price <= range.max
        })
      })
    }

    // Color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(p =>
        p.colors.some(c => filters.colors.includes(c))
      )
    }

    // Size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(p =>
        p.sizes.some(s => filters.sizes.includes(s))
      )
    }

    // Material filter
    if (filters.materials.length > 0) {
      filtered = filtered.filter(p =>
        filters.materials.includes(p.material)
      )
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'latest':
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }, [products, filters, sortBy])

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'clear') {
      setFilters({
        categories: [],
        priceRange: [],
        colors: [],
        sizes: [],
        materials: []
      })
      return
    }

    setFilters(prev => {
      const newFilters = { ...prev }
      
      if (filterType === 'category') {
        if (newFilters.categories.includes(value)) {
          newFilters.categories = newFilters.categories.filter(c => c !== value)
        } else {
          newFilters.categories = [...newFilters.categories, value]
        }
      } else if (filterType === 'price') {
        const exists = newFilters.priceRange.some(
          r => r.min === value.min && r.max === value.max
        )
        if (exists) {
          newFilters.priceRange = newFilters.priceRange.filter(
            r => !(r.min === value.min && r.max === value.max)
          )
        } else {
          newFilters.priceRange = [...newFilters.priceRange, value]
        }
      }

      return newFilters
    })
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
        <h1 className="text-5xl font-display mb-12 text-center">SHOP</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              categories={categories}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-noir-lighter">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-noir-dark border border-noir-gray px-4 py-2 text-sm focus:outline-none focus:border-white"
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-noir-lighter">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop

