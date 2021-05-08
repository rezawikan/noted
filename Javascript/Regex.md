# Documentation of RegExp (Regular Expresion)

#### The RegExp object is used for matching text with a pattern.

- `/foo/i` : character `i` used to ignore the case sensitive (upper & lower case).
- `/foo/g` : character `g` used to global search.
- `/foo+/gi` : character `+` used to search match char/word more than one times.
- `/b[aiu]g/` : this bracket `[ ]` used to find some words (bag, big, and bug).
- `/[a-z]/` : character `-` inside bracket used to match base on the pattern (only alphabet).
- `/[a-z0-9]/`: character `-` inside bracket used to match base on the pattern (only alphanumeric).
- `/[^aeiou0-9]/` : character `^` used to ignonre those characters (aeiou & all numeric characters).
- `/hu./` : character `.` used to match previous characters. It will match with hum, hus, hul, huk, etc. You can add it on the beginning of the char.
- `/<.*?>/` : character `?` used to determine that char is optional.
- `/foo$/` : character `?` used to determine that the last text is a string.
- `/\w/` : character `\w` (lowercase) is similar with `[A-Za-z0-9_]` (uppercase, lowercase, number and underscore).
- `/\W/` : character `\W` (uppercase) is opposite from `[A-Za-z0-9_]`. It will macth with `!@#$$%\*&^`.
- `/\d/` : character `\d` (lowercase) is similar with `[0-9]`.
- `/\D/` : character `\D` (uppercase) is opposite from `[0-9]`. It will ignore the numeric characters.
- `/\s/` : character `\s` used to match with space character.
- `/ha{3}/` : this bracket `{3}` will macth last character `a` and at least, it has three character `a`.
- `/\1/` : character `\1` used to grouping the word.
- `/p(engu|umpk)in/` : used to check optional possibilities.

#### The difference between `.test` and `.match`

- `.test` used if the regExp in the begining. It will return boolean value. `/regex/.test('string');`
- `.match` used if the regExp in the end. It will return values as array. `'string'.match(/regex/);`
