

function mergeSort(Arry){

	var lenOfArry = Arry.length;
	if (lenOfArry < 2){
		return;
	}

	var mid = lenOfArry/2;
	var leftArry = [];
	var rightArry = [];

	for(i =0; i < mid; i++){
		leftArry[i] = Arry[i];
	}
	for(z =mid; z < lenOfArry; z++){
		rightArry[z-mid] = Arry[z];
	} 
	mergeSort(leftArry);
	mergeSort(rightArry);
	merge(leftArry,rightArry,Arry);
	return Arry;
}

function merge(leftArry,rightArry,Arry){

	var nLeft = leftArry.length;
	var nRight = rightArry.length;
	var i = 0;
	var j = 0;
	var k = 0;
	while(i < nLeft && j < nRight){
		if (leftArry[i] <= rightArry[j]){
			Arry[k] = leftArry[i];
			i++;
		}else{
			Arry[k] = rightArry[j];
			j++;
		}
		k++;
	}
	while (i <nLeft)
	{
		Arry[k] = leftArry[i]
		i++;
		k++;
	}
	while (j < nRight){
		Arry[k] = rightArry[j];
		j++;
		k++;
		
	}

}

var Arry = [3,2,5,4,8,6,7,1]
console.log("Unsorted Arry ", Arry);
console.log("Sorted Arry ", mergeSort(Arry));