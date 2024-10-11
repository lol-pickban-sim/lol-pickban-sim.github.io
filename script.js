document.addEventListener("DOMContentLoaded", () => {

window.scrollTo(1, 0);
let currentHeroIndex = 0;

const heroes = [
    { name: 'Aatrox', categories: ['top'], smlimg: 'src/aatrox2.png', splash: 'src/aatrox.webp', selected: false },
    { name: 'Ahri', categories: ['mid'], smlimg: 'src/ahri2.png', splash: 'src/ahri.webp', selected: false },
    { name: 'Akali', categories: ['top', 'mid'], smlimg: 'src/akali2.png', splash: 'src/akali.webp', selected: false },
    { name: 'Akshan', categories: ['mid', 'bot'], smlimg: 'src/akshan2.png', splash: 'src/akshan.webp', selected: false },
    { name: 'Alistar', categories: ['sup'], smlimg: 'src/alistar2.png', splash: 'src/alistar.webp', selected: false },
    { name: 'Amumu', categories: ['jungle', 'sup'], smlimg: 'src/amumu2.png', splash: 'src/amumu.webp', selected: false },
    { name: 'Anivia', categories: ['mid'], smlimg: 'src/anivia2.png', splash: 'src/anivia.webp', selected: false },
    { name: 'Annie', categories: ['mid', 'sup'], smlimg: 'src/annie2.png', splash: 'src/annie.webp', selected: false },
    { name: 'Aphelios', categories: ['bot'], smlimg: 'src/aphelios2.png', splash: 'src/aphelios.webp', selected: false },
    { name: 'Ashe', categories: ['bot', 'sup'], smlimg: 'src/ashe2.png', splash: 'src/ashe.webp', selected: false },
    { name: 'Aurelion Sol', categories: ['mid'], smlimg: 'src/aurelionsol2.png', splash: 'src/aurelionsol.webp', selected: false },
    { name: 'Aurora', categories: ['mid','top'], smlimg: 'src/aurora2.png', splash: 'src/aurora.webp', selected: false },
    { name: 'Azir', categories: ['mid'], smlimg: 'src/azir2.png', splash: 'src/azir.webp', selected: false },
    { name: 'Bard', categories: ['sup'], smlimg: 'src/bard2.png', splash: 'src/bard.webp', selected: false },
    { name: 'Bel\'Veth', categories: ['jungle'], smlimg: 'src/belveth2.png', splash: 'src/belveth.webp', selected: false },
    { name: 'Blitzcrank', categories: ['sup'], smlimg: 'src/blitzcrank2.png', splash: 'src/blitzcrank.webp', selected: false },
    { name: 'Brand', categories: ['mid', 'sup','jungle'], smlimg: 'src/brand2.png', splash: 'src/brand.webp', selected: false },
    { name: 'Braum', categories: ['sup'], smlimg: 'src/braum2.png', splash: 'src/braum.webp', selected: false },
    { name: 'Briar', categories: ['jungle'], smlimg: 'src/briar2.png', splash: 'src/briar.webp', selected: false },
    { name: 'Caitlyn', categories: ['bot'], smlimg: 'src/caitlyn2.png', splash: 'src/caitlyn.webp', selected: false },
    { name: 'Camille', categories: ['top'], smlimg: 'src/camille2.png', splash: 'src/camille.webp', selected: false },
    { name: 'Cassiopeia', categories: ['mid'], smlimg: 'src/cassiopeia2.png', splash: 'src/cassiopeia.webp', selected: false },
    { name: 'Cho\'Gath', categories: ['top', 'mid'], smlimg: 'src/chogath2.png', splash: 'src/chogath.webp', selected: false },
    { name: 'Corki', categories: ['mid','bot'], smlimg: 'src/corki2.png', splash: 'src/corki.webp', selected: false },
    { name: 'Darius', categories: ['top'], smlimg: 'src/darius2.png', splash: 'src/darius.webp', selected: false },
    { name: 'Diana', categories: ['jungle', 'mid'], smlimg: 'src/diana2.png', splash: 'src/diana.webp', selected: false },
    { name: 'Dr. Mundo', categories: ['top', 'jungle'], smlimg: 'src/drmundo2.png', splash: 'src/drmundo.webp', selected: false },
    { name: 'Draven', categories: ['bot'], smlimg: 'src/draven2.png', splash: 'src/draven.webp', selected: false },
    { name: 'Ekko', categories: ['mid', 'jungle'], smlimg: 'src/ekko2.png', splash: 'src/ekko.webp', selected: false },
    { name: 'Elise', categories: ['jungle'], smlimg: 'src/elise2.png', splash: 'src/elise.webp', selected: false },
    { name: 'Evelynn', categories: ['jungle'], smlimg: 'src/evelynn2.png', splash: 'src/evelynn.webp', selected: false },
    { name: 'Ezreal', categories: ['bot','mid'], smlimg: 'src/ezreal2.png', splash: 'src/ezreal.webp', selected: false },
    { name: 'Fiddlesticks', categories: ['jungle', 'sup'], smlimg: 'src/fiddlesticks2.png', splash: 'src/fiddlesticks.webp', selected: false },
    { name: 'Fiora', categories: ['top'], smlimg: 'src/fiora2.png', splash: 'src/fiora.webp', selected: false },
    { name: 'Fizz', categories: ['mid'], smlimg: 'src/fizz2.png', splash: 'src/fizz.webp', selected: false },
    { name: 'Galio', categories: ['mid', 'sup','top'], smlimg: 'src/galio2.png', splash: 'src/galio.webp', selected: false },
    { name: 'Gangplank', categories: ['top'], smlimg: 'src/gangplank2.png', splash: 'src/gangplank.webp', selected: false },
    { name: 'Garen', categories: ['top'], smlimg: 'src/garen2.png', splash: 'src/garen.webp', selected: false },
    { name: 'Gnar', categories: ['top'], smlimg: 'src/gnar2.png', splash: 'src/gnar.webp', selected: false },
    { name: 'Gragas', categories: ['top', 'jungle', 'mid'], smlimg: 'src/gragas2.png', splash: 'src/gragas.webp', selected: false },
    { name: 'Graves', categories: ['jungle', 'top'], smlimg: 'src/graves2.png', splash: 'src/graves.webp', selected: false },
    { name: 'Gwen', categories: ['top'], smlimg: 'src/gwen2.png', splash: 'src/gwen.webp', selected: false },
    { name: 'Hecarim', categories: ['jungle'], smlimg: 'src/hecarim2.png', splash: 'src/hecarim.webp', selected: false },
    { name: 'Hwei', categories: ['mid','sup'], smlimg: 'src/hwei2.png', splash: 'src/hwei.webp', selected: false },
    { name: 'Heimerdinger', categories: ['top', 'sup'], smlimg: 'src/heimerdinger2.png', splash: 'src/heimerdinger.webp', selected: false },
    { name: 'Illaoi', categories: ['top'], smlimg: 'src/illaoi2.png', splash: 'src/illaoi.webp', selected: false },
    { name: 'Irelia', categories: ['top', 'mid'], smlimg: 'src/irelia2.png', splash: 'src/irelia.webp', selected: false },
    { name: 'Ivern', categories: ['jungle'], smlimg: 'src/ivern2.png', splash: 'src/ivern.webp', selected: false },
    { name: 'Janna', categories: ['sup'], smlimg: 'src/janna2.png', splash: 'src/janna.webp', selected: false },
    { name: 'Jarvan IV', categories: ['jungle'], smlimg: 'src/jarvan2.png', splash: 'src/jarvan.webp', selected: false },
    { name: 'Jax', categories: ['top'], smlimg: 'src/jax2.png', splash: 'src/jax.webp', selected: false },
    { name: 'Jayce', categories: ['top', 'mid'], smlimg: 'src/jayce2.png', splash: 'src/jayce.webp', selected: false },
    { name: 'Jhin', categories: ['bot'], smlimg: 'src/jhin2.png', splash: 'src/jhin.webp', selected: false },
    { name: 'Jinx', categories: ['bot'], smlimg: 'src/jinx2.png', splash: 'src/jinx.webp', selected: false },
    { name: 'K\'Sante', categories: ['top'], smlimg: 'src/ksante2.png', splash: 'src/ksante.webp', selected: false },
    { name: 'Kai\'Sa', categories: ['bot','mid'], smlimg: 'src/kaisa2.png', splash: 'src/kaisa.webp', selected: false },
    { name: 'Kalista', categories: ['bot'], smlimg: 'src/kalista2.png', splash: 'src/kalista.webp', selected: false },
    { name: 'Karma', categories: ['sup', 'mid'], smlimg: 'src/karma2.png', splash: 'src/karma.webp', selected: false },
    { name: 'Karthus', categories: ['mid', 'bot', 'jungle'], smlimg: 'src/karthus2.png', splash: 'src/karthus.webp', selected: false },
    { name: 'Kassadin', categories: ['mid'], smlimg: 'src/kassadin2.png', splash: 'src/kassadin.webp', selected: false },
    { name: 'Katarina', categories: ['mid'], smlimg: 'src/katarina2.png', splash: 'src/katarina.webp', selected: false },
    { name: 'Kayle', categories: ['top', 'mid'], smlimg: 'src/kayle2.png', splash: 'src/kayle.webp', selected: false },
    { name: 'Kayn', categories: ['jungle'], smlimg: 'src/kayn2.png', splash: 'src/kayn.webp', selected: false },
    { name: 'Kennen', categories: ['top'], smlimg: 'src/kennen2.png', splash: 'src/kennen.webp', selected: false },
    { name: 'Kha\'Zix', categories: ['jungle'], smlimg: 'src/khazix2.png', splash: 'src/khazix.webp', selected: false },
    { name: 'Kindred', categories: ['jungle'], smlimg: 'src/kindred2.png', splash: 'src/kindred.webp', selected: false },
    { name: 'Kled', categories: ['top'], smlimg: 'src/kled2.png', splash: 'src/kled.webp', selected: false },
    { name: 'Kog\'Maw', categories: ['bot'], smlimg: 'src/kogmaw2.png', splash: 'src/kogmaw.webp', selected: false },
    { name: 'LeBlanc', categories: ['mid'], smlimg: 'src/leblanc2.png', splash: 'src/leblanc.webp', selected: false },
    { name: 'Lee Sin', categories: ['jungle'], smlimg: 'src/leesin2.png', splash: 'src/leesin.webp', selected: false },
    { name: 'Leona', categories: ['sup'], smlimg: 'src/leona2.png', splash: 'src/leona.webp', selected: false },
    { name: 'Lillia', categories: ['jungle'], smlimg: 'src/lillia2.png', splash: 'src/lillia.webp', selected: false },
    { name: 'Lissandra', categories: ['mid'], smlimg: 'src/lissandra2.png', splash: 'src/lissandra.webp', selected: false },
    { name: 'Lucian', categories: ['bot','mid'], smlimg: 'src/lucian2.png', splash: 'src/lucian.webp', selected: false },
    { name: 'Lulu', categories: ['sup'], smlimg: 'src/lulu2.png', splash: 'src/lulu.webp', selected: false },
    { name: 'Lux', categories: ['mid', 'sup'], smlimg: 'src/lux2.png', splash: 'src/lux.webp', selected: false },
    { name: 'Malphite', categories: ['top', 'sup'], smlimg: 'src/malphite2.png', splash: 'src/malphite.webp', selected: false },
    { name: 'Malzahar', categories: ['mid'], smlimg: 'src/malzahar2.png', splash: 'src/malzahar.webp', selected: false },
    { name: 'Maokai', categories: ['top', 'sup', 'jungle'], smlimg: 'src/maokai2.png', splash: 'src/maokai.webp', selected: false },
    { name: 'Master Yi', categories: ['jungle'], smlimg: 'src/masteryi2.png', splash: 'src/masteryi.webp', selected: false },
    { name: 'Milio', categories: ['sup'], smlimg: 'src/milio2.png', splash: 'src/milio.webp', selected: false },
    { name: 'Miss Fortune', categories: ['bot'], smlimg: 'src/missfortune2.png', splash: 'src/missfortune.webp', selected: false },
    { name: 'Mordekaiser', categories: ['top'], smlimg: 'src/mordekaiser2.png', splash: 'src/mordekaiser.webp', selected: false },
    { name: 'Morgana', categories: ['mid', 'sup','jungle'], smlimg: 'src/morgana2.png', splash: 'src/morgana.webp', selected: false },
    { name: 'Nami', categories: ['sup'], smlimg: 'src/nami2.png', splash: 'src/nami.webp', selected: false },
    { name: 'Naafiri', categories: ['mid'], smlimg: 'src/naafiri2.png', splash: 'src/naafiri.webp', selected: false },
    { name: 'Nasus', categories: ['top','mid'], smlimg: 'src/nasus2.png', splash: 'src/nasus.webp', selected: false },
    { name: 'Nautilus', categories: ['sup'], smlimg: 'src/nautilus2.png', splash: 'src/nautilus.webp', selected: false },
    { name: 'Neeko', categories: ['mid', 'sup'], smlimg: 'src/neeko2.png', splash: 'src/neeko.webp', selected: false },
    { name: 'Nidalee', categories: ['jungle', 'mid'], smlimg: 'src/nidalee2.png', splash: 'src/nidalee.webp', selected: false },
    { name: 'Nilah', categories: ['bot'], smlimg: 'src/nilah2.png', splash: 'src/nilah.webp', selected: false },
    { name: 'Nocturne', categories: ['jungle'], smlimg: 'src/nocturne2.png', splash: 'src/nocturne.webp', selected: false },
    { name: 'Nunu & Willump', categories: ['jungle'], smlimg: 'src/nunu2.png', splash: 'src/nunu.webp', selected: false },
    { name: 'Olaf', categories: ['top', 'jungle'], smlimg: 'src/olaf2.png', splash: 'src/olaf.webp', selected: false },
    { name: 'Orianna', categories: ['mid'], smlimg: 'src/orianna2.png', splash: 'src/orianna.webp', selected: false },
    { name: 'Ornn', categories: ['top'], smlimg: 'src/ornn2.png', splash: 'src/ornn.webp', selected: false },
    { name: 'Pantheon', categories: ['top', 'mid'], smlimg: 'src/pantheon2.png', splash: 'src/pantheon.webp', selected: false },
    { name: 'Poppy', categories: ['top', 'jungle', 'sup'], smlimg: 'src/poppy2.png', splash: 'src/poppy.webp', selected: false },
    { name: 'Pyke', categories: ['sup'], smlimg: 'src/pyke2.png', splash: 'src/pyke.webp', selected: false },
    { name: 'Qiyana', categories: ['mid', 'jungle'], smlimg: 'src/qiyana2.png', splash: 'src/qiyana.webp', selected: false },
    { name: 'Quinn', categories: ['top'], smlimg: 'src/quinn2.png', splash: 'src/quinn.webp', selected: false },
    { name: 'Rakan', categories: ['sup'], smlimg: 'src/rakan2.png', splash: 'src/rakan.webp', selected: false },
    { name: 'Rammus', categories: ['jungle'], smlimg: 'src/rammus2.png', splash: 'src/rammus.webp', selected: false },
    { name: 'Rek\'Sai', categories: ['jungle'], smlimg: 'src/reksai2.png', splash: 'src/reksai.webp', selected: false },
    { name: 'Rell', categories: ['sup'], smlimg: 'src/rell2.png', splash: 'src/rell.webp', selected: false },
    { name: 'Renata Glasc', categories: ['sup'], smlimg: 'src/renataglasc2.png', splash: 'src/renataglasc.webp', selected: false },
    { name: 'Renekton', categories: ['top'], smlimg: 'src/renekton2.png', splash: 'src/renekton.webp', selected: false },
    { name: 'Rengar', categories: ['jungle'], smlimg: 'src/rengar2.png', splash: 'src/rengar.webp', selected: false },
    { name: 'Riven', categories: ['top'], smlimg: 'src/riven2.png', splash: 'src/riven.webp', selected: false },
    { name: 'Rumble', categories: ['top', 'sup'], smlimg: 'src/rumble2.png', splash: 'src/rumble.webp', selected: false },
    { name: 'Ryze', categories: ['mid'], smlimg: 'src/ryze2.png', splash: 'src/ryze.webp', selected: false },
    { name: 'Samira', categories: ['bot'], smlimg: 'src/samira2.png', splash: 'src/samira.webp', selected: false },
    { name: 'Sejuani', categories: ['jungle'], smlimg: 'src/sejuani2.png', splash: 'src/sejuani.webp', selected: false },
    { name: 'Senna', categories: ['bot', 'sup'], smlimg: 'src/senna2.png', splash: 'src/senna.webp', selected: false },
    { name: 'Seraphine', categories: ['mid', 'bot', 'sup'], smlimg: 'src/seraphine2.png', splash: 'src/seraphine.webp', selected: false },
    { name: 'Sett', categories: ['top', 'sup'], smlimg: 'src/sett2.png', splash: 'src/sett.webp', selected: false },
    { name: 'Smolder', categories: ['top', 'bot','mid'], smlimg: 'src/smolder2.png', splash: 'src/smolder.webp', selected: false },
    { name: 'Shaco', categories: ['jungle', 'sup'], smlimg: 'src/shaco2.png', splash: 'src/shaco.webp', selected: false },
    { name: 'Shen', categories: ['top', 'sup'], smlimg: 'src/shen2.png', splash: 'src/shen.webp', selected: false },
    { name: 'Shyvana', categories: ['jungle'], smlimg: 'src/shyvana2.png', splash: 'src/shyvana.webp', selected: false },
    { name: 'Singed', categories: ['top'], smlimg: 'src/singed2.png', splash: 'src/singed.webp', selected: false },
    { name: 'Sion', categories: ['top'], smlimg: 'src/sion2.png', splash: 'src/sion.webp', selected: false },
    { name: 'Sivir', categories: ['bot'], smlimg: 'src/sivir2.png', splash: 'src/sivir.webp', selected: false },
    { name: 'Skarner', categories: ['jungle','top'], smlimg: 'src/skarner2.png', splash: 'src/skarner.webp', selected: false },
    { name: 'Sona', categories: ['sup'], smlimg: 'src/sona2.png', splash: 'src/sona.webp', selected: false },
    { name: 'Soraka', categories: ['sup'], smlimg: 'src/soraka2.png', splash: 'src/soraka.webp', selected: false },
    { name: 'Swain', categories: ['mid', 'sup'], smlimg: 'src/swain2.png', splash: 'src/swain.webp', selected: false },
    { name: 'Sylas', categories: ['mid'], smlimg: 'src/sylas2.png', splash: 'src/sylas.webp', selected: false },
    { name: 'Syndra', categories: ['mid'], smlimg: 'src/syndra2.png', splash: 'src/syndra.webp', selected: false },
    { name: 'Tahm Kench', categories: ['top', 'sup'], smlimg: 'src/tahmkench2.png', splash: 'src/tahmkench.webp', selected: false },
    { name: 'Taliyah', categories: ['mid', 'jungle'], smlimg: 'src/taliyah2.png', splash: 'src/taliyah.webp', selected: false },
    { name: 'Talon', categories: ['mid', 'jungle'], smlimg: 'src/talon2.png', splash: 'src/talon.webp', selected: false },
    { name: 'Taric', categories: ['sup'], smlimg: 'src/taric2.png', splash: 'src/taric.webp', selected: false },
    { name: 'Teemo', categories: ['top'], smlimg: 'src/teemo2.png', splash: 'src/teemo.webp', selected: false },
    { name: 'Thresh', categories: ['sup'], smlimg: 'src/thresh2.png', splash: 'src/thresh.webp', selected: false },
    { name: 'Tristana', categories: ['bot','mid'], smlimg: 'src/tristana2.png', splash: 'src/tristana.webp', selected: false },
    { name: 'Trundle', categories: ['top', 'jungle'], smlimg: 'src/trundle2.png', splash: 'src/trundle.webp', selected: false },
    { name: 'Tryndamere', categories: ['top'], smlimg: 'src/tryndamere2.png', splash: 'src/tryndamere.webp', selected: false },
    { name: 'Twisted Fate', categories: ['mid','top'], smlimg: 'src/twistedfate2.png', splash: 'src/twistedfate.webp', selected: false },
    { name: 'Twitch', categories: ['bot', 'jungle'], smlimg: 'src/twitch2.png', splash: 'src/twitch.webp', selected: false },
    { name: 'Udyr', categories: ['top', 'jungle'], smlimg: 'src/udyr2.png', splash: 'src/udyr.webp', selected: false },
    { name: 'Urgot', categories: ['top'], smlimg: 'src/urgot2.png', splash: 'src/urgot.webp', selected: false },
    { name: 'Varus', categories: ['bot'], smlimg: 'src/varus2.png', splash: 'src/varus.webp', selected: false },
    { name: 'Vayne', categories: ['bot', 'top'], smlimg: 'src/vayne2.png', splash: 'src/vayne.webp', selected: false },
    { name: 'Veigar', categories: ['mid'], smlimg: 'src/veigar2.png', splash: 'src/veigar.webp', selected: false },
    { name: 'Vel\'Koz', categories: ['mid', 'sup'], smlimg: 'src/velkoz2.png', splash: 'src/velkoz.webp', selected: false },
    { name: 'Vex', categories: ['mid'], smlimg: 'src/vex2.png', splash: 'src/vex.webp', selected: false },
    { name: 'Vi', categories: ['jungle'], smlimg: 'src/vi2.png', splash: 'src/vi.webp', selected: false },
    { name: 'Viego', categories: ['jungle'], smlimg: 'src/viego2.png', splash: 'src/viego.webp', selected: false },
    { name: 'Viktor', categories: ['mid'], smlimg: 'src/viktor2.png', splash: 'src/viktor.webp', selected: false },
    { name: 'Vladimir', categories: ['top', 'mid'], smlimg: 'src/vladimir2.png', splash: 'src/vladimir.webp', selected: false },
    { name: 'Volibear', categories: ['top', 'jungle'], smlimg: 'src/volibear2.png', splash: 'src/volibear.webp', selected: false },
    { name: 'Warwick', categories: ['jungle'], smlimg: 'src/warwick2.png', splash: 'src/warwick.webp', selected: false },
    { name: 'Wukong', categories: ['top', 'jungle'], smlimg: 'src/wukong2.png', splash: 'src/wukong.webp', selected: false },
    { name: 'Xayah', categories: ['bot'], smlimg: 'src/xayah2.png', splash: 'src/xayah.webp', selected: false },
    { name: 'Xerath', categories: ['mid'], smlimg: 'src/xerath2.png', splash: 'src/xerath.webp', selected: false },
    { name: 'Xin Zhao', categories: ['jungle'], smlimg: 'src/xinzhao2.png', splash: 'src/xinzhao.webp', selected: false },
    { name: 'Yasuo', categories: ['mid', 'bot','top'], smlimg: 'src/yasuo2.png', splash: 'src/yasuo.webp', selected: false },
    { name: 'Yone', categories: ['mid', 'top'], smlimg: 'src/yone2.png', splash: 'src/yone.webp', selected: false },
    { name: 'Yorick', categories: ['top'], smlimg: 'src/yorick2.png', splash: 'src/yorick.webp', selected: false },
    { name: 'Yuumi', categories: ['sup'], smlimg: 'src/yuumi2.png', splash: 'src/yuumi.webp', selected: false },
    { name: 'Zac', categories: ['jungle','top'], smlimg: 'src/zac2.png', splash: 'src/zac.webp', selected: false },
    { name: 'Zed', categories: ['mid'], smlimg: 'src/zed2.png', splash: 'src/zed.webp', selected: false },
    { name: 'Zeri', categories: ['bot'], smlimg: 'src/zeri2.png', splash: 'src/zeri.webp', selected: false },
    { name: 'Ziggs', categories: ['mid', 'bot'], smlimg: 'src/ziggs2.png', splash: 'src/ziggs.webp', selected: false },
    { name: 'Zilean', categories: ['sup'], smlimg: 'src/zilean2.png', splash: 'src/zilean.webp', selected: false },
    { name: 'Zoe', categories: ['mid'], smlimg: 'src/zoe2.png', splash: 'src/zoe.webp', selected: false },
    { name: 'Zyra', categories: ['sup','jungle'], smlimg: 'src/zyra2.png', splash: 'src/zyra.webp', selected: false }
];

console.log(heroes.length);


let heroOrder;

heroOrder = [
        0, 5, 1, 6, 2, 7, 0, 0, 1, 1, 2, 2, 8, 3, 9, 4, 3, 3, 4, 4
    ];

const heroGrid = document.querySelector('.hero-grid');
const categories = document.querySelectorAll('.hero-categories button');
let banSlots = document.querySelectorAll('.small-div');
let pickSlots1 = document.querySelectorAll('.large-div2');
let pickSlots2 = document.querySelectorAll('.large-div');
let selectedHero = null;

const searchInput = document.getElementById('search');
let blueTeamIndicator;
let redTeamIndicator;
blueTeamIndicator = document.getElementById('blueTeamIndicator2');
redTeamIndicator = document.getElementById('redTeamIndicator2');


searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    filterHeroes(query);
});

