# Static Keyword Documentation

#### Static Property dan Static Function 
- Static bisa digunakan untuk membuat property dan function tanpa inisiasi class terlebih dahulu.
- Static property dan static function tidak berhubungan object class.
- Static property dan static function diakses dengan menggunakan operator **::**
- Static property dan static function tidak bisa mengakses propery dan fungsi lainnya.


##### Contoh Static Property:
```
class MathHelper
{
  static public string $name = "MATH HELPER";
}

MathHelper::$name;
```

##### Contoh Static Function:
```
class MathHelper
{
  static public function sum(int...$numbers): int
  {
    $total = 0;
    foreach($numbers as $number)
    {
      $total += $number;
    }
    
    return $total;
  }
}

MathHelper::sum([1,2,3,4]);
```

#### References:
- [Static Keyword](https://www.php.net/manual/en/language.oop5.static.php)