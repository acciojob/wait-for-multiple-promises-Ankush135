//your JS code here. If required.
const output = document.getElementById("output")

function makePromise(name) {
  const delay = Math.random() * 2 + 1;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000);
  });
}

const p1 = makePromise("Promise 1");
const p2 = makePromise("Promise 2");
const p3 = makePromise("Promise 3");

// Wait for all
Promise.all([p1, p2, p3]).then((results) => {
  

  const loadingRow = document.getElementById("loading");
  if (loadingRow) loadingRow.remove();


  results.forEach((p) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = p.name;

    const td2 = document.createElement("td");
    td2.innerText = p.time.toFixed(3);

    tr.appendChild(td1);
    tr.appendChild(td2);

    output.appendChild(tr);
  });


  const total = Math.max(...results.map(r => r.time));

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${total.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});