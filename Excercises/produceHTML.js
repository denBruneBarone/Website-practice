function renderPage(title, heading, demoString) {
    let str = "";
    str += ` \
        <!DOCTYPE html>\n \
        <html lang="da">\n\n \
        <head>\n \
        \t<meta charset="utf-8">\n \
        \t<title>${title}</title>\n\
        </head> \n\n\
        <body> \n\
        \t<!-- page content --> \n\
        \t<h1>${heading}</h1> \n\
        \t<script> \n\
        \t\tconsole.log("${demoString}"); \n\
        \t</script> \n\
        </body> \n\n\
        </html> `
    return str;
}


str = `uyhu`

console.log(renderPage("Simpel IWP Demo", "IWP demo", "JS Script er kørt"));