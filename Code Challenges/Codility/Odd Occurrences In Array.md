#  Odd Occurrences In Array

#### Question
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.


#### Solution
```
function solution(A) {
    const dataSet = new Set([]);

    for(const data of A) {
        if(dataSet.has(data)){
            dataSet.delete(data);
        } else {
            dataSet.add(data);
        }
    }

    return Array.from(dataSet)[0];
}

```

[Result](https://app.codility.com/demo/results/trainingCPT3Z3-6KK/)
