---
layout: ../../layouts/BlogPostLayout.astro
title: 'このサイトをAstroに移行しました'
pubDate: 2023-11-13
image: '/images/right.webp'
ogImage: '/images/og/astro.webp'
tags: ["プログラミング"]
---

今までこのサイトは、HTML・Tailwindcssで見た目をつくり、Javascriptで動きをつけ、PythonでURL構造を指定するという構成で作成していました。ただこれでは分かりづらすぎるので、今後のことを考え、Astroに移行しました。

Astroについては、公式サイトにて詳細に解説されています。
https://docs.astro.build/ja/concepts/why-astro/

### コンポーネントでサイト更新が楽に
Astroを使うことによってコンポーネントが使えるようになり、Projectページなどの同じようなブロックを少し変更して使っている部分の作成が楽になりました。
![screenshots01](/images/project-page.webp)

移行するのにあたってデプロイエラーなど色々と課題はありましたが、これからのサイト更新は楽になりそうだと思っています。

### Markdown形式でブログが更新できるように
今まではHTMLを直打ちするようにしてブログの記事を作成していましたが、Markdown形式で更新できるように変更したため、かなり楽にブログ記事を作成できるようになりました。

またブログ記事のデザインは、以前のと同じようになるようにTailwindcssで調整していましたが、デプロイエラーで実装できず。解決策を友人に尋ねたところ「ブログ記事なら@tailwindcss/typographyを使った方がいい。」とアドバイスされ、採用しました。

簡単に整ったデザインになり、勧めてくれた友人には感謝しています。せっかく構成を変えたので、これから様々な記事をかいていければいいなと思っています。