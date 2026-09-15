function compareArraysUnorderedWithDetails(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return "Arrays have different lengths";
    }

    // Sort both arrays along with keeping track of their original indices
   
    let sortedArr1 =  [].concat(arr1)
    let sortedArr2 = [].concat(arr2)
    
    let differences = 0;
    let sames = 0
    let details = [];  // To store the difference details
    
    for (let i = 0; i < sortedArr1.length; i++) {
        is_diff = true
        for (j = 0; j < sortedArr2.length; j++) {  
            if (sortedArr1[i] == sortedArr2[j]) {
                sames++
                is_diff = false
                sortedArr1[i] = null
                sortedArr2[j] = null
                break
               
            }
        }
        if (is_diff){
            differences++
        }
    
    }
   
    for (i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] == null) continue
        for (j = 0; j < sortedArr2.length; j++) {  
            if (sortedArr2[j] == null) {continue}
            else {
                details.push({
                    position_in_array_a: i,
                    value_in_array_a: sortedArr1[i],
                    value_in_array_b: sortedArr2[j],
                    difference_amount: sortedArr1[i] - sortedArr2[j]
                });
                sortedArr2[j] = null
                break
            }
        }     
    }  

    // Return result with difference details
    if (differences === 0) {
        return {
            diff: 0, text: null
        };
    } else {
        
        return {
            diff: differences,
            text: details // Return detailed differences
        };
    }
}

function algoritmaSean(array_now){
    var array_of_sean = []
    array_of_sean.push([0,0,0])
    
    for (i = 1;i<100;i++){
        a0 = 0
        array_of_sean.push([a0,i,i])
        a1 = 1
        array_of_sean.push([a1,i*2,(i*2)+1])
        a2 = 2
        array_of_sean.push([a2,i*4,(i*4)+2])
        array_of_sean.push([a2,(i*4)+1,(i*4)+3])
        a3 = 3
        array_of_sean.push([a3,i*4,(i*4)+3])
        array_of_sean.push([a3,(i*4)+1,(i*4)+2])
        a4 = 4
        array_of_sean.push([a4,i*4*2,(i*4*2)+4])
        array_of_sean.push([a4,(i*4*2)+1,(i*4*2)+5])
        array_of_sean.push([a4,(i*4*2)+2,(i*4*2)+6])
        array_of_sean.push([a4,(i*4*2)+3,(i*4*2)+7])
        a5 = 5

    }

    
    demand_hasil = 3
   
    for(tes in array_of_sean){
        
        hasil = compareArraysUnorderedWithDetails(array_now,array_of_sean[tes])
        
        if (hasil.diff == 1){         
            demand_hasil = 1
         
            if (hasil.text[0].difference_amount < 0){
                
                continue
            } else {
                break
            }
         } else if (hasil.diff == 0){
            demand_hasil = 0
          
            break
         } else if (hasil.diff == 2){
           
            demand_hasil = 2
            continue
         } else if (hasil.diff == 3){
            continue
         }
    }
    let gallonIndex;
    let waterAmount;
    if (demand_hasil == 2 || demand_hasil == 3|| demand_hasil == 0){
       
        let availableGallons = array_now
        .map((g, index) => (g > 0 ? index : null))
        .filter(index => index !== null);
        gallonIndex = availableGallons.reduce((minIndex, currentIndex) => {
            return array_now[currentIndex] > array_now[minIndex] ? currentIndex : minIndex;
        }, availableGallons[0]);
        waterAmount = Math.floor(Math.abs(Math.random()-0.5) * array_now[gallonIndex]) + 1; // Mengurangi setidaknya 1 liter
        
    } else if (demand_hasil == 1){
        gallonIndex = hasil.text[0].position_in_array_a      
        waterAmount = hasil.text[0].difference_amount     
    }
   return {index:gallonIndex,
    amount: waterAmount
   }
}

