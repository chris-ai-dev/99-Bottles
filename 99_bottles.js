function bottleSong() {
  // Write your code here!

  //count down from 99 until1
     //display the count down from 99- 1

     //when/if it reaches 0 
        //display no more bottles go to store mess and end program

  let bottles = 99;
  while(bottles > 0) {
    bottles--;
    let oneLess = bottles-1;
    console.log(bottles.toString(), "bottles of beer on the wall,", bottles.toString(), "bottles of beer. \nTake one down and pass it around,",oneLess.toString(), "bottles of beer on the wall.");
    
    if(bottles == 2 ) {
      console.log("1 bottle of beer on the wall, 1 bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall. \nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
      break;
    }
    
  }    
};

bottleSong();
