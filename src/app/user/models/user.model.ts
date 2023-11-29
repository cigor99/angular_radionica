export interface UserDTO {
    id: number;
    name: string;
    surname: string;
    email: string;
}

export interface CreateUserRequest {
    name: string;
    surname: string;
    email: string;
}
