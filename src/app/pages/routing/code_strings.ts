const BASIC_ROUTE1: string = `import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];`;

const BASIC_ROUTE2: string = `import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
}`;

const BASIC_ROUTE3: string = `<h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet />`;

const ROUTE_INFO1: string = `providers: [
  provideRouter(appRoutes, withComponentInputBinding()),
]`;

const ROUTE_INFO2: string = `@Input()
set id(heroId: string) {
  this.hero$ = this.service.getHero(heroId);
}`;

const WILDCARD_ROUTE: string = `{ path: '**', component: <component-name> }`;

const REDIRECT1: string = `const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to ${`first-component`}
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];`;

const REDIRECT2: string = `const routes: Routes = [
  { path: "first-component", component: FirstComponent },
  {
    path: "old-user-page",
    redirectTo: ({ queryParams }) => {
      const errorHandler = inject(ErrorHandler);
      const userIdParam = queryParams['userId'];
      if (userIdParam !== undefined) {
        return ${`/user/\${userIdParam}`};
      } else {
        errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
        return ${`/not-found`};
      }
    },
  },
  { path: "user/:userId", component: OtherComponent },
];`;

const NESTED_ROUTE: string = `const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
];`;

const QUERY_PARAMS_AND_FRAGMENTS1: string = `import { inject, OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({...}) export class SomeComponentToNavigateFROM implements OnInit {
  private readonly route = inject(ActivatedRoute);

  heroes$: Observable<Hero[]>;
  selectedId: number;

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );
  }
}
`;

const QUERY_PARAMS_AND_FRAGMENTS2: string = `import { inject, OnInit, Component } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


@Component({...}) export class SomeComponentToNavigateTO implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  hero$: Observable<Hero>;

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.service.getHero(heroId);
  }

  gotoItems(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/heroes', { id: heroId }]);
  }
}
`;

const LAZY_LOADING: string = `const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: () => import('./lazy.component').then(c => c.LazyComponent)
  }
];`;

export const CODE_STRINGS = {
  BASIC_ROUTE1,
  BASIC_ROUTE2,
  BASIC_ROUTE3,
  ROUTE_INFO1,
  ROUTE_INFO2,
  WILDCARD_ROUTE,
  REDIRECT1,
  REDIRECT2,
  NESTED_ROUTE,
  QUERY_PARAMS_AND_FRAGMENTS1,
  QUERY_PARAMS_AND_FRAGMENTS2,
  LAZY_LOADING,
} as const;
