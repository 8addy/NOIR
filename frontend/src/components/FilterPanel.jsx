import { useState } from 'react'

const FilterPanel = ({ filters, onFilterChange, categories }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value)
  }

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between bg-noir-dark px-4 py-3 mb-4"
      >
        <span className="text-sm font-medium">Filters</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-6`}>
        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-semibold mb-3 tracking-wider">CATEGORY</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.name)}
                  onChange={() => handleFilterChange('category', cat.name)}
                  className="w-4 h-4 bg-noir-gray border-noir-gray text-white focus:ring-white"
                />
                <span className="text-sm text-noir-lighter">{cat.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-sm font-semibold mb-3 tracking-wider">PRICE</h3>
          <div className="space-y-2">
            {[
              { label: 'Under $500', min: 0, max: 500 },
              { label: '$500 - $1000', min: 500, max: 1000 },
              { label: '$1000 - $1500', min: 1000, max: 1500 },
              { label: 'Over $1500', min: 1500, max: Infinity }
            ].map((range) => (
              <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.priceRange.some(
                    r => r.min === range.min && r.max === range.max
                  )}
                  onChange={() => handleFilterChange('price', range)}
                  className="w-4 h-4 bg-noir-gray border-noir-gray text-white focus:ring-white"
                />
                <span className="text-sm text-noir-lighter">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            onFilterChange('clear', null)
            setIsOpen(false)
          }}
          className="text-sm text-noir-lighter hover:text-white underline"
        >
          Clear all filters
        </button>
      </div>
    </div>
  )
}

export default FilterPanel

