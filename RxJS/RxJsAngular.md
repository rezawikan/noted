# Documentation of RxJS

#### What is RxJS?

RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. This project is a rewrite of Reactive-Extensions/RxJS with better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface

#### Simple Example
 ``` 
// begin lesson code
import { Observable } from 'rxjs';

/*
 * Observers can register up to 3 callbacks
 * next is called 1:M times to push new values to observer
 * error is called at most 1 time should an error occur
 * complete is called at most 1 time on completion.
 */
const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
};

const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    /*
     * Once complete is called, observable will be cleaned up
     * and no future values delivered.
     */
    subscriber.complete();
    /*
     * These values will not be logged as the observable
     * has already completed.
     */
    subscriber.next('Hello');
    subscriber.next('World');
});

/* 
 * Subscribe hooks observer up to observable, beginning execution.
 * This creates a 1 to 1 relationship between the producer
 * (observable) and the consumer (observer).
 */
observable.subscribe(observer);
  ```

#### How to implement in Angular?
```
numbers$: Observable<number>;

numbers$.pipe(
    // here
);
```

#### Filtering Operators
- `scan` : allows you to calculate observable values, it will emit each value inside observable values (similar with reduce operator).
- `reduce` : same with javascript operators, allows you to calculate the value and only emit one value.
- `map` : allows you to restructure the data.
- `pluck` : allows you to pick a value based on key.
- `tap` : allows you to debug the value using `console.log`.
- `finalize`: allows you to debug the last value of observable.
- `takeUntil` : allows you to emit the value until the condition is false.
- `takeWhile` : allows you to emit the value while the condition is true.
- `distinctUntilChanged` : allows you to make sure the current value is change and different from the previous value.
- `distinctUntilKeyChanged`: it is similar with distinctUntilChanged, but here we needs key value. It will check the value inside the key.

#### Rate Limiting Operators
- `debounceTime`: allows you to set a timer after doing something to prevent immediately emit.
- `trottleTime`: allows you to prevent this from spam, it will return the first value after a specific time has passed.
- `sampleTime`: allows you to set a timer in any condition. It's always running.
- `auditTime`: allows you to set a timer in any condition. It's always running.

#### Transformation Operators
- `mergeMap` : allows you to map the previous value then run the next multiple observables at the same time. (load pupose)
- `switchMap` : allows you to map the previous value then run the next multiple observables. but the previous obsevable will be completed/cancelled then you only run one observable from start. (searching purpose)
- `concatMap` : it's similar `switchMap` operator. It wil maintain one active observable and the next observable when the previous execution has been completed. It will be useful when order of the execution is important.
- `exhaustMap` : allows you to ignore upcoming observables when one observable is active. This will be useful to prevent spamming such as login button or refresh button.

#### Combination Operators
- `startWith` : allows you to append emitting value from starting point.
- `endWith` : allows you to append emitting value from ending point.
- `concat`: allows you to combine observable values, but it's waiting for current observable until completed before starts the next observable.
- `merge` : allows you to combine observable values simultaneously.
- `forkJoin` : allows you to combine observable values, it will return the last value of each observable.

#### References (Important):
- [RxJS](https://rxjs.dev/)
- [Operators](https://rxjs.dev/api/operators)
- [API List](https://rxjs.dev/api)
- [Scheduler Argument - Deprecations](https://rxjs.dev/deprecations/scheduler-argument)
- [Subscribe Argument - Deprecations](https://rxjs.dev/deprecations/subscribe-arguments)
- [Result Selector Arguments - Deprecations](https://rxjs.dev/deprecations/resultSelector)