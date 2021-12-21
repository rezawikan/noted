# Final Class & Final Function Documentation

#### Final
- Kata final pada class menandakan bahwa class tidak bisa di wariskan lagi.
- Kata final pada function menandakan bahwa function tidak bisa di override lagi di class child nya.


##### Contoh Final Class:
```
class SocialMedia 
{
  
}

final class Facebook extends
{

}

// akan terjadi error
class FacebookAds extends Facebook 
{

}
```

##### Contoh Final Function:
```
class SocialMedia 
{
  
}

class Facebook extends
{
  final public function login(string $username, string $password): bool
  {
     return true;
  }
}

class FacebookAds extends Facebook 
{
  // akan terjadi error
  public function login(string $username, string $password): bool
  {
    
  }
}
```

#### References:
- [Final](https://www.php.net/manual/en/language.oop5.final.php)