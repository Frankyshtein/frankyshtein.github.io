var answer, current;
var deck = ["JS PNG/JS_Q1.png", "JS PNG/JS_A1.png", "CSS PNG/CSS_Q1.png", "CSS PNG/CSS_A1.png", "HTML PNG/HTML_Q1.png", "HTML PNG/HTML_A1.png", "JS PNG/JS_Q2.png", "JS PNG/JS_A2.png", "CSS PNG/CSS_Q2.png", "CSS PNG/CSS_A2.png", "HTML PNG/HTML_Q2.png", "HTML PNG/HTML_A2.png", "JS PNG/JS_Q3.png", "JS PNG/JS_A3.png", "CSS PNG/CSS_Q3.png", "CSS PNG/CSS_A3.png", "HTML PNG/HTML_Q3.png", "HTML PNG/HTML_A3.png", "JS PNG/JS_Q4.png", "JS PNG/JS_A4.png", "CSS PNG/CSS_Q4.png", "CSS PNG/CSS_A4.png", "HTML PNG/HTML_Q4.png", "HTML PNG/HTML_A4.png", "JS PNG/JS_Q5.png", "JS PNG/JS_A5.png", "CSS PNG/CSS_Q5.png", "CSS PNG/CSS_A5.png", "HTML PNG/HTML_Q5.png", "HTML PNG/HTML_A5.png", "JS PNG/JS_Q6.png", "JS PNG/JS_A6.png", "CSS PNG/CSS_Q6.png", "CSS PNG/CSS_A6.png", "HTML PNG/HTML_Q6.png", "HTML PNG/HTML_A6.png", "JS PNG/JS_Q7.png", "JS PNG/JS_A7.png", "CSS PNG/CSS_Q7.png", "CSS PNG/CSS_A7.png", "HTML PNG/HTML_Q7.png", "HTML PNG/HTML_A7.png", "JS PNG/JS_Q8.png", "JS PNG/JS_A8.png", "CSS PNG/CSS_Q8.png", "CSS PNG/CSS_A8.png", "HTML PNG/HTML_Q8.png", "HTML PNG/HTML_A8.png", "JS PNG/JS_Q9.png", "JS PNG/JS_A9.png", "CSS PNG/CSS_Q9.png", "CSS PNG/CSS_A9.png", "HTML PNG/HTML_Q9.png", "HTML PNG/HTML_A9.png", "JS PNG/JS_Q10.png", "JS PNG/JS_A10.png", "CSS PNG/CSS_Q10.png", "CSS PNG/CSS_A10.png", "HTML PNG/HTML_Q10.png", "HTML PNG/HTML_A10.png", "JS PNG/JS_Q11.png", "JS PNG/JS_A11.png", "CSS PNG/CSS_Q11.png", "CSS PNG/CSS_A11.png", "HTML PNG/HTML_Q11.png", "HTML PNG/HTML_A11.png", "JS PNG/JS_Q12.png", "JS PNG/JS_A12.png", "CSS PNG/CSS_Q12.png", "CSS PNG/CSS_A12.png", "HTML PNG/HTML_Q12.png", "HTML PNG/HTML_A12.png", "JS PNG/JS_Q13.png", "JS PNG/JS_A13.png", "CSS PNG/CSS_Q13.png", "CSS PNG/CSS_A13.png", "HTML PNG/HTML_Q13.png", "HTML PNG/HTML_A13.png", "JS PNG/JS_Q14.png", "JS PNG/JS_A14.png", "CSS PNG/CSS_Q14.png", "CSS PNG/CSS_A14.png", "HTML PNG/HTML_Q14.png", "HTML PNG/HTML_A14.png", "JS PNG/JS_Q15.png", "JS PNG/JS_A15.png", "CSS PNG/CSS_Q15.png", "CSS PNG/CSS_A15.png", "HTML PNG/HTML_Q15.png", "HTML PNG/HTML_A15.png", "JS PNG/JS_Q16.png", "JS PNG/JS_A16.png", "CSS PNG/CSS_Q16.png", "CSS PNG/CSS_A16.png", "HTML PNG/HTML_Q16.png", "HTML PNG/HTML_A16.png", "JS PNG/JS_Q17.png", "JS PNG/JS_A17.png", "CSS PNG/CSS_Q17.png", "CSS PNG/CSS_A17.png", "HTML PNG/HTML_Q17.png", "HTML PNG/HTML_A17.png", "JS PNG/JS_Q18.png", "JS PNG/JS_A18.png", "CSS PNG/CSS_Q18.png", "CSS PNG/CSS_A18.png", "HTML PNG/HTML_Q18.png", "HTML PNG/HTML_A18.png", "JS PNG/JS_Q19.png", "JS PNG/JS_A19.png", "CSS PNG/CSS_Q19.png", "CSS PNG/CSS_A19.png", "HTML PNG/HTML_Q19.png", "HTML PNG/HTML_A19.png", "JS PNG/JS_Q20.png", "JS PNG/JS_A20.png", "CSS PNG/CSS_Q20.png", "CSS PNG/CSS_A20.png", "HTML PNG/HTML_Q20.png", "HTML PNG/HTML_A20.png", "JS PNG/JS_Q21.png", "JS PNG/JS_A21.png", "CSS PNG/CSS_Q21.png", "CSS PNG/CSS_A21.png", "HTML PNG/HTML_Q21.png", "HTML PNG/HTML_A21.png", "JS PNG/JS_Q22.png", "JS PNG/JS_A22.png", "CSS PNG/CSS_Q22.png", "CSS PNG/CSS_A22.png", "HTML PNG/HTML_Q22.png", "HTML PNG/HTML_A22.png", "JS PNG/JS_Q23.png", "JS PNG/JS_A23.png", "CSS PNG/CSS_Q23.png", "CSS PNG/CSS_A23.png", "HTML PNG/HTML_Q23.png", "HTML PNG/HTML_A23.png", "JS PNG/JS_Q24.png", "JS PNG/JS_A24.png", "CSS PNG/CSS_Q24.png", "CSS PNG/CSS_A24.png", "HTML PNG/HTML_Q24.png", "HTML PNG/HTML_A24.png", "JS PNG/JS_Q25.png", "JS PNG/JS_A25.png", "CSS PNG/CSS_Q25.png", "CSS PNG/CSS_A25.png", "HTML PNG/HTML_Q25.png", "HTML PNG/HTML_A25.png", "JS PNG/JS_Q26.png", "JS PNG/JS_A26.png", "CSS PNG/CSS_Q26.png", "CSS PNG/CSS_A26.png", "HTML PNG/HTML_Q26.png", "HTML PNG/HTML_A26.png", "JS PNG/JS_Q27.png", "JS PNG/JS_A27.png", "CSS PNG/CSS_Q27.png", "CSS PNG/CSS_A27.png", "HTML PNG/HTML_Q27.png", "HTML PNG/HTML_A27.png", "JS PNG/JS_Q28.png", "JS PNG/JS_A28.png", "CSS PNG/CSS_Q28.png", "CSS PNG/CSS_A28.png", "HTML PNG/HTML_Q28.png", "HTML PNG/HTML_A28.png", "JS PNG/JS_Q29.png", "JS PNG/JS_A29.png", "CSS PNG/CSS_Q29.png", "CSS PNG/CSS_A29.png", "HTML PNG/HTML_Q29.png", "HTML PNG/HTML_A29.png", "JS PNG/JS_Q30.png", "JS PNG/JS_A30.png", "CSS PNG/CSS_Q30.png", "CSS PNG/CSS_A30.png", "HTML PNG/HTML_Q30.png", "HTML PNG/HTML_A30.png", "JS PNG/JS_Q31.png", "JS PNG/JS_A31.png", "CSS PNG/CSS_Q31.png", "CSS PNG/CSS_A31.png", "HTML PNG/HTML_Q31.png", "HTML PNG/HTML_A31.png", "JS PNG/JS_Q32.png", "JS PNG/JS_A32.png", "CSS PNG/CSS_Q32.png", "CSS PNG/CSS_A32.png", "HTML PNG/HTML_Q32.png", "HTML PNG/HTML_A32.png", "JS PNG/JS_Q33.png", "JS PNG/JS_A33.png", "CSS PNG/CSS_Q33.png", "CSS PNG/CSS_A33.png", "HTML PNG/HTML_Q33.png", "HTML PNG/HTML_A33.png", "JS PNG/JS_Q34.png", "JS PNG/JS_A34.png", "CSS PNG/CSS_Q34.png", "CSS PNG/CSS_A34.png", "HTML PNG/HTML_Q34.png", "HTML PNG/HTML_A34.png", "JS PNG/JS_Q35.png", "JS PNG/JS_A35.png", "CSS PNG/CSS_Q35.png", "CSS PNG/CSS_A35.png", "HTML PNG/HTML_Q35.png", "HTML PNG/HTML_A35.png", "JS PNG/JS_Q36.png", "JS PNG/JS_A36.png", "CSS PNG/CSS_Q36.png", "CSS PNG/CSS_A36.png", "HTML PNG/HTML_Q36.png", "HTML PNG/HTML_A36.png", "JS PNG/JS_Q37.png", "JS PNG/JS_A37.png", "CSS PNG/CSS_Q37.png", "CSS PNG/CSS_A37.png", "HTML PNG/HTML_Q17.png", "HTML PNG/HTML_A17.png", "JS PNG/JS_Q38.png", "JS PNG/JS_A38.png", "CSS PNG/CSS_Q38.png", "CSS PNG/CSS_A38.png", "HTML PNG/HTML_Q38.png", "HTML PNG/HTML_A38.png", "JS PNG/JS_Q39.png", "JS PNG/JS_A39.png", "CSS PNG/CSS_Q39.png", "CSS PNG/CSS_A39.png", "HTML PNG/HTML_Q39.png", "HTML PNG/HTML_A39.png", "JS PNG/JS_Q40.png", "JS PNG/JS_A40.png", "CSS PNG/CSS_Q40.png", "CSS PNG/CSS_A40.png", "HTML PNG/HTML_Q40.png", "HTML PNG/HTML_A40.png", "JS PNG/JS_Q41.png", "JS PNG/JS_A41.png", "CSS PNG/CSS_Q41.png", "CSS PNG/CSS_A41.png", "HTML PNG/HTML_Q41.png", "HTML PNG/HTML_A41.png", "JS PNG/JS_Q42.png", "JS PNG/JS_A42.png", "CSS PNG/CSS_Q42.png", "CSS PNG/CSS_A42.png", "HTML PNG/HTML_Q42.png", "HTML PNG/HTML_A42.png", "JS PNG/JS_Q43.png", "JS PNG/JS_A43.png", "CSS PNG/CSS_Q43.png", "CSS PNG/CSS_A43.png", "HTML PNG/HTML_Q43.png", "HTML PNG/HTML_A43.png", "JS PNG/JS_Q44.png", "JS PNG/JS_A44.png", "CSS PNG/CSS_Q44.png", "CSS PNG/CSS_A44.png", "HTML PNG/HTML_Q44.png", "HTML PNG/HTML_A44.png", "JS PNG/JS_Q45.png", "JS PNG/JS_A45.png", "CSS PNG/CSS_Q45.png", "CSS PNG/CSS_A45.png", "HTML PNG/HTML_Q45.png", "HTML PNG/HTML_A45.png", "JS PNG/JS_Q46.png", "JS PNG/JS_A46.png", "CSS PNG/CSS_Q46.png", "CSS PNG/CSS_A46.png", "HTML PNG/HTML_Q46.png", "HTML PNG/HTML_A46.png", "JS PNG/JS_Q47.png", "JS PNG/JS_A47.png", "CSS PNG/CSS_Q47.png", "CSS PNG/CSS_A47.png", "HTML PNG/HTML_Q47.png", "HTML PNG/HTML_A47.png", "JS PNG/JS_Q48.png", "JS PNG/JS_A48.png", "CSS PNG/CSS_Q48.png", "CSS PNG/CSS_A48.png", "HTML PNG/HTML_Q48.png", "HTML PNG/HTML_A48.png", "JS PNG/JS_Q49.png", "JS PNG/JS_A49.png", "CSS PNG/CSS_Q49.png", "CSS PNG/CSS_A49.png", "HTML PNG/HTML_Q49.png", "HTML PNG/HTML_A49.png", "JS PNG/JS_Q50.png", "JS PNG/JS_A50.png", "CSS PNG/CSS_Q50.png", "CSS PNG/CSS_A50.png", "HTML PNG/HTML_Q50.png", "HTML PNG/HTML_A50.png", "CSS PNG/CSS_Q51.png", "CSS PNG/CSS_A51.png", "CSS PNG/CSS_Q52.png", "CSS PNG/CSS_A52.png"];

