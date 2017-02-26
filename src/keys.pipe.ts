import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
	transform(values: any, args: any[]): any {
		return Object.keys(values);
	}
}