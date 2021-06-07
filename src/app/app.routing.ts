import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './auth.guard';
import { PdfComponent } from './views/pdf/pdf.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pdf', component: PdfComponent },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
];

export const routers = RouterModule.forRoot(appRoutes, { useHash: true });
