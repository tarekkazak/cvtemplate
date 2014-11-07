/**
 * Created by tarekkazak on 2014-08-14.
 */
var pdf = require('pdfcrowd');

var client = new pdf.Pdfcrowd('tarekkazak', '1c5f2f9eae30f410552576dcee2b2d6e');
//client.convertHtml('<html>regular HTML code</html>', pdf.sendHttpResponse(response));
//You can convert also a web page and save it to a file:

    client.convertURI('http://budget-it.azurewebsites.net/cv/index.html', pdf.saveToFile("example_com.pdf"),
        {
            width: "8.5in",
            height: "11in",
            pdf_scaling_factor : 1,
            margin_top : "0.4in",
            margin_bottom : "0.4in",
            margin_left : "0.4in",
            margin_right : "0.3in",
            max_pages : 3
        });
//Or a local HTML file:

//client.convertFile('index.html', pdf.saveToFile("file.pdf"));
