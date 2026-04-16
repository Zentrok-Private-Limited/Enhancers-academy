import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Class18 } from './course/class-1-8/class-1-8';
import { Class910 } from './course/class-9-10/class-9-10';
import { Class1112 } from './course/class-11-12/class-11-12';
import { Cuet } from './course/cuet/cuet';
import { Blog } from './blog/blog';
import { BlogDetail } from './blog-detail/blog-detail';
import { Contact } from './contact/contact';
import { Class1112Commerce } from './course/class-11-12-commerce/class-11-12-commerce';
import { OlympiadPreparation } from './course/olympiad-preparation/olympiad-preparation';
import { VedicMaths } from './course/vedic-maths/vedic-maths';
import { SpokenEnglish } from './course/spoken-english/spoken-english';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'courses/class-1-8', component: Class18 },
    { path: 'courses/class-9-10', component: Class910 },
    { path: 'courses/class-11-12', component: Class1112 },
    { path: 'courses/class-11-12-commerce', component: Class1112Commerce },
    { path: 'courses/cuet', component: Cuet },
    { path: 'courses/olympiad-preparation', component: OlympiadPreparation},
    { path: 'courses/vedic-maths', component: VedicMaths},
    { path: 'courses/spoken-english', component: SpokenEnglish},
    { path: 'blog', component: Blog },
    { path: 'blog/:id', component: BlogDetail },
    { path: 'contact', component: Contact},
];
