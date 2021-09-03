import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Sign.scss';
import { validate } from '../components/SignComponent/Validate';

const Sign = () => {

    const history = useHistory()

    const initialState = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirm_passowrd: '',
    }

    const [isSignin, setIsSignin] = useState(false)
    const [value, setValue] = useState(initialState);
    const [error, setError] = useState(value);
    const [data, setData] = useState({});

    const onchangeHandle = (e) => {
        const name = e.target.name;

        setValue({
            ...value,
            [name]: e.target.value,
        });

        // console.log(value)
    }

    const submitHandle = (e) => {
        e.preventDefault();

        setError(validate(value));

    }

    const switchHandle = () =>{
        setIsSignin(!isSignin)
        setValue(initialState)
        setError(initialState)
    }
    // console.log(error)

    useEffect(() => {
        if(Object.keys(error).length === 0){
            console.log(value)
            setData(value)
            history.push('/')
        }
        else{
            setData({})
        }
    }, [error, history, value])

    return (
        <div className="sign_form">
            <div className="container">
                <div className="form_wrapper">
                    <h2>{isSignin ? 'Login' : 'Sign Up'} </h2>
                    <div className="form_card">
                         <h6> { data.fname } </h6>
                        <form onSubmit={submitHandle} className="form_fields">
                            <div className="form_group">
                                {
                                    !isSignin && (<>
                                        <div className="field_div">
                                            <input onChange={onchangeHandle} type="text" name="fname" placeholder="First Name" />
                                            {error.fname && <span className="error" > {error.fname} </span>}
                                        </div>
                                        <div className="field_div">
                                            <input onChange={onchangeHandle} type="text" name="lname" placeholder="Sur Name" />
                                            {error.lname && <span className="error" > {error.lname} </span>}
                                        </div>
                                    </>
                                    )
                                }
                            </div>
                            <div className="form_group_block">

                                <div className="row_input_field">
                                    <input onChange={onchangeHandle} type="email" name="email" placeholder="Email..." />
                                    {error.email && <span className="error"> {error.email} </span>}
                                </div>

                                <div className="row_input_field">
                                    <input onChange={onchangeHandle} type="password" name="password" placeholder="Password" />
                                    {error.password && <span className="error"> {error.password} </span>}
                                </div>
                                {
                                    !isSignin && (
                                        <div className="row_input_field">
                                            <input onChange={onchangeHandle} type="password" name="confirm_passowrd" placeholder="Confirm Password" />
                                            {error.cnfm_pswd && <span className="error"> {error.cnfm_pswd} </span>}
                                        </div>
                                    )
                                }
                            </div>
                            <button type="submit" className="sign_btn">Sign {isSignin ? 'In' : 'Up'} </button>
                            <div className="switch_text_btn">
                                <h3> {!isSignin && 'Have an account?'} </h3>
                                <button
                                    type="button"
                                    onClick={switchHandle}
                                    className="switch_btn">
                                    {isSignin ? 'Create an account' : 'Login'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign
