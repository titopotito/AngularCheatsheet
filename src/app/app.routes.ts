import { Routes } from '@angular/router';
import { InputOutputSignalModelPageComponent } from './pages/signal-input-output-model-page/signal-input-output-model-page.component';
import { ComponentPageComponent } from './pages/component-page.component';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page.component';
import { InjectablePageComponent } from './pages/injectable-page.component';
import { RoutingPageComponent } from './pages/routing-page/routing-page.component';
import { HostBindingPageComponent } from './pages/host-binding.component';
import { PipesPageComponent } from './pages/pipes-page.component';
import { FormsPageComponent } from './pages/forms-page.component';

export const routes: Routes = [
  { path: '', component: InputOutputSignalModelPageComponent },
  {
    path: 'signal-input-output-model',
    component: InputOutputSignalModelPageComponent,
  },
  { path: 'component', component: ComponentPageComponent },
  { path: 'host-binding', component: HostBindingPageComponent },
  { path: 'injectable', component: InjectablePageComponent },
  { path: 'attribute-directives', component: AttributeDirectivesPageComponent },
  { path: 'routing', component: RoutingPageComponent },
  { path: 'pipes', component: PipesPageComponent },
  { path: 'forms', component: FormsPageComponent },
];
