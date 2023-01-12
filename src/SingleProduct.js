import { useEffect } from "react"
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PageNavigation from "./Components/PageNavigation";
import { GlobleUseContext } from './Context/ProductContex'
import MyImages from "./Components/MyImages";
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import FormatCurruncy from './Components/FormatCurruncy'
const API = "https://api.pujakaitem.com/api/products";
const Wrapper = styled.section`
.Container{
  display:flex;
  padding: 6rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Image{
  /* background-color: gray; */
  width: 40%;

}
.ProductData{
  width: 40%;
padding:4.8rem;
}

.ProductData h2{
text-transform: capitalize;
padding-bottom:1.8rem;
}
.ProductData p{
padding-top:1.8rem;
font-size: 1.2rem;
text-transform: capitalize;
}
span{
  font-weight: bold;
}
.ProductDealDataPrice{
  color: blueviolet;
  font-weight:600;
  font-size:0.9rem;
}
.ProductWarrenty{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top:1.8rem;

}
.ProductDataWarrentyIcon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Icon{
  font-size: 3.3rem;
  background-color: #d9dcde;
  border-radius: 20px;
  padding:0.4rem;
}
.Divider{
  border: 1px solid #d9dcde;
  margin-top: 0.4rem;
}
`;

export default function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } = GlobleUseContext()
  const { id } = useParams();
  const {
    id: alis,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])

  if (isSingleLoading) {
    <div className="PageLoading">Loading....</div>
  }

  return (
    <>
      <Wrapper>
        <PageNavigation title={name} />
        <div className="Container">
          <div className="Image">
            <MyImages imgs={image}/>
          </div>
          <div className="ProductData">
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} Reviews</p>
            <p className="ProductDataPrice">
              MRP:<del><FormatCurruncy price={price + 250000} /></del>
            </p>
            <p className="ProductDealDataPrice">
              Deal of the Day:<FormatCurruncy price={price} />
            </p>
            <p >{description}</p>
            <div className="ProductWarrenty">
              <div className="ProductDataWarrentyIcon">
                <TbTruckDelivery className="Icon" />
                <p>Free Delivery</p>
              </div>
              <div className="ProductDataWarrentyIcon">
                <TbReplace className="Icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="ProductDataWarrentyIcon">
                <TbTruckDelivery className="Icon" />
                <p>Thapa Delivered</p>
              </div>
              <div className="ProductDataWarrentyIcon">
                <MdSecurity className="Icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
<div className="Divider"></div>
<p>Available:<span>{stock >0 ? "InStock":"Not Available"}</span></p>
<p>ID:<span>{id}</span></p>
<p>Brand:<span>{company}</span></p>





          </div>
        </div>
      </Wrapper>
    </>
  )
}
