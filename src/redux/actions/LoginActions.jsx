
import { 
    LOGIN, 
    LOGOUT,
} from './ActionTypes'

export const LoginUsuario = (email, senha) => ({
    type: LOGIN,
    payload: {
        request: {
            url: `/api/autenticacao/`,
            method: 'POST',
            data: {
                email,
                senha
            }
        }
    }
});

export const Logout = () => ({
    type: LOGOUT
});
