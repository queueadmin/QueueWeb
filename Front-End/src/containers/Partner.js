import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "./Partner.css";
import {Watch,Star,Poll} from '@material-ui/icons/';

export default class Partner extends Component {
constructor(props, context) {
    super(props, context);

    this.getTarget = this.getTarget.bind(this);

    this.state = {
      show: true
    };
  }

  getTarget() {
    return ReactDOM.findDOMNode(this.target);
  }
  
  render() {
    const sharedProps = {

    };

		return(
			<div>
				<div id="Partner" class="container-fluid text-center ">
				<center>
				<div class="Partnerdescription"> 
					<br/>
						<div class="sectioncontent custom-container" style={{"background-image":"linear-gradient(60deg,#296a8b 20%,#2f6e83f2,#31708f 80%)"}}>
							<span class="Partner-center strong" style={{color:"white"}}><h1>Your Patients, Our Vision</h1><br/>
							<p style={{width:"50%",textAlign:"center",fontSize:"18px"}}>Managing patient flow through healthcare facilities can be cumbersome. 
							Despite our physicians and nurses working their hardest to ensure the most efficiency, Emergency Rooms are constantly
							being overloaded. How can patients know their wait time, such as 8 hours in one facility but only 2 hours in walk-in clinics at 4:00pm on a Monday?
							</p>
							<p style={{fontSize:"18px"}}>Partner with Queue and find out!</p>
						</span>
						</div>

				</div>
				</center>
			
			<div class="sectioncontent custom-container">
					<div class="row container">
							<div  class="col-sm-6">
								<span class="Partner-center strong" ><h2 style={{color:"#4472c4"}}>Real-time</h2>
									<center><p style={{width:"80%",textAlign:"center",fontSize:"18px"}}>
										Our team will work directly with your healthcare facility to get essential data in realtime.
										Using our proprietary forecast algorithm, we will let users know the best time and facility
										to visit when care is needed. 
									</p></center>
								</span>
								
								
							</div>
							<div className="news" class="col-sm-6">
								<span class="Partner-center" ><Watch style={{color:"#4472c4",paddingTop:"30px",fontSize:"200"}}/>
								</span>
							</div>
					</div>
			</div>
			
			<div class="sectioncontent custom-container" style={{background:"#24717526"}}>
					<div class="row container">
							<div className="news" class="col-sm-6" style={{paddingLeft:0}}>
								<div class="Partner-center" >
									<Star style={{color:"#4472c4",paddingTop:"30px",fontSize:"80"}}/>
									<Star style={{color:"#4472c4",paddingTop:"30px",fontSize:"80"}}/>
									<Star style={{color:"#4472c4",paddingTop:"30px",fontSize:"80"}}/>
									<Star style={{color:"#4472c4",paddingTop:"30px",fontSize:"80"}}/>
									<Star style={{color:"#4472c4",paddingTop:"30px",fontSize:"80"}}/>
								</div>
							</div>
							<div  class="col-sm-6">
								<span class="Partner-center strong" ><h2 style={{color:"#4472c4"}}>Exceptional Healthcare Experience</h2>
									<center><p style={{width:"80%",textAlign:"center",fontSize:"18px"}}>
										Less uncertainty leads to less frustrating experiences. Create an environment in which patients can place their comfort, trust and health peacefully.
									</p></center>
								</span>
							</div>
					</div>
			</div>
			
			<div class="sectioncontent custom-container" style={{background:"white"}}>
					<div class="row container">
							<div className="news" class="col-sm-6" style={{paddingLeft:0}}>
								<div class="Partner-center" >
									<span class="Partner-center strong" ><h2 style={{color:"#4472c4"}}>Load Balancing</h2>
									<center><p style={{width:"80%",textAlign:"center",fontSize:"18px"}}>
										Patients are provided with multiple options when it comes to getting care services. With fewer patients focusing on one facility, the load can be reduced
										and so will wait times.
									</p></center>
								</span>
								</div>
							</div>
							<div className="news" class="col-sm-6">
								<span class="Partner-center" ><Poll style={{color:"#4472c4",paddingTop:"30px",fontSize:"200"}}/>
								</span>
							</div>
					</div>
			</div>
			
			
			</div>
			</div>

			
			  
		);
	}
}