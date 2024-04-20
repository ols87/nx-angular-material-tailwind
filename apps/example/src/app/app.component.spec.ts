import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleAppComponent } from './app.component';

describe('ExampleAppComponent', () => {
  let component: ExampleAppComponent;
  let fixture: ComponentFixture<ExampleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show toolbar', () => {
    const element = document.querySelector('mat-toolbar');
    expect(element?.classList[0]).toEqual('mat-toolbar');
  });

  it('should show "Hello World"', () => {
    const element = document.querySelector('#helloWorld');
    expect(element?.textContent).toContain('Hello World');
  });

  it('should show icon', () => {
    const element = document.querySelector('#icon');
    expect(element?.classList[0]).toEqual('icon-[solar--minus-check-outline]');
  });

  it('should call injectable', () => {
    const logSpy = jest.spyOn(component.injectable, 'log');
    component.log('Hello World from Test');
    expect(logSpy).toHaveBeenCalledWith('Hello World from Test');
  });
});
