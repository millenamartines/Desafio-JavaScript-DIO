let N = parseInt(gets());
let nums = {};
let ns;
for (let i = 0; i < N; i++) {
    ns = gets();
    if(typeof nums[ns] === 'undefined')
        nums[ns] = {valor: parseInt(ns), cnt:  1};
    else
        nums[ns].cnt++;
}



//console.log(nums);

for(var [key, n] of Object.entries(nums)){
    console.log(`${n.valor} aparece ${n.cnt} vez(es)`);
}