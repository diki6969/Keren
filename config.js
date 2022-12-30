//Ini untuk setting Bot
//Untuk gambar background menu ada - di plugins menu
//untuk lainya saran jangan di ubah bre nanti eror

//Global Owner//
global.owner = ['6285609188523']  // isi jika perlu
global.mods = ['6285609188523']   // isi jika perlu
global.prems = ['6285609188523']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = '𝐈𝐤𝐲𝐲𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥' // isi nama kalian bebas
global.numberowner = '6285609188523' // isi ini untuk mengendalikan bot
global.dana = '6285609188523' // isi dengan nomor dana yg kamu punya 
global.pulsa = '6285609188523' // isi dengan nomor pulsa hp kalian
global.gopay = '6285609188523'

//Nama Bot & Grouplink//
global.namebot = '𝙄𝙠𝙮𝙮𝘽𝙤𝙩'
global.gc = 'https://chat.whatsapp.com/Lao3HWH4lYiBzWBR38HbTX'
global.web = 'https://github.com/diki6969' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://'

//Tampilan wm Bot dan pesan bot//
global.lolkey = '9be6f70bb666a384b9ba3d6a' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'e07bf160d9a8' //ganti jadi apikey lu kalau expired
global.wm = '© 𝙄𝙠𝙮𝙮𝘽𝙤𝙩'
global.watermark = wm
global.wm2 = '⫹⫺ 𝙄𝙠𝙮𝙮𝘽𝙤𝙩'
global.wm3 = '© 𝙄𝙠𝙮𝙮𝘽𝙤𝙩'
global.wm4 = '© 𝐈𝐤𝐲𝐲𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝐢'
global.fla = 'https://api.tiodevhost.my.id/api/photooxy/harry-potter?text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\n𝙄𝙠𝙮𝙮𝘽𝙤𝙩'

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': '9be6f70bb666a384b9ba3d6a',
}

//Setting Rpg//
global.multiplier = 45 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//Jangan merubah bagian ini! //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