const loadHeroes = (category) => {
     const heroesToDisplay = category === 'all' ? heroes : heroes.filter(hero => hero.categories.includes(category));
     displayHeroes(heroesToDisplay);
};

const filterHeroes = (query) => {
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(query));
    displayHeroes(filteredHeroes);
};

const displayHeroes = (heroesToDisplay) => {
    heroGrid.innerHTML = '';
    heroesToDisplay.forEach(hero => {
        const heroDiv = document.createElement('div');
        heroDiv.classList.add('hero');
        heroDiv.dataset.hero = hero.name;
        heroDiv.dataset.categories = hero.categories.join(',');
        if (hero.selected === true) {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.smlimg}" alt="${hero.name}" style="-webkit-filter: grayscale(1);">`;
        } else {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.smlimg}" alt="${hero.name}" style="cursor: pointer;">`;
            heroDiv.addEventListener('mouseover', () =>{
                if(inDraft){
                    let targetDiv;
                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        return;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "url('" + hero.splash + "')";
                        targetDiv.style.backgroundSize = "cover";
                        targetDiv.style.backgroundPosition = "top";
                        targetDiv.style.backgroundRepeat = "no-repeat";
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "url('" + hero.splash + "')";
                        targetDiv.style.backgroundSize = "cover";
                        targetDiv.style.backgroundPosition = "top";
                        targetDiv.style.backgroundRepeat = "no-repeat";
                    }
                }
            });
            heroDiv.addEventListener('mouseout', () =>{
                if(inDraft){
                    let targetDiv;
                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        return;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = ``;
                        targetDiv.style.backgroundImage = "";
                    }
                }
            });
            heroDiv.addEventListener('click', () => {
                selectedHero = hero;
                if(inDraft){
                    let targetDiv;
                    startTimer();
                    if(currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4 || currentHeroIndex == 6 ||  currentHeroIndex == 7 ||currentHeroIndex == 10 || currentHeroIndex == 11 || currentHeroIndex == 13 || currentHeroIndex == 15|| currentHeroIndex == 18){
                        blueTeamIndicator.style.visibility = 'hidden';
                        redTeamIndicator.style.visibility = 'visible';
                    }
                    else{
                        blueTeamIndicator.style.visibility = 'visible';
                        redTeamIndicator.style.visibility = 'hidden';
                    }

                    if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4||currentHeroIndex == 11|| currentHeroIndex == 13) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-red-small');
                    } else if(currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12||currentHeroIndex == 14){
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-blue-small');
                    } else if(currentHeroIndex == 5 || currentHeroIndex == 8 || currentHeroIndex == 9 || currentHeroIndex == 16||currentHeroIndex == 17){
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            targetDiv.classList.add('glow-blue');
                        }
                    } else{
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            targetDiv.classList.add('glow-red');
                        }
                    }

                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                                                <div class="ban-indicator"></div>`;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}"><div class="gradient-overlay"></div><div class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</div>`;
                        resetDivs(0);
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}"><div class="gradient-overlay"></div><div class="pick-slot-text">${selectedHero.name}</div>`;
                        resetDivs(1);
                    }
                    targetDiv.classList.remove('glow-blue');
                    targetDiv.classList.remove('glow-red');
                    targetDiv.classList.remove('glow-blue-small');
                    targetDiv.classList.remove('glow-red-small');
                    targetDiv.dataset.hero = selectedHero.name;

                    if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4||currentHeroIndex == 11|| currentHeroIndex == 13) {
                    } else if(currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12||currentHeroIndex == 14){
                    } else if(currentHeroIndex == 5 || currentHeroIndex == 8 || currentHeroIndex == 9 || currentHeroIndex == 16||currentHeroIndex == 17){
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            expandDiv(targetDiv,0);
                        }
                    } else{
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            expandDiv(targetDiv,1);
                        }
                    }
                
                disableHeroInGrid(selectedHero);
                currentHeroIndex++;
                if (currentHeroIndex >= heroOrder.length){ 
                    hideTimer();
                    inDraft = false;
                    redTeamIndicator.style.visibility = 'hidden';
                    blueTeamIndicator.style.visibility = 'hidden';
                    disableDraftMode();
                    return;
                }
            }
            });
            
        }
        heroGrid.appendChild(heroDiv);
    });
};


