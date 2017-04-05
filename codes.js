
// 质数因子
// var readline = require('readline');
// var r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// var getResult = function (num){
// 	let res = [];
// 	while(num !== 1){
// 		for(let i=2; i <= num; i++){
// 			if(num % i === 0){
// 				res.push(i+" ");
//   				num = num / i;
//   				break;
// 			}
// 		}
// 	}
// 	return res.join('');
// }

// r1.on('line',function(input){
// 	let result = getResult(+input);
// 	console.log(result);
// })

// 去重排序
// var readline = require('readline');
// var r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var line = -1;
// var len = 0;
// var arr = [];
// var obj = {};
//  
// r1.on('line',function(input){
//     input = parseInt(input);
//     if(line == -1){
//         line = 1;
//         len = input;
//         arr = [];
//         obj = {};
//     }else{
//         if(!obj[input]){
//             obj[input] = 1;
//             arr.push(input);
//         }
//         if(len === 1){
//             console.log(arr.sort(function(a,b){return a-b;}).join("\n"));
//             line = -1
//         }
//         len--;
//     }
// })

// 判断素数
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// const isPrime = function (n){
// 	if(n < 2){
// 		return false;
// 	}
// 	if(n % 2 === 0){
// 		return false;
// 	}
// 	for(let i = 3; i*i < n; i+=2){
// 		if(n % i === 0){
// 			return false;
// 		}
// 	}
// 	return true;
// }

// rl.on('line',function(line){
// 	let res = isPrime(+line);
// 	console.log(res);
// });

// 进制转换
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// const convert = function(num){
// 	if(num.slice(0,2) === '0x'){
// 		num = num.slice(2);
// 		let n = 0;
// 		let count = num.length;
// 		let digits = '0123456789abcdef';
// 		for(let i = 0; i < num.length; i++){
// 			let b = parseInt(digits.indexOf(num[i].toLowerCase()),10);
// 			n += b * Math.pow(16,--count);
// 		}
// 		return n;
// 	}else{
// 		return num;
// 	}
// }

// rl.on('line',function(line){
// 	console.log(convert(line));
// });

// 取近似值
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// const round = function(num){
// 	if(+num <= 0){
// 		return;
// 	}
// 	let pos = num.indexOf('.');
// 	let n = num.slice(0,pos);
// 	let f = num.slice(pos+1,pos+2);
// 	return +f >= 5 ? +n+1 : +n;
// }

// rl.on('line',function(line){
// 	console.log(round(line));
// });

// 判断字符串是否回文
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// const check = function(str){
// 	return str == str.split('').reverse().join('');
// }

// rl.on('line',function(line){
// 	var res = check(line);
// 	console.log(res);
// });

// 数组去重，利用对象属性的唯一性
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// const distinct = function(arr){
// 	var obj = {};
// 	let res = [];
// 	for(let i = 0; i < arr.length; i++){
// 		if(!obj[arr[i]]){
// 			obj[arr[i]] = true;
// 			res.push(arr[i]);
// 		}
// 	}
// 	return res;
// }

// rl.on('line',function(line){
// 	var arr = line.split(',');
// 	var res = distinct(arr);
// 	console.log(res);
// });

// 不借助临时变量，交换两个数
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// const swap_one = function(a,b){
// 	a = a^b;
// 	b = a^b;
// 	a = a^b;
// 	return a+','+b;
// }

// const swap_two = function(a,b){
// 	b = b - a;
// 	a = a + b;
// 	b = a - b;
// 	return a+','+b;
// }

// rl.on('line',function(line){
// 	let input = line.split(',');
// 	var a = parseInt(input[0]);
// 	var b = parseInt(input[1]);
// 	console.log(swap_one(a,b));
// });

// 找最大差值
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// const max_diff = function(arr){
	// 偷懒的方法
	// let min = Math.min.apply(this,arr);
	// let max = Math.max.apply(this,arr);

	// 利用排序来做
	// let res = bubbleSort(arr);
	// let res = insertSort(arr);
	// let res = selectSort(arr);
	// let res = mergeSort(arr);
	// let res = quickSort(arr);
	// return res[res.length-1] - res[0];
// 	return res;
// }

// rl.on('line',function(line){
// 	let input = line.split(',');
// 	let intInput = [];
// 	input.forEach((item)=>{
// 		intInput.push(parseInt(item));
// 	});
// 	console.log(max_diff(intInput));
// });

// 冒泡排序
// function bubbleSort(arr){
// 	let len = arr.length;
// 	for(let i = 0; i < len; i++){
// 		for(let j = 0; j < len - i - 1; j++){
// 			if(arr[j] > arr[j+1]){
// 				arr[j] = arr[j]^arr[j+1];
// 				arr[j+1] = arr[j]^arr[j+1];
// 				arr[j] = arr[j]^arr[j+1];
// 			}
// 		}
// 	}
// 	return arr;
// }

