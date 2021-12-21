# Generator Documentation

#### Generator
- Generator merupakan cara alternatif selain menggunakan iterator.
- Iterator akan di generate secara otomatis.

##### Contoh Generator:
```
public function getGanjil(int $nums): Iterator
{
  for($i = 0; $i <= $nums; $i++)
  {
    if($i % 2 == 1)
    {
      yeild $i;
    }
  }
}

// akan mengembalikan semua nilai ganjil dalam bentuk array
$ganjil = getGanjil(100);

foreach($ganjil as $value)
{
  echo $value . PHP_EOL;
}
```

##### Contoh dalam bentuk Iterator:
```
public function getGanjil(int $nums): Iterator
{
  $array = [];
  for($i = 0; $i <= $nums; $i++)
  {
    if($i % 2 == 1)
    {
      $array[] = $i;
    }
  }
}

// akan mengembalikan semua nilai ganjil dalam bentuk array
$ganjil = getGanjil(100);

foreach($ganjil as $value)
{
  echo $value . PHP_EOL;
}
```

#### References:
- [Comparing Generator with Iterator](https://www.php.net/manual/en/language.generators.comparison.php)