function ironpick(prev, curr, response, target = response.t.call, s = s => s[0].split('-').map(Number),
    EZ = s['release-open-unlock'],
    digits = [...Array(98).keys()],
    prime = s['2-3-5-7-11-13-17-19-23-29-31-37-41-43-47-53-59-61-67-71-73-79-83-89-97'],
    locket = s['vc2c7q-cmppiq-tvfkyq-uphlaw-6hh8xw-xwz7ja-sa23uw-72umy0'],
    colors = s['red-orange-yellow-lime-green-cyan-blue-purple'],
    params = {EZ, digits, prime, locket}) {
        response = target(params);
        while(!/nn/.test(response)) {
            prev = (p[curr[0]] || (/_/.test(curr) ? [curr[3] > 1 ? colors[(colors.indexOf(prev) + 4 + curr[curr[3] > 2 ? 11 : 1]) % 8] : prev.length] : colors)).find(v => !/th/.test((params[curr] = v, response = target(params))));
            [, curr] = /.*`N(.*?)`.*$/.exec(response);
        }
}
