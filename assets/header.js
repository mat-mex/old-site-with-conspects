var links = document.getElementsByClassName("page-link");

for (var i = 0; i < links.length; i++) {
    if (links[i].href != "https://mat-mex.github.io/courses/") {
        if (document.URL.indexOf(links[i].href) > -1) {
            select(links[i]);
        }
    } else {
        if (document.URL.endsWith(links[i].href)) {
            select(links[i]);
        }
    }
};

if (document.URL == 'https://mat-mex.github.io'){
    select(document.getElementsByClassName('site-title')[0]);
}

function select(link) {
    link.className += ' selected';
    link.focus();
}