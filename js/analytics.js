let count=localStorage.getItem("portfolioCount") || 0

document.getElementById("portfolioCount").innerText=count

document.getElementById("generateBtn").addEventListener("click",()=>{

count++

localStorage.setItem("portfolioCount",count)

document.getElementById("portfolioCount").innerText=count

})