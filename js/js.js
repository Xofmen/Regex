let doc = document

let form = doc.forms.form

let a = []
let b = []
let c = []


function kraft(arr,box){
    let get = doc.querySelector(`.${box}`)
    for(let i of arr){
        let div = doc.createElement('div')
        let div1 = doc.createElement('div')
        let h1 = doc.createElement('h1')
        h1.innerHTML = "Age"
        let h2 = doc.createElement('h2')
        h2.innerHTML = i.age
        div.append(i.name)
        div1.append(h1)
        div1.append(h2)
        get.append(div)
        div.append(div1)
        div.classList.add('osnova')
        div1.classList.add('color')
    }
    let clear = doc.querySelectorAll('#clear')
    clear.forEach(i=>{
        i.value = ''
    })
}

form.onsubmit = (event) => {
    event.preventDefault()
    let names = doc.querySelector('.name')
    let ages = doc.querySelector('.age')
    //убираю все символы и цифры из имени 
    let reg2 = /\D/gm
    let reg3 = /\W/gm
    let results2 = names.value.match(reg2).join('').replace(reg3, '')

    //убираю все нули в начали и ограничаваюсь тримя цифрами   
    let reg = /[^0]\d+/gm;
    let results = ages.value.match(reg).join('').slice(0,3);

    let user = {
        name: results2,
        age: results,
    }
    
    if(user.age > 0 && user.age <= 25){
        a.push(user)
        kraft(a,'box1')
        
    }else if(user.age > 25 && user.age <= 50){
        b.push(user)
        kraft(b,'box2')
    }else if(user.age <= 120){
        c.push(user)
        kraft(c,'box3')
    }else{
        alert('Возраст введен не коректно либо же вы превысели лимит жизни ')
    }
}

