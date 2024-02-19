export type LoginPayload = {
    email: string;
    password: string;
    onSuccess?: () => void;
}