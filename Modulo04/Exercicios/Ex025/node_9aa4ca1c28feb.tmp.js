<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios</title>
</head>
<body>
    <h1>Exemplos de Formularios</h1>
    <form action="cadastro.php" method="get" autocomplete="on">
        <fieldset>
            <legend>Esportes favoritos </legend>
            <input type="checkbox" name="esfut" id="iesfut"> Futebol
            <input type="checkbox" name="esfut" id="iesfut"> Basquete
            <input type="checkbox" name="esfut" id="iesfut"> Nataç
        </fieldset>
        <p>
            <input type="submit" value="Enviar">
            <input type="reset" value="Limpar">
        </p>

    </form>
</body>
</html>