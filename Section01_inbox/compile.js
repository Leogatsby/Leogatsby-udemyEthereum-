// 다른 언어 파일을 불러오기 위한 기초 작업
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source,1).contracts[':Inbox']);

module.exports = solc.compile(source,1).contracts[':Inbox'];