//Ini untuk setting Bot
//Untuk gambar background menu ada - di plugins menu
//untuk lainya saran jangan di ubah bre nanti eror

//Global Owner//
global.owner = ['6285609188523']  // isi jika perlu
global.mods = ['6285609188523']   // isi jika perlu
global.prems = ['6285609188523']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = '๐๐ค๐ฒ๐ฒ๐๐๐๐ข๐๐ข๐๐ฅ' // isi nama kalian bebas
global.numberowner = '6285609188523' // isi ini untuk mengendalikan bot
global.dana = '6285609188523' // isi dengan nomor dana yg kamu punya 
global.pulsa = '6285609188523' // isi dengan nomor pulsa hp kalian
global.gopay = '6285609188523'

//Nama Bot & Grouplink//
global.namebot = '๐๐ ๐ฎ๐ฎ๐ฝ๐ค๐ฉ'
global.gc = 'https://chat.whatsapp.com/Lao3HWH4lYiBzWBR38HbTX'
global.web = 'https://github.com/diki6969' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://'

//Tampilan wm Bot dan pesan bot//
global.lolkey = '9be6f70bb666a384b9ba3d6a' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'e07bf160d9a8' //ganti jadi apikey lu kalau expired
global.wm = 'ยฉ ๐๐ ๐ฎ๐ฎ๐ฝ๐ค๐ฉ'
global.watermark = wm
global.wm2 = 'โซนโซบ ๐๐ ๐ฎ๐ฎ๐ฝ๐ค๐ฉ'
global.wm3 = 'ยฉ ๐๐ ๐ฎ๐ฎ๐ฝ๐ค๐ฉ'
global.wm4 = 'ยฉ ๐๐ค๐ฒ๐ฒ๐๐๐๐ข๐๐ข๐๐ฅ๐ข'
global.fla = 'https://api.tiodevhost.my.id/api/photooxy/harry-potter?text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar โ\n'
global.salah = 'Salah โ\n'
global.stiker_wait = '*โซนโซบ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\n๐๐ ๐ฎ๐ฎ๐ฝ๐ค๐ฉ'

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
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      sampah: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      kayu: '๐ชต',
      batu: '๐ชจ',
      string: '๐ธ๏ธ',
      kuda: '๐',
      kucing: '๐' ,
      anjing: '๐',
      petFood: '๐',
      gold: '๐',
      emerald: '๐'
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
