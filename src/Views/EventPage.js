import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import { Redirect } from "react-router-dom";

import { Scrollbars } from "react-custom-scrollbars";
import { formatTime, datePrettier } from "../Helpers/dateHelpers";

//styles
import {
	EventWrapper,
	EventLeftSide,
	EventRightSide
} from "../Styles/eventStyles/eventPageStyles";

//components
import Map from "../Components/eventComponents/Map";
import { Button } from "../Components/main/Button";
import Loading from '../Components/main/Loading'

class Event extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			group: {},
			redirect: false
		};
		this.redirect = () => {
			this.setState({ redirect: true });
		};
	}

	componentDidMount() {
		axios
			.get(
				"https://cors-anywhere.herokuapp.com/https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1"
			)
			.then(response => {
				let res = response.data[0];
				this.setState({
					venue: res.venue,
					id: res.id,
					group: res.group,
					datetime: res.time,
					desc: res.description
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		
		const { id, venue, group, datetime, desc, redirect } = this.state;

		if (redirect) {
			return <Redirect exact push to={`/DallasMeetup/${id}/RSVP`} />;
		}

		return (
			<>
			{ !this.state.venue ? <Loading /> : 
				(<EventWrapper>
				<EventLeftSide>
					<div className='topLeft'>
						<h1> NEXT {group.name} MEETUP</h1>
					</div>
					<div className='deets'>
						<h3>
							When: {datePrettier(datetime)} @ {formatTime(datetime)}
						</h3>
						<h3>
							Where:{" "}
							{venue
								? ` ${venue.address_1} ${venue.city} ${venue.state},  ${venue.zip}`
								: null}{" "}
						</h3>
					</div>
					<div className='textDesc'>
						<Scrollbars>{parse(`${desc}`)}</Scrollbars>
					</div>
				</EventLeftSide>
				<EventRightSide>
					<div className='topRight'>{venue ? <h3>{venue.name}</h3> : null}</div>
					<div className='map'>
						{venue ? <Map lat={venue.lat} lng={venue.lon} /> : null}
					</div>
					<div className='bottomRight'>
						<p>For more detailed information click the marker on the map</p>
					</div>
					<div className='rightButton'>
						<Button
							label='RSVP DETAILS'
							width='100%'
							height='60px'
							click={this.redirect}
						/>
					</div>
				</EventRightSide>
			</EventWrapper>)}
			</>
		);
	}
}

export default Event;
