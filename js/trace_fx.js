function trace_trial(){

	var fixerIO_hist_url = "http://data.fixer.io/api/"
	fixerIO_hist_url += document.getElementById('date_rate').value;
	fixerIO_hist_url += '?access_key=53af8a9128afac978a04648d58c79bc9&base='
	fixerIO_hist_url += document.getElementById('debit_currency').value
	fixerIO_hist_url += '&symbols='
	fixerIO_hist_url += document.getElementById('credit_currency').value
	alert(fixerIO_hist_url)
	
	var fixerIO_url = 'http://data.fixer.io/api/2018-02-02?access_key=53af8a9128afac978a04648d58c79bc9&base=EUR&symbols=GBP'
	var fixerIO_test = 'http://data.fixer.io/api/2013-12-24?access_key=53af8a9128afac978a04648d58c79bc9'

	
	var request = new XMLHttpRequest();
	request.open('GET', fixerIO_hist_url, true)

	request.onload = function (){
		var fixerIO_data = JSON.parse(this.response);

		if(request.status >= 200 && request.status < 400) {
			console.log(fixerIO_data);
			const app = document.getElementById('latest_rate');
			
			const latest_title = document.createElement('h1');
			latest_title.textContent = 'Latest rate';
			
			const latest_data = document.createElement('p');
			latest_data.textContent = fixerIO_data.rates[document.getElementById('credit_currency').value];
			
			
			var report_section = document.getElementById("report_section");
			report_section.style.display = "block";

			const result_title = document.createElement('h2');
			result_title.textContent = "About your payment";
			
			const result_desc = document.createElement('h3');
			result_desc.textContent = "Blabla";
			
			const traceFX_report = document.getElementById('TraceFX_report');
			traceFX_report.appendChild(result_title);
			traceFX_report.appendChild(result_desc);
			
		margin_avg = parseFloat(document.getElementById('rate_applied').value) - parseFloat(fixerIO_data.rates[document.getElementById('credit_currency').value])
		
		var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
		  type: 'bar',
		  data: {
			labels: ['Average', 'Low'],
			datasets: [{
			  label: 'Margin vs',
			  data: [margin_avg, 0],
			  backgroundColor: "rgba(0,155,251,0.4)"
			}]
		  }
		});
			
		} else {
			console(request.status);
			const app = document.getElementById('latest_rate');
			
			const latest_title = document.createElement('h1');
			latest_title.textContent = 'Latest rate';
			
			const latest_data = document.createElement('p');
			latest_data.textContent = 'Not working';
			app.appendChild(latest_title);
			app.appendChild(latest_data);
		}
	}

	request.send();

}