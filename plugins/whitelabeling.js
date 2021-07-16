let db  = {
    blue: "orange",
    logo: 'url(/logo.jpg) no-repeat center center'

}


let root = document.documentElement;


let property = Object.keys(db)


for(let index in property) {
    let prop = property[index]

    root.style.setProperty(`--${prop}`, db[prop]);
}


