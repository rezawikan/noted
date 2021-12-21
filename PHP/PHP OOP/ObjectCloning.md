# Object Cloning Documentation

#### Object Cloning
- Menyalin obeject ke object baru atau membuat duplikasi object.
- Semua properties dengan spesifik visibility juga akan di duplikasi (public, protected, private).

##### Contoh Object Cloning:
```
class Stundent
{
  public string $name;
  protected string $address;
  private int $telp;
}

$student = new Student();
$student->name = "Rezza";
$student->address = "Denpasar";
$student->telp = 0896000;

$studentClone =  clone $student;

// manual cloneing
// $stundetClone = new Student();
// $student->name = "Rezza";
// $student->address = "Denpasar";
// $student->telp = 0896000;
```

##### Contoh Object Cloning menggunakan __clone:
- __clone akan di panggil setelah proses clone selesai
- Menentukan object yang akan di cloning atau memodifikasi hasil object cloning nya.

```
class Stundent
{
  public string $name;
  protected string $address;
  private int $telp;
  
  public function __clone()
  {
    unset($this->telp);
  }
}

$student = new Student();
$student->name = "Rezza";
$student->address = "Denpasar";
$student->telp = 0896000;

$studentClone =  clone $student;

// __clone akan di eksekusi setelah **clone** di jalankan.
```

#### References:
- [Object Cloning](https://www.php.net/manual/en/language.oop5.cloning.php)