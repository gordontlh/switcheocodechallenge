var sum_to_n_a = function(n) {
    // iterative method
    var sum =0; 
    for(var i=0; i<=n; i++){
        sum += i; 
    }
    return sum; 
};

var sum_to_n_b = function(n) {
    // recursive method
    if(n==1){ //terminating case
        return 1; 
    }
    else{
        return sum_to_n_b(n-1) + n; 
    }
};

var sum_to_n_c = function(n) {
    //using summation formula for arithmetic progression
    return (n/2)*(1+n);
};

