let m = [[1, 2, 3], 
         [4, 5, 6], 
         [7, 8, 9]
        ];

console.log(m);

let max = m[0][0];
for(let i = 0; i < m.length; i++) {
  for(let j = 0; j < m[0].length; j++) {
    if(max < m[i][j])
      max = m[i][j];
  }
}

console.log(`Max = ${max}`);