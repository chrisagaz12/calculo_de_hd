// JavaScript Document
function calculoHd() {
				var canal = document.getElementById("canal");
				var dias = document.getElementById("dias");
				var horas = document.getElementById("horas");
				var bitrate = document.getElementById("bitrate");

				var calculoHoras = ((canal.value * ((bitrate.value * 3600) / 8192)) / 1024);
				var calculoDia = (horas.value * calculoHoras);
				var calculoTotal = ((dias.value * calculoDia)/ 1024);

				var horasemMb = ((calculoHoras * 1024).toFixed(2));
				var horasemGb = ((calculoHoras).toFixed(2));
				var horasemTb = ((calculoHoras / 1024).toFixed(2));
				// document.getElementById("horasemMb").innerHTML = horasemMb;
				document.getElementById("horasemGb").innerHTML = horasemGb;
				document.getElementById("horasemTb").innerHTML = horasemTb;
				

				var diasemMb = ((calculoDia * 1024).toFixed(2));
				var diasemGb = ((calculoDia).toFixed(2));
				var diasemTb = ((calculoDia / 1024).toFixed(2));
				// document.getElementById("diasemMb").innerHTML = diasemMb;
				document.getElementById("diasemGb").innerHTML = diasemGb;
				document.getElementById("diasemTb").innerHTML = diasemTb;

				var totalemMb = ((calculoTotal * 1024 * 1024).toFixed(2));
				var totalemGb = ((calculoTotal * 1024).toFixed(2));
				var totalemTb = ((calculoTotal).toFixed(2));
				// document.getElementById("totalemMb").innerHTML = totalemMb;
				document.getElementById("totalemGb").innerHTML = totalemGb;
		  		document.getElementById("totalemTb").innerHTML = totalemTb;
				
				
				
				

			}
			
			function limpar(){
				
				document.getElementById("canal").value = '';
				document.getElementById("dias").value = '';
				document.getElementById("horas").value = '24';
				document.getElementById("bitrate").value = '';
				
				document.getElementById("horasemGb").innerHTML = '';
				document.getElementById("horasemTb").innerHTML = '';
				
				document.getElementById("diasemGb").innerHTML = '';
				document.getElementById("diasemTb").innerHTML = '';
				
				document.getElementById("totalemGb").innerHTML = '';
		  		document.getElementById("totalemTb").innerHTML = '';
		
				
			}
