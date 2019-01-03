export class CustomValidator {
    // Validates email
static emailValidator(number): any {
    if (number.pristine) {
       return null;
    }
    const NUMBER_REGEXP = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    number.markAsTouched();
    if (NUMBER_REGEXP.test(number.value)) {
       return null;
    }
    return {
       invalidNumber: true
    };
 }

 //Validate Numbers
 static numberValidator(number): any {
    if (number.pristine) {
       return null;
    }
    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    number.markAsTouched();
    if (NUMBER_REGEXP.test(number.value)) {
       return null;
    }
    return {
       invalidNumber: true
    };
 }

 //Validate Name without blank space
 static nameValidator(number): any {
    if (number.pristine) {
       return null;
    }
    const NUMBER_REGEXP =/^[a-zA-Z]*$/;
    number.markAsTouched();
    if (NUMBER_REGEXP.test(number.value)) {
       return null;
    }
    return {
       invalidNumber: true
    };
 }

}
