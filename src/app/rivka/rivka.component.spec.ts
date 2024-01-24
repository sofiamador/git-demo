import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivkaComponent } from './rivka.component';

describe('RivkaComponent', () => {
  let component: RivkaComponent;
  let fixture: ComponentFixture<RivkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RivkaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RivkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
