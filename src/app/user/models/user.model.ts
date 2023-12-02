export interface UserDTO {
    id: number;
    name: string;
    surname: string;
    email: string;
}

export interface CreateUserRequestDTO {
    name: string;
    surname: string;
    email: string;
}
