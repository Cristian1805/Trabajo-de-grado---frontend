import { useDispatch, useSelector } from 'react-redux';
import frutyfenixApi from '../api/frutyfenixApi';

export const useAuthStore = () => {

    const { status, user, errorMessage} = useSelector ( state => state.auth);
    const dispatch = useDispatch();


    const startLogin = async({email, password }) => {
        console.log({ email, password});


        try {
            const resp = await frutyfenixApi.post('/auth', {email, password}); 
            console.log({ resp })
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return {

        //* Propiedades
        errorMessage,
        status, 
        user, 

        //* Métodos
        startLogin
    }


}