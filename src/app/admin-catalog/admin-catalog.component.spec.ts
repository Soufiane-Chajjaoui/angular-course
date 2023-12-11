import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatalogComponent } from './admin-catalog.component';

describe('AdminCatalogComponent', () => {
  let component: AdminCatalogComponent;
  let fixture: ComponentFixture<AdminCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCatalogComponent]
    });
    fixture = TestBed.createComponent(AdminCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
