import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">YOUR CART IS EMPTY</h1>
          <p className="text-noir-lighter mb-8">Start shopping to add items to your cart.</p>
          <Link
            to="/shop"
            className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-noir-lighter transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-display mb-12">SHOPPING CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col sm:flex-row gap-6 border-b border-noir-gray pb-6"
              >
                <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full sm:w-32 h-40 object-cover"
                  />
                </Link>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="text-xl font-display mb-2 hover:text-white/80 transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-noir-lighter mb-2">
                        {item.color} / {item.size}
                      </p>
                      <p className="text-lg font-light">${item.product.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-noir-lighter hover:text-white transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="text-sm">Quantity:</label>
                    <div className="flex items-center border border-noir-gray">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-noir-dark transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-noir-dark transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="ml-auto text-lg">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-noir-dark p-6 sticky top-32">
              <h2 className="text-2xl font-display mb-6">ORDER SUMMARY</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-noir-lighter">Subtotal</span>
                  <span>${getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-noir-lighter">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-noir-gray pt-4 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-xl">${getCartTotal().toLocaleString()}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-white text-black py-4 font-medium hover:bg-noir-lighter transition-colors mb-4"
              >
                PROCEED TO CHECKOUT
              </button>
              <Link
                to="/shop"
                className="block text-center text-sm text-noir-lighter hover:text-white transition-colors"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

