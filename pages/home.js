import axios from 'axios';
import {Component} from 'react';
class Homepage extends Component{
  
  renderSection1() {
      const Html = JSON.parse(this.props.sec1.DesktopHTML);
      return Html.map((itemData,index)=>{
        return(

          <div key={index} className="cat-col cat-col-4">
              <a href="category/women/" className="cat-item align-items-center justify-content-center d-flex">
                 <div className="cat-thumb"><span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Women" src="https://assets.lookstyle.com.au/images/category/womens675x500.jpg" /></span></div>
                 <div className="cat-content">
                    <h4>{itemData.DisplayName}</h4>
                    <div className="cat-hover-content">
              <a className="btn btn-small" href="#">Shop Now</a></div></div></a>
           </div>

          )
      })
  }

  renderSection2() {
      const Html = JSON.parse(this.props.sec2.DesktopHTML);
      return Html.map((itemData,index)=>{
        return(<div key={index}>{itemData.DisplayName}</div>)
      })
  }

  renderSection3() {
     const Html = JSON.parse(this.props.sec3.DesktopHTML);
      return Html.response.docs.map((itemData,index)=>{
        return(<div key={index}>{itemData.Name}</div>)
      })
  }

  renderSection4() {
      const Html = JSON.parse(this.props.sec4.DesktopHTML);
      return Html.map((itemData,index)=>{
        return(<div key={index}>{itemData.name}</div>)
      })
  }

