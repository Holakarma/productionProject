import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import CounterPage from "pages/CounterPage/ui/CounterPage";

export enum AppRoutes{
    MAIN ='main',
    ABOUT='about',
    COUNTER='counter'
}
export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]:'/',
    [AppRoutes.ABOUT]:'/about',
    [AppRoutes.COUNTER]:'/counter',
}

export const RouteConfig:Record<AppRoutes, RouteProps>={
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },
    [AppRoutes.ABOUT]:{
        path:RoutePath.about,
        element:<AboutPage/>
    },
    [AppRoutes.COUNTER]:{
        path:RoutePath.counter,
        element:<CounterPage/>
    },
}