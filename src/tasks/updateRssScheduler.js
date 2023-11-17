const schedule = require('node-schedule');
const { exec } = require('child_process');

// RSSフィードを更新する関数
const updateRssFeed = () => {
  console.log('RSSフィード更新処理を開始します...');

  // npm run update-rss コマンドを実行
  exec('npm run update-rss', (error, stdout, stderr) => {
    if (error) {
      console.error(`実行中のエラー: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
};

// 毎日午前9時にタスクを実行
schedule.scheduleJob('0 9 * * *', updateRssFeed);

console.log('RSSフィード自動更新スケジューラを起動しました。');
