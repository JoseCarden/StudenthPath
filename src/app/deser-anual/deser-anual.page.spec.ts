import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeserAnualPage } from './deser-anual.page';

describe('DeserAnualPage', () => {
  let component: DeserAnualPage;
  let fixture: ComponentFixture<DeserAnualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeserAnualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