  render(){
    return (
    <> 
    

<section id="middle" className="homepage gray-bg">
   <section id="popular-categories" className="sec-padd popular-cat-sec gray-bg headPadd">
      <div className="container">
         <div className="categories-card new-cat-card">
            <div className="cat-row">

               {this.renderSection1()}
               
               <div className="cat-col cat-col-3">
                  <div className="cat-item subscribe-box text-center">
                     <i className="icon-subscribe"></i>
                     <div className="subscribe-form">
                        <p>Sign up to the LookStyle newsletter and get the latest styles and straight to your inbox.</p>
                        <div className="form-group">
                        </div>
                     </div>
                  </div>
               </div>
               <div className="clear"></div>
            </div>
         </div>
      </div>
   </section>
   <section id="shop-category" className="sec-padd shop-cat-sec gray-bg">
      <div className="container">
         <div className="sub-sec-head">
            <h4>Shop by Category</h4>
         </div>
         <div className="white-box shop-cat-box">
            <div className="row">
               <div className="col-sm-5 col-lg-4 col-xl-3">
                  <div className="shop-cat-feature">
                     <a href="category/dresses/" className="align-items-center justify-content-center d-flex">
                        <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Dresses" src="https://assets.lookstyle.com.au/images/category/dress380x530.jpg" /></span>
                        <div className="cat-f-title">
                           <h4>Dresses</h4>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="col-sm-7 col-lg-8 col-xl-9">
                  <div className="shop-cat-list">
                     <div className="shop-cat-menu"><a href="category/wrap-dresses/">Wrap Dresses</a><a href="category/knitted-dresses/">Knitted Dresses</a><a href="category/womens-work-dresses/">Work Dresses</a><a href="category/bodycon-dresses/">Bodycon Dresses</a><a href="category/mini-dresses/">Mini Dresses</a></div>
                     <div className="shop-cat-slider custom-carousel">
                        <div className="react-multi-carousel-list carousel-container ">
                           <ul className="react-multi-carousel-track " >
                              <li data-index="0" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92402788.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Elegant Women Butterfly Backless Bodycon Party Cape Pencil Dress" data-price="$31.15" data-sku="SKU255540" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Elegant Women Butterfly Backless Bodycon Party Cape Pencil Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$31.15</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku255540/newchic-elegant-women-butterfly-backless-bodycon-party-cape-pencil-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="1" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/66001/125801112.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Peppermayo" data-product="Steinway Mini Dress - Sage" data-price="$99.95" data-sku="LD88-510 -SAGE" data-brand="Pepper Mayo">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Steinway Mini Dress - Sage</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$99.95</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/ld88-510--sage/pepper-mayo-steinway-mini-dress---sage/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="2" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92403945.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Vintage Ink Printed Tassel Short-Sleeve Loose Dress" data-price="$58.58" data-sku="SKU435563" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Vintage Ink Printed Tassel Short-Sleeve Loose Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$58.58</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku435563/newchic-women-vintage-ink-printed-tassel-short-sleeve-loose-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="3" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92402810.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Sexy Lace Crochet Sleeveless Transparent White Women  Mini Dress" data-price="$17.23" data-sku="SKU271897" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Sexy Lace Crochet Sleeveless Transparent White Women  Mini Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$17.23</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku271897/newchic-sexy-lace-crochet-sleeveless-transparent-white-women-mini-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="4" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92402848.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Off Shoulder Embroidery Sexy Dress" data-price="$36.08" data-sku="SKU422604" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Off Shoulder Embroidery Sexy Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$36.08</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku422604/newchic-off-shoulder-embroidery-sexy-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="5" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92402849.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Strap V Neck Backless Pure Color Stripe Sexy Dress " data-price="$31.32" data-sku="SKU422901" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Strap V Neck Backless Pure Color Stripe Sexy Dress </h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$31.32</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku422901/newchic-women-strap-v-neck-backless-pure-color-stripe-sexy-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="6" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92402916.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Sexy Women Half Sleeve Yarn Crochet Stitching Smock Beach Mini Dress" data-price="$15.27" data-sku="SKU235322" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Sexy Women Half Sleeve Yarn Crochet Stitching Smock Beach Mini Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$15.27</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku235322/newchic-sexy-women-half-sleeve-yarn-crochet-stitching-smock-beach-mini-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="7" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92403053.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Strap V-neck Split Mini Dress" data-price="$39.63" data-sku="SKU418082" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Strap V-neck Split Mini Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$39.63</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku418082/newchic-strap-v-neck-split-mini-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="8" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92403203.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Sexy Women Short Sleeve Patchwork Work Sheath Pencil Dress" data-price="$51.89" data-sku="SKU380648" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Sexy Women Short Sleeve Patchwork Work Sheath Pencil Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$51.89</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku380648/newchic-sexy-women-short-sleeve-patchwork-work-sheath-pencil-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="9" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92403218.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Vintage Women Sleeveless Pockets High Low Pure Color Maxi Dresses" data-price="$28.59" data-sku="SKU383613" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Vintage Women Sleeveless Pockets High Low Pure Color Maxi Dresses</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$28.59</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku383613/newchic-vintage-women-sleeveless-pockets-high-low-pure-color-maxi-dresses/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                           <button aria-label="Go to next slide" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="white-box shop-cat-box">
            <div className="row">
               <div className="col-sm-5 col-lg-4 col-xl-3">
                  <div className="shop-cat-feature">
                     <a href="category/womens-coats-&amp;-jackets/" className="align-items-center justify-content-center d-flex">
                        <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Coats &amp; Jackets" src="https://assets.lookstyle.com.au/images/category/jackets380x530.jpg" /></span>
                        <div className="cat-f-title">
                           <h4>Coats &amp; Jackets</h4>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="col-sm-7 col-lg-8 col-xl-9">
                  <div className="shop-cat-list">
                     <div className="shop-cat-menu"><a href="category/womens-leather-jackets/">Leather Jackets</a><a href="category/womens-vests-jackets/">Vests</a><a href="category/womens-bomber-jackets/">Bomber Jackets</a><a href="category/womens-denim-jackets/">Denim Jackets</a><a href="category/womens-coats/">Coats</a></div>
                     <div className="shop-cat-slider custom-carousel">
                        <div className="react-multi-carousel-list carousel-container ">
                           <ul className="react-multi-carousel-track " >
                              <li data-index="0" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/50888/123861074.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="ECHT " data-product="Essentia Padded Jacket - White - X-Large (14)" data-price="$120" data-sku="32114574950465" data-brand="Echt Apparel | Performance X Streetwear">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Essentia Padded Jacket - White - X-Large (14)</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$120</div>
                                             <div className="col-12 prod-size px-0">Size: X-Large (14)</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/32114574950465/echt-apparel---performance-x-streetwear-essentia-padded-jacket---white---x-large-(14)/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="1" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92404203.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Loose Fashion Hooded Sleeveless Button Jacket Coat For Women " data-price="$43.98" data-sku="SKU498794" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Loose Fashion Hooded Sleeveless Button Jacket Coat For Women </h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$43.98</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku498794/newchic-loose-fashion-hooded-sleeveless-button-jacket-coat-for-women/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="2" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92404624.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Casual Women Hooded Zipper Drawstring Coat" data-price="$55.21" data-sku="SKU454858" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Casual Women Hooded Zipper Drawstring Coat</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$55.21</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku454858/newchic-casual-women-hooded-zipper-drawstring-coat/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="3" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92404834.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Casual Irregular Pure Color Lapel Coats" data-price="$51.3" data-sku="SKU532429" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Casual Irregular Pure Color Lapel Coats</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$51.3</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku532429/newchic-women-casual-irregular-pure-color-lapel-coats/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="4" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Christmas Knitting Print Tassels Cloak Coat" data-price="$58.11" data-sku="SKU515526" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Christmas Knitting Print Tassels Cloak Coat</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$58.11</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku515526/newchic-women-christmas-knitting-print-tassels-cloak-coat/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="5" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Casual Bandage Lapel Mid-long Jacket" data-price="$56.45" data-sku="SKU486463" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Casual Bandage Lapel Mid-long Jacket</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$56.45</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku486463/newchic-women-casual-bandage-lapel-mid-long-jacket/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="6" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Casual Elegant Women Pure Color Dots Cardigan Coat" data-price="$49.02" data-sku="SKU471284" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Casual Elegant Women Pure Color Dots Cardigan Coat</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$49.02</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku471284/newchic-casual-elegant-women-pure-color-dots-cardigan-coat/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="7" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women 3PCS Jacket Racerback Leggings Sport Yoga Spinning Tracksuits" data-price="$69.51" data-sku="SKU573873" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women 3PCS Jacket Racerback Leggings Sport Yoga Spinning Tracksuits</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$69.51</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku573873/newchic-women-3pcs-jacket-racerback-leggings-sport-yoga-spinning-tracksuits/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="8" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Single-Breasted Long Sleeve Side Split Hooded Denim Coats" data-price="$77.93" data-sku="SKU731661" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Single-Breasted Long Sleeve Side Split Hooded Denim Coats</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$77.93</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku731661/newchic-women-single-breasted-long-sleeve-side-split-hooded-denim-coats/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="9" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Casual Women Drawstring Turn-down Collar Print Coats" data-price="$59.09" data-sku="SKU732768" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Casual Women Drawstring Turn-down Collar Print Coats</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$59.09</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku732768/newchic-casual-women-drawstring-turn-down-collar-print-coats/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                           <button aria-label="Go to next slide" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="white-box shop-cat-box">
            <div className="row">
               <div className="col-sm-5 col-lg-4 col-xl-3">
                  <div className="shop-cat-feature">
                     <a href="category/womens-jumpers-&amp;-cardigans/" className="align-items-center justify-content-center d-flex">
                        <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Jumpers &amp; Cardigans" src="https://assets.lookstyle.com.au/images/category/cardigans380x530.jpg" /></span>
                        <div className="cat-f-title">
                           <h4>Jumpers &amp; Cardigans</h4>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="col-sm-7 col-lg-8 col-xl-9">
                  <div className="shop-cat-list">
                     <div className="shop-cat-menu"><a href="category/womens-cardigans/">Cardigans</a><a href="category/womens-crew-neck/">Crew Neck</a><a href="category/womens-jumpers/">Jumpers</a><a href="category/womens-v-neck/">V-Neck</a></div>
                     <div className="shop-cat-slider custom-carousel">
                        <div className="react-multi-carousel-list carousel-container ">
                           <ul className="react-multi-carousel-track " >
                              <li data-index="0" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92403111.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Sexy Floral Printed Bikini Cover Up Chiffon Cardigan Blouse Beachwear" data-price="$22.39" data-sku="SKU393101" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Sexy Floral Printed Bikini Cover Up Chiffon Cardigan Blouse Beachwear</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$22.39</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku393101/newchic-women-sexy-floral-printed-bikini-cover-up-chiffon-cardigan-blouse-beachwear/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="1" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92402859.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Ethnic Ink Printing Split Loose Knitted Cardigan" data-price="$76.81" data-sku="SKU425892" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Ethnic Ink Printing Split Loose Knitted Cardigan</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$76.81</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku425892/newchic-women-ethnic-ink-printing-split-loose-knitted-cardigan/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="2" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92402958.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Sexy Embroidered Lace Bra Sets V Neck Push Up Bra Set" data-price="$39.96" data-sku="SKU199205" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Sexy Embroidered Lace Bra Sets V Neck Push Up Bra Set</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$39.96</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku199205/newchic-women-sexy-embroidered-lace-bra-sets-v-neck-push-up-bra-set/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="3" aria-hidden="false" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img src="https://c.cfjump.com/Products/65191/92403095.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Batwing Sleeve Tassels Knitwear Sweater" data-price="$19.69" data-sku="SKU181594" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Batwing Sleeve Tassels Knitwear Sweater</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$19.69</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku181594/newchic-batwing-sleeve-tassels-knitwear-sweater/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="4" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Sexy Printed Button Bikini Cover Up Loose Chiffon Cardigan Shawl Beachwear" data-price="$13.74" data-sku="SKU393105" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Sexy Printed Button Bikini Cover Up Loose Chiffon Cardigan Shawl Beachwear</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$13.74</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku393105/newchic-women-sexy-printed-button-bikini-cover-up-loose-chiffon-cardigan-shawl-beachwear/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="5" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Sexy Loose Bikini Cover Up V Neck Cotton Beachwear" data-price="$23.59" data-sku="SKU399851" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Sexy Loose Bikini Cover Up V Neck Cotton Beachwear</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$23.59</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku399851/newchic-women-sexy-loose-bikini-cover-up-v-neck-cotton-beachwear/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="6" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Sexy Lace Floral Silk-like Nightdress Spaghetti Strap V-neck Nightgown Sleepwear" data-price="$28.98" data-sku="SKU097301" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Sexy Lace Floral Silk-like Nightdress Spaghetti Strap V-neck Nightgown Sleepwear</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$28.98</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku097301/newchic-women-sexy-lace-floral-silk-like-nightdress-spaghetti-strap-v-neck-nightgown-sleepwear/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="7" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Multicolor Floral Print Half Sleeve Chiffon Women Cardigans" data-price="$13.86" data-sku="SKU384185" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Multicolor Floral Print Half Sleeve Chiffon Women Cardigans</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$13.86</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku384185/newchic-multicolor-floral-print-half-sleeve-chiffon-women-cardigans/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="8" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Sexy Women Deep V Neck Drawstring Batwing Sleeve Solid Blouse" data-price="$23.63" data-sku="SKU287405" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Sexy Women Deep V Neck Drawstring Batwing Sleeve Solid Blouse</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$23.63</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku287405/newchic-sexy-women-deep-v-neck-drawstring-batwing-sleeve-solid-blouse/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="9" aria-hidden="true" >
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Sexy Printing V Neck Nightdress Satin Sleeveless Nightgown Sleepwear " data-price="$17.16" data-sku="SKU430386" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Sexy Printing V Neck Nightdress Satin Sleeveless Nightgown Sleepwear </h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$17.16</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku430386/newchic-women-sexy-printing-v-neck-nightdress-satin-sleeveless-nightgown-sleepwear/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                           <button aria-label="Go to next slide" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section id="trending-brands" className="sec-padd brand-list-sec gray-bg pt-0">
      <div className="container">
         <div className="sub-sec-head">
            <h4>Trending Brands</h4>
         </div>
         <div className="white-box brand-list-box">
            <div className="row">
               <div className="col-12">
                  <div className="brand-list">
                     <div className="brand-slider custom-carousel">
                        <div className="react-multi-carousel-list carousel-container ">
                           <ul className="react-multi-carousel-track " >
                              <li data-index="0" aria-hidden="false" ><a className="brand-item align-items-center justify-content-center" href="/brand/gucci/"><span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Brand 4" src="https://assets-lookstyle-com-au.s3.amazonaws.com/images/brand/brand-4.png" /></span></a></li>
                              <li data-index="1" aria-hidden="false" ><a className="brand-item align-items-center justify-content-center" href="/brand/hugo-boss/"><span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Brand 7" src="https://assets-lookstyle-com-au.s3.amazonaws.com/images/brand/brand-7.png" /></span></a></li>
                              <li data-index="2" aria-hidden="false" ><a className="brand-item align-items-center justify-content-center" href="/brand/michael-kors/"><span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Brand 6" src="https://assets-lookstyle-com-au.s3.amazonaws.com/images/brand/brand-6.png" /></span></a></li>
                              <li data-index="3" aria-hidden="false" ><a className="brand-item align-items-center justify-content-center" href="/brand/columbia/"><span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Brand 1" src="https://assets-lookstyle-com-au.s3.amazonaws.com/images/brand/brand-1.png" /></span></a></li>
                              <li data-index="4" aria-hidden="false" ><a className="brand-item align-items-center justify-content-center" href="/brand/sass-&amp;-bide/"><span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Brand 5" src="https://assets-lookstyle-com-au.s3.amazonaws.com/images/brand/brand-5.png" /></span></a></li>
                              <li data-index="5" aria-hidden="false" ><a className="brand-item align-items-center justify-content-center" href="/brand/timberland/"><span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Brand 2" src="https://assets-lookstyle-com-au.s3.amazonaws.com/images/brand/brand-2.png" /></span></a></li>
                              <li data-index="6" aria-hidden="true" className="react-multi-carousel-item  carousel-item-padding-40-px"><a className="brand-item align-items-center justify-content-center" href="/brand/ben-sherman-australia/"><span className=" lazy-load-image-background blur" ><span className="" ></span></span></a></li>
                           </ul>
                           <button aria-label="Go to next slide" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section id="most-popular" className="sec-padd most-popular-sec gray-bg pt-0 subscribe-space-bp">
      <div className="container">
         <div className="sub-sec-head">
            <h4>Most Popular Today</h4>
         </div>
         <div className="white-box shop-cat-box">
            <div className="row">
               <div className="col-12">
                  <div className="shop-cat-list">
                     <div className="shop-cat-slider custom-carousel">
                        <div className="react-multi-carousel-list carousel-container ">
                           <ul className="react-multi-carousel-track " >
                              <li data-index="0" aria-hidden="false"  className="react-multi-carousel-item react-multi-carousel-item--active carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Elegant Women Butterfly Backless Bodycon Party Cape Pencil Dress" src="https://c.cfjump.com/Products/65191/92402788.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Elegant Women Butterfly Backless Bodycon Party Cape Pencil Dress" data-price="$31.15" data-sku="SKU255540" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Elegant Women Butterfly Backless Bodycon Party Cape Pencil Dress</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$31.15</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku255540/newchic-elegant-women-butterfly-backless-bodycon-party-cape-pencil-dress/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="1" aria-hidden="false"  className="react-multi-carousel-item react-multi-carousel-item--active carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Mens Womens Cotton Duckbill Ivy Cap Golf Driving Flat Cabbie Newsboy Beret Hat" src="https://c.cfjump.com/Products/65191/92402794.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Mens Womens Cotton Duckbill Ivy Cap Golf Driving Flat Cabbie Newsboy Beret Hat" data-price="$12.37" data-sku="SKU259914" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Mens Womens Cotton Duckbill Ivy Cap Golf Driving Flat Cabbie Newsboy Beret Hat</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$12.37</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku259914/newchic-mens-womens-cotton-duckbill-ivy-cap-golf-driving-flat-cabbie-newsboy-beret-hat/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="2" aria-hidden="false"  className="react-multi-carousel-item react-multi-carousel-item--active carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Sexy Women Shiny Sheer Stockings Tights Opaque Hosiery High Pantyhose" src="https://c.cfjump.com/Products/65191/92402779.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Sexy Women Shiny Sheer Stockings Tights Opaque Hosiery High Pantyhose" data-price="$10.49" data-sku="SKU251239" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Sexy Women Shiny Sheer Stockings Tights Opaque Hosiery High Pantyhose</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$10.49</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku251239/newchic-sexy-women-shiny-sheer-stockings-tights-opaque-hosiery-high-pantyhose/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="3" aria-hidden="false"  className="react-multi-carousel-item react-multi-carousel-item--active carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Casio Sports Watch SGW-100-1VEF Black/Silver" src="https://c.cfjump.com/Products/31571/44304873.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Cotswold Outdoor" data-product="Casio Sports Watch SGW-100-1VEF Black/Silver" data-price="$70" data-sku="195116" data-brand="Casio">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Casio Sports Watch SGW-100-1VEF Black/Silver</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$70</div>
                                             <div className="col-12 prod-size px-0">Size: One Size</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/195116/casio-casio-sports-watch-sgw-100-1vef-black-silver/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="4" aria-hidden="false"  className="react-multi-carousel-item react-multi-carousel-item--active carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur lazy-load-image-loaded" ><img alt="Women Men Nylon Large Capacity Bucket Shoulder Bag Crossbody Bag" src="https://c.cfjump.com/Products/65191/92402806.jpg" /></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Newchic SEA" data-product="Women Men Nylon Large Capacity Bucket Shoulder Bag Crossbody Bag" data-price="$28.87" data-sku="SKU270940" data-brand="Newchic">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Women Men Nylon Large Capacity Bucket Shoulder Bag Crossbody Bag</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$28.87</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/sku270940/newchic-women-men-nylon-large-capacity-bucket-shoulder-bag-crossbody-bag/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="5" aria-hidden="true"  className="react-multi-carousel-item  carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Cotswold Outdoor" data-product="Protest Cabel 20 Bikini Bottom Eternity" data-price="$38" data-sku="248444" data-brand="Protest">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Protest Cabel 20 Bikini Bottom Eternity</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$38</div>
                                             <div className="col-12 prod-size px-0">Size: L</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/248444/protest-protest-cabel-20-bikini-bottom-eternity/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="6" aria-hidden="true"  className="react-multi-carousel-item  carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Peppermayo" data-product="Steinway Mini Dress - Sage" data-price="$99.95" data-sku="LD88-510 -SAGE" data-brand="Pepper Mayo">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Steinway Mini Dress - Sage</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$99.95</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/ld88-510--sage/pepper-mayo-steinway-mini-dress---sage/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="7" aria-hidden="true"  className="react-multi-carousel-item  carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Shouz" data-product="Neo X Asti Tan womens leather slingback heel " data-price="$149.95" data-sku="2416" data-brand="Neo X">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Neo X Asti Tan womens leather slingback heel </h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$149.95</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/2416/neo-x-neo-x-asti-tan-womens-leather-slingback-heel/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="8" aria-hidden="true"  className="react-multi-carousel-item  carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Cotswold Outdoor" data-product="Climbing Technology Alpin Tour Axe Red" data-price="$100" data-sku="208018" data-brand="Climbing Technology">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Climbing Technology Alpin Tour Axe Red</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$100</div>
                                             <div className="col-12 prod-size px-0">Size: 50cm</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/208018/climbing-technology-climbing-technology-alpin-tour-axe-red/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                              <li data-index="9" aria-hidden="true"  className="react-multi-carousel-item  carousel-item-padding-40-px">
                                 <div className="prod-col">
                                    <div className="prod-item">
                                       <a className="prod-item-url" href=""></a>
                                       <div className="prod-th">
                                          <span className=" lazy-load-image-background blur" ><span className="" ></span></span>
                                          <div className="prod-item-hover"><a className="btn btn-small" href="#" data-retailer="Boden Clothing Australia" data-product="Long Sleeve Washed T-shirt White Men Boden, White" data-price="$45" data-sku="35723840" data-brand="Boden">Shop Now</a></div>
                                       </div>
                                       <div className="prod-title">
                                          <h2>Long Sleeve Washed T-shirt White Men Boden, White</h2>
                                          <div className="prod-info row mx-0">
                                             <div className="col-12 prod-price p-0">$45</div>
                                             <div className="col-12 prod-size px-0">Size: XL</div>
                                          </div>
                                       </div>
                                       <div className="prod-fav"><a href="/details/35723840/boden-long-sleeve-washed-t-shirt-white-men-boden,-white/"><i className="icon-magnifying"></i></a><a href="javascript:void(0);"><i className="icon-heart"></i></a></div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                           <button aria-label="Go to next slide" className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</section>


    </>
    )
  }
}

export async function getServerSideProps(){
  try {

    const [section1, section2, section3, section4] = await Promise.all([
      axios.get(`https://api.lookstyle.com.au/getHomeSection?title=Section 1`).then((response) => response.data),
      axios.get(`https://api.lookstyle.com.au/getHomeSection?title=Section 2`).then((response) => response.data),
      axios.get(`https://api.lookstyle.com.au/getHomeSection?title=Section 3`).then((response) => response.data),
      axios.get(`https://api.lookstyle.com.au/getHomeSection?title=Section 4`).then((response) => response.data)
    ]);

    return {
        props: {
          sec1: section1.response,
          sec2: section2.response,
          sec3: section3.response,
          sec4: section4.response,
        },
      };

    } catch (error) {
      console.log(error)
      return {
        props: {
          error: error.error,
        },
      };
    }
}

export default Homepage;