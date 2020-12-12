# CSS Demystified
## Unknown Fundamentals

### [Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

#### Block formatting
In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of the containing block.

The margin between two boxes is determined by the `margin` properties.

Margins collapse into one another.

#### Inline formatting
In an inline formatting context, boxes are laid out horizontally, one after the other.

Horizontal margins, borders, and padding are respected between these boxes.

The boxes may be aligned vertically in different ways: their bottoms or tops may be aligned, or the baselines of text within them may be aligned. The rectangular area that contains the boxes that form a line is called a line box.

![block](https://user-images.githubusercontent.com/25591390/101989629-93119d00-3c99-11eb-9f09-197b133f5019.png)

### background
Adding a background image

`no-repeat` - image is not repeated

`cover` - stretch the image horizontally
```css
  background: no-repeat center url('./assets/hero.jpg');
  background-size: cover;
```