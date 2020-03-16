import React, { Component } from 'react';
import { Badge, 
  Card, 
  CardBody, 
  CardHeader, 
  Col, 
  Button, 
  Table, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Row,
  FormGroup,
  Label,
  Input } from 'reactstrap';

export default class Usuario extends Component {
    constructor(props){
      super(props);
      this.state = {
        modal: false,
        modalExcluir: false
      }
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      })
    }

    toggleExcluir() {
      this.setState({
        modalExcluir: !this.state.modalExcluir
      })
    }
    render(){
        return(
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <h5>Lista de Usuários</h5> 
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>CPF</th>
                      <th>E-mail</th>
                      <th>Ações </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gabriel Kionori Oshiro</td>
                      <td>42284500838</td>
                      <td>
                        gabrieloshiro1997@gmail.com
                      </td>
                      <td>
                        <Button className="fa fa-edit btn-sm mx-1 bg-primary" onClick={() => this.toggle()}></Button>
                        <Button className="fa fa-trash btn-sm mx-1 bg-danger" onClick={() => this.toggleExcluir()}></Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            <Modal isOpen={this.state.modal} toggle={() => this.toggle()} className={this.props.className}>
              <ModalHeader toggle={() => this.toggle()}>Usuário</ModalHeader>
              <ModalBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="nome">Nome</Label>
                      <Input type="text" id="nome" placeholder="Digite seu nome" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input type="text" id="cpf" placeholder="Digite seu CPF" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="email">E-mail</Label>
                      <Input type="text" id="email" placeholder="Digite seu e-mail" required />
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => this.toggle()}>Salvar</Button>{' '}
                <Button color="secondary" onClick={() => this.toggle()}>Cancelar</Button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modalExcluir} toggle={() => this.toggleExcluir()} className={this.props.className}>
              <ModalHeader toggle={() => this.toggleExcluir()}>Excluir Usuário</ModalHeader>
              <ModalBody>
                Deseja realmente Excluir o usuário?
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={() => this.toggleExcluir()}>Cancelar</Button>
                <Button color="danger" onClick={() => this.toggleExcluir()}>Excluir</Button>{' '}
              </ModalFooter>
            </Modal>
          </Col>
        )
    }
}