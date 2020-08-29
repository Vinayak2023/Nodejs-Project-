var str = '{"op": "equal","lhs":{"op": "add","lhs": 1,"rhs": {"op": "multiply","lhs": "x","rhs": 10}},"rhs": 21}';
var obj = JSON.parse(str);
console.log('obj:'+obj);

var add = '+';
var multiply = '*';
var equal = '=';

function transformOp( op){
if (op === 'add')
return add
else if(op === 'multiply')
return multiply
else
return equal
}

console.log(typeof obj);
var result = '';
function print(ob){

	if((typeof  ob.lhs != 'object') && (typeof ob.rhs != 'object'))
  {
  var s1 = ' ' + ob.lhs + ' ' + transformOp(ob.op) + ' ' + ob.rhs;
  console.log('s1: ' + s1) 
  	return s1;
  	
  }
  else if((typeof ob.lhs === 'object') && (typeof ob.rhs === 'object'))
  {
  result = result + print(ob.lhs) + ' ' + transformOp(ob.op) + ' ' + print(ob.rhs);
  return result;
  console.log ('ob.1: '+ result);
  }
  else if((typeof ob.lhs === 'object') && (typeof ob.rhs != 'object'))
  {
  	return result + ' ' +print(ob.lhs) + ' ' + transformOp(ob.op) + ' ' + ob.rhs;
  console.log ('ob.2: '+ result);
  } 
  else if((typeof ob.lhs != 'object') && (typeof ob.rhs === 'object'))
  {
  	result = result + ob.lhs + ' ' + transformOp(ob.op) + ' (' + print(ob.rhs) + ') ';
    return result;
  console.log ('ob.3: '+ result);
  } 
}
console.log ('result '+ print(obj));
