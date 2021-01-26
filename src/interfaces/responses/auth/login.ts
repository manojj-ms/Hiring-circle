import Employee from '../../user/employee';
import Employer from '../../user/employer';

export default interface LoginResponse {
    status: 'success'|'failed';
    message: string;
    profile?: Employee|Employee;
}