import { writeFileSync } from "fs";
import Parser from "rss-parser";
const parser = new Parser();

const formatDate = (isoDate) => {
  if (!isoDate || isNaN(Date.parse(isoDate))) {
    return ""; // 無効な日付の場合は空の文字列を返す
  }
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0];
};

const parseFeed = async (url, category) => {
  const feed = await parser.parseURL(url);
  let items = feed.items;

  // MOVEDカテゴリーの場合、最初の4記事を削除
  if (category === "MOVED") {
    items = items.slice(4);
  }

  // 2022-10-01以降の記事のみフィルタリング
  items = items.filter(item => new Date(formatDate(item.isoDate)) >= new Date("2022-10-15"));

  return items.map(item => {
    return {
      date: formatDate(item.isoDate),
      title: item.title.replace(" | 株式会社MOVED", ""),
      category: category,
      link: item.link
    };
  });
};

(async () => {
  const feedUrls = [
    "https://rss.app/feeds/wYrhS1M7YaxvfjL4.xml",
    "https://rss.app/feeds/EwUWld9qS8YqVoSc.xml",
    "https://rss.app/feeds/cnagxrB0lXUgt4mL.xml",
    "https://rss.app/feeds/OPOsQPeKwDnW0e4T.xml",
    "https://note.com/knocklearn/rss",
    "https://note.com/knocklearn_inc/rss",
    "https://rss.app/feeds/fBLkFUS59QX6VvZu.xml",
    "https://rss.app/feeds/GoPmDyuz9peafwfO.xml",
    "https://rss.app/feeds/vT79yHIvVQBVWGJw.xml",
  ];

  const categories = ["MOVED", "MOVED", "MOVED", "MOVED", "ノックラーン", "ノックラーン", "感覚過敏研究所", "感覚過敏研究所", "感覚過敏研究所",];

  let jsonFeed = [];
  for (let i = 0; i < feedUrls.length; i++) {
    const items = await parseFeed(feedUrls[i], categories[i]);
    jsonFeed = jsonFeed.concat(items);
  }

  // 日付順に逆ソート（新しい日付が先）
  jsonFeed.sort((a, b) => new Date(b.date) - new Date(a.date));

  writeFileSync("src/rss/articles.json", JSON.stringify(jsonFeed, null, 2));
})();
