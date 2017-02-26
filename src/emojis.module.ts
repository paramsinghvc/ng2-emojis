import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojisComponent, EmojiInput } from './emojis.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
	imports: [CommonModule],
	declarations: [EmojisComponent, EmojiInput, KeysPipe],
	exports: [EmojisComponent, EmojiInput]
})
export class EmojisModule { }
