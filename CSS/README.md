#### Iphone Issue
 - Transperent Issue, please use `rgba(255,255,255, 0)` rather than transperent

--------

#### Float Issue
- Use this after using float on the container to make it clean. (no minus gap between container)
 ``` 
 .container:after {
    clear: both;
    content: "";
    display: block;
  }
  ```

