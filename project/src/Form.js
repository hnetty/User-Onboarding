import React from 'react'


export default function Form(props){

    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        errors,
    } = props

    return(

        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a New User</h2>
                <button>Add</button>
            </div>

            <br></br>
            <br></br>

            <div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
                <div>{errors.name}</div>
            </div>

            <div>
                <h3>Input New User Info Here:</h3>
                <label>User Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                        maxLength='30'
                    />
                </label>

                <br></br>
                <br></br>

                <label>Email Address:&nbsp;
                    <input 
                        id='emailInput'
                        type='text'
                        name='email'
                        onChange={onInputChange}
                        value={values.email}
                    />
                </label>

                <br></br>
                <br></br>

                <label>Password:&nbsp;
                    <input 
                        
                        type='text'
                        name='password'
                        onChange={onInputChange}
                        value={values.password}
                    />
                </label>

                <br></br>
                <br></br>

                <label>Agree to Terms of Service?
                    <input 
                        name='terms'
                        type='checkbox'
                        checked={values.terms}
                        onChange={onCheckboxChange}
                    />
                </label>
            </div>
            
        </form>
    )

}