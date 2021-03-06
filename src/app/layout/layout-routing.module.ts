import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },

            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },

            { path: 'listExp', loadChildren: () => import('./Files/list-exp/list-exp.module').then((m) => m.ListexpModule) },
            { path: 'createExp', loadChildren: () => import('./Files/create-exp/create-exp.module').then((m) => m.CreateexpModule) },

            { path: 'passes', loadChildren: () => import('./external-passes/passes/passes.module').then((m) => m.PassesModule) },

            { path: 'passe', loadChildren: () => import('./internal-passe/passe/passe.module').then((m) => m.PasseModule) },

            { path: 'graphics', loadChildren: () => import('./graphics/graphics.module').then((m) => m.GraphicsModule) },

            { path: 'dependencies', loadChildren: () => import('./dependecies/dependecies.module').then((m) => m.DependenciesModule) },

            { path: 'normativas', loadChildren: () => import('./normativas/normativas.module').then((m) => m.NormativasModule) },

            { path: 'peaj', loadChildren: () => import('./PEAJ/peaj/peaj.module').then((m) => m.PeajModule) },

            { path: 'Not-Objetions', loadChildren: () => import('./PEAJ/not-objetions/not-objetions.module').then((m) => m.NotObjetionsModule) },

            { path: 'profile', loadChildren: () => import('./control-user/profile/profile.module').then((m) => m.ProfileModule) },

            { path: 'forms', loadChildren: () => import('./dontUse/form/form.module').then((m) => m.FormModule) },
            { path: 'charts', loadChildren: () => import('./dontUse/charts/charts.module').then((m) => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./dontUse/tables/tables.module').then((m) => m.TablesModule) },

            { path: 'bs-element', loadChildren: () => import('./dontUse/bs-element/bs-element.module').then((m) => m.BsElementModule)},
            { path: 'grid', loadChildren: () => import('./dontUse/grid/grid.module').then((m) => m.GridModule)},
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
