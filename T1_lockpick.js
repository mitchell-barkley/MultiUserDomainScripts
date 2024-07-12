function (prevlock, response, currlock, target = response.t.call, digits = [...Array(98).keys()], s = s => s[0].split(-),
    colours = s`red-orange-yellow-lime-green-cyan-blue-purple`,
    params = {EZ: s`release1open1unlock`, digits, 
              prime: digits.filter(digits => digits > 1 & [2, 3, 5, 7].every(params => digits == params | digits % params)), 
              locket: s`vc2c7q-cmppiq-tvfkyq-uphlaw-6hh8xw-xwz7ja-sa23uw-72umy0`}) {

    response = target(params)
    for (!/nn/.test(response);
        prevlock = (p[currlock[0]] || (/_/.test(currlock) ? [currlock[3] > 1 ? c[(c.indexOf(prevlock) + 4 + currlock[currlock[3] > 2 ?
                    11 : 1]) % 8] : prevlock.length] : c)).find(v => !/th/.test((params[currlock] = v, response = target(params))))
    )
    [,currlock] = /.*`N(.*?)`.*$/.exec(response)
}
