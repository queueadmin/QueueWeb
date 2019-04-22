import React, { Component } from "react";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import logo from "./favicon.png";

export default class Home extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: true,
			notes: []
		};
	}
	async componentDidMount() {
		if (!this.props.isAuthenticated) {
			return;
		}
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
		return [{}].concat(notes).map(
			(note, i) =>
				i !== 0
					? <ListGroupItem
						key={note.noteId}
						href={`/notes/${note.noteId}`}
						onClick={this.handleNoteClick}
						header={note.content.trim().split("\n")[0]}
					>
					{"Created: " + new Date(note.createdAt).toLocaleString()}
					</ListGroupItem>
					: <ListGroupItem
						key="new"
						href="/notes/new"
						onClick={this.handleNoteClick}
					>
						<h4>
							<b>{"\uFF0B"}</b> Create a new note
						</h4>
					</ListGroupItem>
		);
	}

	handleNoteClick = event => {
		event.preventDefault();
		this.props.history.push(event.currentTarget.getAttribute("href"));
	}

	renderLander() {
		return(
			<div className="lander">
				<h1> <span><img src={logo} height="50" alt={"Q"}/>ueue</span> Notes </h1>
				<p>Waiting wisely</p>
			</div>
		);
	}
	
	renderNotes() {
		return (
			<div className="notes">
				<center><PageHeader> Nearby Facilities </PageHeader></center>
				<ListGroup>
					{!this.state.isLoading && this.renderNotesList(this.state.notes)}
				</ListGroup>
			</div>
		);
	}
	
	render() {
		return(
			<div className="Home">
			{this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
			</div>
		);
	}
}