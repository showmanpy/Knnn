/*
Caso divulgue algum comando deixe os créditos, fazer ele foi desgaste. 
*
Agradeço pela compreensão. 

  *📝 NOTAS:
  * Algumas cases criada por Showman 
  * Total agradecimento e créditos a ele <3
  *
  **************************************************
  *bot levantado pelo Showman************************
  **************************************************
  *©Copyrights pelos desenhos, codigos,e script**
  *©Copyrights Showman💎**************************
  *©Copyrights Showman💙**************************
  *©Copyrights Showman🧊**************************
  *©Copyrights Showman💧**************************
  **************************************************
  **************************************************
  Knn
  
  ⚠️deixe os creditos visiveis⚠️
  
A______A
|・  ㅅ ・|
|っ   　ｃ|
|　 ❣ 　|
|　   　　|
|　   　　|
|　   　　|
|　   　　|
|　   　　|　 
|　   　　|
|　   　　|
|　   　　|　 
U￣￣￣U
criador: Showman💙
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')


//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEsmeralda,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEsmeralda, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEsmeralda = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐺','🥶','🔷️']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./banco de dados/database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./banco de dados/database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./banco de dados/database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./banco de dados/database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = doctor = async (doctor, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                    // ALGUMAS DEFINIÇÕES\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const botNumber = await doctor.decodeJid(doctor.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                    // DEFINIÇÕES DE NUMERO E NOME\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
        const V = '3.0'
	    const botzin = '556696350839 '
	    const donito = '556699717091 '
	    const pushname = m.pushName || "No Name"
	    const nome = 'ೈ፝͜͡𝚉 𝙰 𝙻 𝚃 𝚂💙'
	    const  nome2= 'ೈ፝͜͡D O C T O R💙 '
          ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        // DEFINIÇÕES DE GRUPO\\
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
        const groupMetadata = m.isGroup ? await doctor.groupMetadata(m.chat).catch(e => {}) : ''
        const groupNome = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                          // SELOS \\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
       const selo = { key: {participant: `0@s.whatsapp.net`, mentionedJid: `${doctor}`, ...(m.from ?{ remoteJid: `${m.from}` } : {}) },message: { "extendedTextMessage": {"text":`aqui está ${pushname} \n🌹D O C T O R🌹` }} }       
        const aud = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "556181496039-1613049930@g.us" } : {})},message: {"audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "999999","ptt": "true"}}}
        const gru = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "VERIFICADO","groupNome": "BOT", "caption": `BOT DOCTOR           Usuario: ${pushname} `, 'jpegThumbnail': fs.readFileSync(`./banco de dados/img/doctor0.png`)}}}   
       const vid = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": {"title": `Usuario: ${pushname}`,"h": `Usuario: ${pushname}`,'duration': '99999','caption': `Usuario: ${pushname}`,'jpegThumbnail': fs.readFileSync(`./banco de dados/img/doctor0.png`),}}}
         ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                      // DEFINIÇÕES DE EMOJI\\
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\   
       const Emoji = 'き⃟🌹 '
       const Emoji1 = 'き⃟🧡 ' //A____A
       const Emoji2 = 'き⃟💛 ' //|・ㅅ・|    ────╮
       const Emoji3 = 'き⃟💚 ' //|っ　ｃ|                    ║@desenho por Showman                ║
       const Emoji4 = 'き⃟💙 ' //|　　　|                    ║@base por Showman                       ║
       const Emoji5 = 'き⃟💜 ' //|　　　|                    ║@suporte por Showman                  ║
       const Emoji6 = 'き⃟🖤 ' //|　　　|                    ╰─────────────╯
       const Emoji7 = 'き⃟❄ ' //|　　　|
       const Emoji8 = 'き⃟🦊 ' //|　　　|
       const Emoji9 = 'き⃟🐺 ' //U￣￣U
       const Emoji10 = 'き⃟🌼 '
       const Emoji11 = 'き⃟💮 '
       const Emoji12 = 'き⃟🧊 '
       const Emoji13 = 'き⃟🌐 '
       const Emoji14 = 'き⃟❄ '
       const Emoji15 = 'き⃟💧 '
       const Emoji16 = 'き⃟🔥 '
       const Emoji17 = 'き⃟🌀 '
       const Emoji18 = 'き⃟✨' 
       const Emoji19 = 'き⃟🧿 '
       const Emoji20 = 'き⃟🔮 '
       const Emoji21 = 'き⃟💎 '
       const Emoji22 = 'き⃟🎵 '
       const Emoji23 = 'き⃟🪙 '
       const Emoji24 = 'き⃟🎶 '
       const Emoji25 = 'き⃟🔔 '
       const Emoji26 = 'き⃟🔕 '
       const Emoji27 = 'き⃟🔊 '
       const Emoji28 = 'き⃟🔇 '
       const Emoji29 = 'き⃟🔈 '
       const Emoji30 = 'き⃟ℹ '
       const Emoji31 = 'き⃟🔵 '
       const Emoji32 = 'き⃟💠 '
       const Emoji33 = 'き⃟🔷️ '
       const Emoji34 = 'き⃟🔺️ '
       const Emoji35 = 'き⃟❗ '
       const Emoji36 = 'き⃟☑ '
       const Emoji37 = 'き⃟✅ '
       const Emoji38 = 'き⃟👁 '
       const Emoji39 = 'き⃟🫂 '
       const Emoji40 = 'き⃟🐦 '
       const Emoji41 = 'き⃟🍁 '
       const Emoji42 = 'き⃟🌝 '
       const Emoji43= 'き⃟🌚 '
       const Emoji44 = 'き⃟⚡ '
       const Emoji45 = 'き⃟♥️ '
       const Emoji46 = 'き⃟🎱 '
       const Emoji47 = 'き⃟🎭 '
       const Emoji48 = 'き⃟💴 '
       const Emoji49 = 'き⃟💵 '
       const Emoji50 = 'き⃟💰 '
       const Emoji51 = 'き⃟🏮 '
       const Emoji52 = 'き⃟💡 '
       const Emoji53 = 'き⃟🉐️ '
       const Emoji54 = 'き⃟🈹️ '
       const Emoji55 = 'き⃟🈚️ '
       const Emoji56 = 'き⃟🈲️ '
       const Emoji57 = 'き⃟🉑️ '
       const Emoji58 = 'き⃟🈸️ '
       const Emoji59 = 'き⃟🈴️ '
       const Emoji60 = 'き⃟🈳️ '
       const Emoji61 = 'き⃟㊗️ '
       const Emoji62 = 'き⃟㊙️'
       const Emoji63 = 'き⃟🈺️ '
       const Emoji64 = 'き⃟🈵️ '
       const Emoji65 = 'き⃟🟠 '
       const Emoji66 = 'き⃟🟡 '
       const Emoji67 = 'き⃟🟢 '
       const Emoji68 = 'き⃟🔵 '
       const Emoji69 = 'き⃟🟣 '
       const Emoji70 = 'き⃟🟤 '
       const Emoji71 = 'き⃟⚪ '
       const Emoji72 = 'き⃟⚫ '
       const Emoji73 = 'き⃟🟥 '
       const Emoji74 = 'き⃟🟧 '
       const Emoji75 = 'き⃟🟨 '
       const Emoji76 = 'き⃟🟩'
       const Emoji77 = 'き⃟🟦 '
       const Emoji78 = 'き⃟🟪'
       const Emoji79 = 'き⃟🟫 '
       const Emoji80 = 'き⃟⬛ '
       const Emoji81 = 'き⃟⬜ '
       const Emoji82 = 'き⃟◼ '
       const Emoji83 = 'き⃟◻ '
       const Emoji84 = 'き⃟◾'
       const Emoji85 = 'き⃟◽'
       const Emoji86 = 'き⃟▪️ '
       const Emoji87 = 'き⃟▫️ '
       const Emoji88 = 'き⃟🔶️ '
       const Emoji89 = 'き⃟🔷️ '
       const Emoji90 = 'き⃟🔸️ '
       const Emoji91 = 'き⃟🔹️ '
       const Emoji92 = 'き⃟🔘 '
       const Emoji93 = 'き⃟🦄 '
       const Emoji94 = 'き⃟🥶 '
       const Emoji95 = 'き⃟🤖 '
       const Emoji96 = 'き⃟👾 '
       const Emoji97 = 'き⃟☠ '
       const Emoji98 = 'き⃟❣ '
       const Emoji99 = 'き⃟💭 '
       const Emoji100 = 'き⃟💟 '
///▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\               
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.ERRO(err)
        }
	
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        // SELO TOCAVEL\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const reply = (teks) => {
            doctor.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"Título": ` NÃO ME TOQUE✋`,"body": ` DOCTOR BOT CENTRAL`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./banco de dados/img/doctor0.png`),"sourceUrl": "https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE"}}}, { quoted: selo})
        }     
        const replay = (teks) => {
            doctor.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"Título": ` TOCA AQUI NÃO❗`,"body": ` DOCTOR BOT CENTRAL`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./banco de dados/img/doctor0.png`),"sourceUrl": "https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE"}}}, { quoted: selo})
        }
	
        if (!doctor.public) {
            if (!m.key.fromMe) return
        }
 ///▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\        
/// ╔═══════════════╗*
//  ║desing do termux ⚠️não mecha⚠️
/// ╚═══════════════╝*
         var _0x3b257d=_0x3baf;(function(_0x285a45,_0x4efcf4){var _0x5d8717=_0x3baf,_0xd79f17=_0x285a45();while(!![]){try{var _0x2a10d9=parseInt(_0x5d8717(0x13b))/0x1+parseInt(_0x5d8717(0x136))/0x2+parseInt(_0x5d8717(0x141))/0x3*(-parseInt(_0x5d8717(0x145))/0x4)+-parseInt(_0x5d8717(0x135))/0x5*(-parseInt(_0x5d8717(0x13d))/0x6)+parseInt(_0x5d8717(0x13a))/0x7*(parseInt(_0x5d8717(0x144))/0x8)+parseInt(_0x5d8717(0x131))/0x9+parseInt(_0x5d8717(0x143))/0xa*(-parseInt(_0x5d8717(0x130))/0xb);if(_0x2a10d9===_0x4efcf4)break;else _0xd79f17['push'](_0xd79f17['shift']());}catch(_0x5342ce){_0xd79f17['push'](_0xd79f17['shift']());}}}(_0x3fc6,0x8c71d));function _0x3baf(_0x4aff9,_0x412bd2){var _0x3fc60d=_0x3fc6();return _0x3baf=function(_0x3baf13,_0x2de26a){_0x3baf13=_0x3baf13-0x130;var _0x19fe1f=_0x3fc60d[_0x3baf13];return _0x19fe1f;},_0x3baf(_0x4aff9,_0x412bd2);}function _0x3fc6(){var _0x340a80=['228ANrzZD','key','sender','┃msg\x20do\x20amigo:','843lvZRCz','bgWhite','10eKmnCj','8KmibfT','13252DdauRh','black','┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━','12626229xTsDeq','4599585nQFoNz','[\x20DOCTOR\x20BOT]','log','red','43075NDXEyE','2172868ndMmQx','mtype','┃mensagem','cyan','3215884rmXlaK','269772SpLFzY','sendReadReceipt'];_0x3fc6=function(){return _0x340a80;};return _0x3fc6();}m['message']&&(doctor[_0x3b257d(0x13c)](m['chat'],m[_0x3b257d(0x13f)],[m[_0x3b257d(0x13e)]['id']]),console[_0x3b257d(0x133)](chalk[_0x3b257d(0x146)](chalk[_0x3b257d(0x142)](_0x3b257d(0x132)))+'\x0a'+chalk['red'](_0x3b257d(0x138)),chalk[_0x3b257d(0x139)](budy||m[_0x3b257d(0x137)])+'\x0a'+chalk[_0x3b257d(0x134)](_0x3b257d(0x140)),chalk[_0x3b257d(0x139)](pushname),'\x0a'+chalk[_0x3b257d(0x134)]('┃o\x20usuario\x20usou\x20o\x20comando\x20em:'),chalk[_0x3b257d(0x139)](m['isGroup']?pushname:'chat\x20privado'+'\x0a'+chalk['red'](_0x3b257d(0x147)))));
	
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                    // RESET FUSO HORARIO\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(totachat)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limite redefinido')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                              // ANTILINK\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nVocê foi detectado enviando um link de grupo, desculpe, você será expulso`)
        if (!isBotAdmins) return reply(`Eu não sou um administrador, como eu poderia chutar alguém que envia link `)
        let gclink = (`https://chat.whatsapp.com/`+await doctor.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`O grupo está ativo com o Anti-Link, mas não vou te chutar 🙂, porque você enviou este link do grupo  ⃟💙`)
        if (isAdmins) return reply(`O grupo está instalado com o Anti-Link, mas não vou te expulsar 😉, porque você é um administrador do grupo  ⃟💙`)
        if (isCreator) return reply(`Grupo é instalado com anti-link mas não vou te chutar 😉, porque você é meu dono`)
        doctor.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
///▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\
        
//             ╭───────╮
//                 IF DE STICKER🎆
//             ╰───────╯

        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./banco de dados/sticker/${anji}.webp`)
					doctor.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
					
//             ╭───────╮
//                 IF DE AUDIO🎶
//             ╰───────╯

			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./banco de dados/vn/${anju}.mp3`)
					doctor.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}

//             ╭───────╮
//                 IF DE IMG📷
//             ╰───────╯

			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./banco de dados/image/${anjh}.jpg`)
					doctor.sendMessage(m.chat, { image: result }, { quoted: m })
					}
					
//             ╭───────╮
//                 IF DE VIDEO📽
//             ╰───────╯
					
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./banco de dados/vid/${anjh}.mp4`)
					doctor.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }
///▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        

		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: doctor.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, doctor.user.id)
        messages.key.id = m.key.id
        messages.pushname = m.pushname
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'acrescentar'
        }
        doctor.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Responda as seguintes questões :\n${room.soal}\n\n\nHá${room.jawaban.length} Responda ${room.jawaban.find(v => v.includes(' ')) ? `(Algumas Respostas Têm Espaços)` : ''}
${isWin ? `Todas as respostas respondidas` : isSurender ? 'render❗' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Jogador Perfeitor`}`.trim()
            doctor.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await doctor.sendButtonText(m.chat, [{ buttonId: 'música de adivinhação', buttonText: { displayText: 'Adivinhe a musica❗' }, type: 1 }], `🎮 Adivinhe a música 🎮\n\nRespostar correta✅\n\nQuer Jogar Novamente❓Pressione o botão abaixo`, doctor.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Teste de matemática🎮\n\nResposta correta✅\n\nQuer Jogar Novamente❓ Manda: ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await doctor.sendButtonText(m.chat, [{ buttonId: 'adivinha imagem', buttonText: { displayText: 'Adivinhe a imagem❗' }, type: 1 }], `🎮 Adivinhe a imagem❗ 🎮\n\nRespostar correta✅\n\nQuer Jogar Novamente❓ Pressione o botão abaixo`, doctor.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await doctor.sendButtonText(m.chat, [{ buttonId: 'adivinha palavra', buttonText: { displayText: 'Adivinhe a palavra❗' }, type: 1 }], `🎮 Guess The Word 🎮\n\nRespostar correta✅\n\nQuer Jogar Novamente❓ Pressione o botão abaixo`, doctor.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await doctor.sendButtonText(m.chat, [{ buttonId: 'acho em branco', buttonText: { displayText: 'Adivinhe o vazio❗' }, type: 1 }], `🎮 Adivinhe o vazio 🎮\n\nRespostar correta✅\n*${deskripsi}*\n\nQuer Jogar Novamente❓ Pressione o botão abaixo`, doctor.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await doctor.sendButtonText(m.chat, [{ buttonId: 'frase de adivinhação', buttonText: { displayText: 'Adivinhe a frase❗' }, type: 1 }], `🎮 Adivinhe a frase🎮\n\nRespostar correta✅\n\nQuer Jogar Novamente❓ Pressione o botão abaixo`, doctor.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await doctor.sendButtonText(m.chat, [{ buttonId: 'adivinhar letras', buttonText: { displayText: 'Adivinhe a letra❗' }, type: 1 }], `🎮 Adivinhe a letra 🎮\n\nRespostar correta✅\n\nQuer Jogar Novamente❓ Pressione o botão abaixo`, doctor.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await doctor.sendButtonText(m.chat, [{ buttonId: 'adivinhar enigma', buttonText: { displayText: 'Adivinhe o enigma❗' }, type: 1 }], `🎮 Adivinhe o enigma 🎮\n\nRespostar correta✅\n\nQuer Jogar Novamente❓ Pressione o botão abaixo`, doctor.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*❌Resposta errada❌*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	  
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'O jogo terminou😥',
	    '-2': 'Inválido❌',
	    '-1': 'Posição inválida❌',
	    0: 'Posição inválida❌',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Ganhou` : isTie? `Fim de jogo` : `Turno ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* render-se e admitir a derrota`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await doctor.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await doctor.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|Sim|okay?|reject|no|later|nope(k.)?Sim|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?Sim)/i.test(m.text)) {
	    doctor.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Recuse Suit, Suit Cancelado❌`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    doctor.sendText(m.chat, `O terno foi enviado para conversar

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Por favor, escolha um terno no respectivo bate-papo"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) doctor.sendText(roof.p, `Por favor selecione❗ \n\Rock🗿\nPaper📄\nTesoura✂️`, m)
	    if (!roof.pilih2) doctor.sendText(roof.p2, `Por favor selecione❗ \n\nRock🗿\nPaper??\nTesoura✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) doctor.sendText(m.chat, `Ambos os jogadores não querem jogar,\nProcesso cancelado❄`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    doctor.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Não Escolhi Terno, Fim de Jogo❗`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Você escolheu ${m.text} ${!roof.pilih2 ? `\n\nEsperando o oponente escolher` : ''}`)
	    if (!roof.pilih2) doctor.sendText(roof.p2, '_O oponente escolheu_\nAgora é a sua vez', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Você escolheu  ${m.text} ${!roof.pilih ? `\n\nEsperando o oponente escolher` : ''}`)
	    if (!roof.pilih) doctor.sendText(roof.p, '_O oponente escolheu_\nAgora é a sua vez', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    doctor.sendText(roof.asal, `_*Resultados*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Vencer \n` : ` Perder \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Vencer \n` : ` Perder \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Não o marque❗
Ele está em AFK/Offline ${reason ? 'com razão ' + reason : 'sem razão'}
Tem sido ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
Você voltou online do AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
        case 'inventori': case 'inventario':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var doctor = await getBuffer(picak+`Inventário do usuário`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO DO USUARIO👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*  ⃟  ⃟💙Seu sangue* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*  ⃟⛓Seu Ferro* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*  ⃟🥇Seu Ouro* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*  ⃟💍Sua Esmeralda* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*  ⃟⏺️Seu Limite* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*  ⃟🧪Sua poção* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_❪  ⃟🐄RESULTADO DA CAÇA  ⃟🐔❫_\n`
     teksehmazeh += `*  ⃟🐟Peixe* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*  ⃟🐔Galinha* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*  ⃟🐇Coelho* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*  ⃟🐑Ovelha* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*  ⃟🐄Vaca* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*  ⃟🐘Elefante* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += ` *${pushname}* `
     await doctor.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, doctor, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}}])
  }
  break
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「OS MELHORES」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*  ⃟🐟Peixexe* : ${i.ikan}\n`
     txt += `*🐔Galinha* : ${i.ayam}\n`
     txt += `*  ⃟🐇Coelho* : ${i.kelinci}\n`
     txt += `*  ⃟🐑Ovelha* : ${i.domba}\n`
     txt += `*  ⃟🐄Vaca* : ${i.sapi}\n`
     txt += `*  ⃟🐘Elefante* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`Você está cansado❗, tente curar usando poções`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let Esmeralda = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var Esmeraldanya = Esmeralda[Math.floor(Math.random() * Esmeralda.length)]  
  setTimeout( () => {
  let caption = `[ RESULTADO DA MINERAÇÃO ]\n*Ferro* : ${besinya}\n*Ouro* : ${emasnya}\n*Esmeralda* : ${Esmeraldanya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mina de novo⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     doctor.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEsmeralda(m.sender, Esmeraldanya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`O que você quer comprar❓\n\n1.potion\n2.baitfood\n3.limit\n\nExemplo: ${prefix + command} isca`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Exemplo : ${prefix + command} potion 2\n 1 Potion = 100000 Dinheiro`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transação bem-sucedida ✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Sua poção* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Exemplo : ${prefix + command} baitfood 2\n 1 Comida de isca = 2500 Dinheiro`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transação bem-sucedida ✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Sua comida de isca* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Exemplo : ${prefix + command} limit 2\n 1 Limite = 35000 Dinheiro`)
 if (isMonay < noh) return reply('Seu dinheiro restante não é suficiente para esta compra')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transação bem-sucedida ✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Formato incorreto❗") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  reply(`O que você quer vender❓❓\nExemplo : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Você não tem peixe suficiente Para esta transação`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} fish 2\n 1 Peixe = 1500 Dinheiro`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} chicken 2\n 1 Chicken = 2500 Dinheiro`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Dinheiro`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} domba 2\n 1 Sheep = 5000 Dinheiro`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} cow 2\n 1 Cow = 10000 Dinheiro`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} elephant 2\n 1 Elephant = 15000 Dinheiro`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} iron 2\n 1 Iron = 15000 Dinheiro`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Seu(s) ferro(s) restante(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'Ouro'){
 if (isEmas < anu) return reply(`Você não tem ouro(s) suficiente(s) para esta transação`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} Ouro 2\n 1 Ouro = 50000 Dinheiro`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro * : ${getMonay(m.sender)}\n*Seu(s) ouro(s) restante(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'Esmeralda'){
 if (isEsmeralda < anu) return reply(`Você não tem esmeraldas suficientes para esta transação`)
 if (!args[1]) return reply(`Exemplo : ${prefix + command} Esmeralda 2\n 1 Esmeralda = 100000 Dinheiro`)
 kurangEsmeralda(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transação bem-sucedida✔️\n*Seu dinheiro restante* : ${getMonay(m.sender)}\n*Você não tem esmeraldas suficientes para esta transação* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Formato incorreto❗") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('Você só pode curar quando seu sangue é 0')
 if (isCekDarah > 100) return reply('Seu sangue está cheio❗')
 if (isPotion < 1) return reply(`Você não tem uma poção, tente comprá-la desta maneira #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Sucesso❗ Seu corpo está cheio')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Seu sangue se foi, tente curar usando poções') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazonia.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/africa.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Peixe* : ${ikanmu}\n`
     teksehmazeh += `*🐔Galinha* : ${ayam}\n`
     teksehmazeh += `*🐇Coelho* : ${kelinci}\n`
     teksehmazeh += `*🐑Ovelha* : ${domba}\n`
     teksehmazeh += `*🐄Vaca* : ${sapi}\n`
     teksehmazeh += `*🐘Elefante* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Local* : ${lokasinya}\n`
     teksehmazeh += `*Ferida* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Renascimentos* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     doctor.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Começou a caçar ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushname} Ficou Afk/Off-line${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.Nome === text : true))
            if (room) {
            reply('Parceiro encontrado❗')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await doctor.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await doctor.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.Nome = text
            reply('Esperando o parceiro' + (text ? ` Digite o comando abaixo ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            doctor.sendText(m.chat, `A Sessão TicTacToe foi excluída com sucesso`, m)
            } else if (!this.game) {
            reply(`Sessão TicTacToe🎮 Não Existe`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete seu terno anterior`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Não posso jogar comigo mesmo❗`)
            if (!m.mentionedJid[0]) return reply(`_Quem você quer desafiar❓_\nMarque a pessoa..\n\nExemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`A pessoa que você está desafiando está jogando terno com outra pessoa :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} Para jogar terno

Favor @${m.mentionedJid[0].split`@`[0]} Para Digitar Aceitar/Rejeitar`
            this.suit[id] = {
            chat: await doctor.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) doctor.sendText(m.chat, `_Tempo limite do traje_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mudo') {
                    doctor.chatModify({ mute: 'Infinidade' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'ativar o som') {
                    doctor.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'arquivar') {
                    doctor.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'desarquivar') {
                    doctor.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'ler') {
                    doctor.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'Não lida') {
                    doctor.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    doctor.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('Ainda há sessões inacabadas!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Responda as seguintes questões :*\n${random.soal}\n\nHá*${random.jawaban.length}* Responda ${random.jawaban.find(v => v.includes(' ')) ? `(Algumas Respostas Têm Espaços)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await doctor.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Enviar/responder texto com legenda ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
                if (!text) return replay(`Exemplo : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`Ainda há sessões inacabadas`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await doctor.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    doctor.sendText(m.chat, `Qual é o nome desta música❓?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responda: " + result.jawaban)
                    doctor.sendButtonText(m.chat, [{ buttonId: 'música de adivinhação', buttonText: { displayText: 'Adivinhe a musica❗' }, type: 1 }], `O tempo acabou\nResponda:  ${tebaklagu[m.sender.split('@')[0]]}\n\nQuero jogar❓ Pressione o botão abaixo`, doctor.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`Ainda há sessões inacabadas❗`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    doctor.sendImage(m.chat, result.img, `Por favor, responda as perguntas acima❗\n\nDescrição : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responda: " + result.jawaban)
                    doctor.sendButtonText(m.chat, [{ buttonId: 'adivinha imagem', buttonText: { displayText: 'Adivinhe a imagem❗' }, type: 1 }], `O tempo acabou\nResponda:  ${tebakgambar[m.sender.split('@')[0]]}\n\nQuero jogar❓ Pressione o botão abaixo`, doctor.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`Ainda há sessões inacabadas!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/DGZalts/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    doctor.sendText(m.chat, `Por favor responda a seguinte pergunta\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responda: " + result.jawaban)
                    doctor.sendButtonText(m.chat, [{ buttonId: 'adivinha palavra', buttonText: { displayText: 'Adivinhe a palavra❗' }, type: 1 }], `Tempo limite\nResponder:  ${tebakkata[m.sender.split('@')[0]]}\n\nQuero jogar❓ Pressione o botão abaixo`, doctor.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`Ainda há sessões inacabadas!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/DGZalts/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    doctor.sendText(m.chat, `Por favor responda a seguinte pergunta\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responda: " + result.jawaban)
                    doctor.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Adivinhe a frase❗' }, type: 1 }], `Tempo limite\nResponder:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nQuero jogar❓ Pressione o botão abaixo`, doctor.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`Ainda há sessões inacabadas!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    doctor.sendText(m.chat, `Estas são as letras de qual música❓? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responda: " + result.jawaban)
                    doctor.sendButtonText(m.chat, [{ buttonId: 'adivinhar letras', buttonText: { displayText: 'Adivinhe a letra❗' }, type: 1 }], `Tempo limite\nResponder: ${tebaklirik[m.sender.split('@')[0]]}\n\Quero jogar❓ Pressione o botão abaixo`, doctor.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`Ainda há sessões inacabadas!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    doctor.sendText(m.chat, `*Responda as seguintes questões :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responda: " + result.jawaban)
                    doctor.sendButtonText(m.chat, [{ buttonId: 'acho em branco', buttonText: { displayText: 'Adivinhe o vazio❗' }, type: 1 }], `Tempo limite\nResponder:  ${caklontong[m.sender.split('@')[0]]}\nDescrição : ${caklontong_desk[m.sender.split('@')[0]]}\n\Quero jogar❓ Pressione o botão abaixo`, doctor.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`Ainda há sessões inacabadas!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nPor Exemplos: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                doctor.sendText(m.chat, `*Qual é o resultado de: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responda: " + result.jawaban)
                    reply("Time Out\nResponda: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Sua combinação é

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, jawab, doctor.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, o que está acontecendo❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, jawab, doctor.user.name, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Seu texto, Exemplo : ${prefix + command} ele casou `)
					const apa = [`Sim`, `Não`, `Poderia ser`, `Isso mesmo`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
doctor.sendMessage(from, { text: `Questão : É ${q}\nResponda : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Seu texto, Exemplo : ${prefix + command} he married `)
					const lel = [`Pergunte ao seu namorado`, `Eu não sei`, `Não sei, pergunte ao seu pai`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
doctor.sendMessage(from, { text: `Questão : Que ${q}\nResponda : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Seu Texto, Exemplo : ${prefix + command} you fuck her lol `)
					const bisa = [`Posso`,`Não pode`,`Não podes`,`Claro que você pode!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
doctor.sendMessage(from, { text: `Questão : Can ${q}\nResponda : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Seu Texto, Exemplo : ${prefix + command} is my face`)
					const gimana = [`Está tudo bem`, `É difícil, mano`, `Desculpe, o bot não pode Responda`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
doctor.sendMessage(from, { text: `Questão : ${q}\nResponda : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Seu texto, Exemplo : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
doctor.sendMessage(from, { text: `Reto : ${q}\nResponda : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Marque alguém,, Exemplo : ${prefix + command} @Showman`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
doctor.sendMessage(from, { text: `*${command}*\n\nNome : ${q}\nResponda : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Marque alguém,, Exemplo : ${prefix + command} @Showman`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
doctor.sendMessage(from, { text: `*${command}*\n\nNome : ${q}\nResponda : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return replay(`Marque Alguem, Exemplo : ${prefix + command} @Showman`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
doctor.sendMessage(from, { text: `*${command}*\n\nNome : ${q}\nResponda : *${sange}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replay(`Marque Alguem, Exemplo : ${prefix + command} @Showman`)
					const Zaltsy =['Compassivo','Generoso','Rabugento','Perdoar','Obediente','Bom','Simpático','Bom','paciente','UwU','top, de qualquer maneira','Ajudante']
					const taky = Zaltsy[Math.floor(Math.random() * Zaltsy.length)]
					doctor.sendMessage(from, { text: `Verificação de Personagem : ${q}\nResponda : *${taky}*` }, { quoted: m })
				     break
                    case 'stupid':
                      case 'foolish':
                        case 'smart':
                          case 'idiot':
                            case 'gay':
                               case 'lesbi':
                                 case 'bastard':
                                    case 'stubble':
                                        case 'dog':
                                           case 'fuck':
                                                case 'ape':
                                                     case 'noob':
                                                     case 'great':
                                                  case 'horny':
                                              case 'wibu':
                                           case 'asshole':
                                       case 'handsome':
                                   case 'beautiful':
                               case 'cute':
                          case 'kind':
                      case 'ugly':
                 case 'pretty':
           case 'lesbian':
          case 'randi':
             case 'gandu':
                case 'madarchod':
                    case 'kala':
                       case 'gora':
                         case 'chutiya':
                            case 'nibba':
                               case 'nibbi':
                                  case 'bhosdiwala':
                                     case 'chutmarika':
                                         case 'bokachoda':
                                             case 'suarerbaccha':
                                                  case 'bolochoda':
                                                     case 'muthal':
                                                        case 'muthbaaz':
                                                         case 'randibaaz':
                                                       case 'topibaaz':
                                                    case 'cunt':
                                               case 'nerd':
                                          case 'behenchod':
                                     case 'behnchoda':
                                case 'bhosdika':
                            case 'bc':
                       case 'nerd':
                   case 'mc':
            case 'bsdk':
       case 'bhosdk':
      case 'nigger':
        case 'loda':
          case 'laund':
          case 'nigga':
        case 'sexy':
      case 'hot': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `A maioria *${command}* aqui está @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, jawab, doctor.user.name, m, {mentions: ments})
            }
            break
case 'when':
				if (!text) return replay(`Use Txt, Exemplo : ${prefix + command} will i get married `)
					const kapan = ['Mais 5 dias', 'Mais 10 dias', 'Mais 15 dias','Mais 20 dias', 'Mais 25 dias','Mais 30 dias','Mais 35 dias','Mais 40 dias','45 Mais Dias','Mais 50 Dias','Mais 55 Dias','Mais 60 Dias','65 Mais Dias','Mais 70 Dias','75 Mais Dias','Mais 80 Dias','85 Mais Dias' ,'Mais 90 Dias','Mais 100 Dias','Mais 5 Meses', 'Mais 10 Meses', 'Mais 15 Meses','Mais 20 Meses', 'Mais 25 Meses','Mais 30 Meses',' 35 Meses Mais','40 Meses Mais','45 Meses Mais','50 Meses Mais','55 Meses Mais','60 Meses Mais','65 Meses Mais','70 Meses Mais','75 Meses Mais','Mais 80 Meses','Mais 85 Meses','Mais 90 Meses','Mais 100 Meses','Mais 1 Ano','Mais 2 Anos','Mais 3 Anos','Mais 4 Anos' ,'Mais 5 anos','Amanhã','O dia depois de amanhã',`Depois deste comando, você também ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
doctor.sendMessage(from, { text: `Questão : ${q}\nResponda : *${kapankah}*` }, { quoted: m })
					break

case 'checkdeath':
             if (!text) return replay(`Use o nome de alguém, Exemplo : ${prefix + command} Showman`)
              predea = await axios.get(`https://api.agify.io/?Nome=${q}`)
              reply(`Nome : ${predea.data.Nome}\n*Morto na idade :* ${predea.data.age} Ano.\n\n_Rápido, Rápido, Arrependa-se Mano, Porque Ninguém Sabe Sobre a Morte_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Enviar/responder texto com legenda ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'reactxxx': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                doctor.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Entre no Link do Grupo❗`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Link invalido❗`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await doctor.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await doctor.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Exemplo : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif foi alterado com sucesso para\n\n  ⃟💙 Nome : ${global.packname}\n  ⃟💙 Autor : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await doctor.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setNome': case 'setgcNome': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Onde está o texto❓`)
                await doctor.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Onde está o texto❓`)
                await doctor.groupUpdateDescrição(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                await doctor.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                await doctor.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•  ⃟💙 Tag All   ⃟💙•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += ` @${mem.id.split('@')[0]}\n`
                }
                doctor.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            doctor.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Digite o texto da consulta❗`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `  ⃟💙 *${i.Nome}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_Ainda há votos neste bate-papo❗_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Digite o motivo da votação, Exemplo: *${prefix + command} Handsome Owner*`)
            reply(`A votação começa!\n\n*${prefix}upvote* - Para Upvote\n*${prefix}devote* - Para Devote\n*${prefix}checkvote* - Para verificar a votação\n*${prefix} delvote* - Para Excluir Sessão de Votação`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
║ voto positivo
║
║
║╠Total: ${vote[m.chat][1].length}
║
║ 
└────

╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
║ voto contra
║
║
║╠Total: ${vote[m.chat][2].length}
║
║ 
└────

*${prefix}delvote* - Para excluir a sessão de votação`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: doctor.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            doctor.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*Não votar neste grupo❗*_\n\n*${prefix}vote* - Para começar a votar`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`Você votou`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Razão:* ${vote[m.chat][0]}

╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
║ voto positivo
║
║
║╠Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `║╠${i + 1}. @${v.split`@`[0]}`).join('\n')}
║ 
└────

╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
║ voto contra
║
║
║╠Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `║╠${i + 1}. @${v.split`@`[0]}`).join('\n')}
║ 
└────

*${prefix}delvote* - Para excluir a sessão de votação`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: doctor.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            doctor.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
               
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*Não votar neste grupo❗*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Razão:* ${vote[m.chat][0]}
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
║ Apoiar
║
║
║╠Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `║╠${i + 1}. @${v.split`@`[0]}`).join('\n')}
║ 
╰═─═─═─═─═
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
║DEDICAR
║
║
║╠Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `║╠${i + 1}. @${v.split`@`[0]}`).join('\n')}
║ 
╰═─═─═─═─═

*${prefix}delvote* - Para excluir a sessão de votação


`
doctor.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*Não volte neste grupo❗*_\n\n*${prefix}vote* - Para começar a votar`)
            delete vote[m.chat]
            reply('Excluída com sucesso a sessão de votação neste grupo')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await doctor.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Fechando o Grupo com Sucesso✅`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await doctor.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Abertura bem sucedida do grupo✅`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `Group Mode`, doctor.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await doctor.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Informações do grupo de edição abertas com sucesso`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await doctor.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Fechado com sucesso Editar informações do grupo`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: '🔓ABRIR🔓' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: '🔒FECHAR🔒' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `escolha a baixo oq vc quer fazer❗\nA____A\n|・ㅅ・|\n|っ　ｃ|\n|　　　|\n|　　　|\n|　　　|\n|　　　|\n|　　　|\nU￣￣U \n `, doctor.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "彡ATIVO彡") {
                if (db.data.chats[m.chat].antilink) return reply(`ATIVADO COM SUCESSO`)
                db.data.chats[m.chat].antilink = true
                reply(`ANTILINK ATIVO COM SUCESSO✅`)
                } else if (args[0] === "彡DESATIVO彡") {
                if (!db.data.chats[m.chat].antilink) return reply(`DESATIVADO COM SUCESSO`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink inativo`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: '彡ATIVO彡' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: '彡DESATIVO彡' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `COMANDO ANTILINK \nA____A\n|・ㅅ・|\n|っ　ｃ|\n|　　　|\n|　　　|\n|　　　|\n|　　　|\n|　　　|\nU￣￣U `, doctor.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Anteriormente ativo`)
                db.data.chats[m.chat].mute = true
                reply(`${doctor.user.name} Foi silenciado neste grupo❗`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Anteriormente inativo`)
                db.data.chats[m.chat].mute = false
                reply(`${doctor.user.name} O som foi ativado neste grupo❗`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `Mute Bot`, doctor.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await doctor.groupInviteCode(m.chat)
                doctor.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Insira os valores de ativação/desativação`)
                if (args[0] === 'enable') {
                    await doctor.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await doctor.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`A mensagem não foi enviada por mim❗`)
                doctor.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Onde está o texto❓\n\nExemplo : ${prefix + command} `)
                let getGroups = await doctor.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Transmissão enviada para ${anu.length} Bate-papo em grupo, hora de término ${anu.length * 1.5} Segundos`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 TRANSMISSÃO DE MY DONO」\n\n${text}`
                      doctor.send5ButImg(i, txt, doctor.user.name, global.thumb, btn)
                    }
                reply(`Envio bem-sucedido de transmissão para ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Onde está o texto❓\n\nExemplo : ${prefix + command} `)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Enviar transmissão para ${anu.length} Bate-papo\nTempo de término ${anu.length * 1.5} Segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      let txt = `TRANSMISSÃO \n\n${text}`
                      doctor.send5ButImg(yoi, txt, doctor.user.name, global.thumb, btn)
		}
		reply('Sucesso de transmissão')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`marque a msg`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`A mensagem não foi enviada por mim❗`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                doctor.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('MARQUE A MSG❗!')
		let wokwol = await doctor.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('A mensagem que você respondeu não contém uma resposta')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushname
                     teks += `*Nome :* ${nama}\n *User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 doctor.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await doctor.groupMetadata(i)
                     teks += ` *Nome :* ${metadata.subject}\n *Dono :* @${metadata.owner.split('@')[0]}\n*ID :* ${metadata.id}\n*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n *Membro:* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 doctor.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonlinexxx': case 'onlinelistxxx': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    doctor.sendText(m.chat, 'Online List:\n\n' + online.map(v => '  ⃟💙 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
 ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                    //COMANDO DE STICKER\\EU TIREI PQ ESTAVA DANDO ERRO
       ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
            /*  case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await doctor.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await doctor.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break */
