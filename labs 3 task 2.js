console.log(checkAnagram(["finder", "friend"]));
console.log(checkAnagram(["filter", "bob"]));
console.log(checkAnagram(["сатрап", "спарта"]));

function checkAnagram(arr) {
  if (!arr || arr.length <= 1) return false;
  
  let first_word = arr[0].split("").sort().join("");
  
  for (let i = 1; i < arr.length; i++) {
    // от i = 1, не 0
    if (arr[i].split("").sort().join("") != first_word) {
      return false;
    }
  }  
  return true;
}
