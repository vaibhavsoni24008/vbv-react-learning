# Day 1 Notes - Components and JSX
# Day 1 Notes: LU 4.11 State with useState

## Problem: normal variable se screen update nahi hoti
```jsx
let count = 0;
function handleClick() {
  count = count + 1;   // memory mein badha, screen par nahi
}
```
React screen tabhi dobara banata (re-render) hai jab usse bataya jaye. Plain variable badalne se React ko pata nahi chalta, isliye screen par 0 hi dikhta rehta hai.

## State kya hai?
State = aisa data jo
1. component renders ke beech **yaad rakhta hai**, aur
2. badalne par **re-render trigger** karta hai.

## useState syntax
```jsx
import { useState } from "react";

const [count, setCount] = useState(0);
```
- `useState(0)` ek **array** return karta hai: `[current value, setter function]`
- `count` = current value (JSX mein padhne ke liye)
- `setCount` = setter (badalne ke liye, aur re-render bhi karwata hai)
- `0` = initial value, jo **sirf pehle render par** lagti hai
- Naam kuch bhi ho sakta hai, convention: `[something, setSomething]`

## Props vs State
| Props | State |
|---|---|
| Bahar (parent) se aate hain | Component ke andar ka apna data |
| Read-only | Badalne ke liye bana hai |
| Gift jaisa | Diary jaisa |

## State update ka cycle
Button click -> setter call -> React re-render karta hai -> naya value milta hai -> screen update.
Setter ek **request** hai re-render ki. Wo current line par variable ko turant nahi badalta.

## 2 Golden Rules
1. **Hamesha setter use karo.** `count = count + 1` galat hai (screen nahi badlegi, aur `const` hone se error bhi aayega).
2. **Object/array ko mutate mat karo**, naya banao:
```jsx
setUser({ ...user, name: "Ada" });   // sahi
setItems([...items, newItem]);       // sahi (add)
user.name = "Ada";                   // galat
items.push(newItem);                 // galat
```
React check karta hai ki value ka **naya reference** hai ya nahi, tabhi re-render karta hai.

## Updater function (jab purani value par depend ho)
```jsx
setCount((prev) => prev + 1);
```

## TypeScript mein typing (course mein)
TS initial value se khud type samajh leta hai:
```tsx
useState(0)        // number
useState("")       // string
useState(false)    // boolean
useState<User | null>(null)   // explicit, jab initial value poori kahani nahi batati
```
(Mera project `.jsx` hai, isliye code mein types nahi likhe.)

## Viva Q&A
- **Plain variable se screen kyun nahi badalti?** React ko re-render ka signal nahi milta.
- **useState kya return karta hai?** Array: current value aur setter.
- **State direct kyun nahi badlate?** React ko pata nahi chalta, re-render nahi hota.
- **Initial value kab lagti hai?** Sirf pehle render par.
- **Props vs state?** Props bahar se, read-only. State andar ka, setter se badalta hai.

## Ek line mein
State = component ki memory. Value padho, setter se badlo, React khud screen update karta hai.