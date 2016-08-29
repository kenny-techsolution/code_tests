//https://leetcode.com/problems/rectangle-area/
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var ABCD = Math.abs((C-A)*(D-B));
    var EFGH = Math.abs((G-E)*(H-F));

    if(A>=G||B>=H||C<=E||D<=F){
        return ABCD+EFGH;
    }
    var overLapArea = Math.abs((Math.min(C,G)-Math.max(A,E))*(Math.min(D,H)-Math.max(B,F)));
    return ABCD+EFGH-overLapArea;
};