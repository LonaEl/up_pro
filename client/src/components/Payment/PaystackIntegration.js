import React, {useState} from 'react';
import PaystackPop from '@paystack/inline-js';

const PaystackIntegration = () => {
       const [firstname, setFirstname ] = useState("");
       const [lastname, setLastname ] = useState("");
       const [email, setEmail ] = useState("");
       const [amount] = useState("");

       const pay = (e) => {
         e.preventDefault();
         const paystack = new PaystackPop()
         paystack.newTransaction({
            key:"pk_test_6bcfa7fac8e0dcf2a352b04ca4c7d1116bc27f3c",
            amount: amount,
            firstname,
            lastname,
            email,
            onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert (message)
                setFirstname("");
                setLastname("");
                setEmail("");
            },
            onCancel() {
                alert("You have cancelled the transaction")
            }
         })
       };

  return (
    <div>
        <form>
            <div>
            <label htmlFor='first-name' >First Name</label>
            <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} id='first-name' />
            </div>
            <div>
            <label htmlFor='last-name' >Last Name</label>
            <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} id='last-name' />
            </div>
            <div>
            <label htmlFor='email' >Email address</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' />
            </div>
        </form>
    </div>
  )
}

export default PaystackIntegration