function lastModifStamp (){
    var newHTML = '<br><br><br>';
    
    if(document.lastModified){
        newHTML += '<div class="bottom" id="lastModified">Last modification<br>';
        newHTML += new Date(document.lastModified).toLocaleString();
        newHTML += '</div>';
    } else {
        newHTML += '<div class="bottom" id="lastModified">Last modification (by hand)<br>May 2nd 2015</div>';
    }
    document.write( newHTML);
}

function putLogos (){
    var newHTML = '';
    
    newHTML += '<a href="http://federation-math.univ-lille1.fr/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoFRM.jpg" width="300" ></a>';
    newHTML += '&nbsp;&nbsp;<a href="http://smf.emath.fr/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoSMF.jpg" width="80"></a>';
    newHTML += '&nbsp;&nbsp;<a href="http://www.wiskgenoot.nl/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoKWG.jpg" width="160"></a>';
    newHTML += '&nbsp;&nbsp;<a href="http://www.wiskgenoot.nl/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoSML.jpg" width="160"></a>';
    newHTML += '&nbsp;&nbsp;<a href="http://www.fields.utoronto.ca"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoFields.jpg" width="70"></a>';
    
    document.write( newHTML);
}

function putBottomLogos (){
    var newHTML = '<br><br><br><div style="float:right;"><br><br>';
    
    newHTML += '<a href="http://federation-math.univ-lille1.fr/"><img height="60" src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoFRM.jpg"></a>';
    newHTML += '&nbsp;<a href="http://smf.emath.fr/"><img height="60" src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoSMF.jpg"></a>';
    newHTML += '&nbsp;<a href="http://www.wiskgenoot.nl/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoKWG.jpg" height="60"></a>';
    newHTML += '&nbsp;<a href="http://www.wiskgenoot.nl/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoSML.jpg" height="60"></a>';
    newHTML += '&nbsp;<a href="http://www.fields.utoronto.ca"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoFields.jpg" height="60"></a>';
    
    newHTML += '</div>';
    document.write( newHTML);
}

function putBottomLogosbibtex (){
    var newHTML = '<br><br><br><div style="float:right;"><br><br>';
    
    newHTML += '<a href="http://federation-math.univ-lille1.fr/"><img height="60" src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoFRM.jpg"></a>';
    newHTML += '&nbsp;<a href="http://smf.emath.fr/"><img height="60" src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoSMF.jpg"></a>';
    newHTML += '&nbsp;<a href="http://www.wiskgenoot.nl/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoKWG.jpg" height="60"></a>';
    newHTML += '&nbsp;<a href="http://www.wiskgenoot.nl/"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoSML.jpg" height="60"></a>';
    newHTML += '&nbsp;<a href="http://www.fields.utoronto.ca"><img src="http://math.univ-lille1.fr/~nwejm//NWEJM_fichiers/logoFields.jpg" height="60"></a>';
    
    newHTML += '</div>';
    document.write( newHTML);
}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}


function NewPaper(Auteur, Titre, thehref, volume, year, pagespan, addbibtex) {
    var newHTML = '<span class="author">';
    
    newHTML += Auteur;
    newHTML += '</span><br><span class="title">';
    newHTML += Titre;
    newHTML += '</span>';
    newHTML += '<br><span class="ou">';
    newHTML += 'vol ' + volume + ', ' + year + ', pages '+ pagespan + '</span>';
    newHTML += '&nbsp;&nbsp;&nbsp; <span class="Abstract">&raquo; Abstract</span>';
    newHTML += ' &nbsp;&nbsp;&nbsp; <a href="OnlinePapers/pdf/';
    newHTML += thehref + '" class="verydiscreet">&raquo; Full text (pdf)</a></span>';
    newHTML +=  '&nbsp;&nbsp;&nbsp;<a href="OnlinePapers/bibtex/';
    newHTML += addbibtex + '" class="verydiscreet">&raquo; Bibtex</a></span>';
    newHTML += '<span class="bidule">+</span>';
    document.write( newHTML);
}

