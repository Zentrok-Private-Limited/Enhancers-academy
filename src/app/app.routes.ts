import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Class18 } from './course/class-1-8/class-1-8';
import { Class910 } from './course/class-9-10/class-9-10';
import { Class1112 } from './course/class-11-12/class-11-12';
import { Cuet } from './course/cuet/cuet';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'courses/class-1-8', component: Class18 },
    { path: 'courses/class-9-10', component: Class910 },
    { path: 'courses/class-11-12', component: Class1112 },
    { path: 'courses/cuet', component: Cuet },
];
