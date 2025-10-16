# Carousel Layout Options

The use-case carousel now supports two layout modes:

## Full-Width Layout (Default)

Uses 100% of the browser width. Perfect for hero sections and full-page displays.

```liquid
{% include use-case-carousel.html 
   data=site.data.use_case_carousel.AI_Use_Case_Patterns
   interval=5000
   fade_duration=800
%}
```

**Use in:**
- Hero sections
- Full-page layouts
- Landing pages
- `<div class="container-fluid">` contexts

---

## Constrained Layout (90% Width)

Uses 90% of available width with a max-width of 1140px (Bootstrap XL container). Centered on the page. Perfect for content-focused layouts.

```liquid
{% include use-case-carousel.html 
   data=site.data.use_case_carousel.AI_Use_Case_Patterns
   interval=5000
   fade_duration=800
   constrained=true
%}
```

**Use in:**
- Two-column layouts
- Content pages
- Blog posts
- `<div class="container">` contexts
- When you want the carousel to match your content width

---

## Styling

Both layouts use:
- Theme colors (`$white-offset` and `$white`)
- Theme fonts (`$font-family-heading` and `$font-family-base`)
- Subtle animated gradient background
- Responsive padding and font sizes

Changes to the main theme will automatically apply to both carousel layouts.

---

## Demo Pages

- Full-width: `/use-case-demo.html`
- Constrained: `/use-case-constrained-demo.html`
