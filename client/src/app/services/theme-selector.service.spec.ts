/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemeSelectorService } from './theme-selector.service';

describe('Service: ThemeSelector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeSelectorService]
    });
  });

  it('should ...', inject([ThemeSelectorService], (service: ThemeSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
