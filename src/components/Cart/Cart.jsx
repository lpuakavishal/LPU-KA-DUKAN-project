import React from 'react'
import "./Cart.scss"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Cart = () => {
    const data=[
        {
        id:1,
        img:"https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc:"sdkjbvodnfaiopwh vsajvbam vaosnva ljanvkann asvlkanslkdfj;aifjvn dav ajv ad vadov aoiaovnaojnvdlnvlka",
        isNew:true,
        title:"long Coat",
        oldPrice:19,
        price:12,
    },
];
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data.map((n) => (
        <div className="item" key={n.id}>
            <img src={n.img} />
        <div className="details">
            <h1>{n.title}</h1>
            <p>{n.desc.substring(0,80)}</p>
            <div className="price">1 X ${n.price}</div>
            </div>    
         <DeleteOutlineOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
          <span>SUBTOTAL</span>
          <span>$123</span>
      </div>
      <button>Proceed to checkout</button>
      <span className='reset'>reset cart</span>
    </div>
  )
}

export default Cart
