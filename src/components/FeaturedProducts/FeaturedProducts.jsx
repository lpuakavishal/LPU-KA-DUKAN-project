import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const data=[
  {
    id:1,
    img:"https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNew:true,
    title:"long Coat",
    oldPrice:19,
    price:12,

  },
  {
    id:2,
    img:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"long Coat",
    oldPrice:19,
    price:12,

  },
  {
    id:3,
    img:"https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"long Coat",
    oldPrice:19,
    price:12,

  },
  {
    id:4,
    img:"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:"long Coat",
    oldPrice:19,
    price:12,

  }
];


function H(n){
return (
  <Card
  key={n.id} 
  id={n.id}
  img={n.img}
  img2={n.img2}
  isNew={n.isNew}
  title={n.title}
  oldPrice={n.oldPrice}
  price={n.price}

    />
);

}

function FeaturedProducts(props){
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{props.type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map(H)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
