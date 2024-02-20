export type LoginPayload = {
    email: string;
    password: string;
    onSuccess?: () => void;
}

export type SignupPayload = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    onSuccess?: () => void;
}