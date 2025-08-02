import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SharedCopyButton } from '../../shared/copy-button/copy-button.component';
import { Highlight } from 'ngx-highlightjs';
import { CODE_STRINGS } from './code_strings';
import { StyleThemeService } from '../../shared/style-theme-button/style-theme.services';

@Component({
  imports: [Highlight, SharedCopyButton],
  selector: 'page-input-output-signal-model',
  templateUrl: 'signal-input-output-model.component.html',
  styleUrl: 'signal-input-output-model.component.css',
})
export class PageInputOutputSignalModel {
  readonly CODE_STRINGS = CODE_STRINGS;
  readonly PAGE_SECTIONS = {
    SIGNAL: 1,
    INPUT: 2,
    MODEL: 3,
    OUTPUT: 4,
  } as const;

  styleThemeService = inject(StyleThemeService);

  visibleSection: WritableSignal<number> = signal<number>(
    this.PAGE_SECTIONS.SIGNAL
  );

  switchVisibleSection(visibleSection: number): void {
    this.visibleSection.set(visibleSection);
  }

  isNavButtonActive(buttonNumber: number): 'active' | '' {
    return this.visibleSection() === buttonNumber ? 'active' : '';
  }
}
