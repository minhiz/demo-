import React from 'react';
import "../../App.css";

export default function Banner() {
  return (
    
    <banner className="banner">
        <div>
                        <span className="tagline">JUST DO IT</span>
                        <div className="tagline-para">Nike has been your companion in happiness,
                            both big and small, for over 50 years.
                            Our roots are firmly grounded in Pakistan and with its people.
                        </div>
                        <br>
                        <br>
                        <br>
                        <div className="latest-header"/>
                            <hr className="line"/>
                            <span className="latest-designs">Latest Designs</span>
                            <hr className="line"/>
                            <br>
                            <br>
                            <div className="product-container image-gallery">
                                <div className="home-products">
                                    <img className="products-shoe-image" alt="Flex Experience Run 9" src="https://m.media-amazon.com/images/I/61WBg7crTQL._AC_SR700,525_.jpg"/>
                                    <h3 className="shoe-name">Flex Experience Run 9</h3>
                                    <h3 className="shoe-price">$65</h3>
                                </div>
                                <div className="home-products">
                                    <img className="products-shoe-image" alt="Flex Control 4" src="https://m.media-amazon.com/images/I/71Cc3JcCN7L._AC_SR700,525_.jpg"/>
                                    <h3 className="shoe-name">Flex Control 4</h3>
                                    <h3 className="shoe-price">$65</h3>
                                </div>
                                <div classNaem="home-products">
                                    <img className="products-shoe-image" alt="Air Max Motion 2" src="https://m.media-amazon.com/images/I/61IPQlMjDkL._AC_SR700,525_.jpg"/>
                                    <h3 className="shoe-name">Air Max Motion 2</h3>
                                    <h3 className="shoe-price">$84.95</h3>
                                </div>
                                <div className="home-products">
                                    <img className="products-shoe-image" alt="Phantom GT Club DF FG/MG" src="https://m.media-amazon.com/images/I/81kz-cAPItL._AC_SR700,525_.jpg"/>
                                    <h3 className="shoe-name">Phantom GT Club DF FG/MG</h3>
                                    <h3 className="shoe-price">$65</h3>
                                </div>
                            </div>
                            </br>
                            </br>
                            </br>
                            </br>
                            </br>
                            </div>
            </banner>    
                           
  )
}
