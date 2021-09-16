var agora = new Date()
var hora = agora.getHours
console.log('agora sao exatamente ${hora} horas.')
if (hora < 12) {
    console.log('bom dia, o sol ja nasceu la na fazendinha!')

} else if (hora <= 18) {
    console.log('boa tarde amiguinho')

}else if (hora >= 19) {
    console.log('ja ta de noite ne?')

}else {
    console.log ('o que estas fazendo madrugando em?')

}