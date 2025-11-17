type typeOfArray=string | number ;


const getUniqueValues=<T extends typeOfArray>(array1:T[],array2:T[]):T[]=>{
    const newArray:T[]=[];
    let index=0;

    for(let i=0; i<array1.length;i++){
        newArray[index]=array1[i];
        index++;
    }

    for (let i = 0; i < array2.length; i++) {
         newArray[index]=array2[i];
        index++;
    }
    
    const uniqueValues: T[] = [];

    for (let i = 0; i < newArray.length; i++) {
        let found = false;

        for (let j = 0; j < uniqueValues.length; j++) {
            if (uniqueValues[j] === newArray[i]) {
                found = true;
                break;
            }
        }

        if (!found) {
            uniqueValues[uniqueValues.length] = newArray[i];
        }
    }

    return uniqueValues;
}



const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));