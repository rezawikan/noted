# Object Iteration Documentation

#### Object Iteration
- Iteration adalah perulangan, biasanya menggunakan foreach.
- Secara default, hanya properties public yang bisa di gunakan dalam perulangan.
- Untuk melakukan iterator, kita bisa menggunakan interface **Iterator** atau **IteratorAgregate**.

##### Contoh Object Iteration:
```
class Data implements IteratorAgregate
{
  public $property1 = "Public property one";
  public $property2 = "Public property two";
  public $property3 = "Public property three";

  public function __construct() 
  {
    $this->property4 = "last property";
  }

  public function getIterator() 
  {
    return new ArrayIterator($this);
  }

  //public function getIterator() 
  //{
  //    $array = [
  //       "popOne" => $this->property1,
  //       "popTwo" => $this->property2,
  //       "popThree" => $this->property3
  //    ];
  //  return new ArrayIterator($array);
  //}

  // Menggunakan Generator
  //public function getIterator() 
  //{
  //    yeild "popOne" => $this->property1;
  //    yeild "popTwo" => $this->property2;
  //    yeild "popThree" => $this->property3;
  //}
}

$obj = new Data;

foreach($obj as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}

// string(9) "property1"
// string(19) "Public property one"

// string(9) "property2"
// string(19) "Public property two"

// string(9) "property3"
// string(21) "Public property three"

// string(9) "property4"
// string(13) "last property"


```

#### References:
- [Iterator Agregate](https://www.php.net/manual/en/class.iteratoraggregate.php)
- [Iterator](https://www.php.net/manual/en/class.iterator.php)
- [Iterator in PHP a Practical Guide](https://dev.to/damnjan/iterator-in-php-a-practical-guide-2k59)
- [Table of Content Iterators](https://www.php.net/manual/en/spl.iterators.php)