import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAgeGroup'
})
export class FilterAgeGroupPipe implements PipeTransform {

  transform(value: string, ageGroup:number): string {
    if(ageGroup<40)
      return "Associae";
    else if(ageGroup>=40 && ageGroup<50)
      return "Manager"
    else
      return "VP"
  }

}
