import React from 'react'
import './account.screen.css'
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {

	const navigate = useNavigate();

	const navigateToBack = ()=>{

		navigate('/')
	}
    const [submitProperty,setSubmitProperty] = useState(false);

    const updateSubmitProperty = ()=>{
        setSubmitProperty(!submitProperty);
    }
  return (
    <>
    <div className='profile-Main-Container'>
      <div className='profile-header-container'>
        <div className="profile-back-element">
            <IoArrowBackOutline onClick={navigateToBack}/>
        </div>
        <div className="profile-header-text">
            <p>Profile</p>
        </div>
      </div>
      <div className="profile-content-wrap">
      <div className="profile-content-container">
        <div className="profile-content-header">
            <div className="profile-content-text">
                <p>Personal Details</p>
            </div>
            <div className="profile-content-editBtn">
                <a onClick={updateSubmitProperty} >EDIT</a>
            </div>
        </div>
     
      <div className="profile-icon">
        <FaRegUserCircle/>
      </div>
      <div className='profile-content-body'>
      <div class="container">
		<div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
			<form action=""  method="POST">	
				<div class="row">
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div class="form-group">
							<label class="profile_details_text">First Name:</label>
							<input type="text" name="first_name" class="form-control" value="" required />
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div class="form-group">
							<label class="profile_details_text">Last Name: </label>
							<input type="text" name="last_name" class="form-control" value="" required/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="form-group">
							<label class="profile_details_text">Email Address:</label>
							<input type="email" name="email" class="form-control" value="" required/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="form-group">
							<label class="profile_details_text">Mobile Number:</label>
							<input type="tel" name="phone" class="form-control" value="" required  />
							
						</div>
					</div>
				</div>
				<div class="row">
					
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="form-group">
							<label class="profile_details_text">Gender:</label>
							<select name="gender" class="form-control" value="" required>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
						<div class="form-group">
							<input type="submit" class="btn btn-primary" id='btn-submit' value="Submit" style={{display  : submitProperty ? 'block' : 'none'}}/>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default UserAccount
