function getPortfolioHTML(){

const html=document.getElementById("preview").innerHTML

return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Portfolio</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
${html}
</body>
</html>`
}

/* HTML */

document.getElementById("downloadHTML").onclick=()=>{

const blob=new Blob([getPortfolioHTML()],{type:"text/html"})

const a=document.createElement("a")

a.href=URL.createObjectURL(blob)
a.download="portfolio.html"
a.click()

}

/* JSON */

document.getElementById("downloadJSON").onclick=()=>{

const data={

name:document.getElementById("name").value,
bio:document.getElementById("bio").value,
skills:document.getElementById("skills").value

}

const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"})

const a=document.createElement("a")

a.href=URL.createObjectURL(blob)
a.download="portfolio.json"
a.click()

}

/* ZIP */

document.getElementById("downloadZIP").onclick=async()=>{

const zip=new JSZip()

zip.file("index.html",getPortfolioHTML())

const content=await zip.generateAsync({type:"blob"})

const a=document.createElement("a")

a.href=URL.createObjectURL(content)
a.download="portfolio.zip"
a.click()

}