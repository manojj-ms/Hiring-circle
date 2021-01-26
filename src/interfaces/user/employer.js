export default interface Employer {
    uid: string;
    companyname: string;
    email: string;
    password: string;
    confirmpassword: string;
    role: 'employer';
}