function fibonacci(num) {
// your code here
	let a=-1,b=1,c=0;
	for (let i = 0; i < num; i++) {
		c=a+b;
			console.loge(c);
		a=b;
		b=c;
		
	}

}

module.exports = fibonacci;
