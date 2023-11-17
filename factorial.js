function fact(n){
    fact=1;
    for(i=1;i<=n;i++){
        fact=fact*i
    }
    console.log("factorial="+fact);
}
fact(3);