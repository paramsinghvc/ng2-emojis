import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
	transform(values: any, args: any[] = null): any {
		return Object.keys(values);
	}
}