import './ImageContainer.css';
import PerfumeImg from '../../assets/Images/Perfume.jpg';
function ImageContainer(){
    return(
        <div id="ImageDiv" >
            <img id="MyImg" src={PerfumeImg}></img>
        </div>
    )
}
export default ImageContainer;