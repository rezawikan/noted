# PDO Pattern

##### Connection:
```
function getConnection(): PDO
{
    $host = "localhost";
    $port = 3306;
    $database = "belajar_php_database";
    $username = "root";
    $password = "";

    return new PDO("mysql:host=$host:$port;dbname=$database", $username, $password);
}
```

##### Model Comment:

```
namespace Model {

    class Comment
    {

        public function __construct(private ?int $id = null,
                                    private ?string $email = null,
                                    private ?string $comment = null)
        {
        }

        /**
         * @return int|null
         */
        public function getId(): ?int
        {
            return $this->id;
        }

        /**
         * @param int|null $id
         */
        public function setId(?int $id): void
        {
            $this->id = $id;
        }

        /**
         * @return string|null
         */
        public function getEmail(): ?string
        {
            return $this->email;
        }

        /**
         * @param string|null $email
         */
        public function setEmail(?string $email): void
        {
            $this->email = $email;
        }

        /**
         * @return string|null
         */
        public function getComment(): ?string
        {
            return $this->comment;
        }

        /**
         * @param string|null $comment
         */
        public function setComment(?string $comment): void
        {
            $this->comment = $comment;
        }
    }
}
```

##### Comment Repository: 
```
namespace Repository {

    use Model\Comment;

    interface CommentRepository
    {

        function insert(Comment $comment): Comment;

        function findById(int $id): ?Comment;

        function findAll(): array;

    }

    class CommentRepositoryImpl implements CommentRepository
    {

        public function __construct(private \PDO $connection)
        {
        }

        public function insert(Comment $comment): Comment
        {
            $sql = "INSERT INTO comments(email, comment) VALUES (?, ?)";
            $statement = $this->connection->prepare($sql);
            $statement->execute([$comment->getEmail(), $comment->getComment()]);

            $id = $this->connection->lastInsertId();
            $comment->setId($id);

            return $comment;
        }

        public function findById(int $id): ?Comment
        {
            $sql = "SELECT * FROM comments WHERE id = ?";
            $statement = $this->connection->prepare($sql);
            $statement->execute([$id]);

            if ($row = $statement->fetch()) {
                return new Comment(
                    id: $row["id"],
                    email: $row["email"],
                    comment: $row["comment"]
                );
            } else {
                return null;
            }
        }

        public function findAll(): array
        {
            $sql = "SELECT * FROM comments";
            $statement = $this->connection->query($sql);

            $array = [];

            while ($row = $statement->fetch()) {
                $array[] = new Comment(
                    id: $row["id"],
                    email: $row["email"],
                    comment: $row["comment"]
                );
            }

            return $array;
        }

    }

}
```

##### Execute:
```use Repository\CommentRepositoryImpl;
use Model\Comment;

$connection = getConnection();
$repository = new CommentRepositoryImpl($connection);

//$comment = new Comment(email: "repository@test.com", comment: "Hi");
//$newComment = $repository->insert($comment);
//
//var_dump($newComment->getId());

//$comment = $repository->findById(32);
//var_dump($comment);

$comments = $repository->findAll();
var_dump($comments);

$connection = null;
```

#### References:
- [PDO (PHP Data Object)](https://www.php.net/manual/en/book.pdo.php)