// 插入排序
// function insertSort(arr){
// 	let len = arr.length,
// 		temp,
// 		j;
// 	for(let i = 1; i < len; i++){
// 		j = i;
// 		temp = arr[i];
// 		while(j > 0 && temp < arr[j-1]){
// 			arr[j] = arr[j-1];
// 			j--
// 		}
// 		arr[j] = temp;
// 	}
// 	return arr;
// }

// 选择排序
// function selectSort(arr){
// 	let len = arr.length,
// 		temp,min;
// 	for(let i = 0; i < len; i++){
// 		let min = i;
// 		for(let j = i; j < len; j++){
// 			if(arr[min] > arr[j]){
// 				min = j;
// 			}
// 		}
// 		if(i !== min){
// 			arr[min] = arr[min] - arr[i];
// 			arr[i] = arr[min] + arr[i];
// 			arr[min] = arr[i] - arr[min];
// 		}
// 	}
// 	return arr;
// }

// 归并排序
// function mergeSort(arr){
// 	let len = arr.length;
// 	if(len === 1){
// 		return arr;
// 	}
// 	let mid = Math.floor(len / 2);
// 	let left = arr.slice(0,mid);
// 	let right = arr.slice(mid);
// 	return merge(mergeSort(left),mergeSort(right));
// 	function merge(left,right){
// 		let res = [];
// 		while(left.length && right.length){
// 			if(left[0] < right[0]){
// 				res.push(left.shift());
// 			}else{
// 				res.push(right.shift());
// 			}
// 		}
// 		while(left.length){
// 			res.push(left.shift());
// 		}
// 		while(right.length){
// 			res.push(right.shift());
// 		}
// 		return res;
// 	}
// }

// 快速排序
// function quickSort(arr){
// 	quick(arr,0,arr.length-1);
// 	function quick(arr,left,right){
// 		let index;
// 		if(arr.length > 1){
// 			index = partition(arr,left,right);
// 			if(left < index - 1){
// 				quick(arr,left,index-1);
// 			}
// 			if(right > index){
// 				quick(arr,index,right);
// 			}
// 		}
// 	}
// 	function partition(arr,left,right){
// 		let mid = Math.floor((left+right)/2);
// 		let pivot = arr[mid];
// 		let temp;
// 		let i = left;
// 		let j = right;
// 		while(i <= j){
// 			while(arr[i] < pivot){
// 				i++;
// 			}
// 			while(arr[j] > pivot){
// 				j--;
// 			}
// 			if(i <= j){
// 				temp = arr[i];
// 				arr[i] = arr[j];
// 				arr[j] = temp;
// 				i++;
// 				j--;
// 			}
// 		}
// 		return i;
// 	}
// }

// 二分搜索
// function binarySearch(arr,item){
// 	let low = 0,
// 		high = arr.length - 1,
// 		mid,element;
// 	while(low < high){
// 		mid = Math.floor((low + high)/2);
// 		element = arr[mid];
// 		if(element < item){
// 			low = mid + 1;
// 		}else if(element > item){
// 			high = mid - 1;
// 		}else{
// 			return mid;
// 		}
// 	}
// 	return -1;
// }

// 正则表达式匹配URL
// let url = 'https://some.baidu.com:3000/one?name=feng&age=18';
// function parseURL(url){
// 	let baseurl = url.split('?')[0],
// 		querystring = url.split('?')[1],
// 		protocol,
// 	 	host,
// 	 	port,
// 	 	path;
// 	baseurl.replace(/(^http|https|ftp):\/\/(.+):(\d{1,5})\/(\w+)/,function(match,$0,$1,$2,$3,index,origin){
// 		protocol = $0;
// 		host = $1;
// 		port = $2;
// 		path = $3;
// 	});
// 	let query = {};
// 	querystring.split('&').forEach((param)=>{
// 		let key = param.split('=')[0];
// 		let value = param.split('=')[1];
// 		query[key] = value;
// 	});
// 	let res = {
// 		protocol,
// 		host,
// 		port,
// 		path,
// 		query
// 	};
// 	return res;
// }
// console.log(parseURL(url));


// 基础模板引擎
// let tpl = '<div>I am {name}, my website is <a href="{website}">{website}</a>!</div>';
// let data = {
//   name: '<scr' + 'ipt>document.body.innerHTML="XSS!"</' + 'script>',
//   website: '<b>html</b>'
// };
// let reg = /{(.+?)}/g;
// let newStr = tpl.replace(reg,function(match){
// 	let key = match.slice(1,match.length-1);
// 	return data[key];
// });
// console.log(newStr);