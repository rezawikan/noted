# Composer Documentation
Composer merupakan depedencies management tool, yakni semacam plugin tambahan yang wajib di gunakan dalam setiap development untuk mengatur file project serta library-library yang akan digunakan.

#### Composer Code
- ```composer init``` Membuat inisiasi file composer
- ```composer install``` Meng-install library berdasarkan composer.json/composer.lock
- ```composer update``` Meng-update library berdasarkan composer.json
- ```composer dump-autoload``` Me-refresh ulang semua file
- ```composer --version``` Mendapatkan versi composer

#### Composer Autoload
```
"autoload": {
  "psr-4": {
    "Mochammad\\": "/src"
  }
}
```

#### Penulisan Version Require
- Penulisan versi terbagi menjadi dua, require untuk kebutuhan production dan development atau development saja.
- Kita bisa menggunakan **tag** dan **branch**
 ```
 "require": {
  "library": "version"
 },
 "require-dev": {
  "library": "version"
 }
 ```
 
 Note: 
 - Penulisan versi pada branch berbeda. Kita di harus menggunakan prefic ```dev-*```. Sebagai contoh kita memiliki branch ```my-branch```, maka akan di tuliskan ```dev-my-branch```.
 - Jika nama branch mirip dengan nama tag, contohnya ```v1```,```v2```. Maka kita harus menambahkan string ```.x``` untuk memastikan ini adalah sebuah branch dan dalam kasus ini, kita juga harus menambahkan ```-dev``` daripada ```dev-``` karena terletak di akhir.

 #### Branch Alias
 Ketika kita meiliki branch dan tag yang di gunakan secara bersamaan, sebagai contoh kita punya ```master``` dan ```bugfix``` branch. Masing-masing dari branch tersebut memiliki banyak tag pada waktu yang berbeda seperti ```1.0.0```, ```1.0.2```, dan ```1.0.3```. Untuk memudahkan kita menggunakan branch tersebut secara spesifik. Kita bisa menggunakan branch alias.

 ```
 {
    "extra": {
        "branch-alias": {
            "dev-master": "1.0.x-dev"
        }
    }
}
 ```

#### References:
- [Composer Install](https://getcomposer.org/doc/00-intro.md)
- [Composer Version](https://getcomposer.org/doc/articles/versions.md)
- [Branch Alias](https://getcomposer.org/doc/articles/aliases.md)
- [Autoloader optimization](https://getcomposer.org/doc/articles/autoloader-optimization.md)
- [Composer Scripts](https://getcomposer.org/doc/articles/scripts.md)