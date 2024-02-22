import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
┏━━━━━━━━━━━━━━━━━━┓
┣⟣☯︎ *𝗢𝗪𝗡𝗘𝗥:* 𝗔𝗻𝗻𝗶𝗲 𝗩𝗻𝘁𝘀
┣⟣☯︎ *𝗡𝗨𝗠𝗘𝗥𝗢:* +529842546070
┗━━━━━━━━━━━━━━━━━━┛
 ┏━━━━━━━━━━━━━━━━┓
*┃✨𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗢 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥✨*
┃Enable(activar) Disable(desactivar)┃
┣🟠 _.enable *welcome*_ (Activar Bienvenidas)
┣🟠 _.disable *welcome*_ (Desactivar Bienvenida)
┣🟠 _.enable *modoadmin*_ (Activar solo admis)
┣🟠 _.disable *modoadmin*_ (Desactivar solo admis)
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢𝗦 ✨* 
┣🟠 _.kick2 *<@tag>*_
┣🟠 _.kicknum *<texto>*_
┣🟠 _.grupo *<abrir / cerrar>*_
┣🟠 _.promote *<@tag>*_ (Dar admi)
┣🟠 _.demote *<@tag>*_ (Quitar admi)
┣🟠 _.infogroup_
┣🟠 _.link_
┣🟠 _.todos *<texto>*_ (Mencion a todos)
┣🟠 _.setwelcome *<texto>*_ (Editar bienvenida)
┣🟠 _.setbye *<texto>*_ (Editar Despedida)
┣🟠 _.notify_ (Hacer notifys)
┣🟠 _.fantasmas_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗕𝗨𝗦𝗖𝗔𝗥✨*
┣🟡 _.githubsearch *<texto>*_
┣🟡 _.pelisplus *<texto>*_
┣🟡 _.modapk *<texto>*_
┣🟡 _.stickersearch *<texto>*_
┣🟡 _.stickersearch2 *<texto>*_
┣🟡 _.animeinfo *<texto>*_
┣🟡 _.google *<texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗙𝗥𝗔𝗦𝗘𝗦 𝗢 𝗣𝗜𝗥𝗢𝗣𝗢𝗦✨*
┣🔴 _.piropo_
┣🔴 _.consejo_
┣🔴 _.fraseromantica_
┣🔴 _.historiaromantica_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦✨*
┣🔴 _.clima *<país> <ciudad>*_
┣🔴 _.encuesta *<texto1|texto2...>*_
┣🔴 _.ocr *<responde a imagen>*_
┣🔴 _.hd *<responde a imagen>*_
┣🔴 _.acortar *<enlace / link / url>*_
┣🔴 _.calc *<operacion math>*_
┣🔴 _.horario_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦✨*
┣🟢 _.sticker *<responder a imagen o video>*_
┣🟢 _.HD *<responder a imagen
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ✨*
┣🟢 _.play *<texto de la canción >*_
┣🚨 No Descargar Music (evitar bugeos)
┗━━━━━━━━━━━━━━━━┛
 @𝗔𝗻𝗻𝗶𝗲 𝗩𝗻𝘁𝘀 𝘾𝙐𝘼𝙇𝙌𝙐𝙄𝙀𝙍 𝘿𝙐𝘿𝘼 𝙈𝘼𝙉𝘿𝘼𝙍𝙈𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘼𝙇 𝙒𝙋𝙋 +529842546070`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
