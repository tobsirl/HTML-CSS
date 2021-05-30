# CSS Demystified
## Unknown Fundamentals

### [Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

#### Block formatting
In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of the containing block.

The margin between two boxes is determined by the `margin` properties.

Margins collapse into one another.

---

#### Inline formatting
In an inline formatting context, boxes are laid out horizontally, one after the other.

Horizontal margins, borders, and padding are respected between these boxes.

The boxes may be aligned vertically in different ways: their bottoms or tops may be aligned, or the baselines of text within them may be aligned. The rectangular area that contains the boxes that form a line is called a line box.

---

### Margin Collapsing
[The Rules of Margin Collapse](https://css-tricks.com/the-rules-of-margin-collapse/)

Margins between block elements *collaspe*.

An element with a top margin immediately after an element with a bottom margin are not additive.

The larger of the two margins will be used.

This can often cause confusing behaviour when to comes to margins in CSS.


![block](https://user-images.githubusercontent.com/25591390/101989629-93119d00-3c99-11eb-9f09-197b133f5019.png)

---
## Useful Tips and Tricks
### background
Adding a background image

`no-repeat` - image is not repeated

`cover` - stretch the image horizontally
```css
  background: no-repeat center url('./assets/hero.jpg');
  background-size: cover;
```

---
## Reset
### Responsive Images
Make all images scale up and down depending on the width of the parent

```css 
img {
  display: block;
  height: auto;
  max-width: 100%;
}
```
---
### Lists ul/ol
Remove `padding` and `list-style` if a class is present.
```css
ul[class],
ol[class] {
  list-style: none;
  padding: 0;
}
```
---
## Utility Classes
### Container
1. `padding` to add spacing around the content
2. `max-width` stop the page from expanding forever
3. `margin` center the content on the page

```css
.container {
  padding: 0 1rem;
  max-width: 70rem;
  margin: 0 auto;
}
```
---
### Lobotomized Owls
Remove margin and padding with a reset.

Using this technique will add consistency to layouts by having uniform spacing.

```css
h1,
h2,
h3,
p {
  margin: 0;
}

/* Lobotomized Owl */
.flow > * + * {
  margin-top: 1.5rem;
}
```
---
### Creating Columns
Creating a split class that uses `flexbox` to create two columns. Use a media query to change the orientation from column to row. This allows you to maintain the gap between elements using `gap`
```css
.split {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 60em) {
  .split {
    flex-direction: row;
  }
}
```
---