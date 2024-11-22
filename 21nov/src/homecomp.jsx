// import { Component } from "react";
// let obj=[{
//     product:"obj",
//     price:20,
//     avaialable:true
// },{
//     product:"obj1",
//     price:30,
//     avaialable:true
// }]
// class Main extends Component{
    
//     render(){
//         let res;
        
            
         
//             if(obj[0].avaialable && obj[1].avaialable){
//                         res=<h1 style={styles.avaialable}>{obj[0].product} {obj[1].product}</h1>

//             }
//             else{
//                 res=<h1  style={styles.unavialble}>not available</h1>
//             }
        
//             return(
//                 <>
//                 {res}
//                 </>
//             )
//     }
// }

// const styles={
//     avaialable:{color:"green"},
//     unavialble:{color:"red"}
// }
// export default Main;







import { Component } from "react";
import "./homecomp.css"
class Main extends Component{
    
    obj=[
        {
          "available":true,
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 120,
         
          }
        },
        {
          "available":true,
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
            "rate": 4.1,
            "count": 259

          }
        },
        {
          "available":false,
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 55.99,
          "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          "rating": {
            "rate": 4.7,
            "count": 500
          }
        },
        {
          "available":true,
          "id": 4,
          "title": "Mens Casual Slim Fit",
          "price": 15.99,
          "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          "rating": {
            "rate": 2.1,
            "count": 430
          }
        }
        ,
        {
          "available":true,
          "id": 5,
          "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          "price": 695,
          "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 4.6,
            "count": 400
          }
        },
        {
          "available":true,
          "id": 6,
          "title": "Solid Gold Petite Micropave ",
          "price": 168,
          "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 70
          }
        }]   
    render(){
                
  
                
        return(
            <> 
            <div className={this.obj[0].available ? "available" : "unavailable"}>
            <p><strong>Title :</strong>{this.obj[0].title}  <strong> Price :</strong> {this.obj[0].price} <strong>Image :</strong><img src={this.obj[0].image} alt="img1" height={150}></img></p>
            </div>
            {/* ------------------- */}
            <div className={this.obj[1].available ? "available" : "unavailable"}>
            <p><strong>Title :</strong>{this.obj[1].title}  <strong> Price :</strong> {this.obj[1].price} <strong>Image :</strong><img src={this.obj[1].image} alt="img1" height={150}></img></p>
            </div>
            {/* ------------------- */}
            <div className={this.obj[2].available ? "available" : "unavailable"}>
            <p><strong>Title :</strong>{this.obj[2].title}  <strong> Price :</strong> {this.obj[2].price} <strong>Image :</strong><img src={this.obj[2].image} alt="img1" height={150}></img></p>
            </div>
           {/* ------------------- */}
            <div className={this.obj[3].available ? "available" : "unavailable"}>
            <p><strong>Title :</strong>{this.obj[3].title}  <strong> Price :</strong> {this.obj[3].price} <strong>Image :</strong><img src={this.obj[3].image} alt="img1" height={150}></img></p>
            </div>
            {/* ------------------- */}
            <div className={this.obj[4].available ? "available" : "unavailable"}>
            <p><strong>Title :</strong>{this.obj[4].title}  <strong> Price :</strong> {this.obj[4].price} <strong>Image :</strong><img src={this.obj[4].image} alt="img1" height={150}></img></p>
            </div>
           {/* ------------------- */}
            <div className={this.obj[5].available ? "available" : "unavailable"}>
            <p><strong>Title :</strong>{this.obj[4].title}  <strong> Price :</strong> {this.obj[4].price} <strong>Image :</strong><img src={this.obj[4].image} alt="img1" height={150}></img></p>
            </div>
            {/* ------------------- */}
         
            </>
        )
    }

}
export default Main;