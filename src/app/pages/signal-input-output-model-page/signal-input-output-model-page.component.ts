import { Component, viewChild } from '@angular/core';
import { CODE_STRINGS } from './signal-input-output-model-page.code-strings';
import { SharedNavListComponent } from '../../shared/nav-list/nav-list.component';
import { SharedPreWithCopyButtonComponent } from '../../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButtonComponent, SharedNavListComponent],
  selector: 'input-output-signal-model-page',
  templateUrl: 'signal-input-output-model-page.component.html',
})
export class InputOutputSignalModelPageComponent {
  readonly CODE_STRINGS = CODE_STRINGS;

  readonly PAGE_SECTIONS = {
    SIGNAL: { navText: 'Signal', pageNum: 1 },
    INPUT: { navText: 'Input', pageNum: 2 },
    MODEL: { navText: 'Model', pageNum: 3 },
    OUTPUT: { navText: 'Output', pageNum: 4 },
  };

  navListComponent = viewChild(SharedNavListComponent);

  getVisibleSection() {
    return this.navListComponent()?.visibleSection();
  }
}
