import React, {useState} from "react";
import axios from "axios"
const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit= (e)=> {
    console.log('submitted')
    if(e) e.preventDefault();
    axios.post('http://localhost:3333/login', {email: email, password: password} )
    .then((res) => {
      localStorage.setItem('isUser', true)
      props.history.push('/')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1>Authentication</h1>
        <form onSubmit={handleSubmit}>
          <div class="form-group">  
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              onChange={(e)=> setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              onChange={(e)=> setPassword(e.target.value)}

              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={()=>handleSubmit()} type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
