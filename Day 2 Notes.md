# Day 2 Notes: LU 4.12 Event Handling & Forms

## Event kya hai?
User ka action: click, typing, hover, form submit. Jo function in actions par chalta hai use **event handler** kehte hain.

## Common events
| Event | Kab chalta hai |
|---|---|
| `onClick` | Click par |
| `onChange` | Input ki value badalne par |
| `onSubmit` | Form submit par |
| `onMouseEnter` | Mouse upar aane par |
| `onKeyDown` | Key dabane par |

Naam **camelCase** mein (`onClick`, HTML ka `onclick` nahi).

## Function PASS karo, CALL mat karo (sabse common bug)
```jsx
<button onClick={handleSave}>OK</button>            // sahi: React click par chalayega
<button onClick={handleSave()}>OK</button>          // galat: render hote hi chal jayega
<button onClick={() => handleSave(id)}>OK</button>  // argument dena ho to arrow function
```

## Event object (`e`)
Event hone par React handler ko ek object deta hai, jise sab `e` kehte hain. Isme event ki details hoti hain.
- `e.target.value` = input mein abhi jo likha hai
- `e.preventDefault()` = browser ka default kaam rokna

## Controlled input
Input ko state se jodo, taaki **state hi single source of truth** ho. Do cheezein chahiye:
```jsx
const [name, setName] = useState("");

<input
  value={name}                            // box hamesha state dikhata hai
  onChange={(e) => setName(e.target.value)}  // har key par state update
/>
```
Ek keystroke par: key dabi -> onChange chala -> setName chala -> re-render -> box mein naya text.

**Dhyan:** `value` de diya lekin `onChange` nahi diya, to box mein kuch type hi nahi hoga (box state se lock ho jata hai).

Fayda: state mein value hai to validate, uppercase, button disable, ya `setName("")` se clear, sab aasaan.

## Form
Form = controlled inputs + submit. Do baatein:
1. `onSubmit` **`<form>`** par lagao (button ke `onClick` par nahi)
2. Pehle `e.preventDefault()`, warna page reload hoga aur state ud jayegi
```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log(name, email);
}

<form onSubmit={handleSubmit}>...</form>
```

## Bahut saare fields: ek state object
```jsx
const [form, setForm] = useState({ name: "", email: "" });

function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
```
- Input par `name="email"` attribute zaroor do
- `[e.target.name]` = dynamic key (jo field badla wahi update hoga)
- `...form` se baaki fields purane rehte hain
- Object ko mutate nahi karna, naya banana hai

## Viva Q&A
- **`onClick={fn()}` galat kyun?** Render ke time hi call ho jata hai.
- **Argument kaise dein?** `onClick={() => fn(id)}`
- **`e.target.value` kya hai?** Input mein user ne abhi jo likha hai.
- **Controlled input kya hai?** Jiski value state se aati hai aur onChange se state update hoti hai.
- **`e.preventDefault()` kyun?** Form submit par page reload rokne ke liye.
- **Value di par onChange nahi, to?** Kuch type nahi hoga.

## Ek line mein
Event aaya -> handler chala -> setter ne state badli -> React ne re-render kiya -> screen update.