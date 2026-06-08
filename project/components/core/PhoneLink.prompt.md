Canonical click-to-call link; always renders 561-306-1813 with a correct `tel:` href. Use everywhere a phone number appears for NAP consistency.

```jsx
<PhoneLink />                       {/* navy text, on light bg */}
<PhoneLink tone="light" />          {/* white text, on navy bg */}
<PhoneLink showIcon={false}>Call us today</PhoneLink>
```

`tone="dark"` for light backgrounds, `tone="light"` for navy bands. The phone glyph is always amber.
