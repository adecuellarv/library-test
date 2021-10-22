import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCatalogueComponent } from './library-catalogue.component';

describe('LibraryCatalogueComponent', () => {
  let component: LibraryCatalogueComponent;
  let fixture: ComponentFixture<LibraryCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
