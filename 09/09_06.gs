function myFunction09_06_01() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][0];

  console.log(message.getId()); //メッセージID
  console.log(message.getDate()); //Fri Jul 24 2020 17:12:24 GMT+0900 (日本標準時)
  console.log(message.getSubject()); //サンプルメール

  console.log(message.getFrom()); //送信者
  console.log(message.getTo()); //Toアドレス
  console.log(message.getCc()); //Ccアドレス
  console.log(message.getBcc()); //Bccアドレス
  console.log(message.getReplyTo()); //ReplyToアドレス

  console.log(message.isDraft()); //false
  console.log(message.isInChats()); //false
  console.log(message.isInInbox()); //true
  console.log(message.isInTrash()); //false
  console.log(message.isStarred()); //false
  console.log(message.isUnread()); //false
}

function myFunction09_06_02() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][0];

  console.log(message.getBody());
  console.log(message.getPlainBody());
}

function myFunction09_06_03() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][0];

  let replyBody = '';
  replyBody += '全員に返信をします。\n';
  replyBody += 'ご確認ください';
  message.replyAll(replyBody);
  
  // const recipient = 'bob@example.com';
  const recipient = 'n.takahashi0505@gmail.com';
  message.forward(recipient);  
}

function myFunction09_06_04() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][2];

  message.star();
}

function myFunction09_06_05() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const messages = threads[0].getMessages();

  GmailApp.starMessages(messages);
}
