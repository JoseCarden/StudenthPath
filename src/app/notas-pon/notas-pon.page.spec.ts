import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotasPonPage } from './notas-pon.page';

describe('NotasPonPage', () => {
  let component: NotasPonPage;
  let fixture: ComponentFixture<NotasPonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasPonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
