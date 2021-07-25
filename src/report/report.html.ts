export const html = `
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Strava report for user: {{user}}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<!--  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> @TODO one day add charts -->
 <style type="text/css">
  html { font-size: 12px; }
  </style>
</head>
<body>

<div class="container">
  <h1 class="text-center">Strava stats</h1>

  <div class="top-distances">
    <h4> Top distances </h4>
    {{distances}}
  </div>

  <hr style="margin: 3rem 0;" />
  <div class="top-speed">
    <h4> Top average speeds </h4>
    {{speeds}}
  </div>

</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
`;
