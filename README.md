# Bring a Webpage to Life
### CPNT 262 Web Client and Server Programming
### By Cal Holt
[GH Pages Site](https://calholt.github.io/cpnt260-a3/)

# Features
- Toggle for mobile nav ( Lines 4 - 12 in client.js )
- Toggle for dark mode ( Lines 17 - 44 in client.js )
- Button not a part of input field or form ( Lines 48 - 53 in client.js )
- 9 image gallery rendered from JS array ( Lines 57 - 66 in client.js )

## Bugs
Throughout this assignment I didn't come across a ton of bugs within my code however there where two that did give me troubles.
1. Dark Mode theme and slider stuck on refresh
2. Images not properly scaling for mobile
## Solving the bugs
The first bug I had run into was my dark mode toggle. Once I noticed how the theme would change to light and the toggle would stay on dark I knew I would have to use localStorage to ensure that this bug no longer happened. After constant attempts to fix it and help from [Plain English](https://plainenglish.io/blog/build-a-dark-mode-toggle-with-javascript-and-localstorage) I finally was able to keep it from adjusting on refresh.

The Second bug I encountered was creating a horizontal scroll bar when the window would shrink. I knew this could be because of the way I had sized the images but with a few searches I had found the clamp() attribute for CSS. This article from [raybo.org](https://raybo.org/posts/2021-02-28-CSS%20Clamp/) helped me learn and fix my error.

### Base
The base layout was recycled from a previous 260 assignment