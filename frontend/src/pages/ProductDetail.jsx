import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { api } from '../services/api'
import { useCart } from '../context/CartContext'
import Review from '../components/Review'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: ''
  })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.getProduct(id)
        const productData = response.data
        setProduct(productData)
        setSelectedColor(productData.colors[0])
        setSelectedSize(productData.sizes[0])

        // Fetch related products
        const allProducts = await api.getProducts()
        const related = allProducts.data
          .filter(p => p.category === productData.category && p.id !== productData.id)
          .slice(0, 4)
        setRelatedProducts(related)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error)
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select color and size')
      return
    }
    addToCart(product, selectedColor, selectedSize)
    alert('Added to cart!')
  }

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.addReview(id, reviewForm)
      // Refresh product to get updated reviews
      const response = await api.getProduct(id)
      setProduct(response.data)
      setReviewForm({ name: '', rating: 5, comment: '' })
      alert('Review submitted!')
    } catch (error) {
      console.error('Error submitting review:', error)
      alert('Error submitting review')
    }
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

  if (!product) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Product not found</p>
          <button
            onClick={() => navigate('/shop')}
            className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-noir-gray" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-noir-lighter">
          <button onClick={() => navigate('/shop')} className="hover:text-white">
            Shop
          </button>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-white' : 'border-noir-gray'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-display mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              {renderStars(parseFloat(product.rating))}
              <span className="text-noir-lighter">({product.reviews.length} reviews)</span>
            </div>
            <p className="text-3xl font-light mb-6">${product.price.toLocaleString()}</p>
            <p className="text-noir-lighter mb-8 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">COLOR</label>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-white bg-white text-black'
                        : 'border-noir-gray hover:border-white'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">SIZE</label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 transition-colors ${
                      selectedSize === size
                        ? 'border-white bg-white text-black'
                        : 'border-noir-gray hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-white text-black py-4 font-medium hover:bg-noir-lighter transition-colors mb-4"
            >
              ADD TO CART
            </button>

            {/* Product Details */}
            <div className="border-t border-noir-gray pt-6 space-y-4 text-sm">
              <div>
                <span className="font-medium">Material:</span> {product.material}
              </div>
              <div>
                <span className="font-medium">Type:</span> {product.type}
              </div>
              <div>
                <span className="font-medium">Stock:</span> {product.stock} available
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-display mb-8">REVIEWS</h2>
          {product.reviews.length > 0 ? (
            <div className="space-y-6 mb-12">
              {product.reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <p className="text-noir-lighter mb-12">No reviews yet.</p>
          )}

          {/* Review Form */}
          <form onSubmit={handleReviewSubmit} className="max-w-2xl">
            <h3 className="text-xl font-display mb-6">WRITE A REVIEW</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={reviewForm.name}
                onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                required
                className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
              />
              <div>
                <label className="block text-sm mb-2">Rating</label>
                <select
                  value={reviewForm.rating}
                  onChange={(e) => setReviewForm({ ...reviewForm, rating: parseInt(e.target.value) })}
                  className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                >
                  {[5, 4, 3, 2, 1].map(rating => (
                    <option key={rating} value={rating}>{rating} stars</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Your review"
                value={reviewForm.comment}
                onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                required
                rows="4"
                className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white resize-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 font-medium hover:bg-noir-lighter transition-colors"
              >
                SUBMIT REVIEW
              </button>
            </div>
          </form>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-display mb-8">RELATED PRODUCTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductDetail

