import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { About } from './layout/about/about';
import { Contact } from './layout/contact/contact';
import { OurServices } from './layout/our-services/our-services';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Products } from './products/products';
import { Productsapi } from './layout/productsApi/productsapi/productsapi';
import { Tdf } from './dashboard/tdf/tdf';
//import { NotfoundComponent } from './notfound/notfound.component'; // Adjust path and class name to match your project

export const routes: Routes = [
  {path:'',component:Layout,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'contact',component:Contact},
    {path:'about',component:About},
   { path:'our-services',component:OurServices},
   ]}

   ,{path:'our-products',component:Productsapi},

   {path:'dashboard',component:Dashboard,children:[{path:'tdf',component:Tdf},
{path:'home',component:Home}
   ]}
  //{path:'**',component:NotfoundComponent}

];
