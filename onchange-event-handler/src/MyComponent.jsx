// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [delivery,setDelivery] = useState("");


    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleDeliveryChange(event){
        setDelivery(event.target.value);
    }


    return(<div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>        

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Dilivery Instructions"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment Method: {payment}</p>


        <label>
            <input type="radio" value="Pick Up" checked={delivery === "Pick Up"} onChange={handleDeliveryChange}/>
            Pick Up
        </label>

        <label>
            <input type="radio" value="Delivery" checked={delivery === "Delivery"} onChange={handleDeliveryChange}/>
            Delivery
        </label>

        <p>Delivery: {delivery}</p>
    </div>);

}

export default MyComponent



// Summary — React Controlled vs Uncontrolled Inputs
// 1. Why radio buttons need checked manually by using checked={delivery === "Pick Up"}
// Radio buttons have no parent container element in HTML (unlike <select>), so React can't automatically track which is selected. You have to set checked on each one individually.

// 2. Controlled vs Uncontrolled
// Controlled — React owns the value via state, input just reflects it
// Uncontrolled — DOM manages the value on its own, you fetch it via ref when needed
// You can mix both in the same form, just don't switch a single input between the two

// 3. useState is the key
// Not because it's stored in the virtual DOM (it's not — it lives in React's internal fiber tree), but because updating state triggers a re-render, which keeps the input in sync with your data.

// 4. What actually makes an input controlled
// The presence of the value prop (or checked for radio/checkbox), not just onChange. onChange is only for capturing user input back into state.

// 5. React vs vanilla HTML value
// In HTML, value sets the initial value then steps away. In React, value becomes a live binding that forces the input to always match state.