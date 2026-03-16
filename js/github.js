document.getElementById("importGithub").onclick=async()=>{

const user=document.getElementById("githubUser").value

const res=await fetch(`https://api.github.com/users/${user}/repos`)

const repos=await res.json()

const container=document.getElementById("projects")

container.innerHTML=""

repos.slice(0,6).forEach(repo=>{

const card=document.createElement("div")

card.className="project"

card.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description||"GitHub Project"}</p>
`

container.appendChild(card)

})

}