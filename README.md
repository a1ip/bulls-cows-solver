Калькулятор для игры «Быки и коровы»
====================================

Считает все возможные ответы для игры «Быки и коровы», основываясь на истории попыток угадывания.

Web based example can be launched from [https://frank-deng.github.io/bulls-cows-solver/index.html](https://frank-deng.github.io/bulls-cows-solver/index.html).

Usage
-----

Node

	var bulls_cows_solver = require('bulls-cows-solver');
	var result = bulls_cows_solver([
		{guess:'1234', result:'1A3B'},
		{guess:'2134', result:'2A2B'},
	]);

Brwoser

	<script type='text/javascript' src='bulls-cows-solver.js'></script>
	<script type='text/javascript'>
		var result = bulls_cows_solver([
			{guess:'1234', result:'1A3B'},
			{guess:'2134', result:'2A2B'},
		]);
	</script>

