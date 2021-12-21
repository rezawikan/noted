# StdClass Documentation

#### Static Property dan Static Function 
- StdClass adalah class kosong bawaan dari PHP
- Digunakan untuk mengkonversi tipe data lain ke tipe data object.
- Yang paling sering digunakan dari array ke object.

##### Contoh StdClass:
```
$arrays = [
  "firstName" => "Mochammad",
  "middleName" => "Rezza",
  "lastName" => "Wikandito"
];

$object = (object) $arrays;

echo $object->firstName . PHP_EOL;
echo $object->middleName . PHP_EOL;
echo $object->lastName . PHP_EOL;


$array = (array) $object;

echo $array["firstName"] . PHP_EOL;
echo $array["middleName"] . PHP_EOL;
echo $array["lastName"] . PHP_EOL;

```

#### References:
- [Object](https://www.php.net/manual/en/language.types.object.php)