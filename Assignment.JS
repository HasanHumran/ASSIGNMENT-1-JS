<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="bootcamp" content="width=device-990, initial-scale=2.0">
    <title>Assignment 2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f0f0f0;
            padding: 20px;
        }
        h1 {
            color: darkblue;
        }
    </style>
</head>

<body>
    <h1> My world is the best </h1>

    <p> You have to fix yourself before fixing others. </p>

    <img src="a link" alt="">PHOTO HERE.

    <a href="link"> for more informations </a>

    <div>
        <button role="come here"> ro</button>
        <p1> Here is highlighted </p1>
    </div>

    <hr>
    <h3>Add Data</h3>

    <input type="text" id="name" placeholder="Name" class="form-control mb-2">
    <input type="text" id="country" placeholder="Country" class="form-control mb-2">
    <input type="number" id="age" placeholder="Age" class="form-control mb-2">

    <button id="addBtn" class="btn btn-primary">Add</button>

    <table class="table table-bordered mt-3">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Country</th>
            <th>Age</th>
        </tr>
        <tbody id="tableBody"></tbody>
    </table>
    <script>
        let count = 0;

        function addData() {
            let name = document.getElementById("name").value;
            let country = document.getElementById("country").value;
            let age = document.getElementById("age").value;

            if (name == "" || country == "" || age == "") {
                alert("Fill all fields");
                return;
            }

            count++;

            let row = document.createElement("tr");
            let info = [count, name, country, age];

            for (let i = 0; i < info.length; i++) {
                let td = document.createElement("td");
                td.innerText = info[i];
                row.appendChild(td);
            }

            document.getElementById("tableBody").appendChild(row);

            document.getElementById("name").value = "";
            document.getElementById("country").value = "";
            document.getElementById("age").value = "";
        }

        document.getElementById("addBtn").addEventListener("click", addData);
    </script>

</body>
</html>