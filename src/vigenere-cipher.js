const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let keyIndex = 0;
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let messageCharCode = message.charCodeAt(i) - 65;
        let keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
        let encodedCharCode = (messageCharCode + keyCharCode) % 26;
        result += String.fromCharCode(encodedCharCode + 65);
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let keyIndex = 0;
    let result = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].match(/[A-Z]/)) {
        let messageCharCode = encryptedMessage.charCodeAt(i) - 65;
        let keyCharCode = key.charCodeAt(keyIndex % key.length) - 65;
        let encodedCharCode = (messageCharCode - keyCharCode + 26) % 26;
        result += String.fromCharCode(encodedCharCode + 65);
        keyIndex++;
      } else {
        result += encryptedMessage[i];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
