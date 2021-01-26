export default interface SignupRequest {
    uen: string;
    companyname: string;
    email: string;
    password: string;
    confirmpassword: string;
    role: 'employer' | 'employee';
}