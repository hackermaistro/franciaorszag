var stras=[
    {
        name:"Strasbourgi katedrális",
        description: "Ma már nehéz elképzelni, de Strasbourg katedrálisa több mint 200 éven át büszkélkedhetett a világ legmagasabb épülete címmel. A trónról 1874-ben taszította le a hamburgi Szent Miklós-templom. A Strasbourg városa fölé magasodó katedrális ugyanakkor még ma is lenyűgöző látványt nyújt és tiszta időben akár a 30 km-re húzódó Vogézek hegyláncról is látni lehet. A templomot eredetileg román stílusban kezdték el építeni, közel hatvan évvel később azonban – alkalmazkodva a kor uralkodó stílusirányzatához – gótikus stílusban fejeződött be az építkezés. A katedrális ingyenes látogatható, a kilátószintre viszont csak külön jeggyel mehetünk fel.",
        
    },
    {
        name:"Barrage Vauban",
        description: "A Vauban-gát 1688 és 1700 között épült XIV. Lajos király Vauban nevű hadmérnökének és hadi építészének tervei alapján. Az épület elsődleges funkciója az volt, hogy egy esetleges támadás esetén az Ill-folyó vízszintjének megemelésével elárasszák a várostól délre eső területeket. Ma gyalogos hídként működik, a tetőteraszról pedig meseszép kilátás nyílik a közeli Ponts Couverts hídjaira és az óvárosra."
    },
    {
        name:"Európai Parlament",
        description:"Az óvárostól távol, az európai negyedben egy teljesen más hangulat fogad minket. A modern üvegépületek között megtaláljuk a Európa Tanács és az Emberi Jogok Európai Bíróságának székhelyét, valamint az Európai Parlament ikonikus 60 m magas toronyházát is."
    },
    {
        name:"Neustadt",
        description:"Itt találhatóak az egyetem és a bíróság grandiózus épületei, valamint Palais du Rhin (korábbi császári palota) is. A kerület egyébként 2017 óta szintén világörökségi helyszín."
    },

]



var p=document.getElementById("neve")
p.innerHTML=`
<p>${stras[0].name}</p>
`
var p1=document.getElementById("tartalom")
p1.innerHTML=stras[0].description



var p=document.getElementById("neve1")
p.innerHTML=`
<p>${stras[1].name}</p>
`
var p1=document.getElementById("tartalom1")
p1.innerHTML=stras[1].description



var p=document.getElementById("neve2")
p.innerHTML=`
<p>${stras[2].name}</p>
`
var p1=document.getElementById("tartalom2")
p1.innerHTML=stras[2].description


var p=document.getElementById("neve3")
p.innerHTML=`
<p>${stras[3].name}</p>
`
var p1=document.getElementById("tartalom3")
p1.innerHTML=stras[3].description