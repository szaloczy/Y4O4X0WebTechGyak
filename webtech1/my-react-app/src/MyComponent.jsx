import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

   function handleCommentChange(event){
        setComment(event.target.value);
   }

    function handleNameChange(event) {
        setName(event.target.value)
    }
    
    function handleQuantity(event){
        setQuantity(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <>
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={(handlePaymentChange)}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master card">Master card</option>
                <option value="Gift card">Gift card</option>

            </select>

            <p>Payment: {payment}</p>

            <label htmlFor="">
                <input 
                type="radio"
                 value="Pick up" 
                checked={shipping === "Pick up"}
                 onChange={handleShippingChange}
                  />
                Pick up
                <br />
            </label>
            <label htmlFor="">
            <input 
                type="radio"
                 value="Delivery" 
                checked={shipping === "Delivery"}
                 onChange={handleShippingChange}
                  />
                Delivery
            </label>

            <p>Shipping:{shipping}</p>

        </div>
        </>
    );
}

export default MyComponent