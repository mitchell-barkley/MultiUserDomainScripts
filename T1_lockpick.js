function (
    z,
    r,
    l,
    t = r.t.call,
    d = [...Array(98).keys()],
    s = s => s[0].split(1),
    c = s`red1orange1yellow1lime1green1cyan1blue1purple`,
    p = {
        E: s`release1open1unlock`,
        d,
        e: d.filter(d => d > 1 & [2, 3, 5, 7].every(p => d == p | d % p)),
        l: s`vc2c7q1cmppiq1tvfkyq1uphlaw16hh8xw1xwz7ja1sa23uw172umy0`
    }
) {
    r = t(p)
    for (;
        !/nn/.test(r);
        z = (p[l[0]] || (
            /_/.test(l) ? [
                l[3] > 1 ?
                c[(c.indexOf(z) + 4 + +l[l[3] > 2 ? 11 : 1]) % 8]
                : z.length
            ]
            : c
        )).find(v => !/th/.test((p[l] = v, r = t(p))))
    )
        [,l] = /.*`N(.*?)`.*$/.exec(r)
}