import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiAnualPage } from './estudi-anual.page';

describe('EstudiAnualPage', () => {
  let component: EstudiAnualPage;
  let fixture: ComponentFixture<EstudiAnualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiAnualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
