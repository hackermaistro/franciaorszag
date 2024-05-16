var lille=[
    {
        name:"A Lille-i Művészeti Múzeum",
        description: "A Lille-i Művészeti Múzeum, vagy ahogy a helyiek hívják, a Palais des Beaux-Arts, az egyik legnagyobb művészeti múzeum Franciaországban.A múzeum gyűjteménye számos művészeti ágat ölel fel, többek között a festészetet, a szobrászatot és a rajzolást. A múzeum rendszeresen szervez ideiglenes kiállításokat is, így mindig van valami új és érdekes látnivaló.",
        
    },
    {
        name:"A Lille-i Opera és a Ballet du Nord",
        description: "Az opera és a balett szerelmeseinek sem kell csalódniuk, ha Lille-be látogatnak. A Lille-i Opera és a Ballet du Nord számos előadást kínál, a klasszikus daraboktól a modern előadásokig."
    },
    {
        name:"La Vieille Bourse",
        description:"A városközpont egyik nevezetességeként tartják számon."
    },
    {
        name:"Citadelle de Lille",
        description:"A Lille-i Citadella a franciaországi Lille városfalának ötszögletű fellegvára. 1667 és 1670 között épült."
    },
]


var p=document.getElementById("neve")
p.innerHTML=`
<p>${lille[0].name}</p>
`
var p1=document.getElementById("tartalom")
p1.innerHTML=lille[0].description


var p=document.getElementById("neve1")
p.innerHTML=`
<p>${lille[1].name}</p>
`
var p1=document.getElementById("tartalom1")
p1.innerHTML=lille[1].description

var p=document.getElementById("neve2")
p.innerHTML=`
<p>${lille[2].name}</p>
`
var p1=document.getElementById("tartalom2")
p1.innerHTML=lille[2].description

var p=document.getElementById("neve3")
p.innerHTML=`
<p>${lille[3].name}</p>
`
var p1=document.getElementById("tartalom3")
p1.innerHTML=lille[3].description