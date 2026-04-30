# نشر الموقع (GitHub Pages)

هذا المشروع Angular (v21). فيه ملف Workflow جاهز لنشر الموقع على GitHub Pages عند كل دفع (push) إلى الفرع `main`.

خطوات سريعة لتفعيل النشر:

1. أنشئ مستودعًا جديدًا على GitHub وادفع الشيفرة إلى الفرع `main`.
2. اذهب إلى Settings > Pages على صفحة المستودع وتأكد أن Pages مفعل (عادة GitHub Actions سيقوم بنشر تلقائيًا بعد أول تشغيل ناجح).
3. انتظر تنفيذ الـ Action الموجودة في `.github/workflows/deploy-pages.yml`.

أوامر محليًا:

```powershell
npm ci
npm run build -- --configuration production
```

ملاحظة: الـ workflow يقوم ببناء المشروع ويضع قيمة `--base-href` تلقائيًا لتعمل على GitHub Pages. إذا أردت نشرًا سريعًا محليًا يمكنك استخدام حزمة `gh-pages`، لكن الـ Action أعلاه كافية ومُستحسنة.

بدائل: يمكنك أيضًا استخدام Netlify أو Vercel (سحب من GitHub، تلقائيًا يتعرف على build command `npm run build` و `dist/` كـ publish dir `dist/sanabel-quranic-complex`).
