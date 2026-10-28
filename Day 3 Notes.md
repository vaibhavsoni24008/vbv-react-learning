# Day 3 Notes: LU 4.13 Conditional Rendering & Lists

JSX mein `if` ya `for` nahi hota, kyunki JSX JavaScript hi hai. Hum JavaScript ke tools hi use karte hain.

## Part 1: Conditional rendering (kab kya dikhana hai)

### 1. if/else with early return
Jab poora component 2 alag screens mein bat jaye:
```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) return <p>Welcome back!</p>;
  return <p>Please log in.</p>;
}
```

### 2. Ternary: `condition ? a : b`
Jab JSX ke andar hi 2 mein se ek chunna ho:
```jsx
<p>{isLoggedIn ? "Welcome" : "Login karo"}</p>
```

### 3. `&&`: dikhao ya kuch nahi
```jsx
{count > 0 && <span>Items: {count}</span>}
```

### `&&` ka trap (zero wali galti)
Left side agar number `0` hai to React **0 screen par dikha deta hai** (kuch nahi nahi).
```jsx
{count && <span>Items</span>}        // galat: count 0 ho to "0" dikhega
{count > 0 && <span>Items</span>}    // sahi: boolean test
```
Rule: `&&` ke left mein hamesha **true/false wali condition** likho, bare number nahi. `false` kuch render nahi karta, `0` render karta hai.

## Part 2: Lists with `.map()`
Array se JSX banane ke liye `.map()`:
```jsx
const fruits = ["Apple", "Banana", "Cherry"];

<ul>
  {fruits.map((fruit) => (
    <li key={fruit}>{fruit}</li>
  ))}
</ul>
```

### `key` prop
Har item ko ek **unique aur stable** key chahiye. React isse pehchanta hai ki kaun sa item kaun sa hai, taaki list badalne par sirf wahi update kare jo badla.
```jsx
{users.map((user) => (
  <li key={user.id}>{user.name}</li>
))}
```

### Index ko key mat banao
`key={index}` warning band kar deta hai, lekin item delete ya reorder hone par saare index shift ho jate hain. Phir React galat item ka state (jaise input mein likha note) galat item par chipka deta hai.
- **Sahi:** `item.id` jaisi value jo item ki apni ho
- Index tabhi safe hai jab list kabhi change na ho (na add, na delete, na reorder)

## Part 3: Loading aur Empty state
List dikhane wala component 3 halaton se guzarta hai:
1. **Loading:** data aa raha hai, spinner dikhao
2. **Empty:** data aaya par list khali hai, "kuch nahi mila" dikhao
3. **Has data:** list dikhao

```jsx
function Results({ loading, items }) {
  if (loading) return <p>Loading...</p>;
  if (items.length === 0) return <p>No results yet.</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```
Sabse urgent case pehle (early returns). Khali list ka `.map()` kuch render nahi karta, user ko blank screen dikhti hai aur lagta hai app kharab hai. Isliye empty state zaroori hai.

## Viva Q&A
- **JSX mein if/for kyun nahi?** JSX JavaScript hai, wahi ternary, `&&` aur `.map()` use hote hain.
- **Ternary kab, `&&` kab?** Do options mein se ek: ternary. Dikhao ya kuch nahi: `&&`.
- **`{count && ...}` mein kya problem?** Count 0 ho to "0" screen par dikhta hai. `count > 0 &&` likho.
- **`key` kyun chahiye?** React ko batane ke liye ki kaun sa item kaun sa hai.
- **Index key kyun galat?** Delete ya reorder par index shift hote hain aur state galat item par chali jati hai.
- **Empty list par `.map()` kya karta hai?** Kuch render nahi karta, isliye empty message dikhana zaroori hai.

## Ek line mein
Choose karo ternary ya `&&` se, repeat karo `.map()` se (stable `id` key ke saath), aur loading/empty/data teeno states handle karo.