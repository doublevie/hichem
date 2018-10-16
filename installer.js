var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './release-builds/regex-app-win32-ia32',
    outputDirectory: './release-builds/setup/installer64',
    authors: 'Regex App.',
    exe: 'regex-app.exe',
    description: 'regex application',
    setupExe : 'regex2-setup.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
