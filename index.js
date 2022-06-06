const submitForm = (event) => {
  event.preventDefault();
  const serangan_hama = document.querySelector("#serangan_hama").value;
  const musim = document.querySelector("#musim").value;
  const pupuk = document.querySelector("#pupuk").value;
  const batang_padi = document.querySelector("#batang_padi").value;
  const air = document.querySelector("#air").value;
  const biji_buah = document.querySelector("#biji_buah").value;

  const goodAlert = document.querySelector("#good-alert");
  const badAlert = document.querySelector("#bad-alert");

  const payload = {
    serangan_hama: Number(serangan_hama),
    musim: String(musim),
    pupuk: String(pupuk),
    batang_padi: String(batang_padi),
    air: String(air),
    biji_buah: String(biji_buah),
  };

  fetch("https://padi-api-5000.herokuapp.com/api/predict", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json.value);
      if (json.value == "0") {
        badAlert.style.display = "none";
        goodAlert.style.display = "flex";
      } else {
        goodAlert.style.display = "none";
        badAlert.style.display = "flex";
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
