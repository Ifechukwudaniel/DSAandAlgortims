var findMaxForm = function(wordsList, M, N) {
   let dp = Array(M+1).fill(0).map( () => Array(N+1).fill(0)); // init the dp array which is basically M * N Grid for 0 and 1 combination
   for(let word of wordsList){
       let wordZeroCounter = 0, wordOneCounter = 0;
       // init the 0 and 1 counter for the current iteration word
       for(let c of word){
           if( c == "0") wordZeroCounter++;
           else wordOneCounter++;
       }
       for(let x=M; x>=wordZeroCounter; x--){
            for(let y=N; y>=wordOneCounter; y--){
                dp[x][y] = Math.max( dp[x][y], dp[x-wordZeroCounter][y-wordOneCounter] +1 )
            }
       } 
   }
    return dp[M][N];
};