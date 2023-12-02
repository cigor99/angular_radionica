export interface UserDTO {
    id: number;
    name: string;
    surname: string;
    email: string;
}

export interface UpsertUserRequestDTO {
    name: string;
    surname: string;
    email: string;
}
