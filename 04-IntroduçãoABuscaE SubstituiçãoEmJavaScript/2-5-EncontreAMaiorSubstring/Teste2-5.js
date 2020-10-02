let stopped = 0;

while (stopped !== 1) {

    let s1 = gets(), s2 = gets(), str1, str2, maxSubStr = 0, strings = [];

    if(s1 !== "" && s2 !== "") {

        if (s1.length < s2.length) {
            str1 = s2; str2 = s1;
        }else {
            str1 = s1; str2 = s2;
        }

        for (let i = 0; i < str2.length; i++) {
            for (let j = 0; j < str2.length; j++){
                let nstr = str2.substring(j, str2.length - i);
                    if (str1.match(nstr)) {
                        strings.push(nstr);
                        if (nstr.length > maxSubStr) maxSubStr = nstr.length;
                    }
            }
        }

        console.log(`${maxSubStr}`);

    } else {
        stopped = 1;  
    }
}