loadHeroes('all');
globalCat = 'all';


categories.forEach(button => {
    button.addEventListener('click', () => {
        loadHeroes(button.dataset.category);
        globalCat = button.dataset.category;
    });
});

banSlots.forEach(slot => {
    const banSlotClickListener = () => {
        if (selectedHero) {
            slot.innerHTML = `
                <img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                <div class="ban-indicator"></div>
                <span class="remove-sml">✕</span>
            `;
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', banSlotClickListener); 
            });
            disableHeroInGrid(selectedHero);
            slot.removeEventListener('click', banSlotClickListener); 
        }
    }
    slot.addEventListener('click', banSlotClickListener);
});

function expandDiv(element, team) {
    let allDivs;
    if(team == 1){
        allDivs = document.querySelectorAll('.large-div');
    }
    else{
        allDivs = document.querySelectorAll('.large-div2');
    }
    allDivs.forEach(div => {
        if(div != element){
        const pickSlotText = div.querySelector('.pick-slot-text');
        setTimeout(() => {
            div.style.height = '15.5vh';
        }, 2000);
        }
    });
    const pickSlotText = element.querySelector('.pick-slot-text');

    setTimeout(() => {
        element.style.height = '28vh';
    }, 2000);
    
}
function resetDivs(team) {
    let allDivs
    if(team == 1)
        allDivs = document.querySelectorAll('.large-div');
    else
        allDivs = document.querySelectorAll('.large-div2');

    allDivs.forEach(div => {
        const pickSlotText = div.querySelector('.pick-slot-text');
        setTimeout(() => {
            div.style.height = '18vh';
        }, 2000);
        
    });
}

