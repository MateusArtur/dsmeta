import icon from '../../assets/img/notif-icon.svg';
import axios from 'axios';
import '../../components/notification button/styles.css';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type Props = {
    saleId: number;
}

function handleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then( response => {
        toast.info("Sms enviado com sucesso!")
    })
}

function NotificationButton( {saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