function OldPaper(Auteur, Titre, thehref, volume, year, pagespan, addbibtex, no) {
    var newHTML = '';

    newHTML += '<span class="title">' + Titre + '</span>';
    newHTML += '<br>';
    newHTML += '<span class="author">' + Auteur + '</span>';
    newHTML += '&nbsp;&nbsp;&nbsp; <span class="ou"> pages '+ pagespan + '</span>';
    newHTML += '&nbsp;&nbsp;&nbsp; <span class="Abstract">&raquo; Abstract</span>';
    newHTML += ' &nbsp;&nbsp;&nbsp; <a href="./' + year + '/' + volume + '/' + no + '/';
    newHTML += thehref + '" class="verydiscreet">&raquo; Full text (pdf)</a></span>';
    newHTML +=  '&nbsp;&nbsp;&nbsp;<a href="./' + year + '/' + volume + '/'+ no + '/';
    newHTML += addbibtex + '" class="verydiscreet">&raquo; Bibtex</a></span>';
    newHTML += '<span class="bidule">+</span>';
    document.write( newHTML);
}

function OldPaperComplete(Auteur, Titre, thehref, volume, year, pagespan, addbibtex, no) {
    var newHTML = '';

    newHTML += '<span class="title">' + Titre + '</span>';
    newHTML += '<br>';
    newHTML += '<span class="author">' + Auteur + '</span>';
    newHTML += '&nbsp;&nbsp;&nbsp; <span class="ou"> vol ' + volume + ', ' + year + ', pages '+ pagespan + '</span>';
    newHTML += '&nbsp;&nbsp;&nbsp; <span class="Abstract">&raquo; Abstract</span>';
    newHTML += ' &nbsp;&nbsp;&nbsp; <a href="./' + year + '/' + volume + '/' + no + '/';
    newHTML += thehref + '" class="verydiscreet">&raquo; Full text (pdf)</a></span>';
    newHTML +=  '&nbsp;&nbsp;&nbsp;<a href="./' + year + '/' + volume + '/'+ no + '/';
    newHTML += addbibtex + '" class="verydiscreet">&raquo; Bibtex</a></span>';
    newHTML += '<span class="bidule">+</span>';
    document.write( newHTML);
}




$(document).ready(function(){
    $('#AllArticles li .Abstract').click(function() {
        var text = $(this).siblings('.resumecontent').eq(0);
        if(text.is(':hidden')){
            text.slideDown('500');
            $(this).siblings('.bidule').eq(0).html('-');
        }
        else {
            text.slideUp('300');
            $(this).siblings('.bidule').eq(0).html('+');
        }
    });
    $('#AllArticles li .bidule').click(function() {
        var text = $(this).siblings('.resumecontent').eq(0);
        if(text.is(':hidden')){
            text.slideDown('500');
            $(this).html('-');
        }
        else {
            text.slideUp('300');
            $(this).html('+');
        }
    });
    $('#AllArticles li .resumecontent').click(function() {
        $(this).slideUp('300');
        $(this).siblings('.bidule').eq(0).html('+');
    });
});

$(document).ready(function(){
    $('#AllOldArticles li .Abstract').click(function() {
        var text = $(this).siblings('.resumecontent').eq(0);
        if(text.is(':hidden')){
            text.slideDown('500');
            $(this).siblings('.bidule').eq(0).html('-');
        }
        else {
            text.slideUp('300');
            $(this).siblings('.bidule').eq(0).html('+');
        }
    });
    $('#AllOldArticles li .bidule').click(function() {
        var text = $(this).siblings('.resumecontent').eq(0);
        if(text.is(':hidden')){
            text.slideDown('500');
            $(this).html('-');
        }
        else {
            text.slideUp('300');
            $(this).html('+');
        }
    });
    $('#AllOldArticles li .resumecontent').click(function() {
        $(this).slideUp('300');
        $(this).siblings('.bidule').eq(0).html('+');
    });
});

