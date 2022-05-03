function myFunction04_09_01() {
  Browser.msgBox('Hello');
}

function myFunction04_09_02() {
  try {
    Browser.msgBox('Hello');
  } catch(e) {
    console.log('例外が発生しました: ' + e.message);
  } finally {
    console.log('スクリプトの実行完了!');
  }
}

function myFunction04_09_03() {
  const x = 0;
  if (x === 0) {
    throw new Error('xに0が代入されました');
  }   
}

function myFunction04_09_04() {
  const x = 0;
  try {
    if (x === 0) {
      throw new Error('xに0が代入されました');
    }   
  } catch(e) {
    console.log('例外が発生しました: ' + e.message);
  }
}
