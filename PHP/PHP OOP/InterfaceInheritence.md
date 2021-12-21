# Interface Documentation

#### Interfece
#### Interface Inheritance (Pewarisan)
- Interface Inheritance sebenarnya mirip dengan konsep Inhiretance biasa di PHP.
- Interface bisa di implementasikan pada child class lebih dari satu interface.
- Pewarisan antar Interface menggunakan keyword extends untuk mewariskan.

Contoh Pewarisan antar Interface:
```
interface hasBranch 
{
  public function getBranch(): string ;
]

interface isMantenance 
{
  public function getMaintenance(): bool ;
}

// Pewarisan antar Interface
interface Car extends hasBranch, isMaintence 
{
  public function drive(): void;
  public function getTire(): int;
}

class Xpander implements Car 
{
  public function getBranch() 
  {
    return 'Kendaraan';
  }
  
  public function getMaintenance()
  {
    return true;
  }
  
  public function drive()
  {
    echo "Drive Xpander" . PHP_EOL;
  }
  
  public function getTire()
  {
    return 4;
  }
}
```

Contoh Pewarisan Interface pada class:
```
interface hasBranch 
{
  public function getBranch(): string ;
]

interface isMantenance 
{
  public function getMaintenance(): bool ;
}

interface Car
{
  public function drive(): void;
  public function getTire(): int;
}

// Peawarisan Interface pada class
class Xpander implements Car, hasBranch, isMaintence 
{
  public function getBranch() 
  {
    return 'Kendaraan';
  }
  
  public function getMaintenance()
  {
    return true;
  }
  
  public function drive()
  {
    echo "Drive Xpander" . PHP_EOL;
  }
  
  public function getTire()
  {
    return 4;
  }
}
```

#### References:
- [Object Interface](https://www.php.net/manual/en/language.oop5.interfaces.php)