# Perksy Components

A collection of common patterns used across Perksy web applications. The aim of this library is to provide a toolbelt of components, that will allow the composition of pages more quickly and consistently.

## Getting Started

### Environment

This repository uses nvm to manage Node versions. Check the `.nvmrc` file for the current Node version.

If you already have nvm installed, just type the following command and follow the prompts to configure Node.

```
$ nvm use
```

If you do not have nvm installed yet, you can easily due do by using a package manager like [Homebrew](https://brew.sh/).

```
$ brew install nvm
```

### Installation

Once you have the correct version of Node configured, run the following command to install all dependencies.

```
$ npm install
```

## Usage

We use [React Styleguidist](https://react-styleguidist.js.org/) to generate a living style guide for Perksy components.

### Development

To run the application use the following command and follow all terminal prompts.

```
$ npm run dev
```

### Testing

To test all components use the following command.

```
$ npm run test
```

To check the current code coverage of components run the following command.

```
$ npm run test:coverage
```

## Contributing

### Code Style

All decisions surround code style should either be automated with a lint rule or heavily documented. This repository uses [ESlint](https://eslint.org/), [Prettier](https://prettier.io/), and [Stylelint](https://stylelint.io/) to check code style and syntax.

## Roadmap

Q4: November and December

- Basic Node app (Next.js)
- Code Pipeline in place
- All components (light to medium lift)
- Heavy lift components
  - Graphs
  - Drag and Drop / Piping
  - Modals

Q1: January

- Complete app integration
  - Data normalization layer
- QA

#### Setup

- Add build process for js and css compilation
- Add theming capabilities / sass architecture for styled components
- Get style guide hosted on S3
- Add testing setup (Shippable, Codeship, etc.)
- Research forms in React
- Research graph libraries (D3, AM Chart, Any Chart, etc.)
- Get perksy-web running with components?
- Test ADA at top-level for components

### First Sections:

1. Dashboard
2. Campaigns
   - Create Campaign
   - Add Questions
   - Question Piping
   - Select Targets
   - Campaign Details
   - Launch Campaign
3. Analytics
   - Overview
   - Responses
   - Respondents
   - Segments
   - Analysis
4. Settings

#### Components:

**In Progress**

- Campaign (M)
- Status (L)

**Pipeline**

- TabView (M)
- Image (M)
  - Basic
  - Placeholder
  - Responsive
  - Lazy
- Heading? (L)
- Columns (L)
- Carousel (M)
- Timestamp (L)
- List.Sort (L)
- Date Picker (M)
- Modal (H)
- Toast? (L)
- Accordion? (M)

**Backlog**

- Drag and Drop / Piping (H)
- Upload (L)
- Forms
  - CheckBox (L)
  - Slider (L)
  - Range (L)
  - DateTime (L)
  - Form (L)
  - FormField (L)
  - LoginForm (M)
  - NumberInput (L)
  - PasswordInput (L)
  - RadioButton (L)
  - SearchInput (L)
  - Select (L)
  - TextInput (L)
- Graphs (H)
  - .ProgressBar
  - .PieChart
  - .BarChart (with bar charts, each column represents a group defined by a categorical variable)
  - .Histogram (with histograms, each column represents a group defined by a continuous, quantitative variable)
  - .Country
  - .Table

### Dev Lift

(L) light: <1 day
(M) med: 2-4 days
(H) heavy: 5+

#### Estimation

(L)(M) 48 days ~> 10 weeks
(H) 15+ days ~> 3 weeks
**13 weeks total**
