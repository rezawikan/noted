#### Text Interpolation

```
<span>Message: {{ msg }}</span>
```

#### Raw HTML

```
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

#### Attribute Bindings

```
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div> //Shorthand
```

#### Boolean Attributes

```
<button :disabled="isButtonDisabled">Button</button>
```

#### Calling Functions

```
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

Functions called inside binding expressions will be called every time the component updates, so they should not have any side effects, such as changing data or triggering asynchronous operations.

#### Directives

```
<p v-if="seen">Now you see me</p>
```

#### Arguments

```
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```

```
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

#### Dynamic Arguments

```
<!--
Note that there are some constraints to the argument expression,
as explained in the "Dynamic Argument Expression Constraints" section below.
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- shorthand -->
<a :[attributeName]="url"> ... </a>
```

```
<a v-on:[eventName]="doSomething"> ... </a>

<!-- shorthand -->
<a @[eventName]="doSomething">
```

Dynamic arguments are expected to evaluate to a string, with the exception of null. The special value null can be used to explicitly remove the binding. Any other non-string value will trigger a warning.

```
<!-- This will trigger a compiler warning. -->
<a :['foo' + bar]="value"> ... </a>
```

```
<a :[someAttr]="value"> ... </a>
```

The above will be converted to :[someattr] in in-DOM templates. If your component has a "someAttr" property instead of "someattr", your code won't work.

![alt text](https://staging.vuejs.org/assets/directive.69c37117.png)
