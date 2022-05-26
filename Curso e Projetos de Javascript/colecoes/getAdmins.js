function getAdmins(map){
    let admins = []
    for ([key, value] of map){
        if(value ==='Admin'){
            admins.push([key])
        }
    }
    return admins
}

let usuarios = new Map()

usuarios.set('George', 'Admin')
usuarios.set('Primo', 'Admin')
usuarios.set('Nicko', 'User')
usuarios.set('Sairos', 'Meme')

console.log(getAdmins(usuarios))