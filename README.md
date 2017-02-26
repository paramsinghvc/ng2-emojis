# ng2-emojis
An Angular 2 plugin for emojis support for text inputs and textareas

<img width="328" alt="screen shot 2017-02-26 at 11 03 15 pm" src="https://cloud.githubusercontent.com/assets/4329912/23342003/3e67abce-fc78-11e6-89c5-7f268f4544d4.png">

# Installation

`npm install ng2-emojis`

In your app.module.ts, include `EmojisModule` into the imports array as

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmojisModule } from 'ng2-emojis';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmojisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Wrap your input or textarea element into an `emojify-holder` container element. And use the `emojiInput` attribute directive on the input element you want to "emojify" while passing the ngModel value into `emojiInputValue` property. That ngModel value is supposed to be changed by capturing the `emojiAdded` event on `emojify-holder` wrapper element.

```
<emojify-holder (emojiAdded)="emojiAdded($event)">
    <input type="text" emojiInput [emojiInputValue]="val" [(ngModel)]="val" />
</emojify-holder>
```

The ts file goes like this 


```
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	val: string = '🐘';
	title = 'app works!';
	emojiAdded(v) {
		this.val = v;
	}
}
```




