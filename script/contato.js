/* SCRIPT PARA REALIZAR CONTATO
 * Por: Luiz Carlos Jr.
 * Descrição: */

const contactBtn = document.querySelector('#contactRequest_btn')
const requestNumber = Math.floor(Math.random() * 500)

let user_firstName = document.getElementById('name')
let user_lastName = document.getElementById('surname')
let user_email = document.getElementById('email')

contactBtn.addEventListener('click', solicitContact => {
    window.alert(`Pedido nº ${requestNumber} solicitado com sucesso. 
    \nSOLICITANTE: ${user_firstName, user_lastName}
    \nEMAIL: ${user_email} `)
})