function fibonacci(n) {
 
 let fibSeq = [0, 1];
 for (let i = 0; i < n; i++) {
    let nextNum = fibSeq[i] + fibSeq[i + 1];
    fibSeq.push(nextNum);
 }
 console.log(fibSeq[n-1]);
 return fibSeq[n - 1]
}

fibonacci(6);