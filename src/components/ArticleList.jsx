import React, { useState, useEffect } from 'react';

const ArticleList = ({ initialArticles }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [visibleCount, setVisibleCount] = useState(10);

  // 見える記事の数を増やす関数
  const loadMoreArticles = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 10, articles.length));
  };

  // 初期記事または外部からの新しい記事を監視し、変更がある度に状態を更新する
  useEffect(() => {
    setArticles(initialArticles);
  }, [initialArticles]);

  // 記事のデータをフェッチする
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articles.json');
        if (!response.ok) {
          throw new Error('ネットワークレスポンスが OK ではありません');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('記事の取得中にエラーが発生しました:', error);
      }
    };

    // データをフェッチする
    fetchArticles();
  }, []); // 依存配列が空なので、マウント時に1回だけ実行される

  return (
    <div className="mt-20">
      {articles.slice(0, visibleCount).map((article, index) => (
        <li key={index} className="mb-5 ml-6 list-none">
          <div className="relative p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{article.title}</h3>
              <div className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-200">
                <time>{article.date}</time>・<span>{article.category}</span>
              </div>
            </a>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ArticleList;
