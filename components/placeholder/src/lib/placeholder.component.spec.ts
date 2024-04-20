import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceholderComponent } from './placeholder.component';

describe('PlaceholderComponent', () => {
  let component: PlaceholderComponent;
  let fixture: ComponentFixture<PlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show placeholder', () => {
    const element = document.querySelector('#placeholder');
    expect(element?.textContent).toContain('Component Placeholder');
  });

  it('should call injectable', () => {
    const logSpy = jest.spyOn(component.injectable, 'log');
    component.log('Hello World from Test');
    expect(logSpy).toHaveBeenCalledWith('Hello World from Test');
  });
});
