import '../Card/Card.css';



let Card = ({images}) =>{
    console.log(images)
    return (
        <div>
            {console.log(images)}
            <img src={images} alt="" />
        </div>
    ) 
}

export default Card;