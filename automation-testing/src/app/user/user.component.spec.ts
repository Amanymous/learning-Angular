import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("check component name",()=>{
    expect(component.componentName).toBe("user")
  })
  it("check component function",()=>{
    expect(component.sum(50,50)).toBe(100)
  })
  it("check html h1",()=>{
    const collection = fixture.nativeElement
    expect(collection.querySelector('.head').textContent).toContain('Automation Testing')
  })
});
