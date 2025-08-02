import { Routes } from '@angular/router';
import { PageInputOutputSignalModel } from './pages/signal-input-output-model/signal-input-output-model.component';
import { PageComponent } from './pages/component.component';
import { PageAttributeDirectives } from './pages/attribute-directives.component';
import { PageInjectable } from './pages/injectable.component';
import { PageRouting } from './pages/routing/routing.component';
import { PageHostBinding } from './pages/host-binding.component';

export const routes: Routes = [
  { path: '', component: PageInputOutputSignalModel },
  { path: 'signal-input-output-model', component: PageInputOutputSignalModel },
  { path: 'component', component: PageComponent },
  { path: 'host-binding', component: PageHostBinding },
  { path: 'injectable', component: PageInjectable },
  { path: 'attribute-directives', component: PageAttributeDirectives },
  { path: 'routing', component: PageRouting },
];
