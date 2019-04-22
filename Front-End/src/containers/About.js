import React, {Component} from "react";
import ReactDOM from 'react-dom'
import {Modal} from 'react-bootstrap';
import {IconButton,Card,CardActionArea,Fab} from '@material-ui/core/';
import ClearIcon from '@material-ui/icons/Clear';
import CallmadeIcon from '@material-ui/icons/CallMade';
import EmailIcon from '@material-ui/icons/Email';
import "./About.css";
//Logos
import cbc from "./Resources/cbc-logo.png";
import huddle from "./Resources/huddle-logo.png";
import gleaner from "./Resources/gleaner-logo.jpeg";
import aq from "./Resources/aq-logo.png";
import apex from "./Resources/apex-logo.png";
//--
import dat from "./Resources/prof-dat.jpg";
import ish from "./Resources/prof-ish.jpg";
import josh from "./Resources/prof-josh.jpg";
import garr from "./Resources/prof-garr.jpg";
import sw from "./Resources/sw-logo.png";
import news1 from "./Resources/news-pg1.jpg";
import news2 from "./Resources/news-pg2.jpg";
import news3 from "./Resources/news-pg3.jpg";
import news4 from "./Resources/news-pg4.jpg";
export default class About extends Component {
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
		return(
		
			<div id="About" class="container text-center">
				<div class="Aboutdescription"> 
					<br/>
						<div class="About-hook-line">
							<h1 class="About-center">Our mission is to <span class="color-hero-1">improve </span> <span class="color-hero-2">healthcare</span>.<br/>
							</h1>
						</div>
				</div>
				<div class="Contact-us">
				<a href="mailto:admin@queue.care"><Fab variant="extended" className="contactustext" color="primary"><EmailIcon/><h4> Contact Us</h4></Fab></a>
				</div>
			
				<center class="video-container"><iframe   src="https://www.youtube.com/embed/O3bVAXyKMKw" frameborder="0" allow="accelerometer; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</center>
			<div class="news">
			<h1>News About us</h1><hr/>
					<div class="row">
							<a class="col-sm-3" href="https://huddle.today/could-this-app-help-solve-n-b-s-hospital-wait-time-problem/">
								<Card className="news">
										<CardActionArea>
											<img src={news1} alt="Huddle" width="100%"/>
											<img class="logo" src={huddle} alt="Huddle" width="10%"/><h4>Could This App Help Solve N.B.’s Hospital Wait Time Problem?</h4>
											<div class="bottom">Hospital wait times is one of New Brunswick’s biggest healthcare challenges</div><div class="forward"> Read More  <CallmadeIcon /></div>
											</CardActionArea>
								</Card>
							</a>
							<a class="col-sm-3" href="https://www.telegraphjournal.com/daily-gleaner/story/100700515/health-care-app-queue-fredericton-new-brunswick">
								<Card className="news">
										<CardActionArea>
											<img src={news2} alt="Gleaner" width="100%"/>
											<img class="logo" src={gleaner} alt="gleaner" width="10%"/><h4>An app that could track wait times in N.B. ERs?</h4>
											<div class="bottom">What if an app on your phone could tell you how crowded the local emergency room is.</div><div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
							<a class="col-sm-3" href="https://www.cbc.ca/news/canada/new-brunswick/emergency-room-wait-times-1.4800023">
								<Card className="news">
										<CardActionArea>
											<img src={news3} alt="Gleaner" width="100%"/>
											<img class="logo" src={cbc} alt="cbc" width="10%"/><h4>ER wait times got you down? There could be an app for that</h4>
											<div class="bottom">New app would monitor ER wait times for patients with health problems that are less serious.</div><div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
							<a class="col-sm-3" href="http://theaquinian.net/student-made-app-designed-to-curb-hospital-wait-times/">
								<Card className="news">
										<CardActionArea>
											<img src={news4} alt="The AQ" width="100%"/>
											<img class="logo" src={aq} alt="aq" width="10%"/><h4>Student-made app designed to curb hospital wait times</h4>
											<div class="bottom">Four students are developing a platform called Queue to help New Brunswickers with non-urgent conditions avoid long wait times in hospitals.</div><div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
					</div>
			</div>
			
			<h1>Team</h1>
				<hr/>
				<div class="Aboutprofile">
					<div class="row">
						<div class="col-sm-3">
							<Card className="card"
								onClick={() => this.setState({ modaldat: true })}
							>
								<CardActionArea>
									<img src={dat} alt="Dat" width="100%"/>
									<h1>Chien Dat Nguyen Dinh</h1>
									<p class="title">CTO</p>
								</CardActionArea>
							</Card>

						</div>
						<div class="col-sm-3">
							<Card className="card"
								onClick={() => this.setState({ modalish: true })}
							>
								<CardActionArea>						
									<img src={ish} alt="Ishtar" width="100%"/>
									<h1>Ishtar Al-Tahir</h1>
									<p class="title">COO</p>
								</CardActionArea>
							</Card>
						</div>
						<div class="col-sm-3">
							<Card className="card"
								onClick={() => this.setState({ modaljosh: true })}
							>
								<CardActionArea>
									<img src={josh} alt="Josh" width="100%"/>
									<h1>Joshua Sallos</h1>
									<p class="title">CCO</p>
								</CardActionArea>
							</Card>
						</div>
						<div class="col-sm-3">
							<Card className="card"
								onClick={() => this.setState({ modalgarr: true })}
							>
								<CardActionArea>
									<img src={garr} alt="Garrett" width="100%"/>
									<h1>Garrett Moore</h1>
									<p class="title">COOL</p>
								</CardActionArea>
							</Card>

						</div>
					</div>
				</div>
				{/*Modal__________________*/}
				<Modal 
					className="Modal" 
					show={this.state.modalgarr} 
					onHide={() => this.setState({modalgarr:false})}>
					<center>
					<div class="titlepicture">
					<img src={garr} alt="Garrett" width="100%"/>
					</div>
					<h1>Garrett Moore</h1>
					<p class="title">COOL</p>
					<p class="content">I have background in filming for news outlets with a passion for the human experience. Stories about people’s interests and lives fascinate me, and storytelling in and of itself has always captured me interest.
					</p>
					</center>
					<IconButton size="large" alignItems="left" color="primary" onClick={() => this.setState({ modalgarr: false })}>
						<ClearIcon/>
					</IconButton>

					
				</Modal>
				<Modal 
					className="Modal" 
					show={this.state.modaljosh} 
					onHide={() => this.setState({modaljosh:false})}>
					<center>
					<div class="titlepicture">
					<img src={josh} alt="Josh" width="50%"/>
					</div>
					<h1>Joshua Sallos</h1>
					<p class="title">CCO</p>
					<p class="content">Humanist and storyteller determined to change the world <span role="img">⚡</span>. <br/>
					Background in game design, software compliance and community management. 
					Training and experience in digital advertising. Presently studying full time Communications and Public Policy & Science and Technology Studies. Looking for ways to combine that background to create digital platforms that impact real people.
					</p>
					<IconButton size="large" alignItems="left" color="primary" onClick={() => this.setState({ modaljosh: false })}>
						<ClearIcon/>
					</IconButton>
					</center>
				</Modal>
				<Modal 
					className="Modal" 
					show={this.state.modalish} 
					onHide={() => this.setState({modalish:false})}>
					<center>
					<div class="titlepicture">
					<img src={ish} alt="Ish" width="100%"/>
					</div>
					<h1>Ishtar Al-Tahir</h1>
					<p class="title">COO</p>
					<p class="content">As a passionate, efficient and quick-learning worker, I combine my technical and soft skills to lead and manage groups and projects.
					<br/>I graduated UNB with a Bachelors in Electrical Engineering and am currently working on my Masters in the same, with a focus on Biomedical Engineering. I love to help people and working in healthcare is a great way for my to apply skills that I've learnt while also assisting those in need.
					</p>
					<IconButton size="large" alignItems="left" color="primary" onClick={() => this.setState({ modalish: false })}>
						<ClearIcon/>
					</IconButton>
					</center>
				</Modal>
				<Modal 
					className="Modal" 
					show={this.state.modaldat} 
					onHide={() => this.setState({modaldat:false})}>
					<center>
					<div class="titlepicture">
					<img src={dat} alt="Dat" width="100%"/>
					</div>
					<h1>Chien Dat Nguyen Dinh</h1>
					<p class="title">CTO</p>
					<p class="content">I am the CTO of Queue. I am a past project manager intern in GE and an electrical engineering graduate of UNB. I have a passion to bridge the gap of communication between computational equipment and human through my innovations.
					<br/>My experienced includes but not limitted to building effective UI for applications as well as the analyzing and processing data.</p>
					<IconButton alignItems="left" color="primary" onClick={() => this.setState({ modaldat: false })}>
						<ClearIcon/>
					</IconButton>
					</center>
				</Modal>
				
				<div class="content"><h1>The Timeline</h1></div>
				<hr/>
				<div class="ourtimeline">	  
					<div class="timeline">	
					  <div class="timelinecontainer left">
						<div class="content">
						  <h2>Februrary 2018</h2>
						  <p><b>We came in 2nd <br/> at <br/><img src={sw} alt="StartupWeekend" height="25px"/> Startup Weekend Fredericton</b></p>
						  <p>Our very first step was here</p>
						</div>
					  </div>
					  <div class="timelinecontainer right">
						<div class="content">
						  <h2>Summer 2018</h2>
						  <p><b>The media noticed us!</b></p>
						  <p>Our vision was featured on <img src={cbc} alt="cbc" height="25px"/> CBC, <img src={huddle} alt='huddle' height="25px"/> Huddle Today, <img src={gleaner} alt='gleaner' height="25px"/> The Daily Gleaner, <img src={aq} alt='aq' height="25px"/> The Aquinian, and more</p>
						</div>
					  </div>
					  <div class="timelinecontainer left">
						<div class="content">
						  <h2>September 2018</h2>
						  <p><b>Requested for sample data</b></p>
						  
						</div>
					  </div>
					  <div class="timelinecontainer right">
						<div class="content">
						  <h2>December 2018</h2>
						  <p><b>We talked to people!</b></p>
						  <p>Moncton Hospital focus group, including doctors, head of nursing, IT specialists, NBMS executives, and more</p>
						</div>
					  </div>
					  <div class="timelinecontainer left">
						<div class="content">
						  <h2>January 2019</h2>
						  <p><b>We won viewers' choice award at  <img src={apex} alt='Apex' height="25px"/> Competition </b></p>
						</div>
					  </div>
					  
					  <div class="timelinecontainer right">
						<div class="content">
						  <h2>Spring 2019</h2>
						  <p><b>Staff Hiring</b></p><hr/><p><b> Publish first Public Pilot program</b></p>
						</div>
					  </div>
					</div>
				</div>
			</div>
			
			
			  
		);
	}
}