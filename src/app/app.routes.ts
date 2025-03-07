import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjactComponent } from './projact/projact.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [

{
    path:'about',
    component:AboutComponent
},
{
    path:'skill',
    component:SkillComponent
},{
    path:'projact',
    component:ProjactComponent
},{
    path:'contact',
    component:ContactComponent
},
{
    path:'education',
    component:EducationComponent
}
];
