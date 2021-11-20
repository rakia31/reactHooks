
import './Card.css'
function Card({title,imageUrl,description,rating}){
    return(
        <div className="card-container" style={{
          display:'flex',
          justifyContent:'center',
          alignContent:'center',
        }} >

          <div className="image-container"> 
             <img src={imageUrl} alt=''/>
          </div>
          <div className="">
          <div className="card-title">
             <h3>{title}</h3>
          </div>
          <div className="card-body">
             <p>{description}</p>
          </div>
          </div>
          
          <div className="btn">
            <button style={{height:"30px",
    textAlign:"center"}}>
              <a>view more</a>
            </button>
          </div>

        </div>
    )
}
export default Card;
