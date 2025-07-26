import { Routes } from '@angular/router';
import { PageIntroduction } from './pages/introduction.component';
import { PageComponent } from './pages/component.component';
import { PageAttributeDirectives } from './pages/attribute-directives.component';

export const routes: Routes = [
  { path: 'introduction', component: PageIntroduction },
  { path: 'component', component: PageComponent },
  { path: 'attribute-directives', component: PageAttributeDirectives },
];
