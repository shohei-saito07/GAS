function myFunction10_06_01() {
  const email = '***@**********'; //メールアドレス
  
  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  
  console.log(folder.getAccess(email).toString()); //指定したユーザーの権限
  console.log(folder.getOwner().getEmail()); //オーナーのメールアドレス
  console.log(folder.getEditors().length); //編集者の数
  console.log(folder.getViewers().length); //閲覧者の数
  console.log(folder.isShareableByEditors()); //TrueまたはFalse
  
  const fileId = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileId); 

  console.log(file.getAccess(email).toString()); //指定したユーザーの権限
  console.log(file.getOwner().getEmail()); //オーナーのメールアドレス
  console.log(file.getEditors().length); //編集者の数
  console.log(file.getViewers().length); //閲覧者の数
  console.log(file.isShareableByEditors()); //TrueまたはFalse
}

function myFunction10_06_02() {
  const email = '***@**********'; //メールアドレス

  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  folder.addEditor(email);
  
  const fileId = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileId);   
  file.addCommenter(email);
}

function myFunction10_06_03() {
  const email = '***@**********'; //メールアドレス

  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);  
  folder.removeEditor(email);
  
  const fileId = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileId); 
  file.removeCommenter(email);
}

function myFunction10_06_04() { 
  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  
  console.log(folder.getSharingAccess().toString()); //共有範囲
  console.log(folder.getSharingPermission().toString()); //権限
  
  const fileId = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileId); 

  console.log(file.getSharingAccess().toString()); //共有範囲
  console.log(file.getSharingPermission().toString()); //権限
}

function myFunction10_06_05() { 
  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.VIEW);
  
  const fileId = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileId); 
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
}
