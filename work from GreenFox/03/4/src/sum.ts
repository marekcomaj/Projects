export class Sum {

    sum(list: number[]) {
        let addnumber = 0;
        for (let i = 0; i < list.length; i++) {
            addnumber += list[i]
        }
        return addnumber;
    }

}


let sumTest = new Sum;

let listOne = [5,9,6,4,2,1]
let listTwo =[];
let listThree=[2]


console.log(sumTest.sum(listOne));

