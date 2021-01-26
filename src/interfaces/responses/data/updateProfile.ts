import Consumer from '../../user/consumer';
import Merchant from '../../user/merchant';

export default interface updateProfileResponse {
    status: 'success'|'failed';
    message: string;
    profile?: Merchant|Consumer;
}