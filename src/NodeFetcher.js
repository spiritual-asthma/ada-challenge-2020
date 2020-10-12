import React, {Fragment} from "react";
import './App.css';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
import Card from 'react-bootstrap/Card'; 
import AccordionToggle from 'react-bootstrap/AccordionToggle'; 
import Accordion from 'react-bootstrap/Accordion'; 
import Button from 'react-bootstrap/Button'; 




export default class NodeFetcher extends React.Component {

	state ={
		loading: true,
		profiles: null,
		input:""
	};

	async componentDidMount(){
		const url = "https://randomuser.me/api/?results=100";
		const response =  await fetch(url);
		const data = await response.json();
		this.setState({profiles:data.results, loading:false});

		console.log(data);
	}

	handleChange = (event) =>{
		this.setState({
			input:event.target.value
		});

		console.log('?');
	}


	render() {


		if(this.state.loading){
			return <div>loading...</div> 



		}

		if(!this.state.profiles.length){
			return	<div>did not get a profile</div> 

		}


		const persons = this.state.profiles.map((profiles) =>
		   profiles.name.first + ' ' + profiles.name.last

		);

		let filterPersons = persons.filter(person =>{
			if(person.toLowerCase().indexOf(this.state.input.toLowerCase())!== -1){
				return true;
			}
		});


		return (

	<Fragment>
		<div className="search-bar">

		      <input className="search-input" type="search" onSubmit={this.handleChange} />
		</div>
 			 <Col persons={filterPersons} input={this.state.input} handleChange={this.handleChange}>

		<div className="profile-bar" >
		{this.state.profiles.map(profiles =>(
		<Accordion key ={profiles.login.uuid} input={this.state.input}>

			<Card>
            	<div className="profile-node">
    				<Card.Header>
      					<Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={this.addEventkey}>
							<div>{profiles.name.first}&nbsp;{profiles.name.last}</div>
      					</Accordion.Toggle>
    				</Card.Header>			
        			<Accordion.Collapse eventKey="0" onClick={this.addEventkey}>
              			<Card.Body><div>{profiles.location.city}, {profiles.location.country}</div></Card.Body>
    				</Accordion.Collapse>		
				</div>
			</Card>
		</Accordion>
		))}
		</div>
					 </Col>

   </Fragment>
		);

	}
}
