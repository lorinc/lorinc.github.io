# lorinc.github.io

A Jekyll-based website with custom carousel components for displaying content.

### Features

- Jekyll 4.2+
- Netlify & Github Pages ready
- Custom carousel components with parametric timing
- Use case carousel for structured content display
- SCSS
- Fully responsive design
- Bootstrap grid system

## Installation

### Installing Ruby & Jekyll

If this is your first time using Jekyll, please follow the [Jekyll docs](https://jekyllrb.com/docs/installation/) and make sure your local environment (including Ruby) is setup correctly.

### Setup

Clone the repository and navigate to the directory:

```
bundle install
```

To start the Jekyll local development server.

```
bundle exec jekyll serve
```

To build the site.

```
bundle exec jekyll build
```

## Deployment

### Github Pages

This site is configured to work with Github Pages. The `baseurl` in `_config.yml` should match your repository name.

### Netlify

The site can also be deployed to Netlify using the included `netlify.toml` configuration.

## Carousel Components

This site includes custom carousel components:

- **Basic Carousel** (`_includes/carousel.html`) - Simple text carousel with fade transitions
- **Use Case Carousel** (`_includes/use-case-carousel.html`) - Structured layout for displaying use cases

See `CAROUSEL_PARAMETERS.md` and `USE_CASE_CAROUSEL_SETUP.md` for detailed documentation.
