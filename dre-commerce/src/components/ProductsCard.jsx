import React from 'react'


const ProductsCard = ({ product }) => {
  console.log(product)
  return (
    <div className='group'>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img className='w-full object-cover group-hover:scale-110 duration-500' src={product.image} alt="productImg" />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div>
          <div className='flex justify-be
          '>
            <h2 className='font-titleFont text-base font-bold'>{product.title}</h2> 
            <div>
              <p>${ product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard
