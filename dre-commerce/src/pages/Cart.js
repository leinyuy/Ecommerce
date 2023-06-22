import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../components/CartItem';

const Cart = () => {
  const productData=useSelector((state)=>state.cartly.productData);
  const [totalAmt, setTotalAmt]=useState("");
  useEffect(()=>{
    let price=0;
    productData.map((item)=>{
      price+=item.price*item.quantity;
      return price
    })
    price = Math.round(price * 10) / 10;
    setTotalAmt(price);
  },[productData])
  return (
    <div>
      <img className='w-full h-60 object-cover'
        src='https://cdn.pixabay.com/photo/2020/11/25/12/59/online-5775662_1280.png'
        alt='cartImg' />
      <div className='max-w-screen-xl mx-auto py-20 flex justify-between'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>
                $ {totalAmt}
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span> Lorem, ipsum dolor sit amet consectetur adipiscing elit. Quos,
                vertatis.
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>

            Total<span className='text-xl font-bold'>$ {totalAmt}</span>
          </p>
          <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
