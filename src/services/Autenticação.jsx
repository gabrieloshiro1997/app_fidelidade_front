import decode from 'jwt-decode';
import { ACCESS_TOKEN } from '../utils/LocalStorageKeys';

export const isAuthenticated = () => {
    try {
        const token = localStorage.getItem(ACCESS_TOKEN)
        const decoded = decode(token);
        console.log(decoded);
        if (token) {
            if (decoded.exp > Date.now() / 1000) { 
                console.log('is authenticaded');
              return true;
          }
          else {
              return false;
          }
      } else {
          return false
      }

    } catch(err) {
        return false;
    }    
};