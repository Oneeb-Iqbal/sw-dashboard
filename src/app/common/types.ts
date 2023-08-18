export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface AppRoutes {
    path: string;
    name: string;
    icon: string;
}