import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogupAdminPage } from './logup-admin.page';

describe('LogupAdminPage', () => {
  let component: LogupAdminPage;
  let fixture: ComponentFixture<LogupAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogupAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
