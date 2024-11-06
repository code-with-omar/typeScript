let firstName: string
let lastName: string
let userId: number
let isActive: boolean
userId = 190605
firstName = "Md. Omar"
lastName = "Faruk"
isActive = true
let fullName = firstName.concat(lastName)
console.log({ userId, fullName, isActive })
console.log(fullName.split(" "))
console.log(fullName.split(''))
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())



function display(): void {
    console.log("Hello Programmer")
}
display()