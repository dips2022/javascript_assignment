/*
Create an array and demonstrate how to:
      Add elements to the end.
      Remove elements from a specific index.
      Check if a specific element exists in the array
 */

      let Cars = ["Nexon", "Swift","Range Rover"];
      Cars.push("Farari");
      Cars.push("Toyota");
      Cars.push("Kia");
      Cars.splice(1, 2);
      console.log(Cars);
      console.log(Cars.indexOf("Nexon")); // 0 exists
      console.log(Cars.indexOf("Swift")); // -1 not exists

      
      for(car of Cars ){
        console.log(car);
      }