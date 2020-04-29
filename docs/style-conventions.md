### BEM

Perksy components uses the Block Element Modifier (BEM) methodology.

#### Why BEM?

BEM is a clearly documented system that is straight forward and easy to use.

Key Benefits:

- Supports a modular structure, which is perfect for smaller UI components
- Avoids inheritance and provides scope by using a unique CSS classes per element
- Reduces style conflicts by keeping CSS specificity to a minimum level

#### Class Naming

The naming convention documentation for BEM can be found [here](http://getbem.com/naming/). Please take a few minutes to familiarize yourself with these conventions before continuing.

- Blocks: Encapsulates a standalone entity that is meaningful on its own.
- Elements: Parts of a block and have no standalone meaning, with the exception of child components.
- Modifiers: Flags on blocks or elements. Use them to change appearance, behavior or state.

#### How this applies to Perksy

Below is an example of HTML output from a Navigation component.

```html
<nav class="navigation navigation--vertical">
  <ul class="list list--unordered navigation__list">
    <li class="list-item">
      <span class="navigation-item">
        <a class="navigation-item__link" href="#">Dashboard</a>
      </span>
    </li>
    <li class="list-item">
      <span class="navigation-item">
        <a class="navigation-item__link" href="#">Campaigns</a>
      </span>
    </li>
    <li class="list-item">
      <span class="navigation-item">
        <a class="navigation-item__link" href="#">Analytics</a>
      </span>
    </li>
  </ul>
</nav>
```

**Things to note:**

- A component class name is a lowercase (hyphenated if multiple words) string that directly corresponds to the component's `displayName` (i.e `ProgressBar` and `.progress-bar`).
- Elements can be either standard tag elements (i.e. `<ul>`) or child components (i.e. `<List>`).
  - For child components you should pass the combined class into the child component (i.e. `.navigation__list`).
- Elements should only be one level deep.
  - `.navigation-item__link` is valid.
  - `.navigation__item__link` is invalid.
- Modifiers can be used on either blocks or elements as descriptors (i.e. `navigation--vertical`), but should be used thoughtfully with a single level of nesting.

### Code Syntax and Conventions

All other style conventions should be enforced via [stylelint](https://stylelint.io/). All configured rules can be found in the `.stylelintrc` file.
