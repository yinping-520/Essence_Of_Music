const { Song } = require('../models');


const songData = [
    {
        song_name:'Industry Baby',
        lyrics:'Baby back, ayy Couple racks, ayy Couple Grammys on him Couple plaques, ayy That\'s a fact, ayy Throw it back, ayy Throw it back, ayy',
        youtube:'https://www.youtube.com/embed/HCq1OcAEAm0',
        album_id: 1,
        genre_id: 1,
        audio: 'nas-ind.mp3'
    },
    {
        song_name:'Woman',
        lyrics:'Hey, woman Let me be your woman, woman, woman, woman I can be your woman, woman, woman, woman let me be your woman, woman, woman, woman I can be your woman, woman, woman, woman',
        youtube:'https://www.youtube.com/embed/2V_uAAAH-_Q',
        album_id: 2,
        genre_id: 1,
        audio: ''
        

    },
    {
        song_name:'Shivers',
        lyrics:'Ooh, I love it when you do it like that And when you\'re close up, give me the shivers Oh baby, you wanna dance \'til the sunlight cracks And when they say the party\'s over, then we\'ll bring it right back And we\'ll say, ooh, I love it when you do it like that And when you\'re close up, give me the shivers Oh baby, you wanna dance \'til the sunlight cracks And when they say the party\'s over, then we\'ll bring it right back',
        youtube:'https://www.youtube.com/embed/Il0S8BoucSA',
        album_id: 3,
        genre_id: 1,
        audio: ''
    },
    {
        song_name:'My Universe',
        lyrics:'You, you are my universe and I just want to put you first And you, you are my universe, and You make my world light up inside',
        youtube:'https://www.youtube.com/watch?v=3YqPKLZF_WU',
        album_id: 4,
        genre_id: 1,
        audio: ''
    },
    {
        song_name:'Have Mercy',
        lyrics:'Why I keep bossing like I do (Work, work it, work it) Why I keep flossing like I do (Work, work it, work it) Why I keep saucing like I do (Work, work it, work it) Why it keep costing like it do (Work, work it, work it) All this ass up in my jeans (Work, work it, work it) You can\'t get up in between (Work, work it, work it) You tryna get a piece of me (Work, work it, work it) I can teach you a couple things (Lord, have mercy, work)',
        youtube:'https://www.youtube.com/watch?v=FfesqRkdSEk',
        album_id: 5,
        genre_id: 1,
        audio: ''
    },
    {
        song_name:'Happier Than Ever',
        lyrics:'When I\'m away from you I\'m happier than ever Wish I could explain it better I wish it wasn\'t true',
        youtube:'https://www.youtube.com/watch?v=5GJWxDKyk3A',
        album_id: 6,
        genre_id: 1,
        audio: ''
    },
    {
        song_name:'Take My Breath Away',
        lyrics:'I saw the fire in your eyes I saw the fire when I look into your eyes You tell me things you wanna try',
        youtube:'https://www.youtube.com/watch?v=rhTl_OyehF8',
        album_id: 7,
        audio:'weeknd-take.mp3'
    },
    {
        song_name:'Peppas',
        lyrics:'Pepa y agua pa\' la seca To\' el mundo en pastilla\' en la discoteca Pepa y agua pa\' la seca To\' el mundo en pastilla\' en la discoteca',
        youtube:'https://www.youtube.com/watch?v=y8trd3gjJt0',
        album_id: 8,
        genre_id: 1,
        audio: ''
    },
    {
        song_name:'Love again',
        lyrics:'You got me in love again You got me in love again You got me in love again Again',
        youtube:'https://www.youtube.com/watch?v=BC19kwABFwc',
        album_id: 9,
        genre_id: 1,
        audio: ''
    },
    {
        song_name:'Heat Wave',
        lyrics:'Sometimes, all I think about is you Late nights in the middle of June Heat waves been faking me out Can\'t make you happier now',
        youtube:'https://www.youtube.com/watch?v=mRD0-GxqHVo',
        album_id: 10,
        genre_id: 1,
        audio: ''
    },
    {
        song_name:'Hurricane',
        lyrics:'The moon went hiding Stars quit shining Rain was dropping Thunder \'n lightning You wrecked my whole world when you came And hit me like a hurricane You hit me like a hurricane',
        youtube:'https://www.youtube.com/watch?v=bPjZmQAvk_8',
        album_id: 11,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Kiss Somebody',
        lyrics:'Sometimes you gotta kiss somebody In the back of a cab or on a subway train Sometimes you gotta kiss somebody On a midnight street in the summer rain If you\'re wishin\' you were with somebody \'Cause you don\'t wanna go home when it\'s closin\' time If you wanna kiss somebody, baby I got somebody in mind',
        youtube:'https://www.youtube.com/watch?v=GiAINTvAfrw',
        album_id: 12,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Burn Out',
        lyrics:'Watching cigarettes burn out \'Til all the neon gets turned out I was so on fire for you it hurts, how Fast as a cigarette can burn out',
        youtube:'https://www.youtube.com/watch?v=YBCrkFB8nvc',
        album_id: 13,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Achy Breaky Hearts',
        lyrics:'But don\'t tell my heart, my achy breaky heart I just don\'t think he\'d understand And if you tell my heart, my achy breaky heart He might blow up and kill this man Ooh',
        youtube:'https://www.youtube.com/watch?v=byQIPdHMpjc',
        album_id: 14,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Tennesse Whisky',
        lyrics:'You\'re as smooth as Tennessee whiskey You\'re as sweet as strawberry wine You\'re as warm as a glass of brandy And honey, I stay stoned on your love all the time',
        youtube:'https://www.youtube.com/watch?v=4zAThXFOy2c',
        album_id: 15,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Get Along',
        lyrics:'Get along, on down the road We\'ve got a long, long way to go Scared to live, scared to die We ain\'t perfect but we try Get along while we can Always give love the upper hand Paint a wall, learn to dance Call your mom, buy a boat Drink a beer, sing a song Make a friend, can\'t we all get along',
        youtube:'https://www.youtube.com/watch?v=-LI8X-GhFA8',
        album_id: 16,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Loud and Heavy',
        lyrics:'Loud thunder, heavy rain Thin line \'tween joy and pain It\'s a long strange trip, it\'s all insane You ain\'t never gonna be the same Living life through the night Thin line of a lightning strike Sometimes the only light When the moon is tucked away',
        youtube:'https://www.youtube.com/watch?v=8DkIPTy3KaA',
        album_id: 17,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Hangin On',
        lyrics:'Yeah I\'m hangin\' on, hangin\' on To every word you say Every move you make I\'m hangin\' on, hangin\' on Wondering what\'s up next Girl, I can\'t wait Ain\'t nothing like spinning you around the room Where everyone can see You hangin\' on, hangin\' on to me',
        youtube:'https://www.youtube.com/watch?v=CwKp6Xhy3_4',
        album_id: 18,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Drunk Me',
        lyrics:'I\'ve been sober \'cause there ain\'t no hangover like you, no, no, no Baby, can you come over I always find those words at the bottom of a hundred proof, yeah Girl, every time you do I just end up Head all messed up like the sheets where we made love I\'ve been sober since you broke my heart in two \'Cause drunk me can\'t get over you, no Can\'t get over you, oh, no, no, no I\'ve been sober \'cause there ain\'t no hangover like you, no, no, no',
        youtube:'https://www.youtube.com/watch?v=BiA-7xHM8zc',
        album_id: 19,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Best Shot',
        lyrics:'\'Cause when you smile I see the sun sink down on a coast out in California And there\'s no doubt Because of you, I\'m not the man I was before you I\'m not saying that I\'m perfect Oh \'cause girl you know I\'m not But I\'ll love you with everything I\'ve got Girl, I\'ll give you my best shot',
        youtube:'https://www.youtube.com/watch?v=25ys0vc4tTI',
        album_id: 20,
        genre_id: 2,
        audio: ''
    },
    {
        song_name:'Knife Talk',
        lyrics:'Yeah I heard Papi outside And he got the double-R droppy outside Checked the weather and it\'s gettin\' real oppy outside I\'ma drop this shit and have these p****** droppin\' like some mother****** flies\' Type of n**** that can\'t look me in the eyes I despise When I see you, better put that f*****\' pride to the side Many times, plenty times, I survived Beef is live, spoiler alert, this n**** dies',
        youtube:'https://www.youtube.com/watch?v=XPmu8MS_VjE',
        album_id: 21,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Sharing Locations',
        lyrics:'I hang with all the murderers I\'m gettin\' all the lawyers for the murderers I\'m puttin\' all my last on the murderers You don\'t wanna see me with the murderers, murderers',
        youtube:'https://www.youtube.com/watch?v=XCyIcifbOWE',
        album_id: 22,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Lonely',
        lyrics:'Lonely, lonely baby Lonely, lonely baby A lonely, lonely baby (Lonely) Lonely, lonely baby (Lonely, baby) Lonely, lonely baby A lonely, lonely baby (K)',
        youtube:'https://www.youtube.com/watch?v=pqydBaa1QR8',
        album_id: 23,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Too Easy',
        lyrics:'It’s Young Wunna and Young Wheezy, man, this shit too easy Different b**** for every season showin\’ me they cleavage I take d***** and feel relaxed, it’s like they therapeutic She text that p****, I don\’t call back so she won\’t think I need it',
        youtube:'https://www.youtube.com/watch?v=IUgMyenK3l8',
        album_id: 24,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Your Heart',
        lyrics:'I left you scarred, yeah You never be the same again, put that on God, huh I took your heart and then I tore that shit apart, huh I fucked you over, did you dirty, did you wrong, huh I did you wrong, huh, I did you wrong, huh',
        youtube:'https://www.youtube.com/watch?v=nD-Zu6aayS0',
        album_id: 25,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'2055',
        lyrics:'I just wanna slide, huh Parties in the sky like it\'s 2055, huh She said, \"Boy you nice, boy you nice\", huh Heart cold like some water and some ice, huh',
        youtube:'https://www.youtube.com/watch?v=y1xZ_kAhjMc',
        album_id: 26,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Repeat it',
        lyrics:'Stayin\' up I get no rest, rest, rest, rest (yeah, yeah, yeah) Don\'t gotta sleep, yeah Fuckin\' with bitches the best, best, best, best (best, best, best) Shawty conceited (whoa) Fuck with the gang and you dead, dead, dead, dead You should\'ve seen this (whoa, whoa) Put some dollars on your head, head, head, head, then I repeat it',
        youtube:'https://www.youtube.com/watch?v=5g4M_jwPHjg',
        album_id: 27,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Wokesha',
        lyrics:'I\'m seein\' her lookin\' like Keisha, like \"Do you love me, do you love me not?\" Damn, you hit the spot Taste like candy (candy), sweet like fruit (ooh) Wet like water, can I love on you? Withdrawals, I\'m feelin\' different, every day I need a dose Every now and thеn I\'m missin\', I got my times when I go ghost But she minе (hmm, hmm, hmm, hmm), I\'m stampin\' her Priority status, so them other b****** mad at her (too mad, ha)',
        youtube:'https://www.youtube.com/watch?v=6bN45f9NjlA',
        album_id: 28,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Jail pt.2',
        lyrics:'Guess who\'s goin\' to jail tonight? Guess who\'s goin\' to jail tonight? Guess who\'s goin\' to jail tonight? God gon\' post my bail tonight',
        youtube:'https://www.youtube.com/watch?v=7QL0A7SnSrM',
        album_id: 29,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Dream Unfold',
        lyrics:'I\'m way too lit up in that h** Heart so hard, I get that dough They want work, come get that smoke Hop out the trunk, you hear that blow That\'s your b****, come get that h** She wan\' s*** me, get that throat I\'m way-way up, don\'t give no f**** I lost my heart, like, \"Where that go?\" This ain\'t no game, I\'m in that zone No X and O\'s, no tic-tac-toe I crossed my heart, don\'t hope to die But if I do, don\'t let that go I pray my soul don\'t get that cold My jewelry freezin\' in that snow When you gon\' watch my dreams unfold That\'s the truest s*** I know',
        youtube:'https://www.youtube.com/watch?v=BVpRYDNOX0I',
        album_id: 30,
        genre_id: 3,
        audio: ''
    },
    {
        song_name:'Eres',
        lyrics:'Eres Lo que más quiero en este mundo, eso eres Mi pensamiento más profundo también eres Tan sólo dime lo que hago, aquí me tienes',
        youtube:'https://www.youtube.com/watch?v=98Akpf1ph2o',
        album_id: 31,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Como te extraño mi amor',
        lyrics:'Cómo te extraño mi amor, ¿por qué será? Me falta todo en la vida si no estás Cómo te extraño mi amor, ¿qué debo hacer? Te extraño tanto que voy a enloquecer',
        youtube:'https://www.youtube.com/watch?v=RmsICVbs8Z4',
        album_id: 32,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Mi cucu',
        lyrics:'No te metas con mi cucu (cucu) No te metas con mi cucu (cucu) Yo sé que tienes tu mujer (cucu) Así que deja mi cucu (cucu)',
        youtube:'https://www.youtube.com/watch?v=6AQSUBEkVHk',
        album_id: 33,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Amor de mis Amores',
        lyrics:'Poniendo la mano en el corazón Quisiera decirte al compás de un son Que tú eres mi vida Y no quiero a nadie más que a ti',
        youtube:'https://www.youtube.com/watch?v=GEU64HPZI8I',
        album_id: 33,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'El Viejo del Sombrerón',
        lyrics:'Dicen que es vino tinto Pero es un rojo uva mi carrito Es un ultimo modelo El siempre anda va conmigo a donde quiera voy mi carrito Por que el es mi compañero ese carrito es mi vida De el nunca he tenido quejas Cuando consigo a una chica El me lleva a donde quiera Cuando consigo a una chica El me lleva a donde quiera',
        youtube:'https://www.youtube.com/watch?v=Y4DkbHSXqEw',
        album_id: 33,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Amanete Bandido',
        lyrics:'Yo seré el viento que va Navegaré por tu oscuridadTu rocío, beso frío, que me quemará',
        youtube:'https://www.youtube.com/watch?v=lA9p_fpUxnY',
        album_id: 34,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Morena Mia',
        lyrics:'Morena mia, voy a contarte hasta diez No es el sol que te alumbra, Dos tus piernas que matan, somos tres en tu cama, Tres (hablado) Morena mia, el cuarto viene despues, Cinco tus continentes Seis las medias faenas de mis medios calientes, Sigo contando ahorita (hablado) Bien, bien, bien, bien, bien, bien',
        youtube:'https://www.youtube.com/watch?v=rDIfSaMXwNc',
        album_id: 35,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'El último adiós',
        lyrics:'Aunque vengas de rodillas y me implores, y me pidas Aunque vengas y me llores, que te absuelva y te perdone Aunque a mí me causes pena, te he tirado tus cadenas Y te dedico esta ranchera por ser el último adiós',
        youtube:'https://www.youtube.com/watch?v=jNLU_A1d_60',
        album_id: 36,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Despacito',
        lyrics:'Despacito Quiero respirar tu cuello despacito Deja que te diga cosas al oído Para que te acuerdes si no estás conmigo Despacito Quiero desnudarte a besos despacito Firmar las paredes de tu laberinto Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube) (Sube, sube) Oh',
        youtube:'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
        album_id: 37,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Con Calma',
        lyrics:'¿Cómo te llamas, baby? Desde que te vi supe que eras pa\' mí Dile a tus amigas que andamo\' ready (¡Sube!) Esto lo seguimo\' en el after party',
        youtube:'https://www.youtube.com/watch?v=DiItGE3eAyQ',
        album_id: 38,
        genre_id: 4,
        audio: ''
    },
    {
        song_name:'Shaky Shaky',
        lyrics:'Shaky, shaky, shaky, shaky, shaky, shaky, shaky Shaky, shaky, shaky, shaky, shaky, shaky, shaky Shaky, shaky, shaky, shaky, shaky, shaky, shaky Como e\', dame una vueltita otra vez Shaky, shaky, shaky, shaky, shaky, shaky, shaky Shaky, shaky, shaky, shaky, shaky, shaky, shaky Shaky, shaky, shaky, shaky, shaky, shaky, shaky Tú la ves, como hace lo suyo, tú la ves',
        youtube:'https://www.youtube.com/watch?v=aKuivabiOns',
        album_id: 39,
        genre_id: 4,
        audio: ''
    },
];

const seedSong = () => Song.bulkCreate(songData)

module.exports = seedSong