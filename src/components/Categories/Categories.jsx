import React from 'react'
import "./Categories.scss";
import {Link} from "react-router-dom";
const Categories = () => {
    return (
        <div className='Categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                    </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                        <button>
                        <Link className="link" to="/products/1" >
                            Sale
                        </Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                        <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories
