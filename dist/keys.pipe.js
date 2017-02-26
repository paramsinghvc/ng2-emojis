import { Pipe } from '@angular/core';
export var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (values, args) {
        return Object.keys(values);
    };
    KeysPipe.decorators = [
        { type: Pipe, args: [{ name: 'keys' },] },
    ];
    /** @nocollapse */
    KeysPipe.ctorParameters = function () { return []; };
    return KeysPipe;
}());
//# sourceMappingURL=keys.pipe.js.map