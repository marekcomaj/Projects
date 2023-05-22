 // - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output



 function createMatrix(numberOfColumns,numberOfRows){
    const matrix=[]

    for(let y = 0; y < numberOfColumns; y++) {
       const row = []

      for(let x = 0; x < numberOfRows; x++) {
         let value = 0
         if(y === x) {
           value = 1
        }

         row.push(value)
      }
      matrix.push(row)
    }
     return matrix
   }
   console.log(createMatrix(4,4))