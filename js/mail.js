const mlink = document.getElementById("mlink");

const me = "kontakt";
const place = "folkfranskogen.se";

mlink.href = `mailto:${me}@${place}`;
mlink.innerText = `${me}@${place}`;
