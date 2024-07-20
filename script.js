function fibonacci(num) {
// your code here
	let a=0,b=1,c=0;
	for (let i = 0; i < num; i++) {
		c=a+b;
			
		a=b;
		b=c;
		
	}
	return c;

}

module.exports = fibonacci;
