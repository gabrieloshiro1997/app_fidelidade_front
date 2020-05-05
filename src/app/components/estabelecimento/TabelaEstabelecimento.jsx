import React, { Component } from 'react';
import { 
    Button, 
    Table 
} from 'reactstrap';
import { connect } from 'react-redux';
import { ObterEstabelecimentos, ExibirModalAprovarEstabelecimento, DefinirEstabelecimento } from '../../redux/actions/Estabelecimento/EstabelecimentoActions';

class TabelaEstabelecimento extends Component {
    constructor(props){
        super(props);
        this.props.ObterEstabelecimentos();
    }

	exibirModalAprovacao(estabelecimento){
		this.props.ExibirModalAprovarEstabelecimento();
		this.props.DefinirEstabelecimento(estabelecimento);
	}
    render(){
        return(
            <Table responsive>
                <thead>
                <tr>
                    <th>Nome Fantasia</th>
                    <th>CNPJ</th>
                    <th>E-mail</th>
                    <th>Ações </th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.estabelecimentos.map((estabelecimento, key) => (
                            <tr key={key}>
                                <td>{estabelecimento.nome_fantasia}</td>
                                <td>{estabelecimento.cnpj}</td>
                                <td>{estabelecimento.email}</td>
                                <td>
									{ estabelecimento.status_estabelecimento_id !== 1 &&
	                                    <Button disabled className="fa fa-check btn-sm mx-1 bg-secondary" onClick={() => this.exibirModalAprovacao(estabelecimento)}></Button>								
									}

									{ estabelecimento.status_estabelecimento_id == 1 &&
	                                    <Button  className="fa fa-check btn-sm mx-1 bg-primary" onClick={() => this.exibirModalAprovacao(estabelecimento)}></Button>								
									}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        estabelecimentos: state.EstabelecimentoReducer.estabelecimentos
    }
}
export default connect(MapStateToProps, 
    {   
		ObterEstabelecimentos,
		ExibirModalAprovarEstabelecimento,
		DefinirEstabelecimento
    })(TabelaEstabelecimento);