import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Baseurl from "../../Baseurl";
import axios from "axios";
import Footer from "../Homepage/Footer/Footer";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory from "../Homepage/NavbarCategory/NavbarCategory";
import img from "../../Images/d33.png";
import img2 from "../../Images/d49.png";
import img3 from "../../Images/d50.png";
import img4 from "../../Images/d49.png";
import img5 from "../../Images/d50.png";

import {useNavigate} from "react-router-dom";

const FurnitureView = () => {
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

            {/* <h6>+&#x20B9; 29 Packaging Charges</h6>
            <h6>Banking Offers 3000 lorem ipsum hiwbqef kjeqdv d</h6>
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
      
      <div className="mobileviewcont3">
        <h3>You might be Interested in </h3>
        <div className="flex3">
            <div className="boxitm">
                <img style={{margin:"10% 2%", width:"90%"}} src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img4} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img3} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img5} alt="" />
            </div>
            <div className="boxitm">
                <img style={{margin:"4% 2%"}} src={img4} alt="" />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FurnitureView;
