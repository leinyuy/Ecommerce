import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products }) => {
  
  return (
    <div className='py-10'>
          <div className='flex flex-col items-center gap-4'>
              <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping Daily</h1>
              <span className='w-20 h-[3px] bg-black'></span>
              <p className='max-w-[700px] text-gray-600 text-center'>Welcome to Cartly, where you can find the best
                  products at competitive prices. We offer a wide range of Clothing products, from shoes to
                  hoods. Our mission is to provide our customers with a seamless online shopping experience, from browsing to
                  checkout.</p>
          </div>
          <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 text-center'>
        {
          products.map((item) => (
            <ProductsCard key={item.id} product={item} />
          ))
          
              }
          </div>
    </div>
  )
}

export default Products
