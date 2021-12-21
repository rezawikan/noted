# Trait Documentation


#### Trait
- Trait merupakan fitur yang mirip dengan abstract class.
- Abstract class hanya bisa di extends pada satu child class dan memiliki bentuk yang harus di implemtasikan di child class nya.
- Trait bisa digunakan lebih dari satu dalam setiap class.
- Trait biasanya berisi reuseable functions.
- Trait bisa menggunakan properties.
- Untuk menggunakan Trait bisa menggunakan keyword **use** di ikuti dengan nama Trait di dalam class.


##### Contoh Trait:
```
Trait NullCheck 
{
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
}

class Xpander
{
  use NullCheck;
  
  public function checkPassagers($passagers) 
  {
    if(checkNullArray($passagers))
    {
      return 'Tidak Ada' . PHP_EOL;
    }
    
    return 'Ada' . PHP_EOL;
  }
  
}
```

#### Trait Overriding
- Jika trait memiliki fungsi abstract class, class yang menggunakan trait tersebut wajib mengimplementasikan fungsi tersebut.
- Jika class tidak memiliki parent class, kemudian class tersebut menggunakan trait dan terdapat nama fungsi yang sama seperti di trait. Maka yang akan di execute adalah fungsi yang ada di dalam class.
- Sebaliknya, Jika class memiliki parent class, kemudian class tersebut mengggunakan trait, dan terdapat nama fungsi yang sama antara parent class dan trait. Maka yang di execute adalah fungsi yang ada di dalam trait.

##### Contoh Trait Overriding (Abstract Class):
```
Trait NullCheck 
{
  abstract public function checkNullBool(bool $data): bool;
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
}

class Fortuner
{
  use NullCheck;
  
  public function checkNullBool($data)
  {
    return $data ? true : false;
  }
}
```


##### Contoh Trait Overriding (Hasn't Parent):
```
Trait NullCheck 
{
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
}

class Xpander
{
  use NullCheck;
  
  // ini yang akan di execute
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
  
  public function checkPassagers($passagers) 
  {
    if(checkNullArray($passagers))
    {
      return 'Tidak Ada' . PHP_EOL;
    }
    
    return 'Ada' . PHP_EOL;
  }
  
}
```

##### Contoh Trait Overriding (Has Parent):
```
Trait NullCheck 
{
  // ini yang akan di execute
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
}

class Car
{
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
}

class Xpander extends Car
{
  use NullCheck;
  
  public function checkPassagers($passagers) 
  {
    if(checkNullArray($passagers))
    {
      return 'Tidak Ada' . PHP_EOL;
    }
    
    return 'Ada' . PHP_EOL;
  }
  
}
```

#### Trait Visibility Orvveriding (Optional)
```
Trait NullCheck 
{
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
}

class Car
{
  public function checkNullArray(array $array) : bool;
  {
    return empty($array) ? true : false;
  }
}

class Xpander extends Car
{
  // visibility nya akan di ubah disini
  use NullCheck { checkNullArray as private };
  
  public function checkPassagers($passagers) 
  {
    if(checkNullArray($passagers))
    {
      return 'Tidak Ada' . PHP_EOL;
    }
    
    return 'Ada' . PHP_EOL;
  }
  
}
```

#### Trait Conclict
- Terdapat dua fungsi yang sama pada dua trait yang di gunakan.
- Untuk menyelesaikan conflict tersebut bisa menggunakan fungsi insteadof.

```
trait ADo
{
  public function now()
  {
    return 'Now ADo';
  }
  
  public function later()
  {
    return 'Later ADo'
  }
}

trait ADo
{
  public function now()
  {
    return 'Now Bdo';
  }
  
  public function later()
  {
    return 'Later BDo'
  }
}

class Doing 
{
  use ADo, BDo {
    // fungsi now akan di ambil dari ADo
    ADo::now() insteadof BDo,
    // fungsi later akan di ambil dari BDo
    BDo::later() insteadof ADo
  }
}
```

#### Trait Inheritance
- Terdapat dua fungsi yang sama pada dua trait yang di gunakan.
- Untuk menyelesaikan conflict tersebut bisa menggunakan fungsi insteadof.


```
trait ADo
{
  public function now()
  {
    return 'Now ADo';
  }
}

trait ADo
{ 
  public function later()
  {
    return 'Later BDo'
  }
}

trait All 
{
  use ADo, BDo;
}

class Doing 
{
  use All;
  
  public function run()
  {
    now();
    later();
  }
}
```
#### References:
- [Trait](https://www.php.net/manual/en/language.oop5.traits.php)