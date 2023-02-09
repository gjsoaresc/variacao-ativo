import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { VariationService } from './services/variation.service';

import { VariationComponent } from './variation.component';

describe('VariationComponent', () => {
  let component: VariationComponent;
  let fixture: ComponentFixture<VariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a component tag app-variation-table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-variation-table')).toBeTruthy();
  });

  it('should render a component tag app-variation-chart', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-variation-chart')).toBeTruthy();
  });

  it('should call getChart from service when ngOnInit is called', inject([VariationService], (service: VariationService) => {
    const spy = spyOn(service, 'getChart');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  }));
});
