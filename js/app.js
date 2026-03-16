const preview=document.getElementById("preview")

const templateSelector=document.getElementById("templateSelector")

const avatarInput=document.getElementById("avatar")
const avatarPreview=document.getElementById("avatarPreview")

let avatarData="assets/avatar.png"

avatarInput.addEventListener("change",()=>{

const file=avatarInput.files[0]

const reader=new FileReader()

reader.onload=function(){

avatarData=reader.result
avatarPreview.src=avatarData

}

reader.readAsDataURL(file)

})

function collectData(){

let projectsHTML=""

document.querySelectorAll("#projects .project").forEach(p=>{
projectsHTML+=p.outerHTML
})

return{

name:document.getElementById("name").value,
bio:document.getElementById("bio").value,
skills:document.getElementById("skills").value.split(",").map(s=>s.trim()),
projects:projectsHTML,
avatar:avatarData

}

}

document.getElementById("generateBtn").onclick=()=>{

const data=collectData()

preview.innerHTML=Templates[templateSelector.value](data)

}

document.getElementById("addProject").onclick=()=>{

const title=prompt("Project title")
const desc=prompt("Description")

const card=document.createElement("div")

card.className="project"

card.innerHTML=`<h3>${title}</h3><p>${desc}</p>`

card.draggable=true

document.getElementById("projects").appendChild(card)

}