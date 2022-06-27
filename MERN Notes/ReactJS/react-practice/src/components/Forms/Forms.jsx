import React, {useState} from 'react'

const Forms = () => {
    const [data, setData] = useState({email: '', password: ''});

    const changeHandler = (e) => {
        setData({...data, [e.target.name] : [e.target.value]});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Email: ${data.email} password: ${data.password}`);
    }

    return (
        <>
            <div>
                <form>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={data.email} onChange={changeHandler} />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={data.password} onChange={changeHandler} />
                    </div>

                    <button onClick={submitHandler}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Forms