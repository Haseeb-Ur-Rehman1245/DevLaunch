const Templates={

minimal:(data)=>`

<div class="hero">
<img src="${data.avatar}">
<h1>${data.name}</h1>
<p>${data.bio}</p>
</div>

<div class="skills">
${data.skills.map(s=>`<span class="skill">${s}</span>`).join("")}
</div>

<div class="projects">
${data.projects}
</div>

`,

glass:(data)=>`

<div class="hero" style="backdrop-filter:blur(10px)">
<img src="${data.avatar}">
<h1>${data.name}</h1>
<p>${data.bio}</p>
</div>

<div class="skills">
${data.skills.map(s=>`<span class="skill">${s}</span>`).join("")}
</div>

<div class="projects">
${data.projects}
</div>

`,

github:(data)=>`

<div class="hero">
<img src="${data.avatar}">
<h1>${data.name}</h1>
<p>${data.bio}</p>
</div>

<h3>Skills</h3>

<ul>
${data.skills.map(s=>`<li>${s}</li>`).join("")}
</ul>

<h3>Projects</h3>

<div class="projects">
${data.projects}
</div>

`

}