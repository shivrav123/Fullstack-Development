let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async() => {
    let link = await getImg();
    
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImg() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch(err) {
        console.log(err);
        return "/";
    }
}