const select = document.querySelector('select')
const allLang = ['ua', 'en']

select.addEventListener('change', changeURLLanguage)

function changeURLLanguage() {
    let lang = select.value
    location.href = window.location.pathname + '#' + lang
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substr(1)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua'
        location.reload()
    }
    select.value = hash

    document.querySelector(".props1").innerHTML = langArr["props"][hash]
    document.querySelector(".props2").innerHTML = langArr["props"][hash]
    document.querySelector(".props3").innerHTML = langArr["props"][hash]
    document.querySelector(".about_us1").innerHTML = langArr["about_us"][hash]
    document.querySelector(".about_us2").innerHTML = langArr["about_us"][hash]
    document.querySelector(".document").innerHTML = langArr['document'][hash]
    document.querySelector(".money1").innerHTML = langArr['money1'][hash]
    document.querySelector(".money2").innerHTML = langArr['money2'][hash]
    document.querySelector(".money3").innerHTML = langArr['money3'][hash]
    document.querySelector(".money4").innerHTML = langArr['money4'][hash]
    document.querySelector(".money1_about").innerHTML = langArr['money1_about'][hash]
    document.querySelector(".money2_about").innerHTML = langArr['money2_about'][hash]
    document.querySelector(".money3_about").innerHTML = langArr['money3_about'][hash]
    document.querySelector(".money4_about").innerHTML = langArr['money4_about'][hash]
    document.querySelector(".mein_ways").innerHTML = langArr['mein_ways'][hash]
    document.querySelector(".help_child").innerHTML = langArr['help_child'][hash]
    document.querySelector(".support_hospital").innerHTML = langArr['support_hospital'][hash]
    document.querySelector(".help_dil").innerHTML = langArr['help_dil'][hash]
    document.querySelector(".head_man").innerHTML = langArr['head_man'][hash]
    document.querySelector(".founder").innerHTML = langArr['founder'][hash]
    document.querySelector(".text").innerHTML = langArr['text'][hash]
    document.querySelector(".we_team").innerHTML = langArr['we_team'][hash]
    document.querySelector(".head_fund").innerHTML = langArr['head_fund'][hash]
    document.querySelector(".representative1").innerHTML = langArr['representative'][hash]
    document.querySelector(".representative2").innerHTML = langArr['representative'][hash]
    document.querySelector(".party1").innerHTML = langArr['party'][hash]
    document.querySelector(".party2").innerHTML = langArr['party'][hash]
    document.querySelector(".party3").innerHTML = langArr['party'][hash]
    document.querySelector(".party4").innerHTML = langArr['party'][hash]
    document.querySelector(".party5").innerHTML = langArr['party'][hash]
    document.querySelector(".send").innerHTML = langArr['send'][hash]
    document.querySelector(".for_what").innerHTML = langArr['for_what'][hash]
    document.querySelector(".support").innerHTML = langArr['support'][hash]
    document.querySelector(".meetings").innerHTML = langArr['meetings'][hash]
    document.querySelector(".orphans").innerHTML = langArr['orphans'][hash]
    document.querySelector(".orphans_text").innerHTML = langArr['orphans_text'][hash] 
    document.querySelector(".medical").innerHTML = langArr['medical'][hash]
    document.querySelector(".medical_text").innerHTML = langArr['medical_text'][hash]
    document.querySelector(".button_support1").innerHTML = langArr['button_support'][hash]
    document.querySelector(".button_support2").innerHTML = langArr['button_support'][hash]
    document.querySelector(".mein_page").innerHTML = langArr['mein_page'][hash]
    document.querySelector(".where").innerHTML = langArr['where'][hash]
    document.querySelector(".phone").innerHTML = langArr['phone'][hash]
    document.querySelector(".email").innerHTML = langArr['email'][hash]


}
changeLanguage();