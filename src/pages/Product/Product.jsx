import React from 'react'
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Product = () => {
  const [selectImg, setselectImg] = useState(0);
  const [quantity,setquantity]=useState(1);
  const images = [
    "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"

  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setselectImg(0)} />
          <img src={images[1]} alt="" onClick={e => setselectImg(1)} />
        </div>

        <div className="mainImage">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam atque amet corporis dolore praesentium earum, eligendi at, delectus, tempore aliquid omnis ipsam cum esse iste nulla impedit beatae vitae repellat. Accusamus asperiores, accusantium at illum voluptatibus debitis dolorem nisi error, cum quibusdam deserunt suscipit magnam sint modi earum? Ullam molestiae non nulla, expedita officia quos odit necessitatibus repudiandae earum consectetur rem mollitia exercitationem quisquam fugiat dolorem excepturi ipsa nemo magnam voluptas. Explicabo quis dolore inventore necessitatibus quos velit dolor hic, excepturi vero doloribus quam tenetur at amet optio. Adipisci esse modi aperiam fugiat blanditiis laboriosam ad deserunt velit quos consequuntur.</p>
        <div className="quantity">
            <button onClick={e=>setquantity((prev)=>prev===1?1:prev-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={e=>setquantity(prev=>prev+1)}>+</button>
        </div>
       <button className='add'>
            <AddShoppingCartIcon />ADD TO CART
       </button>
       <div className="links">
        <div className="item">
             <FavoriteBorderIcon />
             ADD TO WISHLIST
        </div>
        <div className="item">
          <AccountBalanceWalletIcon/>
          COMAPARE TO
        </div>
       </div>
       {/* have to add some content to it */}
      </div>
    </div>
  )
}

export default Product
