import { AppRoutes } from "./types";

export const appRoutes : Array<AppRoutes> = [
    {
        name: "login",
        path: "",
        icon: "check_circle_outline",
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboard",
    },
    {
        name: "Profile",
        path: "/profile",
        icon: "account_circle",
    },
    {
        name: "Favourites",
        path: "/favourites",
        icon: "favorite",
    }
]