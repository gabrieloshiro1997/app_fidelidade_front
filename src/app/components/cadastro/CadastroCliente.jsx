import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Card,
	CardBody,
	CardGroup,
	Col,
	Row,
	Button
  } from 'reactstrap';
  
  
export default class CadastroCliente extends Component {
    constructor(props){
        super(props);
	}
	
    render() {
    return (
		<div className="animated fadeIn">
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col xs="8" sm="8">
							<CardGroup>
								<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
									<CardBody className="text-center">
										<h2>Cadastrar um novo cliente</h2>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
					<div className="text-center">
						<Link to="/Cadastro">
							<Button color="light" width='50' className="mt-3" active tabIndex={-1}>Voltar para o cadastro</Button>
						</Link>
					</div>
				</Container>
			</div>
		</div>
    );
  }
}