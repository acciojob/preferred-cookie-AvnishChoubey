//your JS code here. If required.

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

document.addEventListener("DOMContentLoaded", () => {
	const fontsize = getCookie("fontSize");
	const fontcolor = getCookie('fontColor');
	const root = document.documentElement;
	root.style.setProperty('--fontsize', `${fontsize}px`);
	root.style.setProperty('--fontcolor', `${fontcolor}`);
});

document.getElementById('submit').addEventListener('click', () => {
	const fontSize = document.getElementById('fontsize');
	const fontColor = document.getElementById('fontcolor');
	document.cookie = `fontSize=${fontSize.value}`;
	document.cookie = `fontColor=${fontColor.value}`;
});