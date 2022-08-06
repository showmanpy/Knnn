/*
Caso divulgue algum comando deixe os créditos, fazer ele foi desgaste. 
*
Agradeço pela compreensão. 

  *📝 NOTAS:
  * Algumas cases criada por Showman 
  * Total agradecimento e créditos a ele <3
  *
  *
  *bot levantado pelo Showman
  *
  *©Copyrights pelos desenhos, codigos,e script
  *©Copyrights Showman💎
  *©Copyrights Showman💙
  *©Copyrights Showman🧊
  *©Copyrights Showman💧
  
  
  Knnn
  
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
U￣￣￣U




criador: Showman💙
*/
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', 
}
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                          // NUMEROS\\
 ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
global.owner = ['wa.me/55669971709']
global.premium = ['wa.me/55669971709']
global.ownernomer = 'wa.me/55669971709'
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                             // NOMES\\
 ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
global.ownername = 'ೈ፝͜͡𝚉 𝙰 𝙻 𝚃 𝚂💙'
global.botname = '令DOCTOR BOT V3'
global.footer = 'Zalts md'
global.packname = 'Doctor Bot'
global.author = 'Zaltiis'
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                     // LINKS DO BOT \\
 ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
global.ig = 'https://github.com/Zalts-nodya'
global.region = 'India, NorthEast, Mizoram'
global.sc = 'diretorio da git do seu bot'
global.myweb = 'https://youtube.com/channel/UCA9wcf_1vw4iQwuy3bKK1Ww'
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                 // SESSÃO DO WHATSAPP\\
 ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
global.sessionName = 'Doctor_v3'
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                            // PREFIXOS\\
 ///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
global.prefa = ['','!','.','×','/','?']
global.sp = '⭔'
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
                        // MSG DO BOT\\
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
global.mess = {
    success: 'sucesso ✓',
    admin: 'se torne adm dps use❗',
    botAdmin: '🤖preciso ser admin no grupo primeiro',
    owner: 'Este recurso é apenas para o meu zaltizinho💙',
    group: 'Recurso usado apenas para grupos❌',
    private: 'Recursos usados ​​apenas para bate-papo privado❌',
    bot: '❌Este recurso é apenas para bot',
    wait: 'aguarde⏱',
    ERRO: '❌erro encontrado!',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
}
///▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄\\\               
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./banco de dados/img/doctor0.png')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado '${__filename}'`))
	delete require.cache[file]
	require(file)
})
