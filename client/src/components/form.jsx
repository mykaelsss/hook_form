import React, { useState } from 'react';

const Form = props => {
    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmpassword, setConfirmPassword ] = useState("");
    const [ formError, setFormError ] = useState("");


    const newUser = { firstname, lastname, email, password, confirmpassword };


    const handleUser = (e) => {
        setForm(e.target.value);
        if(e.target.value.length < 2){
            setFormError("Firstname must be 2 characters long.");
        }
        else {
            setFormError("");
        }
    }

    return(
        <div className='d-flex flex-column gap-5'>
            <form  onSubmit={ (e) => e.preventDefault() } className="d-flex flex-column gap-3 bg-primary rounded-1 py-3 px-5">
                <div>
                    <label htmlFor="firstName"> First Name:</label>
                    <input className='bg-light form-control' type="text" onChange={  (e) => setFirstname(e.target.value)  }/>
                    {
                        (firstname.length < 2 )?
                        <p>First Name must be at least 2 characters</p> : ''
                    }
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name:</label>
                    <input className='bg-light form-control' type="text" onChange={ (e) => setLastname(e.target.value)}  />
                    {
                        (lastname.length < 2 )?
                        <p>Last Name must be at least 2 characters</p> : ''
                    }
                </div>
                <div>
                    <label htmlFor="email"> Email:</label>
                    <input className='bg-light form-control' type="text" onChange={ (e) => setEmail(e.target.value)}/>
                    {
                        (email.length < 2 )?
                        <p>Email must be at least 2 characters</p> : ''
                    }
                </div>
                <div>
                    <label htmlFor="password"> Password:</label>
                    <input className='bg-light form-control' type="password" onChange={ (e) => setPassword(e.target.value)}/>
                    {
                        (password.length < 8 )?
                        <p>Password must be at least 8 characters long</p>: ''
                    }
                    {
                        (password !== confirmpassword )?
                        <p>Passwords must match</p> : ''
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword"> Confirm Password:</label>
                    <input className='bg-light form-control' type="password" onChange={ (e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div className='bg-primary py-3 px-5 rounded-1 text-start'>
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
