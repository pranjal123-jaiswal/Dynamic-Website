import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Baseurl from "../../Baseurl";
import axios from "axios";import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import img from "../../Images/d43.png";
import img2 from "../../Images/d44.png";
import img3 from "../../Images/d45.png";
import img4 from "../../Images/d46.png";
import img5 from "../../Images/d47.png";
import {useNavigate} from "react-router-dom";

const MobileView = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let url = `${Baseurl()}api/v1/product/${id}`;

    try {
      const res = await axios.get(url);
      console.log("hi")
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts()
  } , [])

  console.log(id)
  return (
    <>
      <Navbar />
      <NavbarCategory />
      <div className="mobileviewcont">
        <div className="mobileviewcontl">
          <div className="singlecont">
            <div className="singlecontl">
              <div className="singleitem">
                <img src={products[0]?.images[0]} alt="" />
              </div>
              <div className="singleitem">
                <img src={products[0]?.images[0]} alt="" />
              </div>
              <div className="singleitem">
                <img src={products[0]?.images[0]} alt="" />
              </div>
              <div className="singleitem">
                <img src={products[0]?.images[0]} alt="" />
              </div>
            </div>
            <div className="singlecontr">
              <div className="mobileimg">
                <img src={products[0]?.images[0]} alt="" />
              </div>
              <div className="mobilebtn">
                <button className="bt1" onClick={()=>navigate("/cart")}>Add To Cart</button>
                <button className="bt2">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileviewcontr">
          <div className="mobileviewdetail">
          <h6>{`${products[0]?.name} (${products[0]?.color[0]})`}</h6>
            <h6>Extra &#x20B9;1190 off</h6>
            <div className="detaillst">
              <h6>&#x20B9; {products[0]?.price} &#x20B9;{products[0]?.brand}</h6>
            </div>
            {products[0]?.features.map((item, key) => (
              <h6 key={key}>{item}</h6>
            ))}

            {/* <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6> */}
            <div className="mobileviewdetailbtn">
              <div></div>
              <button className="btt">Check Delivery</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileviewcont2">
        <div className="mobileviewcont2l"></div>
        <div className="mobileviewcont2r">
          <div className="mobileviewcont2r2">
            <h4>Sold By</h4>
            <div className="flex1">
              <img src={img2} alt="" />
              <h3>Lorem Ipsum Name</h3>
              <button>View Shop</button>
            </div>
            <div className="flex2">
              <div className="flex2l">
                <div className="flex2lc">
                  <h6>Rating</h6>
                  <div className="staricon">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <h6>4.5</h6>
              </div>
              <div className="flex2r">
                <div className="flex2ritem">
                  <h4>2</h4>
                  <h5>Followers</h5>
                </div>
                <div className="flex2ritem">
                  <h4>2</h4>
                  <h5>Products</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileviewcont3">
        <h3>You might be Interested in </h3>
        <div className="flex3">
            <div className="boxitm">
                <img src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img src={img4} alt="" />
            </div>
            <div className="boxitm">
                <img src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img src={img5} alt="" />
            </div>
            <div className="boxitm">
                <img src={img4} alt="" />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MobileView;
