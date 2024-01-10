import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if(!email || !password){
        return
    }

    if(email === "admin@gmail.com" && password === "123456"){
        localStorage.setItem('isAuth', true)
    }else{
        return
    }   
  };
  return (
    <main className="main d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back, Chris</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center">
                      <img
                        src="img\avatars\avatar.jpg"
                        alt="Chris Wood"
                        className="img-fluid rounded-circle"
                        width="132"
                        height="132"
                      />
                    </div>
                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <small>
                          <a href="pages-reset-password.html">
                            Forgot password?
                          </a>
                        </small>
                      </div>
                      <div className="text-center mt-3">
                        <input
                          type="submit"
                          className="btn btn-lg btn-primary"
                          value="Sign in"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
