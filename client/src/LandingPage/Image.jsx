import img from "../images/img6.jpg"
function Image(){
    return (<div style={{backgroundImage:`url(${img})`, backgroundSize: "cover",
    backgroundPosition: "contain",
    width: "100%",
    height: "900px",}}>
    </div>)
}
export default Image;