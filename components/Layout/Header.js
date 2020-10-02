import React, { useState, useEffect } from "react";
import axios from 'axios';

function Header() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios.get('https://api.lookstyle.com.au/categories')
      .then(response => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(categories.response)

  return (
   <>


<header id="header" class="sticky-nav">
   <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
         <div class="w-100 d-lg-none"></div>
         <div class="category-menu navbar-collapse collapse" id="basic-navbar-nav">
            <div class="cat-body">
               <div class="cat-label d-lg-none"><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>Shop by category</div>
               <div class="mobile-menu-body">
                  <li class="false">
                     <a class="d-none d-lg-inline" href="javascript:void(0);">Women</a><a class="d-lg-none" href="javascript:void(0);">Women</a>
                     <div class="menu-body mega-menu">
                        <a class="sub-cat-back" href="javascript:void(0);">Women</a>
                        <div class="menu-container">
                           <ul class="menu-row">
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/dresses/">Dresses</a></li>
                                    <li><a href="/category/cocktail-dresses/">Cocktail Dresses</a></li>
                                    <li><a href="/category/party-dresses/">Party Dresses</a></li>
                                    <li><a href="/category/formal-dresses/">Formal Dresses</a></li>
                                    <li><a href="/category/bridesmaid-dresses/">Bridesmaid Dresses</a></li>
                                    <li><a href="/category/bodycon-dresses/">Bodycon Dresses</a></li>
                                    <li><a href="/category/t-shirt-Dresses/">T-shirt Dresses</a></li>
                                    <li class="view-all"><a href="/category/dresses/">View All</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/tops/">Tops</a></li>
                                    <li><a href="/category/cami-tops/">Cami Tops</a></li>
                                    <li><a href="/category/tank-tops/">Tank Tops</a></li>
                                    <li><a href="/category/crop-tops/">Crop Tops</a></li>
                                    <li><a href="/category/womens-short-sleeve-tops/">Short Sleeve Tops</a></li>
                                    <li><a href="/category/womens-long-sleeve-tops/">Long Sleeve Tops</a></li>
                                    <li class="view-all"><a href="/category/tops/">View All</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-coats-&amp;-jackets/">Coats &amp; Jackets</a></li>
                                    <li><a href="/category/womens-bomber-jackets/">Bomber Jackets</a></li>
                                    <li><a href="/category/womens-biker-jackets/">Biker Jackets</a></li>
                                    <li><a href="/category/womens-leather-jackets/">Leather Jackets</a></li>
                                    <li><a href="/category/womens-denim-jackets/">Denim Jackets</a></li>
                                    <li><a href="/category/womens-coats/">Coats</a></li>
                                    <li><a href="/category/womens-blazers/">Blazers</a></li>
                                    <li><a href="/category/womens-vests-jackets/">Vests</a></li>
                                    <li><a href="/category/womens-jackets/">Jackets</a></li>
                                    <li class="view-all"><a href="/category/womens-coats-&amp;-jackets/">View All</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-jumpers-&amp;-cardigans/">Jumpers &amp; Cardigans</a></li>
                                    <li><a href="/category/womens-jumpers/">Jumpers</a></li>
                                    <li><a href="/category/womens-cardigans/">Cardigans</a></li>
                                    <li><a href="/category/womens-v-neck/">V-Neck</a></li>
                                    <li><a href="/category/womens-crew-neck/">Crew Neck</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-shorts/">Shorts</a></li>
                                    <li><a href="/category/womens-cargo-shorts/">Cargo Shorts</a></li>
                                    <li><a href="/category/womens-chino-shorts/">Chino Shorts</a></li>
                                    <li><a href="/category/womens-denim-shorts/">Denim Shorts</a></li>
                                    <li><a href="/category/high-waisted-shorts/">High Waisted Shorts</a></li>
                                    <li><a href="/category/leather-shorts/">Leather Shorts</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/skirts/">Skirts</a></li>
                                    <li><a href="/category/midi-skirts/">Midi Skirts</a></li>
                                    <li><a href="/category/mini-skirts/">Mini Skirts</a></li>
                                    <li><a href="/category/maxi-skirts/">Maxi Skirts</a></li>
                                    <li><a href="/category/pleated-skirts/">Pleated Skirts</a></li>
                                    <li><a href="/category/pencil-skirts/">Pencil Skirts</a></li>
                                    <li><a href="/category/leather-skirts/">Leather Skirts</a></li>
                                    <li><a href="/category/denim-skirts/">Denim Skirts</a></li>
                                    <li class="view-all"><a href="/category/skirts/">View All</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-swimwear/">Swimwear</a></li>
                                    <li><a href="/category/bikini-bottoms/">Bikini Bottoms</a></li>
                                    <li><a href="/category/bikini-tops/">Bikini Tops</a></li>
                                    <li><a href="/category/bikini-sets/">Bikini Sets</a></li>
                                    <li><a href="/category/womens-one-piece-swimsuit/">One Piece Swimsuit</a></li>
                                    <li class="view-all"><a href="/category/womens-swimwear/">View All</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/socks-&amp;-tights/">Socks &amp; Tights</a></li>
                                    <li><a href="/category/stockings/">Stockings</a></li>
                                    <li><a href="/category/womens-socks/">Socks</a></li>
                                    <li><a href="/category/womens-tights/">Tights</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-suits-&amp;-blazers/">Suits &amp; Blazers</a></li>
                                    <li><a href="/category/womens-suits/">Suits</a></li>
                                    <li><a href="/category/womens-blazers/">Blazers</a></li>
                                    <li><a href="/category/suit-skirts/">Suit Skirts</a></li>
                                    <li><a href="/category/womens-suit-pants/">Suit Pants</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/jumpsuits-&amp;-playsuits/">Jumpsuits &amp; Playsuits</a></li>
                                    <li><a href="/category/playsuit/">Playsuits</a></li>
                                    <li><a href="/category/denim-playsuit/">Denim Playsuits</a></li>
                                    <li><a href="/category/linen-playsuit/">Linen Playsuits</a></li>
                                    <li><a href="/category/long-sleeve-playsuit/">Long Sleeve Playsuit</a></li>
                                    <li><a href="/category/floral-playsuit/">Floral Playsuits</a></li>
                                    <li class="view-all"><a href="/category/jumpsuits-&amp;-playsuits/">View All</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-jeans/">Jeans</a></li>
                                    <li><a href="/category/flared-jeans/">Flared Jeans</a></li>
                                    <li><a href="/category/girlfriend-jeans/">Girlfriend Jeans</a></li>
                                    <li><a href="/category/boyfriend-jeans/">Boyfriend Jeans</a></li>
                                    <li><a href="/category/womens-bootcut-jeans/">Bootcut Jeans</a></li>
                                    <li><a href="/category/womens-skinny-jeans/">Skinny Jeans</a></li>
                                    <li><a href="/category/flared-jeans/">Flared Jeans</a></li>
                                    <li class="view-all"><a href="/category/jeans/">View All</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="false">
                     <a class="d-none d-lg-inline" href="javascript:void(0);">Men</a><a class="d-lg-none" href="javascript:void(0);">Men</a>
                     <div class="menu-body mega-menu">
                        <a class="sub-cat-back" href="javascript:void(0);">Men</a>
                        <div class="menu-container">
                           <ul class="menu-row">
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/men-t-shirts/">T-Shirts</a></li>
                                    <li><a href="/category/men-long-sleeve-t-shirts/">Long Sleeve T-Shirts</a></li>
                                    <li><a href="/category/men-short-sleeve-t-shirts/">Short Sleeve T-Shirts</a></li>
                                    <li><a href="/category/polo-shirts/">Polos Shirts</a></li>
                                    <li><a href="/category/men-basic-t-shirts/">Basic T-Shirts</a></li>
                                    <li><a href="/category/men-printing-t-shirts/">Printing T-Shirts</a></li>
                                    <li><a href="/category/men-casual-shirts/">Casual Shirts</a></li>
                                    <li><a href="/category/men-singlet/">Singlets</a></li>
                                    <li><a href="/category/business-shirts/">Business Shirts</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/men-shorts/">Shorts</a></li>
                                    <li><a href="/category/men-denim-shorts/">Denim Shorts</a></li>
                                    <li><a href="/category/men-chino-shorts/">Chino Shorts</a></li>
                                    <li><a href="/category/men-cargo-shorts/">Cargo Shorts</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/men-pants/">Pants</a></li>
                                    <li><a href="/category/men-track-pants/">Track Pants</a></li>
                                    <li><a href="/category/men-cargo-pants/">Cargo Pants</a></li>
                                    <li><a href="/category/men-cropped-pants/">Cropped Pants</a></li>
                                    <li><a href="/category/men-chinos/">Chinos</a></li>
                                    <li><a href="/category/men-dress-pants/">Dress Pants</a></li>
                                    <li><a href="/category/men-sweat-pants/">Sweat Pants</a></li>
                                    <li><a href="/category/men-pyjama-bottoms/">Pyjama Bottoms</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/men-jumpers-&amp;-cardigans/">Jumpers &amp; Cardigans</a></li>
                                    <li><a href="/category/men-v-neck/">V Neck</a></li>
                                    <li><a href="/category/men-crew-neck/">Crew Neck</a></li>
                                    <li><a href="/category/men-cardigans/">Cardigans</a></li>
                                    <li><a href="/category/men-jumper/">Jumpers</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/men-coats-&amp;-jackets/">Coats &amp; Jackets</a></li>
                                    <li><a href="/category/men-coats/">Coats</a></li>
                                    <li><a href="/category/men-jackets/">Jackets</a></li>
                                    <li><a href="/category/bomber-jackets/">Bomber Jackets</a></li>
                                    <li><a href="/category/men-blazers/">Blazers</a></li>
                                    <li><a href="/category/men-vests/">Vests</a></li>
                                    <li><a href="/category/men-leather-jackets/">Leather Jackets</a></li>
                                    <li><a href="/category/men-winter-coats/">Winter Coats</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/men-sweats-&amp;-hoodies/">Sweats &amp; Hoodies</a></li>
                                    <li><a href="/category/men-crew-neck/">Crew Necks</a></li>
                                    <li><a href="/category/men-sweats/">Sweats</a></li>
                                    <li><a href="/category/men-hoodies/">Hoodies</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/men-jeans/">Jeans</a></li>
                                    <li><a href="/category/men-relaxed-jeans/">Relaxed Jeans</a></li>
                                    <li><a href="/category/men-tapered-jeans/">Tapered Jeans</a></li>
                                    <li><a href="/category/men-skinny-jeans/">Skinny Jeans</a></li>
                                    <li><a href="/category/men-bootcut-jeans/">Bootcut Jeans</a></li>
                                    <li><a href="/category/men-slim-jeans/">Slim Jeans</a></li>
                                    <li><a href="/category/men-straight-jeans/">Straight Jeans</a></li>
                                    <li><a href="/category/men-crop-jeans/">Crop Jeans</a></li>
                                 </ul>
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/mens-suits-&amp;-blazers/">Suits &amp; Blazers</a></li>
                                    <li><a href="/category/men-suits/">Suits</a></li>
                                    <li><a href="/category/men-blazers/">Blazers</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="false">
                     <a class="d-none d-lg-inline" href="javascript:void(0);">Bags</a><a class="d-lg-none" href="javascript:void(0);">Bags</a>
                     <div class="menu-body mega-menu">
                        <a class="sub-cat-back" href="javascript:void(0);">Bags</a>
                        <div class="menu-container">
                           <ul class="menu-row">
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-bags/">Womens Bags</a></li>
                                    <li><a href="/category/women-backpacks/">Backpacks</a></li>
                                    <li><a href="/category/clutches/">Clutches</a></li>
                                    <li><a href="/category/satchels/">Satchels</a></li>
                                    <li><a href="/category/women-handbags/">Handbags</a></li>
                                    <li><a href="/category/duffel-bags/">Duffel Bags</a></li>
                                    <li><a href="/category/women-totes/">Totes</a></li>
                                    <li><a href="/category/women-shoulder-bags/">Shoulder</a></li>
                                    <li><a href="/category/cross-body/">Cross Body</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/mens-bags/">Mens Bags</a></li>
                                    <li><a href="/category/men-backpacks/">Backpacks</a></li>
                                    <li><a href="/category/men-totes/">Totes</a></li>
                                    <li><a href="/category/men-business-bags/">Business</a></li>
                                    <li><a href="/category/men-messenger-bags/">Messenger Bags</a></li>
                                    <li><a href="/category/laptop-bags/">Laptop Bags</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="false">
                     <a class="d-none d-lg-inline" href="javascript:void(0);">Shoes</a><a class="d-lg-none" href="javascript:void(0);">Shoes</a>
                     <div class="menu-body mega-menu">
                        <a class="sub-cat-back" href="javascript:void(0);">Shoes</a>
                        <div class="menu-container">
                           <ul class="menu-row">
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/mens-shoes/">Mens Shoes</a></li>
                                    <li><a href="/category/men-boots/">Boots</a></li>
                                    <li><a href="/category/men-sandals/">Sandals</a></li>
                                    <li><a href="/category/men-sneakers/">Sneakers</a></li>
                                    <li><a href="/category/men-thong-sandal/">Thongs</a></li>
                                    <li><a href="/category/men-dress-shoes/">Dress Shoes</a></li>
                                    <li><a href="/category/men-casual-shoes/">Casual Shoes</a></li>
                                    <li><a href="/category/men-work-shoes/">Work Shoes</a></li>
                                    <li><a href="/category/men-loafers/">Loafers</a></li>
                                    <li><a href="/category/men-running-shoes/">Running Shoes</a></li>
                                    <li><a href="/category/men-training-shoes/">Training Shoes</a></li>
                                    <li><a href="/category/men-walking-shoes/">Walking Shoes</a></li>
                                    <li><a href="/category/men-outdoor-shoes/">Outdoor Shoes</a></li>
                                    <li><a href="/category/men-hiking-shoes/">Hiking Shoes</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-shoes/">Womens Shoes</a></li>
                                    <li><a href="/category/heels/">Heels</a></li>
                                    <li><a href="/category/women-sandals/">Sandals</a></li>
                                    <li><a href="/category/women-flats/">Flats</a></li>
                                    <li><a href="/category/women-boots/">Boots</a></li>
                                    <li><a href="/category/women-ankle-boots/">Ankle Boots</a></li>
                                    <li><a href="/category/wedges/">Wedges</a></li>
                                    <li><a href="/category/women-thong-sandal/">Thongs</a></li>
                                    <li><a href="/category/women-dress-shoes/">Dress Shoes</a></li>
                                    <li><a href="/category/women-work-shoes/">Work Shoes</a></li>
                                    <li><a href="/category/wedding-shoes/">Wedding Shoes</a></li>
                                    <li><a href="/category/women-running-shoes/">Running Shoes</a></li>
                                    <li><a href="/category/women-training-shoes/">Training Shoes</a></li>
                                    <li><a href="/category/women-walking-shoes/">Walking Shoes</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-shoes/">Womens Shoes</a></li>
                                    <li><a href="/category/women-outdoor-shoes/">Outdoor Shoes</a></li>
                                    <li><a href="/category/women-hiking-shoes/">Hiking Shoes</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="false">
                     <a class="d-none d-lg-inline" href="javascript:void(0);">Accessories</a><a class="d-lg-none" href="javascript:void(0);">Accessories</a>
                     <div class="menu-body mega-menu">
                        <a class="sub-cat-back" href="javascript:void(0);">Accessories</a>
                        <div class="menu-container">
                           <ul class="menu-row">
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/mens-accessories/">Mens Accessories</a></li>
                                    <li><a href="/category/men-belts/">Belts</a></li>
                                    <li><a href="/category/men-sunglasses/">Sunglasses</a></li>
                                    <li><a href="/category/men-gloves/">Gloves</a></li>
                                    <li><a href="/category/men-hats/">Hats</a></li>
                                    <li><a href="/category/men-wallets/">Wallets</a></li>
                                    <li><a href="/category/men-scarves/">Scarves</a></li>
                                    <li><a href="/category/men-socks/">Socks</a></li>
                                    <li><a href="/category/men-underwear/">Underwear</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-accessories/">Womens Accessories</a></li>
                                    <li><a href="/category/women-belts/">Belts</a></li>
                                    <li><a href="/category/women-sunglasses/">Sunglasses</a></li>
                                    <li><a href="/category/women-gloves/">Gloves</a></li>
                                    <li><a href="/category/women-hats/">Hats</a></li>
                                    <li><a href="/category/women-jewellery/">Jewellery</a></li>
                                    <li><a href="/category/scarves-&amp;-wraps/">Scarves &amp; Wraps</a></li>
                                    <li><a href="/category/women-socks/">Socks</a></li>
                                    <li><a href="/category/women-underwear/">Underwear</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li class="false">
                     <a class="d-none d-lg-inline" href="javascript:void(0);">Activewear</a><a class="d-lg-none" href="javascript:void(0);">Activewear</a>
                     <div class="menu-body mega-menu">
                        <a class="sub-cat-back" href="javascript:void(0);">Activewear</a>
                        <div class="menu-container">
                           <ul class="menu-row">
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/mens-activewear/">Mens Activewear</a></li>
                                    <li><a href="/category/men-t-shirts-&amp;-singlets/">T-Shirts &amp; Singlets</a></li>
                                    <li><a href="/category/men-coats-&amp;-jackets/">Coats &amp; Jackets</a></li>
                                    <li><a href="/category/men-shorts/">Shorts</a></li>
                                    <li><a href="/category/activewear-men-pants/">Pants</a></li>
                                    <li><a href="/category/men-compression/">Compression</a></li>
                                    <li><a href="/category/men-swimwear/">Swimwear</a></li>
                                    <li><a href="/category/men-sport-tights/">Sport Tights</a></li>
                                 </ul>
                              </li>
                              <li class="menu-col">
                                 <ul>
                                    <li class="sub-cat-head"><a href="/category/womens-activewear/">Womens Activewear</a></li>
                                    <li><a href="/category/womens-sport-tights/">Sport Tights</a></li>
                                    <li><a href="/category/sport-bras-&amp;-crops/">Sport Bras &amp; Crops</a></li>
                                    <li><a href="/category/womens-activewear-pants/">Pants</a></li>
                                    <li><a href="/category/womens-activewear-shorts/">Shorts</a></li>
                                    <li><a href="/category/womens-coats-&amp;-jackets/">Coats &amp; Jackets</a></li>
                                    <li><a href="/category/womens-compression/">Compression</a></li>
                                    <li><a href="/category/womens-swimwear/">Swimwear</a></li>
                                    <li><a href="/category/bikinis/">Bikinis</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li><a href="#">ALL RETAILERS</a></li>
                  <li><a href="#">ALL BRANDS</a></li>
                  <li><a href="#">ALL CATEGORIES</a></li>
               </div>
            </div>
         </div>
      </div>
   </nav>
</header>


   </>
  );
}

export default Header;
