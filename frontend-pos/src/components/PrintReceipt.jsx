const PrintReceipt = () => {
  const printReceipt = document.getElementById("receipt").innerHTML;
  const content = document.body.innerHTML;

  document.body.innerHTML = `
            <html>
      <head>
        <title>Receipt</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            color: #333;
          }
          .receipt-header {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .receipt-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
          }
          .receipt-total {
            font-weight: bold;
            border-top: 1px solid #ccc;
            margin-top: 15px;
            padding-top: 10px;
          }
        </style>
        </head>
        <body>
        <div class="receipt-header">Receipt</div>
        ${printReceipt}
      </body>
    </html>
        `;
  window.print();
  document.body.innerHTML = content;
  window.location.reload();
};

export default PrintReceipt;
