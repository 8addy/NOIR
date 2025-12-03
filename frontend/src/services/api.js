import { products, categories } from '../data/mockData'

// Simulate async API calls with promises for compatibility
const delay = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
  getProducts: async () => {
    await delay()
    return { data: products }
  },
  getProduct: async (id) => {
    await delay()
    const product = products.find(p => p.id === parseInt(id))
    if (!product) {
      throw new Error('Product not found')
    }
    return { data: product }
  },
  getCategories: async () => {
    await delay()
    return { data: categories }
  },
  getProductsByCategory: async (category) => {
    await delay()
    const categoryName = category.toLowerCase()
    const filtered = products.filter(p => 
      p.category.toLowerCase() === categoryName
    )
    return { data: filtered }
  },
  addReview: async (productId, review) => {
    await delay()
    const product = products.find(p => p.id === parseInt(productId))
    
    if (!product) {
      throw new Error('Product not found')
    }

    const { name, rating, comment } = review
    
    if (!name || !rating || !comment) {
      throw new Error('Missing required fields')
    }

    const newReview = {
      id: product.reviews.length + 1,
      name,
      rating: parseInt(rating),
      comment,
      date: new Date().toISOString()
    }

    product.reviews.push(newReview)
    
    // Recalculate average rating
    const totalRating = product.reviews.reduce((sum, r) => sum + r.rating, 0)
    product.rating = (totalRating / product.reviews.length).toFixed(1)

    return { 
      success: true, 
      review: newReview, 
      product 
    }
  },
  submitContact: async (data) => {
    await delay()
    const { name, email, message } = data
    
    if (!name || !email || !message) {
      throw new Error('Missing required fields')
    }

    // In a static app, we just log to console
    console.log('Contact form submission:', { 
      name, 
      email, 
      phone: data.phone, 
      message, 
      timestamp: new Date() 
    })
    
    return { 
      success: true, 
      message: 'Thank you for contacting us. We will get back to you soon.' 
    }
  }
}
