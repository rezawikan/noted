#### Declaring Reactive State

```
import { reactive } from 'vue'

export default {
  setup() {
  const state = reactive({ count: 0 })

  function increment() {
    state.count++
  }

  // don't forget to expose the function as well.
  return {
    state,
    increment
  }
  }
}

<button @click="increment">
{{ state.count }}
</button>
```

Manually exposing state and methods via setup() can be verbose. Luckily, it is only necessary when not using a build step. When using Single-File Components (SFCs), we can greatly simplify the usage with <script setup>:

```
<script setup>
  import { reactive } from 'vue'

  const state = reactive({ count: 0 })

  function increment() {
    state.count++
  }
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

#### Limitations of reactive()

- It only works for object types (objects, arrays, and collection types such as Map and Set). It cannot hold primitive types such as string, number or boolean.
- Since Vue's reactivity tracking works over property access, we must always keep the same reference to the reactive object. This means we can't easily "replace" a reactive object:

```
  let state = reactive({ count: 0 })

  // this won't work!
  state = reactive({ count: 1 })
```

#### Reactive Variables with ref()

To address the limitations of reactive(), Vue also provides a ref() function which allows us to create reactive "refs" that can hold any value type:

```
import { ref } from 'vue'
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

```
const objectRef = ref({ count: 0 })

// this works reactively
objectRef.value = { count: 1 }

const obj = {
  foo: ref(1),
  bar: ref(2)
}

// the function receives a ref
// it needs to access the value via .value but it
// will retain the reactivity connection
callSomeFunction(obj.foo)

// still reactive
const { foo, bar } = obj

```

#### Ref Unwrapping in Templates

```
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
 count.value++
}
</script>

<template>
 <button @click="increment">
   {{ count }} <!-- no .value needed -->
 </button>
</template>
```

```
const object = { foo: ref(1) }

{{ object.foo }} <!-- does NOT get unwrapped -->

const { foo } = object

{{ foo }} <!-- properly unwrapped -->
```
