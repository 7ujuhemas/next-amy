/**
 * @param {Object} props
 * @param {Number} props.id
 * @param {String} props.thumbnail
 * @param {String} props.title
 * @param {String} props.description
 * @returns {JSX.Element}
 * @constructor
 */

import { useState } from "react"

export default function CardComponent(props){
    let {id, title, thumbnail, description} = props
    const [loading, setLoading] = useState(false)
    function addToCart(){
        //call service API
        setLoading(true)
        setTimeout(() =>{
            setLoading(false);
        },2000)
        clearTimeout();
    }
    return(
        <section className={'w-auto min-w-[200px] bg-white rounded-xl app-card'}>
            {/**thumbnail */}
            <div className={'app-card-img'}>
                <img 
                    src={thumbnail}
                    alt="thumbnail-card"
                    className={'card-img__images'}

                />
            </div>
            {/**child */}
            {props?.children}

            {/**content */}
            <div className={'p-4 w-full'}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <button onClick={addToCart}>
                        {loading ? "Loading" : "Add to cart"}</button>
                </div>

            </div>
        </section>
    )
}

// function index(){
//     return(
//         <div>
//             <CardComponent>
//                 <div>

//                 </div>
//             </CardComponent>
//         </div>
//     )
// }