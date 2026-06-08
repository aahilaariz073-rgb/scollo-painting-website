Primary call-to-action button; the amber `primary` variant carries the site's "Get a Free Quote" action everywhere.

```jsx
<Button variant="primary" size="lg" href="/quote">Get a Free Quote</Button>
<Button variant="secondary" iconLeft={<PhoneIcon/>}>Call 561-306-1813</Button>
<Button variant="ghost" size="sm">Learn more</Button>
```

Variants: `primary` (amber, on light), `secondary` (navy outline → fills on hover), `ghost` (text), `inverse` (white, for use on navy bands). Sizes `sm | md | lg`. Pass `href` to render an `<a>`. Hover lifts + warm shadow on primary; never scale-shrinks on press.
