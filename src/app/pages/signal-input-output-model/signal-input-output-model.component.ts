import { Component, viewChild } from '@angular/core';
import { CODE_STRINGS } from './code_strings';
import { SharedNavList } from '../../shared/nav-list/nav-list.component';
import { SharedPreWithCopyButton } from '../../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButton, SharedNavList],
  selector: 'page-input-output-signal-model',
  templateUrl: 'signal-input-output-model.component.html',
})
export class PageInputOutputSignalModel {
  readonly CODE_STRINGS = CODE_STRINGS;

  readonly PAGE_SECTIONS = {
    SIGNAL: { navText: 'Signal', pageNum: 1 },
    INPUT: { navText: 'Input', pageNum: 2 },
    MODEL: { navText: 'Model', pageNum: 3 },
    OUTPUT: { navText: 'Output', pageNum: 4 },
  };

  navListComponent = viewChild(SharedNavList);

  getVisibleSection() {
    return this.navListComponent()?.visibleSection();
  }
}
