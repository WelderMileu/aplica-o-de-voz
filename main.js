const $ = e => document.querySelector(e);

const reprod = () => {
	const texto = $('.form-control').value;

	const synth = window.speechSynthesis; 
	const voices = synth.getVoices();
	
	const text = $('.form-control').value;
	const utterThis = new SpeechSynthesisUtterance(text);

	utterThis.rate = 0.8;
	utterThis.pitch = 1;

	synth.speak(utterThis)
}

$('.btn-dark').addEventListener('click', reprod)

