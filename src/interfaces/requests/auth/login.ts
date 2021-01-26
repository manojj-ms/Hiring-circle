export default interface LoginRequest {
    email: string;
    password: string;
    role: 'consumer' | 'merchant';
}