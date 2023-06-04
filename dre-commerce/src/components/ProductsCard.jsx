import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  const navigate=useNavigate();
  const _id = product.title;
  const idString=(_id)=>{
    return String(_id).toLowerCase().split("").join("");
  };
  const rootId = idString(_id)
  console.log(rootId);
  const handleDetails = () => {
    const encodedId = encodeURIComponent(rootId);
    navigate(`/product/${encodedId}`, {
      state: {
        item: product,
      },
    });
  };
  
  console.log(product)
  return (
    <div className="group">
      <div onClick={handleDetails} className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 30)}
            </h2>
          </div>
          <div className="flex gap-2 relative overflow-hidden w-28 text-sm">
            <div className=" gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="text-gray-500 mb-6">${product.price}</p>
            </div>
            <p
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900
            flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0
             transition-transform cursor-pointer duration-500"
            >
              
              add to cart
            </p>
          </div>
        </div>
        <div>
          <p className='text-sm'>{product.category}</p>
        </div>
        
      </div>
    </div>
  );
}

export default ProductsCard
