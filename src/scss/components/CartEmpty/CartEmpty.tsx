import React from 'react'
import { Link } from 'react-router-dom'

export const CartEmpty = () => {
    return(
          <div className="cart cart--empty">
            <h2>Cart is empty <span>😕</span></h2>
            <p>
              Well, you dont have orders right now.<br />
              If you want to order something please go to mainpage.
            </p>
            <img height={200} width={400}  src='/img/a8783c481ad779831d4791860b748092.jpg' alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Go back</span>
            </Link>
          </div>
    )
}