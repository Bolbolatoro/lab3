function find(arr, value)
{
    for (var i = 0; i < arr.length; i++)
    {
        if ( value === arr[i] ) return i;
    }
    return -1;
}
 
var arr = ["test", 2, 1.5, false];
alert( find(arr, 2) );
alert( find(arr, true) );
alert( find(arr, false) );