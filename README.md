# Practice makes... you better.

Here's the [YouTube video](https://www.youtube.com/watch?v=gnkrDse9QKc) I was following, with Ben Awad and Clément Mihailescu.

The goal of this was to get more comfortable making a call to an API, and working with the JSON.

## Still to learn

This practice has thrown up questions on the useEffect dependency array. It's not good practice to leave it blank, but putting in the dependency also doesn't provide the desired result. I've had this issue in other projects, so it's interesting to see people in the comments also being confused about it - arguing over useRef and useCallback as solutions.

I'm working through [Dan Abramov's article on useEffect](https://overreacted.io/a-complete-guide-to-useeffect) on this to really get a clear answer.

I need to brush up on closures, and I'm also getting a window into useReducer.

## What I've learnt from this

- Think about the edge cases.

```
if (newData === undefined) return;
```

```
  setUserDataJSON(
        JSON.stringify(newData, null, 20) || "No user data found"
      );
```

- Use the functional updater form of setState, to avoid race conditions.

E.g. Don't do this:

```
setCount(count + 1)
```

Do this:

```
setCount(prev => prev + 1)
```

- Get more comfortable with destructuring, it helps with brevity.

```
const getFullUserName = (userInfo) => {
   const {
     name: { first, last },
   } = userInfo;
   return `${first} ${last}`;
 };
```

```
const fetchData = (pageNumber) => {
    return axios
      .get(`https://randomuser.me/api?=page${pageNumber}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => console.error(err));
  };
```

- This is the full notation for JSON.stringify to view it more easily.

```
JSON.stringify(newData, null, 20)
```

- **pre** HTML tags are also a much better way of viewing JSON, assuming left text justification.
- The spread operator is your friend.
- Take things one step at a time.
