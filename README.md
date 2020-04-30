# Perksy React Web App

[![CircleCI](https://circleci.com/gh/perksy/perksy-web-react/tree/master.svg?style=svg&circle-token=091f9150fc3bc6bce7f1db1fb63db4a2f6bfcf74)](https://circleci.com/gh/perksy/perksy-web-react/tree/master)

A collection of common patterns used across Perksy web applications. The aim of this library is to provide a toolbelt of components, that will allow the composition of pages more quickly and consistently.

## Getting Started

### Environment

This repository uses nvm to manage Node versions. Check the `.nvmrc` file for the current Node version.

If you already have nvm installed, just type the following command to install the required Node version.

```
$ nvm install
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

We use [Next.js](https://nextjs.org/) to build our server-side rendered React application.

### Development

To run the application use the following command and follow all terminal prompts.

```
$ npm run dev
```

The app runs on port `8080` by default. To change this update the value in the `dev` script in `package.json`.

### Style Guide

We use [React Styleguidist](https://react-styleguidist.js.org/) to generate a living style guide for our components.

```
$ npm run styleguide
```

The app runs on port `6060` by default. To change this update the `serverPort` variable in `styleguide.config.js`.

To compile the styleguide to a static site, run:

```
$ npm run styleguide:build
```

### Testing

To test all components use the following command.

```
$ npm run test
```

If a snapshot has changed, your past tests will fail. If the change was desired, you can update the snapshot by running:

```
$ npm run test:update
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

- Basic Next.js Node app
- Code Pipeline in place
- Custom Error Pages
- All components (light to medium lift)
- Heavy lift components
  - Graphs
  - Drag and Drop / Piping
  - Modals

Q1: January

- Complete API integration
  - Data normalization layer
- QA

#### Setup

- Point S3 bucket to http://components.getperksy.com
  - http://components.getperksy.com.s3-website-us-east-1.amazonaws.com
- Add Persky fonts
- Research forms in React
- Research graph libraries (D3, AM Chart, Any Chart, etc.)
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
- Image (M)
  - Progressive (with Lazy)
  - Responsive

**Pipeline**

- Heading? (L)
- Carousel (M)
- Timestamp (L)
- List.Sort (L) https://github.com/clauderic/react-sortable-hoc
- DatePicker (M)
  - Using: https://github.com/airbnb/react-dates
  - Other: https://github.com/Hacker0x01/react-datepicker
  - Other: https://github.com/gpbl/react-day-picker
- Modal (H)
- Toast? (L)
- Accordion? (M)

**Backlog**

- Drag and Drop / Piping (H)
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

- (L) light: <1 day
- (M) med: 2-4 days
- (H) heavy: 5+

#### Estimation

- (L)(M) 48 days ~> 10 weeks
- (H) 15+ days ~> 3 weeks
- **13 weeks total**