function algoritmaSeanlvl7(array_now){
    var array_of_sean = []
    array_of_sean.push([0,0,0])
    
    for (i = 1;i< 14;i++){
        
        array_of_sean.push([0,i,i])
        
        array_of_sean.push([1,i*2,(i*2)+1])
        
        array_of_sean.push([2,i*4,(i*4)+2])
        array_of_sean.push([2,(i*4)+1,(i*4)+3])
       
        array_of_sean.push([3,i*4,(i*4)+3])
        array_of_sean.push([3,(i*4)+1,(i*4)+2])
       
        array_of_sean.push([4,i*8,(i*8)+4])
        array_of_sean.push([4,(i*8)+1,(i*8)+5])
        array_of_sean.push([4,(i*8)+2,(i*8)+6])
        array_of_sean.push([4,(i*8)+3,(i*8)+7])
       
        array_of_sean.push([5,i*8,(i*8)+5])
        array_of_sean.push([5,(i*8)+1,(i*8)+4])
        array_of_sean.push([5,(i*8)+2,(i*8)+7])
        array_of_sean.push([5,(i*8)+3,(i*8)+6])

        array_of_sean.push([6,i*8,(i*8)+6])
        array_of_sean.push([6,(i*8)+1,(i*8)+7])
        array_of_sean.push([6,(i*8)+2,(i*8)+4])
        array_of_sean.push([6,(i*8)+3,(i*8)+5])

        array_of_sean.push([7,i*8,(i*8)+7])
        array_of_sean.push([7,(i*8)+1,(i*8)+6])
        array_of_sean.push([7,(i*8)+2,(i*8)+5])
        array_of_sean.push([7,(i*8)+3,(i*8)+4])

    }

    for (i = 14;i< 100;i++){
        
        array_of_sean.push([0,i,i])       
        array_of_sean.push([1,i*2,(i*2)+1])       
        array_of_sean.push([2,i*4,(i*4)+2])
        array_of_sean.push([2,(i*4)+1,(i*4)+3])      
        array_of_sean.push([3,i*4,(i*4)+3])
        array_of_sean.push([3,(i*4)+1,(i*4)+2])

    }

    demand_hasil = 3
   
    for(tes in array_of_sean){
        
        hasil = compareArraysUnorderedWithDetails(array_now,array_of_sean[tes])
        
        if (hasil.diff == 1){         
            demand_hasil = 1
         
            if (hasil.text[0].difference_amount < 0){
                
                continue
            } else {
                break
            }
         } else if (hasil.diff == 0){
            
            demand_hasil = 0
          
            break
         } else if (hasil.diff == 2){
           
            demand_hasil = 2
            continue
         } else if (hasil.diff == 3){
            continue
         }
    }
    let gallonIndex;
    let waterAmount;
    if (demand_hasil == 2 || demand_hasil == 3|| demand_hasil == 0){
       
       if (demand_hasil == 2 || demand_hasil == 3){
            availableGallons = array_now
            .map((g, index) => (g > 0 ? index : null))
            .filter(index => index !== null);
            gallonIndex = availableGallons.reduce((minIndex, currentIndex) => {
                return array_now[currentIndex] < array_now[minIndex] ? currentIndex : minIndex;
            }, availableGallons[0]);
            
            if (array_now[gallonIndex] <= 8){              
                waterAmount = 1
            } else if (array_now[gallonIndex] < 14) {
                waterAmount = 2
            } else {
                waterAmount = Math.floor(Math.abs(Math.random()-0.5) * array_now[gallonIndex]) + 1; // Mengurangi setidaknya 1 liter
            }
        } else if (demand_hasil == 0){
            availableGallons = array_now
            .map((g, index) => (g > 0 ? index : null))
            .filter(index => index !== null);
            gallonIndex = availableGallons.reduce((minIndex, currentIndex) => {
                return array_now[currentIndex] > array_now[minIndex] ? currentIndex : minIndex;
            }, availableGallons[0]);
            waterAmount = Math.floor(Math.abs(Math.random()-0.5) * array_now[gallonIndex]) + 1; // Mengurangi setidaknya 1 liter
       }
          
    } else if (demand_hasil == 1){
        gallonIndex = hasil.text[0].position_in_array_a      
        waterAmount = hasil.text[0].difference_amount     
    }
    
    return {index:gallonIndex,
     amount: waterAmount //akan mengurangi jumlah air sebanyak -waterAmount-
    }
}

/**
 * Level 8 - Impossible Nim God Algorithm
 * Uses Charles Bouton's mathematical XOR-sum theorem.
 * If Nim-Sum != 0, forces a transition to Nim-Sum = 0 (an absolute winning state).
 * If Nim-Sum == 0, plays a stalling move (reduces 1 from the largest pile).
 */
function algoritmaNimSumOptimal(array_now) {
    const piles = array_now.map(Number);
    const nimSum = piles.reduce((acc, val) => acc ^ val, 0);

    let chosenIndex = -1;
    let waterAmount = 0;

    if (nimSum !== 0) {
        // Winning position! Find a pile where reducing it makes XOR-sum == 0
        for (let i = 0; i < piles.length; i++) {
            const target = piles[i] ^ nimSum;
            if (target < piles[i]) {
                chosenIndex = i;
                waterAmount = piles[i] - target;
                break;
            }
        }
    }

    // Defensive fallback if currently in P-position (nimSum == 0)
    if (chosenIndex === -1 || waterAmount <= 0) {
        const availableGallons = piles
            .map((g, index) => (g > 0 ? index : null))
            .filter(index => index !== null);
        
        if (availableGallons.length > 0) {
            // Take 1 liter from the largest pile to prolong the game and induce player error
            chosenIndex = availableGallons.reduce((maxIdx, currIdx) => {
                return piles[currIdx] > piles[maxIdx] ? currIdx : maxIdx;
            }, availableGallons[0]);
            waterAmount = 1;
        } else {
            chosenIndex = 0;
            waterAmount = 0;
        }
    }

    return {
        index: chosenIndex,
        amount: waterAmount,
        nimSum: nimSum
    };
}

module.exports = { algoritmaSean, algoritmaSeanlvl7, algoritmaNimSumOptimal }