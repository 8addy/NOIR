import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: 'card'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would process the payment
    console.log('Checkout data:', { formData, cart, total: getCartTotal() })
    alert('Order placed successfully! (This is a demo)')
    clearCart()
    navigate('/')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-display mb-12">CHECKOUT</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Shipping Information */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-display mb-6">SHIPPING INFORMATION</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-6">PAYMENT METHOD</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="w-4 h-4 bg-noir-gray border-noir-gray text-white focus:ring-white"
                  />
                  <span>Credit Card</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                    className="w-4 h-4 bg-noir-gray border-noir-gray text-white focus:ring-white"
                  />
                  <span>PayPal</span>
                </label>
                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4 pt-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="bg-noir-dark border border-noir-gray px-4 py-3 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-noir-dark p-6 sticky top-32">
              <h2 className="text-2xl font-display mb-6">ORDER SUMMARY</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p>{item.product.name}</p>
                      <p className="text-noir-lighter text-xs">
                        {item.color} / {item.size} × {item.quantity}
                      </p>
                    </div>
                    <p>${(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                <div className="border-t border-noir-gray pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-noir-lighter">Subtotal</span>
                    <span>${getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-noir-lighter">Shipping</span>
                    <span>$0</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-noir-gray">
                    <span className="font-medium">Total</span>
                    <span className="text-xl">${getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-4 font-medium hover:bg-noir-lighter transition-colors"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout

