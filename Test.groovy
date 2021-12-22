<style>

g-footer {
    width: 100%;
    background: #f3f3f3;
    border-top: 0px solid #fff;
    position: relative;
    height: 5rem;
    display: flex;
        display: -ms-flexbox;
    align-items: center;
        -ms-flex-align: center;
    margin: 0 auto;
}

#alleg-footer .container {
    height: auto;
    padding: 0 40px;
    margin: 0 auto;
    text-align: center;
    background: #444;
    color: #ccc;
    font: 400 .9rem / 140% 'Roboto', Arial, Helvetica, sans-serif !important;
    display: flex;
        display: -ms-flexbox;
    flex-direction: row;
        -ms-flex-direction: row;
    justify-content: space-between;
        -ms-flex-pack: justify;
    flex-wrap: wrap;
        -ms-flex-wrap: wrap;
}

#alleg-footer .footer1,
#alleg-footer .footer2 {
    display: inline-block;
    align-self: center;
}

#alleg-footer .footer2 {
    background: url(http://subarucanada.allegiancetech.com/surveys/images/7RJM4P/Preview/logo_footer_subaruca.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-attachment: scroll;
    -webkit-background-size: 93px auto; 
    -moz-background-size: 93px auto;
    -o-background-size: 93px auto;
    background-size: 93px auto;
    width: 93px;
    height: 5rem;
    order: -1;
}

#alleg-footer a {
    color: #ccc;
    text-decoration: none;
    margin: 0px 20px;
    font-weight: 400;
    text-transform: none;
    transition: color .3s ease-in-out;
}

#alleg-footer a:hover {
    color: #fff;
    text-decoration: none;
}

#alleg-footer a:first-of-type {
    margin-left: 0px;
}

#alleg-footer a:last-of-type {
    margin-right: 0px;
}
</style>
<div id='alleg-footer'>
<div class='container'>
   <div class='footer1'>
[${answers.LanguageSelector=="English" ? "Eng" : answers.LanguageSelector}]
      <a href='${answers.LanguageSelector==" English " ? "http://www.subaru.ca/privacy" : "http://www.subaru.ca/confidentialit%c3%a9"}' target='_blank' title='${answers.LanguageSelector==" English " ? "Privacy Policy" : "Politique de confidentialité"}'>${answers.LanguageSelector==" English " ? "Privacy Policy" : "Politique de confidentialité"}</a>
      <a href='mailto:CX@subaru.ca' target='_blank' title='${answers.LanguageSelector==" English " ? "Contact us" : "Contactez-nous"}'>${answers.LanguageSelector==" English " ? "Contact us" : "Contactez-nous"}</a>
   </div>
   <div class='footer2'></div>
</div>
</div>