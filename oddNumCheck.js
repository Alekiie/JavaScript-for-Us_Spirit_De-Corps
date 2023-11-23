const is_odd=(num)=>{
    if(num<0){
        return false
    }else{
        if(num%2!=0){
            return true;
        }else{
            return false;
        }

    }
};

const check_odd_in_range=(start,end)=>{
    let odds = [];
    for(num=start;num<=end;num++){
        if(is_odd(num)){
            odds.push(num);
        }
    }
    return odds;
};

const results = check_odd_in_range(1,20);
console.log(results)