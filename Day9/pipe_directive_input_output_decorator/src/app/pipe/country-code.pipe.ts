import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: false
})
export class CountryCodePipe implements PipeTransform {
  code:string="+91-";
  transform(value: unknown, ...args: any[]): any {
    if(value== 'USA' ) {
      return "+1-"+value;
    }
    else if(value == 'UK') {
      return '+44-'+value;
    }
    else{
      return this.code+value;
    }
  }

}
