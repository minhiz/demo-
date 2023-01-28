import React from 'react';
import "../../App.css";

export default function Header() {
  return (
    <header className="header">
                    <h1 className="shoes">Nike Shoes</h1>
                    <div className="nav-header">
                        <nav>
                            <h2>
                                <img className="logo" src="/images/nike.32790f519310e9ae651390bb9d03d927.svg" title="Nike logo" alt="Nike Logo"/>
                                <a className="hvr-underline-from-center nav-link active" href="/"> Home </a>
                                <a className="hvr-underline-from-center nav-link" href="/about"> About </a>
                                <a className="hvr-underline-from-center nav-link" href="/product"> Products </a>
                
                                    <a className="hvr-underline-from-center nav-link" href="/cart">
                                        <img alt="cart" title="cart" class="nav-cart" src="/images/cart7.f2ed3ed3e844d33194d2ca566b30ef91.svg"/>
                                    </a>
                            </h2>
                        </nav>
                        </div>
                </header>
  )
}

