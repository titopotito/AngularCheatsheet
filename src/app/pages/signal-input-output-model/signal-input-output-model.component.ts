import { Component, viewChild } from '@angular/core';
import { SharedCopyButton } from '../../shared/copy-button/copy-button.component';
import { Highlight } from 'ngx-highlightjs';
import { CODE_STRINGS } from './code_strings';
import { SharedNavList } from '../../shared/nav-list/nav-list.component';

@Component({
  imports: [Highlight, SharedCopyButton, SharedNavList],
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
