import { 
	CADASTRAR_ESTABELECIMENTO,
	OBTER_ESTABELECIMENTOS,
	APROVAR_ESTABELECIMENTO,
	REPROVAR_ESTABELECIMENTO,
	EXIBIR_MODAL_APROVAR_ESTABELECIMENTO,
	ESCONDER_MODAL_APROVAR_ESTABELECIMENTO,
	DEFINIR_ESTABELECIMENTO,
	REMOVER_ESTABELECIMENTO
} from './EstabelecimentoActionTypes'


export const CadastrarEstabelecimento = (estabelecimento) => ({
    type: CADASTRAR_ESTABELECIMENTO,
    payload: {
        request: {
            url: `/api/preCadastroEstabelecimento`,
            method: 'POST',
            data: estabelecimento
        }
    }
});

export const ObterEstabelecimentos = () => ({
    type: OBTER_ESTABELECIMENTOS,
    payload: {
        request: {
            url: `/api/estabelecimento`,
            method: 'GET',
        }
    }
});

export const AprovarEstabelecimento = (id) => ({
    type: APROVAR_ESTABELECIMENTO,
    payload: {
        request: {
            url: `/api/estabelecimento/aprovar`,
            method: 'PUT',
            data: {
				id
			}
        }
    }
});

export const ReprovarEstabelecimento = (id) => {
	console.log('Reprovar estabelecimento', id);
	return {
		type: REPROVAR_ESTABELECIMENTO,
		payload: {
			request: {
				url: `/api/estabelecimento/reprovar`,
				method: 'PUT',
				data: {
					id
				}
			}
		}
	}
};

export const ExibirModalAprovarEstabelecimento = () => ({
    type: EXIBIR_MODAL_APROVAR_ESTABELECIMENTO
});

export const EsconderModalAprovarEstabelecimento = () => ({
    type: ESCONDER_MODAL_APROVAR_ESTABELECIMENTO
});


export const DefinirEstabelecimento = (estabelecimento) => ({
	type: DEFINIR_ESTABELECIMENTO,
	payload: {
		estabelecimento
	}
});

export const RemoverEstabelecimento = () => ({
	type: REMOVER_ESTABELECIMENTO,
});