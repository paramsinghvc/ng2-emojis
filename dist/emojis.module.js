import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojisComponent, EmojiInput } from './emojis.component';
import { KeysPipe } from './keys.pipe';
export var EmojisModule = (function () {
    function EmojisModule() {
    }
    EmojisModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [EmojisComponent, EmojiInput, KeysPipe],
                    exports: [EmojisComponent, EmojiInput]
                },] },
    ];
    /** @nocollapse */
    EmojisModule.ctorParameters = function () { return []; };
    return EmojisModule;
}());
//# sourceMappingURL=emojis.module.js.map