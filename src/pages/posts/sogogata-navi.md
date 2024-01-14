---
layout: ../../layouts/BlogPostLayout.astro
title: '総合型選抜ナビをリリースしました'
pubDate: 2023-09-21
image: '/images/icon/search.webp'
ogImage: '/images/og/sogogata-navi.webp'
tags: ["プログラミング"]
---

長期インターン中の株式会社ノックラーンにて、総合型選抜を考えている高校生に向けた新たなサービス「[総合選抜型ナビ by KnockLearn α版](https://ao-navi.knocklearn.com/)」をリリースしました。リリースにあたって、企画立案からサービス開発までを担当しています。

<div class="flex justify-center mt-4">
    <button type="button" class="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <a href="https://ao-navi.knocklearn.com/">サービスを試してみる</a>
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>

![](/images/02-01.webp)

勉強以外に取り組んでいることがある高校生は、総合型選抜での受験を検討することも多いです。しかし総合型選抜に関する情報は限られており、特に「自分の条件に合った総合型選抜を実施している大学が分からない。」という課題がありました。

そこで診断メーカーのような形で、大学で学びたいことや希望するエリア、英検の資格、評定、併願できるかどうかを選択し、自分に合った選択肢を見つけられるサービスを開発することにしました。

### サービスの詳細

主に、質問に答えて大学を絞り込むページと、大学名で検索するページの2つがあります。

質問に答えて大学を絞り込むページでは、5つの質問に回答していきます。上の項目一覧を押したり、画面下のほうにある「1つ前に戻る」を押すことにより、以前の質問に戻れるようにしました。
![](/images/02-02.webp)

質問に答え終わると結果が表示され、気になった選択肢があれば「公式サイト」と書かれたボタンを押すことで、入試要項を確認できるようにしています。
![](/images/02-03.webp)

大学名で検索するページでは、検索欄に大学名を入力することにより、このサービスで掲載している難関私立大学・国公立大学78校が表示されます。また「全て」「締切前」「締切過ぎ」の3つの絞り込み機能があり、今からでも間に合う大学を調べることも可能です。

### こだわったポイント

高校生を対象にしたサービスなのでスマホで使いやすいように、スクロールして質問に答えていく形式ではなく、各質問ごとにページを変えていく形式にしました。これにより、簡単に操作できるようになったと思っています。

また共通テストが必須ではなく、学力を重視しないような総合型選抜だけを掲載することで、勉強以外に取り組んでいることがある高校生が受験しやすいようにしました。

### さいごに

個人的な思いから生まれたサービスを長期インターン先の株式会社ノックラーンにて、リリースできたことは、自分にとって良い経験になったと思っています。開発にあたって、社内メンバーにフィードバックをいただいたりと、大変お世話になりました。

最近、教育も多様化しており様々な学校やサービスが増えていますが、それが知られていないと感じることが多いです。今後このサービスはもちろん、それ以外でも、世の中にある情報を可視化することで、知られないままになってしまうことを減らしていくために取り組んでいければと思っています。
