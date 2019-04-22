import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Components
import {ExpansionPanel,ExpansionPanelDetails,ExpansionPanelSummary,Card,CardActionArea} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./FAQ.css";

//Pictures
import diag from "./Resources/diagram.png";
import opt811 from "./Resources/options811.png";
import optRX from "./Resources/optionsRX.png";
import optFD from "./Resources/optionsFD.png";
import optCL from "./Resources/optionsclin.png";
import optER from "./Resources/optionsER.png";
import CallmadeIcon from '@material-ui/icons/CallMade';
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class FAQ extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
	<div className="FAQ">
				<div className="FAQtitle">
					<center><h1>We have <span class="color-hero-2">answers</span>!</h1></center>
				</div>
				<hr/>
				  <div className={classes.root}>
					<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<h4>I don't feel well, what should I do?</h4>
					  </ExpansionPanelSummary>
					  <ExpansionPanelDetails>
							<span>
							<p>Choosing the right type of facility for your care can dramatically reduce your wait.<br/>
							There are multiple options when you feel unwell, depending on your 
							level of urgency. You can see the list below for your options*:</p>
							<a class="col-sm-2" href="https://www.sowhywait.ca/tele-care">
								<Card className="news">
										<CardActionArea>
											<center><img  src={opt811} alt="Tele-Care" width="50%" height="auto"/>
											<h4>Tele-Care</h4></center>
											<div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
							<a class="col-sm-2" href="https://www.sowhywait.ca/pharmacy">
								<Card className="news">
										<CardActionArea>
											<center><img  src={optRX} alt="RX" width="50%" height="auto"/>
											<h4>Pharmacy</h4></center>
											<div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
							<a class="col-sm-2" href="https://www.sowhywait.ca/doctors">
								<Card className="news">
										<CardActionArea>
											<center><img  src={optFD} alt="Family Doctor" width="50%" height="auto"/>
											<h4>Family Doctor</h4></center>
											<div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
							<a class="col-sm-2" href="https://www.sowhywait.ca/afterhoursclinics">
								<Card className="news">
										<CardActionArea>
											<center><img  src={optCL} alt="Clinics" width="50%" height="auto"/>
											<h4>Walk-in Clinics</h4></center>
											<div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
							<a class="col-sm-2" href="https://www.sowhywait.ca/afterhoursclinics">
								<Card className="news">
										<CardActionArea>
											<center><img  src={optER} alt="Emergency Room" width="50%" height="auto"/>
											<h4>Emergency Room</h4></center>
											<div class="forward"> Read More  <CallmadeIcon /></div>
										</CardActionArea>
								</Card>
							</a>
							<i><b>*Note: You will be redirect to sowhywait.ca when click on the options below</b></i>
							</span>
					  </ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
					  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<h4>What is the process when I get in the Emergency Room?</h4>
					  </ExpansionPanelSummary>
					  <ExpansionPanelDetails>
						<p>When you arrive at the ER, you will be assess according to the following diagram:</p>
									<center><img class="responsive" src={diag} alt="ER diagram" width="60%" height="auto"/></center>
					  </ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
					  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<h4>What is Emergency Wait Time?</h4>
					  </ExpansionPanelSummary>
					  <ExpansionPanelDetails>
						<p>The wait time presented here refers to the time 
									in hours between being registered in the Emergency Department 
									and seeing a doctor or nurse practitioner.</p>
					  </ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
					  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<h4>Is this free?</h4>
					  </ExpansionPanelSummary>
					  <ExpansionPanelDetails>
						<div>
						<p>We <b>do not</b> want to charge anyone for the privillege of knowing wait-time</p>
						<p>In fact, in a paper to one of our advisor, our team's biggest dillemas was how
						to make this work without actually costing anyone a dime.</p>
						<p>Now, things are not always as we wanted it to be. Our <b>highly trained</b> monkeys* behind this
						page are working very hard to deliver the data from the facilities to us. We think they 
						should be fed to be able to keep the data constantly up to date.
						</p>
						<br/>
						<p>So...we came up with a solution!</p>
						<br/>
						<p>Our model will have two tiers:
				<ul>
					<li>Everyone will be able to access general wait-time data for <b>FREE</b></li>
					<li>With a price of a cup of coffee, you will be able to access more detailed
						data including your place in line, as well as personal estimated wait-time.
						Additionally, you will help the monkeys to work at their best. Thank you!
					</li>
				</ul>
			</p><br/>
			<p>Q: <b style={{fontFamily:"cursive"}}>"Wait! Hold On! I thought our healthcare system is free?"</b></p>
			<p>A: We are currently in talks to have our system funded by our Government or other sources. However, to be able to 
			   rapidly rolling out to help our in-need citizens to find the best place to have their health checked, we believe 
			   that this model will be the most suited at the moment.
			</p>
			<br/>
			<br/>
			<p><i>*: monkeys are just nicknames that we use to describe our backend system. 
			There are no real monkeys being forced to work.</i></p>
			</div>
		 </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
	</div>
    );
  }
}

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);