pickSlots1.forEach(slot => {
    const slotClickListener = () => {
        if (selectedHero) {
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                <div class="gradient-overlay"></div>
                <span class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</span>
                <span class="remove">✕</span>`;
            var img = slot.querySelector('img');
            img.onload = function() {
                img.classList.add('animate');
            };
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);

                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); 
            });
            disableHeroInGrid(selectedHero);

            slot.removeEventListener('click', slotClickListener); 
        }
    };

    slot.addEventListener('click', slotClickListener);
})

pickSlots2.forEach(slot => {
    const slotClickListener = () => {
        if (selectedHero) {
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                <div class="gradient-overlay"></div>
                <span class="pick-slot-text">${selectedHero.name}</span>
                <span class="remove">✕</span>`;
            var img = slot.querySelector('img');
            img.onload = function() {
                img.classList.add('animate');
            };
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);

                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); // Re-attach the click listener
            });
            disableHeroInGrid(selectedHero);

            slot.removeEventListener('click', slotClickListener); // Remove the click listener
        }
    };

    slot.addEventListener('click', slotClickListener);
});


const disableHeroInGrid = (heroName) => {
    heroName.selected = true;
    selectedHero=null;
    loadHeroes(globalCat);
};

const enableHeroInGrid = (heroName) => {
    const foundHero = heroes.find(hero => hero.name === heroName);
    foundHero.selected = false;
    loadHeroes(globalCat);
};