case 'smemex': case 'stickermemex': case 'stickmemex': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Enviar/responder foto com legenda ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Enviar/responder foto com legenda ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Enviar/responder foto com legenda ${prefix + command} *Text*`)
reply(mess.wait)
mee = await doctor.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await doctor.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Responder texto com legendan ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Responder texto com legenda ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return replay(`Exemplo : ${prefix + command} 😡+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await doctor.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) return reply(`Marque a figurinha`)
                if (!/webp/.test(mime)) reply(`Responder adesivo com legenda *${prefix + command}*`)
                reply(mess.wait)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    doctor.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) reply(`Marque o video`)
                if (!/webp/.test(mime)) return replay(`Responder adesivo com legenda *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await doctor.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Enviar/responder vídeo/áudio que você deseja usar como áudio com legenda ${prefix + command}`)
            if (!quoted) return reply(`Enviar/responder vídeo/áudio que você deseja converter em áudio com legenda ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            doctor.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
            if (!quoted) return replay(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            doctor.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', filename: `Convertido por ${doctor.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Responda ao vídeo/áudio que você deseja ser VN com o Captio${prefix + command}`)
            if (!quoted) return reply(`Responda ao vídeo/áudio que você deseja ser VN com o Captio ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            doctor.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return reply(`Marque a figurinha`)
                if (!/webp/.test(mime)) return reply(`Responder adesivo com legenda *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await doctor.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Covertido de um webp' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './banco de dados/remobg-'+getRandom('')
	    localFile = await doctor.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './banco de dados/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    doctor.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) return replay(`Exemplo : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` Não : ${no++}\n Modelo : ${i.type}\n Video ID : ${i.videoId}\n Título : ${i.Título}\n Views : ${i.views}\n Duração : ${i.timestamp}\n Carregado em : ${i.ago}\n Autor : ${i.author.Nome}\n Url : ${i.url}\n\n─────────────────\n\n`
                }
                doctor.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) return reply(`Exemplo : ${prefix + command} doctor md?`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search Título : ${text}\n\n`
                for (let g of res) {
                teks += `🌹፝⃟༘*Titulo* : ${g.Título}\n`
                teks += `🌹፝⃟༘ *Descrição* : ${g.snippet}\n`
                teks += `🌹፝⃟༘*Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
        if (!text) return reply(`Exemplo : ${prefix + command} doctor md?`)
        let gis = require('g-i-s')
        gis(text, async (ERRO, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️➡️Proxima Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
😐 *Consulta* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: doctor.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
 ///▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\\\\\    
///▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\\\\\
///▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                                 ///P L A Y\\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\    
	    case 'play': case 'song': case 'ytplay': {
                if (!text) return reply(`Exemplo : ${prefix + command} Comedor de cu`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎶Audio🎶'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
${Emoji} Nome  : ${anu.Título}
${Emoji} Ext : Search
${Emoji} ID : ${anu.videoId}
${Emoji} Duração : ${anu.timestamp}
${Emoji} Viewes : ${anu.views}
${Emoji} Channel : ${anu.author.url}
${Emoji} Descrição : ${anu.Descrição}
${Emoji} Url : ${anu.url}`,
                    footer: doctor.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: vid })
            }
            break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Arquivo acima do limite '+util.format(media))
                doctor.sendImage(m.chat, media.thumb, `${Emoji} Titulo : ${media.Título}\n ${Emoji} Tamanho do arquivo : ${media.filesizeF}\n${Emoji} Url : ${isUrl(text)}\n${Emoji} Ext : MP3\n${Emoji} Resolução : ${args[1] || '320kbps'}`, m)
                doctor.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', filename: `${media.Título}.mp3` }, { quoted: aud })
            }
            break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\            
            case 'ytmp4': case 'getvideo': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('Arquivo acima do limite '+util.format(media))
                doctor.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', filename: `${media.Título}.mp4`, caption: `  ⃟💙 Título : ${media.Título}\n  ⃟?? File Size : ${media.filesizeF}\n  ⃟💙 Url : ${isUrl(text)}\n  ⃟💙 Ext : MP3\n  ⃟💙 Resolution : ${args[1] || '360p'}` }, { quoted: vid })
            }
            break
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\            
	    case 'getmusicxxx': {
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('Arquivo acima do limite '+util.format(media))
                doctor.sendImage(m.chat, media.thumb, `${Emoji} Titulo : ${media.Título}\n${Emoji} Tamanho do arquivo : ${media.filesizeF}\n${Emoji} Url : ${urls[text - 1]}\n${Emoji} Ext : MP3\n${Emoji} Resolução : ${args[1] || '128kbps'}`, m)
                doctor.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', filename: `${media.Título}.mp3` }, { quoted: m })
            }
            break
            case 'getvideoxxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Exemplo : ${prefix + command} 1`
                if (!m.quoted) throw 'Marque a msg'
                if (!m.quoted.isBaileys) throw `Só pode responder a mensagens de bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Talvez a mensagem que você respondeu não contenha o resultado da pesquisa de vídeo`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('Arquivo acima do limite '+util.format(media))
                doctor.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', filename: `${media.Título}.mp4`, caption: `${Emoji} titulo : ${media.Título}\n${Emoji}Tamanho do arquivo : ${media.filesizeF}\n${Emoji} Url : ${urls[text - 1]}\n${Emoji} Ext : MP3\n${Emoji} Resolução : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                doctor.sendMessage(m.chat, { image: { url: result }, caption: '${Emoji} Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('O que você está procurando??')
                await reply(mess.wait)
                dgZalts.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Titulo :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Criador :* ${i.creator}\n`
                        txt += `*🎥 Gênero :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.ERRO)
                })
            break
            case 'drakorxxx':
                if (!text) return reply('O que você está procurando???')
                await reply(mess.wait)
                dgZalts.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Título :* ${i.judul}\n`
                        txt += `*📆 Anos :* ${i.years}\n`
                        txt += `*🎥 Gênero :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.ERRO)
                })
            break
            case 'animexxx':{
                if (!text) return reply(`Qual anime você está procurando?`)
                await reply(mess.wait)
                dgZalts.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Titulo :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${myweb}`
						}
					}
				]
				await doctor.send5ButLoc(from, txt , `©Copyright by Showman `,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.ERRO)
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
                if (!text) return reply(`Qual personagem de anime você está procurando??`)
                await reply(mess.wait)
                dgZalts.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Personagem :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${myweb}`
						}
					}
				]
				await doctor.send5ButLoc(from, txt , `©Copyright by Showman`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.ERRO)
                })
            break
            case 'manga':
                if (!text) return reply(`Qual mangá você está procurando❓`)
                await reply(mess.wait)
                dgZalts.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Título :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${myweb}`
						}
					}
				]
				await doctor.send5ButLoc(from, txt , `© ${ownerNome}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.ERRO)
                })
            break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                doctor.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Gerado aleatoriamente' + command }, { quoted: m })
            }
            break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                doctor.sendMessage(m.chat, { image: { url: random.male }, caption: `Casal Masculino🙎🏻‍♂️` }, { quoted: m })
                doctor.sendMessage(m.chat, { image: { url: random.female }, caption: `Casal Feminino🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Proxima Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Café aleatório`,
                    footer: doctor.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply(`Insira o título da consulta`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️Proxima Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `  ⃟💙 Título : ${result.Título}\n Categoria : ${result.type}\n Detalhe : ${result.source}\n Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: doctor.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return reply(`Insira o título da consulta`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Proxima Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` Título : ${result.Título}\n Fonte : ${result.source}\n Media Url : ${result.image}`,
                    footer: doctor.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Proxima Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Proxima➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 2
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) return reply(`Digite o texto, Exemplo : ${prefix + command} Showman`)
                reply(mess.wait)
                doctor.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    
            
            
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Seu limite diário expirou')
                if (!text) return reply(`Exemplo : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return reply(`Sem ID de consulta, Exemplo ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nusername : ${anu.result.username}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return reply(`Sem ID de consulta, Exemplo : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return reply(`Sem ID de consulta, Exemplo : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nusername : ${anu.result.username}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return reply(`Sem ID de consulta, Exemplo ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nusername : ${anu.result.username}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return reply(`Sem ID de consulta, Exemplo ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nusername : ${anu.result.username}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return reply(`Sem ID de consulta, Exemplo ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nusername : ${anu.result.username}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return reply(`Nenhum nome de usuário de consulta, Exemplo : ${prefix + command} ig showmanknnn`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    doctor.sendMedia(m.chat, anu.caption.profile_hd, '', `  ⃟💙 Nome : ${anu.caption.full_Nome}\n  ⃟💙 Nome de usuario : ${anu.caption.user_name}\n  ⃟💙 ID ${anu.caption.user_id}\n  ⃟💙 Seguindo : ${anu.caption.followers}\n  ⃟💙 Seguindo: ${anu.caption.following}\n  ⃟💙 negócio : ${anu.caption.bussines}\n  ⃟💙 Profissional : ${anu.caption.profesional}\n  ⃟💙 Verificado : ${anu.caption.verified}\n  ⃟💙 Private : ${anu.caption.private}\n  ⃟💙 Bio : ${anu.caption.biography}\n  ⃟💙 Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`Nenhum nome de usuário de consulta, Exemplo : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`  ⃟  ⃟💙 Nome : ${anu.Nome}\n  ⃟💙 Versão : ${Object.keys(anu.versions)}\n  ⃟💙 Credito : ${tanggal(anu.time.created)}\n  ⃟💙 Modificado : ${tanggal(anu.time.modified)}\n  ⃟💙 Mantenedores :\n ${anu.maintainers.map(v => `- ${v.Nome} : ${v.email}`).join('\n')}\n\n  ⃟💙 Descrição : ${anu.Descrição}\n  ⃟💙 Pagina inicial : ${anu.homepage}\n  ⃟💙 Palavras-chave : ${anu.keywords}\n  ⃟💙 Autor : ${anu.author.name}\n  ⃟💙 License : ${anu.license}\n  ⃟💙 Leia-me : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Exemplo : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktokd': case 'tiktoknowmx': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'Com marca dágua'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download ${text}`,
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 5
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwmx': case 'tiktokwatermarkx': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬Sem marca dágua🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 5
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3x': case 'tiktokaudiox': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'Sem marca dágua'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'Com marca dágua'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download ${text}`,
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
                doctor.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagramx': case 'igx': case 'igdlx': {
                if (!text) return reply(`Sem URL de consulta❗`)
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) doctor.sendMedia(m.chat, media, '', `Baixar URL do Instagram de ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    doctor.sendMedia(m.chat, anu.media[0].url, '', `Baixar URL do Instagram de ${isUrl(text)[0]}`, m)
                }
            }
            break
		//Backup, for Exemplo, the video above doesn't come out\\
		case 'igeh': case 'instagram2x': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                doctor.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) return reply(`Sem título de consulta`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await doctor.sendImage(m.chat, anu.result.img, `  ⃟💙 Título : ${anu.result.lagu}\n  ⃟💙 Album : ${anu.result.album}\n  ⃟💙 Singer : ${anu.result.penyanyi}\n  ⃟💙 Publish : ${anu.result.publish}\n  ⃟💙 Lyrics :\n${anu.result.lirik.result}`, m)
                doctor.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', filename: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`Sem título de consulta`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await doctor.sendImage(m.chat, anu.result.thumb, `  ⃟💙 Título : ${anu.result.Título}\n  ⃟💙 Url : ${isUrl(text)[0]}`)
                doctor.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', filename: anu.result.Título+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdlx': case 'twitterx': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 5
                }
                doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3x': case 'twitteraudiox': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Pressione o botão abaixo',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
                doctor.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdlx': case 'fbx': case 'facebookx': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                doctor.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `  ⃟💙 Título : ${anu.result.Título}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) return reply(`Insira o link de consulta❗`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                doctor.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Exemplo : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
  ⃟💙 Título : ${anu.Título}
  ⃟💙 Autor : ${anu.author.Nome}
  ⃟💙 Like : ${anu.like}
  ⃟💙 Url : ${anu.media[0]}
Para baixar mídia, clique em um dos botões abaixo ou digite o comando ytmp3/ytmp4 com o URL acima
`,
			footer: doctor.user.name,
			buttons,
			headerType: 4
		    }
		    doctor.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        doctor.sendMessage(m.chat, { image: { url }, caption: `  ⃟💙 Título : ${anu.Título}\n  ⃟💙 Autor : ${anu.author.Nome}\n  ⃟💙 Like : ${anu.like}\n  ⃟💙 Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Exemplo : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		doctor.sendMessage(m.chat, { audio: { url: result.audio }, filename: result.Título+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqraxxx': {
		oh = `Exemplo : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		doctor.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', filename: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		
		case 'hadisxxx': case 'hadistxxx': {
		if (!args[0]) return reply(`Exemplo:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Opções disponíveis:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return reply(`Qual Hadith❓❓\n\nExemplo:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`Não. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith não encontrado❗❗❗`)
		}
		}
		break
		case 'alquranxxx': {
		if (!args[0]) return reply(`Use Exemplos:\n${prefix + command} 1 2\n\nEntão o resultado é o versículo 2 da Surata Al-Fatihah junto com o áudio, e o versículo é apenas 1`)
		if (!args[1]) return reply(`Use Exemplos:\n${prefix + command} 1 2\n\nEntão o resultado é o versículo 2 da Surata Al-Fatihah junto com o áudio, e o versículo é apenas 1`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.Nome.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		doctor.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurahxxx': {
		if (!args[0]) return reply(`Use Exemplos:\n${prefix + command} 1 2\n\nEntão o resultado é a interpretação do versículo da Surata Al-Fatihah 2`)
		if (!args[1]) return reply(`Use Exemplos:\n${prefix + command} 1 2\n\nEntão o resultado é a interpretação do versículo da Surata Al-Fatihah 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Curto* : ${res.result.data.tafsir.id.short}

*Longo* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await doctor.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                doctor.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m})
                fs.unlinkSync(ran)
                })
                } else reply(`Responda ao áudio que você deseja alterar com legenda *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Marque a msg❗`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash ausente`)
                if (!text) return reply(`Para que comando❓`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`Você não tem permissão para alterar este comando de adesivo`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Feito❗`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`Sem hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`Você não tem permissão para excluir este comando pq você não é meu dono`)
                delete global.db.data.sticker[hash]
                reply(`Erro!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista de hash*
           Info: *negrito* hash está bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                doctor.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`MARQUE A MSG❗`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash ausente`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash não encontrado no banco de dados`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Mensagem de resposta que você deseja salvar no banco de dados`)
                if (!text) return reply(`Exemplo : ${prefix + command} Nome do arquivo`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Foi registrado na lista de mensagens`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Mensagem adicionada com sucesso na lista de mensagens como '${text}'
    
Acesso com ${prefix}getmsg ${text}

Ver lista de mensagens com ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Exemplo : ${prefix + command} file Nome\n\nVer lista de mensagens com ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Não listado na lista de mensagens`)
                doctor.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./banco de dados/database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += ` *Nome :* ${i.nama}\n *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Não listado na lista de mensagens`)
		delete msgs[text.toLowerCase()]
		reply(`Excluir com sucesso '${text}' Da lista de mensagens`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Recursos não podem ser usados ​​para grupos❗')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                doctor.sendButtonText(m.chat, buttons, `\`\`\`Oi ${await doctor.getNome(m.sender)} Bem-vindo ao chat anônimo\n\nClique no botão abaixo para encontrar um parceiro⬇️\`\`\``, doctor.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Recursos não podem ser usados ​​para grupos❗')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `\`\`\`Você não está em uma sessão anônima‼️pressione o botão para encontrar um parceiro🙂 \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await doctor.sendText(other, `\`\`\`O amigo saiu da sessão anônima😥\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('esses recursos não podem ser usados ​​para grupos‼️')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🚫PARA🛑' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `\`\`\`Você ainda está em uma sessão anônima, pressione o botão abaixo para encerrar sua sessão anônima\`\`\``, doctor.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === '⏱AGUARDE' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Continue⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '❌PARAR✋' }, type: 1 }
                    ]
                    await doctor.sendButtonText(room.a, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem✅\`\`\``, doctor.user.name, m)
                    room.b = m.sender
                    room.state = '🌀CONVERSANDO'
                    await doctor.sendButtonText(room.b, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem✅\`\`\``, doctor.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: '⏱AGUARDE',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑PARAR🛑' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `\`\`\`Por favor, espere, procurando um Usuario⏱ \`\`\``, doctor.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('❌Recursos não podem ser usados ​​para grupos❗')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚹S T A R T🚺' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `\`\`\`Você não está em uma sessão anônima, pressione o botão para encontrar um outro usuário ‼️\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await doctor.sendText(other, `\`\`\`O parceiro saiu da sessão anônima\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'AGUARDE' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Proximo⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Pare🛑' }, type: 1 }
                    ]
                    await doctor.sendButtonText(room.a, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem✅\`\`\``, doctor.user.name, m)
                    room.b = m.sender
                    room.state = '🌀CONVERSANDO'
                    await doctor.sendButtonText(room.b, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem✅\`\`\``, doctor.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: '⏱AGUARDE',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await doctor.sendButtonText(m.chat, buttons, `\`\`\`⏱Por favor, espere, procurando um parceiro\`\`\``, doctor.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                doctor.public = true
                reply('Mudança bem-sucedida para uso público✅')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                doctor.public = false
                reply('Mudança bem-sucedida para uso próprio✅')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
            //  ╰────╮
//                                   ║@desenho por Showman                ║
//                                   ║@base por Showman                       ║
//                                   ║@suporte por Showman                  ║
//                                    ╰─────────────╯	
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)}  segundos \n ${oldd - neww} _milisegundos_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            
            case 'speedtest': {
            reply('Velocidade de teste....')
            let cp = require('processando')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						doctor.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					doctor.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case "setmenuxxx": 
if (!text) return reply("1. image\n2. list\n3. catalog\n\nExemplo .setmenu image")
if (q == "image") {
typemenu = 'image'
reply("Sucesso Alterando Menu Para "+q)
} else if (q == "list") {
typemenu = 'list'
reply("Sucesso Alterando Menu Para "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
reply("Sucesso Alterando Menu Para "+q)
}
break
                    

case 'menu': {
  	anu = `
╭─────────────────╮
│[][■■■■■DOCTOR■■■■■■][] │
│╰────────────────╯
│ola ${pushname}
└╮
┌┤${Emoji} bem vindo ao meu menu ${Emoji}
│├──────────────
││${Emoji}Ativo a ${runtime(process.uptime())}
││${Emoji}Prefix: ❬ ${prefix} ❭
││${Emoji}Bot: ${nome2}
││${Emoji}Dono: ${nome}
││${Emoji}Versão: ${V}
││${Emoji}Plataforma : ${os.platform()}
││${Emoji}Nome: ${pushname}
││${Emoji}Total de usuarios: ${Object.keys(global.db.data.users).length}
││${Emoji}Numero do dono ${donito}
││${Emoji}Numero do bot ${botzin}
├╯id: 1823A
└──────────────╯`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/doctor.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' ☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰menu2☰',
                                    id: `${prefix}menu2`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
                case 'menulist': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    Título: `olá ${pushname} ta preparado pra viajar comigo por todo o espaço tempo?`,
                    Descrição: `Seja bem vindo ao meu menu list\n\n`,
                    buttonText: "Menu",
                    footerText: `DOCTOR V3 MD`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"Título": "Main Features",
								"rows": [
									{
										"Título": "🇲 🇪 🇳 🇺   🇵 🇷 🇮 🇳 🇨 🇮 🇵 🇦 🇱 ",
										"Descrição": "Exibe a lista de recursos principais",
										"rowId": `${prefix}Menuprincipal`
									}
								]
							},
							{
								"Título": "Bot Features",
								"rows": [
									{
										"Título": "  ⃟💙TODOS OS MENUS彡",
										"Descrição": "Ela exibe a lista de todos os recursos",
										"rowId": `${prefix}menu2`
									},
									{
										"Título": "💎MENU DE DONO彡",
										"Descrição": "Ela exibe a lista de recursos do proprietário",
										"rowId": `${prefix}menudono`
										},
									{
										"Título": "💧MENU DE GRUPOS彡",
										"Descrição": "Ela exibe a lista de recursos principais",
										"rowId": `${prefix}menugp`
										},
									{
										"Título": "❄MENU DE RPG彡",
										"Descrição": "Ela exibe a lista de recursos de RPG",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"Título": "🤖MENU DE DOWNLOAD彡",
										"Descrição": "Ela e xibe a lista de recursos de download",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"Título": "🥶MENU DE PESQUISA彡",
										"Descrição": "Ela exibe a lista de recursos de pesquisa",
										"rowId": `${prefix}pesquimn`
									},
									{
											"Título": "🧊MENU ALEATORIO彡",
										"Descrição": "Ela exibe a lista de recursos aleatórios",
										"rowId": `${prefix}randommenu`
										},
										{
											"Título": "🌐MENU DE ANIMES ALEATORIOS彡",
										"Descrição": "Ela exibe a lista de recursos de anime aleatórios",
										"rowId": `${prefix}randomanimemenu`
										},
										{
											"Título": "🗨MENU DE BRINCADEIRAS彡",
										"Descrição": "Ela exibe a lista de recursos divertidos",
										"rowId": `${prefix}menudiversão`
										},
										{
											"Título": "🌀MENU CONVERTOR彡",
										"Descrição": "Ela exibe a lista de recursos de conversão",
										"rowId": `${prefix}convertmenu`
										},
										{
											"Título": "🐦MENU DATABASE彡",
										"Descrição": "Ela exibe a lista de recursos do banco de dados",
										"rowId": `${prefix}databasemenu`
										},
										{
											"Título": "🦋MENU MODIFICADOR DE VOZ",
										"Descrição": "Ela exibe a lista de recursos de alteração de voz",
										"rowId": `${prefix}modifyaud`
										}
								]
							},
							{
								"Título": "Conversa com outros usuários",
								"rows": [
									{
										"Título": "Menu de bate-papo anônimo",
										"Descrição": "Ela exibe a lista de recursos de bate-papo anônimo",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"Título": "Credit",
								"rows": [
									{
										"Título": "AGRADECIMENTOS",
										"Descrição": "Exibe a lista de crédito do bot ",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
  
case 'menu2': {
  	anu = `

╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯
┠╮
║╿ola ${pushname}
╿║bem vindo ao meu menu
║╿comando: ${command}
╿╿
║║
╿╿aproveite a atualização
║║do doctor bot 
╿╿
╠╯                 𝚋𝚊𝚍 𝚆𝚘𝚕𝚏 🐺
║
║ⓘ Esse usuário é um bot 𝘚꯭꯭꯭𝘢꯭꯭𝘪꯭𝘣꯭꯭𝘢꯭ ꯭꯭𝘮꯭꯭꯭𝘢꯭꯭꯭𝘪꯭꯭꯭꯭s​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
║
║A____A
║|・ㅅ・|Total de usuarios: ${Object.keys(global.db.data.users).length}
║|っ　ｃ|
║|　　　|
║|　　　|
║|　　　|
║|　　　|
║|　　　|
║U￣￣U
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟💎TABELA DE MENUS彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰╮
01╠ ${prefix}modifyaud
02╠ ${prefix}menuanonymous
03╠ ${prefix}databasemenu
04╠ ${prefix}convertmenu
05╠ ${prefix}textpromenu
06╠ ${prefix}randomanimemenu
07╠ ${prefix}randommenu
08╠ ${prefix}pesquimn
09╠ ${prefix}downloadmenu
10╠ ${prefix}menudono
11╠ ${prefix}menudiversão
12╠ ${prefix}rpgmenu
13╠ ${prefix}gpmenu
14╠ ${prefix}menu
15╠ ${prefix}menulist
16╠ ${prefix}menu2
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║      *き⃟💙PRIMARIOS ⃟彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
╰╮
17╠ ${prefix}ping
18╠ ${prefix}menu
19╠ ${prefix}delete
20╠ ${prefix}chatinfo
21╠ ${prefix}quoted
22╠ ${prefix}listpc
23╠ ${prefix}listgc
24╠ ${prefix}report [bug]
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║      *き⃟💙MENU DONO  ⃟彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰╮
25╠ ${prefix}chat [option]
26╠ ${prefix}join [link]
27╠ ${prefix}leave
28╠ ${prefix}block [user]
29╠ ${prefix}unblock [user]
30╠ ${prefix}bcgroup [text]
31╠ ${prefix}bcall [text]
32╠ ${prefix}setppbot [image]
33╠ ${prefix}setexif
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║      *き⃟🌐MENU GRUPO彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║ 
╰╮     
34╠${prefix}grouplink
35╠${prefix}ephemeral [option]
36╠${prefix}setgcpp [image]
37╠${prefix}setNome [text]
38╠${prefix}setdesc [text]
39╠${prefix}group [text]
40╠${prefix}editinfo [option]
41╠${prefix}add [user]
42╠${prefix}kick [reply/tag]
43╠${prefix}hidetag [text]
44╠${prefix}tagall [text]
45╠${prefix}antilink [on/off]
46╠${prefix}mute [on/off]
47╠${prefix}promote [reply/tag]
48╠${prefix}demote [reply/tag]
49╠${prefix}vote
50╠${prefix}devote
51╠${prefix}upvote
52╠${prefix}checkvote
53╠${prefix}delvote
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟🧊MENU RPG彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰╮
54╠${prefix}hunting
55╠${prefix}mining
56╠${prefix}heal
57╠${prefix}userlimit
58╠${prefix}profile
59╠${prefix}inventory
60╠${prefix}leaderboard
61╠${prefix}buy [option]
62╠${prefix}sell [option]
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟🌀MENU DOWNLOADER彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰╮	
64╠${prefix}ytmp3 [link]
65╠${prefix}ytmp4 [link]
66╠${prefix}getmusic [ link]
67╠${prefix}getvideo [ link]
68╠${prefix}umma [link]
69╠${prefix}joox [link]
70╠${prefix}soundcloud [link]
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟🥶MENU DE PESQUISA彡*
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰╮
71╠${prefix}play [msg]
72╠${prefix}song [msg]
73╠${prefix}yts [msg]
74╠${prefix}google [msg]
75╠${prefix}gimage [msg]
76╠${prefix}pinterest [msg]
77╠${prefix}wallpaper [msg]
78╠${prefix}wikimedia [msg]
79╠${prefix}ytsearch [msg]
80╠${prefix}ringtone [msg]
81╠${prefix}webtoon [msg]
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟🐦MENU RANDOM彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰╮
82╠${prefix}coffee
83╠${prefix}animequote (indo)
84╠${prefix}couplepp
╠╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟💎MENU ANIME彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰╮
85╠${prefix}loli
86╠${prefix}bully
87╠${prefix}cuddle
88╠${prefix}cry
89╠${prefix}hug
90╠${prefix}awoo
91╠${prefix}kiss
92╠${prefix}lick
93╠${prefix}pat
94╠${prefix}smug
95╠${prefix}bonk
96╠${prefix}yeet
97╠${prefix}blush
98╠${prefix}smile
99╠${prefix}wave
⌻ ╰╮
100╠${prefix}highfive
101╠${prefix}handhold
102╠${prefix}nom
103╠${prefix}glomp
104╠${prefix}bite
105╠${prefix}slap
106╠${prefix}kill
107╠${prefix}happy
108╠${prefix}wink
109╠${prefix}poke
110╠${prefix}dance
111╠${prefix}cringe
╭─╯
║
║espaço monumental
║fodastico✨
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟✨MENU DIVERSÃO彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰─╮
112 ╠ ${prefix}how [text
113╠ ${prefix}when [text]
114╠ ${prefix}is [text]
115╠ ${prefix}what [text]
116╠ ${prefix}can [text]
117╠ ${prefix}rate [text]
118╠ ${prefix}wangy [text]
119╠ ${prefix}beautifulcheck [tag]
120╠ ${prefix}awesomecheck [tag]
121╠ ${prefix}prettycheck [tag]
122╠ ${prefix}lesbiancheck [tag]
123╠ ${prefix}gaycheck [tag]
124╠ ${prefix}cutecheck [tag]
125╠ ${prefix}uglycheck [tag]
126╠ ${prefix}hornycheck [tag]
127╠ ${prefix}charactercheck [tag]
128╠ ${prefix}lovelycheck [tag]
129╠ ${prefix}couple
130╠ ${prefix}mysoulmate
131╠ ${prefix}hot
132╠ ${prefix}sexy
133╠ ${prefix}kind
134╠ ${prefix}idiot
135╠ ${prefix}handsome
136╠ ${prefix}beautiful
137╠ ${prefix}cute
138╠ ${prefix}pretty
139╠ ${prefix}lesbian
140╠ ${prefix}noob
141╠ ${prefix}gay
142╠ ${prefix}wibu
143╠ ${prefix}tictactoe
144╠ ${prefix}delttt
145╠ ${prefix}bastard
146╠ ${prefix}foolish
147╠ ${prefix}nerd
148╠ ${prefix}asshole
149╠ ${prefix}smart
150╠ ${prefix}stubble
151╠ ${prefix}dog
152╠ ${prefix}horny
153╠ ${prefix}cunt
154╠ ${prefix}guess [option]
155╠ ${prefix}math [mode]
156╠ ${prefix}suitpvp [tag]
╭─╯espaço monumental
║fodastico✨
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟❄MENU CONVERTOR彡」*
╠─═─═─═─ • ⏄ • ─═─══╯
║
╰─╮
157 ╠ ${prefix}toimage [marque a fig]
158 ╠ ${prefix}sticker [marque a fig]
159 ╠ ${prefix}emojimix [emoji+emoji]
160 ╠ ${prefix}tovideo [marque a fig]
161 ╠ ${prefix}togif [marque a fig]
162 ╠ ${prefix}tourl [marque a fig]
163 ╠ ${prefix}tovn [marque o audio]
164 ╠ ${prefix}tomp3 [marque o audio]
165 ╠ ${prefix}toaudio [marque o video]
166 ╠ ${prefix}ebinary marque a msg]
167 ╠ ${prefix}dbinary marque a msg]
168 ╠ ${prefix}styletext [text]
╭─╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟🧿MENU DATABASE彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
╰─╮
169 ╠ ${prefix}setcmd
170 ╠ ${prefix}listcmd
171 ╠ ${prefix}delcmd
172 ╠ ${prefix}lockcmd
173 ╠ ${prefix}addmsg
174 ╠ ${prefix}listmsg
175 ╠ ${prefix}getmsg
176 ╠ ${prefix}delmsg
╭─╯
┃
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟🕵MENU ANONYMO彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
╰─╮
177 ╠${prefix}anonymous
178 ╠${prefix}start
179 ╠${prefix}next
180 ╠${prefix}leave
╭─╯
║
╠═─═─═─ • ⏄ • ─═─═─═╮
║  *き⃟🗣MENU DE VOZ彡*」
╠─═─═─═─ • ⏄ • ─═─══╯
╰─╮
181 ╠${prefix}bass [marque o audio]
182 ╠${prefix}blown [marque o audio]
183 ╠${prefix}deep [marque o audio]
184 ╠${prefix}earrape [marque o audio]
185 ╠${prefix}fast [marque o audio]
186 ╠${prefix}fat [marque o audio]
187 ╠${prefix}nightcore [marque o audio]
188 ╠${prefix}reverse [marque o audio]
189 ╠${prefix}robot [marque o audio]
190 ╠${prefix}slow [marque o audio]
191 ╠${prefix}squirrel [marque o audio]
    ╭╯
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─╯`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/doctor2.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break


case 'gpmenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══════「 G R U P O」 ══╮     
║╭══════════════╯  
║╠${Emoji15} ${prefix}grouplink
║╠${Emoji15} ${prefix}ephemeral [option]
║╠${Emoji15} ${prefix}setgcpp [image]
║╠${Emoji15} ${prefix}setNome [text]
║╠${Emoji15} ${prefix}setdesc [text]
║╠${Emoji15} ${prefix}group [text]
║╠${Emoji15} ${prefix}editinfo [option]
║╠${Emoji15} ${prefix}add [user]
║╠${Emoji15} ${prefix}kick [reply/tag]
║╠${Emoji15} ${prefix}hidetag [text]
║╠${Emoji15} ${prefix}tagall [text]
║╠${Emoji15} ${prefix}antilink [on/off]
║╠${Emoji15} ${prefix}mute [on/off]
║╠${Emoji15} ${prefix}promote [reply/tag]
║╠${Emoji15} ${prefix}demote [reply/tag]
║╠${Emoji15} ${prefix}vote
║╠${Emoji15} ${prefix}devote
║╠${Emoji15} ${prefix}upvote
║╠${Emoji15} ${prefix}checkvote
║╠${Emoji15} ${prefix}delvote
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/glp.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case 'rpgmenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠════════「 R P G」 ══╮     
║╭══════════════╯  
║╠${Emoji11} ${prefix}hunting
║╠${Emoji11} ${prefix}mining
║╠${Emoji11} ${prefix}heal
║╠${Emoji11} ${prefix}limituser
║╠${Emoji11} ${prefix}profile
║╠${Emoji11} ${prefix}inventory
║╠${Emoji11} ${prefix}leaderboard
║╠${Emoji11} ${prefix}buy [opção]
║╠${Emoji11} ${prefix}sell [opção]
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/rpg.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case 'menudiversão': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══════「 DIVERSÃO」══╮     
║╭══════════════╯       
║╠${Emoji18} ${prefix}how [text
║╠${Emoji18} ${prefix}when [text]
║╠${Emoji18} ${prefix}is [text]
║╠${Emoji18} ${prefix}what [text]
║╠${Emoji18} ${prefix}can [text]
║╠${Emoji18} ${prefix}rate [text]
║╠${Emoji18} ${prefix}wangy [text]
║╠${Emoji18} ${prefix}beautifulcheck [tag]
║╠${Emoji18} ${prefix}awesomecheck [tag]
║╠${Emoji18} ${prefix}prettycheck [tag]
║╠${Emoji18} ${prefix}lesbiancheck [tag]
║╠${Emoji18} ${prefix}gaycheck [tag]
║╠${Emoji18} ${prefix}cutecheck [tag]
║╠${Emoji18} ${prefix}uglycheck [tag]
║╠${Emoji18} ${prefix}hornycheck [tag]
║╠${Emoji18} ${prefix}charactercheck [tag]
║╠${Emoji18} ${prefix}lovelycheck [tag]
║╠${Emoji18} ${prefix}couple
║╠${Emoji18} ${prefix}mysoulmate
║╠${Emoji18} ${prefix}hot
║╠${Emoji18} ${prefix}sexy
║╠${Emoji18} ${prefix}kind
║╠${Emoji18} ${prefix}handsome
║╠${Emoji18} ${prefix}beautiful
║╠${Emoji18} ${prefix}cute
║╠${Emoji18} ${prefix}pretty
║╠${Emoji18} ${prefix}lesbian
║╠${Emoji18} ${prefix}noob
║╠${Emoji18} ${prefix}bastard
║╠${Emoji18} ${prefix}foolish
║╠${Emoji18} ${prefix}nerd
║╠${Emoji18} ${prefix}asshole
║╠${Emoji18} ${prefix}gay
║╠${Emoji18} ${prefix}smart
║╠${Emoji18} ${prefix}stubble
║╠${Emoji18} ${prefix}dog
║╠${Emoji18} ${prefix}horny
║╠${Emoji18} ${prefix}cunt
║╠${Emoji18} ${prefix}wibu
║╠${Emoji18} ${prefix}tictactoe
║╠${Emoji18} ${prefix}delttt
║╠${Emoji18} ${prefix}guess [option]
║╠${Emoji18} ${prefix}math [mode]
║╠${Emoji18} ${prefix}suitpvp [tag]
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/menudiversão.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'menudono': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠═══════  「  DONO」 ══╮     
║╭══════════════╯  
║╠${Emoji20} ${prefix}grouplink
║╠${Emoji20} ${prefix}ephemeral [option]
║╠${Emoji20} ${prefix}setgcpp [image]
║╠${Emoji20} ${prefix}setNome [text]
║╠${Emoji20} ${prefix}setdesc [text]
║╠${Emoji20} ${prefix}group [text]
║╠${Emoji20} ${prefix}editinfo [option]
║╠${Emoji20} ${prefix}add [user]
║╠${Emoji20} ${prefix}kick [reply/tag]
║╠${Emoji20} ${prefix}hidetag [text]
║╠${Emoji20} ${prefix}tagall [text]
║╠${Emoji20} ${prefix}antilink [on/off]
║╠${Emoji20} ${prefix}mute [on/off]
║╠${Emoji20} ${prefix}promote [reply/tag]
║╠${Emoji20} ${prefix}demote [reply/tag]
║╠${Emoji20} ${prefix}vote
║╠${Emoji20} ${prefix}devote
║╠${Emoji20} ${prefix}upvote
║╠${Emoji20} ${prefix}checkvote
║╠${Emoji20} ${prefix}delvote
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/menudono.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'downloadmenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══   「  DOWNLOADS」 ══╮     
║╭══════════════╯  
║╠${Emoji16} ${prefix}ytmp3 [url|quality]
║╠${Emoji16} ${prefix}ytmp4 [url|quality]
║╠${Emoji16} ${prefix}getmusic [yt link]
║╠${Emoji16} ${prefix}getvideo [yt link]
║╠${Emoji16} ${prefix}umma [query]
║╠${Emoji16} ${prefix}joox [query]
║╠${Emoji16} ${prefix}soundcloud [url]
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/downloadmenu.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'pesquimn': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══  「 PESQUISADORES」 ═══╮     
║╭═══════════════╯            
║╠${Emoji88} ${prefix}play [query]
║╠${Emoji88} ${prefix}song [query]
║╠${Emoji88} ${prefix}yts [query]
║╠${Emoji88} ${prefix}google [query]
║╠${Emoji88} ${prefix}gimage [query]
║╠${Emoji88} ${prefix}pinterest [query]
║╠${Emoji88} ${prefix}wallpaper [query]
║╠${Emoji88} ${prefix}wikimedia [query]
║╠${Emoji88} ${prefix}ytsearch [query]
║╠${Emoji88} ${prefix}ringtone [query]
║╠${Emoji88} ${prefix}webtoon [query]
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/pesquimn.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randommenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══════「  RANDOM」 ══╮     
║╭══════════════╯  
║╠${Emoji89} ${prefix}coffee
║╠${Emoji89} ${prefix}animequote (indo)
║╠${Emoji89} ${prefix}couplepp
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/alet.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'randomanimemenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══ 「   RANDOM ANIME」 ══╮     
║╭══════════════╯  
║╠${Emoji7} ${prefix}loli
║╠${Emoji7} ${prefix}bully
║╠${Emoji7} ${prefix}cuddle
║╠${Emoji7} ${prefix}cry
║╠${Emoji7} ${prefix}hug
║╠${Emoji7} ${prefix}awoo
║╠${Emoji7} ${prefix}kiss
║╠${Emoji7} ${prefix}lick
║╠${Emoji7} ${prefix}pat
║╠${Emoji7} ${prefix}smug
║╠${Emoji7} ${prefix}bonk
║╠${Emoji7} ${prefix}yeet
║╠${Emoji7} ${prefix}blush
║╠${Emoji7} ${prefix}smile
║╠${Emoji7} ${prefix}wave
║╠${Emoji7} ${prefix}highfive
║╠${Emoji7} ${prefix}handhold
║╠${Emoji7} ${prefix}nom
║╠${Emoji7} ${prefix}glomp
║╠${Emoji7} ${prefix}bite
║╠${Emoji7} ${prefix}slap
║╠${Emoji7} ${prefix}kill
║╠${Emoji7} ${prefix}happy
║╠${Emoji7} ${prefix}wink
║╠${Emoji7} ${prefix}poke
║╠${Emoji7} ${prefix}dance
║╠${Emoji7} ${prefix}cringe
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/animes.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case 'textpromenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠════ 「  TEXT PRO」  ═══╮     
║╭══════════════╯  
║╠${Emoji32} ${prefix}3dchristmas [txt]
║╠${Emoji32} ${prefix}3ddeepsea [txt]
║╠${Emoji32} ${prefix}americanflag [txt]
║╠${Emoji32} ${prefix}3dscifi [txt]
║╠${Emoji32} ${prefix}3drainbow [txt]
║╠${Emoji32} ${prefix}3dwaterpipe [txt]
║╠${Emoji32} ${prefix}halloweenskeleton [txt]
║╠${Emoji32} ${prefix}sketch [txt]
║╠${Emoji32} ${prefix}bluecircuit [txt]
║╠${Emoji32} ${prefix}space [txt]
║╠${Emoji32} ${prefix}metallic [txt]
║╠${Emoji32} ${prefix}fiction [txt]
║╠${Emoji32} ${prefix}greenhorror [txt]
║╠${Emoji32} ${prefix}transformer [txt]
║╠${Emoji32} ${prefix}berry [txt]
║╠${Emoji32} ${prefix}thunder [txt]
║╠${Emoji32} ${prefix}magma [txt]
║╠${Emoji32} ${prefix}3dcrackedstone [txt]
║╠${Emoji32} ${prefix}3dneonlight [txt]
║╠${Emoji32} ${prefix}impressiveglitch [txt]
║╠${Emoji32} ${prefix}naturalleaves [txt]
║╠${Emoji32} ${prefix}fireworksparkle [txt]
║╠${Emoji32} ${prefix}matrix [txt]
║╠${Emoji32} ${prefix}dropwater [txt]
║╠${Emoji32} ${prefix}harrypotter [txt]
║╠${Emoji32} ${prefix}foggywindow [txt]
║╠${Emoji32} ${prefix}neondevils [txt]
║╠${Emoji32} ${prefix}christmasholiday [txt]
║╠${Emoji32} ${prefix}3dgradient [txt]
║╠${Emoji32} ${prefix}blackpink [txt]
║╠${Emoji32} ${prefix}gluetext [txt]
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/txt.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

case 'convertmenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠═════ 「 DATABASE」 ═══╮     
║╭═══════════════╯       
║╠${Emoji94} ${prefix}toimage [marque a fig]
║╠${Emoji94} ${prefix}sticker [marque a fig/gif]
║╠${Emoji94} ${prefix}emojimix [emoji+emoji]
║╠${Emoji94} ${prefix}tovideo [marque a foto]
║╠${Emoji94} ${prefix}togif [marque a fig]
║╠${Emoji94} ${prefix}tourl [marque a midia]
║╠${Emoji94} ${prefix}tovn [marque o aud]
║╠${Emoji94} ${prefix}tomp3 [marque o aud]
║╠${Emoji94} ${prefix}toaudio [marque o video]
║╠${Emoji94} ${prefix}ebinary [marque o txt]
║╠${Emoji94} ${prefix}dbinary [marque o txt]
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/convert.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'databasemenu': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠═════ 「 DATABASE」 ═══╮     
║╭═══════════════╯       
║╠${Emoji12} ${prefix}setcmd
║╠${Emoji12} ${prefix}listcmd
║╠${Emoji12} ${prefix}delcmd
║╠${Emoji12} ${prefix}lockcmd
║╠${Emoji12} ${prefix}addmsg
║╠${Emoji12} ${prefix}listmsg
║╠${Emoji12} ${prefix}getmsg
║╠${Emoji12} ${prefix}delmsg
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/database.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'menuanonymous': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══ 「 ANONYMOUS CHAT」 ══╮     
║╭═══════════════╯  
║╠${Emoji4} ${prefix}anonymous
║╠${Emoji4} ${prefix}start
║╠${Emoji4} ${prefix}next
║╠${Emoji4} ${prefix}leave
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/anonymous.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
 break

case 'modifyaud': {
  	anu = `
╭═─═─═─═─═─═─═─═─═╮
║[][■■■■■DOCTOR■■■■■■][]
║╰═─═─═─═─═─═─═─══╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╠══ 「  MODIFICADORES」 ══╮     
║╭══════════════╯  
║╠${Emoji21} ${prefix}bass [reply aud]
║╠${Emoji21} ${prefix}blown [reply aud]
║╠${Emoji21} ${prefix}deep [reply aud]
║╠${Emoji21} ${prefix}earrape [reply aud]
║╠${Emoji21} ${prefix}fast [reply aud]
║╠${Emoji21} ${prefix}fat [reply aud]
║╠${Emoji21} ${prefix}nightcore [reply aud]
║╠${Emoji21} ${prefix}reverse [reply aud]
║╠${Emoji21} ${prefix}robot [reply aud]
║╠${Emoji21} ${prefix}slow [reply aud]
║╠${Emoji21} ${prefix}squirrel [reply aud]​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╰┻════════════╮
╭═════════════╯  
╰╮
╭┨
║╿╭━━━━╮
╿║╰━━╮━┃
║╿╱╱╭╯╭╯
╿║╱╭╯╭╯╱
║╿╭╯━╰━╮
┣╯╰━━━━╯                             
┣━.̵̇̌̂͋͗͡━━❑𝚉    𝙰     𝙻     𝚃     𝚂​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ ❑━━━.̵̇━┓
┃.̵̇̌̂͋͗͒̔͡[]■■■■■DOCTOR■■■■■■][] .̵̝̜͔͖̠̗̹̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡┃
┃┏.̴̱̘̹̑̆́̈́͆̿͘.̴̑̆́ ━━━━.̴̑̆́̈́͆̿͘━━━━.̴̱̑̆́̈́͆̿͘━━━━━.̵̝̜͔͖̠̇̌̂͋͗͒̔̉͗̿̂̓́͒̓͋̌͡━┛
║╰═─═─═─ • ⏄ • ─═─═─═╮
╰═─═─═─ • ⏄ • ─═─═─═─`
    let message = await prepareWAMessageMedia({ image: fs.readFileSync('./banco de dados/img/modifyaud.png') }, { upload: doctor.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '彡YouTube彡',
                                    url: `https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'C E N T R A L      D O C T O R',
                                    url: `https://chat.whatsapp.com/B4i64dOlFuNKSBW6w7q3dE`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☰menulist☰',
                                    id: `${prefix}menulist`
                                }
                              }, {  
                              	quickReplyButton: {
                                    displayText: '☰ping☰',
                                    id: `${prefix}ping`
                                  }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                doctor.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
//-------------------- FIM DAS CASES -----------------------\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\            


            default:       
//=======================================================// 
if (budy.match(`bom dia`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	}   
//=======================================================// 
if (budy.match(`Bom dia`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	}   
//=======================================================// 
if (budy.match(`bom diaa`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	}   
//=======================================================// 
if (budy.match(`Bom diaa`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	}   
 //=======================================================// 
if (budy.match(`bom diaaa`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	}
//=======================================================// 
if (budy.match(`Bom diaaa`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	}    
//=======================================================// 
if (budy.match(`bom diaaaa`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	} 
//=======================================================// 
if (budy.match(`Bom diaaaa`)) {
  if (mek.key.fromMe) return 
			m.reply('bom diaaa.')
	}   
//=======================================================// 
if (budy.match(`zalts`)) {
  if (mek.key.fromMe) return 
			m.reply('em breve meu criador vera sua mensagem')
	}     
//=======================================================// 
if (budy.match(`Zalts`)) {
  if (mek.key.fromMe) return 
			m.reply('em breve meu criador vera sua mensagem')
	}     
//=======================================================// 
if (budy.match(`ZALTS`)) {
  if (mek.key.fromMe) return 
			m.reply('em breve meu criador vera sua mensagem')
	}     
//=======================================================// 
if (budy.match(`zeltas`)) {
  if (mek.key.fromMe) return 
			m.reply('respeite meu criador! o nome dele é Showman')
	}     
//=======================================================// 
if (budy.match(`Zeltas`)) {
  if (mek.key.fromMe) return 
			m.reply('respeite meu criador! o nome dele é Showman')
	}   
//=======================================================// 
if (budy.match(`Zaltas`)) {
  if (mek.key.fromMe) return 
			m.reply('respeite meu criador! o nome dele é Showman')
	}  
 //=======================================================// 
if (budy.match(`Zalta`)) {
  if (mek.key.fromMe) return 
			m.reply('respeite meu criador! o nome dele é Showman')
	} 
//=======================================================// 
if (budy.match(`zaltas`)) {
  if (mek.key.fromMe) return 
			m.reply('respeite meu criador! o nome dele é Showman')
	} 
 //=======================================================// 
if (budy.match(`zalta`)) {
  if (mek.key.fromMe) return 
			m.reply('respeite meu criador! o nome dele é Showman')
	}      
//=======================================================// 
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    doctor.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`atualizado ${__filename}`))
	delete require.cache[file]
	require(file)
})
