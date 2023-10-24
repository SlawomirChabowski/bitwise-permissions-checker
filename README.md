# Bitwise permissions checker
A tiny script to verify permissions based on a number (similar to Linux permissions system).

Usage:

```js
import { verifyPermission } from './verifyPermission';

const myPermissions = 8;
let checkPosition = 1;

console.log(verifyPermission(myPermissions, checkPosition)); // false

checkPosition = 3;
console.log(verifyPermission(myPermissions, checkPosition)); // true
```
