import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieCharacterComponent } from './lottie-character.component';

describe('LottieCharacterComponent', () => {
  let component: LottieCharacterComponent;
  let fixture: ComponentFixture<LottieCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
