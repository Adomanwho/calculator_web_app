const operations = new Set(['+', '-', '*', '/']);
let numbers = [];
let operationsToPerform = [];

//functions for adding characters to the input

const checkIfOperationIsViable = (str) => {

   //this is for all the operations except subtraction

   if(str.length == 0){
      return false;
   }
   if(operations.has(str[str.length - 1]) || str[str.length-1] == '.'){
      return false;
   }
   return true;
}

const checkIfMinusIsViable = (str) => {

   //this is for subtraction

   if(str.length == 1 && str[0] == '-'){
      return false;
   }
   if(operations.has(str[str.length-1]) && operations.has(str[str.length-2])){
      return false;
   }
   if(str[str.length-1] == '.'){
      return false;
   }
   return true;
}

//functions for pressing the "=" key

const returnValidInput = (str) => {
   if(str.length == 0){
      return '';
   }
   else if (!operations.has(str[str.length-1])){
      return str;
   }
   return returnValidInput(str.slice(0, str.length-1));
}

const fillArrays = (string) => {
   let left = 0;
   let right = 0;
   const str = returnValidInput(string);

   while(left < str.length){
      if(right > str.length){
         numbers.push(parseFloat(str.slice(left)));
         break;
      }
      if(!operations.has(str[right])){
         right++;
         continue;
      }
      if(str[right] == '.'){
         right++;
         continue;
      }
      if(operations.has(str[right])){
         if(str[right] == '-'){
            if(right == 0){
               right++;
               continue;
            }
            else{
               numbers.push(parseFloat(str.slice(left, right)));
               operationsToPerform.push('-');
               if(str[right+1] == '-'){
                  right += 2;
                  left = right-1;
               }
               else{
                  right++;
                  left = right;
               }
            }
         }
         else{
            numbers.push(parseFloat(str.slice(left, right)));
            operationsToPerform.push(str[right]);
            if(str[right+1] == '-'){
               right += 2;
               left = right-1;
            }
            else{
               right++;
               left = right;
            }
         }
      }
   }
}


const calculate = (str) => {
   fillArrays(str);
   const higherOrder = new Set(['*', '/']);
   let i = 0;
   let temp = 0;
   let result = 0;
   //loop for higher order
   
   while(i < operationsToPerform.length){
      if(higherOrder.has(operationsToPerform[i])){
         if(operationsToPerform[i] == '*'){
            temp = numbers[i] * numbers[i+1];
         }
         else{
            temp = numbers[i] / numbers[i+1];
         }
         operationsToPerform.splice(i,1);
         numbers.splice(i, 1);
         numbers[i] = temp;
      }
      else{i++;}
   }
   i=0;
   
   while(i < operationsToPerform.length){
      if(numbers.length == 1){
         break;
      }
      if(operationsToPerform[i] == '+'){
         temp = numbers[i] + numbers[i+1];
      }
      else if(operationsToPerform[i] == '-'){
         temp = numbers[i] - numbers[i+1];
      }
      operationsToPerform.splice(i,1);
      numbers.splice(i, 1);
      numbers[i] = temp;
   }
   result = numbers[0];
   numbers = [];
   operationsToPerform = [];
   return result;
}

export {checkIfOperationIsViable, checkIfMinusIsViable, returnValidInput, fillArrays, calculate, operations, numbers, operationsToPerform};