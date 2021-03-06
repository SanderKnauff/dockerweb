import {ReactStateDeclaration} from "@uirouter/react";
import {LoginView} from "../view/login/LoginView";
import {BaseView} from "../view/base/BaseView";
import {HomeView} from "../view/home/HomeView";
import {ContainersView} from "../view/containers/ContainersView";
import {ContainerDetailsView} from "../view/containers/ContainerDetailsView";

interface AuthenticationReactStateDeclaration extends ReactStateDeclaration {
    noAuth?: boolean
}

export const states: AuthenticationReactStateDeclaration[] = [{
    name: 'Login',
    url: '/login',
    component: LoginView,
    noAuth: true
}, {
    name: 'Base',
    component: BaseView
}, {
    parent: 'Base',
    name: 'Home',
    url: '/',
    component: HomeView
}, {
    parent: 'Base',
    name: 'Containers',
    url: '/containers',
    component: ContainersView
}, {
    parent: 'Base',
    name: 'ContainerDetails',
    url: '/containers/:id',
    component: ContainerDetailsView,
    resolve: [{
        token: 'id',
        deps: ['$transition$'],
        resolveFn: (trans: any) => trans.params().id
    }]
}];
