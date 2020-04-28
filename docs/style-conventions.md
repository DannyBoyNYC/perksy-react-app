### BEM

Perksy components uses the Block Element Modifier (BEM) methodology.

#### Why BEM?

BEM is a clearly documented system that is straight forward and easy to use.

Key Benefits:

-   Supports a modular structure, which is perfect for smaller UI components
-   Avoids inheritance and provides scope by using a unique CSS classes per element
-   Reduces style conflicts by keeping CSS specificity to a minimum level

### Class Naming

The naming convention documentation for BEM can be found [here](http://getbem.com/naming/). Please take a few minutes to familiarize yourself with these conventions before continuing.

-   Blocks: Encapsulates a standalone entity that is meaningful on its own.
-   Elements: Parts of a block and have no standalone meaning, with the exception of child components.
-   Modifiers: Flags on blocks or elements. Use them to change appearance, behavior or state.

#### How this applies to Perksy

Below is an example of HTML output from a Navigation component.

```html
<nav class="navigation navigation--vertical">
  <ul class="list list--unordered navigation__list">
    <li class="list-item">
      <span>
        <a class="list-item__link" href="#">Dashboard</a>
      </span>
    </li>
    <li class="list-item">
      <span>
        <a class="list-item__link" href="#">Campaigns</a>
      </span>
    </li>
    <li class="list-item">
      <span>
        <a class="list-item__link" href="#">Analytics</a>
      </span>
    </li>
  </ul>
</nav>
```

Things to note:

-   A component class name is a lowercase (hyphenated if multiple words) string that directly corresponds to the component's `displayName`.
-   Elements can be either standard tag elements (i.e. `feature__image`) or child components (i.e. `feature__responsive`).
    -   For child components you need to pass that class into the child component.
-   Elements should only be one level deep (i.e `feature__content`, `feature__content-link`, and `feature__hed`).
-   Modifiers can be used on either blocks or elements as descriptors (i.e. `navigation--vertical`).
-   Modifiers should be used thoughtfully with a single level of nesting.

### ID Selectors

Don't use IDs in selectors

### Pseudo Classes and Elements

Use single colon for pseudo classes `a:hover`
Use double colons for pseudo elements `a::before`

### Declaration Blocks

#### Space between rules

Use a space after each rule

#### Maximum Nesting Depth of 4

Don't nest declaration blocks more than 4 levels deep

### Declarations

TKTKTK stylelint...

#### !important

Don't use !important

#### No vendor prefixed properties, selectors or values

Note that the linter will not flag vendor prefixes that have no standard alternative.

#### Url Functions

Use a single quote for values. ex. `url('foo.jpg')`

#### Unitless 0 values

Use `0` instead of `0px`

### SCSS Extends

**tldr; SCSS extends are not included, and are discouraged in practice.**

The use of SCSS @extends is a slightly contentious debate in Sass. I've come down on the “use extends as little as necessary” camp because anything an extend can do, a mixin can also do, with roughly the same amount of generated css. And because extends break when used in media queries, and balloon the css when applied to base elements I discourage them.

[Hugo Giraudel on Sass @extends](https://www.sitepoint.com/avoid-sass-extend/)
