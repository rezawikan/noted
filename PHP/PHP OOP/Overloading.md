# Overloading Documentation

#### Overloading
- Kemampuan dinamis membuat property dan function
- Overloading sangat berkaitan dengan magic methods

##### Magic Methods untuk Overloading:
- __get() - Untuk membaca data yang memiliki visibility tertentu (protected, private) dan data yang belum ada.
- __set() - Untuk menulis data yang memiliki visibility tertentu (protected, private) dan data yang belum ada.
- __isset() - Untuk melakukan pengecekan, memanggil fungsi isset() dan empty yang memiliki visibility tertentu (protected, private) dan data yang belum ada.
- __unset() - Untuk menghapus property yang memiliki visibility tertentu (protected, private) dan data yang belum ada.
- __call() - Untuk mengeksekusi fungsi yang tidak ada di dalam object class.
- __callStatic() - Untuk mengeksekusi fungsi static yang tidak ada di dalam object class.

##### Contoh Properties Overloading:
```
class Zero
{
    private array $properties = [];

    public function __get($name)
    {
        return $this->properties[$name];
    }

    public function __set($name, $value)
    {
        $this->properties[$name] = $value;
    }

    public function __isset($name): bool
    {
        return isset($this->properties[$name]);
    }

    public function __unset($name)
    {
        unset($this->properties[$name]);
    }
}

$zero = new Zero();
$zero->firstName = "Mochammad";
$zero->middleName = "Rezza";
$zero->lastName = "Wikandito";

echo "First Name : $zero->firstName" . PHP_EOL;
echo "Middle Name : $zero->middleName" . PHP_EOL;
echo "Last Name : $zero->lastName" . PHP_EOL;
```
##### Contoh Function Overloading:
```
class Zero
{
    public function __call($name, $arguments)
    {
        $join = join(",", $arguments);
        echo "Call function $name with arguments $join". PHP_EOL;
    }

    public static function __callStatic($name, $arguments)
    {
        $join = join(",", $arguments);
        echo "Call static function $name with arguments $join". PHP_EOL;
    }

}

$zero = new Zero();
$zero->sayHello("Eko", "Khannedy");
Zero::sayHello("Eko", "Khannedy");
```
#### References:
- [Overloading](https://www.php.net/manual/en/language.oop5.overloading.php)