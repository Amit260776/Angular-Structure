import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
        {
            path: 'dashboard',
            loadChildren: () => 
                import('./features/dashboard/dashboard.routes')
                    .then(m => m.DASHBOARD_ROUTES)
        },
        {
            path: 'reports',
            loadChildren: () => 
                import('./features/reports/reports.routes')
                    .then(m => m.REPORTS_ROUTES)
        }        
    ],
  },
];
