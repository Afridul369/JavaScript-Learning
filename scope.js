// Scope level & Hoisting
function abir (){
        const one = 'this is one'
        console.log("Hello Abir"); // Hello Abir
            function amit (){
                const two = 'this is two'
                console.log("Hello Amit"); // Hello Amit
    }
        // console.log(two); // eta execute hbe na karone scope r baire two k call disi tai
        
    amit()
    console.log(one); // this is one
    
}
// console.log(two); // eta execute hbe na karone scope r baire two k call disi tai
abir()
abir()
abir()
abir()
abir()