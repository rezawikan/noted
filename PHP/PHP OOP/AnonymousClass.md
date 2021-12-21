# Anonymous Class Documentation

#### Anonymous Class
- Membuat class tanpa nama.
- Mendeklarasikan class tanpa harus membuat class terlebih dahulu.
- Mendukung construct function


##### Contoh Anonymous Class:
```
interface Hello
{
  public function sayHello(): void;
}

$sayHello = new class("Anonymous Name") implements Hello 
{

  public string $name; 
  
  public function __construct($name) 
  {
    $this->name = $name;
  }
  
  public function sayHello()
  {
    return "Hello World" . PHP_EOL;
  }
}
```

#### References:
- [Anonymous Class](https://www.php.net/manual/en/language.oop5.anonymous.php)