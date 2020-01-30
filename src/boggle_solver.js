import React from 'react';
import RandomGrid from './RandomGrid.js';


export default boggle_solver;

let grid = RandomGrid();
//let  possibleWords = 
boggle_solver(grid);


function boggle_solver(grid) { 
    //let foundWords  = new Array(); 
    //let found = new HashMap();
    var found = [];
    getValidWords(grid, found);
    return found;
}


function getValidWords(grid, found) { 
    if(grid.length === 0 ){//|| guess.length === 0){
        return [];
    }
    let gridColumnLength = grid.length;
    let gridRowLength = grid[0].length;

    let visited = new Array(gridColumnLength); 
      
    // Looping to create 2-Dimensional array
    for (let i = 0; i < gridColumnLength; i++) { 
        visited[i] = new Array(gridRowLength); 
    } 
            
    // Loop to initilize all 2D array positions in visited as false
    for (let i = 0; i < gridColumnLength; i++) { 
        for (let j = 0; j < gridRowLength; j++) { 
            visited[i][j] = false; 
        } 
    } 

    let str = "";

    // Consider every character and look for all words 
    // starting with this character 
    for (let i = 0; i < gridColumnLength; i++){ 
        for (let j = 0; j < gridRowLength; j++) {
            recursivelyFindWords(grid, visited, i, j, str, found); 
        }
    }

}

// A recursive function to store all valid words present in boggle 
function recursivelyFindWords(grid, visited, i, j, str, found) { 
    // Mark current position in visited as true
    // and append current character to str
    visited[i][j] = true; 
    str += grid[i][j]; 

    // If str is 3 characters or more and present in dictionary
    // then store it in array found
    if(str.length >= 3){
        //if (guess === str) {
            //found.set(str, 1);
            //found.push(str);
            found = true;
        //}
    }
    let gridColumnLength = grid.length;
    let gridRowLength = grid[0].length;

    // Check all 8 adjacent cells of grid[i][j] 
    for (let row = i - 1; row <= i + 1 && row < gridColumnLength; row++) {
        for (let col = j - 1; col <= j + 1 && col < gridRowLength; col++){ 
            if (row >= 0 && col >= 0 && !visited[row][col]) {
                recursivelyFindWords(grid, visited, row, col, str, found); 

            }
        }
   }

    // Reset str to empty and visited position of current cell to false 
    str = "" ;
    visited[i][j] = false;
}

class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
    this.collisions = 0;
    this.keys = [];
  }

  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }

    return hashValue;
  }


  _getBucketIndex(key) {
    const hashValue = this.hash(key);
    const bucketIndex = hashValue % this.buckets.length;
    return bucketIndex;
  }

  set(key, value) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      // initialize array and save key/value
      const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index
      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
      this.buckets[bucketIndex].push({key, value, keyIndex});
      this.size++;
      // Optional: keep count of collisions
      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
    } else {
      // override existing value
      this.buckets[bucketIndex][entryIndex].value = value;
    }

    // check if a rehash is due
    if(this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.buckets.length * 2);
    }

    return this;
  }

  get(key) {
    const {bucketIndex, entryIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return;
    }

    return this.buckets[bucketIndex][entryIndex].value;
  }

  has(key) {
    return !!this.get(key);
  }

  _getIndexes(key) {
    const bucketIndex = this._getBucketIndex(key);
    const values = this.buckets[bucketIndex] || [];

    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
      const entry = values[entryIndex];
      if(entry.key === key) {
        return {bucketIndex, entryIndex};
      }
    }

    return {bucketIndex};
  }

  delete(key) {
    const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);

    if(entryIndex === undefined) {
      return false;
    }

    this.buckets[bucketIndex].splice(entryIndex, 1);
    delete this.keys[keyIndex];
    this.size--;

    return true;
  }

  rehash(newCapacity) {
    const newMap = new HashMap(newCapacity);

    this.keys.forEach(key => {
      if(key) {
        newMap.set(key.content, this.get(key.content));
      }
    });

    // update bucket
    this.buckets = newMap.buckets;
    this.collisions = newMap.collisions;
    // Optional: both `keys` has the same content except that the new one doesn't have empty spaces from deletions
    this.keys = newMap.keys;
  }

  getLoadFactor() {
    return this.size / this.buckets.length;
  }
}
