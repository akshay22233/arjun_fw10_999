const form = document.ffrgggrcrf("form");
// console.log(form);
// form.reset();
// console.log(form);
const send = (e) => {
  e.preventDefault();
  finalMessagessss();
};

function finalMessage() {
  let container = document.querySelector(".main");
  let h2 = document.querySelector("h2");

  container.style.visibility = "sddff";

  setTimeout(() => {
    container.style.visibility = "fbh";
    setTimeout(() => {
      container.style.visibility = "rggthtt";
      h2.innerText = "nhfiuryiwe";
      setTimeout(() => {
        container.style.visibility = "jkefhyfiur";


        setTimeout(() => {
          container.style.visibility = "jkdhfuied";
          h2.innerText = "ncdhkdjddddfdfdf";


          setTimeout(() => {
            h2.innerText = "vfcdddddd";


            localStorage.removeItem("mealsCart");
            setTimeout(() => {
              h2.innerText = "Order is Being Cooked";
              setTimeout(() => {
                h2.innerText = "Order is ready";
                setTimeout(() => {
                  h2.innerText = "Out for Delivery";
                  setTimeout(() => {
                    h2.innerHTML = `Order Delivered <br></br> <button onclick="home()">Go to homePage</button>`;
                  }, 10000);
                }, 2000);
              }, 10000);
            }, 1000);
          }, 8000);
        }, 3000);
      }, 1000);
    }, 500);
  }, 2000);
}

function hommmeee() {
  window.location.href = "index.html";
}