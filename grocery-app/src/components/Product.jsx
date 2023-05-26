import { Link } from "react-router-dom"
import Constants from "../api/Constants"

const Product= (props)=>{
const{ _id, productName, unit, price, mrp, image}= props.data

return(
    <>
     <div class="col-sm-4">
    <div class="card">
        <img src={Constants.IMAGE_URL +image} className="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
        <p class="card-text">
            {unit}
        </p>
        <h2>
           <span>&#8377;</span> {price}
            <span style={{fontSize: '22px', marginLeft: '10px', color: '#888'}}>
                <del><span>&#8377;</span>{mrp}</del>
            </span>
        </h2>

        <Link to={'/product/detail/'+ _id} class="btn btn-primary btn-block">Show Details</Link>
      </div>
    </div>
  </div>
    </>
)
}
export default Product