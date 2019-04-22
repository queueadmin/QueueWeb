import React, { Component } from "react";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem, PanelGroup, Panel} from "react-bootstrap";
import "./Home.css";
import logo from "./Resources/favicon.png";
// Material icons
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
// Material core components
import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import Card from "../components/Card/Card.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardIcon from "../components/Card/CardIcon.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = {
			isLoading: true,
			notes: []
		};
	}
	async componentDidMount() {
		/*if (!this.props.isAuthenticated) {
			return;
		}*/
		try {
			const notes = await this.notes();
			this.setState({ notes });
		} catch (e) {
			alert(e);
		}
		this.setState({ isLoading: false });
		}
		notes() {
		return API.get("notes", "/notes");
	}

	renderNotesList(notes) {
		const { classes } = this.props;
		return [{}].concat(notes).map(
			(note, i) =>
				i !== 0
					?<Panel eventKey={i}
						bsStyle={this.checkcap(note.content.trim().split("\n")[1])}
						className="panel"
						role="button"
						
					>

						
						<Panel.Heading>
							<Panel.Title toggle className="PanelTitle">
								<div className="container">
								<h4>{note.content.trim().split("\n")[0]}</h4> 
								<div className="panelheaderoverlay"><div className="downarrow"><span className="glyphicon glyphicon-chevron-down"></span></div>
									</div>
								</div>
							</Panel.Title>
						</Panel.Heading>
						<Panel.Body collapsible>
								<center>
									<div class="panelmap">
										<span> <img src={require("./Resources/pic-"+note.content.trim().split("\n")[2]+"-map.jpg")} height="200"/></span>
									</div>
									<br/><br/>
									<span className={"label label-"+this.checkcap(note.content.trim().split("\n")[1])}>
										{"Current Wait: "+note.content.trim().split("\n")[3]+" Hours"}
									</span>
									<br/><br/>
									<div>
									<ProgressBar percentage={note.content.trim().split("\n")[1]} backgroundColor={this.checkcapc(note.content.trim().split("\n")[1])} />
									<p className="progress-text">Occupancy: {note.content.trim().split("\n")[1]}%</p>
									</div>
								</center>
								<br/>
								<div className="panelcontainer">
								<td dangerouslySetInnerHTML={{__html: note.content.trim().split("--.--\n")[1].replace(/\n/g, "<br />")}}></td>
								</div>
						</Panel.Body>	
					</Panel>
					: null
		);
	}

	handleNoteClick = event => {
		event.preventDefault();
		this.props.history.push(event.currentTarget.getAttribute("href"));
	}

	checkcap (capacity) {
		if (capacity < 40){
			var v_label="info";
		} else if (capacity >60) {
			v_label="danger";
		} else {
			v_label="warning";
		}
		return v_label;
	}
	checkcapc(capacity) {
		if (capacity < 40){
			var v_label="#5bc0de";
		} else if (capacity >60) {
			v_label="#d9534f";
		} else {
			v_label="#f0ad4e";
		}
		return v_label;
	}	
	
	handleSelect(activeKey) {
		this.setState({ activeKey });
	}
	
	
	renderLander() {
		return(
			<div className="lander">
				<h1> <span><img src={logo} height="50" alt={"Q"}/>ueue</span> Care </h1>
				<p>Waiting wisely</p>
			</div>
		);
	}
	
	renderNotes() {
		return (
			<div className="page">
				<div className="pagetitle">
					<center><PageHeader> Nearby Facilities </PageHeader>
					</center>
				</div>
					<GridContainer>
					  <GridItem xs={12} sm={12} md={4}>
						<Card chart>
						  <CardHeader color="danger">
							<center><span><h1>9</h1><h4>Hours</h4></span></center>
						  </CardHeader>
						  <CardBody>
							<h4 >Dr. Everett Chalmers Hospital</h4>
							<p >
							  <span>
								<ArrowDownward style={{color:"green"}}/> 10%
							  </span>{" "}
							  lower than usual.
							</p>
						  </CardBody>
						  <CardFooter chart>
							<div >
							  <AccessTime /> updated just now
							</div>
						  </CardFooter>
						</Card>
					  </GridItem>
					  <GridItem xs={12} sm={12} md={4}>
						<Card chart>
						  <CardHeader color="success">
							<center><span><h1>2</h1><h4>Hours</h4></span></center>
						  </CardHeader>
						  <CardBody>
							<h4 >Clinics</h4>
							<p >
							  Recommended!
							</p>
						  </CardBody>
						  <CardFooter chart>
							<div >
							  <AccessTime /> updated 20 minutes ago
							</div>
						  </CardFooter>
						</Card>
					  </GridItem>
					  <GridItem xs={12} sm={12} md={4}>
						<Card chart>
						  <CardHeader color="warning">
						   <center><span><h1>4</h1><h4>Hours</h4></span></center>
						  </CardHeader>
						  <CardBody>
							<h4 >Oromocto Hospital</h4>
							<p >
							  Busy as usual
							</p>
						  </CardBody>
						  <CardFooter chart>
							<div>
							  <AccessTime /> updated 5 minutes ago
							</div>
						  </CardFooter>
						</Card>
					  </GridItem>
					</GridContainer>					

				<PanelGroup 
					accordion
					id="accordion-controlled"
					activeKey={this.state.activeKey}
					onSelect={this.handleSelect}
				>
					{/*!this.state.isLoading && this.renderNotesList(this.state.notes)*/}
				</PanelGroup>
			</div>
		);
	}
	
	render() {
		return(
			<div className="Home">
			{this.props.isAuthenticated ? this.renderNotes() : this.renderNotes
			()/*this.props.isAuthenticated ? this.renderNotes() : this.renderLander()*/}
			</div>
		);
	}
	
}
const Filler =(props) =>{
		return <div className="filler" style={{ width: `${props.percentage}%`,backgroundColor:`${props.backgroundColor}`,label:`${props.percentage}%`}}/>
		}
const ProgressBar =(props) =>{
		return(
			<div className="progress-bar">
				<Filler percentage={props.percentage} max={100} backgroundColor={props.backgroundColor} label={props.percentage}/>
			</div>
			)
		}