function build() {
    if (localStorage.getItem("deck")) {
        deck = JSON.parse(localStorage.getItem("deck"));
    }
    $(".wrapper img").remove();
    for (let i = 0; i < deck.length; i++) {
        $(".wrapper").append("<img data-src=\"" + deck[i] + "\">")
        if (!(i % 2 == 0)) {
            $(".wrapper img:last-child").addClass("hide");
        }
    }
    $(window).lazyLoadXT();
    $(".wrapper > img").on('click', large);
}

function toTheEnd() {
    deck.push(deck[current]);
    deck.push(deck[current+1]);
    console.log(deck[current]);
    deck.splice(current, 2);
    localStorage.setItem('deck', JSON.stringify(deck));
}

function large() {
    current = $(this).index();
    $(".module img").remove();
    $(".module").on('click', small);
    answer = $(this).index() + 2;
    $(".wrapper img:nth-child(" + answer + ")").removeClass("hide").lazyLoadXT({show: true});
    setTimeout(function(){
        $(".wrapper img:nth-child(" + answer + ")").addClass("hide")
    },10);
    $(this).clone().appendTo($(".module"));
    $(".module").fadeIn(400, function () {
        $(".module img").on('click', flip);
    });
}

function small(e) {
    
    var target = $(e.target);
    if (!target.parents().hasClass('module') || target.hasClass("close") || target.parents().hasClass("close")) {
        build();
        $(".module").fadeOut(400);
        $(".module").off();
    }
}

function flip() {
    toTheEnd();
    $(this).addClass("flip");
//    $(".wrapper img:nth-child(" + answer + ")").addClass("hide");
    setTimeout(function () {
        
        $(".module img").remove();
        $(".wrapper img:nth-child(" + answer + ")").clone().appendTo($(".module"));
        $(".module img").removeClass("hide").lazyLoadXT({show: true});
        
    }, 1000);
}
build();
