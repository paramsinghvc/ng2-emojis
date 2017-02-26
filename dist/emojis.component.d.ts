import { OnInit, ElementRef, EventEmitter } from '@angular/core';
export declare class EmojiInput {
    el: ElementRef;
    emojiInputValue: any;
    constructor(el: ElementRef);
}
export declare class EmojisComponent implements OnInit {
    private el;
    inputEl: EmojiInput;
    emojiAdded: EventEmitter<any>;
    emojiCodes: any;
    isDialogOpen: boolean;
    clickFn: any;
    enteredText: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    openDialog(e: any): void;
    closeDialog(): void;
    emojiSelected(e: any, emoji: any): void;
}
