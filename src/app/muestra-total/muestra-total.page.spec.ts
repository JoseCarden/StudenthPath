import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuestraTotalPage } from './muestra-total.page';

describe('MuestraTotalPage', () => {
  let component: MuestraTotalPage;
  let fixture: ComponentFixture<MuestraTotalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraTotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
