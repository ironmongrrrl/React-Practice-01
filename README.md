# Practice makes... you better.

Here's the [YouTube video](https://www.youtube.com/watch?v=gnkrDse9QKc) I was following, with Ben Awad and Clément Mihailescu.

The goal of this was to get more comfortable making a call to an API, and working with the JSON.

## Still to learn

I am really starting to dig into the useEffect dependency array to understand what it's doing and why. It's not good practice to leave it blank, but putting in the dependency also doesn't provide the desired result.

From reading the comments, people are arguing over useRef and useCallback.

I'm working through [Dan Abramov's article](https://overreacted.io/a-complete-guide-to-useeffect) on this to really understand the inner workings and get a clearer answer.

## What I've learnt

- Think about the edge cases.

```
if (newData === undefined) return;
```

```
  setUserDataJSON(
        JSON.stringify(newData, null, 20) || "No user data found"
      );
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
