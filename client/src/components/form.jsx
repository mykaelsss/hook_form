import React, { useState } from 'react';

const Form = props => {
    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmpassword, setConfirmPassword ] = useState("");

    const createUser = (e) => {
        e.preventDefualt();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    return(
        <div className='d-flex flex-column gap-5'>
            <form onSubmit={ createUser } className="d-flex flex-column gap-4 bg-primary rounded-1 p-3">
                <div className='d-flex gap-2'>
                    <label htmlFor="firstName"> Firstname:</label>
                    <input className='bg-light form-control' type="text" onChange={ (e) => setFirstname(e.target.value)}/>
                </div>
                <div className='d-flex gap-2'>
                    <label htmlFor="lastName"> Lastname:</label>
                    <input className='bg-light form-control' type="text" onChange={ (e) => setLastname(e.target.value)}/>
                </div>
                <div className='d-flex gap-2'>
                    <label htmlFor="email"> Email:</label>
                    <input className='bg-light form-control' type="text" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div className='d-flex gap-2'>
                    <label htmlFor="password"> Password:</label>
                    <input className='bg-light form-control' type="password" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div className='d-flex gap-2'>
                    <label htmlFor="confirmPassword"> Confirm Password:</label>
                    <input className='bg-light form-control' type="password" onChange={ (e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div className='bg-primary py-3 px-5 rounded-1'>
                <h5>Your Form Data</h5>
                <p> Firstname: { firstname } </p>
                <p> Lastname: { lastname }</p>
                <p> Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmpassword }</p>
            </div>
        </div>
    )
}

export default Form
