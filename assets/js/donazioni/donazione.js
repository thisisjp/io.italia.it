const elToStick = '.donazione-detail__colwrapper';
let sb = stickybits(elToStick, {useStickyClasses: true, stickyBitStickyOffset:80});
let sbManaged = true;
let elpaymentform = document.getElementById("paymentform");

function isElementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
}

function paymentFormInViewport(el) {
    if (isElementInViewport(el)==true) {
        document.body.setAttribute('data-pfvisible','1');
    } else {
        document.body.removeAttribute('data-pfvisible');
    }
}

function stick () {
  if (window.innerWidth < 768){
    if (sbManaged) {
      sb.cleanup();
      document.querySelector(elToStick).classList.remove('js-is-sticky--change');
    }
    sbManaged = false;
  }
  else {
    if (!sbManaged) {
      sb = stickybits(elToStick, {useStickyClasses: true, stickyBitStickyOffset:80});
    }
    sbManaged = true;
  }
}
window.addEventListener('resize', () => {
  stick();

})
window.addEventListener('scroll', () => {
  paymentFormInViewport(elpaymentform);
 }, true);

stick();
paymentFormInViewport(elpaymentform);

//PAYMENT FORM
$(function () {
    // FIELDS
    const $choice = $('#choice');
    const $amount = $('#amount');
    const $nome = $('#nome');
    const $cognome = $('#cognome');
    const $email = $('#email');
    const $cf = $('#cf');
    const $privacypol = $('#privacypol');
    const $nonmostrare = $('#nonmostrare');
    const $paymentform = $('#paymentform');
    const $title_invoice = $('#title_invoice');
    const serviceUrl = "https://solutionpa-coll.intesasanpaolo.com/IntermediarioPARestServer/services/netapay/activePayment";
    const authCode = "cHRfYXNhbDokUDRnMHB0NHM0MTY2IQ==";

    function sendData() {
        let dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 1);
        let callbackURL = window.location.origin + window.location.pathname;
        let totAmount = parseInt($amount.val());
        let clientFiscalID = $cf.val();
        let clientDescription = $nome.val() + $cognome.val();
        let invoiceType = $title_invoice.val() ? $title_invoice.val() : document.title;
        let clientType = $nonmostrare.is(":checked") ? 'A' : 'F';

        let data = {
            "callbackURL": callbackURL,
            "sessionID": "XXXX",
            "domainId": "15376371009",
            "unitaBeneficiaria": "80050050154",
            "tributo": "REGLOMBCOVID19",
            "creditorTxId": "XXXXX",
            "activePaymentList":[{
                                    "paymentId": 1,
                                    "totAmount": totAmount,
                                    "invoiceType": invoiceType,
                                    "dueDate": dueDate,
                                    "clientType": clientType,
                                    "clientDescription": clientDescription,
                                    "clientFiscalID": clientFiscalID,
                                    }
                                 ]
           };

        $.ajax({
            url: serviceUrl,
            dataType: 'json',
            method: 'POST',
            crossDomain: true,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + authCode);
            },
            success: function( data, textStatus, jQxhr ){
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }

    $('.donazione-detail__colwrapper .donazione-detail__btn').click(function(e) {
        e.preventDefault();
        let valsel = $(this).data('value');
        $('#paymentform .donazione-detail__btn[data-value="'+ valsel +'"]').trigger('click');

    });

    $('#paymentform .donazione-detail__btn').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $choice.val('');
        $amount.val( $(this).data('value') );
    });


    function onChoice() {
        $('#paymentform .donazione-detail__btn').removeClass('active');
        $amount.val( $(this).val() );
    }

    function resetVal() {
        $('.error').attr('style','');
        $('.inputerror').removeClass('inputerror');
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateCF(cf) {
        var re = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
        return re.test(String(cf).toLowerCase());
    }

    function checkVal() {
        
        let amount = parseInt($amount.val());
        let nome = $nome.val();
        let cognome = $cognome.val();
        let email = $email.val();
        let cf = $cf.val();

        if (amount < 1 || Number.isNaN(amount) || typeof(amount) !=='number') {
            $choice.addClass('inputerror');
            $(".error[for='" + $choice.attr('id') +"']").show();
            return false;
        }

        if (nome.length < 1 || cognome.length < 1) {
            $nome.addClass('inputerror');
            $cognome.addClass('inputerror');
            $(".error[for='" + $nome.attr('id') +"']").show();
            return false;
        }

        if (validateEmail(email)==false) {
            $email.addClass('inputerror');
            $(".error[for='" + $email.attr('id') +"']").show();
            return false;
        }

        if (validateCF(cf)==false) {
            $cf.addClass('inputerror');
            $(".error[for='" + $cf.attr('id') +"']").show();
            return false;
        }

        if ($privacypol.is(":checked")==false) {
            $privacypol.addClass('inputerror');
            $(".error[for='" + $privacypol.attr('id') +"']").show();
            return false;
        }

        return true;
    }

    $choice.on('change', onChoice);
    
    $paymentform.on('submit', function(e) {
        e.preventDefault();
        resetVal();
        if (checkVal()==true) {
            sendData();
        } else {
            $(".error[for='paymentform']").show();
        }


    })
    

});
