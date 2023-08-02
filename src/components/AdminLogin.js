import React from 'react'
import "./AdminLogin.css"
export default function AdminLogin() {
  return (
    <div>
      <div class="d-flex justify-content-center align-items-center mt-5">


<div class="card">

    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item text-center">
          <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
        </li>
       
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          
          <div class="form px-4 pt-5">

            <input type="text" name="" class="form-control" placeholder="Email or Phone"/>

            <input type="text" name="" class="form-control" placeholder="Password"/>

            <div class="col-md-6 d-flex justify-content-center">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
            <button class="btn btn-dark btn-block">Login</button>

          </div>



        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          
        </div>
        
       </div>
    
  
  

</div>


</div>
    </div>
  )
}
