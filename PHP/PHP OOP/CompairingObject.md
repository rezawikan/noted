# Compairing Object Documentation

#### Compairing Object
- Membandingkan object terbagi menjadi dua cara, yaitu persamaan secara umum dan persamaan secara identias object.
- Persama secara umum hanya membandingkan nilainya saja.
- Sedangkan persamaan secara identitas yakni membandingkan bentuk objectnya yang di simpan dalam memory yang sama.
- Persamaan umum biasanya menggunakan **==**, sedangkan persamaan identitas object menggunakan **===**.

##### Contoh Compairing Object dengan **==**:
```
class Stundent
{
  public string $name;
  protected string $address;
  private int $telp;
}

class StundentOne
{
  public string $name;
  protected string $address;
  private int $telp;
}

$student = new Student();
$student->name = "Rezza";
$student->address = "Bali";
$student->telp = 0896000;

$studentClone =  clone $student;

$studentNew = new Student();
$studentNew->name = "Rezza";
$studentNew->address = "Bali";
$studentNew->telp = 200; 

var_dump($student == $studentClone) // true (membandingkan seluruh nilai propety)
var_dump($student == $studentNew) // false (property telp memiliki nilai yang berbeda)

```
##### Contoh Compairing Object dengan **===**:
```
class Stundent
{
  public string $name;
  protected string $address;
  private int $telp;
}

class StundentOne
{
  public string $name;
  protected string $address;
  private int $telp;
}

$student = new Student();
$student->name = "Rezza";
$student->address = "Bali";
$student->telp = 0896000;

$studentSatu = new Student();
$studentSatu->name = "Rezza";
$studentSatu->address = "Bali";
$studentSatu->telp = 0896000;

var_dump($student === $studentSatu) // false karena object nya disimpan di memory yang berbeda, walaupun objectnya sama.
var_dump($student === $student) // true karena object nya disimpan di memory yang sama.
```

#### References:
- [Object Comparison](https://www.php.net/manual/en/language.oop5.object-comparison.php)