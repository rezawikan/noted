# PDO (PHP Data Object)

#### PHP Data Object
- Merupakan standar komunikasi antara PHP dan Database
- PDO mendukung berbagai jenis database, seperti mysql, postgre, sqlite dll.

##### Global Connection:
```

function getConnection(): PDO
{
    $host = "localhost";
    $port = 3306;
    $database = "belajar_database";
    $username = "root";
    $password = "";

    return new PDO("mysql:host=$host:$port;dbname=$database", $username, $password);
}
```


##### PDO dengan text script:
```
$connection = getConnection();

$sql = <<<SQL
    INSERT INTO customers(id, name, email)
    VALUES (1, 'Mochammad', 'mochammad@test.com');
SQL;

$connection->exec($sql);

$connection = null;
```

##### PDO dengan bindParam :
```
$connection = getConnection();

$username = "admin";
$password = "admin";

$sql = "SELECT * FROM admin WHERE username = :username AND password = :password";
$statement = $connection->prepare($sql);
$statement->bindParam("username", $username);
$statement->bindParam("password", $password);
$statement->execute();
```

##### PDO dengan bindParam (index) :
```
$connection = getConnection();

$username = "admin";
$password = "admin";

$sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
$statement = $connection->prepare($sql);
$statement->bindParam(1, $username);
$statement->bindParam(2, $password);
$statement->execute();

```

##### PDO dengan prepare (index):
```
$connection = getConnection();

$username = "admin";
$password = "admin";

$sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
$statement = $connection->prepare($sql);
$statement->execute([$username, $password]);
```

##### PDO dengan query:
```
$connection = getConnection();

$sql = "SELECT id, name, email FROM customers";
$statement = $connection->query($sql);
```

#### References:
- [PDO (PHP Data Object)](https://www.php.net/manual/en/book.pdo.php)