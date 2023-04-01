const mlink = document.getElementById("mlink");
const pnumber = document.getElementById("pnumber");

const me = "folkfranskogen";
const place = "gmail.com";
const phone1 = "+46";
const phone2 = 733427860;

mlink.href = `mailto:${me}@${place}`;
mlink.innerText = `${me}@${place}`;

pnumber.href = `tel:${phone1}${phone2 + 1}`;
pnumber.innerText = `073 342 78 61`;
