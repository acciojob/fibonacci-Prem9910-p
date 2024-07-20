function fibonacci(num) {
// your code here
	let a=0,b=1,c=0;
	if(num==1){
		return 0;
	}
	if(num==2){
		return 1;
	}
	for (let i = 3; i < num; i++) {
		c=a+b;
			
		a=b;
		b=c;
		
	}
	return c;

}

module.exports = fibonacci;
