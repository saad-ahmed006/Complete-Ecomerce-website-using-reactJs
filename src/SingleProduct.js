import { useEffect } from "react"
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PageNavigation from "./Components/PageNavigation";
import { GlobleUseContext } from './Context/ProductContex'
import MyImages from "./Components/MyImages";
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import FormatCurruncy from './Components/FormatCurruncy'
import AddToCard from "./Components/AddToCard";
import Star from "./Components/Star";
const API = "https://api.pujakaitem.com/api/products";
const Wrapper = styled.section`
.Container{
  display:flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Image{
  width: 40%;
}
.ProductData{
  width: 40%;
padding:4.8rem;
}

.ProductData h2{
text-transform: capitalize;
padding-bottom:0.6rem;
}
.ProductData p{
padding-top:1.3rem;
font-size: 1.2rem;
text-transform: capitalize;
}
.description{
  width: 100%;
  padding: 0px;
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

hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000;
      color: red;
      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
    }

@media (max-width: ${({ theme }) => theme.media.tab}){
  .Container{
  display:flex;
  padding: 0rem ;
  flex-direction: column;
 
}
.Image{
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.ProductData{
  width: 100%;
  background-color: #F6F8FA;
padding:1.5rem;
}
.ProductDataWarrentyIcon p{
text-align: center;
}

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
            <MyImages imgs={image} />
          </div>
          <div className="ProductData">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />

            <p className="ProductDataPrice">
              MRP:<del><FormatCurruncy price={price + 250000} /></del>
            </p>
            <p className="ProductDealDataPrice">
              Deal of the Day:<FormatCurruncy price={price} />
            </p>
            <p className="description" >{description}</p>
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
            <p>Available:<span>{stock > 0 ? "InStock" : "Not Available"}</span></p>
            <p>ID:<span>{id}</span></p>
            <p>Brand:<span>{company}</span></p>
            <hr></hr>
            {stock > 0 ? <AddToCard  product={singleProduct}/> : ""}

          </div>
        </div>
      </Wrapper>
    </>
  )
}
