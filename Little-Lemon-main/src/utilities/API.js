const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

/**
 * 
 * @param {shahandfahad} date 
 * @returns Modifying fetchAPI function to return an object with three arrays of strings
 *         representing the available times for morning, afternoon and evening
 */
const fetchAPI = function(date) {
    let result = {morning: [], afternoon: [], evening: []};
    let random = seededRandom(date.getDate());

    // ((parseInt(i) % 12) || 12) convert time to 12hr format

    // Morning Timings
    for(let i = 9; i < 12; i++) {
        if(random() < 0.5) {
            result.morning.push(((parseInt(i) % 12) || 12) + ':00');
        }
        if(random() < 0.5) {
            result.morning.push(((parseInt(i) % 12) || 12) + ':30');
        }
    }  
    
    // Afternoon Timings
    for(let i = 12; i < 16; i++) {
        if(random() < 0.5) {
            result.afternoon.push(((parseInt(i) % 12) || 12) + ':00');
        }
        if(random() < 0.5) {
            result.afternoon.push(((parseInt(i) % 12) || 12) + ':30');
        }
    }
    
    // Evening Timings
    for(let i = 16; i < 21; i++) {
        if(random() < 0.5) {
            result.evening.push(((parseInt(i) % 12) || 12) + ':00');
        }
        if(random() < 0.5) {
            result.evening.push(((parseInt(i) % 12) || 12) + ':30');
        }
    }


    return result;
};

const submitAPI = function(formData) {
    return true;
};

export {fetchAPI, submitAPI};