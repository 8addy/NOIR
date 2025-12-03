import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display mb-12 text-center">ABOUT NOIR ATELIER</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-display mb-6">OUR STORY</h2>
              <p className="text-noir-lighter leading-relaxed mb-4">
                NOIR Atelier was born from a vision of timeless elegance and minimalist sophistication. 
                Founded on the principle that true luxury lies in simplicity, we create pieces that 
                transcend trends and become permanent fixtures in your wardrobe.
              </p>
              <p className="text-noir-lighter leading-relaxed">
                Our name, "NOIR" (black in French), reflects our commitment to a monochrome aesthetic 
                that celebrates the power of black, white, and grayscale. Each piece is carefully 
                curated to embody understated luxury and impeccable craftsmanship.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display mb-6">PHILOSOPHY</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display mb-3">CRAFTSMANSHIP</h3>
                  <p className="text-noir-lighter leading-relaxed">
                    We believe in the art of meticulous craftsmanship. Every garment is designed with 
                    attention to detail, using premium materials sourced from the finest suppliers. 
                    Our commitment to quality ensures that each piece is not just clothing, but a 
                    work of art.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display mb-3">MINIMALISM</h3>
                  <p className="text-noir-lighter leading-relaxed">
                    Less is more. Our minimalist approach to design strips away the unnecessary, 
                    leaving only what is essential. We create pieces that speak through their 
                    simplicity, allowing the wearer's personality to shine through.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display mb-3">MONOCHROME STYLE</h3>
                  <p className="text-noir-lighter leading-relaxed">
                    Black, white, and shades of gray form the foundation of our aesthetic. This 
                    monochrome palette is not a limitation but a canvas for texture, silhouette, 
                    and form. It's a timeless language that never goes out of style.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display mb-6">OUR COMMITMENT</h2>
              <p className="text-noir-lighter leading-relaxed">
                At NOIR Atelier, we are committed to creating fashion that is both beautiful and 
                responsible. We work with partners who share our values of ethical production and 
                sustainable practices. Every piece in our collection is designed to last, reducing 
                the need for constant replacement and contributing to a more sustainable fashion 
                industry.
              </p>
            </section>

            <section className="pt-8">
              <div className="bg-noir-dark p-8 text-center">
                <p className="text-2xl font-display mb-4">Timeless. Minimal. Noir.</p>
                <p className="text-noir-lighter">
                  Join us in celebrating the art of understated elegance.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

