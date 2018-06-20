
function average(score){

	var mes;
	var s=0;
	for(var i=0; i<score.length; i++){

		s+=score[i];


}
mes=s/score.length;
return Math.round(mes);
//return parseInt(mes);
}
score=[2, 3, 5, 6, 484, 8181, 118];
console.log(average(score));

