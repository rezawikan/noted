#### Class and Style Bindings

```
const isActive = ref(true)
const hasError = ref(false)

<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>

<div class="static active"></div>
```

The bound object doesn't have to be inline:

```
const classObject = reactive({
  active: true,
  'text-danger': false
})

<div :class="classObject"></div>
```

#### Binding to Arrays

```
const activeClass = ref('active')
const errorClass = ref('text-danger')

<div :class="[activeClass, errorClass]"></div>

<div :class="[isActive ? activeClass : '', errorClass]"></div>
// or
<div :class="[{ active: isActive }, errorClass]"></div>
```

#### With Components

```
<!-- when using the component -->
<my-component class="baz boo"></my-component>

<my-component :class="{ active: isActive }"></my-component>
```

#### Binding Inline Styles

```
const activeColor = ref('red')
const fontSize = ref(30)

<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
// or
<div :style="{ 'font-size': fontSize + 'px' }"></div>

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})

<div :style="styleObject"></div>
```

#### Binding to Arrays

```
<div :style="[baseStyles, overridingStyles]"></div>
```

#### Multiple Values

```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
