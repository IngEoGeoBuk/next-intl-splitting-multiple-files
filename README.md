# next-intl: use multiple message files per one locale

## 1. Make multiple message files per one locale

```
── messages
    └── en
        ├── about.json
        ├── home.json
        └── room.json
    └── ko
        ├── about.json
        ├── home.json
        └── room.json
```

## 2. Edit i18n.ts like me

```
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/about.json`)),
      ...(await import(`../messages/${locale}/home.json`)),
      ...(await import(`../messages/${locale}/room.json`)),
    },
  };
});
```
