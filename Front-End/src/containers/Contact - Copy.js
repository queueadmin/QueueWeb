import React, {Component} from "react";
import { API } from "aws-amplify";
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, ControlLabel,Button } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
//import { submitapi } from "../libs/submitapi";
import "./About.css";
import logo from "./favicon.png";
export default class Contact extends Component {
constructor(props, context) {
		super(props);
		this.file = null;
		this.state = {
		isLoading: null,
		commentsinput: ""
		};
  }
	validateForm() {
		return this.state.commentsinput.length > 0;
	}
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}
	handleSubmit = async event => {
		event.preventDefault();

		this.setState({ isLoading: true });
		try {
			const attachment = this.file
				? null
				: null;
		await this.createNote({
			attachment,
			commentsinput: this.state.commentsinput
		});
		this.props.history.push("/");
		} catch (e) {
		alert(e);
		this.setState({ isLoading: false });
		}
	}
	
	createNote(note) {
		//return API.post("notes", "/notes", {
		//body: note
		//});
		return null;
	}
  render() {

	return(
			
	<div id="contact-form" class="container" method="post">
    <h3 class="text-center">Contact</h3>

		<div class="row">
		  <div class="col-md-4">
			<p>Have a question? Or just want to say hi?</p>
			<p>Write something and send us your love!</p>
			<br/>
			<p>Want to text instead?</p>
			<p><span class="glyphicon glyphicon-phone"></span> +1 506 478 7540</p>
			
		  </div>
		  <div class="col-md-8">
			<div class="row">
			  <div class="col-sm-4 form-group">
				<input class="form-control" id="nameinput" name="name" placeholder="Name" type="text" required/>
			  </div>
			  <div class="col-sm-4 form-group">
				<input class="form-control" id="phoneinput" name="phone" placeholder="Phone (Optional)" type="phone" required/>
			  </div>
			  <div class="col-sm-4 form-group">
				<input class="form-control" id="emailinput" name="email" placeholder="Email" type="email" required/>
			  </div>
			</div>
			{/*<textarea class="form-control" id="description-input" name="commentsinput" placeholder="Enter your message…" rows="5"></textarea>*/}
			<form onSubmit={this.handleSubmit}>
				<FormGroup controlId="commentsinput">
				<FormControl
				onChange={this.handleChange}
				value={this.state.commentsinput}
				componentClass="textarea"
				placeholder="Enter your message…"
				rows="5"
				
				/>
				</FormGroup>
				<LoaderButton class="btn pull-right"
				block
				bsStyle="primary"
				bsSize="large"
				disabled={!this.validateForm()}
				type="submit"
				isLoading={this.state.isLoading}
				text="Submit"
				loadingText="Submitting..."
				/>
				</form>
			<div class="row">
			  <div class="col-md-12 form-group">
			  {/*<button class="btn pull-right" onClick="submitToAPI(event)" type="submit">Send</button> */}
				
			  </div>
			</div>
		  </div>
		</div>
		<br/>

  </div>

			  
		);
	}
}