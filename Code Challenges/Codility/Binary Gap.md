# Binary Gap

#### Question
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.


#### Solution
```
function solution(N) {
    if(N === parseInt(N,10)) {
        const binaryValue = N.toString(2).split('');
        return findGaps(binaryValue, [])
    }
    return 0;
}


function findGaps(binaryValue, gaps) {
    // find first index of 1
    const firstIndex = binaryValue.indexOf('1');

    if(firstIndex > -1) {
        // generate new binary after slicing 1
        const newBinaryValue = binaryValue.slice(firstIndex+1);
        // find next index and it can be numbers of zero
        const secondIndex = newBinaryValue.indexOf('1');

        if(secondIndex > 0) {
            // push gaps
            gaps.push(secondIndex);
        }

        return findGaps(newBinaryValue.slice(secondIndex), gaps);
    }

    return (gaps.length > 0) ? Math.max(...gaps) : 0;
}
```

[Result](https://app.codility.com/demo/results/trainingXR5Q5N-FE2/)

