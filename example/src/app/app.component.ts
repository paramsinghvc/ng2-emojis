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
