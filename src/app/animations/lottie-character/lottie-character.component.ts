import { CommonModule } from '@angular/common';
import { Component, Input, Pipe, SimpleChanges } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-character',
  standalone: true,
  imports: [LottieComponent,CommonModule],
  templateUrl: './lottie-character.component.html',
})
export class LottieCharacterComponent {
  @Input() animationType: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() speed: number = 1;
  @Input() customClass: string = '';
  private animationItem!: AnimationItem;
  lottieOption: AnimationOptions = {
    path: `assets/animations/${this.animationType}.json`, // Replace with your animation path
    renderer: 'svg',
    autoplay: true,
    loop: true,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['animationType']) {
      this.lottieOption = {
        path: `assets/animations/${this.animationType}.json`,
        renderer: 'svg',
        autoplay: true,
        loop: true,
      };
      console.log(`Loaded animation ${this.animationType} width: ${this.width}`);
    }
    this.customClass=`${this.animationType}-lottie`;
  }

  handleAnimation(anim: AnimationItem) {
    this.animationItem = anim;
    this.animationItem.setSpeed(this.speed);
  }

}
