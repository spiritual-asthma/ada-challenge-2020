import React, {Fragment} from "react";
import './App.css';
import Card from 'react-bootstrap/Card'; 
import CardImg from 'react-bootstrap/CardImg'; 
import Button from 'react-bootstrap/Button'; 




export default class DetailView extends React.Component {






	render() {


		return(
		<Fragment>

			<div>

				<Card style={{ width: '80%' }}>
				  <Card.Img variant="top" />
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="primary">Go somewhere</Button>
				  </Card.Body>
				</Card>
			</div>
		</Fragment>


			);

	}
}
