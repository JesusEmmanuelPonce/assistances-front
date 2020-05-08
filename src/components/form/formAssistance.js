import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import './formAssistance.css';
import axios from 'axios';

const FormAssistance = ({history}) => {

    const [error, setError] = useState(false);
    const [id, setId] = useState('');

    const assistanceSumit = async e => {
        e.preventDefault()

        if(!id){
            setError(true);
            Swal.fire('Escriba su ID')
            return;
        }
        
        setError(false)
        
        await axios.post('https://assistances-back.herokuapp.com/api/entry', {
            id
        },
            Swal.fire(
            'Asistencia agregada',
            '',
            'success'
            ))
    }

    return(
       <div className="container-form-pb">
            <form onSubmit={assistanceSumit}>
                <input
                    name="id"
                    className="form-item-pb"
                    placeholder="ID"
                    type="text"
                    onChange={e=> setId(e.target.value)}
                />
                <input className="btn-success-pb" type="submit" value="Registrar"/>   
            </form>
       </div>
    )
}

export default withRouter(FormAssistance);