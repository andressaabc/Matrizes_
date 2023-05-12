var nome;
nome = prompt("Qual é o seu nome?");

var calc;
calc = prompt(nome + ", qual operação você deseja fazer? Para adição, digite 1, digite 2 para subtração ou 3 para multiplicação.");

matriz3 = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
];

matriz4 = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
];

matrizr = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
];

matriz5 = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
];

matriz6 = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
];

matrizr2 = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
];

for (i = 0; i < matriz3.length; i++) {
    for (j = 0; j < matriz3[i].length; j++) {
        matriz3[i][j] += Math.floor(Math.random() * 100);
    }
}

for (i = 0; i < matriz4.length; i++) {
    for (j = 0; j < matriz4[i].length; j++) {
        matriz4[i][j] += Math.floor(Math.random() * 100);
    }
}

for (i = 0; i < matriz5.length; i++) {
    for (j = 0; j < matriz5[i].length; j++) {
        matriz5[i][j] += Math.floor(Math.random() * 100);
    }
}

for (i = 0; i < matriz6.length; i++) {
    for (j = 0; j < matriz6[i].length; j++) {
        matriz6[i][j] += Math.floor(Math.random() * 100);
    }
}

if (calc == 1) {
    document.write("<h3> Para somar, apenas fazemos a adição de cada algarismo que apresentam as mesmas posições na tabela! Devemos lembrar que, para somar, a ordem das matrizes deve ser a mesma. </h3>");
    document.write("<h3>Siga os exemplos a seguir:");
    document.write('<br>');

    document.write("<div class='matriz1'>"); //abre div
    document.write("<table id='matriz' border=1>");
    for (i = 0; i < matriz3.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz3[i].length; x++) {
            linha = linha + "<td>" + matriz3[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 3

    document.write('+');  //linha em branco

    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz4.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz4[i].length; x++) {
            linha = linha + "<td>" + matriz4[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 4

    for (i = 0; i < matriz3.length; i++) {
        for (j = 0; j < matriz3[i].length; j++) {
            matrizr[i][j] = matriz3[i][j] + matriz4[i][j];
        } //soma
    }

    document.write('=');

    document.write("<table class='matrizr' border=1>");
    for (i = 0; i < matrizr.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matrizr[i].length; x++) {
            linha = linha + "<td>" + matrizr[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha); //mostrar resultado na tela
        document.write('<br>');  //linha em branco
    }
    document.write("</table>");
    document.write("<br>");
    document.write("</div>");
    document.write("<hr>");
    document.write("<div class='matriz1'>");

    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz5.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz5[i].length; x++) {
            linha = linha + "<td>" + matriz5[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 5

    document.write('+');

    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz6.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz6[i].length; x++) {
            linha = linha + "<td>" + matriz6[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 6

    document.write('=');  //linha em branco

    for (i = 0; i < matriz5.length; i++) {
        for (j = 0; j < matriz5[i].length; j++) {
            matrizr2[i][j] = matriz5[i][j] + matriz6[i][j];
        } //soma
    }
    document.write("<table class='matrizr' border=1>");
    for (i = 0; i < matrizr2.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matrizr2[i].length; x++) {
            linha = linha + "<td>" + matrizr2[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha); //mostrar resultado na tela

    }
    document.write("</table>");
    document.write("</div>"); //uma do lado da outra
}

if (calc == 2) {
    document.write("<h3> Para subtrair, apenas fazemos a subtração de cada algarismo que apresentam as mesmas posições na tabela! Devemos lembrar que, para diminuir, a ordem das matrizes deve ser a mesma. </h3>");
    document.write("<h3>Siga os exemplos a seguir:");
    document.write('<br>');

    document.write("<div class='matriz1'>"); //abre div
    document.write("<table id='matriz' border=1>");
    for (i = 0; i < matriz3.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz3[i].length; x++) {
            linha = linha + "<td>" + matriz3[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 3

    document.write('-');  //linha em branco

    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz4.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz4[i].length; x++) {
            linha = linha + "<td>" + matriz4[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 4

    for (i = 0; i < matriz3.length; i++) {
        for (j = 0; j < matriz3[i].length; j++) {
            matrizr[i][j] = matriz3[i][j] - matriz4[i][j];
        } //subtracao
    }

    document.write('=');

    document.write("<table class='matrizr' border=1>");
    for (i = 0; i < matrizr.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matrizr[i].length; x++) {
            linha = linha + "<td>" + matrizr[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha); //mostrar resultado na tela
        document.write('<br>');  //linha em branco
    }
    document.write("</table>");

    document.write("</div>");

    document.write("<div class='matriz1'>");
    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz5.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz5[i].length; x++) {
            linha = linha + "<td>" + matriz5[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 5

    document.write('-');

    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz6.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz6[i].length; x++) {
            linha = linha + "<td>" + matriz6[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 6

    document.write('=');  //linha em branco

    for (i = 0; i < matriz5.length; i++) {
        for (j = 0; j < matriz5[i].length; j++) {
            matrizr2[i][j] = matriz5[i][j] - matriz6[i][j];
        } //subtracao
    }
    document.write("<table class='matrizr' border=1>");
    for (i = 0; i < matrizr2.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matrizr2[i].length; x++) {
            linha = linha + "<td>" + matrizr2[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha); //mostrar resultado na tela

    }
    document.write("</table>");
    document.write("</div>"); //uma do lado da outra
}
//multiplicacao
if (calc == 3) {
    document.write("<h3> Para multiplicar, devemos realizar a operação desta forma: LINHA da tabela 1, pela COLUNA da tabela 2. Devemos lembrar que a coluna da matriz 1 deve ter o mesmo número que o de linhas da matriz B!. </h3>");
    document.write("<h3>Siga os exemplos a seguir:");
    document.write('<br>');

    document.write("<div class='matriz1'>"); //abre div
    document.write("<table id='matriz' border=1>");
    for (i = 0; i < matriz3.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz3[i].length; x++) {
            linha = linha + "<td>" + matriz3[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 3

    document.write('x');  //linha em branco

    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz4.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz4[i].length; x++) {
            linha = linha + "<td>" + matriz4[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 4

    for (i = 0; i < matriz3.length; i++) {
        for (j = 0; j < matriz3[i].length; j++) {
            matrizr[i][j] += matriz3[i][j] * matriz4[j][i];
        } //multiplicacao
    }

    document.write('=');

    document.write("<table class='matrizr' border=1>");
    for (i = 0; i < matrizr.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matrizr[i].length; x++) {
            linha = linha + "<td>" + matrizr[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha); //mostrar resultado na tela
        document.write('<br>');  //linha em branco
    }
    document.write("</table>");

    document.write("</div>");

    document.write("<div class='matriz1'>");
    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz5.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz5[i].length; x++) {
            linha = linha + "<td>" + matriz5[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 5

    document.write('x');

    document.write("<table class='matriz' border=1>");
    for (i = 0; i < matriz6.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matriz6[i].length; x++) {
            linha = linha + "<td>" + matriz6[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha);
    }
    document.write("</table>");
    // fim matriz 6

    document.write('=');  //linha em branco

    for (i = 0; i < matriz5.length; i++) {
        for (j = 0; j < matriz5[i].length; j++) {
            matrizr2[i][j] += matriz5[i][j] * matriz6[j][i];
        } //multiplicacao
    }

    document.write("<table class='matrizr' border=1>");
    for (i = 0; i < matrizr2.length; i++) {
        var linha = '<tr>';
        for (x = 0; x < matrizr2[i].length; x++) {
            linha = linha + "<td>" + matrizr2[i][x] + "</td>";
        }
        linha = linha + "</tr>"
        document.write(linha); //mostrar resultado na tela

    }
    document.write("</table>");
    document.write("</div>"); //uma do lado da outra
}
