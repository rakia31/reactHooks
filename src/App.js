
import './App.css';
import Card from './Card';
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
function App () {
  
    const [movie,setMovie] = useState("")
  
    const [filter, setFilter] = useState("");
    
    const data = [
      {
        
        title: "Venom",
        image: "https://m.media-amazon.com/images/I/91LPOMer4jL._AC_SL1500_.jpg",
        description: "no one cares"
       
      },
      {
        title: "Anette",
        image: "https://m.media-amazon.com/images/M/MV5BMTE0YTU5YWYtNmFkOS00MmVjLThlOWYtNDU5MmU5YjZjYjI2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        description: "no one cares"
       
      },
      {
      title:"devil's mile",
      image:"https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
      rating: 4,
      date: "2014",
      type: "Action | Crime",
      description:"A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian sup",
      },
      {
        
        title: "Friday",
        image: "https://m.media-amazon.com/images/M/MV5BYmEwNjNlZTUtNzkwMS00ZTlhLTkyY2MtMjM2MzlmODQyZGVhXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg",
        description: "no one cares"
       
      },
      {
        
        title: "Howl's moving castle",
        image: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/howls-moving-castle.jpg?itok=j4s1xK4Q",
        description: "no one cares",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8lCIiP60Wbg2yd44SR0N9QHaLH%26pid%3DApi&f=1",    
       
      },
      {
        
        title: "Get out",
        image: "https://static01.nyt.com/images/2018/03/03/arts/03get-out-posters-print2/merlin_134418533_a3f2d747-aa59-4ba1-92e6-4376f85587eb-jumbo.jpg",
        description: "no one cares"
       
      },
    ]

  

 const handleChange = event => {
    setFilter(event.target.value);
  };

  
    
    // const title =("")
    // const description = ("")
    // const rating = (null)
    // const myUrl =  ("")
    // const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();

    const filteredData = data.filter(item => {
      return Object.keys(item).some(key=>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    // const addMovie = ()=>{
    //   setMovie(x=>[...x,{title:title.current.value,myUrl:myUrl.current.value,description:description.current.value,rating:parseInt(rating.current.value)}])
    //   console.log(
    //       title.current.value,
    //       description.current.value,
    //       rating.current.value,
    //       myUrl.current.value
    //   )}
    return (
      <>
<div>
      <div style={{display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
    
    }}>
        <input style={{height:"30px",
    textAlign:"center"}} value={filter} onChange={handleChange} />
        {filteredData.map(item => (


          <div style={{margin: '10px'}} key={item.title} className="column"> 
            <div >

            <Card title=  {item.title}  imageUrl=  {item.image} description=  {item.description} />
            <br></br>

            </div>
          </div>
        ))}
      </div>
      </div></>
    );
}
    
  


ReactDOM.render(<App />, document.getElementById("root"));
export default App;