import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { deleteItem } from '../redux/cartlySlice';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


export const CartItem = () => {
    const dispatch=useDispatch()
    const productData = useSelector((state) => state.cartly.productData);
    
    return (
        <div>
            <div className='w-full'>
                <h2 className='font-titleFont text-2xl'>shopping cart</h2>
            </div>
            <div >
                {
                    productData.map((item) => (
                        <div
                            key={item.id}
                            className='flex items-center justify-between gap-6 mt-6'
                        >
                            <div className='flex items-center gap-2'>
                                <MdOutlineClose onClick={()=>dispatch(deleteItem(item.id))&
                                toast.error(`${item.title} is removed`)}
                                 className='text-xl text-gray-600 hover:text-red-600
                                cursor-pointer duration-300'/>
                                <img
                                className='w-32 h-32 object-cover'
                                src={item.image}
                                alt='productImg'
                                />
                            </div>
                            <div className='flex gap-6 items-center'>
                            <h2 className='w-52'>{item.title}</h2>
                            <p className='w-10'>${item.price}</p>

                             <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                            <p className='text-sm'>Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                                <span className='border h-5 font-normal text-lg flex items-center justify-center
           px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</span>
                                <span>1</span> 
                                <span className='border h-5 font-normal text-lg flex items-center justify-center
           px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
                                    +
                                </span>
                            </div>
                        </div>
                        <p className='w-14'>${item.quantity*item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
            
        </div>
    )
}

export default CartItem;