let inDraft = false;
const draftButton = document.getElementById('draft-button');
const icon = document.getElementById('icon');

const draftModeEnableClick = () => {
    enableDraftMode();
}

draftButton.addEventListener('click', draftModeEnableClick);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        disableDraftMode();
    }
});


function disableDraftMode() {
    hideTimer();
    pickSlots2 = document.querySelectorAll('.large-div');
    pickSlots1 = document.querySelectorAll('.large-div2');
    banSlots = document.querySelectorAll('.small-div');
    inDraft = false;

    pickSlots2.forEach(slot => {
        const slotClickListener = () => {
            if (selectedHero) {
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                    <div class="gradient-overlay"></div>
                    <span class="pick-slot-text">${selectedHero.name}</span>
                    <span class="remove">✕</span>`;
                var img = slot.querySelector('img');
                img.onload = function() {
                    img.classList.add('animate');
                };
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', slotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                slot.removeEventListener('click', slotClickListener); 
            }
        };
        
        if (slot.dataset.hero != null) {
            var span = document.createElement('span');
            span.className = 'remove';
            span.innerHTML = '✕';
            slot.appendChild(span);
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); 
            });
        }
        else {
            slot.addEventListener('click', slotClickListener); 
        }

        slot.classList.remove('glow-red');
    });

    pickSlots1.forEach(slot => {
        const slotClickListener = () => {
            if (selectedHero) {
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                    <span class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</span>
                    <div class="gradient-overlay"></div>
                    <span class="remove">✕</span>`;
                var img = slot.querySelector('img');
                img.onload = function() {
                    img.classList.add('animate');
                };
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', slotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                slot.removeEventListener('click', slotClickListener); 
            }
        };
        
        if (slot.dataset.hero != null) {
            var span = document.createElement('span');
            span.className = 'remove';
            span.innerHTML = '✕';
            slot.appendChild(span);
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); // Re-attach the click listener
            });
        }
        else {
            slot.addEventListener('click', slotClickListener); 
        }
        slot.classList.remove('glow-blue');
    });

    banSlots.forEach(slot => {
        const banSlotClickListener = () => {
            if (selectedHero) {
                slot.innerHTML = `
                    <img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                    <div class="ban-indicator"></div>
                    <span class="remove-sml">✕</span>
                `;
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', banSlotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                slot.removeEventListener('click', banSlotClickListener); 
            }
        };

        if (slot.dataset.hero != null) {
            const foundHero = heroes.find(hero => hero.name === slot.dataset.hero);
            slot.innerHTML = ``;
            slot.innerHTML = `
                <img title="${foundHero.name}" src="${foundHero.smlimg}" alt="${foundHero.name}">
                <div class="ban-indicator"></div>
                <span class="remove-sml">✕</span>
            `;
            slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', banSlotClickListener); 
            });
        }
        else {
            slot.addEventListener('click', banSlotClickListener); 
        }
        slot.classList.remove('glow-blue-small');
        slot.classList.remove('glow-red-small');
        redTeamIndicator.style.visibility = 'hidden';
        blueTeamIndicator.style.visibility = 'hidden';
    });
}
function enableDraftMode() {
    currentHeroIndex = 0;
    const largeDivs = document.querySelectorAll('.large-div');
    const largeDiv2s = document.querySelectorAll('.large-div2');
    const smallDivs = document.querySelectorAll('.small-div');

    largeDivs.forEach(div => div.innerHTML = '');
    largeDiv2s.forEach(div => div.innerHTML = '');
    smallDivs.forEach(div => div.innerHTML = '');

    largeDivs.forEach(div => div.removeAttribute('data-hero'));
    largeDiv2s.forEach(div => div.removeAttribute('data-hero'));
    smallDivs.forEach(div => div.removeAttribute('data-hero'));
    if(screen.width<=820)
        smallDivs[10].classList.add('glow-blue-small');
    else
        smallDivs[0].classList.add('glow-blue-small');

    banSlots.forEach(slot => slot.replaceWith(slot.cloneNode(true)));
    pickSlots1.forEach(slot => slot.replaceWith(slot.cloneNode(true)));
    pickSlots2.forEach(slot => slot.replaceWith(slot.cloneNode(true)));

    heroes.forEach(hero => {
        hero.selected = false;
    });

    loadHeroes(globalCat);

    inDraft = true;
    draftButton.style.visibility = 'hidden';

    blueTeamIndicator.style.visibility = 'visible';
    redTeamIndicator.style.visibility = 'hidden';
    timerContainer.style.visibility = 'visible';
    if(countdownText)
        countdownText.style.visibility = 'visible'; 
    startTimer(); 
}
    
