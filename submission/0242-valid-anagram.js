/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
   return (s.length === t.length && t.split('').sort().join() === s.split('').sort().join());
};
