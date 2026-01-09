const plastic_min = document.getElementById("plastic_min");
const plastic_plus = document.getElementById("plastic_plus");
const plastic_inp = document.getElementById("plastic_inp");
const plastic_res = document.getElementById("plastic_res");

let count = 0;
plastic_inp.value = count;
plastic_res.innerText = "₼ " + (count * 0.1).toFixed(2);

function update() {
  plastic_res.innerText = "₼ " + (count * 0.1).toFixed(2);
  update7();
  updateTotalItems();
  updateCo2();
}

function pet_plus() {
  count++;
  plastic_inp.value = count;
  update();
}

function pet_min() {
  if (count > 0) {
    count--;
    plastic_inp.value = count;
    update();
  }
}

plastic_inp.addEventListener("input", () => {
  count = Number(plastic_inp.value);

  if (isNaN(count) || count < 0) {
    count = 0;
  }

  plastic_inp.value = count;
  update();
});

const ali_min = document.getElementById("ali_min");
const ali_plus = document.getElementById("ali_plus");
const ali_inp = document.getElementById("ali_inp");
const ali_res = document.getElementById("ali_res");

let count2 = 0;
ali_inp.value = count2;
ali_res.innerText = "₼ " + (count2 * 0.15).toFixed(2);

function update2() {
  ali_res.innerText = "₼ " + (count2 * 0.15).toFixed(2);
  update7();
  updateTotalItems();
  updateCo2();
}

function alim_plus() {
  count2++;
  ali_inp.value = count2;
  update2();
}

function alim_min() {
  if (count2 > 0) {
    count2--;
    ali_inp.value = count2;
    update2();
  }
}

ali_inp.addEventListener("input", () => {
  count2 = Number(ali_inp.value);

  if (isNaN(count2) || count2 < 0) {
    count2 = 0;
  }

  ali_inp.value = count2;
  update2();
});

const gla_min = document.getElementById("gla_min");
const gla_plus = document.getElementById("gla_plus");
const gla_inp = document.getElementById("gla_inp");
const gla_res = document.getElementById("gla_res");

let count3 = 0;
gla_inp.value = count3;
gla_res.innerText = "₼ " + (count3 * 0.08).toFixed(2);

function update3() {
  gla_res.innerText = "₼ " + (count3 * 0.08).toFixed(2);
  update7();
  updateTotalItems();
  updateCo2();
}

function glass_plus() {
  count3++;
  gla_inp.value = count3;
  update3();
}

function glass_min() {
  if (count3 > 0) {
    count3--;
    gla_inp.value = count3;
    update3();
  }
}

gla_inp.addEventListener("input", () => {
  count3 = Number(gla_inp.value);

  if (isNaN(count3) || count3 < 0) {
    count3 = 0;
  }

  gla_inp.value = count3;
  update3();
});

const pap_min = document.getElementById("pap_min");
const pap_plus = document.getElementById("pap_plus");
const pap_inp = document.getElementById("pap_inp");
const pap_res = document.getElementById("pap_res");

let count4 = 0;
pap_inp.value = count4;
pap_res.innerText = "₼ " + (count4 * 0.02).toFixed(2);

function update4() {
  pap_res.innerText = "₼ " + (count4 * 0.02).toFixed(2);
  update7();
  updateTotalItems();
  updateCo2();
}

function paper_plus() {
  count4++;
  pap_inp.value = count4;
  update4();
}

function paper_min() {
  if (count4 > 0) {
    count4--;
    pap_inp.value = count4;
    update4();
  }
}

pap_inp.addEventListener("input", () => {
  count4 = Number(pap_inp.value);

  if (isNaN(count4) || count4 < 0) {
    count4 = 0;
  }

  pap_inp.value = count4;
  update4();
});

const ele_min = document.getElementById("ele_min");
const ele_plus = document.getElementById("ele_plus");
const ele_inp = document.getElementById("ele_inp");
const ele_res = document.getElementById("ele_res");

let count5 = 0;
ele_inp.value = count5;
ele_res.innerText = "₼ " + (count5 * 1.5).toFixed(2);

function update5() {
  ele_res.innerText = "₼ " + (count5 * 1.5).toFixed(2);
  update7();
  updateTotalItems();
  updateCo2();
}

function elec_plus() {
  count5++;
  ele_inp.value = count5;
  update5();
}

function elec_min() {
  if (count5 > 0) {
    count5--;
    ele_inp.value = count5;
    update5();
  }
}

ele_inp.addEventListener("input", () => {
  count5 = Number(ele_inp.value);

  if (isNaN(count5) || count5 < 0) {
    count5 = 0;
  }

  ele_inp.value = count5;
  update5();
});

const bat_min = document.getElementById("bat_min");
const bat_plus = document.getElementById("bat_plus");
const bat_inp = document.getElementById("bat_inp");
const bat_res = document.getElementById("bat_res");

let count6 = 0;
bat_inp.value = count6;
bat_res.innerText = "₼ " + (count6 * 0.25).toFixed(2);

function update6() {
  bat_res.innerText = "₼ " + (count6 * 0.25).toFixed(2);
  update7();
  updateTotalItems();
  updateCo2();
}

function bata_plus() {
  count6++;
  bat_inp.value = count6;
  update6();
}

function bata_min() {
  if (count6 > 0) {
    count6--;
    bat_inp.value = count6;
    update6();
  }
}

bat_inp.addEventListener("input", () => {
  count6 = Number(bat_inp.value);

  if (isNaN(count6) || count6 < 0) {
    count6 = 0;
  }

  bat_inp.value = count6;
  update6();
});

const total_sum = document.getElementById("total_sum");
const total_item = document.getElementById("total_item");
const co2 = document.getElementById("co2");
const env = document.getElementById("env");
const envAZ = document.getElementById("envAZ");

function update7() {
  const total =
    count * 0.1 +
    count2 * 0.15 +
    count3 * 0.08 +
    count4 * 0.02 +
    count5 * 1.5 +
    count6 * 0.25;

  total_sum.innerText = "₼ " + total.toFixed(2);
}

function updateTotalItems() {
  const totalItems = count + count2 + count3 + count4 + count5 + count6;
  total_item.innerText = totalItems;
}

function updateCo2() {
  const totalCo2 =
    count * 0.08 +
    count2 * 0.17 +
    count3 * 0.32 +
    count4 * 0.9 +
    count5 * 2.5 +
    count6 * 0.05;

  let carkm =
    count * 0.4 +
    count2 * 0.4 +
    count3 * 1.5 +
    count4 * 4.3 +
    count5 * 11.9 +
    count6 * 0.2;
  co2.innerText = totalCo2.toFixed(2) + " kg";
  env.innerText =
    "You're saving " +
    totalCo2.toFixed(2) +
    " kg of CO₂ emissions. That's equivalent to " +
    carkm.toFixed(2) +
    " km not driven by car!";
  envAZ.innerText =
    totalCo2.toFixed(2) +
    " kq CO₂ emissiyasının qarşısını almısan. Bu da avtomobillə " +
    carkm.toFixed(2) +
    " km yol getməməyə bərabərdir!";
}