let countdownBar;
let timerContainer;
let countdownText = null;

    countdownBar = document.getElementById('countdown-bar2');
    timerContainer = document.getElementById('timer-container2');
    countdownText = document.getElementById('countdown-text');

let totalTime = 30; 
let currentTime = totalTime;
const updateInterval = 10; 
const initialWidth = 100; 
let timerInterval;

function updateCountdown(callback) {
    if (currentTime <= 0) {
        clearInterval(timerInterval);
        currentTime = 0;
        countdownBar.style.width = '0%'; 
        if(countdownText)
            countdownText.textContent = '0'; 
        if(callback){
            callback();
        }
    }

    currentTime -= updateInterval / 1000; 
    let widthPercentage = (currentTime / totalTime) * initialWidth;
    countdownBar.style.width = widthPercentage + '%';
    if(countdownText)
        countdownText.textContent = Math.ceil(currentTime); 
}

function startTimer() {
    let targetDiv;
    defaultCallback = () => {
        console.log(1)
        if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4 || currentHeroIndex == 13) {
            blueTeamIndicator.style.visibility = 'hidden';
            redTeamIndicator.style.visibility = 'visible';
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-red-small');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12 || currentHeroIndex == 14) {
            blueTeamIndicator.style.visibility = 'visible';
            redTeamIndicator.style.visibility = 'hidden';
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-blue-small');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 5) {
            blueTeamIndicator.style.visibility = 'visible';
            redTeamIndicator.style.visibility = 'hidden';
            targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-blue');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 15) {
            blueTeamIndicator.style.visibility = 'hidden';
            redTeamIndicator.style.visibility = 'visible';
            targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-red');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } 
    };
    currentTime = totalTime;
    countdownBar.style.width = initialWidth + '%'; 
    if(countdownText)
        countdownText.textContent = totalTime; 
    clearInterval(timerInterval); 
    timerInterval = setInterval(() => updateCountdown(defaultCallback), updateInterval); 
}

function hideTimer(){
    timerContainer.style.visibility = 'hidden';
    if(countdownText)
        countdownText.style.visibility = 'hidden'; 
    clearInterval(timerInterval);
    draftButton.style.visibility= 'visible';
    if(screen.width>820){
        resetDivs(1);
        resetDivs(0);
    }
}
});