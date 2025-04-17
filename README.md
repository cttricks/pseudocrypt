<div align="center">
  <img src="https://raw.githubusercontent.com/cttricks/pseudocrypt/refs/heads/master/public/icon.png" width="100" alt="PseudoCrypt logo" />
</div>
<h1 align="center">PseudoCrypt</h1>
<p align="center">✨ A tiny utility to generate short, deterministic, pseudo-unique hashes — not for security, just for fun and function.</p>

Years ago, while working on a PHP project, I stumbled upon a brilliant little gem called [PseudoCrypt](https://web.archive.org/web/20130727034425/http://blog.kevburnsjr.com/php-unique-hash) by KevBurnsJr. It gave me compact, reversible hashes for integer IDs — just what I needed for pretty URLs.

Fast-forward to today, while building a Node + Express app, I wanted that same functionality. Nostalgia kicked in — so I re-imagined the logic in JavaScript, packed it into a clean NPM module, and now, I'm sharing it with the world.

## 📦 Installation

```bash
npm i @cttricks/pseudocrypt
```

## ⚙️ Usage

```js
const { encode, decode } = require('@cttricks/pseudocrypt');

const shortId = encode(1320588); // HdMxQ
const original = decode(shortId); // 1320588

```
> [!TIP]
> You can also customize the hash length
> ```js
> const hash = encode(123456, 7);  
> ```

## 📚 API
### encode(number, length = 5)
- Converts a number into a short, base62-like string.
- Length determines the padded size of the output hash.

### decode(string)
- Reverses the encoded string back to the original number.

## 🧠 Use Cases
- URL shortening
- Obfuscating numeric IDs
- Pretty URLs
- Generating lightweight client-side keys

> [!WARNING]  
> This is not a cryptographic hash — it’s meant for short pseudo-unique strings, not for passwords or secure encoding.

This little library was built with a blend of nostalgia, practicality, and a sprinkle of fun.
If it saved you a few lines of code or gave your project some cleaner URLs — I’m glad it helped ✨

Feel free to fork it, remix it, improve it, or just drop a ⭐ on GitHub if you found it useful.
No formalities, no promises — just code made with good vibes.

—

Happy hashing! 🚀
— Tanish Raj / @cttricks

