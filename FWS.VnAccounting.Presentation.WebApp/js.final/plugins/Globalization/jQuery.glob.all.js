(function (d) {
    var nL = "zh-Hant",
        zlb = "bosanski",
        nV = "es-US",
        mV = "es-PR",
        lV = "es-NI",
        kV = "es-HN",
        ylb = "English (Singapore)",
        jV = "en-SG",
        iV = "es-SV",
        xlb = "dddd, d MMMM, yyyy h:mm:ss tt",
        wlb = "dddd, d MMMM, yyyy h:mm tt",
        vlb = "dddd, d MMMM, yyyy",
        ulb = "English (Malaysia)",
        hV = "en-MY",
        gV = "es-BO",
        tlb = "English (India)",
        fV = "en-IN",
        eV = "ar-QA",
        dV = "es-PY",
        cV = "ar-BH",
        bV = "es-UY",
        aV = "ar-AE",
        ZU = "es-CL",
        YU = "en-PH",
        XU = "ar-KW",
        WU = "sr-Cyrl-ME",
        VU = "es-EC",
        slb = "English (Zimbabwe)",
        UU = "en-ZW",
        TU = "ar-LB",
        SU = "sr-Latn-ME",
        RU = "es-AR",
        QU = "en-TT",
        PU = "ar-JO",
        OU = "sr-Cyrl-RS",
        NU = "es-PE",
        rlb = "dddd, dd MMMM yyyy hh:mm:ss tt",
        qlb = "dddd, dd MMMM yyyy hh:mm tt",
        plb = "English (Belize)",
        MU = "en-BZ",
        LU = "ar-SY",
        olb = "juovlâmáánu",
        nlb = "skammâmáánu",
        mlb = "roovvâdmáánu",
        llb = "čohčâmáánu",
        klb = "porgemáánu",
        jlb = "syeinimáánu",
        ilb = "kesimáánu",
        hlb = "vyesimáánu",
        glb = "cuáŋuimáánu",
        flb = "njuhčâmáánu",
        elb = "kuovâmáánu",
        dlb = "uđđâivemáánu",
        clb = "lávárdâh",
        blb = "vástuppeivi",
        alb = "tuorâstâh",
        Zkb = "koskokko",
        Ykb = "majebargâ",
        Xkb = "vuossargâ",
        Wkb = "pasepeivi",
        KU = "smn-FI",
        JU = "sr-Latn-RS",
        IU = "es-CO",
        Vkb = "English (Caribbean)",
        HU = "en-029",
        GU = "ar-YE",
        mL = "MMMM d'. p. '",
        lL = "MMMM d'. p. 'yyyy H:mm:ss",
        kL = "MMMM d'. p. 'yyyy H:mm",
        jL = "MMMM d'. p. 'yyyy",
        Ukb = "rosttovmannu",
        Tkb = "skamm´mannu",
        Skb = "kålggmannu",
        Rkb = "čõhččmannu",
        Qkb = "på´rǧǧmannu",
        Pkb = "suei´nnmannu",
        Okb = "ǩie´ssmannu",
        Nkb = "vue´ssmannu",
        Mkb = "njuhččmannu",
        Lkb = "pâ´zzlâšttammannu",
        Kkb = "tä´lvvmannu",
        Jkb = "ođđee´jjmannu",
        iL = "rost",
        Sv = "ska",
        hL = "kålg",
        gL = "čõh",
        fL = "på´r",
        eL = "suei",
        dL = "ǩie",
        cL = "vue",
        Rv = "njuh",
        bL = "pâzl",
        aL = "tä´lvv",
        ZK = "ođjm",
        Ikb = "rosttovmään",
        Hkb = "skamm´mään",
        Gkb = "kålggmään",
        Fkb = "čõhččmään",
        Ekb = "på´rǧǧmään",
        Dkb = "suei´nnmään",
        Ckb = "ǩie´ssmään",
        Bkb = "vue´ssmään",
        Akb = "njuhččmään",
        zkb = "pâ´zzlâšttammään",
        ykb = "tä´lvvmään",
        xkb = "ođđee´jjmään",
        Qv = "v",
        YK = "vu",
        wkb = "nelljdpei´vv",
        vkb = "mââibargg",
        ukb = "vuõssargg",
        tkb = "pâ´sspei´vv",
        FU = "sms-FI",
        skb = "понедјељак",
        ux = "bs-Cyrl",
        EU = "bs-Cyrl-BA",
        DU = "es-VE",
        rkb = "English (Jamaica)",
        CU = "en-JM",
        BU = "ar-OM",
        AU = "sma-SE",
        zU = "sr-Cyrl-BA",
        yU = "es-DO",
        qkb = "English (South Africa)",
        xU = "en-ZA",
        wU = "ar-TN",
        vU = "goeven",
        uU = "rahkan",
        tU = "golken",
        sU = "skïereden",
        rU = "mïetsken",
        qU = "snjaltjen",
        pU = "ruffien",
        oU = "suehpeden",
        nU = "voerhtjen",
        mU = "njoktjen",
        lU = "goevten",
        kU = "tsïengelen",
        Pv = "goev",
        Ov = "rahk",
        Nv = "golk",
        Mv = "skïer",
        Lv = "mïet",
        Kv = "snja",
        Jv = "ruff",
        Iv = "sueh",
        Hv = "voer",
        Gv = "njok",
        Fv = "goevt",
        Ev = "tsïen",
        jU = "goeve",
        iU = "rahka",
        hU = "golke",
        gU = "skïerede",
        fU = "mïetske",
        eU = "snjaltje",
        dU = "ruffie",
        cU = "suehpede",
        bU = "voerhtje",
        aU = "njoktje",
        ZT = "goevte",
        YT = "tsïengele",
        XT = "laav",
        WT = "bearj",
        VT = "duar",
        UT = "laavvardahke",
        TT = "bearjadahke",
        ST = "duarsta",
        RT = "gaskevåhkoe",
        QT = "dæjsta",
        PT = "måanta",
        OT = "aejlege",
        XK = "sma",
        NT = "sma-NO",
        MT = "sr-Latn-BA",
        LT = "fr-MC",
        KT = "es-PA",
        pkb = "English (Ireland)",
        JT = "en-IE",
        IT = "ar-MA",
        HT = "smj-SE",
        tx = "bs-Latn",
        GT = "bs-Latn-BA",
        FT = "fr-LU",
        ET = "es-CR",
        okb = "English (New Zealand)",
        DT = "en-NZ",
        CT = "de-LI",
        BT = "zh-MO",
        cp = "dddd, MMMM dd, yyyy H:mm:ss",
        bp = "dddd, MMMM dd, yyyy H:mm",
        AT = "dd/MMMM/yyyy H:mm:ss",
        zT = "dd/MMMM/yyyy H:mm",
        yT = "dd/MM/yyyy H:mm:ss",
        xT = "dd/MM/yyyy H:mm",
        wT = "ar-DZ",
        vT = "javllamáno",
        uT = "basádismáno",
        tT = "gålgådismáno",
        sT = "ragátmáno",
        rT = "bårggemáno",
        qT = "sjnjilltjamáno",
        pT = "biehtsemáno",
        oT = "moarmesmáno",
        nT = "vuoratjismáno",
        mT = "sjnjuktjamáno",
        lT = "guovvamáno",
        kT = "ådåjakmáno",
        Dv = "javl",
        Cv = "basá",
        Bv = "gålg",
        Av = "ragá",
        zv = "bårg",
        yv = "snji",
        xv = "bieh",
        wv = "moar",
        vv = "vuor",
        uv = "snju",
        tv = "ådåj",
        jT = "javllamánno",
        iT = "basádismánno",
        hT = "gålgådismánno",
        gT = "ragátmánno",
        fT = "bårggemánno",
        eT = "sjnjilltjamánno",
        dT = "biehtsemánno",
        cT = "moarmesmánno",
        bT = "vuoratjismánno",
        aT = "sjnjuktjamánno",
        ZS = "guovvamánno",
        YS = "ådåjakmánno",
        XS = "bier",
        WS = "lávvodahka",
        VS = "bierjjedahka",
        US = "duorastahka",
        TS = "gasskavahkko",
        SS = "dijstahka",
        RS = "mánnodahka",
        WK = "smj",
        QS = "smj-NO",
        sx = "KM",
        PS = "hr-BA",
        OS = "fr-CH",
        NS = "es-GT",
        nkb = "English (Canada)",
        MS = "en-CA",
        LS = "de-LU",
        KS = "zh-SG",
        JS = "ar-LY",
        IS = "quz-PE",
        HS = "se-FI",
        Tr = "н.е.",
        Sr = "дец",
        Rr = "нов",
        Qr = "феб",
        Pr = "децембар",
        Or = "новембар",
        Nr = "октобар",
        Mr = "септембар",
        Lr = "фебруар",
        Kr = "јануар",
        VK = "су",
        UK = "ут",
        Jr = "суб",
        Ir = "сре",
        Hr = "уто",
        Gr = "петак",
        Fr = "четвртак",
        Er = "уторак",
        rx = "понедељак",
        qx = "недеља",
        GS = "Дин.",
        ir = "sr-Cyrl",
        FS = "sr-Cyrl-CS",
        ES = "fr-CA",
        DS = "es-ES",
        mkb = "English (Australia)",
        CS = "en-AU",
        BS = "de-AT",
        AS = "zh-HK",
        zS = "ar-EG",
        yS = "quz-EC",
        px = "tzm-Latn",
        xS = "tzm-Latn-DZ",
        ox = "iu-Latn",
        wS = "iu-Latn-CA",
        lkb = "yyyy'ᠣᠨ' M'ᠰᠠᠷ᠎ᠠ'",
        kkb = "M'ᠰᠠᠷ᠎ᠠ' d'ᠡᠳᠦᠷ'",
        jkb = "yyyy'ᠣᠨ ᠤ᠋' M'ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ 'd' ᠤ᠋ ᠡᠳᠦᠷ' H:mm:ss",
        ikb = "yyyy'ᠣᠨ ᠤ᠋' M'ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ 'd' ᠤ᠋ ᠡᠳᠦᠷ' H:mm",
        hkb = "yyyy'ᠣᠨ ᠤ᠋' M'ᠰᠠᠷ᠎ᠠ  ᠢᠢᠨ 'd' ᠤ᠋ ᠡᠳᠦᠷ'",
        gkb = "ᠣᠨ ᠲᠣᠭᠠᠯᠠᠯ ᠤᠨ",
        TK = "ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        SK = "ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
        RK = "ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        QK = "ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
        PK = "ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        OK = "ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        NK = "ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        MK = "ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        LK = "ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
        KK = "ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        JK = "ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
        IK = "ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
        HK = "ᠭᠠᠷᠠᠭ ᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ",
        GK = "ᠭᠠᠷᠠᠭ ᠤᠨ ᠲᠠᠪᠤᠨ",
        FK = "ᠭᠠᠷᠠᠭ ᠤᠨ ᠳᠥᠷᠪᠡᠨ",
        EK = "ᠭᠠᠷᠠᠭ ᠤᠨ ᠭᠤᠷᠪᠠᠨ",
        DK = "ᠭᠠᠷᠠᠭ ᠤᠨ ᠬᠣᠶᠠᠷ",
        CK = "ᠭᠠᠷᠠᠭ ᠤᠨ ᠨᠢᠭᠡᠨ",
        BK = "ᠭᠠᠷᠠᠭ ᠤᠨ ᠡᠳᠦᠷ",
        nx = "mn-Mong",
        vS = "mn-Mong-CN",
        uS = "bn-BD",
        fkb = "yyyy 'йил' d-MMMM HH:mm:ss",
        ekb = "yyyy 'йил' d-MMMM HH:mm",
        dkb = "yyyy 'йил' d-MMMM",
        ckb = "пайшанба",
        bkb = "чоршанба",
        mx = "uz-Cyrl",
        tS = "uz-Cyrl-UZ",
        sS = "ms-BN",
        rS = "ga-IE",
        AK = "dis",
        qS = "se-SE",
        akb = "dddd, 'dnja' d. MMMM yyyy H.mm 'goź.'",
        Zjb = "H.mm 'goź.'",
        Yjb = "ponjeźele",
        pS = "dsb-DE",
        zK = "декабр",
        Xjb = "сентјабр",
        yK = "ијул",
        xK = "ијун",
        wK = "апрел",
        vK = "феврал",
        uK = "Јан",
        Wjb = "Сентјабр",
        tK = "Ијул",
        sK = "Ијун",
        rK = "Мај",
        qK = "Ҹа",
        pK = "Ча",
        oK = "Бе",
        Vjb = "Ҹүмә ахшамы",
        Ujb = "Чәршәнбә",
        Tjb = "Чәршәнбә ахшамы",
        Sjb = "Базар ертәси",
        lx = "az-Cyrl",
        oS = "az-Cyrl-AZ",
        nS = "sv-FI",
        sv = "n.e.",
        ap = "decembar",
        Zo = "novembar",
        Yo = "oktobar",
        Xo = "septembar",
        rv = "ponedeljak",
        nK = "Din.",
        hr = "sr-Latn",
        mS = "sr-Latn-CS",
        lS = "pt-PT",
        mK = "ty",
        kS = "nn-NO",
        jS = "nl-BE",
        iS = "it-CH",
        hS = "fr-BE",
        gS = "es-MX",
        Rjb = "English (United Kingdom)",
        fS = "en-GB",
        eS = "de-CH",
        qv = "zh-CHS",
        dS = "zh-CN",
        cS = "ar-IQ",
        bS = "gd-GB",
        aS = "prs-AF",
        ZR = "wo-SN",
        Qjb = "Kinyarwanda (Rwanda)",
        YR = "rw-RW",
        Pjb = "K'iche (Guatemala)",
        XR = "qut-GT",
        WR = "sah-RU",
        VR = "gsw-FR",
        UR = "co-FR",
        TR = "oc-FR",
        SR = "mi-NZ",
        RR = "ug-CN",
        QR = "br-FR",
        PR = "moh-CA",
        Ojb = "Mapudungun (Chile)",
        OR = "arn-CL",
        NR = "ii-CN",
        Njb = "Igbo (Nigeria)",
        MR = "ig-NG",
        LR = "kl-GL",
        KR = "lb-LU",
        JR = "ba-RU",
        IR = "nso-ZA",
        HR = "quz-BO",
        Mjb = "Yoruba (Nigeria)",
        GR = "yo-NG",
        kx = "ha-Latn",
        FR = "ha-Latn-NG",
        ER = "dv-MV",
        DR = "fil-PH",
        CR = "ps-AF",
        BR = "fy-NL",
        AR = "ne-NP",
        zR = "am-ET",
        Ljb = "dddd,MMMM dd,yyyy h:mm:ss tt",
        Kjb = "dddd,MMMM dd,yyyy h:mm tt",
        Jjb = "dddd,MMMM dd,yyyy",
        lK = "ᔪᓚᐃ",
        kK = "ᔫᓂ",
        jK = "ᒪᐃ",
        iK = "ᐄᐳᕆ",
        hK = "ᒫᑦᓯ",
        gK = "ᓯᕙᑖᕐᕕᒃ",
        jx = "iu-Cans",
        yR = "iu-Cans-CA",
        xR = "si-LK",
        wR = "syr-SY",
        vR = "kok-IN",
        uR = "gl-ES",
        tR = "lo-LA",
        sR = "km-KH",
        rR = "cy-GB",
        qR = "bo-CN",
        ix = "mn-Cyrl",
        pR = "mn-MN",
        oR = "sa-IN",
        nR = "mr-IN",
        mR = "as-IN",
        lR = "ml-IN",
        kR = "kn-IN",
        jR = "te-IN",
        iR = "ta-IN",
        hR = "or-IN",
        gR = "gu-IN",
        fR = "pa-IN",
        eR = "bn-IN",
        dR = "tt-RU",
        hx = "uz-Latn",
        cR = "uz-Latn-UZ",
        bR = "tk-TM",
        Ijb = "Kiswahili (Kenya)",
        aR = "sw-KE",
        ZQ = "ky-KG",
        YQ = "kk-KZ",
        XQ = "ms-MY",
        WQ = "se-NO",
        VQ = "mt-MT",
        UQ = "hi-IN",
        TQ = "fo-FO",
        SQ = "ka-GE",
        RQ = "af-ZA",
        QQ = "zu-ZA",
        PQ = "xh-ZA",
        OQ = "tn-ZA",
        NQ = "mk-MK",
        MQ = "hsb-DE",
        LQ = "eu-ES",
        gx = "az-Latn",
        KQ = "az-Latn-AZ",
        JQ = "hy-AM",
        IQ = "vi-VN",
        HQ = "fa-IR",
        fx = "tg-Cyrl",
        GQ = "tg-Cyrl-TJ",
        FQ = "lt-LT",
        EQ = "lv-LV",
        DQ = "et-EE",
        CQ = "sl-SI",
        BQ = "be-BY",
        AQ = "uk-UA",
        zQ = "id-ID",
        yQ = "ur-PK",
        xQ = "tr-TR",
        wQ = "th-TH",
        vQ = "sv-SE",
        uQ = "sq-AL",
        tQ = "sk-SK",
        sQ = "hr-HR",
        rQ = "ru-RU",
        qQ = "ro-RO",
        pQ = "rm-CH",
        oQ = "pt-BR",
        nQ = "pl-PL",
        mQ = "nb-NO",
        lQ = "nl-NL",
        kQ = "ko-KR",
        jQ = "ja-JP",
        iQ = "it-IT",
        hQ = "is-IS",
        gQ = "hu-HU",
        fQ = "he-IL",
        eQ = "fr-FR",
        dQ = "fi-FI",
        cQ = "el-GR",
        bQ = "de-DE",
        aQ = "da-DK",
        ZP = "cs-CZ",
        Hjb = "yyyy'年'M'月'd'日' tt hh:mm:ss",
        Gjb = "yyyy'年'M'月'd'日' tt hh:mm",
        pv = "週六",
        ov = "週五",
        nv = "週四",
        mv = "週三",
        lv = "週二",
        kv = "週一",
        jv = "週日",
        Dr = "zh-CHT",
        YP = "zh-TW",
        XP = "ca-ES",
        WP = "bg-BG",
        VP = "ar-SA",
        Fjb = "An Dùbhlachd",
        Ejb = "An t-Samhain",
        Djb = "An Dàmhair",
        Cjb = "An t-Sultain",
        Bjb = "An Lùnastal",
        Ajb = "An t-Iuchar",
        zjb = "An t-Ògmhios",
        yjb = "An Cèitean",
        xjb = "An Giblean",
        wjb = "An Gearran",
        vjb = "Am Faoilleach",
        ujb = "Disathairne",
        tjb = "Dihaoine",
        sjb = "Diardaoin",
        rjb = "Diciadain",
        qjb = "Didòmhnaich",
        fK = "ليندۍ",
        eK = "چنګاښ",
        pjb = "SAA MOYA Z.N.",
        dK = "saa moya z.n.",
        ojb = "SAA MOYA Z.M.",
        cK = "saa moya z.m.",
        njb = "Ugushyingo",
        mjb = "Ukwakira",
        ljb = "Nyakanga",
        kjb = "Gicurasi",
        jjb = "Gashyantare",
        ijb = "Mutarama",
        iv = "gat.",
        hjb = "Ku cyumweru",
        gjb = "Ku wa gatandatu",
        fjb = "Ku wa gatanu",
        ejb = "Ku wa kane",
        djb = "Ku wa gatatu",
        cjb = "Ku wa kabiri",
        bjb = "Ku wa mbere",
        ajb = "Kinyarwanda",
        Zib = "ukab'laj",
        Yib = "ukab'laj ik'",
        Xib = "ujulaj ik'",
        Wib = "ulaj ik'",
        Vib = "ub'elej ik'",
        Uib = "uwajxaq ik'",
        Tib = "uwuq ik'",
        Sib = "uwaq ik'",
        Rib = "uro' ik'",
        Qib = "ukaj ik'",
        Pib = "ukab' ik'",
        Oib = "nab'e ik'",
        Nib = "MMMM yyyy 'с.'",
        Mib = "MMMM d yyyy 'с.' H:mm:ss",
        Lib = "MMMM d yyyy 'с.' H:mm",
        Kib = "MMMM d yyyy 'с.'",
        Jib = "MM.dd.yyyy",
        Iib = "ахсынньы",
        Hib = "сэтинньи",
        Gib = "алтынньы",
        Fib = "балаҕан ыйын",
        Eib = "атырдьах ыйын",
        Dib = "бэс ыйын",
        Cib = "ыам ыйын",
        Bib = "муус устар",
        Aib = "кулун тутар",
        zib = "тохсунньу",
        bK = "ахс",
        aK = "стн",
        ZJ = "алт",
        YJ = "блҕ",
        XJ = "атр",
        WJ = "отй",
        VJ = "бэс",
        UJ = "ыам",
        TJ = "мст",
        SJ = "кул",
        RJ = "олн",
        QJ = "тхс",
        yib = "Ахсынньы",
        xib = "Сэтинньи",
        wib = "Алтынньы",
        vib = "Балаҕан ыйа",
        uib = "Атырдьах ыйа",
        tib = "Муус устар",
        sib = "Кулун тутар",
        rib = "Тохсунньу",
        PJ = "Бт",
        OJ = "Чп",
        NJ = "Оп",
        MJ = "Бн",
        qib = "бээтинсэ",
        pib = "оптуорунньук",
        oib = "бэнидиэнньик",
        nib = "баскыһыанньа",
        mib = "Vor J.-C.",
        lib = "Nowember",
        LJ = "Jüli",
        KJ = "Jüni",
        UP = "Jänner",
        kib = "Sàmschdàà",
        jib = "Dunnerschdàà",
        iib = "Mittwuch",
        hib = "Dienschdàà",
        gib = "dopu J-C",
        fib = "nuvembre",
        eib = "ghjunghju",
        dib = "ferraghju",
        cib = "ghjennaghju",
        bib = "dumenica",
        aib = "dddd,' lo 'd MMMM' de 'yyyy HH:mm:ss",
        Zhb = "dddd,' lo 'd MMMM' de 'yyyy HH:mm",
        Yhb = "dddd,' lo 'd MMMM' de 'yyyy",
        Xhb = "après Jèsus-Crist",
        Whb = "de desembre",
        Vhb = "de novembre",
        Uhb = "d'octobre",
        Thb = "de setembre",
        Shb = "de febrier",
        Rhb = "de genier",
        JJ = "set.",
        IJ = "ag.",
        HJ = "jul.",
        GJ = "jun.",
        FJ = "abr.",
        EJ = "gen.",
        DJ = "sab.",
        Qhb = "dimècres",
        Phb = "MMMM, yy",
        Ohb = "dddd, dd MMMM, yyyy h:mm:ss tt",
        Nhb = "dddd, dd MMMM, yyyy h:mm tt",
        Mhb = "dddd, dd MMMM, yyyy",
        Lhb = "Whiringa-ā-rangi",
        Khb = "Whiringa-ā-nuku",
        Jhb = "Here-turi-kōkā",
        Ihb = "Hōngongoi",
        Hhb = "Paenga-whāwhā",
        Ghb = "Poutū-te-rangi",
        Fhb = "Hui-tanguru",
        Ehb = "Kohi-tātea",
        CJ = "Ho",
        BJ = "Pa",
        AJ = "Tū",
        zJ = "Hi",
        yJ = "Ta",
        Dhb = "yyyy-'يىلى' MMMM",
        Chb = "MMMM d'-كۈنى'",
        Bhb = "yyyy-'يىلى' MMMM d-'كۈنى،' H:mm:ss",
        Ahb = "yyyy-'يىلى' MMMM d-'كۈنى،' H:mm",
        zhb = "yyyy-'يىلى' MMMM d-'كۈنى،'",
        yhb = "yyyy-M-d",
        hv = "چۈشتىن كېيىن",
        gv = "چۈشتىن بۇرۇن",
        xJ = "12-ئاي",
        wJ = "11-ئاي",
        vJ = "10-ئاي",
        uJ = "9-ئاي",
        tJ = "8-ئاي",
        sJ = "7-ئاي",
        rJ = "6-ئاي",
        qJ = "5-ئاي",
        pJ = "4-ئاي",
        oJ = "3-ئاي",
        nJ = "2-ئاي",
        mJ = "1-ئاي",
        xhb = "پەيشەنبە",
        whb = "چارشەنبە",
        vhb = "سەيشەنبە",
        uhb = "يەكشەنبە",
        thb = "g. J.-K.",
        fv = "Du",
        ev = "Here",
        shb = "Gwengolo",
        lJ = "Eost",
        rhb = "Mezheven",
        kJ = "Mae",
        qhb = "C'hwevrer",
        jJ = "Yaou",
        phb = "Merc'her",
        iJ = "Meurzh",
        ohb = "Tsothóhrha",
        nhb = "Kentenhkó:Wa",
        mhb = "Kenténha",
        lhb = "Seskehkó:Wa",
        khb = "Ohiarihkó:Wa",
        jhb = "Ohiari:Ha",
        ihb = "Onerahtohkó:Wa",
        hhb = "Onerahtókha",
        ghb = "Enniskó:Wa",
        fhb = "Tsothohrkó:Wa",
        ehb = "Ronwaia'tanentaktonhne",
        dhb = "Okaristiiáhne",
        chb = "Ratironhia'kehronòn:ke",
        bhb = "Awentataón'ke",
        ahb = "Awentatokentì:ke",
        Zgb = "Kanien'kéha",
        Ygb = "Mapudungun",
        Xgb = "yyyy'ꈎ' M'ꆪ'",
        Wgb = "M'ꆪ' d'ꑍ'",
        Vgb = "yyyy'ꈎ' M'ꆪ' d'ꑍ' H:mm:ss",
        Ugb = "yyyy'ꈎ' M'ꆪ' d'ꑍ' tt h:mm",
        Tgb = "yyyy'ꈎ' M'ꆪ' d'ꑍ'",
        dv = "ꂵꆪꈌꉈ",
        cv = "ꂵꆪꈌꈐ",
        hJ = "ꊰꑋꆪ",
        gJ = "ꊯꊪꆪ",
        fJ = "ꊰꆪ",
        eJ = "ꈬꆪ",
        dJ = "ꉆꆪ",
        cJ = "ꏃꆪ",
        bJ = "ꃘꆪ",
        aJ = "ꉬꆪ",
        ZI = "ꇖꆪ",
        YI = "ꌕꆪ",
        XI = "ꑍꆪ",
        WI = "ꋍꆪ",
        Sgb = "Onwa iri n'ibua",
        Rgb = "Onwa iri n'ofu",
        Qgb = "Onwa iri",
        Pgb = "Onwa itolu",
        Ogb = "Onwa asato",
        Ngb = "Onwa asa",
        Mgb = "Onwa isi",
        Lgb = "Onwa ise",
        Kgb = "Onwa ano",
        Jgb = "Onwa ato",
        Igb = "Onwa ibua",
        Hgb = "Onwa mbu",
        Ggb = "decembari",
        Fgb = "novembari",
        Egb = "oktobari",
        Dgb = "septembari",
        Cgb = "arfininngorneq",
        Bgb = "tallimanngorneq",
        Agb = "sisamanngorneq",
        zgb = "pingasunngorneq",
        ygb = "marlunngorneq",
        xgb = "ataasinngorneq",
        VI = "Mee",
        UI = "Sam",
        wgb = "Samschdeg",
        vgb = "Donneschdeg",
        ugb = "Mëttwoch",
        tgb = "Dënschdeg",
        sgb = "d MMMM yyyy 'й' H:mm:ss",
        rgb = "d MMMM yyyy 'й' H:mm",
        qgb = "d MMMM yyyy 'й'",
        pgb = "сентябрь",
        TI = "Шб",
        SI = "Йм",
        RI = "Кс",
        QI = "Йш",
        ogb = "Шаршамбы",
        ngb = "Йәкшәмбе",
        mgb = "Manthole",
        lgb = "Dibatsela",
        kgb = "Diphalana",
        jgb = "Ngoatobošego",
        igb = "Mosegamanye",
        hgb = "Pherekgong",
        ggb = "Mokibelo",
        fgb = "Labohlano",
        egb = "Mošupologo",
        dgb = "Lamorena",
        cgb = "Sesotho sa Leboa",
        fg = "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        eg = "dddd, dd' de 'MMMM' de 'yyyy hh:mm tt",
        PI = "Kap",
        OI = "Aya",
        bv = "Kan",
        NI = "Uma",
        MI = "Qha",
        LI = "Ant",
        KI = "Int",
        JI = "Aym",
        II = "ayr",
        HI = "Pau",
        GI = "Hat",
        FI = "Qul",
        EI = "Kapaq Raymi",
        DI = "Ayamarq'a",
        CI = "Kantaray",
        BI = "Uma raymi",
        AI = "Qhapaq Sitwa",
        zI = "Anta Sitwa",
        yI = "Inti raymi",
        xI = "Aymuray",
        wI = "ayriwa",
        vI = "Pauqar waray",
        uI = "Hatun puquy",
        tI = "Qulla puquy",
        Cr = "a",
        oo = "k",
        sI = "k'u",
        rI = "Ill",
        qI = "Ch'",
        pI = "quy",
        oI = "ati",
        nI = "kil",
        mI = "int",
        lI = "k'uychichaw",
        kI = "Illapachaw",
        jI = "Ch' askachaw",
        iI = "quyllurchaw",
        hI = "atipachaw",
        gI = "killachaw",
        fI = "intichaw",
        ex = "quz",
        eI = "ker.",
        av = "kej.",
        bgb = "Osu keresi",
        agb = "Osu kokanla",
        Zfb = "Osu kewa",
        Yfb = "Osu kesan",
        Xfb = "Osu kejo",
        Wfb = "Osu keje",
        Vfb = "Osu kefa",
        Ufb = "Osu karun",
        Tfb = "Osu kerin",
        Sfb = "Osu keta",
        Rfb = "Osu keji",
        Qfb = "Osu kinni",
        gr = "O",
        dI = "Aba",
        fr = "Ojo",
        cI = "Ise",
        bI = "Aik",
        aI = "Abameta",
        er = "Eti",
        ZH = "Ojo'bo",
        YH = "Ojo'ru",
        XH = "Isegun",
        dr = "Aje",
        WH = "Aiku",
        Wo = "AD",
        TP = "YAMMA",
        SP = "yamma",
        RP = "Yamma",
        QP = "SAFE",
        PP = "safe",
        OP = "Safe",
        NP = "Disamba",
        MP = "Nuwamba",
        LP = "Oktocba",
        KP = "Satumba",
        JP = "Agusta",
        IP = "Yuli",
        HP = "Yuni",
        GP = "Afrilu",
        FP = "Maris",
        EP = "Febreru",
        DP = "Januwaru",
        CP = "Asabar",
        BP = "Juma'a",
        AP = "Alhamis",
        zP = "Laraba",
        yP = "Talata",
        xP = "Litinin",
        wP = "Lahadi",
        vP = "Hausa",
        Pfb = "yyyy, MMMM",
        Ofb = "ddd, yyyy MMMM dd HH:mm:ss",
        Nfb = "ddd, yyyy MMMM dd HH:mm",
        Mfb = "ddd, yyyy MMMM dd",
        VH = "ޑިސެމްބަރ",
        UH = "ނޮވެމްބަރ",
        TH = "އޮކްޓޯބަރ",
        SH = "ސެޕްޓެމްބަރ",
        RH = "އޯގަސްޓް",
        QH = "ޖުލައި",
        PH = "ޖޫން",
        OH = "މެއި",
        NH = "އޭޕްރިލް",
        MH = "މާޗް",
        LH = "ފެބްރުއަރީ",
        KH = "ޖަނަވަރީ",
        Lfb = "dd/MM/yyyy HH:mm:ss",
        Kfb = "dd/MM/yyyy HH:mm",
        an = "މފ",
        Zm = "މކ",
        JH = "ޛުލްޙިއްޖާ",
        IH = "ޛުލްޤަޢިދާ",
        HH = "ޝައްވާލް",
        GH = "ރަމަޟާން",
        FH = "ޝަޢްބާން",
        EH = "ރަޖަބް",
        DH = "ޖުމާދަލްއާޚިރާ",
        CH = "ޖުމާދަލްއޫލާ",
        BH = "ރަބީޢުލްއާޚިރު",
        AH = "ރަބީޢުލްއައްވަލް",
        zH = "ޞަފަރު",
        yH = "މުޙައްރަމް",
        xH = "ހޮ",
        wH = "ހު",
        cr = "ބު",
        vH = "އަ",
        uH = "ހޯ",
        tH = "އާ",
        br = "ހޮނިހިރު",
        ar = "ހުކުރު",
        Zq = "ބުރާސްފަތި",
        Yq = "ބުދަ",
        Xq = "އަންގާރަ",
        Wq = "ހޯމަ",
        Vq = "އާދީއްތަ",
        Jfb = "Anno Domini",
        dx = "Abr",
        Ifb = "Disyembre",
        Hfb = "Nobyembre",
        Gfb = "Septyembre",
        uP = "Agosto",
        sH = "Mayo",
        tP = "Abril",
        Zu = "Lun",
        Ffb = "Mierkoles",
        Efb = "Filipino",
        rH = "yyyy, dd, MMMM, dddd h:mm:ss tt",
        qH = "yyyy, dd, MMMM, dddd h:mm tt",
        pH = "yyyy, dd, MMMM, dddd",
        oH = "ل.ه",
        Uq = "مرغومى",
        nH = "لنڈ ۍ",
        Tq = "لړم",
        Sq = "تله",
        Rq = "وږى",
        Qq = "زمرى",
        Dfb = "چنګا ښزمرى",
        Pq = "غبرګولى",
        Oq = "غويى",
        Nq = "ورى",
        Mq = "كب",
        Lq = "سلواغه",
        mH = "چارشنبه",
        Kq = "سه‌شنبه",
        Jq = "یکشنبه",
        of = "غ.و",
        nf = "غ.م",
        lH = "%n-",
        Cfb = "desimber",
        Bfb = "novimber",
        Afb = "septimber",
        kH = "maaie",
        zfb = "febrewaris",
        yfb = "jannewaris",
        Iq = "F",
        Yu = "W",
        jH = "Sn",
        xfb = "Tongersdei",
        wfb = "Woansdei",
        iH = "MMMM,yyyy",
        Xu = "बेलुकी",
        Wu = "विहानी",
        vfb = "डिसेम्बर",
        ufb = "नोभेम्बर",
        tfb = "सेप्टेम्बर",
        hH = "अप्रिल",
        sfb = "फेब्रुअरी",
        rfb = "मङ्गलवार",
        Vu = "dd MMMM, yyyy H:mm:ss",
        Uu = "dd MMMM, yyyy H:mm",
        Tu = "Yul",
        Su = "Yun",
        sP = "Dujanbir",
        rP = "Wambir",
        qP = "Ktuber",
        pP = "Cutenber",
        oP = "Ghuct",
        nP = "Yulyu",
        mP = "Yunyu",
        Ru = "Mayu",
        lP = "Yebrir",
        kP = "Maghres",
        jP = "Furar",
        iP = "Yenayer",
        Qu = "Se",
        Pu = "Ar",
        hP = "Sedh",
        Ou = "Sem",
        gP = "Amhadh",
        fP = "Aram",
        eP = "Arime",
        dP = "Acer",
        cP = "Tamazight",
        qfb = "MMMM d ቀን",
        pfb = "dddd '፣' MMMM d 'ቀን' yyyy h:mm:ss tt",
        ofb = "dddd '፣' MMMM d 'ቀን' yyyy h:mm tt",
        nfb = "dddd '፣' MMMM d 'ቀን' yyyy",
        mfb = "ዓመተ  ምሕረት",
        Nu = "ከሰዓት",
        Mu = "ጡዋት",
        gH = "ጁላይ",
        fH = "ጁን",
        eH = "ሜይ",
        dH = "ማርች",
        cH = "ቅዳሜ",
        bH = "ዓርብ",
        aH = "ሐሙስ",
        ZG = "ረቡዕ",
        YG = "ሰኞ",
        XG = "እሑድ",
        bP = "ddd, MMMM dd,yyyy h:mm:ss tt",
        aP = "ddd, MMMM dd,yyyy h:mm tt",
        ZO = "ddd, MMMM dd,yyyy",
        Br = "d/MM/yyyy",
        YO = "Tisipiri",
        XO = "Nuvipiri",
        WO = "Utupiri",
        VO = "Sitipiri",
        UO = "Aaggiisi",
        TO = "Juuni",
        SO = "Iipuri",
        RO = "Maatsi",
        QO = "Viivvuari",
        PO = "Jaannuari",
        Lu = "Tal",
        OO = "Sivataarvik",
        NO = "Tallirmiq",
        MO = "Sitammiq",
        LO = "Pingatsiq",
        KO = "Aippiq",
        JO = "Naggajjau",
        IO = "Naattiinguja",
        HO = "Inuktitut",
        lfb = "yyyy MMMM",
        kfb = "yyyy MMMM' මස 'dd' වැනිදා 'dddd h:mm:ss tt",
        jfb = "yyyy MMMM' මස 'dd' වැනිදා 'dddd h:mm tt",
        ifb = "yyyy MMMM' මස 'dd' වැනිදා 'dddd",
        hfb = "ක්‍රි.ව.",
        Ku = "ප.ව.",
        Ju = "පෙ.ව.",
        gfb = "අප්‍රේල්.",
        ffb = "දෙසැම්බර්",
        efb = "නොවැම්බර්",
        dfb = "ඔක්තෝබර්",
        cfb = "සැප්තැම්බර්",
        bfb = "අ‌ගෝස්තු",
        afb = "අ‌ප්‍රේල්",
        Zeb = "පෙබරවාරි",
        Yeb = "සෙනසුරාදා",
        Xeb = "සිකුරාදා",
        Web = "බ්‍රහස්පතින්දා",
        Veb = "අඟහරුවාදා",
        WG = "සඳුදා",
        VG = "ඉරිදා",
        sm = "($ n)",
        cx = "si",
        Iu = "ܒ.ܛ",
        Hu = "ܩ.ܛ",
        Ueb = "ܟܢܘܢ ܩܕܝܡ",
        Teb = "ܬܫܪܝ ܐܚܪܝ",
        Seb = "ܬܫܪܝ ܩܕܝܡ",
        UG = "ܐܝܠܘܠ",
        TG = "ܐܒ",
        SG = "ܬܡܘܙ",
        RG = "ܚܙܝܪܢ",
        QG = "ܐܝܪ",
        PG = "ܢܝܣܢ",
        OG = "ܐܕܪ",
        NG = "ܫܒܛ",
        Reb = "ܟܢܘܢ ܐܚܪܝ",
        Qeb = "ܚܡܫܐ ܒܫܒܐ",
        Peb = "ܐܪܒܥܐ ܒܫܒܐ",
        Oeb = "ܬܠܬܐ ܒܫܒܐ",
        Neb = "ܬܪܝܢ ܒܫܒܐ",
        GO = "ل.س.‏",
        MG = "नोवेम्बर",
        Meb = "बिरेस्तार",
        Leb = "decembro",
        Keb = "febreiro",
        Jeb = "mércores",
        LG = "luns",
        Ieb = "dd MMMM yyyy H:mm tt",
        Gu = "ແລງ",
        Fu = "ເຊົ້າ",
        KG = "ທັນວາ",
        JG = "ພະຈິກ",
        IG = "ຕຸລາ",
        HG = "ກັນຍາ",
        GG = "ສິງຫາ",
        FG = "ກໍລະກົດ",
        EG = "ມິຖຸນາ",
        DG = "ພຶດສະພາ",
        CG = "ເມສາ",
        BG = "ມີນາ",
        AG = "ກຸມພາ",
        zG = "ມັງກອນ",
        Heb = "ວັນພະຫັດ",
        Geb = "ວັນອັງຄານ",
        Feb = "ວັນອາທິດ",
        Eeb = "dddd, MMMM dd, yyyy HH:mm:ss",
        Deb = "dddd, MMMM dd, yyyy H:mm tt",
        Ceb = "'ខែ' MM 'ឆ្នាំ' yyyy",
        Beb = "'ថ្ងៃទី' dd 'ខែ' MM",
        Aeb = "d MMMM yyyy H:mm tt",
        Eu = "H:mm tt",
        Ym = "ល្ងាច",
        Xm = "ព្រឹក",
        zeb = "វិច្ឆិកា",
        yG = "ពុ",
        yeb = "ថ្ងៃសៅរ៍",
        xeb = "ថ្ងៃសុក្រ",
        web = "ថ្ងៃព្រហស្បតិ៍",
        veb = "ថ្ងៃអង្គារ",
        ueb = "ថ្ងៃច័ន្ទ",
        teb = "ថ្ងៃអាទិត្យ",
        Td = "P.M.",
        Db = "p.m.",
        Sd = "A.M.",
        Cb = "a.m.",
        seb = "Tachwedd",
        reb = "Gorffennaf",
        qeb = "Chwefror",
        xG = "Gw",
        Du = "Me",
        Cu = "Su",
        wG = "Maw",
        Hq = "Sul",
        peb = "Dydd Sadwrn",
        oeb = "Dydd Gwener",
        neb = "Dydd Iau",
        meb = "Dydd Mercher",
        leb = "Dydd Mawrth",
        keb = "Dydd Llun",
        jeb = "Dydd Sul",
        bx = "cy",
        ieb = "'ཟླ་' M'ཚེས'd",
        heb = "yyyy'ལོའི་ཟླ' M'ཚེས' d HH:mm:ss",
        geb = "yyyy'ལོའི་ཟླ' M'ཚེས' d HH:mm",
        feb = "yyyy'ལོའི་ཟླ' M'ཚེས' d",
        Bu = "ཕྱི་དྲོ",
        Au = "སྔ་དྲོ",
        eeb = "སྤྱི་ཟླ་བཅུ་གཉིས་པ།",
        deb = "སྤྱི་ཟླ་བཅུ་གཅིག་པ།",
        ceb = "སྤྱི་ཟླ་བཅུ་པོ།",
        beb = "སྤྱི་ཟླ་དགུ་པ།",
        aeb = "སྤྱི་ཟླ་བརྒྱད་པ།",
        Zdb = "སྤྱི་ཟླ་བདུན་པ།",
        Ydb = "སྤྱི་ཟླ་དྲུག་པ།",
        Xdb = "སྤྱི་ཟླ་ལྔ་པ།",
        Wdb = "སྤྱི་ཟླ་བཞི་པ།",
        Vdb = "སྤྱི་ཟླ་གསུམ་པ།",
        Udb = "སྤྱི་ཟླ་གཉིས་པ།",
        Tdb = "སྤྱི་ཟླ་དང་པོ།",
        Sdb = "མིག་དམར།",
        Rdb = "གཟའ་སྤེན་པ།",
        Qdb = "གཟའ་པ་སངས།",
        Pdb = "གཟའ་ཕུར་བུ།",
        Odb = "གཟའ་ལྷག་པ།",
        Ndb = "གཟའ་མིག་དམར།",
        Mdb = "གཟའ་ཟླ་བ།",
        Ldb = "གཟའ་ཉི་མ།",
        FO = "yyyy 'он' MMMM",
        EO = "yyyy 'оны' MMMM d H:mm:ss",
        DO = "yyyy 'оны' MMMM d H:mm",
        CO = "yyyy 'оны' MMMM d",
        BO = "yy.MM.dd",
        AO = "12 дугаар сарын",
        zO = "11 дүгээр сарын",
        yO = "10 дугаар сарын",
        xO = "9 дүгээр сарын",
        wO = "8 дугаар сарын",
        vO = "7 дугаар сарын",
        uO = "6 дугаар сарын",
        tO = "5 дугаар сарын",
        sO = "4 дүгээр сарын",
        rO = "3 дугаар сарын",
        qO = "2 дугаар сарын",
        pO = "1 дүгээр сарын",
        zu = "XII",
        yu = "XI",
        xu = "X",
        wu = "IX",
        vu = "VIII",
        uu = "VII",
        tu = "VI",
        su = "IV",
        ru = "III",
        qu = "II",
        oO = "12 дугаар сар",
        nO = "11 дүгээр сар",
        mO = "10 дугаар сар",
        lO = "9 дүгээр сар",
        kO = "8 дугаар сар",
        jO = "7 дугаар сар",
        iO = "6 дугаар сар",
        hO = "5 дугаар сар",
        gO = "4 дүгээр сар",
        fO = "3 дугаар сар",
        eO = "2 дугаар сар",
        dO = "1 дүгээр сар",
        pu = "Бя",
        ou = "Ба",
        nu = "Пү",
        mu = "Лх",
        lu = "Мя",
        ku = "Да",
        ju = "Ня",
        cO = "Бямба",
        bO = "Баасан",
        aO = "Пүрэв",
        ZN = "Лхагва",
        YN = "Мягмар",
        XN = "Даваа",
        Kdb = "Монгол хэл",
        vG = "शनिवासरः",
        uG = "शुक्रवासरः",
        tG = "गुरुवासरः",
        sG = "बुधवासरः",
        rG = "मङ्गलवासरः",
        qG = "सोमवासरः",
        pG = "रविवासरः",
        Wm = "म.नं.",
        Vm = "म.पू.",
        Jdb = "नोव्हें.",
        iu = "डिसेंबर",
        Idb = "नोव्हेंबर",
        hu = "ऑक्टोबर",
        gu = "सप्टेंबर",
        Gq = "ऑगस्ट",
        Fq = "जुलै",
        Um = "मे",
        Eq = "एप्रिल",
        fu = "फेब्रुवारी",
        eu = "जानेवारी",
        oG = "मंगळ.",
        Hdb = "yyyy,MMMM dd, dddd tt h:mm:ss",
        Gdb = "yyyy,MMMM dd, dddd tt h:mm",
        Fdb = "yyyy,MMMM dd, dddd",
        Edb = "খ্রীষ্টাব্দ",
        du = "আবেলি",
        cu = "ৰাতিপু",
        Ddb = "ডিচেম্বর",
        Cdb = "চেপ্টেম্বর",
        nG = "আগষ্ট",
        Bdb = "ফেব্রুৱাৰী",
        Adb = "জানুৱাৰী",
        zdb = "শুক্রবাৰ",
        ydb = "বৃহস্পতিবাৰ",
        xdb = "মঙ্গলবাৰ",
        mG = "ഡിസംബറ്",
        lG = "നവംബറ്",
        kG = "ഒക്ടോബറ്",
        jG = "സെപ്ററംബറ്",
        iG = "ഓഗസ്ററ്",
        hG = "ജൂലൈ",
        gG = "ജൂണ്",
        fG = "മെയ്",
        eG = "ഏപ്റില്",
        dG = "മാറ്ച്ച്",
        cG = "ഫെബ്റുവരി",
        bG = "ജനുവരി",
        wdb = "ശനിയാഴ്ച",
        vdb = "വെള്ളിയാഴ്ച",
        udb = "വ്യാഴാഴ്ച",
        tdb = "ബുധനാഴ്ച",
        sdb = "ചൊവ്വാഴ്ച",
        rdb = "തിങ്കളാഴ്ച",
        qdb = "ഞായറാഴ്ച",
        bu = "ಅಪರಾಹ್ನ",
        au = "ಪೂರ್ವಾಹ್ನ",
        aG = "ಡಿಸೆಂಬರ್",
        ZF = "ನವೆಂಬರ್",
        YF = "ಅಕ್ಟೋಬರ್",
        XF = "ಸೆಪ್ಟಂಬರ್",
        WF = "ಆಗಸ್ಟ್",
        VF = "ಜುಲೈ",
        UF = "ಜೂನ್",
        TF = "ಮೇ",
        SF = "ಎಪ್ರಿಲ್",
        RF = "ಮಾರ್ಚ್",
        QF = "ಫೆಬ್ರವರಿ",
        PF = "ಜನವರಿ",
        pdb = "ಶುಕ್ರವಾರ",
        Zt = "అపరాహ్న",
        Yt = "పూర్వాహ్న",
        OF = "డిసెంబర్",
        NF = "నవంబర్",
        MF = "అక్టోబర్",
        LF = "సెప్టెంబర్",
        KF = "ఆగస్టు",
        JF = "జూలై",
        IF = "జూన్",
        HF = "మే",
        GF = "ఏప్రిల్",
        FF = "మార్చి",
        EF = "ఫిబ్రవరి",
        DF = "జనవరి",
        odb = "శుక్రవారం",
        ndb = "గురువారం",
        mdb = "మంగళవారం",
        Xt = "மாலை",
        Wt = "காலை",
        CF = "டிசம்பர்",
        BF = "நவம்பர்",
        AF = "அக்டோபர்",
        zF = "செப்டம்பர்",
        yF = "ஆகஸ்ட்",
        xF = "ஜூலை",
        wF = "ஜூன்",
        vF = "மே",
        uF = "ஏப்ரல்",
        tF = "மார்ச்",
        sF = "பிப்ரவரி",
        rF = "ஜனவரி",
        ldb = "செவ்வாய்",
        kdb = "சனிக்கிழமை",
        jdb = "வெள்ளிக்கிழமை",
        idb = "வியாழக்கிழமை",
        hdb = "புதன்கிழமை",
        gdb = "செவ்வாய்கிழமை",
        fdb = "திங்கள்கிழமை",
        edb = "ஞாயிற்றுக்கிழமை",
        ax = "ta",
        ddb = "ଖ୍ରୀଷ୍ଟାବ୍ଦ",
        qF = "(ଡିସେମ୍ବର",
        pF = "ନଭେମ୍ବର",
        oF = "ଅକ୍ଟୋବର",
        nF = "ସେପ୍ଟେମ୍ବର",
        mF = "ଅଗଷ୍ଟ",
        lF = "ଜୁଲାଇ",
        kF = "ଜୁନ୍‌",
        jF = "ମେ",
        iF = "ଏପ୍ରିଲ୍‌",
        hF = "ମାର୍ଚ୍ଚ",
        gF = "ଫ୍ରେବୃୟାରୀ",
        fF = "ଜାନୁୟାରୀ",
        cdb = "ଶୁକ୍ରବାର",
        bdb = "ମଙ୍ଗଳବାର",
        Vt = "ઉત્તર મધ્યાહ્ન",
        Ut = "પૂર્વ મધ્યાહ્ન",
        adb = "ડિસેમ્બર",
        Zcb = "સપ્ટેમ્બર",
        eF = "ઑગસ્ટ",
        dF = "જુલાઈ",
        cF = "જૂન",
        bF = "મે",
        aF = "એપ્રિલ",
        ZE = "માર્ચ",
        Ycb = "ફેબ્રુઆરી",
        Xcb = "જાન્યુઆરી",
        Wcb = "શુક્રવાર",
        Vcb = "dd MMMM yyyy dddd tt hh:mm:ss",
        Ucb = "dd MMMM yyyy dddd tt hh:mm",
        YE = "tt hh:mm:ss",
        XE = "tt hh:mm",
        Tt = "ਸ਼ਾਮ",
        St = "ਸਵੇਰ",
        WE = "ਦਸੰਬਰ",
        VE = "ਨਵੰਬਰ",
        UE = "ਅਕਤੂਬਰ",
        TE = "ਸਤੰਬਰ",
        SE = "ਅਗਸਤ",
        RE = "ਜੁਲਾਈ",
        QE = "ਜੂਨ",
        PE = "ਮਈ",
        OE = "ਅਪ੍ਰੈਲ",
        NE = "ਮਾਰਚ",
        ME = "ਫ਼ਰਵਰੀ",
        LE = "ਜਨਵਰੀ",
        Tcb = "ਸ਼ਨਿੱਚਰਵਾਰ",
        Scb = "ਸ਼ੁੱਕਰਵਾਰ",
        Zw = "pa",
        Yw = "dd MMMM yyyy HH.mm.ss",
        Xw = "dd MMMM yyyy HH.mm",
        Ww = "HH.mm.ss",
        Vw = "HH.mm",
        Pl = "dd-MM-yy",
        Vo = "অপরাহ্ন",
        Uo = "পুর্বাহ্ন",
        WN = "ডিসে.",
        VN = "নভে.",
        UN = "অক্টো.",
        TN = "সেপ্টে.",
        SN = "ফেব্রু.",
        RN = "জানু.",
        QN = "ডিসেম্বর",
        PN = "নভেম্বর",
        Uw = "অক্টোবর",
        ON = "সেপ্টেম্বর",
        NN = "আগস্ট",
        no = "জুলাই",
        mo = "জুন",
        lo = "মে",
        ko = "এপ্রিল",
        jo = "মার্চ",
        MN = "ফেব্রুয়ারী",
        LN = "জানুয়ারী",
        Dq = "শ",
        Rt = "ব",
        Tw = "শনি.",
        Sw = "শুক্র.",
        KN = "বৃহস্পতি.",
        Rw = "বুধ.",
        Qw = "মঙ্গল.",
        Pw = "সোম.",
        JN = "রবি.",
        IN = "শনিবার",
        HN = "শুক্রবার",
        GN = "বৃহস্পতিবার",
        FN = "বুধবার",
        EN = "মঙ্গলবার",
        DN = "সোমবার",
        CN = "রবিবার",
        KE = "bn",
        Rcb = "Дек.-ның",
        Qcb = "Нояб.-ның",
        Pcb = "Окт.-ның",
        Ocb = "Сен.-ның",
        Ncb = "Авг.-ның",
        Mcb = "Апр.-нең",
        Lcb = "Мар.-ның",
        Kcb = "Фев.-нең",
        Jcb = "Гыйн.-ның",
        Icb = "Декабрьның",
        Hcb = "Ноябрьның",
        Gcb = "Октябрьның",
        Fcb = "Сентябрьның",
        Ecb = "Августның",
        JE = "Июльнең",
        IE = "Июньнең",
        HE = "Майның",
        Dcb = "Апрельнең",
        Ccb = "Февральнең",
        Bcb = "Гыйнварның",
        Qt = "Ш",
        Pt = "Ч",
        Acb = "Пәнҗешәмбе",
        zcb = "Чәршәмбе",
        GE = "Дүшәмбе",
        Ow = "d-MMMM",
        BN = "yyyy 'yil' d-MMMM HH:mm:ss",
        AN = "yyyy 'yil' d-MMMM HH:mm",
        zN = "yyyy 'yil' d-MMMM",
        yN = "dd/MM yyyy",
        xN = "psh.",
        wN = "chr.",
        vN = "sesh.",
        uN = "dsh.",
        tN = "yak.",
        sN = "shanba",
        rN = "juma",
        qN = "payshanba",
        pN = "chorshanba",
        oN = "seshanba",
        nN = "dushanba",
        mN = "yakshanba",
        lN = "so'm",
        ycb = "yyyy 'ý.' MMMM",
        xcb = "yyyy 'ý.' MMMM d H:mm:ss",
        wcb = "yyyy 'ý.' MMMM d H:mm",
        vcb = "yyyy 'ý.' MMMM d",
        ucb = "Sentýabr",
        FE = "lýul",
        EE = "lýun",
        DE = "Maý",
        tcb = "Ýekşenbe",
        scb = "Penşenbe",
        rcb = "Çarşenbe",
        qcb = "Septemba",
        CE = "Jumat.",
        pcb = "Jumamosi",
        ocb = "Alhamisi",
        ncb = "Jumatano",
        mcb = "Jumatatu",
        lcb = "Jumapili",
        kcb = "Kiswahili",
        jcb = "MMMM yyyy'-ж.'",
        icb = "d'-'MMMM yyyy'-ж.' H:mm:ss",
        hcb = "d'-'MMMM yyyy'-ж.' H:mm",
        gcb = "d'-'MMMM yyyy'-ж.'",
        BE = "Иш",
        AE = "Бш",
        Cq = "Шр",
        Bq = "Шш",
        zE = "Жш",
        fcb = "Бейшемби",
        ecb = "Шаршемби",
        dcb = "Шейшемби",
        ccb = "Дүйшөмбү",
        bcb = "Жекшемби",
        acb = "d MMMM yyyy 'ж.' H:mm:ss",
        Zbb = "d MMMM yyyy 'ж.' H:mm",
        Ybb = "d MMMM yyyy 'ж.'",
        Xbb = "желтоқсан",
        Wbb = "қыркүйек",
        yE = "Сн",
        Aq = "Жм",
        zq = "Бс",
        xE = "Сс",
        wE = "Дс",
        vE = "Жк",
        Vbb = "Бейсенбі",
        Ubb = "Сәрсенбі",
        Tbb = "Сейсенбі",
        Sbb = "Дүйсенбі",
        Rbb = "Жексенбі",
        yq = "Dis",
        Nw = "Sept",
        kN = "Disember",
        Ot = "Ogos",
        xq = "Julai",
        wq = "Mac",
        Nt = "Jumaat",
        Mt = "Khamis",
        Lt = "Isnin",
        To = "Ahad",
        uE = "ms",
        tE = "i.n.",
        sE = "r.n.",
        Qbb = "Deireadh Fómhair",
        Pbb = "Meán Fómhair",
        rE = "Iúil",
        Obb = "Meitheamh",
        Nbb = "Bealtaine",
        qE = "Lu",
        Mbb = "Dé Sathairn",
        Lbb = "Dé hAoine",
        Kbb = "Déardaoin",
        Jbb = "Dé Céadaoin",
        Ibb = "Dé Máirt",
        Hbb = "Dé Luain",
        Gbb = "Dé Domhnaigh",
        So = "ga",
        io = "MMMM d'. b. '",
        Ro = "MMMM d'. b. 'yyyy HH:mm:ss",
        Qo = "MMMM d'. b. 'yyyy HH:mm",
        ho = "MMMM d'. b. 'yyyy",
        pE = "juovlamánu",
        oE = "skábmamánu",
        nE = "golggotmánu",
        mE = "čakčamánu",
        lE = "borgemánu",
        kE = "suoidnemánu",
        jE = "geassemánu",
        iE = "miessemánu",
        hE = "cuoŋománu",
        gE = "njukčamánu",
        fE = "guovvamánu",
        eE = "ođđajagimánu",
        go = "juov",
        vq = "skáb",
        uq = "golg",
        tq = "čakč",
        sq = "borg",
        rq = "suoi",
        qq = "geas",
        pq = "mies",
        oq = "cuo",
        nq = "njuk",
        hm = "guov",
        mq = "ođđj",
        dE = "juovlamánnu",
        cE = "skábmamánnu",
        bE = "golggotmánnu",
        aE = "čakčamánnu",
        ZD = "borgemánnu",
        YD = "suoidnemánnu",
        XD = "geassemánnu",
        WD = "miessemánnu",
        VD = "cuoŋománnu",
        UD = "njukčamánnu",
        TD = "guovvamánnu",
        SD = "ođđajagemánnu",
        Tm = "l",
        gm = "b",
        fo = "g",
        pe = "d",
        cg = "m",
        Ar = "láv",
        RD = "bear",
        zr = "duor",
        yr = "gask",
        jN = "vuos",
        QD = "sotn",
        PD = "lávvardat",
        OD = "bearjadat",
        ND = "duorastat",
        MD = "gaskavahkku",
        iN = "maŋŋebárga",
        hN = "vuossárga",
        LD = "sotnabeaivi",
        Fbb = "d' ta\\' 'MMMM",
        Ebb = "dddd, d' ta\\' 'MMMM yyyy HH:mm:ss",
        Dbb = "dddd, d' ta\\' 'MMMM yyyy HH:mm",
        Cbb = "dddd, d' ta\\' 'MMMM yyyy",
        Bbb = "Diċembru",
        Abb = "Novembru",
        zbb = "Settembru",
        oe = "I",
        ybb = "Il-Ġimgħa",
        xbb = "Il-Ħamis",
        wbb = "L-Erbgħa",
        vbb = "It-Tlieta",
        ubb = "It-Tnejn",
        bf = "dd MMMM yyyy HH:mm:ss",
        If = "dd MMMM yyyy HH:mm",
        Sm = "अपराह्न",
        Rm = "पूर्वाह्न",
        lq = "दिसम्बर",
        kq = "नवम्बर",
        jq = "अक्तूबर",
        iq = "सितम्बर",
        eo = "अगस्त",
        Qm = "जुलाई",
        tg = "जून",
        hq = "मई",
        gq = "अप्रैल",
        sg = "मार्च",
        fq = "फरवरी",
        co = "जनवरी",
        Hl = "श",
        Kt = "ग",
        bo = "ब",
        ao = "म",
        Zn = "स",
        Jt = "र",
        KD = "शनि.",
        JD = "शुक्र.",
        ID = "गुरु.",
        It = "बुध.",
        Ht = "सोम.",
        HD = "रवि.",
        Gt = "शनिवार",
        Ft = "शुक्रवार",
        GD = "गुरुवार",
        eq = "बुधवार",
        Et = "सोमवार",
        FD = "रविवार",
        Yn = "रु",
        Dt = "mán",
        tbb = "leygardagur",
        sbb = "fríggjadagur",
        rbb = "hósdagur",
        qbb = "mikudagur",
        pbb = "týsdagur",
        obb = "mánadagur",
        nbb = "yyyy 'წლის' dd MM, dddd H:mm:ss",
        mbb = "yyyy 'წლის' dd MM, dddd H:mm",
        lbb = "yyyy 'წლის' dd MM, dddd",
        kbb = "დეკემბერი",
        jbb = "ნოემბერი",
        ibb = "ოქტომბერი",
        hbb = "სექტემბერი",
        gbb = "თებერვალი",
        ED = "შაბათი",
        DD = "პარასკევი",
        CD = "ხუთშაბათი",
        BD = "ოთხშაბათი",
        AD = "სამშაბათი",
        zD = "ორშაბათი",
        yD = "კვირა",
        An = "ka",
        fbb = "Augustus",
        ebb = "Februarie",
        dbb = "Januarie",
        xD = "Wo",
        xr = "Sat",
        wD = "Son",
        cbb = "Saterdag",
        bbb = "Donderdag",
        abb = "Woensdag",
        Zab = "Afrikaans",
        Yab = "uZibandlela",
        Xab = "uMandulo",
        Wab = "uNtulikazi",
        Vab = "uNhlangulana",
        Uab = "uNhlolanja",
        Tab = "uMasingana",
        Sab = "uLwesibili",
        Rab = "uMsombuluko",
        Qab = "Silimela",
        Pab = "Tshazimpuzi",
        vD = "uMgqibelo",
        uD = "uLwesihlanu",
        tD = "uLwesine",
        sD = "uLwesithathu",
        Oab = "uLwesibini",
        Nab = "isiXhosa",
        zn = "dd MMMM yyyy hh:mm:ss tt",
        yn = "dd MMMM yyyy hh:mm tt",
        Mab = "Sedimothole",
        Lab = "Ngwanatsele",
        Kab = "Diphalane",
        Jab = "Seetebosigo",
        Iab = "Motsheganong",
        rD = "Moranang",
        Hab = "Mopitloe",
        Gab = "Tlhakole",
        Fab = "Ferikgong",
        qD = "Ln",
        pD = "Lb",
        Eab = "Lamatlhatso",
        Dab = "Labotlhano",
        oD = "Labone",
        nD = "Laboraro",
        mD = "Labobedi",
        Cab = "Mosupologo",
        Bab = "Latshipi",
        Aab = "Setswana",
        zab = "dddd, dd MMMM yyyy HH:mm:ss",
        yab = "dddd, dd MMMM yyyy HH:mm",
        lD = "dddd, dd MMMM yyyy",
        Po = "сеп",
        Gl = "јул",
        Fl = "јун",
        Oo = "јан",
        rg = "мај",
        Ct = "пе",
        Bt = "че",
        At = "по",
        zt = "не",
        No = "чет",
        xab = "четврток",
        kD = "dddd, 'dnja' d. MMMM yyyy H:mm:ss",
        wab = "dddd, 'dnja' d. MMMM yyyy H.mm 'hodź.'",
        vab = "H.mm 'hodź.'",
        jD = "dddd, 'dnja' d. MMMM yyyy",
        iD = "po Chr.",
        hD = "nowembra",
        gD = "oktobra",
        fD = "awgusta",
        eD = "julija",
        dD = "junija",
        cD = "apryla",
        bD = "měrca",
        aD = "februara",
        ZC = "januara",
        dq = "now",
        cq = "awg",
        YC = "mej",
        bq = "měr",
        XC = "nowember",
        WC = "awgust",
        VC = "apryl",
        UC = "měrc",
        bg = "s",
        Yk = "p",
        yt = "n",
        TC = "srj",
        SC = "nje",
        uab = "póndźela",
        tab = "njedźela",
        sab = "yyyy.'eko' MMMM",
        rab = "dddd, yyyy.'eko' MMMM'k 'd H:mm:ss",
        qab = "dddd, yyyy.'eko' MMMM'k 'd HH:mm",
        pab = "dddd, yyyy.'eko' MMMM'k 'd",
        oab = "urtarrila",
        Mw = "or",
        Lw = "as",
        Kw = "ig",
        nab = "larunbata",
        mab = "ostirala",
        lab = "osteguna",
        kab = "asteazkena",
        jab = "asteartea",
        iab = "astelehena",
        Mo = "dekabr",
        Lo = "noyabr",
        Ko = "oktyabr",
        Jo = "sentyabr",
        Io = "iyul",
        Ho = "iyun",
        Go = "aprel",
        Kg = "mart",
        Fo = "fevral",
        Eo = "yanvar",
        aq = "Dek",
        xt = "Noy",
        wt = "Avg",
        wr = "Fev",
        vt = "Yan",
        Jw = "Dekabr",
        gN = "Noyabr",
        fN = "Oktyabr",
        eN = "Sentyabr",
        dN = "Avgust",
        Do = "İyul",
        Co = "İyun",
        Iw = "Aprel",
        cN = "Fevral",
        bN = "Yanvar",
        Zp = "Ş",
        Yp = "Ca",
        Xp = "Ç",
        ut = "Be",
        aN = "Şənbə",
        ZM = "Cümə",
        YM = "Cümə axşamı",
        XM = "Çərşənbə",
        WM = "Çərşənbə axşamı",
        VM = "Bazar ertəsi",
        UM = "Bazar",
        TM = "man.",
        hab = "Azərbaycan­ılı",
        RC = "az",
        gab = "d MMMM, yyyy H:mm:ss",
        fab = "d MMMM, yyyy H:mm",
        eab = "d MMMM, yyyy",
        dab = "Դեկտեմբեր",
        cab = "Նոյեմբեր",
        bab = "Հոկտեմբեր",
        aab = "Սեպտեմբեր",
        ZZ = "Հինգշաբթի",
        YZ = "Չորեքշաբթի",
        XZ = "Երեքշաբթի",
        WZ = "Երկուշաբթի",
        VZ = "dd MMMM yyyy h:mm:ss tt",
        UZ = "dd MMMM yyyy h:mm tt",
        Hw = "ch",
        QC = "CH",
        PC = "SA",
        TZ = "Tháng Mười Hai",
        SZ = "Tháng Mười Một",
        RZ = "Tháng Mười",
        QZ = "Tháng Chín",
        PZ = "Tháng Tám",
        OZ = "Tháng Bảy",
        NZ = "Tháng Sáu",
        MZ = "Tháng Năm",
        LZ = "Tháng Tư",
        KZ = "Tháng Ba",
        JZ = "Tháng Hai",
        IZ = "Tháng Giêng",
        Pm = "B",
        Xn = "C",
        HZ = "Thứ Bảy",
        GZ = "Thứ Sáu",
        FZ = "Thứ Năm",
        EZ = "Thứ Hai",
        DZ = "Chủ Nhật",
        rm = "اغسطس",
        qm = "ابريل",
        af = "يوليو",
        mf = "أ",
        Om = "Gregorian_TransliteratedEnglish",
        CZ = "yyyy/MM/dd hh:mm:ss tt",
        BZ = "yyyy/MM/dd hh:mm tt",
        OC = "دسامبر",
        NC = "نوامبر",
        MC = "اُكتبر",
        LC = "سپتامبر",
        KC = "اوت",
        JC = "ژوئيه",
        IC = "ژوئن",
        HC = "مى",
        GC = "آوريل",
        FC = "فوريه",
        EC = "ژانويه",
        Wp = "ش",
        Vp = "چ",
        Up = "د",
        tt = "ی",
        Nm = "شنبه",
        Mm = "پنجشنبه",
        Tp = "چهارشنبه",
        DC = "سه شنبه",
        Lm = "دوشنبه",
        CC = "يكشنبه",
        lf = "ب.ظ",
        kf = "ق.ظ",
        Bo = "dd.MM.yy",
        SM = "декабри",
        RM = "ноябри",
        QM = "октябри",
        PM = "сентябри",
        OM = "августи",
        NM = "июли",
        MM = "июни",
        LM = "апрели",
        KM = "марти",
        JM = "феврали",
        IM = "январи",
        El = "Дек",
        Dl = "Ноя",
        Cl = "Окт",
        Bl = "Сен",
        Al = "Авг",
        zl = "Апр",
        yl = "Мар",
        xl = "Фев",
        Km = "Янв",
        vr = "Декабр",
        Gw = "Ноябр",
        Fw = "Октябр",
        Ew = "Сентябр",
        Xk = "Июл",
        Wk = "Июн",
        ur = "Апрел",
        tr = "Феврал",
        Dw = "Январ",
        st = "Шн",
        rt = "Ҷм",
        qt = "Пш",
        pt = "Чш",
        ot = "Сш",
        fm = "Дш",
        HM = "Шанбе",
        GM = "Ҷумъа",
        FM = "Панҷшанбе",
        EM = "Чоршанбе",
        DM = "Сешанбе",
        CM = "Душанбе",
        Ao = "Яш",
        BM = "т.р.",
        AZ = "yyyy 'm.' MMMM",
        zZ = "MMMM d 'd.'",
        yZ = "yyyy 'm.' MMMM d 'd.' HH:mm:ss",
        xZ = "yyyy 'm.' MMMM d 'd.' HH:mm",
        wZ = "yyyy 'm.' MMMM d 'd.'",
        vZ = "yyyy.MM.dd",
        uZ = "gruodžio",
        tZ = "lapkričio",
        sZ = "rugpjūčio",
        rZ = "birželio",
        qZ = "balandžio",
        BC = "Grd",
        AC = "Lap",
        zC = "Spl",
        yC = "Rgs",
        xC = "Rgp",
        wC = "Lie",
        vC = "Bir",
        uC = "Geg",
        tC = "Bal",
        sC = "Kov",
        rC = "Vas",
        qC = "Sau",
        pZ = "lapkritis",
        oZ = "rugsėjis",
        nZ = "rugpjūtis",
        mZ = "birželis",
        lZ = "balandis",
        qd = "A",
        pC = "An",
        kZ = "šeštadienis",
        jZ = "penktadienis",
        iZ = "ketvirtadienis",
        hZ = "trečiadienis",
        gZ = "antradienis",
        fZ = "pirmadienis",
        eZ = "sekmadienis",
        nt = "Lt",
        dZ = "dddd, yyyy'. gada 'd. MMMM H:mm:ss",
        cZ = "dddd, yyyy'. gada 'd. MMMM H:mm",
        bZ = "dddd, yyyy'. gada 'd. MMMM",
        aZ = "decembrī",
        ZY = "novembrī",
        YY = "septembrī",
        XY = "februārī",
        oC = "jūl",
        nC = "jūn",
        WY = "decembris",
        VY = "novembris",
        UY = "oktobris",
        TY = "septembris",
        SY = "februāris",
        RY = "janvāris",
        xn = "se",
        mC = "pk",
        lC = "ce",
        kC = "ot",
        jC = "pr",
        QY = "sestdiena",
        PY = "piektdiena",
        OY = "ceturtdiena",
        NY = "trešdiena",
        MY = "otrdiena",
        LY = "pirmdiena",
        KY = "svētdiena",
        JY = "MMMM yyyy'. a.'",
        IY = "d. MMMM yyyy'. a.' H:mm:ss",
        HY = "d. MMMM yyyy'. a.' H:mm",
        GY = "d. MMMM yyyy'. a.'",
        FY = "d.MM.yyyy",
        iC = "PL",
        hC = "EL",
        gC = "sept",
        EY = "detsember",
        DY = "oktoober",
        fC = "juuli",
        eC = "juuni",
        dC = "märts",
        CY = "veebruar",
        Sp = "E",
        BY = "neljapäev",
        AY = "kolmapäev",
        zY = "teisipäev",
        yY = "esmaspäev",
        xY = "pühapäev",
        wn = "avg",
        qg = "avgust",
        mt = "julij",
        lt = "junij",
        kt = "sob",
        Rp = "sre",
        Qp = "sreda",
        wY = "ponedeljek",
        Pp = "nedelja",
        vY = "лістапада",
        uY = "кастрычніка",
        tY = "красавіка",
        sY = "сакавіка",
        rY = "студзеня",
        cC = "Сне",
        bC = "Ліс",
        aC = "Кас",
        ZB = "Жні",
        YB = "Ліп",
        XB = "Чэр",
        WB = "Кра",
        VB = "Сак",
        UB = "Сту",
        qY = "Лістапад",
        pY = "Кастрычнік",
        oY = "Верасень",
        nY = "Красавік",
        mY = "Студзень",
        TB = "сб",
        SB = "пт",
        RB = "чц",
        QB = "аў",
        PB = "пн",
        OB = "нд",
        lY = "панядзелак",
        kY = "MMMM yyyy' р.'",
        jY = "d MMMM yyyy' р.' H:mm:ss",
        iY = "d MMMM yyyy' р.' H:mm",
        hY = "d MMMM yyyy' р.'",
        gY = "листопада",
        jt = "Вер",
        it = "Лют",
        fY = "Листопад",
        eY = "Вересень",
        dY = "Березень",
        NB = "Нд",
        vn = "субота",
        cY = "п'ятниця",
        bY = "вівторок",
        aY = "понеділок",
        Cw = "dd MMMM yyyy H:mm:ss",
        Bw = "dd MMMM yyyy H:mm",
        MB = "Des",
        LB = "Desember",
        ZX = "Nopember",
        Jg = "Mei",
        sr = "Februari",
        rr = "Januari",
        pg = "R",
        ag = "M",
        Aw = "Sel",
        Wn = "Sen",
        Vn = "Sabtu",
        KB = "Jumat",
        JB = "Kamis",
        Un = "Rabu",
        zw = "Selasa",
        IB = "Minggu",
        ht = "dd/MM/yyyy h:mm:ss tt",
        gt = "dd/MM/yyyy h:mm tt",
        YX = "dd MMMM, yyyy h:mm:ss tt",
        XX = "dd MMMM, yyyy h:mm tt",
        HB = "دسمبر",
        GB = "نومبر",
        FB = "اکتوبر",
        EB = "ستمبر",
        DB = "اگست",
        CB = "جولائی",
        BB = "جون",
        AB = "مئی",
        zB = "اپریل",
        yB = "مارچ",
        xB = "فروری",
        wB = "جنوری",
        Tn = "پ",
        em = "ا",
        vB = "هفته",
        wl = "جمعه",
        uB = "جمعرات",
        tB = "بدھ",
        sB = "منگل",
        rB = "پير",
        qB = "اتوار",
        pB = "dd MMMM yyyy dddd HH:mm:ss",
        oB = "dd MMMM yyyy dddd HH:mm",
        ft = "dd MMMM yyyy dddd",
        yw = "Ara",
        Vk = "May",
        zo = "Mart",
        Op = "Ça",
        WX = "Cumartesi",
        VX = "Perşembe",
        UX = "Çarşamba",
        TX = "Pazartesi",
        nd = "%n",
        Jd = "-%n",
        qr = "tr",
        SX = "'วัน'dddd'ที่' d MMMM yyyy H:mm:ss",
        RX = "'วัน'dddd'ที่' d MMMM yyyy H:mm",
        QX = "'วัน'dddd'ที่' d MMMM yyyy",
        dm = "d MMMM yyyy H:mm:ss",
        cm = "d MMMM yyyy H:mm",
        nB = "ธ.ค.",
        mB = "พ.ย.",
        lB = "ต.ค.",
        kB = "ก.ย.",
        jB = "ส.ค.",
        iB = "ก.ค.",
        hB = "มิ.ย.",
        gB = "พ.ค.",
        fB = "เม.ย.",
        eB = "มี.ค.",
        dB = "ก.พ.",
        cB = "ม.ค.",
        bB = "ธันวาคม",
        aB = "พฤศจิกายน",
        ZA = "ตุลาคม",
        YA = "กันยายน",
        XA = "สิงหาคม",
        WA = "กรกฎาคม",
        VA = "มิถุนายน",
        UA = "พฤษภาคม",
        TA = "เมษายน",
        SA = "มีนาคม",
        RA = "กุมภาพันธ์",
        QA = "มกราคม",
        Np = "พ",
        Mp = "อ",
        PA = "ส.",
        OA = "ศ.",
        NA = "พฤ.",
        MA = "พ.",
        LA = "อ.",
        KA = "จ.",
        JA = "อา.",
        IA = "เสาร์",
        HA = "ศุกร์",
        GA = "พฤหัสบดี",
        FA = "พุธ",
        EA = "อังคาร",
        DA = "จันทร์",
        CA = "อาทิตย์",
        PX = "ThaiBuddhist",
        AM = "'den 'd MMMM",
        zM = "'den 'd MMMM yyyy HH:mm:ss",
        yM = "'den 'd MMMM yyyy HH:mm",
        xM = "'den 'd MMMM yyyy",
        wM = "augusti",
        et = "lö",
        Sn = "må",
        dt = "sö",
        vM = "lördag",
        uM = "tisdag",
        xw = "måndag",
        tM = "söndag",
        Lp = "sv",
        OX = "yyyy-MM-dd h:mm:ss.tt",
        NX = "yyyy-MM-dd h:mm.tt",
        MX = "h:mm:ss.tt",
        BA = "MD",
        AA = "PD",
        zA = "Pr",
        yA = "En",
        xA = "Më",
        wA = "Sht",
        Se = "Mar",
        LX = "e shtunë",
        KX = "e premte",
        JX = "e mërkurë",
        ct = "d. M. yyyy",
        bt = "decembra",
        IX = "novembra",
        at = "septembra",
        HX = "februára",
        vA = "marec",
        Kp = "pi",
        uA = "št",
        GX = "pondelok",
        Zs = ". ",
        sM = "d. MMMM yyyy. H:mm:ss",
        rM = "d. MMMM yyyy. H:mm",
        qM = "d. MMMM yyyy.",
        pM = "d.M.yyyy.",
        oM = "prosinca",
        nM = "studenog",
        mM = "rujna",
        lM = "kolovoza",
        kM = "srpnja",
        jM = "lipnja",
        iM = "svibnja",
        hM = "travnja",
        gM = "ožujka",
        fM = "veljače",
        eM = "siječnja",
        Ys = "pro",
        Xs = "stu",
        Ws = "ruj",
        Vs = "kol",
        Us = "srp",
        Ts = "svi",
        Ss = "tra",
        Rs = "ožu",
        Qs = "vlj",
        Ps = "sij",
        dM = "prosinac",
        cM = "studeni",
        bM = "rujan",
        aM = "kolovoz",
        ZL = "srpanj",
        YL = "lipanj",
        XL = "svibanj",
        WL = "travanj",
        VL = "ožujak",
        UL = "veljača",
        TL = "siječanj",
        bm = "če",
        vl = "sr",
        ul = "ut",
        Jm = "sub",
        am = "pet",
        Zl = "čet",
        Os = "sri",
        Im = "uto",
        tl = "pon",
        Yl = "ned",
        Hm = "subota",
        Gm = "petak",
        Fm = "četvrtak",
        Ns = "srijeda",
        Em = "utorak",
        Ms = "ponedjeljak",
        Ls = "nedjelja",
        ww = "kn",
        vw = "- n",
        tA = "hr",
        FX = "d MMMM yyyy 'г.' H:mm:ss",
        EX = "d MMMM yyyy 'г.' H:mm",
        DX = "d MMMM yyyy 'г.'",
        CX = "сентября",
        Jp = "мая",
        Ks = "ноя",
        Js = "сен",
        Ip = "июл",
        Hp = "июн",
        Ol = "мар",
        Gp = "фев",
        sA = "янв",
        Is = "Декабрь",
        Hs = "Ноябрь",
        Gs = "Октябрь",
        Fs = "Сентябрь",
        pm = "Август",
        Fp = "Июль",
        Ep = "Июнь",
        Id = "Май",
        Es = "Апрель",
        om = "Март",
        Ds = "Февраль",
        rA = "Январь",
        Dm = "Сб",
        Dp = "Пт",
        Cp = "Чт",
        sl = "Ср",
        Bp = "Вт",
        Ap = "Пн",
        qA = "Вс",
        yo = "среда",
        BX = "понедельник",
        AX = "воскресенье",
        Cs = "р.",
        yg = "n$",
        Nl = "-n$",
        zp = "mai.",
        zX = "decembrie",
        yX = "noiembrie",
        xX = "octombrie",
        wX = "septembrie",
        vX = "februarie",
        uX = "ianuarie",
        Cm = "J",
        Rn = "Ma",
        yc = "L",
        tX = "miercuri",
        pA = "luni",
        sX = "duminică",
        rX = "dddd, d MMMM yyyy HH:mm:ss",
        qX = "dddd, d MMMM yyyy HH:mm",
        oA = "sett",
        pX = "settember",
        nA = "avust",
        oX = "zercladur",
        mA = "matg",
        lA = "gie",
        kA = "gli",
        Bs = "du",
        nX = "venderdi",
        mX = "glindesdi",
        lX = "dumengia",
        jA = "fr.",
        Ig = "'",
        SL = "dd' de 'MMMM",
        RL = "dddd, d' de 'MMMM' de 'yyyy HH:mm:ss",
        QL = "dddd, d' de 'MMMM' de 'yyyy HH:mm",
        PL = "dddd, d' de 'MMMM' de 'yyyy",
        iA = "out",
        kX = "dezembro",
        hA = "novembro",
        gA = "outubro",
        fA = "setembro",
        As = "maio",
        jX = "fevereiro",
        xo = "Q",
        md = "T",
        Eb = "S",
        un = "D",
        OL = "sexta-feira",
        NL = "quinta-feira",
        ML = "quarta-feira",
        LL = "terça-feira",
        KL = "segunda-feira",
        eA = "pt",
        wo = "d MMMM yyyy HH:mm:ss",
        pr = "d MMMM yyyy HH:mm",
        Hf = "d MMMM yyyy",
        uw = "listopada",
        iX = "października",
        hX = "września",
        gX = "sierpnia",
        dA = "maja",
        fX = "kwietnia",
        cA = "marca",
        eX = "stycznia",
        bA = "gru",
        Qn = "lis",
        aA = "paź",
        Zz = "wrz",
        Yz = "sie",
        Pn = "lip",
        Xz = "cze",
        Wz = "kwi",
        Vz = "lut",
        Uz = "sty",
        dX = "grudzień",
        cX = "październik",
        bX = "wrzesień",
        aX = "sierpień",
        ZW = "czerwiec",
        YW = "kwiecień",
        zs = "Pt",
        Tz = "Cz",
        Sz = "Śr",
        Rz = "Wt",
        yp = "Pn",
        Ze = "N",
        XW = "czwartek",
        WW = "poniedziałek",
        VW = "niedziela",
        tw = "pl",
        Hg = "kr",
        sw = "dddd d MMMM yyyy H:mm:ss",
        rw = "dddd d MMMM yyyy H:mm",
        Qz = "d-M-yyyy",
        qw = "mrt",
        pw = "augustus",
        ys = "mei",
        ow = "maart",
        xp = "februari",
        wp = "januari",
        xs = "za",
        ws = "vr",
        vo = "wo",
        vs = "zo",
        JL = "zaterdag",
        IL = "vrijdag",
        HL = "donderdag",
        GL = "woensdag",
        FL = "dinsdag",
        EL = "maandag",
        DL = "zondag",
        Pz = "nl",
        UW = "gg yyyy'년' M'월'",
        TW = "gg yyyy'년' M'월' d'일' dddd tt h:mm:ss",
        SW = "gg yyyy'년' M'월' d'일' dddd tt h:mm",
        RW = "gg yyyy'년' M'월' d'일' dddd",
        QW = "gg yyyy-MM-dd",
        PW = "yyyy'년' M'월'",
        Oz = "M'월' d'일'",
        OW = "yyyy'년' M'월' d'일' dddd tt h:mm:ss",
        NW = "yyyy'년' M'월' d'일' dddd tt h:mm",
        or = "tt h:mm:ss",
        uo = "tt h:mm",
        MW = "yyyy'년' M'월' d'일' dddd",
        og = "yyyy-MM-dd",
        Bm = "오후",
        Am = "오전",
        Nz = "12월",
        Mz = "11월",
        Lz = "10월",
        Kz = "9월",
        Jz = "8월",
        Iz = "7월",
        Hz = "6월",
        Gz = "5월",
        Fz = "4월",
        Ez = "3월",
        Dz = "2월",
        Cz = "1월",
        vp = "토",
        up = "금",
        tp = "목",
        sp = "수",
        rp = "화",
        qp = "월",
        pp = "일",
        Bz = "토요일",
        Az = "금요일",
        zz = "목요일",
        yz = "수요일",
        xz = "화요일",
        wz = "월요일",
        vz = "일요일",
        CL = "Korean",
        nw = "ko",
        LW = "gg y'年'M'月'",
        KW = "gg y'年'M'月'd'日' H:mm:ss",
        JW = "gg y'年'M'月'd'日' H:mm",
        IW = "gg y'年'M'月'd'日'",
        HW = "gg y/M/d",
        GW = 60022080000,
        FW = -1.3576032e12,
        EW = -1.8121536e12,
        xg = "yyyy/MM/dd",
        zm = "午後",
        ym = "午前",
        uz = "12月",
        tz = "11月",
        sz = "10月",
        rz = "9月",
        qz = "8月",
        pz = "7月",
        oz = "6月",
        nz = "5月",
        mz = "4月",
        lz = "3月",
        kz = "2月",
        jz = "1月",
        op = "土",
        np = "金",
        mp = "木",
        lp = "水",
        kp = "火",
        jp = "月",
        iz = "土曜日",
        hz = "金曜日",
        gz = "木曜日",
        fz = "水曜日",
        ez = "火曜日",
        dz = "月曜日",
        cz = "日曜日",
        ud = "-$n",
        BL = "Japanese",
        mw = "dicembre",
        lw = "ottobre",
        kw = "settembre",
        AL = "luglio",
        zL = "giugno",
        yL = "maggio",
        jw = "aprile",
        xL = "febbraio",
        wL = "gennaio",
        iw = "ven",
        vL = "sabato",
        uL = "venerdì",
        tL = "giovedì",
        sL = "mercoledì",
        rL = "martedì",
        qL = "lunedì",
        pL = "domenica",
        On = "-$ n",
        bz = "it",
        us = "des.",
        az = "sep.",
        Zy = "apr.",
        ip = "feb.",
        to = "desember",
        DW = "nóvember",
        Yy = "maí",
        ts = "apríl",
        Xy = "má",
        CW = "laugardagur",
        BW = "föstudagur",
        AW = "fimmtudagur",
        zW = "miðvikudagur",
        yW = "þriðjudagur",
        xW = "mánudagur",
        Wy = "sunnudagur",
        Vy = "yyyy. MMMM",
        wW = "yyyy. MMMM d. H:mm:ss",
        vW = "yyyy. MMMM d. H:mm",
        uW = "yyyy. MMMM d.",
        Uy = "yyyy.MM.dd.",
        Ty = "du.",
        Sy = "de.",
        Ry = "dec.",
        Qy = "okt.",
        Py = "aug.",
        Oy = "júl.",
        Ny = "jún.",
        My = "jan.",
        ss = "október",
        tW = "szeptember",
        sW = "augusztus",
        Ly = "február",
        Ky = "január",
        Jy = "Szo",
        Uk = "P",
        Iy = "Cs",
        Hy = "Sze",
        Ml = "K",
        Nn = "H",
        Xl = "V",
        rW = "csütörtök",
        qW = "vasárnap",
        Qb = "dd MMMM yyyy",
        Gy = "אלול",
        Fy = "אב",
        Ey = "תמוז",
        Dy = "סיון",
        Cy = "אייר",
        By = "ניסן",
        Ay = "אדר ב",
        zy = "אדר",
        yy = "שבט",
        xy = "טבת",
        wy = "כסלו",
        vy = "חשון",
        uy = "תשרי",
        ty = "dddd dd MMMM yyyy HH:mm:ss",
        sy = "dddd dd MMMM yyyy HH:mm",
        ry = "dddd dd MMMM yyyy",
        qy = "מאי",
        py = "מרץ",
        rs = "ש",
        qs = "ו",
        ps = "ה",
        os = "ד",
        ns = "ג",
        ms = "ב",
        ls = "א",
        ks = "שבת",
        oy = "יום שישי",
        ny = "יום חמישי",
        my = "יום רביעי",
        ly = "יום שלישי",
        ky = "יום שני",
        jy = "יום ראשון",
        oL = "Hebrew",
        Rb = "d MMMM",
        Gg = "dddd d MMMM yyyy HH:mm:ss",
        Fg = "dddd d MMMM yyyy HH:mm",
        Gf = "dddd d MMMM yyyy",
        pW = "d. MMMM'ta'",
        oW = "d. MMMM'ta 'yyyy H:mm:ss",
        nW = "d. MMMM'ta 'yyyy H:mm",
        mW = "d. MMMM'ta 'yyyy",
        lW = "joulukuu",
        kW = "marraskuu",
        jW = "heinäkuu",
        iW = "toukokuu",
        hW = "huhtikuu",
        gW = "maaliskuu",
        fW = "helmikuu",
        eW = "tammikuu",
        Mn = "la",
        Eg = "pe",
        iy = "ke",
        Zf = "su",
        dW = "lauantai",
        cW = "perjantai",
        bW = "keskiviikko",
        aW = "maanantai",
        ZV = "sunnuntai",
        hw = "fi",
        jd = "MMMM' de 'yyyy",
        so = "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
        ro = "dddd, dd' de 'MMMM' de 'yyyy H:mm",
        Fd = "dddd, dd' de 'MMMM' de 'yyyy",
        Re = "dic",
        Ed = "ago",
        pd = "may",
        Ff = "ene",
        Ef = "diciembre",
        Df = "noviembre",
        Cf = "septiembre",
        Dd = "agosto",
        Bf = "julio",
        Af = "junio",
        zf = "mayo",
        Rd = "marzo",
        yf = "febrero",
        xf = "enero",
        jf = "sá",
        Qe = "vi",
        Ye = "ju",
        Cd = "mi",
        id = "do",
        Qd = "sáb",
        wf = "vie",
        vf = "jue",
        uf = "mié",
        Pe = "lun",
        td = "dom",
        Pd = "sábado",
        tf = "viernes",
        sf = "jueves",
        rf = "miércoles",
        Xe = "martes",
        qf = "lunes",
        Od = "domingo",
        Yf = "es",
        hy = "dddd, d MMMM yyyy h:mm:ss tt",
        gy = "dddd, d MMMM yyyy h:mm tt",
        js = "dddd, d MMMM yyyy",
        hf = "d/M/yyyy",
        fy = "μμ",
        ey = "πμ",
        YV = "Δεκεμβρίου",
        XV = "Νοεμβρίου",
        WV = "Οκτωβρίου",
        VV = "Σεπτεμβρίου",
        UV = "Αυγούστου",
        TV = "Απριλίου",
        SV = "Φεβρουαρίου",
        RV = "Ιανουαρίου",
        dy = "Δεκ",
        cy = "Νοε",
        by = "Οκτ",
        ay = "Σεπ",
        Zx = "Αυγ",
        Yx = "Ιουλ",
        Xx = "Ιουν",
        Wx = "Μαϊ",
        Vx = "Απρ",
        Ux = "Μαρ",
        Tx = "Φεβ",
        Sx = "Ιαν",
        QV = "Δεκέμβριος",
        PV = "Νοέμβριος",
        OV = "Οκτώβριος",
        NV = "Σεπτέμβριος",
        MV = "Αύγουστος",
        LV = "Απρίλιος",
        KV = "Φεβρουάριος",
        JV = "Ιανουάριος",
        IV = "Παρασκευή",
        gw = "el",
        is = "dddd, d. MMMM yyyy HH:mm:ss",
        hs = "dddd, d. MMMM yyyy HH:mm",
        gs = "dddd, d. MMMM yyyy",
        ec = "dd.MM.yyyy",
        fs = "n. Chr.",
        qo = "Dez",
        Dg = "Nov",
        Bd = "Okt",
        Wl = "Sep",
        Ln = "Aug",
        dg = "Jul",
        gf = "Jun",
        We = "Apr",
        fw = "Mrz",
        ng = "Feb",
        ne = "Jan",
        Kn = "Dezember",
        nm = "November",
        Ll = "Oktober",
        Tk = "September",
        hp = "August",
        Jn = "Juli",
        xm = "Juni",
        me = "Mai",
        Kl = "April",
        In = "März",
        gp = "Februar",
        nr = "Januar",
        ff = "Sa",
        Cg = "Fr",
        Bg = "Do",
        Ag = "Mi",
        zg = "Di",
        rl = "Mo",
        mg = "So",
        es = "Samstag",
        ds = "Freitag",
        cs = "Donnerstag",
        bs = "Mittwoch",
        as = "Dienstag",
        Zr = "Montag",
        Yr = "Sonntag",
        mr = "de",
        gc = "d. MMMM",
        mm = "d. MMMM yyyy HH:mm:ss",
        lm = "d. MMMM yyyy HH:mm",
        Hd = "dd-MM-yyyy",
        oc = "dec",
        dc = "okt",
        yb = "sep",
        Ve = "aug",
        wb = "jun",
        Ub = "apr",
        U = "mar",
        hc = "jan",
        lg = "december",
        Ue = "november",
        pf = "oktober",
        le = "september",
        Jl = "august",
        kg = "juli",
        jg = "juni",
        Zb = "maj",
        Oe = "april",
        Rx = "marts",
        ef = "februar",
        df = "januar",
        Hn = "lø",
        Ad = "fr",
        Ne = "to",
        ig = "on",
        hg = "ti",
        Vl = "sø",
        ew = "lørdag",
        Gn = "fredag",
        Fn = "torsdag",
        En = "onsdag",
        dw = "tirsdag",
        cw = "mandag",
        lr = "søndag",
        rb = "-",
        fp = "kr.",
        Gb = "$ -n",
        w = "MMMM yyyy",
        Xf = "d. MMMM yyyy H:mm:ss",
        Wf = "d. MMMM yyyy H:mm",
        xc = "d. MMMM yyyy",
        zd = "d.M.yyyy",
        Qx = "n. l.",
        Px = "odp.",
        Ox = "dop.",
        HV = "prosince",
        GV = "listopadu",
        FV = "července",
        ql = "12",
        pl = "11",
        ol = "10",
        nl = "9",
        ml = "8",
        ll = "7",
        kl = "6",
        jl = "5",
        il = "4",
        hl = "3",
        gl = "2",
        fl = "1",
        EV = "prosinec",
        kr = "listopad",
        Nx = "září",
        DV = "červenec",
        Ul = "so",
        Mx = "pá",
        Lx = "čt",
        ep = "st",
        Kx = "út",
        Vf = "po",
        ke = "ne",
        wm = "sobota",
        km = "yyyy'年'M'月'",
        Il = "M'月'd'日'",
        Dn = "yyyy'年'M'月'd'日' H:mm:ss",
        Cn = "yyyy'年'M'月'd'日' H:mm",
        z = "H:mm:ss",
        B = "H:mm",
        jm = "yyyy'年'M'月'd'日'",
        el = "yyyy/M/d",
        dp = "公元",
        yd = "下午",
        xd = "上午",
        Uf = "十二月",
        Tf = "十一月",
        Sf = "十月",
        Rf = "九月",
        Qf = "八月",
        Pf = "七月",
        Of = "六月",
        Nf = "五月",
        Mf = "四月",
        Lf = "三月",
        Kf = "二月",
        Jf = "一月",
        tn = "六",
        sn = "五",
        rn = "四",
        qn = "三",
        pn = "二",
        on = "一",
        wg = "日",
        bw = "周六",
        aw = "周五",
        Zv = "周四",
        Yv = "周三",
        Xv = "周二",
        Wv = "周一",
        Vv = "周日",
        nn = "星期六",
        mn = "星期五",
        ln = "星期四",
        kn = "星期三",
        jn = "星期二",
        hn = "星期一",
        gn = "星期日",
        Tl = "¥",
        Pb = "$n",
        jc = "$-n",
        L = "n%",
        K = "-n%",
        Jx = "zh-Hans",
        CV = "MMMM' / 'yyyy",
        BV = "dddd, d' / 'MMMM' / 'yyyy HH:mm:ss",
        AV = "dddd, d' / 'MMMM' / 'yyyy HH:mm",
        I = "HH:mm:ss",
        J = "HH:mm",
        zV = "dddd, d' / 'MMMM' / 'yyyy",
        nc = "d.C.",
        fn = "des",
        vb = "nov",
        je = "oct",
        po = "set",
        sb = "jul",
        Gd = "abr",
        ub = "feb",
        Uv = "gen",
        Ix = "desembre",
        Te = "octubre",
        Hx = "setembre",
        Gx = "agost",
        Xr = "juny",
        Fx = "maig",
        sd = "abril",
        Wr = "març",
        Tv = "dv",
        Ex = "dissabte",
        Dx = "divendres",
        yV = "dimecres",
        xV = "diumenge",
        Ab = "€",
        wV = "MMMM yyyy 'г.'",
        vV = "dd MMMM yyyy 'г.' HH:mm:ss 'ч.'",
        uV = "dd MMMM yyyy 'г.' HH:mm 'ч.'",
        tV = "HH:mm:ss 'ч.'",
        sV = "HH:mm 'ч.'",
        rV = "dd MMMM yyyy 'г.'",
        qV = "d.M.yyyy 'г.'",
        pV = "след новата ера",
        Bn = "дек",
        Sk = "окт",
        Rk = "авг",
        Qk = "апр",
        Cx = "декември",
        Vr = "ноември",
        Bx = "октомври",
        Ax = "септември",
        Pk = "август",
        zx = "юли",
        yx = "юни",
        Sl = "май",
        en = "април",
        vg = "март",
        xx = "февруари",
        jr = "ч",
        vm = "с",
        um = "п",
        dn = "пет",
        tm = "ср",
        wx = "вт",
        cn = "пон",
        bn = "нед",
        oV = "четвъртък",
        Ur = "вторник",
        vx = "понеделник",
        i = ".",
        E = "n $",
        H = "-n $",
        g = ",",
        n = " ",
        ac = "اكتوبر",
        vc = "أوت",
        uc = "جوييه",
        tc = "جوان",
        sc = "مي",
        rc = "أفريل",
        qc = "فيفرييه",
        pc = "جانفييه",
        dl = "Gregorian_TransliteratedFrench",
        cl = "dd MMMM, yyyy hh:mm:ss tt",
        bl = "dd MMMM, yyyy hh:mm tt",
        cf = "dd MMMM, yyyy",
        qb = "ديسمبر",
        pb = "نوفمبر",
        mc = "أكتوبر",
        ob = "سبتمبر",
        rd = "أغسطس",
        ug = "يوليه",
        Yb = "يونيو",
        cc = "مايو",
        ld = "أبريل",
        ab = "مارس",
        Xb = "فبراير",
        Wb = "يناير",
        hd = "كانون الأول",
        gd = "تشرين الثاني",
        fd = "تشرين الأول",
        ed = "أيلول",
        dd = "آب",
        cd = "تموز",
        bd = "حزيران",
        ad = "أيار",
        Zc = "نيسان",
        Yc = "آذار",
        Xc = "شباط",
        Wc = "كانون الثاني",
        im = "Gregorian_Arabic",
        Tb = "dddd, MMMM dd, yyyy hh:mm:ss tt",
        Sb = "dddd, MMMM dd, yyyy hh:mm tt",
        zb = "MM/dd/yyyy",
        Me = "ap. J.-C.",
        Le = "déc.",
        Vc = "nov.",
        od = "oct.",
        Ke = "sept.",
        Je = "juil.",
        Ie = "avr.",
        He = "févr.",
        Ge = "janv.",
        Fe = "décembre",
        kd = "novembre",
        Nd = "octobre",
        Ee = "septembre",
        Ib = "août",
        De = "juillet",
        Hb = "juin",
        nb = "mai",
        Ce = "avril",
        tb = "mars",
        Be = "février",
        Ae = "janvier",
        ic = "sa",
        lc = "ve",
        ze = "je",
        wc = "me",
        Z = "ma",
        Bb = "lu",
        Uc = "di",
        ye = "sam.",
        wd = "ven.",
        xe = "jeu.",
        Md = "mer.",
        kc = "mar.",
        vd = "lun.",
        Ld = "dim.",
        we = "samedi",
        ve = "vendredi",
        ue = "jeudi",
        te = "mercredi",
        Kd = "mardi",
        se = "lundi",
        re = "dimanche",
        Ok = "Gregorian_MiddleEastFrench",
        Fb = 14,
        x = 11,
        Q = 354,
        P = 10631,
        O = 227013,
        ie = 0xe677d21fdbff,
        he = -4.25216736e13,
        A = 355,
        ge = 325,
        fe = 295,
        ee = 266,
        de = 236,
        ce = 207,
        be = 177,
        ae = 148,
        Zd = 118,
        Yd = 89,
        Xd = 59,
        m = 30,
        Wd = 6.21355968e13,
        al = "dd/MM/yyyy hh:mm:ss tt",
        Zk = "dd/MM/yyyy hh:mm tt",
        G = "dd/MM/yyyy",
        Vd = "Hijri",
        y = 8.64e7,
        Y = 6e4,
        R = 29,
        xb = 1318,
        Nk = 1873411199999,
        Mk = 1.8734112e12,
        Lk = 1.8428256e12,
        Kk = 1.81224e12,
        Jk = 1.781568e12,
        Ik = 1.750896e12,
        Hk = 1373,
        Gk = 1.7203104e12,
        Fk = 622,
        Ek = 1.6897248e12,
        Dk = 2350,
        Ck = 1.6591392e12,
        Bk = 2714,
        Ak = 1.6284672e12,
        zk = 1.5978816e12,
        yk = 1.5672096e12,
        xk = 1461,
        wk = 1.536624e12,
        vk = 1.505952e12,
        uk = 1.4753664e12,
        tk = 1181,
        sk = 1.4447808e12,
        rk = 2381,
        qk = 1.4141952e12,
        pk = 1.3835232e12,
        ok = 1.3529376e12,
        nk = 874,
        mk = 1.3222656e12,
        lk = 1.29168e12,
        kk = 686,
        jk = 1.2610944e12,
        ik = 2390,
        hk = 1.2305088e12,
        gk = 2726,
        fk = 1.1999232e12,
        ek = 1.1692512e12,
        dk = 3529,
        ck = 1.1386656e12,
        bk = 1.1079936e12,
        ak = 1.0773216e12,
        Zj = 1453,
        Yj = 1.046736e12,
        Xj = 1.0161504e12,
        Wj = 9.855648e11,
        Vj = 2953,
        Uj = 9.549792e11,
        Tj = 3012,
        Sj = 9.243072e11,
        Rj = 3026,
        Qj = 8.936352e11,
        Pj = 8.629632e11,
        Oj = 8.323776e11,
        Nj = 693,
        Mj = 8.01792e11,
        Lj = 7.712064e11,
        Kj = 2890,
        Jj = 7.406208e11,
        Ij = 7.099488e11,
        Hj = 3506,
        Gj = 6.792768e11,
        Fj = 1497,
        Ej = 6.486912e11,
        Dj = 730,
        Cj = 6.180192e11,
        Bj = 5.874336e11,
        Aj = 1197,
        zj = 5.56848e11,
        Tc = 2645,
        yj = 5.262624e11,
        xj = 4.955904e11,
        Sc = 2901,
        wj = 4.650048e11,
        vj = 1388,
        uj = 4.343328e11,
        tj = 2422,
        sj = 4.037472e11,
        rj = 3.730752e11,
        qj = 3.424896e11,
        pj = 3.11904e11,
        oj = 1685,
        nj = 2.813184e11,
        mj = 2.506464e11,
        lj = 2.200608e11,
        kj = 1.893888e11,
        jj = 2653,
        ij = 1.588032e11,
        Rc = 1325,
        hj = 1.282176e11,
        Qc = 2709,
        gj = 9.7632e10,
        fj = 3401,
        ej = 6.70464e10,
        dj = 3492,
        cj = 3.63744e10,
        bj = 3538,
        aj = 5.7024e9,
        Pc = 2773,
        Zi = -2.48832e10,
        Oc = 1370,
        Yi = -5.55552e10,
        Xi = 2731,
        Wi = -8.61408e10,
        Vi = 1355,
        Ui = -1.167264e11,
        Nc = 1701,
        Ti = -1.47312e11,
        Si = 1874,
        Ri = -1.77984e11,
        Qi = 1897,
        Pi = -2.085696e11,
        Oi = 884,
        Ni = -2.392416e11,
        Mi = 2486,
        Li = -2.698272e11,
        Ki = 1238,
        Ji = -3.004128e11,
        Ob = 2730,
        Ii = -3.309984e11,
        Hi = -3.616704e11,
        Gi = 3497,
        Fi = -3.92256e11,
        Ei = 1492,
        Di = -4.22928e11,
        Ci = -4.536e11,
        Bi = 1245,
        Ai = -4.841856e11,
        zi = 605,
        yi = -5.147712e11,
        xi = 2349,
        wi = -5.453568e11,
        vi = -5.759424e11,
        Mc = 3410,
        ui = -6.066144e11,
        ti = 3434,
        si = -6.372864e11,
        ri = -6.67872e11,
        qi = 694,
        pi = -6.98544e11,
        oi = 2359,
        ni = -7.291296e11,
        mi = 1175,
        li = -7.597152e11,
        ki = 2635,
        ji = -7.903008e11,
        ii = 2725,
        hi = -8.208864e11,
        gi = 2898,
        fi = -8.515584e11,
        Nb = 2922,
        ei = -8.822304e11,
        Lc = 1389,
        di = -9.12816e11,
        ci = 685,
        bi = -9.434016e11,
        ai = 2637,
        Zh = -9.739872e11,
        Yh = 3365,
        Xh = -1.0045728e12,
        Kc = 3474,
        Wh = -1.0352448e12,
        Vh = 3785,
        Uh = -1.0658304e12,
        Mb = 1748,
        Th = -1.0965024e12,
        Lb = 2778,
        Sh = -1.1271744e12,
        Rh = 1371,
        Qh = -1.15776e12,
        Ph = 683,
        Oh = -1.1883456e12,
        Nh = 1621,
        Mh = -1.2189312e12,
        Lh = 1865,
        Kh = -1.2495168e12,
        Jh = 1892,
        Ih = -1.2801888e12,
        Hh = 2994,
        Gh = -1.3108608e12,
        Kb = 1397,
        Fh = -1.3414464e12,
        Jc = 698,
        Eh = -1.3721184e12,
        Dh = 2395,
        Ch = -1.402704e12,
        Bh = 1195,
        Ah = -1.4332896e12,
        zh = 1365,
        yh = -1.4638752e12,
        Ic = 1706,
        xh = -1.4945472e12,
        wh = 1749,
        vh = -1.5251328e12,
        uh = 748,
        th = -1.5558048e12,
        Jb = 2397,
        sh = -1.5863904e12,
        Hc = 1198,
        rh = -1.616976e12,
        qh = 2646,
        ph = -1.6475616e12,
        oh = 3370,
        nh = -1.6782336e12,
        Gc = 3413,
        mh = -1.7088192e12,
        Fc = 1450,
        lh = -1.7394912e12,
        kh = -1.7700768e12,
        jh = 1206,
        ih = -1.8007488e12,
        Ec = 2647,
        hh = -1.8313344e12,
        Dc = 1323,
        gh = -1.86192e12,
        fh = 2707,
        eh = -1.8925056e12,
        dh = 2889,
        ch = -1.9230912e12,
        Cc = 2980,
        bh = -1.9537632e12,
        ah = 3498,
        Zg = -1.9844352e12,
        Bc = 2741,
        Yg = -2.0150208e12,
        Xg = 1334,
        Wg = -2.0456064e12,
        Ac = 2710,
        Vg = -2.076192e12,
        Ug = 3402,
        Tg = -2.1067776e12,
        Sg = 3748,
        Rg = -2.1374496e12,
        Qg = 3794,
        Pg = -2.1681216e12,
        Og = 1769,
        zc = -2.1987072e12,
        Ng = 746,
        o = "dd MMMM",
        Rl = "dd/MMMM/yyyy hh:mm:ss tt",
        Ql = "dd/MMMM/yyyy hh:mm tt",
        D = "hh:mm:ss tt",
        C = "hh:mm tt",
        Mg = "dd/MMMM/yyyy",
        Vb = "dd/MM/yy",
        bc = 1451,
        e = null,
        fc = "بعد الهجرة",
        k = "م",
        l = "ص",
        b = "",
        mb = "ذو الحجة",
        lb = "ذو القعدة",
        kb = "شوال",
        jb = "رمضان",
        ib = "شعبان",
        hb = "رجب",
        gb = "جمادى الثانية",
        fb = "جمادى الأولى",
        eb = "ربيع الثاني",
        db = "ربيع الأول",
        cb = "صفر",
        bb = "محرم",
        N = "س",
        M = "ج",
        T = "خ",
        X = "ر",
        S = "ث",
        W = "ن",
        V = "ح",
        v = "السبت",
        u = "الجمعة",
        t = "الخميس",
        s = "الأربعاء",
        r = "الثلاثاء",
        q = "الإثنين",
        p = "الأحد",
        Lg = "UmAlQura",
        F = "$ n",
        Ud = "$n-",
        qe = "n-",
        gg = "ar",
        c = true,
        a, f = d.cultures,
        j = f.en,
        h = j.calendars.standard;
    a = f.ar = d.extend(c, {}, j, {
        name: gg,
        englishName: "Arabic",
        nativeName: "العربية",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "ر.س.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f.ar);
    a.calendar = a.calendars.standard;
    a = f.bg = d.extend(c, {}, j, {
        name: "bg",
        englishName: "Bulgarian",
        nativeName: "български",
        language: "bg",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "лв."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["неделя", vx, Ur, "сряда", oV, "петък", "събота"],
                    namesAbbr: [bn, cn, wx, tm, "четв", dn, "съб"],
                    namesShort: ["н", um, "в", vm, jr, um, vm]
                },
                months: {
                    names: ["януари", xx, vg, en, Sl, yx, zx, Pk, Ax, Bx, Vr, Cx, b],
                    namesAbbr: ["ян", "февр", vg, Qk, Sl, yx, zx, Rk, "септ", Sk, Vr, Bn, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: pV,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: qV,
                    D: rV,
                    t: sV,
                    T: tV,
                    f: uV,
                    F: vV,
                    M: o,
                    Y: wV
                }
            })
        }
    }, f.bg);
    a.calendar = a.calendars.standard;
    a = f.ca = d.extend(c, {}, j, {
        name: "ca",
        englishName: "Catalan",
        nativeName: "català",
        language: "ca",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [xV, "dilluns", "dimarts", yV, "dijous", Dx, Ex],
                    namesAbbr: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
                    namesShort: ["dg", "dl", "dt", "dc", "dj", Tv, "ds"]
                },
                months: {
                    names: ["gener", "febrer", Wr, sd, Fx, Xr, "juliol", Gx, Hx, Te, kd, Ix, b],
                    namesAbbr: [Uv, ub, Wr, Gd, Fx, Xr, sb, "ag", po, je, vb, fn, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: zV,
                    t: J,
                    T: I,
                    f: AV,
                    F: BV,
                    M: o,
                    Y: CV
                }
            })
        }
    }, f.ca);
    a.calendar = a.calendars.standard;
    a = f[Jx] = d.extend(c, {}, j, {
        name: Jx,
        englishName: "Chinese (Simplified)",
        nativeName: "中文(简体)",
        language: Jx,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [Vv, Wv, Xv, Yv, Zv, aw, bw],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[Jx]);
    a.calendar = a.calendars.standard;
    a = f.cs = d.extend(c, {}, j, {
        name: "cs",
        englishName: "Czech",
        nativeName: "čeština",
        language: "cs",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "Kč"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", wm],
                    namesAbbr: [ke, Vf, Kx, ep, Lx, Mx, Ul],
                    namesShort: [ke, Vf, Kx, ep, Lx, Mx, Ul]
                },
                months: {
                    names: ["leden", "únor", "březen", "duben", "květen", "červen", DV, "srpen", Nx, "říjen", kr, EV, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                monthsGenitive: {
                    names: ["ledna", "února", "března", "dubna", "května", "června", FV, "srpna", Nx, "října", GV, HV, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [Ox, Ox, "DOP."],
                PM: [Px, Px, "ODP."],
                eras: [{
                    name: Qx,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.cs);
    a.calendar = a.calendars.standard;
    a = f.da = d.extend(c, {}, j, {
        name: "da",
        englishName: "Danish",
        nativeName: "dansk",
        language: "da",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [lr, cw, dw, En, Fn, Gn, ew],
                    namesAbbr: [Vl, Z, hg, ig, Ne, Ad, Hn],
                    namesShort: [Vl, Z, hg, ig, Ne, Ad, Hn]
                },
                months: {
                    names: [df, ef, Rx, Oe, Zb, jg, kg, Jl, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.da);
    a.calendar = a.calendars.standard;
    a = f.de = d.extend(c, {}, j, {
        name: mr,
        englishName: "German",
        nativeName: "Deutsch",
        language: mr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Yr, Zr, as, bs, cs, ds, es],
                    namesAbbr: [mg, rl, zg, Ag, Bg, Cg, ff],
                    namesShort: [mg, rl, zg, Ag, Bg, Cg, ff]
                },
                months: {
                    names: [nr, gp, In, Kl, me, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: [ne, ng, fw, We, me, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: fs,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: gs,
                    t: J,
                    T: I,
                    f: hs,
                    F: is,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.de);
    a.calendar = a.calendars.standard;
    a = f.el = d.extend(c, {}, j, {
        name: gw,
        englishName: "Greek",
        nativeName: "Ελληνικά",
        language: gw,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", IV, "Σάββατο"],
                    namesAbbr: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                    namesShort: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σά"]
                },
                months: {
                    names: [JV, KV, "Μάρτιος", LV, "Μάιος", "Ιούνιος", "Ιούλιος", MV, NV, OV, PV, QV, b],
                    namesAbbr: [Sx, Tx, Ux, Vx, Wx, Xx, Yx, Zx, ay, by, cy, dy, b]
                },
                monthsGenitive: {
                    names: [RV, SV, "Μαρτίου", TV, "Μαΐου", "Ιουνίου", "Ιουλίου", UV, VV, WV, XV, YV, b],
                    namesAbbr: [Sx, Tx, Ux, Vx, Wx, Xx, Yx, Zx, ay, by, cy, dy, b]
                },
                AM: [ey, ey, "ΠΜ"],
                PM: [fy, fy, "ΜΜ"],
                eras: [{
                    name: "μ.Χ.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: js,
                    f: gy,
                    F: hy,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.el);
    a.calendar = a.calendars.standard;
    a = f.es = d.extend(c, {}, j, {
        name: Yf,
        englishName: "Spanish",
        nativeName: "español",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f.es);
    a.calendar = a.calendars.standard;
    a = f.fi = d.extend(c, {}, j, {
        name: hw,
        englishName: "Finnish",
        nativeName: "suomi",
        language: hw,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [ZV, aW, "tiistai", bW, "torstai", cW, dW],
                    namesAbbr: [Zf, Z, hg, iy, Ne, Eg, Mn],
                    namesShort: [Zf, Z, hg, iy, Ne, Eg, Mn]
                },
                months: {
                    names: [eW, fW, gW, hW, iW, "kesäkuu", jW, "elokuu", "syyskuu", "lokakuu", kW, lW, b],
                    namesAbbr: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: mW,
                    t: B,
                    T: z,
                    f: nW,
                    F: oW,
                    M: pW,
                    Y: w
                }
            })
        }
    }, f.fi);
    a.calendar = a.calendars.standard;
    a = f.fr = d.extend(c, {}, j, {
        name: Ad,
        englishName: "French",
        nativeName: "français",
        language: Ad,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.fr);
    a.calendar = a.calendars.standard;
    a = f.he = d.extend(c, {}, j, {
        name: "he",
        englishName: oL,
        nativeName: "עברית",
        language: "he",
        isRTL: c,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, F],
                symbol: "₪"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [jy, ky, ly, my, ny, oy, ks],
                    namesAbbr: ["יום א", "יום ב", "יום ג", "יום ד", "יום ה", "יום ו", ks],
                    namesShort: [ls, ms, ns, os, ps, qs, rs]
                },
                months: {
                    names: ["ינואר", "פברואר", py, "אפריל", qy, "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר", b],
                    namesAbbr: ["ינו", "פבר", py, "אפר", qy, "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ", b]
                },
                eras: [{
                    name: "לספירה",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: ry,
                    t: J,
                    T: I,
                    f: sy,
                    F: ty,
                    M: o,
                    Y: w
                }
            }),
            Hebrew: d.extend(c, {}, h, {
                name: oL,
                "/": " ",
                days: {
                    names: [jy, ky, ly, my, ny, oy, ks],
                    namesAbbr: [ls, ms, ns, os, ps, qs, rs],
                    namesShort: [ls, ms, ns, os, ps, qs, rs]
                },
                months: {
                    names: [uy, vy, wy, xy, yy, zy, Ay, By, Cy, Dy, Ey, Fy, Gy],
                    namesAbbr: [uy, vy, wy, xy, yy, zy, Ay, By, Cy, Dy, Ey, Fy, Gy]
                },
                eras: [{
                    name: "C.E.",
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: 5790,
                patterns: {
                    d: Qb,
                    D: ry,
                    t: J,
                    T: I,
                    f: sy,
                    F: ty,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.he);
    a.calendar = a.calendars.standard;
    a = f.hu = d.extend(c, {}, j, {
        name: "hu",
        englishName: "Hungarian",
        nativeName: "magyar",
        language: "hu",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "Ft"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [qW, "hétfő", "kedd", "szerda", rW, "péntek", "szombat"],
                    namesAbbr: [Xl, Nn, Ml, Hy, Iy, Uk, Jy],
                    namesShort: [Xl, Nn, Ml, Hy, Iy, Uk, Jy]
                },
                months: {
                    names: [Ky, Ly, "március", "április", "május", "június", "július", sW, tW, ss, Ue, lg, b],
                    namesAbbr: [My, "febr.", "márc.", "ápr.", "máj.", Ny, Oy, Py, "szept.", Qy, Vc, Ry, b]
                },
                AM: [Sy, Sy, "DE."],
                PM: [Ty, Ty, "DU."],
                eras: [{
                    name: "i.sz.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Uy,
                    D: uW,
                    t: B,
                    T: z,
                    f: vW,
                    F: wW,
                    M: "MMMM d.",
                    Y: Vy
                }
            })
        }
    }, f.hu);
    a.calendar = a.calendars.standard;
    a = f.is = d.extend(c, {}, j, {
        name: "is",
        englishName: "Icelandic",
        nativeName: "íslenska",
        language: "is",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                decimals: 0,
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Wy, xW, yW, zW, AW, BW, CW],
                    namesAbbr: ["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."],
                    namesShort: [Zf, Xy, "þr", Cd, hw, "fö", Mn]
                },
                months: {
                    names: ["janúar", "febrúar", tb, ts, Yy, "júní", "júlí", "ágúst", le, ss, DW, to, b],
                    namesAbbr: [My, ip, kc, Zy, Yy, Ny, Oy, "ágú.", az, Qy, "nóv.", us, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.is);
    a.calendar = a.calendars.standard;
    a = f.it = d.extend(c, {}, j, {
        name: bz,
        englishName: "Italian",
        nativeName: "italiano",
        language: bz,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [pL, qL, rL, sL, tL, uL, vL],
                    namesAbbr: [td, Pe, U, "mer", "gio", iw, "sab"],
                    namesShort: [id, Bb, Z, wc, "gi", lc, ic]
                },
                months: {
                    names: [wL, xL, Rd, jw, yL, zL, AL, Dd, kw, lw, kd, mw, b],
                    namesAbbr: [Uv, ub, U, Ub, "mag", "giu", "lug", Ed, po, "ott", vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.it);
    a.calendar = a.calendars.standard;
    a = f.ja = d.extend(c, {}, j, {
        name: "ja",
        englishName: BL,
        nativeName: "日本語",
        language: "ja",
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [ud, Pb],
                decimals: 0,
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [cz, dz, ez, fz, gz, hz, iz],
                    namesAbbr: [wg, jp, kp, lp, mp, np, op],
                    namesShort: [wg, jp, kp, lp, mp, np, op]
                },
                months: {
                    names: [jz, kz, lz, mz, nz, oz, pz, qz, rz, sz, tz, uz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [ym, ym, ym],
                PM: [zm, zm, zm],
                eras: [{
                    name: "西暦",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: xg,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            }),
            Japanese: d.extend(c, {}, h, {
                name: BL,
                days: {
                    names: [cz, dz, ez, fz, gz, hz, iz],
                    namesAbbr: [wg, jp, kp, lp, mp, np, op],
                    namesShort: [wg, jp, kp, lp, mp, np, op]
                },
                months: {
                    names: [jz, kz, lz, mz, nz, oz, pz, qz, rz, sz, tz, uz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [ym, ym, ym],
                PM: [zm, zm, zm],
                eras: [{
                    name: "平成",
                    start: e,
                    offset: 1867
                }, {
                    name: "昭和",
                    start: EW,
                    offset: 1911
                }, {
                    name: "大正",
                    start: FW,
                    offset: 1925
                }, {
                    name: "明治",
                    start: GW,
                    offset: 1988
                }],
                twoDigitYearMax: 99,
                patterns: {
                    d: HW,
                    D: IW,
                    t: B,
                    T: z,
                    f: JW,
                    F: KW,
                    M: Il,
                    Y: LW
                }
            })
        }
    }, f.ja);
    a.calendar = a.calendars.standard;
    a = f.ko = d.extend(c, {}, j, {
        name: nw,
        englishName: CL,
        nativeName: "한국어",
        language: nw,
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                decimals: 0,
                symbol: "₩"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [vz, wz, xz, yz, zz, Az, Bz],
                    namesAbbr: [pp, qp, rp, sp, tp, up, vp],
                    namesShort: [pp, qp, rp, sp, tp, up, vp]
                },
                months: {
                    names: [Cz, Dz, Ez, Fz, Gz, Hz, Iz, Jz, Kz, Lz, Mz, Nz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [Am, Am, Am],
                PM: [Bm, Bm, Bm],
                eras: [{
                    name: "서기",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: og,
                    D: MW,
                    t: uo,
                    T: or,
                    f: NW,
                    F: OW,
                    M: Oz,
                    Y: PW
                }
            }),
            Korean: d.extend(c, {}, h, {
                name: CL,
                "/": rb,
                days: {
                    names: [vz, wz, xz, yz, zz, Az, Bz],
                    namesAbbr: [pp, qp, rp, sp, tp, up, vp],
                    namesShort: [pp, qp, rp, sp, tp, up, vp]
                },
                months: {
                    names: [Cz, Dz, Ez, Fz, Gz, Hz, Iz, Jz, Kz, Lz, Mz, Nz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [Am, Am, Am],
                PM: [Bm, Bm, Bm],
                eras: [{
                    name: "단기",
                    start: e,
                    offset: -2333
                }],
                twoDigitYearMax: 4362,
                patterns: {
                    d: QW,
                    D: RW,
                    t: uo,
                    T: or,
                    f: SW,
                    F: TW,
                    M: Oz,
                    Y: UW
                }
            })
        }
    }, f.ko);
    a.calendar = a.calendars.standard;
    a = f.nl = d.extend(c, {}, j, {
        name: Pz,
        englishName: "Dutch",
        nativeName: "Nederlands",
        language: Pz,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [DL, EL, FL, GL, HL, IL, JL],
                    namesAbbr: [vs, Z, Uc, vo, id, ws, xs],
                    namesShort: [vs, Z, Uc, vo, id, ws, xs]
                },
                months: {
                    names: [wp, xp, ow, Oe, ys, jg, kg, pw, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, qw, Ub, ys, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Qz,
                    D: Gf,
                    t: B,
                    T: z,
                    f: rw,
                    F: sw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.nl);
    a.calendar = a.calendars.standard;
    a = f.no = d.extend(c, {}, j, {
        name: "no",
        englishName: "Norwegian",
        nativeName: "norsk",
        language: "no",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [lr, cw, dw, En, Fn, Gn, ew],
                    namesAbbr: [Vl, Z, hg, ig, Ne, Ad, Hn],
                    namesShort: [Vl, Z, hg, ig, Ne, Ad, Hn]
                },
                months: {
                    names: [df, ef, tb, Oe, nb, jg, kg, Jl, le, pf, Ue, to, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.no);
    a.calendar = a.calendars.standard;
    a = f.pl = d.extend(c, {}, j, {
        name: tw,
        englishName: "Polish",
        nativeName: "polski",
        language: tw,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "zł"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [VW, WW, "wtorek", "środa", XW, "piątek", wm],
                    namesAbbr: [Ze, yp, Rz, Sz, Tz, zs, mg],
                    namesShort: [Ze, yp, Rz, Sz, Tz, zs, mg]
                },
                months: {
                    names: ["styczeń", "luty", "marzec", YW, Zb, ZW, "lipiec", aX, bX, cX, kr, dX, b],
                    namesAbbr: [Uz, Vz, U, Wz, Zb, Xz, Pn, Yz, Zz, aA, Qn, bA, b]
                },
                monthsGenitive: {
                    names: [eX, "lutego", cA, fX, dA, "czerwca", "lipca", gX, hX, iX, uw, "grudnia", b],
                    namesAbbr: [Uz, Vz, U, Wz, Zb, Xz, Pn, Yz, Zz, aA, Qn, bA, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: Hf,
                    t: J,
                    T: I,
                    f: pr,
                    F: wo,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.pl);
    a.calendar = a.calendars.standard;
    a = f.pt = d.extend(c, {}, j, {
        name: eA,
        englishName: "Portuguese",
        nativeName: "Português",
        language: eA,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g,
                symbol: "R$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, KL, LL, ML, NL, OL, Pd],
                    namesAbbr: [td, "seg", "ter", "qua", "qui", "sex", Qd],
                    namesShort: [un, Eb, md, xo, xo, Eb, Eb]
                },
                months: {
                    names: ["janeiro", jX, "março", sd, As, "junho", "julho", Dd, fA, gA, hA, kX, b],
                    namesAbbr: [hc, "fev", U, Gd, nb, wb, sb, Ed, po, iA, vb, "dez", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: PL,
                    t: J,
                    T: I,
                    f: QL,
                    F: RL,
                    M: SL,
                    Y: jd
                }
            })
        }
    }, f.pt);
    a.calendar = a.calendars.standard;
    a = f.rm = d.extend(c, {}, j, {
        name: "rm",
        englishName: "Romansh",
        nativeName: "Rumantsch",
        language: "rm",
        numberFormat: {
            ",": Ig,
            percent: {
                pattern: [K, L],
                ",": Ig
            },
            currency: {
                pattern: [jc, F],
                ",": Ig,
                symbol: jA
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [lX, mX, Kd, "mesemna", "gievgia", nX, "sonda"],
                    namesAbbr: [Bs, kA, Z, wc, lA, lc, Ul],
                    namesShort: [Bs, kA, Z, wc, lA, lc, Ul]
                },
                months: {
                    names: ["schaner", "favrer", tb, "avrigl", mA, oX, "fanadur", nA, pX, "october", Ue, lg, b],
                    namesAbbr: ["schan", "favr", tb, "avr", mA, "zercl", "fan", nA, oA, je, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: "s. Cr.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: js,
                    t: J,
                    T: I,
                    f: qX,
                    F: rX,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.rm);
    a.calendar = a.calendars.standard;
    a = f.ro = d.extend(c, {}, j, {
        name: "ro",
        englishName: "Romanian",
        nativeName: "română",
        language: "ro",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "lei"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [sX, pA, "marţi", tX, "joi", "vineri", "sâmbătă"],
                    namesAbbr: [un, yc, Rn, Ag, Cm, Xl, Eb],
                    namesShort: [un, yc, Rn, Ag, Cm, Xl, Eb]
                },
                months: {
                    names: [uX, vX, "martie", "aprilie", nb, "iunie", "iulie", Jl, wX, xX, yX, zX, b],
                    namesAbbr: ["ian.", ip, kc, Zy, zp, "iun.", "iul.", Py, az, od, Vc, Ry, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: J,
                    T: I,
                    f: pr,
                    F: wo,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.ro);
    a.calendar = a.calendars.standard;
    a = f.ru = d.extend(c, {}, j, {
        name: "ru",
        englishName: "Russian",
        nativeName: "русский",
        language: "ru",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: Cs
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [AX, BX, Ur, yo, "четверг", "пятница", "суббота"],
                    namesAbbr: [qA, Ap, Bp, sl, Cp, Dp, Dm],
                    namesShort: [qA, Ap, Bp, sl, Cp, Dp, Dm]
                },
                months: {
                    names: [rA, Ds, om, Es, Id, Ep, Fp, pm, Fs, Gs, Hs, Is, b],
                    namesAbbr: [sA, Gp, Ol, Qk, Sl, Hp, Ip, Rk, Js, Sk, Ks, Bn, b]
                },
                monthsGenitive: {
                    names: ["января", "февраля", "марта", "апреля", Jp, "июня", "июля", "августа", CX, "октября", "ноября", "декабря", b],
                    namesAbbr: [sA, Gp, Ol, Qk, Sl, Hp, Ip, Rk, Js, Sk, Ks, Bn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: DX,
                    t: B,
                    T: z,
                    f: EX,
                    F: FX,
                    Y: w
                }
            })
        }
    }, f.ru);
    a.calendar = a.calendars.standard;
    a = f.hr = d.extend(c, {}, j, {
        name: tA,
        englishName: "Croatian",
        nativeName: "hrvatski",
        language: tA,
        numberFormat: {
            pattern: [vw],
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: ww
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Ls, Ms, Em, Ns, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Os, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [TL, UL, VL, WL, XL, YL, ZL, aM, bM, kr, cM, dM, b],
                    namesAbbr: [Ps, Qs, Rs, Ss, Ts, Pn, Us, Vs, Ws, Qn, Xs, Ys, b]
                },
                monthsGenitive: {
                    names: [eM, fM, gM, hM, iM, jM, kM, lM, mM, uw, nM, oM, b],
                    namesAbbr: [Ps, Qs, Rs, Ss, Ts, Pn, Us, Vs, Ws, Qn, Xs, Ys, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: pM,
                    D: qM,
                    t: B,
                    T: z,
                    f: rM,
                    F: sM,
                    M: gc
                }
            })
        }
    }, f.hr);
    a.calendar = a.calendars.standard;
    a = f.sk = d.extend(c, {}, j, {
        name: "sk",
        englishName: "Slovak",
        nativeName: "slovenčina",
        language: "sk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": Zs,
                firstDay: 1,
                days: {
                    names: ["nedeľa", GX, "utorok", "streda", "štvrtok", "piatok", wm],
                    namesAbbr: [ke, Vf, ul, ep, uA, Kp, Ul],
                    namesShort: [ke, Vf, ul, ep, uA, Kp, Ul]
                },
                months: {
                    names: [Ky, Ly, vA, ts, "máj", "jún", "júl", Jl, le, ss, Ue, lg, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                monthsGenitive: {
                    names: ["januára", HX, cA, "apríla", "mája", "júna", "júla", "augusta", at, "októbra", IX, bt, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Qx,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ct,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.sk);
    a.calendar = a.calendars.standard;
    a = f.sq = d.extend(c, {}, j, {
        name: "sq",
        englishName: "Albanian",
        nativeName: "shqipe",
        language: "sq",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": i,
                ".": g,
                symbol: "Lek"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["e diel", "e hënë", "e martë", JX, "e enjte", KX, LX],
                    namesAbbr: ["Die", "Hën", Se, "Mër", "Enj", "Pre", wA],
                    namesShort: [zg, "Hë", Rn, xA, yA, zA, "Sh"]
                },
                months: {
                    names: ["janar", "shkurt", tb, "prill", Zb, "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor", b],
                    namesAbbr: [ne, "Shk", Se, "Pri", "Maj", "Qer", "Kor", "Gsh", wA, "Tet", "Nën", "Dhj", b]
                },
                AM: [AA, "pd", AA],
                PM: [BA, "md", BA],
                patterns: {
                    d: og,
                    D: og,
                    t: "h:mm.tt",
                    T: MX,
                    f: NX,
                    F: OX,
                    Y: "yyyy-MM"
                }
            })
        }
    }, f.sq);
    a.calendar = a.calendars.standard;
    a = f.sv = d.extend(c, {}, j, {
        name: Lp,
        englishName: "Swedish",
        nativeName: "svenska",
        language: Lp,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [tM, xw, uM, En, Fn, Gn, vM],
                    namesAbbr: [dt, Sn, hg, ig, Ne, Ad, et],
                    namesShort: [dt, Sn, hg, ig, Ne, Ad, et]
                },
                months: {
                    names: [wp, xp, tb, Oe, Zb, jg, kg, wM, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: xM,
                    t: J,
                    T: I,
                    f: yM,
                    F: zM,
                    M: AM,
                    Y: w
                }
            })
        }
    }, f.sv);
    a.calendar = a.calendars.standard;
    a = f.th = d.extend(c, {}, j, {
        name: "th",
        englishName: "Thai",
        nativeName: "ไทย",
        language: "th",
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: "฿"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: PX,
                firstDay: 1,
                days: {
                    names: [CA, DA, EA, FA, GA, HA, IA],
                    namesAbbr: [JA, KA, LA, MA, NA, OA, PA],
                    namesShort: [Mp, "จ", Mp, Np, Np, "ศ", "ส"]
                },
                months: {
                    names: [QA, RA, SA, TA, UA, VA, WA, XA, YA, ZA, aB, bB, b],
                    namesAbbr: [cB, dB, eB, fB, gB, hB, iB, jB, kB, lB, mB, nB, b]
                },
                eras: [{
                    name: "พ.ศ.",
                    start: e,
                    offset: -543
                }],
                twoDigitYearMax: 2572,
                patterns: {
                    d: hf,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: o,
                    Y: w
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [CA, DA, EA, FA, GA, HA, IA],
                    namesAbbr: [JA, KA, LA, MA, NA, OA, PA],
                    namesShort: [Mp, "จ", Mp, Np, Np, "ศ", "ส"]
                },
                months: {
                    names: [QA, RA, SA, TA, UA, VA, WA, XA, YA, ZA, aB, bB, b],
                    namesAbbr: [cB, dB, eB, fB, gB, hB, iB, jB, kB, lB, mB, nB, b]
                },
                patterns: {
                    d: hf,
                    D: QX,
                    t: B,
                    T: z,
                    f: RX,
                    F: SX,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.th);
    a.calendar = a.calendars.standard;
    a = f.tr = d.extend(c, {}, j, {
        name: qr,
        englishName: "Turkish",
        nativeName: "Türkçe",
        language: qr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "TL"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Pazar", TX, "Salı", UX, VX, "Cuma", WX],
                    namesAbbr: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                    namesShort: ["Pz", zs, ff, Op, "Pe", "Cu", "Ct"]
                },
                months: {
                    names: ["Ocak", "Şubat", zo, "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", b],
                    namesAbbr: ["Oca", "Şub", Se, "Nis", Vk, "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", yw, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: ft,
                    t: J,
                    T: I,
                    f: oB,
                    F: pB,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.tr);
    a.calendar = a.calendars.standard;
    a = f.ur = d.extend(c, {}, j, {
        name: "ur",
        englishName: "Urdu",
        nativeName: "اُردو",
        language: "ur",
        isRTL: c,
        numberFormat: {
            currency: {
                pattern: [Ud, Pb],
                symbol: "Rs"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [qB, rB, sB, tB, uB, wl, vB],
                    namesAbbr: [qB, rB, sB, tB, uB, wl, vB],
                    namesShort: [em, Tn, k, "ب", M, M, "ه"]
                },
                months: {
                    names: [wB, xB, yB, zB, AB, BB, CB, DB, EB, FB, GB, HB, b],
                    namesAbbr: [wB, xB, yB, zB, AB, BB, CB, DB, EB, FB, GB, HB, b]
                },
                patterns: {
                    d: G,
                    D: cf,
                    f: XX,
                    F: YX,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    f: gt,
                    F: ht,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            })
        }
    }, f.ur);
    a.calendar = a.calendars.standard;
    a = f.id = d.extend(c, {}, j, {
        name: "id",
        englishName: "Indonesian",
        nativeName: "Bahasa Indonesia",
        language: "id",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                decimals: 0,
                ",": i,
                ".": g,
                symbol: "Rp"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [IB, "Senin", zw, Un, JB, KB, Vn],
                    namesAbbr: [IB, Wn, Aw, Un, JB, KB, Vn],
                    namesShort: [ag, Eb, Eb, pg, Ml, Cm, Eb]
                },
                months: {
                    names: [rr, sr, "Maret", Kl, Jg, xm, Jn, "Agustus", Tk, Ll, ZX, LB, b],
                    namesAbbr: [ne, ng, Se, We, Jg, gf, dg, "Agust", Wl, Bd, "Nop", MB, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: G,
                    D: Qb,
                    t: B,
                    T: z,
                    f: Bw,
                    F: Cw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.id);
    a.calendar = a.calendars.standard;
    a = f.uk = d.extend(c, {}, j, {
        name: "uk",
        englishName: "Ukrainian",
        nativeName: "українська",
        language: "uk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "₴"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["неділя", aY, bY, "середа", "четвер", cY, vn],
                    namesAbbr: [NB, Ap, Bp, sl, Cp, Dp, Dm],
                    namesShort: [NB, Ap, Bp, sl, Cp, Dp, Dm]
                },
                months: {
                    names: ["Січень", "Лютий", dY, "Квітень", "Травень", "Червень", "Липень", "Серпень", eY, "Жовтень", fY, "Грудень", b],
                    namesAbbr: ["Січ", it, "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", jt, "Жов", "Лис", "Гру", b]
                },
                monthsGenitive: {
                    names: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", gY, "грудня", b],
                    namesAbbr: ["січ", "лют", "бер", "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: hY,
                    t: B,
                    T: z,
                    f: iY,
                    F: jY,
                    M: Rb,
                    Y: kY
                }
            })
        }
    }, f.uk);
    a.calendar = a.calendars.standard;
    a = f.be = d.extend(c, {}, j, {
        name: "be",
        englishName: "Belarusian",
        nativeName: "Беларускі",
        language: "be",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Cs
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["нядзеля", lY, "аўторак", "серада", "чацвер", "пятніца", vn],
                    namesAbbr: [OB, PB, QB, tm, RB, SB, TB],
                    namesShort: [OB, PB, QB, tm, RB, SB, TB]
                },
                months: {
                    names: [mY, "Люты", "Сакавік", nY, Id, "Чэрвень", "Ліпень", "Жнівень", oY, pY, qY, "Снежань", b],
                    namesAbbr: [UB, it, VB, WB, Id, XB, YB, ZB, jt, aC, bC, cC, b]
                },
                monthsGenitive: {
                    names: [rY, "лютага", sY, tY, Jp, "чэрвеня", "ліпеня", "жніўня", "верасня", uY, vY, "снежня", b],
                    namesAbbr: [UB, it, VB, WB, Id, XB, YB, ZB, jt, aC, bC, cC, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.be);
    a.calendar = a.calendars.standard;
    a = f.sl = d.extend(c, {}, j, {
        name: "sl",
        englishName: "Slovenian",
        nativeName: "slovenski",
        language: "sl",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, wY, "torek", Qp, "četrtek", "petek", wm],
                    namesAbbr: [Yl, tl, "tor", Rp, Zl, am, kt],
                    namesShort: [ke, Vf, Ne, vl, bm, Eg, Ul]
                },
                months: {
                    names: [df, ef, vA, Oe, Zb, lt, mt, qg, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.sl);
    a.calendar = a.calendars.standard;
    a = f.et = d.extend(c, {}, j, {
        name: "et",
        englishName: "Estonian",
        nativeName: "eesti",
        language: "et",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [xY, yY, zY, AY, BY, "reede", "laupäev"],
                    namesAbbr: [Uk, Sp, md, Ml, Ze, pg, yc],
                    namesShort: [Uk, Sp, md, Ml, Ze, pg, yc]
                },
                months: {
                    names: ["jaanuar", CY, dC, "aprill", nb, eC, fC, Jl, le, DY, Ue, EY, b],
                    namesAbbr: ["jaan", "veebr", dC, Ub, nb, eC, fC, Ve, gC, dc, vb, "dets", b]
                },
                AM: [hC, gw, hC],
                PM: [iC, tw, iC],
                patterns: {
                    d: FY,
                    D: GY,
                    t: B,
                    T: z,
                    f: HY,
                    F: IY,
                    M: gc,
                    Y: JY
                }
            })
        }
    }, f.et);
    a.calendar = a.calendars.standard;
    a = f.lv = d.extend(c, {}, j, {
        name: "lv",
        englishName: "Latvian",
        nativeName: "latviešu",
        language: "lv",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": n,
                ".": g,
                symbol: "Ls"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [KY, LY, MY, NY, OY, PY, QY],
                    namesAbbr: [Lp, jC, kC, qr, lC, mC, xn],
                    namesShort: [Lp, jC, kC, qr, lC, mC, xn]
                },
                months: {
                    names: [RY, SY, Rx, "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", TY, UY, VY, WY, b],
                    namesAbbr: [hc, ub, U, Ub, nb, nC, oC, Ve, yb, dc, vb, oc, b]
                },
                monthsGenitive: {
                    names: ["janvārī", XY, "martā", "aprīlī", "maijā", "jūnijā", "jūlijā", "augustā", YY, "oktobrī", ZY, aZ, b],
                    namesAbbr: [hc, ub, U, Ub, nb, nC, oC, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Uy,
                    D: bZ,
                    t: B,
                    T: z,
                    f: cZ,
                    F: dZ,
                    M: gc,
                    Y: Vy
                }
            })
        }
    }, f.lv);
    a.calendar = a.calendars.standard;
    a = f.lt = d.extend(c, {}, j, {
        name: "lt",
        englishName: "Lithuanian",
        nativeName: "lietuvių",
        language: "lt",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: nt
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [eZ, fZ, gZ, hZ, iZ, jZ, kZ],
                    namesAbbr: ["Sk", zA, pC, "Tr", "Kt", yp, "Št"],
                    namesShort: [Eb, Uk, qd, md, Ml, yp, "Š"]
                },
                months: {
                    names: ["sausis", "vasaris", "kovas", lZ, "gegužė", mZ, "liepa", nZ, oZ, "spalis", pZ, "gruodis", b],
                    namesAbbr: [qC, rC, sC, tC, uC, vC, wC, xC, yC, zC, AC, BC, b]
                },
                monthsGenitive: {
                    names: ["sausio", "vasario", "kovo", qZ, "gegužės", rZ, "liepos", sZ, "rugsėjo", "spalio", tZ, uZ, b],
                    namesAbbr: [qC, rC, sC, tC, uC, vC, wC, xC, yC, zC, AC, BC, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: vZ,
                    D: wZ,
                    t: J,
                    T: I,
                    f: xZ,
                    F: yZ,
                    M: zZ,
                    Y: AZ
                }
            })
        }
    }, f.lt);
    a.calendar = a.calendars.standard;
    a = f.tg = d.extend(c, {}, j, {
        name: "tg",
        englishName: "Tajik",
        nativeName: "Тоҷикӣ",
        language: "tg",
        numberFormat: {
            ",": n,
            ".": g,
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                groupSizes: [3, 0],
                ",": n,
                ".": ";",
                symbol: BM
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                days: {
                    names: [Ao, CM, DM, EM, FM, GM, HM],
                    namesAbbr: [Ao, fm, ot, pt, qt, rt, st],
                    namesShort: [Ao, fm, ot, pt, qt, rt, st]
                },
                months: {
                    names: [Dw, tr, om, ur, Id, Wk, Xk, pm, Ew, Fw, Gw, vr, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                monthsGenitive: {
                    names: [IM, JM, KM, LM, "маи", MM, NM, OM, PM, QM, RM, SM, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    Y: w
                }
            })
        }
    }, f.tg);
    a.calendar = a.calendars.standard;
    a = f.fa = d.extend(c, {}, j, {
        name: "fa",
        englishName: "Persian",
        nativeName: "فارسى",
        language: "fa",
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                ".": "/",
                symbol: "ريال"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [CC, Lm, DC, Tp, Mm, wl, Nm],
                    namesAbbr: [CC, Lm, DC, Tp, Mm, wl, Nm],
                    namesShort: [tt, Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [EC, FC, ab, GC, HC, IC, JC, KC, LC, MC, NC, OC, b],
                    namesAbbr: [EC, FC, ab, GC, HC, IC, JC, KC, LC, MC, NC, OC, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                patterns: {
                    d: xg,
                    D: xg,
                    t: C,
                    T: D,
                    f: BZ,
                    F: CZ,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f.fa);
    a.calendar = a.calendars.standard;
    a = f.vi = d.extend(c, {}, j, {
        name: Qe,
        englishName: "Vietnamese",
        nativeName: "Tiếng Việt",
        language: Qe,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "₫"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [DZ, EZ, "Thứ Ba", "Thứ Tư", FZ, GZ, HZ],
                    namesAbbr: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"],
                    namesShort: [Xn, Nn, Pm, md, Ze, Eb, Pm]
                },
                months: {
                    names: [IZ, JZ, KZ, LZ, MZ, NZ, OZ, PZ, QZ, RZ, SZ, TZ, b],
                    namesAbbr: ["Thg1", "Thg2", "Thg3", "Thg4", "Thg5", "Thg6", "Thg7", "Thg8", "Thg9", "Thg10", "Thg11", "Thg12", b]
                },
                AM: [PC, ic, PC],
                PM: [QC, Hw, QC],
                patterns: {
                    d: G,
                    D: Qb,
                    f: UZ,
                    F: VZ,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.vi);
    a.calendar = a.calendars.standard;
    a = f.hy = d.extend(c, {}, j, {
        name: "hy",
        englishName: "Armenian",
        nativeName: "Հայերեն",
        language: "hy",
        numberFormat: {
            currency: {
                pattern: [H, E],
                symbol: "դր."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Կիրակի", WZ, XZ, YZ, ZZ, "ՈՒրբաթ", "Շաբաթ"],
                    namesAbbr: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "ՈՒր", "Շբթ"],
                    namesShort: ["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"]
                },
                months: {
                    names: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", aab, bab, cab, dab, b],
                    namesAbbr: ["ՀՆՎ", "ՓՏՎ", "ՄՐՏ", "ԱՊՐ", "ՄՅՍ", "ՀՆՍ", "ՀԼՍ", "ՕԳՍ", "ՍԵՊ", "ՀՈԿ", "ՆՈՅ", "ԴԵԿ", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: eab,
                    t: B,
                    T: z,
                    f: fab,
                    F: gab,
                    M: Rb
                }
            })
        }
    }, f.hy);
    a.calendar = a.calendars.standard;
    a = f.az = d.extend(c, {}, j, {
        name: RC,
        englishName: "Azeri",
        nativeName: hab,
        language: RC,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: TM
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [UM, VM, WM, XM, YM, ZM, aN],
                    namesAbbr: [Pm, ut, Op, Xp, Yp, Xn, Zp],
                    namesShort: [Pm, ut, Op, Xp, Yp, Xn, Zp]
                },
                months: {
                    names: [bN, cN, zo, Iw, Vk, Co, Do, dN, eN, fN, gN, Jw, b],
                    namesAbbr: [vt, wr, Se, We, Vk, Co, Do, wt, Wn, Bd, xt, aq, b]
                },
                monthsGenitive: {
                    names: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b],
                    namesAbbr: [vt, wr, Se, We, Vk, Co, Do, wt, Wn, Bd, xt, aq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.az);
    a.calendar = a.calendars.standard;
    a = f.eu = d.extend(c, {}, j, {
        name: "eu",
        englishName: "Basque",
        nativeName: "euskara",
        language: "eu",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["igandea", iab, jab, kab, lab, mab, nab],
                    namesAbbr: ["ig.", "al.", "as.", "az.", "og.", "or.", "lr."],
                    namesShort: [Kw, "al", Lw, RC, "og", Mw, "lr"]
                },
                months: {
                    names: [oab, "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua", b],
                    namesAbbr: ["urt.", "ots.", kc, "api.", zp, "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe.", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: xg,
                    D: pab,
                    t: J,
                    T: z,
                    f: qab,
                    F: rab,
                    Y: sab
                }
            })
        }
    }, f.eu);
    a.calendar = a.calendars.standard;
    a = f.hsb = d.extend(c, {}, j, {
        name: "hsb",
        englishName: "Upper Sorbian",
        nativeName: "hornjoserbšćina",
        language: "hsb",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": Zs,
                firstDay: 1,
                days: {
                    names: [tab, uab, "wutora", "srjeda", "štwórtk", "pjatk", wm],
                    namesAbbr: [SC, "pón", "wut", TC, "štw", "pja", kt],
                    namesShort: [yt, Yk, "w", bg, "š", Yk, bg]
                },
                months: {
                    names: [df, ef, UC, VC, "meja", lt, mt, WC, le, pf, XC, lg, b],
                    namesAbbr: [hc, ub, bq, Ub, YC, wb, sb, cq, yb, dc, dq, oc, b]
                },
                monthsGenitive: {
                    names: [ZC, aD, bD, cD, "meje", dD, eD, fD, at, gD, hD, bt, b],
                    namesAbbr: [hc, ub, bq, Ub, YC, wb, sb, cq, yb, dc, dq, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: iD,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ct,
                    D: jD,
                    t: vab,
                    T: z,
                    f: wab,
                    F: kD,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.hsb);
    a.calendar = a.calendars.standard;
    a = f.mk = d.extend(c, {}, j, {
        name: "mk",
        englishName: "Macedonian (FYROM)",
        nativeName: "македонски јазик",
        language: "mk",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "ден."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["недела", vx, Ur, yo, xab, "петок", "сабота"],
                    namesAbbr: [bn, cn, "втр", "срд", No, dn, "саб"],
                    namesShort: [zt, At, wx, tm, Bt, Ct, "са"]
                },
                months: {
                    names: ["јануари", xx, vg, en, rg, "јуни", "јули", Pk, Ax, Bx, Vr, Cx, b],
                    namesAbbr: [Oo, Gp, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, "ное", Bn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: lD,
                    t: J,
                    T: I,
                    f: yab,
                    F: zab,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.mk);
    a.calendar = a.calendars.standard;
    a = f.tn = d.extend(c, {}, j, {
        name: "tn",
        englishName: Aab,
        nativeName: Aab,
        language: "tn",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Bab, Cab, mD, nD, oD, Dab, Eab],
                    namesAbbr: ["Ltp.", "Mos.", "Lbd.", "Lbr.", "Lbn.", "Lbt.", "Lmt."],
                    namesShort: ["Lp", "Ms", pD, "Lr", qD, nt, "Lm"]
                },
                months: {
                    names: [Fab, Gab, Hab, rD, Iab, Jab, "Phukwi", "Phatwe", "Lwetse", Kab, Lab, Mab, b],
                    namesAbbr: ["Fer.", "Tlhak.", "Mop.", "Mor.", "Motsh.", "Seet.", "Phukw.", "Phatw.", "Lwets.", "Diph.", "Ngwan.", "Sed.", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.tn);
    a.calendar = a.calendars.standard;
    a = f.xh = d.extend(c, {}, j, {
        name: "xh",
        englishName: Nab,
        nativeName: Nab,
        language: "xh",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["iCawa", "uMvulo", Oab, sD, tD, uD, vD],
                    namesShort: [Yp, "Mv", pD, nt, qD, "Lh", "Mg"]
                },
                months: {
                    names: ["Mqungu", "Mdumba", "Kwindla", Pab, "Canzibe", Qab, "Khala", "Thupha", "Msintsi", "Dwarha", "Nkanga", "Mnga", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.xh);
    a.calendar = a.calendars.standard;
    a = f.zu = d.extend(c, {}, j, {
        name: "zu",
        englishName: "isiZulu",
        nativeName: "isiZulu",
        language: "zu",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["iSonto", Rab, Sab, sD, tD, uD, vD],
                    namesAbbr: ["Son.", "Mso.", "Bi.", "Tha.", "Ne.", "Hla.", "Mgq."]
                },
                months: {
                    names: [Tab, Uab, "uNdasa", "uMbaso", "uNhlaba", Vab, Wab, "uNcwaba", Xab, "uMfumfu", "uLwezi", Yab, b],
                    namesAbbr: ["Mas.", "Nhlo.", "Nda.", "Mba.", "Nhla.", "Nhlang.", "Ntu.", "Ncwa.", "Man.", "Mfu.", "Lwe.", "Zib.", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.zu);
    a.calendar = a.calendars.standard;
    a = f.af = d.extend(c, {}, j, {
        name: "af",
        englishName: Zab,
        nativeName: Zab,
        language: "af",
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["Sondag", "Maandag", "Dinsdag", abb, bbb, "Vrydag", cbb],
                    namesAbbr: [wD, "Maan", "Dins", "Woen", "Dond", "Vry", xr],
                    namesShort: [mg, Rn, zg, xD, Bg, "Vr", ff]
                },
                months: {
                    names: [dbb, ebb, "Maart", Kl, Jg, "Junie", "Julie", fbb, Tk, Ll, nm, LB, b],
                    namesAbbr: [ne, ng, Se, We, Jg, gf, dg, Ln, Wl, Bd, Dg, MB, b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.af);
    a.calendar = a.calendars.standard;
    a = f.ka = d.extend(c, {}, j, {
        name: An,
        englishName: "Georgian",
        nativeName: "ქართული",
        language: An,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "Lari"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [yD, zD, AD, BD, CD, DD, ED],
                    namesAbbr: [yD, zD, AD, BD, CD, DD, ED],
                    namesShort: ["კ", "ო", "ს", "ო", "ხ", "პ", "შ"]
                },
                months: {
                    names: ["იანვარი", gbb, "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", hbb, ibb, jbb, kbb, b],
                    namesAbbr: ["იან", "თებ", "მარ", "აპრ", "მაის", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოემ", "დეკ", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: lbb,
                    t: B,
                    T: z,
                    f: mbb,
                    F: nbb,
                    M: "dd MM",
                    Y: w
                }
            })
        }
    }, f.ka);
    a.calendar = a.calendars.standard;
    a = f.fo = d.extend(c, {}, j, {
        name: "fo",
        englishName: "Faroese",
        nativeName: "føroyskt",
        language: "fo",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [Wy, obb, pbb, qbb, rbb, sbb, tbb],
                    namesAbbr: ["sun", Dt, "týs", "mik", "hós", "frí", "leyg"],
                    namesShort: [Zf, Xy, "tý", Cd, "hó", Ad, "ley"]
                },
                months: {
                    names: [df, ef, tb, ts, nb, jg, kg, Jl, le, pf, Ue, to, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.fo);
    a.calendar = a.calendars.standard;
    a = f.hi = d.extend(c, {}, j, {
        name: "hi",
        englishName: "Hindi",
        nativeName: "हिंदी",
        language: "hi",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [FD, Et, "मंगलवार", eq, GD, Ft, Gt],
                    namesAbbr: [HD, Ht, "मंगल.", It, ID, JD, KD],
                    namesShort: [Jt, Zn, ao, bo, Kt, Hl, Hl]
                },
                months: {
                    names: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b],
                    namesAbbr: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b]
                },
                AM: [Rm, Rm, Rm],
                PM: [Sm, Sm, Sm],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f.hi);
    a.calendar = a.calendars.standard;
    a = f.mt = d.extend(c, {}, j, {
        name: "mt",
        englishName: "Maltese",
        nativeName: "Malti",
        language: "mt",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [ud, Pb],
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Il-Ħadd", ubb, vbb, wbb, xbb, ybb, "Is-Sibt"],
                    namesAbbr: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
                    namesShort: [oe, oe, oe, yc, oe, oe, oe]
                },
                months: {
                    names: ["Jannar", "Frar", "Marzu", Kl, "Mejju", "Ġunju", "Lulju", "Awissu", zbb, "Ottubru", Abb, Bbb, b],
                    namesAbbr: [ne, "Fra", Se, We, "Mej", "Ġun", "Lul", "Awi", "Set", "Ott", Dg, "Diċ", b]
                },
                patterns: {
                    d: G,
                    D: Cbb,
                    t: J,
                    T: I,
                    f: Dbb,
                    F: Ebb,
                    M: Fbb,
                    Y: w
                }
            })
        }
    }, f.mt);
    a.calendar = a.calendars.standard;
    a = f.se = d.extend(c, {}, j, {
        name: xn,
        englishName: "Sami (Northern)",
        nativeName: "davvisámegiella",
        language: xn,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [LD, hN, iN, MD, ND, OD, PD],
                    namesAbbr: [QD, jN, "maŋ", yr, zr, RD, Ar],
                    namesShort: [bg, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [SD, TD, UD, VD, WD, XD, YD, ZD, aE, bE, cE, dE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                monthsGenitive: {
                    names: [eE, fE, gE, hE, iE, jE, kE, lE, mE, nE, oE, pE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f.se);
    a.calendar = a.calendars.standard;
    a = f.ga = d.extend(c, {}, j, {
        name: So,
        englishName: "Irish",
        nativeName: "Gaeilge",
        language: So,
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Gbb, Hbb, Ibb, Jbb, Kbb, Lbb, Mbb],
                    namesAbbr: ["Domh", "Luan", "Máir", "Céad", "Déar", "Aoi", "Sath"],
                    namesShort: [Bg, qE, "Má", "Cé", "De", "Ao", ff]
                },
                months: {
                    names: ["Eanáir", "Feabhra", "Márta", "Aibreán", Nbb, Obb, rE, "Lúnasa", Pbb, Qbb, "Samhain", "Nollaig", b],
                    namesAbbr: ["Ean", "Feabh", "Már", "Aib", "Bealt", "Meith", rE, "Lún", "M.Fómh", "D.Fómh", "Samh", "Noll", b]
                },
                AM: [sE, sE, "R.N."],
                PM: [tE, tE, "I.N."],
                patterns: {
                    d: G,
                    D: Hf,
                    t: J,
                    T: I,
                    f: pr,
                    F: wo,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.ga);
    a.calendar = a.calendars.standard;
    a = f.ms = d.extend(c, {}, j, {
        name: uE,
        englishName: "Malay",
        nativeName: "Bahasa Melayu",
        language: uE,
        numberFormat: {
            currency: {
                decimals: 0,
                symbol: "RM"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [To, Lt, zw, Un, Mt, Nt, Vn],
                    namesAbbr: [To, Lt, Aw, Un, Mt, Nt, Vn],
                    namesShort: [qd, oe, Eb, pg, Ml, Cm, Eb]
                },
                months: {
                    names: [rr, sr, wq, Kl, Jg, gf, xq, Ot, Tk, Ll, nm, kN, b],
                    namesAbbr: [ne, ng, wq, We, Jg, gf, dg, Ot, Nw, Bd, Dg, yq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: G,
                    D: Qb,
                    t: B,
                    T: z,
                    f: Bw,
                    F: Cw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.ms);
    a.calendar = a.calendars.standard;
    a = f.kk = d.extend(c, {}, j, {
        name: "kk",
        englishName: "Kazakh",
        nativeName: "Қазақ",
        language: "kk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [ud, Pb],
                ",": n,
                ".": rb,
                symbol: "Т"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Rbb, Sbb, Tbb, Ubb, Vbb, "Жұма", "Сенбі"],
                    namesAbbr: [vE, wE, xE, sl, zq, Aq, yE],
                    namesShort: [vE, wE, xE, sl, zq, Aq, yE]
                },
                months: {
                    names: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", Wbb, "қазан", "қараша", Xbb, b],
                    namesAbbr: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Ybb,
                    t: B,
                    T: z,
                    f: Zbb,
                    F: acb,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.kk);
    a.calendar = a.calendars.standard;
    a = f.ky = d.extend(c, {}, j, {
        name: "ky",
        englishName: "Kyrgyz",
        nativeName: "Кыргыз",
        language: "ky",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": rb,
                symbol: "сом"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [bcb, ccb, dcb, ecb, fcb, "Жума", "Ишемби"],
                    namesAbbr: [zE, fm, Bq, Cq, AE, Aq, BE],
                    namesShort: [zE, fm, Bq, Cq, AE, Aq, BE]
                },
                months: {
                    names: [rA, Ds, om, Es, Id, Ep, Fp, pm, Fs, Gs, Hs, Is, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: gcb,
                    t: B,
                    T: z,
                    f: hcb,
                    F: icb,
                    M: Rb,
                    Y: jcb
                }
            })
        }
    }, f.ky);
    a.calendar = a.calendars.standard;
    a = f.sw = d.extend(c, {}, j, {
        name: "sw",
        englishName: kcb,
        nativeName: kcb,
        language: "sw",
        numberFormat: {
            currency: {
                symbol: Eb
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [lcb, mcb, "Jumanne", ncb, ocb, "Ijumaa", pcb],
                    namesAbbr: ["Jumap.", CE, "Juman.", CE, "Alh.", "Iju.", "Jumam."],
                    namesShort: [Uk, md, Ze, md, qd, oe, ag]
                },
                months: {
                    names: [rr, sr, "Machi", "Aprili", Jg, xm, xq, "Agosti", qcb, "Oktoba", "Novemba", "Decemba", b],
                    namesAbbr: [ne, ng, wq, We, Jg, gf, dg, "Ago", Wl, Bd, Dg, "Dec", b]
                }
            })
        }
    }, f.sw);
    a.calendar = a.calendars.standard;
    a = f.tk = d.extend(c, {}, j, {
        name: "tk",
        englishName: "Turkmen",
        nativeName: "türkmençe",
        language: "tk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "m."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Duşenbe", "Sişenbe", rcb, scb, "Anna", "Şenbe", tcb],
                    namesAbbr: ["Db", "Sb", "Çb", "Pb", pC, "Şb", "Ýb"],
                    namesShort: [un, Eb, Xp, Uk, qd, Zp, "Ý"]
                },
                months: {
                    names: ["Ýanwar", "Fewral", zo, Iw, DE, EE, FE, "Awgust", ucb, "Oktýabr", "Noýabr", Jw, b],
                    namesAbbr: ["Ýan", "Few", zo, We, DE, EE, FE, "Awg", Wn, Bd, "Not", aq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: vcb,
                    t: B,
                    T: z,
                    f: wcb,
                    F: xcb,
                    Y: ycb
                }
            })
        }
    }, f.tk);
    a.calendar = a.calendars.standard;
    a = f.uz = d.extend(c, {}, j, {
        name: "uz",
        englishName: "Uzbek",
        nativeName: "U'zbek",
        language: "uz",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                decimals: 0,
                ",": n,
                ".": g,
                symbol: lN
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [mN, nN, oN, pN, qN, rN, sN],
                    namesAbbr: [tN, uN, vN, wN, xN, "jm.", "sh."],
                    namesShort: ["ya", pe, bg, Hw, Yk, "j", "sh"]
                },
                months: {
                    names: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b],
                    namesAbbr: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: yN,
                    D: zN,
                    t: J,
                    T: I,
                    f: AN,
                    F: BN,
                    M: Ow,
                    Y: w
                }
            })
        }
    }, f.uz);
    a.calendar = a.calendars.standard;
    a = f.tt = d.extend(c, {}, j, {
        name: "tt",
        englishName: "Tatar",
        nativeName: "Татар",
        language: "tt",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Cs
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Якшәмбе", GE, "Сишәмбе", zcb, Acb, "Җомга", "Шимбә"],
                    namesAbbr: ["Якш", "Дүш", "Сиш", "Чәрш", "Пәнҗ", "Җом", "Шим"],
                    namesShort: ["Я", "Д", "С", Pt, "П", "Җ", Qt]
                },
                months: {
                    names: ["Гыйнвар", Ds, om, Es, Id, Ep, Fp, pm, Fs, Gs, Hs, Is, b],
                    namesAbbr: ["Гыйн.", "Фев.", "Мар.", "Апр.", Id, Ep, Fp, "Авг.", "Сен.", "Окт.", "Нояб.", "Дек.", b]
                },
                monthsGenitive: {
                    names: [Bcb, Ccb, "Мартның", Dcb, HE, IE, JE, Ecb, Fcb, Gcb, Hcb, Icb, b],
                    namesAbbr: [Jcb, Kcb, Lcb, Mcb, HE, IE, JE, Ncb, Ocb, Pcb, Qcb, Rcb, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.tt);
    a.calendar = a.calendars.standard;
    a = f.bn = d.extend(c, {}, j, {
        name: KE,
        englishName: "Bengali",
        nativeName: "বাংলা",
        language: KE,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [Jd, nd],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "টা"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                ":": i,
                firstDay: 1,
                days: {
                    names: [CN, DN, EN, FN, GN, HN, IN],
                    namesAbbr: [JN, Pw, Qw, Rw, KN, Sw, Tw],
                    namesShort: ["র", "স", "ম", Rt, Rt, Dq, Dq]
                },
                months: {
                    names: [LN, MN, jo, ko, lo, mo, no, NN, ON, Uw, PN, QN, b],
                    namesAbbr: [RN, SN, jo, ko, lo, mo, no, "আগ.", TN, UN, VN, WN, b]
                },
                AM: [Uo, Uo, Uo],
                PM: [Vo, Vo, Vo],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: Vw,
                    T: Ww,
                    f: Xw,
                    F: Yw,
                    M: o
                }
            })
        }
    }, f.bn);
    a.calendar = a.calendars.standard;
    a = f.pa = d.extend(c, {}, j, {
        name: Zw,
        englishName: "Punjabi",
        nativeName: "ਪੰਜਾਬੀ",
        language: Zw,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ਰੁ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", Scb, Tcb],
                    namesAbbr: ["ਐਤ.", "ਸੋਮ.", "ਮੰਗਲ.", "ਬੁੱਧ.", "ਵੀਰ.", "ਸ਼ੁਕਰ.", "ਸ਼ਨਿੱਚਰ."],
                    namesShort: ["ਐ", "ਸ", "ਮ", "ਬ", "ਵ", "ਸ਼", "ਸ਼"]
                },
                months: {
                    names: [LE, ME, NE, OE, PE, QE, RE, SE, TE, UE, VE, WE, b],
                    namesAbbr: [LE, ME, NE, OE, PE, QE, RE, SE, TE, UE, VE, WE, b]
                },
                AM: [St, St, St],
                PM: [Tt, Tt, Tt],
                patterns: {
                    d: Pl,
                    D: ft,
                    t: XE,
                    T: YE,
                    f: Ucb,
                    F: Vcb,
                    M: o
                }
            })
        }
    }, f.pa);
    a.calendar = a.calendars.standard;
    a = f.gu = d.extend(c, {}, j, {
        name: "gu",
        englishName: "Gujarati",
        nativeName: "ગુજરાતી",
        language: "gu",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "રૂ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", Wcb, "શનિવાર"],
                    namesAbbr: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
                    namesShort: ["ર", "સ", "મ", "બ", "ગ", "શ", "શ"]
                },
                months: {
                    names: [Xcb, Ycb, ZE, aF, bF, cF, dF, eF, Zcb, "ઑક્ટ્બર", "નવેમ્બર", adb, b],
                    namesAbbr: ["જાન્યુ", "ફેબ્રુ", ZE, aF, bF, cF, dF, eF, "સપ્ટે", "ઑક્ટો", "નવે", "ડિસે", b]
                },
                AM: [Ut, Ut, Ut],
                PM: [Vt, Vt, Vt],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f.gu);
    a.calendar = a.calendars.standard;
    a = f.or = d.extend(c, {}, j, {
        name: Mw,
        englishName: "Oriya",
        nativeName: "ଓଡ଼ିଆ",
        language: Mw,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ଟ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: ["ରବିବାର", "ସୋମବାର", bdb, "ବୁଧବାର", "ଗୁରୁବାର", cdb, "ଶନିବାର"],
                    namesAbbr: ["ରବି.", "ସୋମ.", "ମଙ୍ଗଳ.", "ବୁଧ.", "ଗୁରୁ.", "ଶୁକ୍ର.", "ଶନି."],
                    namesShort: ["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"]
                },
                months: {
                    names: [fF, gF, hF, iF, jF, kF, lF, mF, nF, oF, pF, qF, b],
                    namesAbbr: [fF, gF, hF, iF, jF, kF, lF, mF, nF, oF, pF, qF, b]
                },
                eras: [{
                    name: ddb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f.or);
    a.calendar = a.calendars.standard;
    a = f.ta = d.extend(c, {}, j, {
        name: ax,
        englishName: "Tamil",
        nativeName: "தமிழ்",
        language: ax,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ரூ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [edb, fdb, gdb, hdb, idb, jdb, kdb],
                    namesAbbr: ["ஞாயிறு", "திங்கள்", ldb, "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
                    namesShort: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"]
                },
                months: {
                    names: [rF, sF, tF, uF, vF, wF, xF, yF, zF, AF, BF, CF, b],
                    namesAbbr: [rF, sF, tF, uF, vF, wF, xF, yF, zF, AF, BF, CF, b]
                },
                AM: [Wt, Wt, Wt],
                PM: [Xt, Xt, Xt],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.ta);
    a.calendar = a.calendars.standard;
    a = f.te = d.extend(c, {}, j, {
        name: "te",
        englishName: "Telugu",
        nativeName: "తెలుగు",
        language: "te",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "రూ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ఆదివారం", "సోమవారం", mdb, "బుధవారం", ndb, odb, "శనివారం"],
                    namesAbbr: ["ఆది.", "సోమ.", "మంగళ.", "బుధ.", "గురు.", "శుక్ర.", "శని."],
                    namesShort: ["ఆ", "సో", "మం", "బు", "గు", "శు", "శ"]
                },
                months: {
                    names: [DF, EF, FF, GF, HF, IF, JF, KF, LF, MF, NF, OF, b],
                    namesAbbr: [DF, EF, FF, GF, HF, IF, JF, KF, LF, MF, NF, OF, b]
                },
                AM: [Yt, Yt, Yt],
                PM: [Zt, Zt, Zt],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f.te);
    a.calendar = a.calendars.standard;
    a = f.kn = d.extend(c, {}, j, {
        name: ww,
        englishName: "Kannada",
        nativeName: "ಕನ್ನಡ",
        language: ww,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ರೂ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", pdb, "ಶನಿವಾರ"],
                    namesAbbr: ["ಭಾನು.", "ಸೋಮ.", "ಮಂಗಳ.", "ಬುಧ.", "ಗುರು.", "ಶುಕ್ರ.", "ಶನಿ."],
                    namesShort: ["ರ", "ಸ", "ಮ", "ಬ", "ಗ", "ಶ", "ಶ"]
                },
                months: {
                    names: [PF, QF, RF, SF, TF, UF, VF, WF, XF, YF, ZF, aG, b],
                    namesAbbr: [PF, QF, RF, SF, TF, UF, VF, WF, XF, YF, ZF, aG, b]
                },
                AM: [au, au, au],
                PM: [bu, bu, bu],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f.kn);
    a.calendar = a.calendars.standard;
    a = f.ml = d.extend(c, {}, j, {
        name: "ml",
        englishName: "Malayalam",
        nativeName: "മലയാളം",
        language: "ml",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [Jd, nd],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ക"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                ":": i,
                firstDay: 1,
                days: {
                    names: [qdb, rdb, sdb, tdb, udb, vdb, wdb],
                    namesAbbr: ["ഞായർ.", "തിങ്കൾ.", "ചൊവ്വ.", "ബുധൻ.", "വ്യാഴം.", "വെള്ളി.", "ശനി."],
                    namesShort: ["ഞ", "ത", "ച", "ബ", "വ", "വെ", "ശ"]
                },
                months: {
                    names: [bG, cG, dG, eG, fG, gG, hG, iG, jG, kG, lG, mG, b],
                    namesAbbr: [bG, cG, dG, eG, fG, gG, hG, iG, jG, kG, lG, mG, b]
                },
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: Vw,
                    T: Ww,
                    f: Xw,
                    F: Yw,
                    M: o
                }
            })
        }
    }, f.ml);
    a.calendar = a.calendars.standard;
    a = f.as = d.extend(c, {}, j, {
        name: Lw,
        englishName: "Assamese",
        nativeName: "অসমীয়া",
        language: Lw,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, yg],
                groupSizes: [3, 2],
                symbol: "ট"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["সোমবাৰ", xdb, "বুধবাৰ", ydb, zdb, "শনিবাৰ", "ৰবিবাৰ"],
                    namesAbbr: [Pw, Qw, Rw, "বৃহ.", Sw, Tw, "ৰবি."],
                    namesShort: ["সো", "ম", "বু", "বৃ", "শু", Dq, "র"]
                },
                months: {
                    names: [Adb, Bdb, jo, ko, lo, mo, no, nG, Cdb, Uw, "নবেম্বর", Ddb, b],
                    namesAbbr: ["জানু", "ফেব্রু", jo, ko, lo, mo, no, nG, "চেপ্টে", "অক্টো", "নবে", "ডিচে", b]
                },
                AM: [cu, cu, cu],
                PM: [du, du, du],
                eras: [{
                    name: Edb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Hd,
                    D: Fdb,
                    t: uo,
                    T: or,
                    f: Gdb,
                    F: Hdb,
                    M: o,
                    Y: "MMMM,yy"
                }
            })
        }
    }, f.as);
    a.calendar = a.calendars.standard;
    a = f.mr = d.extend(c, {}, j, {
        name: "mr",
        englishName: "Marathi",
        nativeName: "मराठी",
        language: "mr",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [FD, Et, "मंगळवार", eq, GD, Ft, Gt],
                    namesAbbr: [HD, Ht, oG, It, ID, JD, KD],
                    namesShort: [Jt, Zn, ao, bo, Kt, Hl, Hl]
                },
                months: {
                    names: [eu, fu, sg, Eq, Um, tg, Fq, Gq, gu, hu, Idb, iu, b],
                    namesAbbr: ["जाने.", "फेब्रु.", sg, Eq, Um, tg, Fq, Gq, "सप्टें.", "ऑक्टो.", Jdb, "डिसें.", b]
                },
                AM: [Vm, Vm, Vm],
                PM: [Wm, Wm, Wm],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f.mr);
    a.calendar = a.calendars.standard;
    a = f.sa = d.extend(c, {}, j, {
        name: ic,
        englishName: "Sanskrit",
        nativeName: "संस्कृत",
        language: ic,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [pG, qG, rG, sG, tG, uG, vG],
                    namesAbbr: [pG, qG, rG, sG, tG, uG, vG],
                    namesShort: [Jt, Zn, ao, bo, Kt, Hl, Hl]
                },
                months: {
                    names: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b],
                    namesAbbr: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b]
                },
                AM: [Rm, Rm, Rm],
                PM: [Sm, Sm, Sm],
                patterns: {
                    d: Hd,
                    D: ft,
                    t: J,
                    T: I,
                    f: oB,
                    F: pB,
                    M: o
                }
            })
        }
    }, f.sa);
    a.calendar = a.calendars.standard;
    a = f.mn = d.extend(c, {}, j, {
        name: "mn",
        englishName: "Mongolian",
        nativeName: Kdb,
        language: "mn",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "₮"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Ням", XN, YN, ZN, aO, bO, cO],
                    namesAbbr: [ju, ku, lu, mu, nu, ou, pu],
                    namesShort: [ju, ku, lu, mu, nu, ou, pu]
                },
                months: {
                    names: [dO, eO, fO, gO, hO, iO, jO, kO, lO, mO, nO, oO, b],
                    namesAbbr: [oe, qu, ru, su, Xl, tu, uu, vu, wu, xu, yu, zu, b]
                },
                monthsGenitive: {
                    names: [pO, qO, rO, sO, tO, uO, vO, wO, xO, yO, zO, AO, b],
                    namesAbbr: [oe, qu, ru, su, Xl, tu, uu, vu, wu, xu, yu, zu, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: BO,
                    D: CO,
                    t: B,
                    T: z,
                    f: DO,
                    F: EO,
                    M: Rb,
                    Y: FO
                }
            })
        }
    }, f.mn);
    a.calendar = a.calendars.standard;
    a = f.bo = d.extend(c, {}, j, {
        name: "bo",
        englishName: "Tibetan",
        nativeName: "བོད་ཡིག",
        language: "bo",
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [jc, Pb],
                groupSizes: [3, 0],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Ldb, Mdb, Ndb, Odb, Pdb, Qdb, Rdb],
                    namesAbbr: ["ཉི་མ།", "ཟླ་བ།", Sdb, "ལྷག་པ།", "ཕུར་བུ།", "པ་སངས།", "སྤེན་པ།"],
                    namesShort: ["༧", "༡", "༢", "༣", "༤", "༥", "༦"]
                },
                months: {
                    names: [Tdb, Udb, Vdb, Wdb, Xdb, Ydb, Zdb, aeb, beb, ceb, deb, eeb, b],
                    namesAbbr: ["ཟླ་ ༡", "ཟླ་ ༢", "ཟླ་ ༣", "ཟླ་ ༤", "ཟླ་ ༥", "ཟླ་ ༦", "ཟླ་ ༧", "ཟླ་ ༨", "ཟླ་ ༩", "ཟླ་ ༡༠", "ཟླ་ ༡༡", "ཟླ་ ༡༢", b]
                },
                AM: [Au, Au, Au],
                PM: [Bu, Bu, Bu],
                eras: [{
                    name: "སྤྱི་ལོ",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: feb,
                    t: J,
                    T: I,
                    f: geb,
                    F: heb,
                    M: ieb,
                    Y: "yyyy.M"
                }
            })
        }
    }, f.bo);
    a.calendar = a.calendars.standard;
    a = f.cy = d.extend(c, {}, j, {
        name: bx,
        englishName: "Welsh",
        nativeName: "Cymraeg",
        language: bx,
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [ud, Pb],
                symbol: "£"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [jeb, keb, leb, meb, neb, oeb, peb],
                    namesAbbr: [Hq, "Llun", wG, "Mer", "Iau", "Gwe", "Sad"],
                    namesShort: [Cu, "Ll", Rn, Du, "Ia", xG, ff]
                },
                months: {
                    names: ["Ionawr", qeb, "Mawrth", "Ebrill", me, "Mehefin", reb, "Awst", "Medi", "Hydref", seb, "Rhagfyr", b],
                    namesAbbr: ["Ion", "Chwe", wG, "Ebr", me, "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag", b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: G,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.cy);
    a.calendar = a.calendars.standard;
    a = f.km = d.extend(c, {}, j, {
        name: "km",
        englishName: "Khmer",
        nativeName: "ខ្មែរ",
        language: "km",
        numberFormat: {
            pattern: [vw],
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [Nl, yg],
                symbol: "៛"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [teb, ueb, veb, "ថ្ងៃពុធ", web, xeb, yeb],
                    namesAbbr: ["អាទិ.", "ច.", "អ.", yG, "ព្រហ.", "សុ.", "ស."],
                    namesShort: ["អា", "ច", "អ", yG, "ព្", "សុ", "ស"]
                },
                months: {
                    names: ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", zeb, "ធ្នូ", b],
                    namesAbbr: ["១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩", "១០", "១១", "១២", b]
                },
                AM: [Xm, Xm, Xm],
                PM: [Ym, Ym, Ym],
                eras: [{
                    name: "មុនគ.ស.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: og,
                    D: Hf,
                    t: Eu,
                    T: I,
                    f: Aeb,
                    F: wo,
                    M: Beb,
                    Y: Ceb
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [Xm, Xm, Xm],
                PM: [Ym, Ym, Ym],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: Eu,
                    T: I,
                    f: Deb,
                    F: Eeb
                }
            })
        }
    }, f.km);
    a.calendar = a.calendars.standard;
    a = f.lo = d.extend(c, {}, j, {
        name: "lo",
        englishName: "Lao",
        nativeName: "ລາວ",
        language: "lo",
        numberFormat: {
            pattern: ["(n)"],
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            },
            currency: {
                pattern: ["(n$)", yg],
                groupSizes: [3, 0],
                symbol: "₭"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Feb, "ວັນຈັນ", Geb, "ວັນພຸດ", Heb, "ວັນສຸກ", "ວັນເສົາ"],
                    namesAbbr: ["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"],
                    namesShort: ["ອ", "ຈ", "ອ", "ພ", "ພ", "ສ", "ເ"]
                },
                months: {
                    names: [zG, AG, BG, CG, DG, EG, FG, GG, HG, IG, JG, KG, b],
                    namesAbbr: [zG, AG, BG, CG, DG, EG, FG, GG, HG, IG, JG, KG, b]
                },
                AM: [Fu, Fu, Fu],
                PM: [Gu, Gu, Gu],
                patterns: {
                    d: G,
                    D: Qb,
                    t: Eu,
                    T: I,
                    f: Ieb,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.lo);
    a.calendar = a.calendars.standard;
    a = f.gl = d.extend(c, {}, j, {
        name: "gl",
        englishName: "Galician",
        nativeName: "galego",
        language: "gl",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Od, LG, Xe, Jeb, "xoves", "venres", Pd],
                    namesAbbr: [td, LG, U, "mér", "xov", iw, Qd],
                    namesShort: [id, Bb, Z, "mé", "xo", lc, jf]
                },
                months: {
                    names: ["xaneiro", Keb, Rd, sd, As, "xuño", "xullo", Dd, fA, gA, hA, Leb, b],
                    namesAbbr: ["xan", ub, U, Gd, As, "xuñ", "xull", Ed, po, iA, vb, oc, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f.gl);
    a.calendar = a.calendars.standard;
    a = f.kok = d.extend(c, {}, j, {
        name: "kok",
        englishName: "Konkani",
        nativeName: "कोंकणी",
        language: "kok",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["आयतार", "सोमार", "मंगळार", eq, Meb, "सुक्रार", "शेनवार"],
                    namesAbbr: ["आय.", Ht, oG, It, "बिरे.", "सुक्र.", "शेन."],
                    namesShort: ["आ", Zn, ao, bo, bo, Zn, Hl]
                },
                months: {
                    names: [eu, fu, sg, Eq, Um, tg, Fq, Gq, gu, hu, MG, iu, b],
                    namesAbbr: [eu, fu, sg, Eq, Um, tg, Fq, Gq, gu, hu, MG, iu, b]
                },
                AM: [Vm, Vm, Vm],
                PM: [Wm, Wm, Wm],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f.kok);
    a.calendar = a.calendars.standard;
    a = f.syr = d.extend(c, {}, j, {
        name: "syr",
        englishName: "Syriac",
        nativeName: "ܣܘܪܝܝܐ",
        language: "syr",
        isRTL: c,
        numberFormat: {
            currency: {
                pattern: [Ud, F],
                symbol: GO
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: ["ܚܕ ܒܫܒܐ", Neb, Oeb, Peb, Qeb, "ܥܪܘܒܬܐ", "ܫܒܬܐ"],
                    namesAbbr: ["܏ܐ ܏ܒܫ", "܏ܒ ܏ܒܫ", "܏ܓ ܏ܒܫ", "܏ܕ ܏ܒܫ", "܏ܗ ܏ܒܫ", "܏ܥܪܘܒ", "܏ܫܒ"],
                    namesShort: ["ܐ", "ܒ", "ܓ", "ܕ", "ܗ", "ܥ", "ܫ"]
                },
                months: {
                    names: [Reb, NG, OG, PG, QG, RG, SG, TG, UG, Seb, Teb, Ueb, b],
                    namesAbbr: ["܏ܟܢ ܏ܒ", NG, OG, PG, QG, RG, SG, TG, UG, "܏ܬܫ ܏ܐ", "܏ܬܫ ܏ܒ", "܏ܟܢ ܏ܐ", b]
                },
                AM: [Hu, Hu, Hu],
                PM: [Iu, Iu, Iu],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            })
        }
    }, f.syr);
    a.calendar = a.calendars.standard;
    a = f.si = d.extend(c, {}, j, {
        name: cx,
        englishName: "Sinhala",
        nativeName: "සිංහල",
        language: cx,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [sm, F],
                symbol: "රු."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [VG, WG, Veb, "බදාදා", Web, Xeb, Yeb],
                    namesAbbr: [VG, WG, "කුජදා", "බුදදා", "ගුරුදා", "කිවිදා", "ශනිදා"],
                    namesShort: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"]
                },
                months: {
                    names: ["ජනවාරි", Zeb, "මාර්තු", afb, "මැයි", "ජූනි", "ජූලි", bfb, cfb, dfb, efb, ffb, b],
                    namesAbbr: ["ජන.", "පෙබ.", "මාර්තු.", gfb, "මැයි.", "ජූනි.", "ජූලි.", "අගෝ.", "සැප්.", "ඔක්.", "නොවැ.", "දෙසැ.", b]
                },
                AM: [Ju, Ju, Ju],
                PM: [Ku, Ku, Ku],
                eras: [{
                    name: hfb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: og,
                    D: ifb,
                    f: jfb,
                    F: kfb,
                    Y: lfb
                }
            })
        }
    }, f.si);
    a.calendar = a.calendars.standard;
    a = f.iu = d.extend(c, {}, j, {
        name: "iu",
        englishName: HO,
        nativeName: HO,
        language: "iu",
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [IO, JO, KO, LO, MO, NO, OO],
                    namesAbbr: ["Nat", "Nag", "Aip", "Pi", "Sit", Lu, "Siv"],
                    namesShort: [Ze, Ze, qd, Uk, Eb, md, Eb]
                },
                months: {
                    names: [PO, QO, RO, SO, me, TO, xq, UO, VO, WO, XO, YO, b],
                    namesAbbr: [ne, "Viv", "Mas", "Ipu", me, gf, dg, "Agi", "Sii", "Uut", "Nuv", "Tis", b]
                },
                patterns: {
                    d: Br,
                    D: ZO,
                    f: aP,
                    F: bP
                }
            })
        }
    }, f.iu);
    a.calendar = a.calendars.standard;
    a = f.am = d.extend(c, {}, j, {
        name: "am",
        englishName: "Amharic",
        nativeName: "አማርኛ",
        language: "am",
        numberFormat: {
            decimals: 1,
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                decimals: 1,
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [ud, Pb],
                groupSizes: [3, 0],
                symbol: "ETB"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [XG, YG, "ማክሰኞ", ZG, aH, bH, cH],
                    namesAbbr: [XG, YG, "ማክሰ", ZG, aH, bH, cH],
                    namesShort: ["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"]
                },
                months: {
                    names: ["ጃንዩወሪ", "ፌብሩወሪ", dH, "ኤፕረል", eH, fH, gH, "ኦገስት", "ሴፕቴምበር", "ኦክተውበር", "ኖቬምበር", "ዲሴምበር", b],
                    namesAbbr: ["ጃንዩ", "ፌብሩ", dH, "ኤፕረ", eH, fH, gH, "ኦገስ", "ሴፕቴ", "ኦክተ", "ኖቬም", "ዲሴም", b]
                },
                AM: [Mu, Mu, Mu],
                PM: [Nu, Nu, Nu],
                eras: [{
                    name: mfb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: nfb,
                    f: ofb,
                    F: pfb,
                    M: qfb,
                    Y: w
                }
            })
        }
    }, f.am);
    a.calendar = a.calendars.standard;
    a = f.tzm = d.extend(c, {}, j, {
        name: "tzm",
        englishName: cP,
        nativeName: cP,
        language: "tzm",
        numberFormat: {
            pattern: [qe],
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                symbol: "DZD"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 6,
                days: {
                    names: [dP, eP, fP, To, gP, Ou, hP],
                    namesAbbr: ["Ace", "Ari", yw, "Aha", "Amh", Ou, "Sed"],
                    namesShort: ["Ac", Pu, Pu, "Ah", "Am", Qu, Qu]
                },
                months: {
                    names: [iP, jP, kP, lP, Ru, mP, nP, oP, pP, qP, rP, sP, b],
                    namesAbbr: ["Yen", "Fur", "Mag", "Yeb", Vk, Su, Tu, "Ghu", "Cut", "Ktu", "Wam", "Duj", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: cf,
                    t: B,
                    T: z,
                    f: Uu,
                    F: Vu,
                    M: o
                }
            })
        }
    }, f.tzm);
    a.calendar = a.calendars.standard;
    a = f.ne = d.extend(c, {}, j, {
        name: ke,
        englishName: "Nepali",
        nativeName: "नेपाली",
        language: ke,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [ud, Pb],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["आइतवार", Et, rfb, eq, "बिहीवार", Ft, Gt],
                    namesAbbr: ["आइत", "सोम", "मङ्गल", "बुध", "बिही", "शुक्र", "शनि"],
                    namesShort: ["आ", "सो", ao, "बु", "बि", "शु", Hl]
                },
                months: {
                    names: [co, sfb, sg, hH, Um, tg, Qm, eo, tfb, "अक्टोबर", ufb, vfb, b],
                    namesAbbr: ["जन", "फेब", sg, hH, Um, tg, Qm, "अग", "सेप्ट", "अक्ट", "नोभ", "डिस", b]
                },
                AM: [Wu, Wu, Wu],
                PM: [Xu, Xu, Xu],
                eras: [{
                    name: "a.d.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    Y: iH
                }
            })
        }
    }, f.ne);
    a.calendar = a.calendars.standard;
    a = f.fy = d.extend(c, {}, j, {
        name: "fy",
        englishName: "Frisian",
        nativeName: "Frysk",
        language: "fy",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["Snein", "Moandei", "Tiisdei", wfb, xfb, "Freed", "Sneon"],
                    namesAbbr: [jH, rl, "Ti", xD, "To", Cg, jH],
                    namesShort: [Eb, ag, md, Yu, md, Iq, Eb]
                },
                months: {
                    names: [yfb, zfb, ow, Oe, kH, Xr, "july", pw, Afb, pf, Bfb, Cfb, b],
                    namesAbbr: ["jann", "febr", qw, Ub, kH, wb, sb, Ve, gC, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Qz,
                    D: Gf,
                    t: B,
                    T: z,
                    f: rw,
                    F: sw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.fy);
    a.calendar = a.calendars.standard;
    a = f.ps = d.extend(c, {}, j, {
        name: "ps",
        englishName: "Pashto",
        nativeName: "پښتو",
        language: "ps",
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            ",": "،",
            ".": g,
            percent: {
                pattern: [lH, nd],
                ",": "،",
                ".": g
            },
            currency: {
                pattern: [Ud, Pb],
                ",": "٬",
                ".": "٫",
                symbol: "؋"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    f: gt,
                    F: ht,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [Jq, Lm, Kq, mH, Mm, wl, Nm],
                    namesAbbr: [Jq, Lm, Kq, mH, Mm, wl, Nm],
                    namesShort: [tt, Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [Lq, Mq, Nq, Oq, Pq, Dfb, Qq, Rq, Sq, Tq, nH, Uq, b],
                    namesAbbr: [Lq, Mq, Nq, Oq, Pq, "چنګا ښ", Qq, Rq, Sq, Tq, nH, Uq, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: oH,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: pH,
                    f: qH,
                    F: rH,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.ps);
    a.calendar = a.calendars.standard;
    a = f.fil = d.extend(c, {}, j, {
        name: "fil",
        englishName: Efb,
        nativeName: Efb,
        language: "fil",
        numberFormat: {
            currency: {
                symbol: "PhP"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["Linggo", "Lunes", "Martes", Ffb, "Huebes", "Biernes", "Sabado"],
                    namesAbbr: ["Lin", Zu, Se, "Mier", "Hueb", "Bier", "Saba"],
                    namesShort: [yc, yc, ag, ag, Nn, Pm, Eb]
                },
                months: {
                    names: ["Enero", "Pebrero", "Marso", tP, sH, "Hunyo", "Hulyo", uP, Gfb, "Oktubre", Hfb, Ifb, b],
                    namesAbbr: [yA, "Peb", Se, dx, sH, "Hun", "Hul", "Agos", Nw, Bd, "Nob", yq, b]
                },
                eras: [{
                    name: Jfb,
                    start: e,
                    offset: 0
                }]
            })
        }
    }, f.fil);
    a.calendar = a.calendars.standard;
    a = f.dv = d.extend(c, {}, j, {
        name: Tv,
        englishName: "Divehi",
        nativeName: "ދިވެހިބަސް",
        language: Tv,
        isRTL: c,
        numberFormat: {
            currency: {
                pattern: ["n $-", E],
                symbol: "ރ."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Vd,
                days: {
                    names: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesAbbr: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesShort: [tH, uH, vH, cr, cr, wH, xH]
                },
                months: {
                    names: [yH, zH, AH, BH, CH, DH, EH, FH, GH, HH, IH, JH, b],
                    namesAbbr: [yH, zH, AH, BH, CH, DH, EH, FH, GH, HH, IH, JH, b]
                },
                AM: [Zm, Zm, Zm],
                PM: [an, an, an],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: J,
                    T: I,
                    f: Kfb,
                    F: Lfb,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                days: {
                    names: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesAbbr: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesShort: [tH, uH, vH, cr, cr, wH, xH]
                },
                months: {
                    names: [KH, LH, MH, NH, OH, PH, QH, RH, SH, TH, UH, VH, b],
                    namesAbbr: [KH, LH, MH, NH, OH, PH, QH, RH, SH, TH, UH, VH, b]
                },
                AM: [Zm, Zm, Zm],
                PM: [an, an, an],
                eras: [{
                    name: "މީލާދީ",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Vb,
                    D: Mfb,
                    t: J,
                    T: I,
                    f: Nfb,
                    F: Ofb,
                    Y: Pfb
                }
            })
        }
    }, f.dv);
    a.calendar = a.calendars.standard;
    a = f.ha = d.extend(c, {}, j, {
        name: "ha",
        englishName: vP,
        nativeName: vP,
        language: "ha",
        numberFormat: {
            currency: {
                pattern: [jc, F],
                symbol: Ze
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [wP, xP, yP, zP, AP, BP, CP],
                    namesAbbr: ["Lah", "Lit", Lu, "Lar", "Alh", "Jum", "Asa"],
                    namesShort: [yc, yc, md, yc, qd, Cm, qd]
                },
                months: {
                    names: [DP, EP, FP, GP, Ru, HP, IP, JP, KP, LP, MP, NP, b],
                    namesAbbr: [ne, ng, Se, "Afr", Vk, Su, Tu, "Agu", xr, Bd, "Nuw", yq, b]
                },
                AM: [OP, PP, QP],
                PM: [RP, SP, TP],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf
                }
            })
        }
    }, f.ha);
    a.calendar = a.calendars.standard;
    a = f.yo = d.extend(c, {}, j, {
        name: "yo",
        englishName: "Yoruba",
        nativeName: "Yoruba",
        language: "yo",
        numberFormat: {
            currency: {
                pattern: [jc, F],
                symbol: Ze
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [WH, dr, XH, YH, ZH, er, aI],
                    namesAbbr: [bI, dr, cI, fr, fr, er, dI],
                    namesShort: [qd, qd, oe, gr, gr, Sp, qd]
                },
                months: {
                    names: [Qfb, Rfb, Sfb, Tfb, Ufb, Vfb, Wfb, Xfb, Yfb, Zfb, agb, bgb, b],
                    namesAbbr: ["kin.", av, "ket.", eI, "kar.", "kef.", av, av, "kes.", "kew.", "kok.", eI, b]
                },
                AM: ["Owuro", "owuro", "OWURO"],
                PM: ["Ale", "ale", "ALE"],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf
                }
            })
        }
    }, f.yo);
    a.calendar = a.calendars.standard;
    a = f.quz = d.extend(c, {}, j, {
        name: ex,
        englishName: "Quechua",
        nativeName: "runasimi",
        language: ex,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g,
                symbol: "$b"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [fI, gI, hI, iI, jI, kI, lI],
                    namesAbbr: [mI, nI, oI, pI, qI, rI, sI],
                    namesShort: [pe, oo, Cr, cg, "h", gm, oo]
                },
                months: {
                    names: [tI, uI, vI, wI, xI, yI, zI, AI, BI, CI, DI, EI, b],
                    namesAbbr: [FI, GI, HI, II, JI, KI, LI, MI, NI, bv, OI, PI, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    Y: jd
                }
            })
        }
    }, f.quz);
    a.calendar = a.calendars.standard;
    a = f.nso = d.extend(c, {}, j, {
        name: "nso",
        englishName: cgb,
        nativeName: cgb,
        language: "nso",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [dgb, egb, mD, nD, oD, fgb, ggb],
                    namesAbbr: ["Lam", "Moš", "Lbb", "Lbr", "Lbn", "Lbh", "Mok"],
                    namesShort: [yc, ag, yc, yc, yc, yc, ag]
                },
                months: {
                    names: [hgb, "Hlakola", "Mopitlo", rD, igb, jgb, "Phuphu", "Phato", "Lewedi", kgb, lgb, mgb, b],
                    namesAbbr: ["Pher", "Hlak", "Mop", "Mor", "Mos", "Ngwat", "Phup", "Phat", "Lew", "Dip", "Dib", "Man", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.nso);
    a.calendar = a.calendars.standard;
    a = f.ba = d.extend(c, {}, j, {
        name: "ba",
        englishName: "Bashkir",
        nativeName: "Башҡорт",
        language: "ba",
        numberFormat: {
            ",": n,
            ".": g,
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                groupSizes: [3, 0],
                ",": n,
                ".": g,
                symbol: "һ."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [ngb, GE, "Шишәмбе", ogb, "Кесаҙна", "Йома", "Шәмбе"],
                    namesAbbr: [QI, fm, Bq, Cq, RI, SI, TI],
                    namesShort: [QI, fm, Bq, Cq, RI, SI, TI]
                },
                months: {
                    names: ["ғинуар", "февраль", vg, "апрель", Sl, "июнь", "июль", Pk, pgb, "октябрь", "ноябрь", "декабрь", b],
                    namesAbbr: ["ғин", Gp, Ol, Qk, Sl, Hp, Ip, Rk, Js, Sk, Ks, Bn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: qgb,
                    t: B,
                    T: z,
                    f: rgb,
                    F: sgb,
                    Y: w
                }
            })
        }
    }, f.ba);
    a.calendar = a.calendars.standard;
    a = f.lb = d.extend(c, {}, j, {
        name: "lb",
        englishName: "Luxembourgish",
        nativeName: "Lëtzebuergesch",
        language: "lb",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Sonndeg", "Méindeg", tgb, ugb, vgb, "Freideg", wgb],
                    namesAbbr: [wD, "Méi", "Dën", "Mët", "Don", "Fre", UI],
                    namesShort: [mg, "Mé", "Dë", xA, Bg, Cg, ff]
                },
                months: {
                    names: [nr, gp, "Mäerz", "Abrëll", VI, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: [ne, ng, "Mäe", dx, VI, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: "n. Chr",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.lb);
    a.calendar = a.calendars.standard;
    a = f.kl = d.extend(c, {}, j, {
        name: "kl",
        englishName: "Greenlandic",
        nativeName: "kalaallisut",
        language: "kl",
        numberFormat: {
            ",": i,
            ".": g,
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 0],
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["sapaat", xgb, ygb, zgb, Agb, Bgb, Cgb],
                    namesAbbr: ["sap", "ata", U, "ping", "sis", "tal", "arf"],
                    namesShort: [ic, "at", Z, Kp, cx, ax, gg]
                },
                months: {
                    names: [wp, xp, "martsi", "apriili", "maaji", jg, kg, "aggusti", Dgb, Egb, Fgb, Ggb, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.kl);
    a.calendar = a.calendars.standard;
    a = f.ig = d.extend(c, {}, j, {
        name: Kw,
        englishName: "Igbo",
        nativeName: "Igbo",
        language: Kw,
        numberFormat: {
            currency: {
                pattern: [jc, F],
                symbol: Ze
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [WH, dr, XH, YH, ZH, er, aI],
                    namesAbbr: [bI, dr, cI, fr, fr, er, dI],
                    namesShort: [qd, qd, oe, gr, gr, Sp, qd]
                },
                months: {
                    names: [Hgb, Igb, Jgb, Kgb, Lgb, Mgb, Ngb, Ogb, Pgb, Qgb, Rgb, Sgb, b],
                    namesAbbr: ["mbu.", "ibu.", "ato.", "ano.", "ise", "isi", "asa", "asa.", "ito.", "iri.", "n'of.", "n'ib.", b]
                },
                AM: ["Ututu", "ututu", "UTUTU"],
                PM: ["Efifie", "efifie", "EFIFIE"],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf
                }
            })
        }
    }, f.ig);
    a.calendar = a.calendars.standard;
    a = f.ii = d.extend(c, {}, j, {
        name: "ii",
        englishName: "Yi",
        nativeName: "ꆈꌠꁱꂷ",
        language: "ii",
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["ꑭꆏꑍ", "ꆏꊂ꒔", "ꆏꊂꑍ", "ꆏꊂꌕ", "ꆏꊂꇖ", "ꆏꊂꉬ", "ꆏꊂꃘ"],
                    namesAbbr: ["ꑭꆏ", "ꆏ꒔", "ꆏꑍ", "ꆏꌕ", "ꆏꇖ", "ꆏꉬ", "ꆏꃘ"],
                    namesShort: ["ꆏ", "꒔", "ꑍ", "ꌕ", "ꇖ", "ꉬ", "ꃘ"]
                },
                months: {
                    names: [WI, XI, YI, ZI, aJ, bJ, cJ, dJ, eJ, fJ, gJ, hJ, b],
                    namesAbbr: [WI, XI, YI, ZI, aJ, bJ, cJ, dJ, eJ, fJ, gJ, hJ, b]
                },
                AM: [cv, cv, cv],
                PM: [dv, dv, dv],
                eras: [{
                    name: "ꇬꑼ",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: Tgb,
                    t: uo,
                    T: z,
                    f: Ugb,
                    F: Vgb,
                    M: Wgb,
                    Y: Xgb
                }
            })
        }
    }, f.ii);
    a.calendar = a.calendars.standard;
    a = f.arn = d.extend(c, {}, j, {
        name: "arn",
        englishName: Ygb,
        nativeName: Ygb,
        language: "arn",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Hd,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f.arn);
    a.calendar = a.calendars.standard;
    a = f.moh = d.extend(c, {}, j, {
        name: "moh",
        englishName: "Mohawk",
        nativeName: Zgb,
        language: "moh",
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [ahb, bhb, chb, "Soséhne", dhb, ehb, "Entákta"],
                    namesShort: [Eb, ag, md, Yu, md, Iq, Eb]
                },
                months: {
                    names: [fhb, "Enniska", ghb, hhb, ihb, jhb, khb, "Seskéha", lhb, mhb, nhb, ohb, b]
                }
            })
        }
    }, f.moh);
    a.calendar = a.calendars.standard;
    a = f.br = d.extend(c, {}, j, {
        name: "br",
        englishName: "Breton",
        nativeName: "brezhoneg",
        language: "br",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Hq, Zu, iJ, phb, jJ, "Gwener", "Sadorn"],
                    namesAbbr: [Hq, Zu, "Meu.", "Mer.", jJ, "Gwe.", "Sad."],
                    namesShort: [Cu, qE, "Mz", "Mc", "Ya", xG, ff]
                },
                months: {
                    names: ["Genver", qhb, iJ, "Ebrel", kJ, rhb, "Gouere", lJ, shb, ev, fv, "Kerzu", b],
                    namesAbbr: ["Gen.", "C'hwe.", "Meur.", "Ebr.", kJ, "Mezh.", "Goue.", lJ, "Gwen.", ev, fv, "Kzu", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: thb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.br);
    a.calendar = a.calendars.standard;
    a = f.ug = d.extend(c, {}, j, {
        name: "ug",
        englishName: "Uyghur",
        nativeName: "ئۇيغۇرچە",
        language: "ug",
        isRTL: c,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [uhb, "دۈشەنبە", vhb, whb, xhb, "جۈمە", "شەنبە"],
                    namesAbbr: ["يە", "دۈ", "سە", "چا", "پە", "جۈ", "شە"],
                    namesShort: ["ي", Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [mJ, nJ, oJ, pJ, qJ, rJ, sJ, tJ, uJ, vJ, wJ, xJ, b],
                    namesAbbr: [mJ, nJ, oJ, pJ, qJ, rJ, sJ, tJ, uJ, vJ, wJ, xJ, b]
                },
                AM: [gv, gv, gv],
                PM: [hv, hv, hv],
                eras: [{
                    name: "مىلادى",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: yhb,
                    D: zhb,
                    t: B,
                    T: z,
                    f: Ahb,
                    F: Bhb,
                    M: Chb,
                    Y: Dhb
                }
            })
        }
    }, f.ug);
    a.calendar = a.calendars.standard;
    a = f.mi = d.extend(c, {}, j, {
        name: Cd,
        englishName: "Maori",
        nativeName: "Reo Māori",
        language: Cd,
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [ud, Pb]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Rātapu", "Rāhina", "Rātū", "Rāapa", "Rāpare", "Rāmere", "Rāhoroi"],
                    namesAbbr: [yJ, zJ, AJ, "Apa", BJ, Du, CJ],
                    namesShort: [yJ, zJ, AJ, "Aa", BJ, Du, CJ]
                },
                months: {
                    names: [Ehb, Fhb, Ghb, Hhb, "Haratua", "Pipiri", Ihb, Jhb, "Mahuru", Khb, Lhb, "Hakihea", b],
                    namesAbbr: ["Kohi", "Hui", "Pou", "Pae", "Hara", "Pipi", "Hōngo", ev, "Mahu", "Nuku", "Rangi", "Haki", b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: G,
                    D: Mhb,
                    f: Nhb,
                    F: Ohb,
                    M: o,
                    Y: Phb
                }
            })
        }
    }, f.mi);
    a.calendar = a.calendars.standard;
    a = f.oc = d.extend(c, {}, j, {
        name: "oc",
        englishName: "Occitan",
        nativeName: "Occitan",
        language: "oc",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["dimenge", "diluns", "dimars", Qhb, "dijòus", Dx, Ex],
                    namesAbbr: [Ld, vd, kc, "mèc.", "jòu.", wd, DJ],
                    namesShort: [Uc, Bb, Z, "mè", "jò", lc, ic]
                },
                months: {
                    names: ["genier", "febrier", Wr, sd, nb, "junh", "julh", Gx, Hx, Nd, kd, Ix, b],
                    namesAbbr: [EJ, ip, kc, FJ, zp, GJ, HJ, IJ, JJ, od, Vc, us, b]
                },
                monthsGenitive: {
                    names: [Rhb, Shb, "de març", "d'abril", "de mai", "de junh", "de julh", "d'agost", Thb, Uhb, Vhb, Whb, b],
                    namesAbbr: [EJ, ip, kc, FJ, zp, GJ, HJ, IJ, JJ, od, Vc, us, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Xhb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Yhb,
                    t: J,
                    T: I,
                    f: Zhb,
                    F: aib,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.oc);
    a.calendar = a.calendars.standard;
    a = f.co = d.extend(c, {}, j, {
        name: "co",
        englishName: "Corsican",
        nativeName: "Corsu",
        language: "co",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [bib, pA, "marti", "mercuri", "ghjovi", "venderi", "sabbatu"],
                    namesAbbr: ["dum.", vd, kc, Md, "ghj.", wd, DJ],
                    namesShort: [Bs, Bb, Z, wc, "gh", lc, ic]
                },
                months: {
                    names: [cib, dib, "marzu", jw, "maghju", eib, "lugliu", "aostu", kw, lw, fib, mw, b],
                    namesAbbr: ["ghje", "ferr", "marz", "apri", "magh", "ghju", "lugl", "aost", oA, "otto", "nuve", "dice", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: gib,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.co);
    a.calendar = a.calendars.standard;
    a = f.gsw = d.extend(c, {}, j, {
        name: "gsw",
        englishName: "Alsatian",
        nativeName: "Elsässisch",
        language: "gsw",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Sundàà", "Mondàà", hib, iib, jib, "Fridàà", kib],
                    namesAbbr: ["Su.", "Mo.", "Di.", "Mi.", "Du.", "Fr.", "Sà."],
                    namesShort: [Cu, rl, zg, Ag, fv, Cg, "Sà"]
                },
                months: {
                    names: [UP, "Feverje", In, "Àpril", me, KJ, LJ, "Augscht", Tk, "Oktower", lib, Kn, b],
                    namesAbbr: ["Jän.", "Fev.", In, "Apr.", me, KJ, LJ, "Aug.", "Sept.", "Okt.", "Now.", "Dez.", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: mib,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.gsw);
    a.calendar = a.calendars.standard;
    a = f.sah = d.extend(c, {}, j, {
        name: "sah",
        englishName: "Yakut",
        nativeName: "саха",
        language: "sah",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "с."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [nib, oib, pib, "сэрэдэ", "чэппиэр", qib, "субуота"],
                    namesAbbr: [zq, MJ, NJ, sl, OJ, PJ, Dm],
                    namesShort: [zq, MJ, NJ, sl, OJ, PJ, Dm]
                },
                months: {
                    names: [rib, "Олунньу", sib, tib, "Ыам ыйа", "Бэс ыйа", "От ыйа", uib, vib, wib, xib, yib, b],
                    namesAbbr: [QJ, RJ, SJ, TJ, UJ, VJ, WJ, XJ, YJ, ZJ, aK, bK, b]
                },
                monthsGenitive: {
                    names: [zib, "олунньу", Aib, Bib, Cib, Dib, "от ыйын", Eib, Fib, Gib, Hib, Iib, b],
                    namesAbbr: [QJ, RJ, SJ, TJ, UJ, VJ, WJ, XJ, YJ, ZJ, aK, bK, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Jib,
                    D: Kib,
                    t: B,
                    T: z,
                    f: Lib,
                    F: Mib,
                    Y: Nib
                }
            })
        }
    }, f.sah);
    a.calendar = a.calendars.standard;
    a = f.qut = d.extend(c, {}, j, {
        name: "qut",
        englishName: "K'iche",
        nativeName: "K'iche",
        language: "qut",
        numberFormat: {
            currency: {
                symbol: xo
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["juq'ij", "kaq'ij", "oxq'ij", "kajq'ij", "joq'ij", "waqq'ij", "wuqq'ij"],
                    namesAbbr: ["juq", "kaq", "oxq", "kajq", "joq", "waqq", "wuqq"],
                    namesShort: [Ye, An, "ox", An, "jo", "wa", "wu"]
                },
                months: {
                    names: [Oib, Pib, "rox ik'", Qib, Rib, Sib, Tib, Uib, Vib, Wib, Xib, Yib, b],
                    namesAbbr: ["nab'e", "ukab", "rox", "ukaj", "uro", "uwaq", "uwuq", "uwajxaq", "ub'elej", "ulaj", "ujulaj", Zib, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f.qut);
    a.calendar = a.calendars.standard;
    a = f.rw = d.extend(c, {}, j, {
        name: "rw",
        englishName: ajb,
        nativeName: ajb,
        language: "rw",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [jc, F],
                ",": n,
                ".": g,
                symbol: "RWF"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [bjb, cjb, djb, ejb, fjb, gjb, hjb],
                    namesAbbr: ["mbe.", "kab.", iv, "kan.", iv, iv, "cyu."],
                    namesShort: ["mb", An, So, An, So, So, bx]
                },
                months: {
                    names: [ijb, jjb, "Werurwe", "Mata", kjb, "Kamena", ljb, "Kanama", "Nzeli", mjb, njb, "Ukuboza", b],
                    namesAbbr: ["Mut", "Gas", "Wer", "Mat", "Gic", "Kam", "Nya", bv, "Nze", "Ukwa", "Ugu", "Uku", b]
                },
                AM: [cK, cK, ojb],
                PM: [dK, dK, pjb],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }]
            })
        }
    }, f.rw);
    a.calendar = a.calendars.standard;
    a = f.wo = d.extend(c, {}, j, {
        name: vo,
        englishName: "Wolof",
        nativeName: "Wolof",
        language: vo,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "XOF"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.wo);
    a.calendar = a.calendars.standard;
    a = f.prs = d.extend(c, {}, j, {
        name: "prs",
        englishName: "Dari",
        nativeName: "درى",
        language: "prs",
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            ",": i,
            ".": g,
            percent: {
                pattern: [lH, nd],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Ud, Pb],
                symbol: "؋"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 5,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    f: gt,
                    F: ht,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 5,
                days: {
                    names: [Jq, Lm, Kq, Tp, Mm, wl, Nm],
                    namesAbbr: [Jq, Lm, Kq, Tp, Mm, wl, Nm],
                    namesShort: [tt, Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [Lq, Mq, Nq, Oq, Pq, eK, Qq, Rq, Sq, Tq, fK, Uq, b],
                    namesAbbr: [Lq, Mq, Nq, Oq, Pq, eK, Qq, Rq, Sq, Tq, fK, Uq, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: oH,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: pH,
                    f: qH,
                    F: rH,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f.prs);
    a.calendar = a.calendars.standard;
    a = f.gd = d.extend(c, {}, j, {
        name: "gd",
        englishName: "Scottish Gaelic",
        nativeName: "Gàidhlig",
        language: "gd",
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: "£"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [qjb, "Diluain", "Dimàirt", rjb, sjb, tjb, ujb],
                    namesAbbr: ["Dòm", "Lua", "Mài", "Cia", "Ard", "Hao", xr],
                    namesShort: [un, yc, ag, Xn, qd, Nn, Eb]
                },
                months: {
                    names: [vjb, wjb, "Am Màrt", xjb, yjb, zjb, Ajb, Bjb, Cjb, Djb, Ejb, Fjb, b],
                    namesAbbr: ["Fao", "Gea", "Màr", "Gib", "Cèi", "Ògm", "Iuc", "Lùn", Hq, "Dàm", UI, "Dùb", b]
                },
                AM: [cg, cg, ag],
                PM: ["f", "f", Iq],
                patterns: {
                    d: G,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f.gd);
    a.calendar = a.calendars.standard;
    a = f[VP] = d.extend(c, {}, j, {
        name: VP,
        englishName: "Arabic (Saudi Arabia)",
        nativeName: "العربية (المملكة العربية السعودية)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "ر.س.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[VP]);
    a.calendar = a.calendars.standard;
    a = f[WP] = d.extend(c, {}, j, {
        name: WP,
        englishName: "Bulgarian (Bulgaria)",
        nativeName: "български (България)",
        language: "bg",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "лв."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["неделя", vx, Ur, "сряда", oV, "петък", "събота"],
                    namesAbbr: [bn, cn, wx, tm, "четв", dn, "съб"],
                    namesShort: ["н", um, "в", vm, jr, um, vm]
                },
                months: {
                    names: ["януари", xx, vg, en, Sl, yx, zx, Pk, Ax, Bx, Vr, Cx, b],
                    namesAbbr: ["ян", "февр", vg, Qk, Sl, yx, zx, Rk, "септ", Sk, Vr, Bn, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: pV,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: qV,
                    D: rV,
                    t: sV,
                    T: tV,
                    f: uV,
                    F: vV,
                    M: o,
                    Y: wV
                }
            })
        }
    }, f[WP]);
    a.calendar = a.calendars.standard;
    a = f[XP] = d.extend(c, {}, j, {
        name: XP,
        englishName: "Catalan (Catalan)",
        nativeName: "català (català)",
        language: "ca",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [xV, "dilluns", "dimarts", yV, "dijous", Dx, Ex],
                    namesAbbr: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
                    namesShort: ["dg", "dl", "dt", "dc", "dj", Tv, "ds"]
                },
                months: {
                    names: ["gener", "febrer", Wr, sd, Fx, Xr, "juliol", Gx, Hx, Te, kd, Ix, b],
                    namesAbbr: [Uv, ub, Wr, Gd, Fx, Xr, sb, "ag", po, je, vb, fn, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: zV,
                    t: J,
                    T: I,
                    f: AV,
                    F: BV,
                    M: o,
                    Y: CV
                }
            })
        }
    }, f[XP]);
    a.calendar = a.calendars.standard;
    a = f[YP] = d.extend(c, {}, j, {
        name: YP,
        englishName: "Chinese (Traditional, Taiwan)",
        nativeName: "中文(台灣)",
        language: Dr,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [ud, Pb],
                symbol: "NT$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [jv, kv, lv, mv, nv, ov, pv],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: "西元",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: jm,
                    t: XE,
                    T: YE,
                    f: Gjb,
                    F: Hjb,
                    M: Il,
                    Y: km
                }
            }),
            Taiwan: d.extend(c, {}, h, {
                name: "Taiwan",
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [jv, kv, lv, mv, nv, ov, pv],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: b,
                    start: e,
                    offset: 1911
                }],
                twoDigitYearMax: 99,
                patterns: {
                    d: el,
                    D: jm,
                    t: XE,
                    T: YE,
                    f: Gjb,
                    F: Hjb,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[YP]);
    a.calendar = a.calendars.standard;
    a = f[ZP] = d.extend(c, {}, j, {
        name: ZP,
        englishName: "Czech (Czech Republic)",
        nativeName: "čeština (Česká republika)",
        language: "cs",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "Kč"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", wm],
                    namesAbbr: [ke, Vf, Kx, ep, Lx, Mx, Ul],
                    namesShort: [ke, Vf, Kx, ep, Lx, Mx, Ul]
                },
                months: {
                    names: ["leden", "únor", "březen", "duben", "květen", "červen", DV, "srpen", Nx, "říjen", kr, EV, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                monthsGenitive: {
                    names: ["ledna", "února", "března", "dubna", "května", "června", FV, "srpna", Nx, "října", GV, HV, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [Ox, Ox, "DOP."],
                PM: [Px, Px, "ODP."],
                eras: [{
                    name: Qx,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[ZP]);
    a.calendar = a.calendars.standard;
    a = f[aQ] = d.extend(c, {}, j, {
        name: aQ,
        englishName: "Danish (Denmark)",
        nativeName: "dansk (Danmark)",
        language: "da",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [lr, cw, dw, En, Fn, Gn, ew],
                    namesAbbr: [Vl, Z, hg, ig, Ne, Ad, Hn],
                    namesShort: [Vl, Z, hg, ig, Ne, Ad, Hn]
                },
                months: {
                    names: [df, ef, Rx, Oe, Zb, jg, kg, Jl, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[aQ]);
    a.calendar = a.calendars.standard;
    a = f[bQ] = d.extend(c, {}, j, {
        name: bQ,
        englishName: "German (Germany)",
        nativeName: "Deutsch (Deutschland)",
        language: mr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Yr, Zr, as, bs, cs, ds, es],
                    namesAbbr: [mg, rl, zg, Ag, Bg, Cg, ff],
                    namesShort: [mg, rl, zg, Ag, Bg, Cg, ff]
                },
                months: {
                    names: [nr, gp, In, Kl, me, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: [ne, ng, fw, We, me, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: fs,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: gs,
                    t: J,
                    T: I,
                    f: hs,
                    F: is,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[bQ]);
    a.calendar = a.calendars.standard;
    a = f[cQ] = d.extend(c, {}, j, {
        name: cQ,
        englishName: "Greek (Greece)",
        nativeName: "Ελληνικά (Ελλάδα)",
        language: gw,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", IV, "Σάββατο"],
                    namesAbbr: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                    namesShort: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σά"]
                },
                months: {
                    names: [JV, KV, "Μάρτιος", LV, "Μάιος", "Ιούνιος", "Ιούλιος", MV, NV, OV, PV, QV, b],
                    namesAbbr: [Sx, Tx, Ux, Vx, Wx, Xx, Yx, Zx, ay, by, cy, dy, b]
                },
                monthsGenitive: {
                    names: [RV, SV, "Μαρτίου", TV, "Μαΐου", "Ιουνίου", "Ιουλίου", UV, VV, WV, XV, YV, b],
                    namesAbbr: [Sx, Tx, Ux, Vx, Wx, Xx, Yx, Zx, ay, by, cy, dy, b]
                },
                AM: [ey, ey, "ΠΜ"],
                PM: [fy, fy, "ΜΜ"],
                eras: [{
                    name: "μ.Χ.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: js,
                    f: gy,
                    F: hy,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[cQ]);
    a.calendar = a.calendars.standard;
    a = f["en-US"] = d.extend(c, {}, j, {}, f["en-US"]);
    a.calendar = a.calendars.standard;
    a = f[dQ] = d.extend(c, {}, j, {
        name: dQ,
        englishName: "Finnish (Finland)",
        nativeName: "suomi (Suomi)",
        language: hw,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [ZV, aW, "tiistai", bW, "torstai", cW, dW],
                    namesAbbr: [Zf, Z, hg, iy, Ne, Eg, Mn],
                    namesShort: [Zf, Z, hg, iy, Ne, Eg, Mn]
                },
                months: {
                    names: [eW, fW, gW, hW, iW, "kesäkuu", jW, "elokuu", "syyskuu", "lokakuu", kW, lW, b],
                    namesAbbr: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: mW,
                    t: B,
                    T: z,
                    f: nW,
                    F: oW,
                    M: pW,
                    Y: w
                }
            })
        }
    }, f[dQ]);
    a.calendar = a.calendars.standard;
    a = f[eQ] = d.extend(c, {}, j, {
        name: eQ,
        englishName: "French (France)",
        nativeName: "français (France)",
        language: Ad,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[eQ]);
    a.calendar = a.calendars.standard;
    a = f[fQ] = d.extend(c, {}, j, {
        name: fQ,
        englishName: "Hebrew (Israel)",
        nativeName: "עברית (ישראל)",
        language: "he",
        isRTL: c,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, F],
                symbol: "₪"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [jy, ky, ly, my, ny, oy, ks],
                    namesAbbr: ["יום א", "יום ב", "יום ג", "יום ד", "יום ה", "יום ו", ks],
                    namesShort: [ls, ms, ns, os, ps, qs, rs]
                },
                months: {
                    names: ["ינואר", "פברואר", py, "אפריל", qy, "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר", b],
                    namesAbbr: ["ינו", "פבר", py, "אפר", qy, "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ", b]
                },
                eras: [{
                    name: "לספירה",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: ry,
                    t: J,
                    T: I,
                    f: sy,
                    F: ty,
                    M: o,
                    Y: w
                }
            }),
            Hebrew: d.extend(c, {}, h, {
                name: oL,
                "/": " ",
                days: {
                    names: [jy, ky, ly, my, ny, oy, ks],
                    namesAbbr: [ls, ms, ns, os, ps, qs, rs],
                    namesShort: [ls, ms, ns, os, ps, qs, rs]
                },
                months: {
                    names: [uy, vy, wy, xy, yy, zy, Ay, By, Cy, Dy, Ey, Fy, Gy],
                    namesAbbr: [uy, vy, wy, xy, yy, zy, Ay, By, Cy, Dy, Ey, Fy, Gy]
                },
                eras: [{
                    name: "C.E.",
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: 5790,
                patterns: {
                    d: Qb,
                    D: ry,
                    t: J,
                    T: I,
                    f: sy,
                    F: ty,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[fQ]);
    a.calendar = a.calendars.standard;
    a = f[gQ] = d.extend(c, {}, j, {
        name: gQ,
        englishName: "Hungarian (Hungary)",
        nativeName: "magyar (Magyarország)",
        language: "hu",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "Ft"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [qW, "hétfő", "kedd", "szerda", rW, "péntek", "szombat"],
                    namesAbbr: [Xl, Nn, Ml, Hy, Iy, Uk, Jy],
                    namesShort: [Xl, Nn, Ml, Hy, Iy, Uk, Jy]
                },
                months: {
                    names: [Ky, Ly, "március", "április", "május", "június", "július", sW, tW, ss, Ue, lg, b],
                    namesAbbr: [My, "febr.", "márc.", "ápr.", "máj.", Ny, Oy, Py, "szept.", Qy, Vc, Ry, b]
                },
                AM: [Sy, Sy, "DE."],
                PM: [Ty, Ty, "DU."],
                eras: [{
                    name: "i.sz.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Uy,
                    D: uW,
                    t: B,
                    T: z,
                    f: vW,
                    F: wW,
                    M: "MMMM d.",
                    Y: Vy
                }
            })
        }
    }, f[gQ]);
    a.calendar = a.calendars.standard;
    a = f[hQ] = d.extend(c, {}, j, {
        name: hQ,
        englishName: "Icelandic (Iceland)",
        nativeName: "íslenska (Ísland)",
        language: "is",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                decimals: 0,
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Wy, xW, yW, zW, AW, BW, CW],
                    namesAbbr: ["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."],
                    namesShort: [Zf, Xy, "þr", Cd, hw, "fö", Mn]
                },
                months: {
                    names: ["janúar", "febrúar", tb, ts, Yy, "júní", "júlí", "ágúst", le, ss, DW, to, b],
                    namesAbbr: [My, ip, kc, Zy, Yy, Ny, Oy, "ágú.", az, Qy, "nóv.", us, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[hQ]);
    a.calendar = a.calendars.standard;
    a = f[iQ] = d.extend(c, {}, j, {
        name: iQ,
        englishName: "Italian (Italy)",
        nativeName: "italiano (Italia)",
        language: bz,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [pL, qL, rL, sL, tL, uL, vL],
                    namesAbbr: [td, Pe, U, "mer", "gio", iw, "sab"],
                    namesShort: [id, Bb, Z, wc, "gi", lc, ic]
                },
                months: {
                    names: [wL, xL, Rd, jw, yL, zL, AL, Dd, kw, lw, kd, mw, b],
                    namesAbbr: [Uv, ub, U, Ub, "mag", "giu", "lug", Ed, po, "ott", vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[iQ]);
    a.calendar = a.calendars.standard;
    a = f[jQ] = d.extend(c, {}, j, {
        name: jQ,
        englishName: "Japanese (Japan)",
        nativeName: "日本語 (日本)",
        language: "ja",
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [ud, Pb],
                decimals: 0,
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [cz, dz, ez, fz, gz, hz, iz],
                    namesAbbr: [wg, jp, kp, lp, mp, np, op],
                    namesShort: [wg, jp, kp, lp, mp, np, op]
                },
                months: {
                    names: [jz, kz, lz, mz, nz, oz, pz, qz, rz, sz, tz, uz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [ym, ym, ym],
                PM: [zm, zm, zm],
                eras: [{
                    name: "西暦",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: xg,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            }),
            Japanese: d.extend(c, {}, h, {
                name: BL,
                days: {
                    names: [cz, dz, ez, fz, gz, hz, iz],
                    namesAbbr: [wg, jp, kp, lp, mp, np, op],
                    namesShort: [wg, jp, kp, lp, mp, np, op]
                },
                months: {
                    names: [jz, kz, lz, mz, nz, oz, pz, qz, rz, sz, tz, uz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [ym, ym, ym],
                PM: [zm, zm, zm],
                eras: [{
                    name: "平成",
                    start: e,
                    offset: 1867
                }, {
                    name: "昭和",
                    start: EW,
                    offset: 1911
                }, {
                    name: "大正",
                    start: FW,
                    offset: 1925
                }, {
                    name: "明治",
                    start: GW,
                    offset: 1988
                }],
                twoDigitYearMax: 99,
                patterns: {
                    d: HW,
                    D: IW,
                    t: B,
                    T: z,
                    f: JW,
                    F: KW,
                    M: Il,
                    Y: LW
                }
            })
        }
    }, f[jQ]);
    a.calendar = a.calendars.standard;
    a = f[kQ] = d.extend(c, {}, j, {
        name: kQ,
        englishName: "Korean (Korea)",
        nativeName: "한국어 (대한민국)",
        language: nw,
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                decimals: 0,
                symbol: "₩"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [vz, wz, xz, yz, zz, Az, Bz],
                    namesAbbr: [pp, qp, rp, sp, tp, up, vp],
                    namesShort: [pp, qp, rp, sp, tp, up, vp]
                },
                months: {
                    names: [Cz, Dz, Ez, Fz, Gz, Hz, Iz, Jz, Kz, Lz, Mz, Nz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [Am, Am, Am],
                PM: [Bm, Bm, Bm],
                eras: [{
                    name: "서기",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: og,
                    D: MW,
                    t: uo,
                    T: or,
                    f: NW,
                    F: OW,
                    M: Oz,
                    Y: PW
                }
            }),
            Korean: d.extend(c, {}, h, {
                name: CL,
                "/": rb,
                days: {
                    names: [vz, wz, xz, yz, zz, Az, Bz],
                    namesAbbr: [pp, qp, rp, sp, tp, up, vp],
                    namesShort: [pp, qp, rp, sp, tp, up, vp]
                },
                months: {
                    names: [Cz, Dz, Ez, Fz, Gz, Hz, Iz, Jz, Kz, Lz, Mz, Nz, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: [Am, Am, Am],
                PM: [Bm, Bm, Bm],
                eras: [{
                    name: "단기",
                    start: e,
                    offset: -2333
                }],
                twoDigitYearMax: 4362,
                patterns: {
                    d: QW,
                    D: RW,
                    t: uo,
                    T: or,
                    f: SW,
                    F: TW,
                    M: Oz,
                    Y: UW
                }
            })
        }
    }, f[kQ]);
    a.calendar = a.calendars.standard;
    a = f[lQ] = d.extend(c, {}, j, {
        name: lQ,
        englishName: "Dutch (Netherlands)",
        nativeName: "Nederlands (Nederland)",
        language: Pz,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [DL, EL, FL, GL, HL, IL, JL],
                    namesAbbr: [vs, Z, Uc, vo, id, ws, xs],
                    namesShort: [vs, Z, Uc, vo, id, ws, xs]
                },
                months: {
                    names: [wp, xp, ow, Oe, ys, jg, kg, pw, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, qw, Ub, ys, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Qz,
                    D: Gf,
                    t: B,
                    T: z,
                    f: rw,
                    F: sw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[lQ]);
    a.calendar = a.calendars.standard;
    a = f[mQ] = d.extend(c, {}, j, {
        name: mQ,
        englishName: "Norwegian, Bokmål (Norway)",
        nativeName: "norsk, bokmål (Norge)",
        language: "nb",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [lr, cw, dw, En, Fn, Gn, ew],
                    namesAbbr: [Vl, Z, hg, ig, Ne, Ad, Hn],
                    namesShort: [Vl, Z, hg, ig, Ne, Ad, Hn]
                },
                months: {
                    names: [df, ef, tb, Oe, nb, jg, kg, Jl, le, pf, Ue, to, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[mQ]);
    a.calendar = a.calendars.standard;
    a = f[nQ] = d.extend(c, {}, j, {
        name: nQ,
        englishName: "Polish (Poland)",
        nativeName: "polski (Polska)",
        language: tw,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "zł"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [VW, WW, "wtorek", "środa", XW, "piątek", wm],
                    namesAbbr: [Ze, yp, Rz, Sz, Tz, zs, mg],
                    namesShort: [Ze, yp, Rz, Sz, Tz, zs, mg]
                },
                months: {
                    names: ["styczeń", "luty", "marzec", YW, Zb, ZW, "lipiec", aX, bX, cX, kr, dX, b],
                    namesAbbr: [Uz, Vz, U, Wz, Zb, Xz, Pn, Yz, Zz, aA, Qn, bA, b]
                },
                monthsGenitive: {
                    names: [eX, "lutego", cA, fX, dA, "czerwca", "lipca", gX, hX, iX, uw, "grudnia", b],
                    namesAbbr: [Uz, Vz, U, Wz, Zb, Xz, Pn, Yz, Zz, aA, Qn, bA, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: Hf,
                    t: J,
                    T: I,
                    f: pr,
                    F: wo,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[nQ]);
    a.calendar = a.calendars.standard;
    a = f[oQ] = d.extend(c, {}, j, {
        name: oQ,
        englishName: "Portuguese (Brazil)",
        nativeName: "Português (Brasil)",
        language: eA,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g,
                symbol: "R$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, KL, LL, ML, NL, OL, Pd],
                    namesAbbr: [td, "seg", "ter", "qua", "qui", "sex", Qd],
                    namesShort: [un, Eb, md, xo, xo, Eb, Eb]
                },
                months: {
                    names: ["janeiro", jX, "março", sd, As, "junho", "julho", Dd, fA, gA, hA, kX, b],
                    namesAbbr: [hc, "fev", U, Gd, nb, wb, sb, Ed, po, iA, vb, "dez", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: PL,
                    t: J,
                    T: I,
                    f: QL,
                    F: RL,
                    M: SL,
                    Y: jd
                }
            })
        }
    }, f[oQ]);
    a.calendar = a.calendars.standard;
    a = f[pQ] = d.extend(c, {}, j, {
        name: pQ,
        englishName: "Romansh (Switzerland)",
        nativeName: "Rumantsch (Svizra)",
        language: "rm",
        numberFormat: {
            ",": Ig,
            percent: {
                pattern: [K, L],
                ",": Ig
            },
            currency: {
                pattern: [jc, F],
                ",": Ig,
                symbol: jA
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [lX, mX, Kd, "mesemna", "gievgia", nX, "sonda"],
                    namesAbbr: [Bs, kA, Z, wc, lA, lc, Ul],
                    namesShort: [Bs, kA, Z, wc, lA, lc, Ul]
                },
                months: {
                    names: ["schaner", "favrer", tb, "avrigl", mA, oX, "fanadur", nA, pX, "october", Ue, lg, b],
                    namesAbbr: ["schan", "favr", tb, "avr", mA, "zercl", "fan", nA, oA, je, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: "s. Cr.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: js,
                    t: J,
                    T: I,
                    f: qX,
                    F: rX,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[pQ]);
    a.calendar = a.calendars.standard;
    a = f[qQ] = d.extend(c, {}, j, {
        name: qQ,
        englishName: "Romanian (Romania)",
        nativeName: "română (România)",
        language: "ro",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "lei"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [sX, pA, "marţi", tX, "joi", "vineri", "sâmbătă"],
                    namesAbbr: [un, yc, Rn, Ag, Cm, Xl, Eb],
                    namesShort: [un, yc, Rn, Ag, Cm, Xl, Eb]
                },
                months: {
                    names: [uX, vX, "martie", "aprilie", nb, "iunie", "iulie", Jl, wX, xX, yX, zX, b],
                    namesAbbr: ["ian.", ip, kc, Zy, zp, "iun.", "iul.", Py, az, od, Vc, Ry, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: J,
                    T: I,
                    f: pr,
                    F: wo,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[qQ]);
    a.calendar = a.calendars.standard;
    a = f[rQ] = d.extend(c, {}, j, {
        name: rQ,
        englishName: "Russian (Russia)",
        nativeName: "русский (Россия)",
        language: "ru",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: Cs
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [AX, BX, Ur, yo, "четверг", "пятница", "суббота"],
                    namesAbbr: [qA, Ap, Bp, sl, Cp, Dp, Dm],
                    namesShort: [qA, Ap, Bp, sl, Cp, Dp, Dm]
                },
                months: {
                    names: [rA, Ds, om, Es, Id, Ep, Fp, pm, Fs, Gs, Hs, Is, b],
                    namesAbbr: [sA, Gp, Ol, Qk, Sl, Hp, Ip, Rk, Js, Sk, Ks, Bn, b]
                },
                monthsGenitive: {
                    names: ["января", "февраля", "марта", "апреля", Jp, "июня", "июля", "августа", CX, "октября", "ноября", "декабря", b],
                    namesAbbr: [sA, Gp, Ol, Qk, Sl, Hp, Ip, Rk, Js, Sk, Ks, Bn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: DX,
                    t: B,
                    T: z,
                    f: EX,
                    F: FX,
                    Y: w
                }
            })
        }
    }, f[rQ]);
    a.calendar = a.calendars.standard;
    a = f[sQ] = d.extend(c, {}, j, {
        name: sQ,
        englishName: "Croatian (Croatia)",
        nativeName: "hrvatski (Hrvatska)",
        language: tA,
        numberFormat: {
            pattern: [vw],
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: ww
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Ls, Ms, Em, Ns, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Os, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [TL, UL, VL, WL, XL, YL, ZL, aM, bM, kr, cM, dM, b],
                    namesAbbr: [Ps, Qs, Rs, Ss, Ts, Pn, Us, Vs, Ws, Qn, Xs, Ys, b]
                },
                monthsGenitive: {
                    names: [eM, fM, gM, hM, iM, jM, kM, lM, mM, uw, nM, oM, b],
                    namesAbbr: [Ps, Qs, Rs, Ss, Ts, Pn, Us, Vs, Ws, Qn, Xs, Ys, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: pM,
                    D: qM,
                    t: B,
                    T: z,
                    f: rM,
                    F: sM,
                    M: gc
                }
            })
        }
    }, f[sQ]);
    a.calendar = a.calendars.standard;
    a = f[tQ] = d.extend(c, {}, j, {
        name: tQ,
        englishName: "Slovak (Slovakia)",
        nativeName: "slovenčina (Slovenská republika)",
        language: "sk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": Zs,
                firstDay: 1,
                days: {
                    names: ["nedeľa", GX, "utorok", "streda", "štvrtok", "piatok", wm],
                    namesAbbr: [ke, Vf, ul, ep, uA, Kp, Ul],
                    namesShort: [ke, Vf, ul, ep, uA, Kp, Ul]
                },
                months: {
                    names: [Ky, Ly, vA, ts, "máj", "jún", "júl", Jl, le, ss, Ue, lg, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                monthsGenitive: {
                    names: ["januára", HX, cA, "apríla", "mája", "júna", "júla", "augusta", at, "októbra", IX, bt, b],
                    namesAbbr: [fl, gl, hl, il, jl, kl, ll, ml, nl, ol, pl, ql, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Qx,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ct,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[tQ]);
    a.calendar = a.calendars.standard;
    a = f[uQ] = d.extend(c, {}, j, {
        name: uQ,
        englishName: "Albanian (Albania)",
        nativeName: "shqipe (Shqipëria)",
        language: "sq",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": i,
                ".": g,
                symbol: "Lek"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["e diel", "e hënë", "e martë", JX, "e enjte", KX, LX],
                    namesAbbr: ["Die", "Hën", Se, "Mër", "Enj", "Pre", wA],
                    namesShort: [zg, "Hë", Rn, xA, yA, zA, "Sh"]
                },
                months: {
                    names: ["janar", "shkurt", tb, "prill", Zb, "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor", b],
                    namesAbbr: [ne, "Shk", Se, "Pri", "Maj", "Qer", "Kor", "Gsh", wA, "Tet", "Nën", "Dhj", b]
                },
                AM: [AA, "pd", AA],
                PM: [BA, "md", BA],
                patterns: {
                    d: og,
                    D: og,
                    t: "h:mm.tt",
                    T: MX,
                    f: NX,
                    F: OX,
                    Y: "yyyy-MM"
                }
            })
        }
    }, f[uQ]);
    a.calendar = a.calendars.standard;
    a = f[vQ] = d.extend(c, {}, j, {
        name: vQ,
        englishName: "Swedish (Sweden)",
        nativeName: "svenska (Sverige)",
        language: Lp,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [tM, xw, uM, En, Fn, Gn, vM],
                    namesAbbr: [dt, Sn, hg, ig, Ne, Ad, et],
                    namesShort: [dt, Sn, hg, ig, Ne, Ad, et]
                },
                months: {
                    names: [wp, xp, tb, Oe, Zb, jg, kg, wM, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: xM,
                    t: J,
                    T: I,
                    f: yM,
                    F: zM,
                    M: AM,
                    Y: w
                }
            })
        }
    }, f[vQ]);
    a.calendar = a.calendars.standard;
    a = f[wQ] = d.extend(c, {}, j, {
        name: wQ,
        englishName: "Thai (Thailand)",
        nativeName: "ไทย (ไทย)",
        language: "th",
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: "฿"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: PX,
                firstDay: 1,
                days: {
                    names: [CA, DA, EA, FA, GA, HA, IA],
                    namesAbbr: [JA, KA, LA, MA, NA, OA, PA],
                    namesShort: [Mp, "จ", Mp, Np, Np, "ศ", "ส"]
                },
                months: {
                    names: [QA, RA, SA, TA, UA, VA, WA, XA, YA, ZA, aB, bB, b],
                    namesAbbr: [cB, dB, eB, fB, gB, hB, iB, jB, kB, lB, mB, nB, b]
                },
                eras: [{
                    name: "พ.ศ.",
                    start: e,
                    offset: -543
                }],
                twoDigitYearMax: 2572,
                patterns: {
                    d: hf,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: o,
                    Y: w
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [CA, DA, EA, FA, GA, HA, IA],
                    namesAbbr: [JA, KA, LA, MA, NA, OA, PA],
                    namesShort: [Mp, "จ", Mp, Np, Np, "ศ", "ส"]
                },
                months: {
                    names: [QA, RA, SA, TA, UA, VA, WA, XA, YA, ZA, aB, bB, b],
                    namesAbbr: [cB, dB, eB, fB, gB, hB, iB, jB, kB, lB, mB, nB, b]
                },
                patterns: {
                    d: hf,
                    D: QX,
                    t: B,
                    T: z,
                    f: RX,
                    F: SX,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[wQ]);
    a.calendar = a.calendars.standard;
    a = f[xQ] = d.extend(c, {}, j, {
        name: xQ,
        englishName: "Turkish (Turkey)",
        nativeName: "Türkçe (Türkiye)",
        language: qr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "TL"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Pazar", TX, "Salı", UX, VX, "Cuma", WX],
                    namesAbbr: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                    namesShort: ["Pz", zs, ff, Op, "Pe", "Cu", "Ct"]
                },
                months: {
                    names: ["Ocak", "Şubat", zo, "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık", b],
                    namesAbbr: ["Oca", "Şub", Se, "Nis", Vk, "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", yw, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: ft,
                    t: J,
                    T: I,
                    f: oB,
                    F: pB,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[xQ]);
    a.calendar = a.calendars.standard;
    a = f[yQ] = d.extend(c, {}, j, {
        name: yQ,
        englishName: "Urdu (Islamic Republic of Pakistan)",
        nativeName: "اُردو (پاکستان)",
        language: "ur",
        isRTL: c,
        numberFormat: {
            currency: {
                pattern: [Ud, Pb],
                symbol: "Rs"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [qB, rB, sB, tB, uB, wl, vB],
                    namesAbbr: [qB, rB, sB, tB, uB, wl, vB],
                    namesShort: [em, Tn, k, "ب", M, M, "ه"]
                },
                months: {
                    names: [wB, xB, yB, zB, AB, BB, CB, DB, EB, FB, GB, HB, b],
                    namesAbbr: [wB, xB, yB, zB, AB, BB, CB, DB, EB, FB, GB, HB, b]
                },
                patterns: {
                    d: G,
                    D: cf,
                    f: XX,
                    F: YX,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    f: gt,
                    F: ht,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            })
        }
    }, f[yQ]);
    a.calendar = a.calendars.standard;
    a = f[zQ] = d.extend(c, {}, j, {
        name: zQ,
        englishName: "Indonesian (Indonesia)",
        nativeName: "Bahasa Indonesia (Indonesia)",
        language: "id",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                decimals: 0,
                ",": i,
                ".": g,
                symbol: "Rp"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [IB, "Senin", zw, Un, JB, KB, Vn],
                    namesAbbr: [IB, Wn, Aw, Un, JB, KB, Vn],
                    namesShort: [ag, Eb, Eb, pg, Ml, Cm, Eb]
                },
                months: {
                    names: [rr, sr, "Maret", Kl, Jg, xm, Jn, "Agustus", Tk, Ll, ZX, LB, b],
                    namesAbbr: [ne, ng, Se, We, Jg, gf, dg, "Agust", Wl, Bd, "Nop", MB, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: G,
                    D: Qb,
                    t: B,
                    T: z,
                    f: Bw,
                    F: Cw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[zQ]);
    a.calendar = a.calendars.standard;
    a = f[AQ] = d.extend(c, {}, j, {
        name: AQ,
        englishName: "Ukrainian (Ukraine)",
        nativeName: "українська (Україна)",
        language: "uk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "₴"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["неділя", aY, bY, "середа", "четвер", cY, vn],
                    namesAbbr: [NB, Ap, Bp, sl, Cp, Dp, Dm],
                    namesShort: [NB, Ap, Bp, sl, Cp, Dp, Dm]
                },
                months: {
                    names: ["Січень", "Лютий", dY, "Квітень", "Травень", "Червень", "Липень", "Серпень", eY, "Жовтень", fY, "Грудень", b],
                    namesAbbr: ["Січ", it, "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", jt, "Жов", "Лис", "Гру", b]
                },
                monthsGenitive: {
                    names: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", gY, "грудня", b],
                    namesAbbr: ["січ", "лют", "бер", "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: hY,
                    t: B,
                    T: z,
                    f: iY,
                    F: jY,
                    M: Rb,
                    Y: kY
                }
            })
        }
    }, f[AQ]);
    a.calendar = a.calendars.standard;
    a = f[BQ] = d.extend(c, {}, j, {
        name: BQ,
        englishName: "Belarusian (Belarus)",
        nativeName: "Беларускі (Беларусь)",
        language: "be",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Cs
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["нядзеля", lY, "аўторак", "серада", "чацвер", "пятніца", vn],
                    namesAbbr: [OB, PB, QB, tm, RB, SB, TB],
                    namesShort: [OB, PB, QB, tm, RB, SB, TB]
                },
                months: {
                    names: [mY, "Люты", "Сакавік", nY, Id, "Чэрвень", "Ліпень", "Жнівень", oY, pY, qY, "Снежань", b],
                    namesAbbr: [UB, it, VB, WB, Id, XB, YB, ZB, jt, aC, bC, cC, b]
                },
                monthsGenitive: {
                    names: [rY, "лютага", sY, tY, Jp, "чэрвеня", "ліпеня", "жніўня", "верасня", uY, vY, "снежня", b],
                    namesAbbr: [UB, it, VB, WB, Id, XB, YB, ZB, jt, aC, bC, cC, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[BQ]);
    a.calendar = a.calendars.standard;
    a = f[CQ] = d.extend(c, {}, j, {
        name: CQ,
        englishName: "Slovenian (Slovenia)",
        nativeName: "slovenski (Slovenija)",
        language: "sl",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, wY, "torek", Qp, "četrtek", "petek", wm],
                    namesAbbr: [Yl, tl, "tor", Rp, Zl, am, kt],
                    namesShort: [ke, Vf, Ne, vl, bm, Eg, Ul]
                },
                months: {
                    names: [df, ef, vA, Oe, Zb, lt, mt, qg, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[CQ]);
    a.calendar = a.calendars.standard;
    a = f[DQ] = d.extend(c, {}, j, {
        name: DQ,
        englishName: "Estonian (Estonia)",
        nativeName: "eesti (Eesti)",
        language: "et",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [xY, yY, zY, AY, BY, "reede", "laupäev"],
                    namesAbbr: [Uk, Sp, md, Ml, Ze, pg, yc],
                    namesShort: [Uk, Sp, md, Ml, Ze, pg, yc]
                },
                months: {
                    names: ["jaanuar", CY, dC, "aprill", nb, eC, fC, Jl, le, DY, Ue, EY, b],
                    namesAbbr: ["jaan", "veebr", dC, Ub, nb, eC, fC, Ve, gC, dc, vb, "dets", b]
                },
                AM: [hC, gw, hC],
                PM: [iC, tw, iC],
                patterns: {
                    d: FY,
                    D: GY,
                    t: B,
                    T: z,
                    f: HY,
                    F: IY,
                    M: gc,
                    Y: JY
                }
            })
        }
    }, f[DQ]);
    a.calendar = a.calendars.standard;
    a = f[EQ] = d.extend(c, {}, j, {
        name: EQ,
        englishName: "Latvian (Latvia)",
        nativeName: "latviešu (Latvija)",
        language: "lv",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": n,
                ".": g,
                symbol: "Ls"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [KY, LY, MY, NY, OY, PY, QY],
                    namesAbbr: [Lp, jC, kC, qr, lC, mC, xn],
                    namesShort: [Lp, jC, kC, qr, lC, mC, xn]
                },
                months: {
                    names: [RY, SY, Rx, "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", TY, UY, VY, WY, b],
                    namesAbbr: [hc, ub, U, Ub, nb, nC, oC, Ve, yb, dc, vb, oc, b]
                },
                monthsGenitive: {
                    names: ["janvārī", XY, "martā", "aprīlī", "maijā", "jūnijā", "jūlijā", "augustā", YY, "oktobrī", ZY, aZ, b],
                    namesAbbr: [hc, ub, U, Ub, nb, nC, oC, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Uy,
                    D: bZ,
                    t: B,
                    T: z,
                    f: cZ,
                    F: dZ,
                    M: gc,
                    Y: Vy
                }
            })
        }
    }, f[EQ]);
    a.calendar = a.calendars.standard;
    a = f[FQ] = d.extend(c, {}, j, {
        name: FQ,
        englishName: "Lithuanian (Lithuania)",
        nativeName: "lietuvių (Lietuva)",
        language: "lt",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: nt
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [eZ, fZ, gZ, hZ, iZ, jZ, kZ],
                    namesAbbr: ["Sk", zA, pC, "Tr", "Kt", yp, "Št"],
                    namesShort: [Eb, Uk, qd, md, Ml, yp, "Š"]
                },
                months: {
                    names: ["sausis", "vasaris", "kovas", lZ, "gegužė", mZ, "liepa", nZ, oZ, "spalis", pZ, "gruodis", b],
                    namesAbbr: [qC, rC, sC, tC, uC, vC, wC, xC, yC, zC, AC, BC, b]
                },
                monthsGenitive: {
                    names: ["sausio", "vasario", "kovo", qZ, "gegužės", rZ, "liepos", sZ, "rugsėjo", "spalio", tZ, uZ, b],
                    namesAbbr: [qC, rC, sC, tC, uC, vC, wC, xC, yC, zC, AC, BC, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: vZ,
                    D: wZ,
                    t: J,
                    T: I,
                    f: xZ,
                    F: yZ,
                    M: zZ,
                    Y: AZ
                }
            })
        }
    }, f[FQ]);
    a.calendar = a.calendars.standard;
    a = f[GQ] = d.extend(c, {}, j, {
        name: GQ,
        englishName: "Tajik (Cyrillic, Tajikistan)",
        nativeName: "Тоҷикӣ (Тоҷикистон)",
        language: fx,
        numberFormat: {
            ",": n,
            ".": g,
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                groupSizes: [3, 0],
                ",": n,
                ".": ";",
                symbol: BM
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                days: {
                    names: [Ao, CM, DM, EM, FM, GM, HM],
                    namesAbbr: [Ao, fm, ot, pt, qt, rt, st],
                    namesShort: [Ao, fm, ot, pt, qt, rt, st]
                },
                months: {
                    names: [Dw, tr, om, ur, Id, Wk, Xk, pm, Ew, Fw, Gw, vr, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                monthsGenitive: {
                    names: [IM, JM, KM, LM, "маи", MM, NM, OM, PM, QM, RM, SM, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    Y: w
                }
            })
        }
    }, f[GQ]);
    a.calendar = a.calendars.standard;
    a = f[HQ] = d.extend(c, {}, j, {
        name: HQ,
        englishName: "Persian",
        nativeName: "فارسى (ایران)",
        language: "fa",
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                ".": "/",
                symbol: "ريال"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [CC, Lm, DC, Tp, Mm, wl, Nm],
                    namesAbbr: [CC, Lm, DC, Tp, Mm, wl, Nm],
                    namesShort: [tt, Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [EC, FC, ab, GC, HC, IC, JC, KC, LC, MC, NC, OC, b],
                    namesAbbr: [EC, FC, ab, GC, HC, IC, JC, KC, LC, MC, NC, OC, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                patterns: {
                    d: xg,
                    D: xg,
                    t: C,
                    T: D,
                    f: BZ,
                    F: CZ,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [kf, kf, kf],
                PM: [lf, lf, lf],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[HQ]);
    a.calendar = a.calendars.standard;
    a = f[IQ] = d.extend(c, {}, j, {
        name: IQ,
        englishName: "Vietnamese (Vietnam)",
        nativeName: "Tiếng Việt (Việt Nam)",
        language: Qe,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "₫"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [DZ, EZ, "Thứ Ba", "Thứ Tư", FZ, GZ, HZ],
                    namesAbbr: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"],
                    namesShort: [Xn, Nn, Pm, md, Ze, Eb, Pm]
                },
                months: {
                    names: [IZ, JZ, KZ, LZ, MZ, NZ, OZ, PZ, QZ, RZ, SZ, TZ, b],
                    namesAbbr: ["Thg1", "Thg2", "Thg3", "Thg4", "Thg5", "Thg6", "Thg7", "Thg8", "Thg9", "Thg10", "Thg11", "Thg12", b]
                },
                AM: [PC, ic, PC],
                PM: [QC, Hw, QC],
                patterns: {
                    d: G,
                    D: Qb,
                    f: UZ,
                    F: VZ,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[IQ]);
    a.calendar = a.calendars.standard;
    a = f[JQ] = d.extend(c, {}, j, {
        name: JQ,
        englishName: "Armenian (Armenia)",
        nativeName: "Հայերեն (Հայաստան)",
        language: "hy",
        numberFormat: {
            currency: {
                pattern: [H, E],
                symbol: "դր."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Կիրակի", WZ, XZ, YZ, ZZ, "ՈՒրբաթ", "Շաբաթ"],
                    namesAbbr: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "ՈՒր", "Շբթ"],
                    namesShort: ["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"]
                },
                months: {
                    names: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", aab, bab, cab, dab, b],
                    namesAbbr: ["ՀՆՎ", "ՓՏՎ", "ՄՐՏ", "ԱՊՐ", "ՄՅՍ", "ՀՆՍ", "ՀԼՍ", "ՕԳՍ", "ՍԵՊ", "ՀՈԿ", "ՆՈՅ", "ԴԵԿ", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: eab,
                    t: B,
                    T: z,
                    f: fab,
                    F: gab,
                    M: Rb
                }
            })
        }
    }, f[JQ]);
    a.calendar = a.calendars.standard;
    a = f[KQ] = d.extend(c, {}, j, {
        name: KQ,
        englishName: "Azeri (Latin, Azerbaijan)",
        nativeName: "Azərbaycan­ılı (Azərbaycan)",
        language: gx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: TM
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [UM, VM, WM, XM, YM, ZM, aN],
                    namesAbbr: [Pm, ut, Op, Xp, Yp, Xn, Zp],
                    namesShort: [Pm, ut, Op, Xp, Yp, Xn, Zp]
                },
                months: {
                    names: [bN, cN, zo, Iw, Vk, Co, Do, dN, eN, fN, gN, Jw, b],
                    namesAbbr: [vt, wr, Se, We, Vk, Co, Do, wt, Wn, Bd, xt, aq, b]
                },
                monthsGenitive: {
                    names: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b],
                    namesAbbr: [vt, wr, Se, We, Vk, Co, Do, wt, Wn, Bd, xt, aq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[KQ]);
    a.calendar = a.calendars.standard;
    a = f[LQ] = d.extend(c, {}, j, {
        name: LQ,
        englishName: "Basque (Basque)",
        nativeName: "euskara (euskara)",
        language: "eu",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["igandea", iab, jab, kab, lab, mab, nab],
                    namesAbbr: ["ig.", "al.", "as.", "az.", "og.", "or.", "lr."],
                    namesShort: [Kw, "al", Lw, RC, "og", Mw, "lr"]
                },
                months: {
                    names: [oab, "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua", b],
                    namesAbbr: ["urt.", "ots.", kc, "api.", zp, "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe.", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: xg,
                    D: pab,
                    t: J,
                    T: z,
                    f: qab,
                    F: rab,
                    Y: sab
                }
            })
        }
    }, f[LQ]);
    a.calendar = a.calendars.standard;
    a = f[MQ] = d.extend(c, {}, j, {
        name: MQ,
        englishName: "Upper Sorbian (Germany)",
        nativeName: "hornjoserbšćina (Němska)",
        language: "hsb",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": Zs,
                firstDay: 1,
                days: {
                    names: [tab, uab, "wutora", "srjeda", "štwórtk", "pjatk", wm],
                    namesAbbr: [SC, "pón", "wut", TC, "štw", "pja", kt],
                    namesShort: [yt, Yk, "w", bg, "š", Yk, bg]
                },
                months: {
                    names: [df, ef, UC, VC, "meja", lt, mt, WC, le, pf, XC, lg, b],
                    namesAbbr: [hc, ub, bq, Ub, YC, wb, sb, cq, yb, dc, dq, oc, b]
                },
                monthsGenitive: {
                    names: [ZC, aD, bD, cD, "meje", dD, eD, fD, at, gD, hD, bt, b],
                    namesAbbr: [hc, ub, bq, Ub, YC, wb, sb, cq, yb, dc, dq, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: iD,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ct,
                    D: jD,
                    t: vab,
                    T: z,
                    f: wab,
                    F: kD,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[MQ]);
    a.calendar = a.calendars.standard;
    a = f[NQ] = d.extend(c, {}, j, {
        name: NQ,
        englishName: "Macedonian (Former Yugoslav Republic of Macedonia)",
        nativeName: "македонски јазик (Македонија)",
        language: "mk",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "ден."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["недела", vx, Ur, yo, xab, "петок", "сабота"],
                    namesAbbr: [bn, cn, "втр", "срд", No, dn, "саб"],
                    namesShort: [zt, At, wx, tm, Bt, Ct, "са"]
                },
                months: {
                    names: ["јануари", xx, vg, en, rg, "јуни", "јули", Pk, Ax, Bx, Vr, Cx, b],
                    namesAbbr: [Oo, Gp, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, "ное", Bn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: lD,
                    t: J,
                    T: I,
                    f: yab,
                    F: zab,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[NQ]);
    a.calendar = a.calendars.standard;
    a = f[OQ] = d.extend(c, {}, j, {
        name: OQ,
        englishName: "Setswana (South Africa)",
        nativeName: "Setswana (Aforika Borwa)",
        language: "tn",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Bab, Cab, mD, nD, oD, Dab, Eab],
                    namesAbbr: ["Ltp.", "Mos.", "Lbd.", "Lbr.", "Lbn.", "Lbt.", "Lmt."],
                    namesShort: ["Lp", "Ms", pD, "Lr", qD, nt, "Lm"]
                },
                months: {
                    names: [Fab, Gab, Hab, rD, Iab, Jab, "Phukwi", "Phatwe", "Lwetse", Kab, Lab, Mab, b],
                    namesAbbr: ["Fer.", "Tlhak.", "Mop.", "Mor.", "Motsh.", "Seet.", "Phukw.", "Phatw.", "Lwets.", "Diph.", "Ngwan.", "Sed.", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[OQ]);
    a.calendar = a.calendars.standard;
    a = f[PQ] = d.extend(c, {}, j, {
        name: PQ,
        englishName: "isiXhosa (South Africa)",
        nativeName: "isiXhosa (uMzantsi Afrika)",
        language: "xh",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["iCawa", "uMvulo", Oab, sD, tD, uD, vD],
                    namesShort: [Yp, "Mv", pD, nt, qD, "Lh", "Mg"]
                },
                months: {
                    names: ["Mqungu", "Mdumba", "Kwindla", Pab, "Canzibe", Qab, "Khala", "Thupha", "Msintsi", "Dwarha", "Nkanga", "Mnga", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[PQ]);
    a.calendar = a.calendars.standard;
    a = f[QQ] = d.extend(c, {}, j, {
        name: QQ,
        englishName: "isiZulu (South Africa)",
        nativeName: "isiZulu (iNingizimu Afrika)",
        language: "zu",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["iSonto", Rab, Sab, sD, tD, uD, vD],
                    namesAbbr: ["Son.", "Mso.", "Bi.", "Tha.", "Ne.", "Hla.", "Mgq."]
                },
                months: {
                    names: [Tab, Uab, "uNdasa", "uMbaso", "uNhlaba", Vab, Wab, "uNcwaba", Xab, "uMfumfu", "uLwezi", Yab, b],
                    namesAbbr: ["Mas.", "Nhlo.", "Nda.", "Mba.", "Nhla.", "Nhlang.", "Ntu.", "Ncwa.", "Man.", "Mfu.", "Lwe.", "Zib.", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[QQ]);
    a.calendar = a.calendars.standard;
    a = f[RQ] = d.extend(c, {}, j, {
        name: RQ,
        englishName: "Afrikaans (South Africa)",
        nativeName: "Afrikaans (Suid Afrika)",
        language: "af",
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["Sondag", "Maandag", "Dinsdag", abb, bbb, "Vrydag", cbb],
                    namesAbbr: [wD, "Maan", "Dins", "Woen", "Dond", "Vry", xr],
                    namesShort: [mg, Rn, zg, xD, Bg, "Vr", ff]
                },
                months: {
                    names: [dbb, ebb, "Maart", Kl, Jg, "Junie", "Julie", fbb, Tk, Ll, nm, LB, b],
                    namesAbbr: [ne, ng, Se, We, Jg, gf, dg, Ln, Wl, Bd, Dg, MB, b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[RQ]);
    a.calendar = a.calendars.standard;
    a = f[SQ] = d.extend(c, {}, j, {
        name: SQ,
        englishName: "Georgian (Georgia)",
        nativeName: "ქართული (საქართველო)",
        language: An,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "Lari"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [yD, zD, AD, BD, CD, DD, ED],
                    namesAbbr: [yD, zD, AD, BD, CD, DD, ED],
                    namesShort: ["კ", "ო", "ს", "ო", "ხ", "პ", "შ"]
                },
                months: {
                    names: ["იანვარი", gbb, "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", hbb, ibb, jbb, kbb, b],
                    namesAbbr: ["იან", "თებ", "მარ", "აპრ", "მაის", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოემ", "დეკ", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: lbb,
                    t: B,
                    T: z,
                    f: mbb,
                    F: nbb,
                    M: "dd MM",
                    Y: w
                }
            })
        }
    }, f[SQ]);
    a.calendar = a.calendars.standard;
    a = f[TQ] = d.extend(c, {}, j, {
        name: TQ,
        englishName: "Faroese (Faroe Islands)",
        nativeName: "føroyskt (Føroyar)",
        language: "fo",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [Wy, obb, pbb, qbb, rbb, sbb, tbb],
                    namesAbbr: ["sun", Dt, "týs", "mik", "hós", "frí", "leyg"],
                    namesShort: [Zf, Xy, "tý", Cd, "hó", Ad, "ley"]
                },
                months: {
                    names: [df, ef, tb, ts, nb, jg, kg, Jl, le, pf, Ue, to, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[TQ]);
    a.calendar = a.calendars.standard;
    a = f[UQ] = d.extend(c, {}, j, {
        name: UQ,
        englishName: "Hindi (India)",
        nativeName: "हिंदी (भारत)",
        language: "hi",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [FD, Et, "मंगलवार", eq, GD, Ft, Gt],
                    namesAbbr: [HD, Ht, "मंगल.", It, ID, JD, KD],
                    namesShort: [Jt, Zn, ao, bo, Kt, Hl, Hl]
                },
                months: {
                    names: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b],
                    namesAbbr: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b]
                },
                AM: [Rm, Rm, Rm],
                PM: [Sm, Sm, Sm],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[UQ]);
    a.calendar = a.calendars.standard;
    a = f[VQ] = d.extend(c, {}, j, {
        name: VQ,
        englishName: "Maltese (Malta)",
        nativeName: "Malti (Malta)",
        language: "mt",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [ud, Pb],
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Il-Ħadd", ubb, vbb, wbb, xbb, ybb, "Is-Sibt"],
                    namesAbbr: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
                    namesShort: [oe, oe, oe, yc, oe, oe, oe]
                },
                months: {
                    names: ["Jannar", "Frar", "Marzu", Kl, "Mejju", "Ġunju", "Lulju", "Awissu", zbb, "Ottubru", Abb, Bbb, b],
                    namesAbbr: [ne, "Fra", Se, We, "Mej", "Ġun", "Lul", "Awi", "Set", "Ott", Dg, "Diċ", b]
                },
                patterns: {
                    d: G,
                    D: Cbb,
                    t: J,
                    T: I,
                    f: Dbb,
                    F: Ebb,
                    M: Fbb,
                    Y: w
                }
            })
        }
    }, f[VQ]);
    a.calendar = a.calendars.standard;
    a = f[WQ] = d.extend(c, {}, j, {
        name: WQ,
        englishName: "Sami, Northern (Norway)",
        nativeName: "davvisámegiella (Norga)",
        language: xn,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [LD, hN, iN, MD, ND, OD, PD],
                    namesAbbr: [QD, jN, "maŋ", yr, zr, RD, Ar],
                    namesShort: [bg, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [SD, TD, UD, VD, WD, XD, YD, ZD, aE, bE, cE, dE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                monthsGenitive: {
                    names: [eE, fE, gE, hE, iE, jE, kE, lE, mE, nE, oE, pE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f[WQ]);
    a.calendar = a.calendars.standard;
    a = f[XQ] = d.extend(c, {}, j, {
        name: XQ,
        englishName: "Malay (Malaysia)",
        nativeName: "Bahasa Melayu (Malaysia)",
        language: uE,
        numberFormat: {
            currency: {
                decimals: 0,
                symbol: "RM"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [To, Lt, zw, Un, Mt, Nt, Vn],
                    namesAbbr: [To, Lt, Aw, Un, Mt, Nt, Vn],
                    namesShort: [qd, oe, Eb, pg, Ml, Cm, Eb]
                },
                months: {
                    names: [rr, sr, wq, Kl, Jg, gf, xq, Ot, Tk, Ll, nm, kN, b],
                    namesAbbr: [ne, ng, wq, We, Jg, gf, dg, Ot, Nw, Bd, Dg, yq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: G,
                    D: Qb,
                    t: B,
                    T: z,
                    f: Bw,
                    F: Cw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[XQ]);
    a.calendar = a.calendars.standard;
    a = f[YQ] = d.extend(c, {}, j, {
        name: YQ,
        englishName: "Kazakh (Kazakhstan)",
        nativeName: "Қазақ (Қазақстан)",
        language: "kk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [ud, Pb],
                ",": n,
                ".": rb,
                symbol: "Т"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Rbb, Sbb, Tbb, Ubb, Vbb, "Жұма", "Сенбі"],
                    namesAbbr: [vE, wE, xE, sl, zq, Aq, yE],
                    namesShort: [vE, wE, xE, sl, zq, Aq, yE]
                },
                months: {
                    names: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", Wbb, "қазан", "қараша", Xbb, b],
                    namesAbbr: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Ybb,
                    t: B,
                    T: z,
                    f: Zbb,
                    F: acb,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[YQ]);
    a.calendar = a.calendars.standard;
    a = f[ZQ] = d.extend(c, {}, j, {
        name: ZQ,
        englishName: "Kyrgyz (Kyrgyzstan)",
        nativeName: "Кыргыз (Кыргызстан)",
        language: "ky",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": rb,
                symbol: "сом"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [bcb, ccb, dcb, ecb, fcb, "Жума", "Ишемби"],
                    namesAbbr: [zE, fm, Bq, Cq, AE, Aq, BE],
                    namesShort: [zE, fm, Bq, Cq, AE, Aq, BE]
                },
                months: {
                    names: [rA, Ds, om, Es, Id, Ep, Fp, pm, Fs, Gs, Hs, Is, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: gcb,
                    t: B,
                    T: z,
                    f: hcb,
                    F: icb,
                    M: Rb,
                    Y: jcb
                }
            })
        }
    }, f[ZQ]);
    a.calendar = a.calendars.standard;
    a = f[aR] = d.extend(c, {}, j, {
        name: aR,
        englishName: Ijb,
        nativeName: Ijb,
        language: "sw",
        numberFormat: {
            currency: {
                symbol: Eb
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [lcb, mcb, "Jumanne", ncb, ocb, "Ijumaa", pcb],
                    namesAbbr: ["Jumap.", CE, "Juman.", CE, "Alh.", "Iju.", "Jumam."],
                    namesShort: [Uk, md, Ze, md, qd, oe, ag]
                },
                months: {
                    names: [rr, sr, "Machi", "Aprili", Jg, xm, xq, "Agosti", qcb, "Oktoba", "Novemba", "Decemba", b],
                    namesAbbr: [ne, ng, wq, We, Jg, gf, dg, "Ago", Wl, Bd, Dg, "Dec", b]
                }
            })
        }
    }, f[aR]);
    a.calendar = a.calendars.standard;
    a = f[bR] = d.extend(c, {}, j, {
        name: bR,
        englishName: "Turkmen (Turkmenistan)",
        nativeName: "türkmençe (Türkmenistan)",
        language: "tk",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "m."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Duşenbe", "Sişenbe", rcb, scb, "Anna", "Şenbe", tcb],
                    namesAbbr: ["Db", "Sb", "Çb", "Pb", pC, "Şb", "Ýb"],
                    namesShort: [un, Eb, Xp, Uk, qd, Zp, "Ý"]
                },
                months: {
                    names: ["Ýanwar", "Fewral", zo, Iw, DE, EE, FE, "Awgust", ucb, "Oktýabr", "Noýabr", Jw, b],
                    namesAbbr: ["Ýan", "Few", zo, We, DE, EE, FE, "Awg", Wn, Bd, "Not", aq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: vcb,
                    t: B,
                    T: z,
                    f: wcb,
                    F: xcb,
                    Y: ycb
                }
            })
        }
    }, f[bR]);
    a.calendar = a.calendars.standard;
    a = f[cR] = d.extend(c, {}, j, {
        name: cR,
        englishName: "Uzbek (Latin, Uzbekistan)",
        nativeName: "U'zbek (U'zbekiston Respublikasi)",
        language: hx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                decimals: 0,
                ",": n,
                ".": g,
                symbol: lN
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [mN, nN, oN, pN, qN, rN, sN],
                    namesAbbr: [tN, uN, vN, wN, xN, "jm.", "sh."],
                    namesShort: ["ya", pe, bg, Hw, Yk, "j", "sh"]
                },
                months: {
                    names: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b],
                    namesAbbr: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: yN,
                    D: zN,
                    t: J,
                    T: I,
                    f: AN,
                    F: BN,
                    M: Ow,
                    Y: w
                }
            })
        }
    }, f[cR]);
    a.calendar = a.calendars.standard;
    a = f[dR] = d.extend(c, {}, j, {
        name: dR,
        englishName: "Tatar (Russia)",
        nativeName: "Татар (Россия)",
        language: "tt",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Cs
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Якшәмбе", GE, "Сишәмбе", zcb, Acb, "Җомга", "Шимбә"],
                    namesAbbr: ["Якш", "Дүш", "Сиш", "Чәрш", "Пәнҗ", "Җом", "Шим"],
                    namesShort: ["Я", "Д", "С", Pt, "П", "Җ", Qt]
                },
                months: {
                    names: ["Гыйнвар", Ds, om, Es, Id, Ep, Fp, pm, Fs, Gs, Hs, Is, b],
                    namesAbbr: ["Гыйн.", "Фев.", "Мар.", "Апр.", Id, Ep, Fp, "Авг.", "Сен.", "Окт.", "Нояб.", "Дек.", b]
                },
                monthsGenitive: {
                    names: [Bcb, Ccb, "Мартның", Dcb, HE, IE, JE, Ecb, Fcb, Gcb, Hcb, Icb, b],
                    namesAbbr: [Jcb, Kcb, Lcb, Mcb, HE, IE, JE, Ncb, Ocb, Pcb, Qcb, Rcb, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[dR]);
    a.calendar = a.calendars.standard;
    a = f[eR] = d.extend(c, {}, j, {
        name: eR,
        englishName: "Bengali (India)",
        nativeName: "বাংলা (ভারত)",
        language: KE,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [Jd, nd],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "টা"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                ":": i,
                firstDay: 1,
                days: {
                    names: [CN, DN, EN, FN, GN, HN, IN],
                    namesAbbr: [JN, Pw, Qw, Rw, KN, Sw, Tw],
                    namesShort: ["র", "স", "ম", Rt, Rt, Dq, Dq]
                },
                months: {
                    names: [LN, MN, jo, ko, lo, mo, no, NN, ON, Uw, PN, QN, b],
                    namesAbbr: [RN, SN, jo, ko, lo, mo, no, "আগ.", TN, UN, VN, WN, b]
                },
                AM: [Uo, Uo, Uo],
                PM: [Vo, Vo, Vo],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: Vw,
                    T: Ww,
                    f: Xw,
                    F: Yw,
                    M: o
                }
            })
        }
    }, f[eR]);
    a.calendar = a.calendars.standard;
    a = f[fR] = d.extend(c, {}, j, {
        name: fR,
        englishName: "Punjabi (India)",
        nativeName: "ਪੰਜਾਬੀ (ਭਾਰਤ)",
        language: Zw,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ਰੁ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", Scb, Tcb],
                    namesAbbr: ["ਐਤ.", "ਸੋਮ.", "ਮੰਗਲ.", "ਬੁੱਧ.", "ਵੀਰ.", "ਸ਼ੁਕਰ.", "ਸ਼ਨਿੱਚਰ."],
                    namesShort: ["ਐ", "ਸ", "ਮ", "ਬ", "ਵ", "ਸ਼", "ਸ਼"]
                },
                months: {
                    names: [LE, ME, NE, OE, PE, QE, RE, SE, TE, UE, VE, WE, b],
                    namesAbbr: [LE, ME, NE, OE, PE, QE, RE, SE, TE, UE, VE, WE, b]
                },
                AM: [St, St, St],
                PM: [Tt, Tt, Tt],
                patterns: {
                    d: Pl,
                    D: ft,
                    t: XE,
                    T: YE,
                    f: Ucb,
                    F: Vcb,
                    M: o
                }
            })
        }
    }, f[fR]);
    a.calendar = a.calendars.standard;
    a = f[gR] = d.extend(c, {}, j, {
        name: gR,
        englishName: "Gujarati (India)",
        nativeName: "ગુજરાતી (ભારત)",
        language: "gu",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "રૂ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", Wcb, "શનિવાર"],
                    namesAbbr: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
                    namesShort: ["ર", "સ", "મ", "બ", "ગ", "શ", "શ"]
                },
                months: {
                    names: [Xcb, Ycb, ZE, aF, bF, cF, dF, eF, Zcb, "ઑક્ટ્બર", "નવેમ્બર", adb, b],
                    namesAbbr: ["જાન્યુ", "ફેબ્રુ", ZE, aF, bF, cF, dF, eF, "સપ્ટે", "ઑક્ટો", "નવે", "ડિસે", b]
                },
                AM: [Ut, Ut, Ut],
                PM: [Vt, Vt, Vt],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[gR]);
    a.calendar = a.calendars.standard;
    a = f[hR] = d.extend(c, {}, j, {
        name: hR,
        englishName: "Oriya (India)",
        nativeName: "ଓଡ଼ିଆ (ଭାରତ)",
        language: Mw,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ଟ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: ["ରବିବାର", "ସୋମବାର", bdb, "ବୁଧବାର", "ଗୁରୁବାର", cdb, "ଶନିବାର"],
                    namesAbbr: ["ରବି.", "ସୋମ.", "ମଙ୍ଗଳ.", "ବୁଧ.", "ଗୁରୁ.", "ଶୁକ୍ର.", "ଶନି."],
                    namesShort: ["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"]
                },
                months: {
                    names: [fF, gF, hF, iF, jF, kF, lF, mF, nF, oF, pF, qF, b],
                    namesAbbr: [fF, gF, hF, iF, jF, kF, lF, mF, nF, oF, pF, qF, b]
                },
                eras: [{
                    name: ddb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[hR]);
    a.calendar = a.calendars.standard;
    a = f[iR] = d.extend(c, {}, j, {
        name: iR,
        englishName: "Tamil (India)",
        nativeName: "தமிழ் (இந்தியா)",
        language: ax,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ரூ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [edb, fdb, gdb, hdb, idb, jdb, kdb],
                    namesAbbr: ["ஞாயிறு", "திங்கள்", ldb, "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
                    namesShort: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"]
                },
                months: {
                    names: [rF, sF, tF, uF, vF, wF, xF, yF, zF, AF, BF, CF, b],
                    namesAbbr: [rF, sF, tF, uF, vF, wF, xF, yF, zF, AF, BF, CF, b]
                },
                AM: [Wt, Wt, Wt],
                PM: [Xt, Xt, Xt],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[iR]);
    a.calendar = a.calendars.standard;
    a = f[jR] = d.extend(c, {}, j, {
        name: jR,
        englishName: "Telugu (India)",
        nativeName: "తెలుగు (భారత దేశం)",
        language: "te",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "రూ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ఆదివారం", "సోమవారం", mdb, "బుధవారం", ndb, odb, "శనివారం"],
                    namesAbbr: ["ఆది.", "సోమ.", "మంగళ.", "బుధ.", "గురు.", "శుక్ర.", "శని."],
                    namesShort: ["ఆ", "సో", "మం", "బు", "గు", "శు", "శ"]
                },
                months: {
                    names: [DF, EF, FF, GF, HF, IF, JF, KF, LF, MF, NF, OF, b],
                    namesAbbr: [DF, EF, FF, GF, HF, IF, JF, KF, LF, MF, NF, OF, b]
                },
                AM: [Yt, Yt, Yt],
                PM: [Zt, Zt, Zt],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[jR]);
    a.calendar = a.calendars.standard;
    a = f[kR] = d.extend(c, {}, j, {
        name: kR,
        englishName: "Kannada (India)",
        nativeName: "ಕನ್ನಡ (ಭಾರತ)",
        language: ww,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ರೂ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", pdb, "ಶನಿವಾರ"],
                    namesAbbr: ["ಭಾನು.", "ಸೋಮ.", "ಮಂಗಳ.", "ಬುಧ.", "ಗುರು.", "ಶುಕ್ರ.", "ಶನಿ."],
                    namesShort: ["ರ", "ಸ", "ಮ", "ಬ", "ಗ", "ಶ", "ಶ"]
                },
                months: {
                    names: [PF, QF, RF, SF, TF, UF, VF, WF, XF, YF, ZF, aG, b],
                    namesAbbr: [PF, QF, RF, SF, TF, UF, VF, WF, XF, YF, ZF, aG, b]
                },
                AM: [au, au, au],
                PM: [bu, bu, bu],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[kR]);
    a.calendar = a.calendars.standard;
    a = f[lR] = d.extend(c, {}, j, {
        name: lR,
        englishName: "Malayalam (India)",
        nativeName: "മലയാളം (ഭാരതം)",
        language: "ml",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [Jd, nd],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "ക"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                ":": i,
                firstDay: 1,
                days: {
                    names: [qdb, rdb, sdb, tdb, udb, vdb, wdb],
                    namesAbbr: ["ഞായർ.", "തിങ്കൾ.", "ചൊവ്വ.", "ബുധൻ.", "വ്യാഴം.", "വെള്ളി.", "ശനി."],
                    namesShort: ["ഞ", "ത", "ച", "ബ", "വ", "വെ", "ശ"]
                },
                months: {
                    names: [bG, cG, dG, eG, fG, gG, hG, iG, jG, kG, lG, mG, b],
                    namesAbbr: [bG, cG, dG, eG, fG, gG, hG, iG, jG, kG, lG, mG, b]
                },
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: Vw,
                    T: Ww,
                    f: Xw,
                    F: Yw,
                    M: o
                }
            })
        }
    }, f[lR]);
    a.calendar = a.calendars.standard;
    a = f[mR] = d.extend(c, {}, j, {
        name: mR,
        englishName: "Assamese (India)",
        nativeName: "অসমীয়া (ভাৰত)",
        language: Lw,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, yg],
                groupSizes: [3, 2],
                symbol: "ট"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["সোমবাৰ", xdb, "বুধবাৰ", ydb, zdb, "শনিবাৰ", "ৰবিবাৰ"],
                    namesAbbr: [Pw, Qw, Rw, "বৃহ.", Sw, Tw, "ৰবি."],
                    namesShort: ["সো", "ম", "বু", "বৃ", "শু", Dq, "র"]
                },
                months: {
                    names: [Adb, Bdb, jo, ko, lo, mo, no, nG, Cdb, Uw, "নবেম্বর", Ddb, b],
                    namesAbbr: ["জানু", "ফেব্রু", jo, ko, lo, mo, no, nG, "চেপ্টে", "অক্টো", "নবে", "ডিচে", b]
                },
                AM: [cu, cu, cu],
                PM: [du, du, du],
                eras: [{
                    name: Edb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Hd,
                    D: Fdb,
                    t: uo,
                    T: or,
                    f: Gdb,
                    F: Hdb,
                    M: o,
                    Y: "MMMM,yy"
                }
            })
        }
    }, f[mR]);
    a.calendar = a.calendars.standard;
    a = f[nR] = d.extend(c, {}, j, {
        name: nR,
        englishName: "Marathi (India)",
        nativeName: "मराठी (भारत)",
        language: "mr",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [FD, Et, "मंगळवार", eq, GD, Ft, Gt],
                    namesAbbr: [HD, Ht, oG, It, ID, JD, KD],
                    namesShort: [Jt, Zn, ao, bo, Kt, Hl, Hl]
                },
                months: {
                    names: [eu, fu, sg, Eq, Um, tg, Fq, Gq, gu, hu, Idb, iu, b],
                    namesAbbr: ["जाने.", "फेब्रु.", sg, Eq, Um, tg, Fq, Gq, "सप्टें.", "ऑक्टो.", Jdb, "डिसें.", b]
                },
                AM: [Vm, Vm, Vm],
                PM: [Wm, Wm, Wm],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[nR]);
    a.calendar = a.calendars.standard;
    a = f[oR] = d.extend(c, {}, j, {
        name: oR,
        englishName: "Sanskrit (India)",
        nativeName: "संस्कृत (भारतम्)",
        language: ic,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [pG, qG, rG, sG, tG, uG, vG],
                    namesAbbr: [pG, qG, rG, sG, tG, uG, vG],
                    namesShort: [Jt, Zn, ao, bo, Kt, Hl, Hl]
                },
                months: {
                    names: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b],
                    namesAbbr: [co, fq, sg, gq, hq, tg, Qm, eo, iq, jq, kq, lq, b]
                },
                AM: [Rm, Rm, Rm],
                PM: [Sm, Sm, Sm],
                patterns: {
                    d: Hd,
                    D: ft,
                    t: J,
                    T: I,
                    f: oB,
                    F: pB,
                    M: o
                }
            })
        }
    }, f[oR]);
    a.calendar = a.calendars.standard;
    a = f[pR] = d.extend(c, {}, j, {
        name: pR,
        englishName: "Mongolian (Cyrillic, Mongolia)",
        nativeName: "Монгол хэл (Монгол улс)",
        language: ix,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "₮"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Ням", XN, YN, ZN, aO, bO, cO],
                    namesAbbr: [ju, ku, lu, mu, nu, ou, pu],
                    namesShort: [ju, ku, lu, mu, nu, ou, pu]
                },
                months: {
                    names: [dO, eO, fO, gO, hO, iO, jO, kO, lO, mO, nO, oO, b],
                    namesAbbr: [oe, qu, ru, su, Xl, tu, uu, vu, wu, xu, yu, zu, b]
                },
                monthsGenitive: {
                    names: [pO, qO, rO, sO, tO, uO, vO, wO, xO, yO, zO, AO, b],
                    namesAbbr: [oe, qu, ru, su, Xl, tu, uu, vu, wu, xu, yu, zu, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: BO,
                    D: CO,
                    t: B,
                    T: z,
                    f: DO,
                    F: EO,
                    M: Rb,
                    Y: FO
                }
            })
        }
    }, f[pR]);
    a.calendar = a.calendars.standard;
    a = f[qR] = d.extend(c, {}, j, {
        name: qR,
        englishName: "Tibetan (PRC)",
        nativeName: "བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)",
        language: "bo",
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [jc, Pb],
                groupSizes: [3, 0],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Ldb, Mdb, Ndb, Odb, Pdb, Qdb, Rdb],
                    namesAbbr: ["ཉི་མ།", "ཟླ་བ།", Sdb, "ལྷག་པ།", "ཕུར་བུ།", "པ་སངས།", "སྤེན་པ།"],
                    namesShort: ["༧", "༡", "༢", "༣", "༤", "༥", "༦"]
                },
                months: {
                    names: [Tdb, Udb, Vdb, Wdb, Xdb, Ydb, Zdb, aeb, beb, ceb, deb, eeb, b],
                    namesAbbr: ["ཟླ་ ༡", "ཟླ་ ༢", "ཟླ་ ༣", "ཟླ་ ༤", "ཟླ་ ༥", "ཟླ་ ༦", "ཟླ་ ༧", "ཟླ་ ༨", "ཟླ་ ༩", "ཟླ་ ༡༠", "ཟླ་ ༡༡", "ཟླ་ ༡༢", b]
                },
                AM: [Au, Au, Au],
                PM: [Bu, Bu, Bu],
                eras: [{
                    name: "སྤྱི་ལོ",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: feb,
                    t: J,
                    T: I,
                    f: geb,
                    F: heb,
                    M: ieb,
                    Y: "yyyy.M"
                }
            })
        }
    }, f[qR]);
    a.calendar = a.calendars.standard;
    a = f[rR] = d.extend(c, {}, j, {
        name: rR,
        englishName: "Welsh (United Kingdom)",
        nativeName: "Cymraeg (y Deyrnas Unedig)",
        language: bx,
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [ud, Pb],
                symbol: "£"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [jeb, keb, leb, meb, neb, oeb, peb],
                    namesAbbr: [Hq, "Llun", wG, "Mer", "Iau", "Gwe", "Sad"],
                    namesShort: [Cu, "Ll", Rn, Du, "Ia", xG, ff]
                },
                months: {
                    names: ["Ionawr", qeb, "Mawrth", "Ebrill", me, "Mehefin", reb, "Awst", "Medi", "Hydref", seb, "Rhagfyr", b],
                    namesAbbr: ["Ion", "Chwe", wG, "Ebr", me, "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag", b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: G,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[rR]);
    a.calendar = a.calendars.standard;
    a = f[sR] = d.extend(c, {}, j, {
        name: sR,
        englishName: "Khmer (Cambodia)",
        nativeName: "ខ្មែរ (កម្ពុជា)",
        language: "km",
        numberFormat: {
            pattern: [vw],
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [Nl, yg],
                symbol: "៛"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [teb, ueb, veb, "ថ្ងៃពុធ", web, xeb, yeb],
                    namesAbbr: ["អាទិ.", "ច.", "អ.", yG, "ព្រហ.", "សុ.", "ស."],
                    namesShort: ["អា", "ច", "អ", yG, "ព្", "សុ", "ស"]
                },
                months: {
                    names: ["មករា", "កុម្ភៈ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", zeb, "ធ្នូ", b],
                    namesAbbr: ["១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩", "១០", "១១", "១២", b]
                },
                AM: [Xm, Xm, Xm],
                PM: [Ym, Ym, Ym],
                eras: [{
                    name: "មុនគ.ស.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: og,
                    D: Hf,
                    t: Eu,
                    T: I,
                    f: Aeb,
                    F: wo,
                    M: Beb,
                    Y: Ceb
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [Xm, Xm, Xm],
                PM: [Ym, Ym, Ym],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: Eu,
                    T: I,
                    f: Deb,
                    F: Eeb
                }
            })
        }
    }, f[sR]);
    a.calendar = a.calendars.standard;
    a = f[tR] = d.extend(c, {}, j, {
        name: tR,
        englishName: "Lao (Lao P.D.R.)",
        nativeName: "ລາວ (ສ.ປ.ປ. ລາວ)",
        language: "lo",
        numberFormat: {
            pattern: ["(n)"],
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            },
            currency: {
                pattern: ["(n$)", yg],
                groupSizes: [3, 0],
                symbol: "₭"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Feb, "ວັນຈັນ", Geb, "ວັນພຸດ", Heb, "ວັນສຸກ", "ວັນເສົາ"],
                    namesAbbr: ["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"],
                    namesShort: ["ອ", "ຈ", "ອ", "ພ", "ພ", "ສ", "ເ"]
                },
                months: {
                    names: [zG, AG, BG, CG, DG, EG, FG, GG, HG, IG, JG, KG, b],
                    namesAbbr: [zG, AG, BG, CG, DG, EG, FG, GG, HG, IG, JG, KG, b]
                },
                AM: [Fu, Fu, Fu],
                PM: [Gu, Gu, Gu],
                patterns: {
                    d: G,
                    D: Qb,
                    t: Eu,
                    T: I,
                    f: Ieb,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[tR]);
    a.calendar = a.calendars.standard;
    a = f[uR] = d.extend(c, {}, j, {
        name: uR,
        englishName: "Galician (Galician)",
        nativeName: "galego (galego)",
        language: "gl",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Od, LG, Xe, Jeb, "xoves", "venres", Pd],
                    namesAbbr: [td, LG, U, "mér", "xov", iw, Qd],
                    namesShort: [id, Bb, Z, "mé", "xo", lc, jf]
                },
                months: {
                    names: ["xaneiro", Keb, Rd, sd, As, "xuño", "xullo", Dd, fA, gA, hA, Leb, b],
                    namesAbbr: ["xan", ub, U, Gd, As, "xuñ", "xull", Ed, po, iA, vb, oc, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[uR]);
    a.calendar = a.calendars.standard;
    a = f[vR] = d.extend(c, {}, j, {
        name: vR,
        englishName: "Konkani (India)",
        nativeName: "कोंकणी (भारत)",
        language: "kok",
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["आयतार", "सोमार", "मंगळार", eq, Meb, "सुक्रार", "शेनवार"],
                    namesAbbr: ["आय.", Ht, oG, It, "बिरे.", "सुक्र.", "शेन."],
                    namesShort: ["आ", Zn, ao, bo, bo, Zn, Hl]
                },
                months: {
                    names: [eu, fu, sg, Eq, Um, tg, Fq, Gq, gu, hu, MG, iu, b],
                    namesAbbr: [eu, fu, sg, Eq, Um, tg, Fq, Gq, gu, hu, MG, iu, b]
                },
                AM: [Vm, Vm, Vm],
                PM: [Wm, Wm, Wm],
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[vR]);
    a.calendar = a.calendars.standard;
    a = f[wR] = d.extend(c, {}, j, {
        name: wR,
        englishName: "Syriac (Syria)",
        nativeName: "ܣܘܪܝܝܐ (سوريا)",
        language: "syr",
        isRTL: c,
        numberFormat: {
            currency: {
                pattern: [Ud, F],
                symbol: GO
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: ["ܚܕ ܒܫܒܐ", Neb, Oeb, Peb, Qeb, "ܥܪܘܒܬܐ", "ܫܒܬܐ"],
                    namesAbbr: ["܏ܐ ܏ܒܫ", "܏ܒ ܏ܒܫ", "܏ܓ ܏ܒܫ", "܏ܕ ܏ܒܫ", "܏ܗ ܏ܒܫ", "܏ܥܪܘܒ", "܏ܫܒ"],
                    namesShort: ["ܐ", "ܒ", "ܓ", "ܕ", "ܗ", "ܥ", "ܫ"]
                },
                months: {
                    names: [Reb, NG, OG, PG, QG, RG, SG, TG, UG, Seb, Teb, Ueb, b],
                    namesAbbr: ["܏ܟܢ ܏ܒ", NG, OG, PG, QG, RG, SG, TG, UG, "܏ܬܫ ܏ܐ", "܏ܬܫ ܏ܒ", "܏ܟܢ ܏ܐ", b]
                },
                AM: [Hu, Hu, Hu],
                PM: [Iu, Iu, Iu],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            })
        }
    }, f[wR]);
    a.calendar = a.calendars.standard;
    a = f[xR] = d.extend(c, {}, j, {
        name: xR,
        englishName: "Sinhala (Sri Lanka)",
        nativeName: "සිංහල (ශ්‍රී ලංකා)",
        language: cx,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [sm, F],
                symbol: "රු."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [VG, WG, Veb, "බදාදා", Web, Xeb, Yeb],
                    namesAbbr: [VG, WG, "කුජදා", "බුදදා", "ගුරුදා", "කිවිදා", "ශනිදා"],
                    namesShort: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"]
                },
                months: {
                    names: ["ජනවාරි", Zeb, "මාර්තු", afb, "මැයි", "ජූනි", "ජූලි", bfb, cfb, dfb, efb, ffb, b],
                    namesAbbr: ["ජන.", "පෙබ.", "මාර්තු.", gfb, "මැයි.", "ජූනි.", "ජූලි.", "අගෝ.", "සැප්.", "ඔක්.", "නොවැ.", "දෙසැ.", b]
                },
                AM: [Ju, Ju, Ju],
                PM: [Ku, Ku, Ku],
                eras: [{
                    name: hfb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: og,
                    D: ifb,
                    f: jfb,
                    F: kfb,
                    Y: lfb
                }
            })
        }
    }, f[xR]);
    a.calendar = a.calendars.standard;
    a = f[yR] = d.extend(c, {}, j, {
        name: yR,
        englishName: "Inuktitut (Syllabics, Canada)",
        nativeName: "ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)",
        language: jx,
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["ᓈᑦᑏᖑᔭ", "ᓇᒡᒐᔾᔭᐅ", "ᐊᐃᑉᐱᖅ", "ᐱᖓᑦᓯᖅ", "ᓯᑕᒻᒥᖅ", "ᑕᓪᓕᕐᒥᖅ", gK],
                    namesAbbr: ["ᓈᑦᑏ", "ᓇᒡᒐ", "ᐊᐃᑉᐱ", "ᐱᖓᑦᓯ", "ᓯᑕ", "ᑕᓪᓕ", gK],
                    namesShort: ["ᓈ", "ᓇ", "ᐊ", "ᐱ", "ᓯ", "ᑕ", "ᓯ"]
                },
                months: {
                    names: ["ᔮᓐᓄᐊᕆ", "ᕖᕝᕗᐊᕆ", hK, iK, jK, kK, lK, "ᐋᒡᒌᓯ", "ᓯᑎᐱᕆ", "ᐅᑐᐱᕆ", "ᓄᕕᐱᕆ", "ᑎᓯᐱᕆ", b],
                    namesAbbr: ["ᔮᓐᓄ", "ᕖᕝᕗ", hK, iK, jK, kK, lK, "ᐋᒡᒌ", "ᓯᑎᐱ", "ᐅᑐᐱ", "ᓄᕕᐱ", "ᑎᓯᐱ", b]
                },
                patterns: {
                    d: hf,
                    D: Jjb,
                    f: Kjb,
                    F: Ljb,
                    Y: iH
                }
            })
        }
    }, f[yR]);
    a.calendar = a.calendars.standard;
    a = f[zR] = d.extend(c, {}, j, {
        name: zR,
        englishName: "Amharic (Ethiopia)",
        nativeName: "አማርኛ (ኢትዮጵያ)",
        language: "am",
        numberFormat: {
            decimals: 1,
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                decimals: 1,
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [ud, Pb],
                groupSizes: [3, 0],
                symbol: "ETB"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [XG, YG, "ማክሰኞ", ZG, aH, bH, cH],
                    namesAbbr: [XG, YG, "ማክሰ", ZG, aH, bH, cH],
                    namesShort: ["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"]
                },
                months: {
                    names: ["ጃንዩወሪ", "ፌብሩወሪ", dH, "ኤፕረል", eH, fH, gH, "ኦገስት", "ሴፕቴምበር", "ኦክተውበር", "ኖቬምበር", "ዲሴምበር", b],
                    namesAbbr: ["ጃንዩ", "ፌብሩ", dH, "ኤፕረ", eH, fH, gH, "ኦገስ", "ሴፕቴ", "ኦክተ", "ኖቬም", "ዲሴም", b]
                },
                AM: [Mu, Mu, Mu],
                PM: [Nu, Nu, Nu],
                eras: [{
                    name: mfb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: nfb,
                    f: ofb,
                    F: pfb,
                    M: qfb,
                    Y: w
                }
            })
        }
    }, f[zR]);
    a.calendar = a.calendars.standard;
    a = f[AR] = d.extend(c, {}, j, {
        name: AR,
        englishName: "Nepali (Nepal)",
        nativeName: "नेपाली (नेपाल)",
        language: ke,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [ud, Pb],
                symbol: Yn
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["आइतवार", Et, rfb, eq, "बिहीवार", Ft, Gt],
                    namesAbbr: ["आइत", "सोम", "मङ्गल", "बुध", "बिही", "शुक्र", "शनि"],
                    namesShort: ["आ", "सो", ao, "बु", "बि", "शु", Hl]
                },
                months: {
                    names: [co, sfb, sg, hH, Um, tg, Qm, eo, tfb, "अक्टोबर", ufb, vfb, b],
                    namesAbbr: ["जन", "फेब", sg, hH, Um, tg, Qm, "अग", "सेप्ट", "अक्ट", "नोभ", "डिस", b]
                },
                AM: [Wu, Wu, Wu],
                PM: [Xu, Xu, Xu],
                eras: [{
                    name: "a.d.",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    Y: iH
                }
            })
        }
    }, f[AR]);
    a.calendar = a.calendars.standard;
    a = f[BR] = d.extend(c, {}, j, {
        name: BR,
        englishName: "Frisian (Netherlands)",
        nativeName: "Frysk (Nederlân)",
        language: "fy",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["Snein", "Moandei", "Tiisdei", wfb, xfb, "Freed", "Sneon"],
                    namesAbbr: [jH, rl, "Ti", xD, "To", Cg, jH],
                    namesShort: [Eb, ag, md, Yu, md, Iq, Eb]
                },
                months: {
                    names: [yfb, zfb, ow, Oe, kH, Xr, "july", pw, Afb, pf, Bfb, Cfb, b],
                    namesAbbr: ["jann", "febr", qw, Ub, kH, wb, sb, Ve, gC, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Qz,
                    D: Gf,
                    t: B,
                    T: z,
                    f: rw,
                    F: sw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[BR]);
    a.calendar = a.calendars.standard;
    a = f[CR] = d.extend(c, {}, j, {
        name: CR,
        englishName: "Pashto (Afghanistan)",
        nativeName: "پښتو (افغانستان)",
        language: "ps",
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            ",": "،",
            ".": g,
            percent: {
                pattern: [lH, nd],
                ",": "،",
                ".": g
            },
            currency: {
                pattern: [Ud, Pb],
                ",": "٬",
                ".": "٫",
                symbol: "؋"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    f: gt,
                    F: ht,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [Jq, Lm, Kq, mH, Mm, wl, Nm],
                    namesAbbr: [Jq, Lm, Kq, mH, Mm, wl, Nm],
                    namesShort: [tt, Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [Lq, Mq, Nq, Oq, Pq, Dfb, Qq, Rq, Sq, Tq, nH, Uq, b],
                    namesAbbr: [Lq, Mq, Nq, Oq, Pq, "چنګا ښ", Qq, Rq, Sq, Tq, nH, Uq, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: oH,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: pH,
                    f: qH,
                    F: rH,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[CR]);
    a.calendar = a.calendars.standard;
    a = f[DR] = d.extend(c, {}, j, {
        name: DR,
        englishName: "Filipino (Philippines)",
        nativeName: "Filipino (Pilipinas)",
        language: "fil",
        numberFormat: {
            currency: {
                symbol: "PhP"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["Linggo", "Lunes", "Martes", Ffb, "Huebes", "Biernes", "Sabado"],
                    namesAbbr: ["Lin", Zu, Se, "Mier", "Hueb", "Bier", "Saba"],
                    namesShort: [yc, yc, ag, ag, Nn, Pm, Eb]
                },
                months: {
                    names: ["Enero", "Pebrero", "Marso", tP, sH, "Hunyo", "Hulyo", uP, Gfb, "Oktubre", Hfb, Ifb, b],
                    namesAbbr: [yA, "Peb", Se, dx, sH, "Hun", "Hul", "Agos", Nw, Bd, "Nob", yq, b]
                },
                eras: [{
                    name: Jfb,
                    start: e,
                    offset: 0
                }]
            })
        }
    }, f[DR]);
    a.calendar = a.calendars.standard;
    a = f[ER] = d.extend(c, {}, j, {
        name: ER,
        englishName: "Divehi (Maldives)",
        nativeName: "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)",
        language: Tv,
        isRTL: c,
        numberFormat: {
            currency: {
                pattern: ["n $-", E],
                symbol: "ރ."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Vd,
                days: {
                    names: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesAbbr: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesShort: [tH, uH, vH, cr, cr, wH, xH]
                },
                months: {
                    names: [yH, zH, AH, BH, CH, DH, EH, FH, GH, HH, IH, JH, b],
                    namesAbbr: [yH, zH, AH, BH, CH, DH, EH, FH, GH, HH, IH, JH, b]
                },
                AM: [Zm, Zm, Zm],
                PM: [an, an, an],
                eras: [{
                    name: "ހިޖްރީ",
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: J,
                    T: I,
                    f: Kfb,
                    F: Lfb,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                days: {
                    names: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesAbbr: [Vq, Wq, Xq, Yq, Zq, ar, br],
                    namesShort: [tH, uH, vH, cr, cr, wH, xH]
                },
                months: {
                    names: [KH, LH, MH, NH, OH, PH, QH, RH, SH, TH, UH, VH, b],
                    namesAbbr: [KH, LH, MH, NH, OH, PH, QH, RH, SH, TH, UH, VH, b]
                },
                AM: [Zm, Zm, Zm],
                PM: [an, an, an],
                eras: [{
                    name: "މީލާދީ",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Vb,
                    D: Mfb,
                    t: J,
                    T: I,
                    f: Nfb,
                    F: Ofb,
                    Y: Pfb
                }
            })
        }
    }, f[ER]);
    a.calendar = a.calendars.standard;
    a = f[FR] = d.extend(c, {}, j, {
        name: FR,
        englishName: "Hausa (Latin, Nigeria)",
        nativeName: "Hausa (Nigeria)",
        language: kx,
        numberFormat: {
            currency: {
                pattern: [jc, F],
                symbol: Ze
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [wP, xP, yP, zP, AP, BP, CP],
                    namesAbbr: ["Lah", "Lit", Lu, "Lar", "Alh", "Jum", "Asa"],
                    namesShort: [yc, yc, md, yc, qd, Cm, qd]
                },
                months: {
                    names: [DP, EP, FP, GP, Ru, HP, IP, JP, KP, LP, MP, NP, b],
                    namesAbbr: [ne, ng, Se, "Afr", Vk, Su, Tu, "Agu", xr, Bd, "Nuw", yq, b]
                },
                AM: [OP, PP, QP],
                PM: [RP, SP, TP],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf
                }
            })
        }
    }, f[FR]);
    a.calendar = a.calendars.standard;
    a = f[GR] = d.extend(c, {}, j, {
        name: GR,
        englishName: Mjb,
        nativeName: Mjb,
        language: "yo",
        numberFormat: {
            currency: {
                pattern: [jc, F],
                symbol: Ze
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [WH, dr, XH, YH, ZH, er, aI],
                    namesAbbr: [bI, dr, cI, fr, fr, er, dI],
                    namesShort: [qd, qd, oe, gr, gr, Sp, qd]
                },
                months: {
                    names: [Qfb, Rfb, Sfb, Tfb, Ufb, Vfb, Wfb, Xfb, Yfb, Zfb, agb, bgb, b],
                    namesAbbr: ["kin.", av, "ket.", eI, "kar.", "kef.", av, av, "kes.", "kew.", "kok.", eI, b]
                },
                AM: ["Owuro", "owuro", "OWURO"],
                PM: ["Ale", "ale", "ALE"],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf
                }
            })
        }
    }, f[GR]);
    a.calendar = a.calendars.standard;
    a = f[HR] = d.extend(c, {}, j, {
        name: HR,
        englishName: "Quechua (Bolivia)",
        nativeName: "runasimi (Qullasuyu)",
        language: ex,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g,
                symbol: "$b"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [fI, gI, hI, iI, jI, kI, lI],
                    namesAbbr: [mI, nI, oI, pI, qI, rI, sI],
                    namesShort: [pe, oo, Cr, cg, "h", gm, oo]
                },
                months: {
                    names: [tI, uI, vI, wI, xI, yI, zI, AI, BI, CI, DI, EI, b],
                    namesAbbr: [FI, GI, HI, II, JI, KI, LI, MI, NI, bv, OI, PI, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    Y: jd
                }
            })
        }
    }, f[HR]);
    a.calendar = a.calendars.standard;
    a = f[IR] = d.extend(c, {}, j, {
        name: IR,
        englishName: "Sesotho sa Leboa (South Africa)",
        nativeName: "Sesotho sa Leboa (Afrika Borwa)",
        language: "nso",
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [jc, F],
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [dgb, egb, mD, nD, oD, fgb, ggb],
                    namesAbbr: ["Lam", "Moš", "Lbb", "Lbr", "Lbn", "Lbh", "Mok"],
                    namesShort: [yc, ag, yc, yc, yc, yc, ag]
                },
                months: {
                    names: [hgb, "Hlakola", "Mopitlo", rD, igb, jgb, "Phuphu", "Phato", "Lewedi", kgb, lgb, mgb, b],
                    namesAbbr: ["Pher", "Hlak", "Mop", "Mor", "Mos", "Ngwat", "Phup", "Phat", "Lew", "Dip", "Dib", "Man", b]
                },
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[IR]);
    a.calendar = a.calendars.standard;
    a = f[JR] = d.extend(c, {}, j, {
        name: JR,
        englishName: "Bashkir (Russia)",
        nativeName: "Башҡорт (Россия)",
        language: "ba",
        numberFormat: {
            ",": n,
            ".": g,
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                groupSizes: [3, 0],
                ",": n,
                ".": g,
                symbol: "һ."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [ngb, GE, "Шишәмбе", ogb, "Кесаҙна", "Йома", "Шәмбе"],
                    namesAbbr: [QI, fm, Bq, Cq, RI, SI, TI],
                    namesShort: [QI, fm, Bq, Cq, RI, SI, TI]
                },
                months: {
                    names: ["ғинуар", "февраль", vg, "апрель", Sl, "июнь", "июль", Pk, pgb, "октябрь", "ноябрь", "декабрь", b],
                    namesAbbr: ["ғин", Gp, Ol, Qk, Sl, Hp, Ip, Rk, Js, Sk, Ks, Bn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: qgb,
                    t: B,
                    T: z,
                    f: rgb,
                    F: sgb,
                    Y: w
                }
            })
        }
    }, f[JR]);
    a.calendar = a.calendars.standard;
    a = f[KR] = d.extend(c, {}, j, {
        name: KR,
        englishName: "Luxembourgish (Luxembourg)",
        nativeName: "Lëtzebuergesch (Luxembourg)",
        language: "lb",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Sonndeg", "Méindeg", tgb, ugb, vgb, "Freideg", wgb],
                    namesAbbr: [wD, "Méi", "Dën", "Mët", "Don", "Fre", UI],
                    namesShort: [mg, "Mé", "Dë", xA, Bg, Cg, ff]
                },
                months: {
                    names: [nr, gp, "Mäerz", "Abrëll", VI, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: [ne, ng, "Mäe", dx, VI, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: "n. Chr",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[KR]);
    a.calendar = a.calendars.standard;
    a = f[LR] = d.extend(c, {}, j, {
        name: LR,
        englishName: "Greenlandic (Greenland)",
        nativeName: "kalaallisut (Kalaallit Nunaat)",
        language: "kl",
        numberFormat: {
            ",": i,
            ".": g,
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 0],
                ",": i,
                ".": g,
                symbol: fp
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["sapaat", xgb, ygb, zgb, Agb, Bgb, Cgb],
                    namesAbbr: ["sap", "ata", U, "ping", "sis", "tal", "arf"],
                    namesShort: [ic, "at", Z, Kp, cx, ax, gg]
                },
                months: {
                    names: [wp, xp, "martsi", "apriili", "maaji", jg, kg, "aggusti", Dgb, Egb, Fgb, Ggb, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[LR]);
    a.calendar = a.calendars.standard;
    a = f[MR] = d.extend(c, {}, j, {
        name: MR,
        englishName: Njb,
        nativeName: Njb,
        language: Kw,
        numberFormat: {
            currency: {
                pattern: [jc, F],
                symbol: Ze
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [WH, dr, XH, YH, ZH, er, aI],
                    namesAbbr: [bI, dr, cI, fr, fr, er, dI],
                    namesShort: [qd, qd, oe, gr, gr, Sp, qd]
                },
                months: {
                    names: [Hgb, Igb, Jgb, Kgb, Lgb, Mgb, Ngb, Ogb, Pgb, Qgb, Rgb, Sgb, b],
                    namesAbbr: ["mbu.", "ibu.", "ato.", "ano.", "ise", "isi", "asa", "asa.", "ito.", "iri.", "n'of.", "n'ib.", b]
                },
                AM: ["Ututu", "ututu", "UTUTU"],
                PM: ["Efifie", "efifie", "EFIFIE"],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf
                }
            })
        }
    }, f[MR]);
    a.calendar = a.calendars.standard;
    a = f[NR] = d.extend(c, {}, j, {
        name: NR,
        englishName: "Yi (PRC)",
        nativeName: "ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)",
        language: "ii",
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["ꑭꆏꑍ", "ꆏꊂ꒔", "ꆏꊂꑍ", "ꆏꊂꌕ", "ꆏꊂꇖ", "ꆏꊂꉬ", "ꆏꊂꃘ"],
                    namesAbbr: ["ꑭꆏ", "ꆏ꒔", "ꆏꑍ", "ꆏꌕ", "ꆏꇖ", "ꆏꉬ", "ꆏꃘ"],
                    namesShort: ["ꆏ", "꒔", "ꑍ", "ꌕ", "ꇖ", "ꉬ", "ꃘ"]
                },
                months: {
                    names: [WI, XI, YI, ZI, aJ, bJ, cJ, dJ, eJ, fJ, gJ, hJ, b],
                    namesAbbr: [WI, XI, YI, ZI, aJ, bJ, cJ, dJ, eJ, fJ, gJ, hJ, b]
                },
                AM: [cv, cv, cv],
                PM: [dv, dv, dv],
                eras: [{
                    name: "ꇬꑼ",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: Tgb,
                    t: uo,
                    T: z,
                    f: Ugb,
                    F: Vgb,
                    M: Wgb,
                    Y: Xgb
                }
            })
        }
    }, f[NR]);
    a.calendar = a.calendars.standard;
    a = f[OR] = d.extend(c, {}, j, {
        name: OR,
        englishName: Ojb,
        nativeName: Ojb,
        language: "arn",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Hd,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[OR]);
    a.calendar = a.calendars.standard;
    a = f[PR] = d.extend(c, {}, j, {
        name: PR,
        englishName: "Mohawk (Mohawk)",
        nativeName: Zgb,
        language: "moh",
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [ahb, bhb, chb, "Soséhne", dhb, ehb, "Entákta"],
                    namesShort: [Eb, ag, md, Yu, md, Iq, Eb]
                },
                months: {
                    names: [fhb, "Enniska", ghb, hhb, ihb, jhb, khb, "Seskéha", lhb, mhb, nhb, ohb, b]
                }
            })
        }
    }, f[PR]);
    a.calendar = a.calendars.standard;
    a = f[QR] = d.extend(c, {}, j, {
        name: QR,
        englishName: "Breton (France)",
        nativeName: "brezhoneg (Frañs)",
        language: "br",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Hq, Zu, iJ, phb, jJ, "Gwener", "Sadorn"],
                    namesAbbr: [Hq, Zu, "Meu.", "Mer.", jJ, "Gwe.", "Sad."],
                    namesShort: [Cu, qE, "Mz", "Mc", "Ya", xG, ff]
                },
                months: {
                    names: ["Genver", qhb, iJ, "Ebrel", kJ, rhb, "Gouere", lJ, shb, ev, fv, "Kerzu", b],
                    namesAbbr: ["Gen.", "C'hwe.", "Meur.", "Ebr.", kJ, "Mezh.", "Goue.", lJ, "Gwen.", ev, fv, "Kzu", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: thb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[QR]);
    a.calendar = a.calendars.standard;
    a = f[RR] = d.extend(c, {}, j, {
        name: RR,
        englishName: "Uyghur (PRC)",
        nativeName: "ئۇيغۇرچە (جۇڭخۇا خەلق جۇمھۇرىيىتى)",
        language: "ug",
        isRTL: c,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [uhb, "دۈشەنبە", vhb, whb, xhb, "جۈمە", "شەنبە"],
                    namesAbbr: ["يە", "دۈ", "سە", "چا", "پە", "جۈ", "شە"],
                    namesShort: ["ي", Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [mJ, nJ, oJ, pJ, qJ, rJ, sJ, tJ, uJ, vJ, wJ, xJ, b],
                    namesAbbr: [mJ, nJ, oJ, pJ, qJ, rJ, sJ, tJ, uJ, vJ, wJ, xJ, b]
                },
                AM: [gv, gv, gv],
                PM: [hv, hv, hv],
                eras: [{
                    name: "مىلادى",
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: yhb,
                    D: zhb,
                    t: B,
                    T: z,
                    f: Ahb,
                    F: Bhb,
                    M: Chb,
                    Y: Dhb
                }
            })
        }
    }, f[RR]);
    a.calendar = a.calendars.standard;
    a = f[SR] = d.extend(c, {}, j, {
        name: SR,
        englishName: "Maori (New Zealand)",
        nativeName: "Reo Māori (Aotearoa)",
        language: Cd,
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [ud, Pb]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Rātapu", "Rāhina", "Rātū", "Rāapa", "Rāpare", "Rāmere", "Rāhoroi"],
                    namesAbbr: [yJ, zJ, AJ, "Apa", BJ, Du, CJ],
                    namesShort: [yJ, zJ, AJ, "Aa", BJ, Du, CJ]
                },
                months: {
                    names: [Ehb, Fhb, Ghb, Hhb, "Haratua", "Pipiri", Ihb, Jhb, "Mahuru", Khb, Lhb, "Hakihea", b],
                    namesAbbr: ["Kohi", "Hui", "Pou", "Pae", "Hara", "Pipi", "Hōngo", ev, "Mahu", "Nuku", "Rangi", "Haki", b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: G,
                    D: Mhb,
                    f: Nhb,
                    F: Ohb,
                    M: o,
                    Y: Phb
                }
            })
        }
    }, f[SR]);
    a.calendar = a.calendars.standard;
    a = f[TR] = d.extend(c, {}, j, {
        name: TR,
        englishName: "Occitan (France)",
        nativeName: "Occitan (França)",
        language: "oc",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["dimenge", "diluns", "dimars", Qhb, "dijòus", Dx, Ex],
                    namesAbbr: [Ld, vd, kc, "mèc.", "jòu.", wd, DJ],
                    namesShort: [Uc, Bb, Z, "mè", "jò", lc, ic]
                },
                months: {
                    names: ["genier", "febrier", Wr, sd, nb, "junh", "julh", Gx, Hx, Nd, kd, Ix, b],
                    namesAbbr: [EJ, ip, kc, FJ, zp, GJ, HJ, IJ, JJ, od, Vc, us, b]
                },
                monthsGenitive: {
                    names: [Rhb, Shb, "de març", "d'abril", "de mai", "de junh", "de julh", "d'agost", Thb, Uhb, Vhb, Whb, b],
                    namesAbbr: [EJ, ip, kc, FJ, zp, GJ, HJ, IJ, JJ, od, Vc, us, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Xhb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Yhb,
                    t: J,
                    T: I,
                    f: Zhb,
                    F: aib,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[TR]);
    a.calendar = a.calendars.standard;
    a = f[UR] = d.extend(c, {}, j, {
        name: UR,
        englishName: "Corsican (France)",
        nativeName: "Corsu (France)",
        language: "co",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [bib, pA, "marti", "mercuri", "ghjovi", "venderi", "sabbatu"],
                    namesAbbr: ["dum.", vd, kc, Md, "ghj.", wd, DJ],
                    namesShort: [Bs, Bb, Z, wc, "gh", lc, ic]
                },
                months: {
                    names: [cib, dib, "marzu", jw, "maghju", eib, "lugliu", "aostu", kw, lw, fib, mw, b],
                    namesAbbr: ["ghje", "ferr", "marz", "apri", "magh", "ghju", "lugl", "aost", oA, "otto", "nuve", "dice", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: gib,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[UR]);
    a.calendar = a.calendars.standard;
    a = f[VR] = d.extend(c, {}, j, {
        name: VR,
        englishName: "Alsatian (France)",
        nativeName: "Elsässisch (Frànkrisch)",
        language: "gsw",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: ["Sundàà", "Mondàà", hib, iib, jib, "Fridàà", kib],
                    namesAbbr: ["Su.", "Mo.", "Di.", "Mi.", "Du.", "Fr.", "Sà."],
                    namesShort: [Cu, rl, zg, Ag, fv, Cg, "Sà"]
                },
                months: {
                    names: [UP, "Feverje", In, "Àpril", me, KJ, LJ, "Augscht", Tk, "Oktower", lib, Kn, b],
                    namesAbbr: ["Jän.", "Fev.", In, "Apr.", me, KJ, LJ, "Aug.", "Sept.", "Okt.", "Now.", "Dez.", b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: mib,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[VR]);
    a.calendar = a.calendars.standard;
    a = f[WR] = d.extend(c, {}, j, {
        name: WR,
        englishName: "Yakut (Russia)",
        nativeName: "саха (Россия)",
        language: "sah",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "с."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [nib, oib, pib, "сэрэдэ", "чэппиэр", qib, "субуота"],
                    namesAbbr: [zq, MJ, NJ, sl, OJ, PJ, Dm],
                    namesShort: [zq, MJ, NJ, sl, OJ, PJ, Dm]
                },
                months: {
                    names: [rib, "Олунньу", sib, tib, "Ыам ыйа", "Бэс ыйа", "От ыйа", uib, vib, wib, xib, yib, b],
                    namesAbbr: [QJ, RJ, SJ, TJ, UJ, VJ, WJ, XJ, YJ, ZJ, aK, bK, b]
                },
                monthsGenitive: {
                    names: [zib, "олунньу", Aib, Bib, Cib, Dib, "от ыйын", Eib, Fib, Gib, Hib, Iib, b],
                    namesAbbr: [QJ, RJ, SJ, TJ, UJ, VJ, WJ, XJ, YJ, ZJ, aK, bK, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Jib,
                    D: Kib,
                    t: B,
                    T: z,
                    f: Lib,
                    F: Mib,
                    Y: Nib
                }
            })
        }
    }, f[WR]);
    a.calendar = a.calendars.standard;
    a = f[XR] = d.extend(c, {}, j, {
        name: XR,
        englishName: Pjb,
        nativeName: Pjb,
        language: "qut",
        numberFormat: {
            currency: {
                symbol: xo
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["juq'ij", "kaq'ij", "oxq'ij", "kajq'ij", "joq'ij", "waqq'ij", "wuqq'ij"],
                    namesAbbr: ["juq", "kaq", "oxq", "kajq", "joq", "waqq", "wuqq"],
                    namesShort: [Ye, An, "ox", An, "jo", "wa", "wu"]
                },
                months: {
                    names: [Oib, Pib, "rox ik'", Qib, Rib, Sib, Tib, Uib, Vib, Wib, Xib, Yib, b],
                    namesAbbr: ["nab'e", "ukab", "rox", "ukaj", "uro", "uwaq", "uwuq", "uwajxaq", "ub'elej", "ulaj", "ujulaj", Zib, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[XR]);
    a.calendar = a.calendars.standard;
    a = f[YR] = d.extend(c, {}, j, {
        name: YR,
        englishName: Qjb,
        nativeName: Qjb,
        language: "rw",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [jc, F],
                ",": n,
                ".": g,
                symbol: "RWF"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [bjb, cjb, djb, ejb, fjb, gjb, hjb],
                    namesAbbr: ["mbe.", "kab.", iv, "kan.", iv, iv, "cyu."],
                    namesShort: ["mb", An, So, An, So, So, bx]
                },
                months: {
                    names: [ijb, jjb, "Werurwe", "Mata", kjb, "Kamena", ljb, "Kanama", "Nzeli", mjb, njb, "Ukuboza", b],
                    namesAbbr: ["Mut", "Gas", "Wer", "Mat", "Gic", "Kam", "Nya", bv, "Nze", "Ukwa", "Ugu", "Uku", b]
                },
                AM: [cK, cK, ojb],
                PM: [dK, dK, pjb],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }]
            })
        }
    }, f[YR]);
    a.calendar = a.calendars.standard;
    a = f[ZR] = d.extend(c, {}, j, {
        name: ZR,
        englishName: "Wolof (Senegal)",
        nativeName: "Wolof (Sénégal)",
        language: vo,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "XOF"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[ZR]);
    a.calendar = a.calendars.standard;
    a = f[aS] = d.extend(c, {}, j, {
        name: aS,
        englishName: "Dari (Afghanistan)",
        nativeName: "درى (افغانستان)",
        language: "prs",
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            ",": i,
            ".": g,
            percent: {
                pattern: [lH, nd],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Ud, Pb],
                symbol: "؋"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 5,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    f: gt,
                    F: ht,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_Localized: d.extend(c, {}, h, {
                firstDay: 5,
                days: {
                    names: [Jq, Lm, Kq, Tp, Mm, wl, Nm],
                    namesAbbr: [Jq, Lm, Kq, Tp, Mm, wl, Nm],
                    namesShort: [tt, Up, N, Vp, Tn, M, Wp]
                },
                months: {
                    names: [Lq, Mq, Nq, Oq, Pq, eK, Qq, Rq, Sq, Tq, fK, Uq, b],
                    namesAbbr: [Lq, Mq, Nq, Oq, Pq, eK, Qq, Rq, Sq, Tq, fK, Uq, b]
                },
                AM: [nf, nf, nf],
                PM: [of, of, of],
                eras: [{
                    name: oH,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: pH,
                    f: qH,
                    F: rH,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[aS]);
    a.calendar = a.calendars.standard;
    a = f[bS] = d.extend(c, {}, j, {
        name: bS,
        englishName: "Scottish Gaelic (United Kingdom)",
        nativeName: "Gàidhlig (An Rìoghachd Aonaichte)",
        language: "gd",
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: "£"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [qjb, "Diluain", "Dimàirt", rjb, sjb, tjb, ujb],
                    namesAbbr: ["Dòm", "Lua", "Mài", "Cia", "Ard", "Hao", xr],
                    namesShort: [un, yc, ag, Xn, qd, Nn, Eb]
                },
                months: {
                    names: [vjb, wjb, "Am Màrt", xjb, yjb, zjb, Ajb, Bjb, Cjb, Djb, Ejb, Fjb, b],
                    namesAbbr: ["Fao", "Gea", "Màr", "Gib", "Cèi", "Ògm", "Iuc", "Lùn", Hq, "Dàm", UI, "Dùb", b]
                },
                AM: [cg, cg, ag],
                PM: ["f", "f", Iq],
                patterns: {
                    d: G,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[bS]);
    a.calendar = a.calendars.standard;
    a = f[cS] = d.extend(c, {}, j, {
        name: cS,
        englishName: "Arabic (Iraq)",
        nativeName: "العربية (العراق)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "د.ع.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[cS]);
    a.calendar = a.calendars.standard;
    a = f[dS] = d.extend(c, {}, j, {
        name: dS,
        englishName: "Chinese (Simplified, PRC)",
        nativeName: "中文(中华人民共和国)",
        language: qv,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [Vv, Wv, Xv, Yv, Zv, aw, bw],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[dS]);
    a.calendar = a.calendars.standard;
    a = f[eS] = d.extend(c, {}, j, {
        name: eS,
        englishName: "German (Switzerland)",
        nativeName: "Deutsch (Schweiz)",
        language: mr,
        numberFormat: {
            ",": Ig,
            percent: {
                pattern: [K, L],
                ",": Ig
            },
            currency: {
                pattern: [jc, F],
                ",": Ig,
                symbol: "Fr."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Yr, Zr, as, bs, cs, ds, es],
                    namesAbbr: [mg, rl, zg, Ag, Bg, Cg, ff],
                    namesShort: [mg, rl, zg, Ag, Bg, Cg, ff]
                },
                months: {
                    names: [nr, gp, In, Kl, me, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: [ne, ng, fw, We, me, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: fs,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: gs,
                    t: J,
                    T: I,
                    f: hs,
                    F: is,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[eS]);
    a.calendar = a.calendars.standard;
    a = f[fS] = d.extend(c, {}, j, {
        name: fS,
        englishName: Rjb,
        nativeName: Rjb,
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: "£"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                patterns: {
                    d: G,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[fS]);
    a.calendar = a.calendars.standard;
    a = f[gS] = d.extend(c, {}, j, {
        name: gS,
        englishName: "Spanish (Mexico)",
        nativeName: "Español (México)",
        language: Yf,
        numberFormat: {
            currency: {
                pattern: [ud, Pb]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[gS]);
    a.calendar = a.calendars.standard;
    a = f[hS] = d.extend(c, {}, j, {
        name: hS,
        englishName: "French (Belgium)",
        nativeName: "français (Belgique)",
        language: Ad,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Br,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[hS]);
    a.calendar = a.calendars.standard;
    a = f[iS] = d.extend(c, {}, j, {
        name: iS,
        englishName: "Italian (Switzerland)",
        nativeName: "italiano (Svizzera)",
        language: bz,
        numberFormat: {
            ",": Ig,
            percent: {
                pattern: [K, L],
                ",": Ig
            },
            currency: {
                pattern: [jc, F],
                ",": Ig,
                symbol: jA
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [pL, qL, rL, sL, tL, uL, vL],
                    namesAbbr: [td, Pe, U, "mer", "gio", iw, "sab"],
                    namesShort: [id, Bb, Z, wc, "gi", lc, ic]
                },
                months: {
                    names: [wL, xL, Rd, jw, yL, zL, AL, Dd, kw, lw, kd, mw, b],
                    namesAbbr: [Uv, ub, U, Ub, "mag", "giu", "lug", Ed, po, "ott", vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: gs,
                    t: J,
                    T: I,
                    f: hs,
                    F: is,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[iS]);
    a.calendar = a.calendars.standard;
    a = f[jS] = d.extend(c, {}, j, {
        name: jS,
        englishName: "Dutch (Belgium)",
        nativeName: "Nederlands (België)",
        language: Pz,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [DL, EL, FL, GL, HL, IL, JL],
                    namesAbbr: [vs, Z, Uc, vo, id, ws, xs],
                    namesShort: [vs, Z, Uc, vo, id, ws, xs]
                },
                months: {
                    names: [wp, xp, ow, Oe, ys, jg, kg, pw, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, qw, Ub, ys, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Br,
                    D: Gf,
                    t: B,
                    T: z,
                    f: rw,
                    F: sw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[jS]);
    a.calendar = a.calendars.standard;
    a = f[kS] = d.extend(c, {}, j, {
        name: kS,
        englishName: "Norwegian, Nynorsk (Norway)",
        nativeName: "norsk, nynorsk (Noreg)",
        language: "nn",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [lr, xw, "tysdag", En, Fn, Gn, "laurdag"],
                    namesAbbr: [Vl, Sn, mK, ig, Ne, Ad, Mn],
                    namesShort: [Vl, Sn, mK, ig, Ne, Ad, Mn]
                },
                months: {
                    names: [df, ef, tb, Oe, nb, jg, kg, Jl, le, pf, Ue, to, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[kS]);
    a.calendar = a.calendars.standard;
    a = f[lS] = d.extend(c, {}, j, {
        name: lS,
        englishName: "Portuguese (Portugal)",
        nativeName: "português (Portugal)",
        language: eA,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [Od, KL, LL, ML, NL, OL, Pd],
                    namesAbbr: [td, "seg", "ter", "qua", "qui", "sex", Qd],
                    namesShort: [un, Eb, md, xo, xo, Eb, Eb]
                },
                months: {
                    names: ["Janeiro", "Fevereiro", "Março", tP, "Maio", "Junho", "Julho", uP, "Setembro", "Outubro", "Novembro", "Dezembro", b],
                    namesAbbr: [ne, wr, Se, dx, me, gf, dg, "Ago", "Set", "Out", Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Hd,
                    D: PL,
                    t: J,
                    T: I,
                    f: QL,
                    F: RL,
                    M: "d/M",
                    Y: jd
                }
            })
        }
    }, f[lS]);
    a.calendar = a.calendars.standard;
    a = f[mS] = d.extend(c, {}, j, {
        name: mS,
        englishName: "Serbian (Latin, Serbia and Montenegro (Former))",
        nativeName: "srpski (Srbija i Crna Gora (Prethodno))",
        language: hr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: nK
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, rv, Em, Qp, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Rp, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, wb, sb, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: sv,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[mS]);
    a.calendar = a.calendars.standard;
    a = f[nS] = d.extend(c, {}, j, {
        name: nS,
        englishName: "Swedish (Finland)",
        nativeName: "svenska (Finland)",
        language: Lp,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [tM, xw, uM, En, Fn, Gn, vM],
                    namesAbbr: [dt, Sn, hg, ig, Ne, Ad, et],
                    namesShort: [dt, Sn, hg, ig, Ne, Ad, et]
                },
                months: {
                    names: [wp, xp, tb, Oe, Zb, jg, kg, wM, le, pf, Ue, lg, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, Ve, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xM,
                    t: J,
                    T: I,
                    f: yM,
                    F: zM,
                    M: AM,
                    Y: w
                }
            })
        }
    }, f[nS]);
    a.calendar = a.calendars.standard;
    a = f[oS] = d.extend(c, {}, j, {
        name: oS,
        englishName: "Azeri (Cyrillic, Azerbaijan)",
        nativeName: "Азәрбајҹан (Азәрбајҹан)",
        language: lx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "ман."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Базар", Sjb, Tjb, Ujb, Vjb, "Ҹүмә", "Шәнбә"],
                    namesAbbr: ["Б", oK, pK, Pt, qK, "Ҹ", Qt],
                    namesShort: ["Б", oK, pK, Pt, qK, "Ҹ", Qt]
                },
                months: {
                    names: ["Јанвар", tr, om, ur, rK, sK, tK, pm, Wjb, "Октјабр", "Нојабр", vr, b],
                    namesAbbr: [uK, xl, yl, zl, rK, sK, tK, Al, Bl, Cl, Dl, El, b]
                },
                monthsGenitive: {
                    names: ["јанвар", vK, vg, wK, rg, xK, yK, Pk, Xjb, "октјабр", "нојабр", zK, b],
                    namesAbbr: [uK, xl, yl, zl, Jp, xK, yK, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[oS]);
    a.calendar = a.calendars.standard;
    a = f[pS] = d.extend(c, {}, j, {
        name: pS,
        englishName: "Lower Sorbian (Germany)",
        nativeName: "dolnoserbšćina (Nimska)",
        language: "dsb",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": Zs,
                firstDay: 1,
                days: {
                    names: ["njeźela", Yjb, "wałtora", "srjoda", "stwortk", "pětk", wm],
                    namesAbbr: [SC, tl, "wał", TC, "stw", "pět", kt],
                    namesShort: [yt, Yk, "w", bg, bg, Yk, bg]
                },
                months: {
                    names: [df, ef, UC, VC, Zb, lt, mt, WC, le, pf, XC, lg, b],
                    namesAbbr: [hc, ub, bq, Ub, Zb, wb, sb, cq, yb, dc, dq, oc, b]
                },
                monthsGenitive: {
                    names: [ZC, aD, bD, cD, dA, dD, eD, fD, at, gD, hD, bt, b],
                    namesAbbr: [hc, ub, bq, Ub, Zb, wb, sb, cq, yb, dc, dq, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: iD,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ct,
                    D: jD,
                    t: Zjb,
                    T: z,
                    f: akb,
                    F: kD,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[pS]);
    a.calendar = a.calendars.standard;
    a = f[qS] = d.extend(c, {}, j, {
        name: qS,
        englishName: "Sami, Northern (Sweden)",
        nativeName: "davvisámegiella (Ruoŧŧa)",
        language: xn,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [LD, "mánnodat", "disdat", MD, ND, OD, PD],
                    namesAbbr: [QD, Dt, AK, yr, zr, RD, Ar],
                    namesShort: [bg, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [SD, TD, UD, VD, WD, XD, YD, ZD, aE, bE, cE, dE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                monthsGenitive: {
                    names: [eE, fE, gE, hE, iE, jE, kE, lE, mE, nE, oE, pE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f[qS]);
    a.calendar = a.calendars.standard;
    a = f[rS] = d.extend(c, {}, j, {
        name: rS,
        englishName: "Irish (Ireland)",
        nativeName: "Gaeilge (Éire)",
        language: So,
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Gbb, Hbb, Ibb, Jbb, Kbb, Lbb, Mbb],
                    namesAbbr: ["Domh", "Luan", "Máir", "Céad", "Déar", "Aoi", "Sath"],
                    namesShort: [Bg, qE, "Má", "Cé", "De", "Ao", ff]
                },
                months: {
                    names: ["Eanáir", "Feabhra", "Márta", "Aibreán", Nbb, Obb, rE, "Lúnasa", Pbb, Qbb, "Samhain", "Nollaig", b],
                    namesAbbr: ["Ean", "Feabh", "Már", "Aib", "Bealt", "Meith", rE, "Lún", "M.Fómh", "D.Fómh", "Samh", "Noll", b]
                },
                AM: [sE, sE, "R.N."],
                PM: [tE, tE, "I.N."],
                patterns: {
                    d: G,
                    D: Hf,
                    t: J,
                    T: I,
                    f: pr,
                    F: wo,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[rS]);
    a.calendar = a.calendars.standard;
    a = f[sS] = d.extend(c, {}, j, {
        name: sS,
        englishName: "Malay (Brunei Darussalam)",
        nativeName: "Bahasa Melayu (Brunei Darussalam)",
        language: uE,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                decimals: 0,
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [To, Lt, zw, Un, Mt, Nt, Vn],
                    namesAbbr: [To, Lt, Aw, Un, Mt, Nt, Vn],
                    namesShort: [qd, oe, Eb, pg, Ml, Cm, Eb]
                },
                months: {
                    names: [rr, sr, wq, Kl, Jg, gf, xq, Ot, Tk, Ll, nm, kN, b],
                    namesAbbr: [ne, ng, wq, We, Jg, gf, dg, Ot, Nw, Bd, Dg, yq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: G,
                    D: Qb,
                    t: B,
                    T: z,
                    f: Bw,
                    F: Cw,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[sS]);
    a.calendar = a.calendars.standard;
    a = f[tS] = d.extend(c, {}, j, {
        name: tS,
        englishName: "Uzbek (Cyrillic, Uzbekistan)",
        nativeName: "Ўзбек (Ўзбекистон)",
        language: mx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "сўм"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["якшанба", "душанба", "сешанба", bkb, ckb, "жума", "шанба"],
                    namesAbbr: ["якш", "дш", "сш", "чш", "пш", "ж", "ш"],
                    namesShort: ["я", "д", vm, jr, um, "ж", "ш"]
                },
                months: {
                    names: [Dw, tr, om, ur, Id, Wk, Xk, pm, Ew, Fw, Gw, vr, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                monthsGenitive: {
                    names: ["январ", vK, vg, wK, Sl, Hp, Ip, Pk, "сентябр", "октябр", "ноябр", zK, b],
                    namesAbbr: [Km, xl, yl, zl, Jp, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: dkb,
                    t: J,
                    T: I,
                    f: ekb,
                    F: fkb,
                    M: Ow,
                    Y: w
                }
            })
        }
    }, f[tS]);
    a.calendar = a.calendars.standard;
    a = f[uS] = d.extend(c, {}, j, {
        name: uS,
        englishName: "Bengali (Bangladesh)",
        nativeName: "বাংলা (বাংলাদেশ)",
        language: KE,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                pattern: [Jd, nd],
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "৳"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                ":": i,
                firstDay: 1,
                days: {
                    names: [CN, DN, EN, FN, GN, HN, IN],
                    namesAbbr: [JN, Pw, Qw, Rw, KN, Sw, Tw],
                    namesShort: ["র", "স", "ম", Rt, Rt, Dq, Dq]
                },
                months: {
                    names: [LN, MN, jo, ko, lo, mo, no, NN, ON, Uw, PN, QN, b],
                    namesAbbr: [RN, SN, jo, ko, lo, mo, no, "আগ.", TN, UN, VN, WN, b]
                },
                AM: [Uo, Uo, Uo],
                PM: [Vo, Vo, Vo],
                patterns: {
                    d: Pl,
                    D: Qb,
                    t: Vw,
                    T: Ww,
                    f: Xw,
                    F: Yw,
                    M: o
                }
            })
        }
    }, f[uS]);
    a.calendar = a.calendars.standard;
    a = f[vS] = d.extend(c, {}, j, {
        name: vS,
        englishName: "Mongolian (Traditional Mongolian, PRC)",
        nativeName: "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)",
        language: nx,
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [jc, Pb],
                groupSizes: [3, 0],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [BK, CK, DK, EK, FK, GK, HK],
                    namesAbbr: [BK, CK, DK, EK, FK, GK, HK],
                    namesShort: ["ᠡ‍", "ᠨᠢ‍", "ᠬᠣ‍", "ᠭᠤ‍", "ᠳᠥ‍", "ᠲᠠ‍", "ᠵᠢ‍"]
                },
                months: {
                    names: [IK, JK, KK, LK, MK, NK, OK, PK, QK, RK, SK, TK, b],
                    namesAbbr: [IK, JK, KK, LK, MK, NK, OK, PK, QK, RK, SK, TK, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: gkb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: hkb,
                    t: B,
                    T: z,
                    f: ikb,
                    F: jkb,
                    M: kkb,
                    Y: lkb
                }
            })
        }
    }, f[vS]);
    a.calendar = a.calendars.standard;
    a = f[wS] = d.extend(c, {}, j, {
        name: wS,
        englishName: "Inuktitut (Latin, Canada)",
        nativeName: "Inuktitut (Kanatami)",
        language: ox,
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [IO, JO, KO, LO, MO, NO, OO],
                    namesAbbr: ["Nat", "Nag", "Aip", "Pi", "Sit", Lu, "Siv"],
                    namesShort: [Ze, Ze, qd, Uk, Eb, md, Eb]
                },
                months: {
                    names: [PO, QO, RO, SO, me, TO, xq, UO, VO, WO, XO, YO, b],
                    namesAbbr: [ne, "Viv", "Mas", "Ipu", me, gf, dg, "Agi", "Sii", "Uut", "Nuv", "Tis", b]
                },
                patterns: {
                    d: Br,
                    D: ZO,
                    f: aP,
                    F: bP
                }
            })
        }
    }, f[wS]);
    a.calendar = a.calendars.standard;
    a = f[xS] = d.extend(c, {}, j, {
        name: xS,
        englishName: "Tamazight (Latin, Algeria)",
        nativeName: "Tamazight (Djazaïr)",
        language: px,
        numberFormat: {
            pattern: [qe],
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                symbol: "DZD"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 6,
                days: {
                    names: [dP, eP, fP, To, gP, Ou, hP],
                    namesAbbr: ["Ace", "Ari", yw, "Aha", "Amh", Ou, "Sed"],
                    namesShort: ["Ac", Pu, Pu, "Ah", "Am", Qu, Qu]
                },
                months: {
                    names: [iP, jP, kP, lP, Ru, mP, nP, oP, pP, qP, rP, sP, b],
                    namesAbbr: ["Yen", "Fur", "Mag", "Yeb", Vk, Su, Tu, "Ghu", "Cut", "Ktu", "Wam", "Duj", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: cf,
                    t: B,
                    T: z,
                    f: Uu,
                    F: Vu,
                    M: o
                }
            })
        }
    }, f[xS]);
    a.calendar = a.calendars.standard;
    a = f[yS] = d.extend(c, {}, j, {
        name: yS,
        englishName: "Quechua (Ecuador)",
        nativeName: "runasimi (Ecuador)",
        language: ex,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [fI, gI, hI, iI, jI, kI, lI],
                    namesAbbr: [mI, nI, oI, pI, qI, rI, sI],
                    namesShort: [pe, oo, Cr, cg, "h", gm, oo]
                },
                months: {
                    names: [tI, uI, vI, wI, xI, yI, zI, AI, BI, CI, DI, EI, b],
                    namesAbbr: [FI, GI, HI, II, JI, KI, LI, MI, NI, bv, OI, PI, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: G,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    Y: jd
                }
            })
        }
    }, f[yS]);
    a.calendar = a.calendars.standard;
    a = f[zS] = d.extend(c, {}, j, {
        name: zS,
        englishName: "Arabic (Egypt)",
        nativeName: "العربية (مصر)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: [Ud, F],
                symbol: "ج.م.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[zS]);
    a.calendar = a.calendars.standard;
    a = f[AS] = d.extend(c, {}, j, {
        name: AS,
        englishName: "Chinese (Traditional, Hong Kong S.A.R.)",
        nativeName: "中文(香港特別行政區)",
        language: Dr,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                symbol: "HK$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [jv, kv, lv, mv, nv, ov, pv],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[AS]);
    a.calendar = a.calendars.standard;
    a = f[BS] = d.extend(c, {}, j, {
        name: BS,
        englishName: "German (Austria)",
        nativeName: "Deutsch (Österreich)",
        language: mr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Yr, Zr, as, bs, cs, ds, es],
                    namesAbbr: [mg, rl, zg, Ag, Bg, Cg, ff],
                    namesShort: [mg, rl, zg, Ag, Bg, Cg, ff]
                },
                months: {
                    names: [UP, gp, In, Kl, me, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: ["Jän", ng, "Mär", We, me, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: fs,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: "dddd, dd. MMMM yyyy",
                    t: J,
                    T: I,
                    f: "dddd, dd. MMMM yyyy HH:mm",
                    F: "dddd, dd. MMMM yyyy HH:mm:ss",
                    M: o,
                    Y: w
                }
            })
        }
    }, f[BS]);
    a.calendar = a.calendars.standard;
    a = f[CS] = d.extend(c, {}, j, {
        name: CS,
        englishName: mkb,
        nativeName: mkb,
        numberFormat: {
            currency: {
                pattern: [ud, Pb]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                patterns: {
                    d: Br,
                    D: js,
                    f: gy,
                    F: hy,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[CS]);
    a.calendar = a.calendars.standard;
    a = f[DS] = d.extend(c, {}, j, {
        name: DS,
        englishName: "Spanish (Spain, International Sort)",
        nativeName: "Español (España, alfabetización internacional)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[DS]);
    a.calendar = a.calendars.standard;
    a = f[ES] = d.extend(c, {}, j, {
        name: ES,
        englishName: "French (Canada)",
        nativeName: "français (Canada)",
        language: Ad,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: ["(n $)", E],
                ",": n,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: og,
                    D: Hf,
                    t: J,
                    T: I,
                    f: pr,
                    F: wo,
                    M: Rb
                }
            })
        }
    }, f[ES]);
    a.calendar = a.calendars.standard;
    a = f[FS] = d.extend(c, {}, j, {
        name: FS,
        englishName: "Serbian (Cyrillic, Serbia and Montenegro (Former))",
        nativeName: "српски (Србија и Црна Гора (Претходно))",
        language: ir,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: GS
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [qx, rx, Er, yo, Fr, Gr, vn],
                    namesAbbr: [bn, cn, Hr, Ir, No, dn, Jr],
                    namesShort: [zt, At, UK, tm, Bt, Ct, VK]
                },
                months: {
                    names: [Kr, Lr, vg, en, rg, Fl, Gl, Pk, Mr, Nr, Or, Pr, b],
                    namesAbbr: [Oo, Qr, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, Rr, Sr, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Tr,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[FS]);
    a.calendar = a.calendars.standard;
    a = f[HS] = d.extend(c, {}, j, {
        name: HS,
        englishName: "Sami, Northern (Finland)",
        nativeName: "davvisámegiella (Suopma)",
        language: xn,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [LD, hN, iN, MD, ND, OD, PD],
                    namesAbbr: [QD, jN, "maŋ", yr, zr, RD, Ar],
                    namesShort: [bg, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [SD, TD, UD, VD, WD, XD, YD, ZD, aE, bE, cE, dE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                monthsGenitive: {
                    names: [eE, fE, gE, hE, iE, jE, kE, lE, mE, nE, oE, pE, b],
                    namesAbbr: [mq, hm, nq, oq, pq, qq, rq, sq, tq, uq, vq, go, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: ho,
                    t: B,
                    T: z,
                    f: "MMMM d'. b. 'yyyy H:mm",
                    F: "MMMM d'. b. 'yyyy H:mm:ss",
                    M: io,
                    Y: w
                }
            })
        }
    }, f[HS]);
    a.calendar = a.calendars.standard;
    a = f[IS] = d.extend(c, {}, j, {
        name: IS,
        englishName: "Quechua (Peru)",
        nativeName: "runasimi (Piruw)",
        language: ex,
        numberFormat: {
            percent: {
                pattern: [Jd, nd]
            },
            currency: {
                pattern: [Gb, F],
                symbol: "S/."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [fI, gI, hI, iI, jI, kI, lI],
                    namesAbbr: [mI, nI, oI, pI, qI, rI, sI],
                    namesShort: [pe, oo, Cr, cg, "h", gm, oo]
                },
                months: {
                    names: [tI, uI, vI, wI, xI, yI, zI, AI, BI, CI, DI, EI, b],
                    namesAbbr: [FI, GI, HI, II, JI, KI, LI, MI, NI, bv, OI, PI, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    Y: jd
                }
            })
        }
    }, f[IS]);
    a.calendar = a.calendars.standard;
    a = f[JS] = d.extend(c, {}, j, {
        name: JS,
        englishName: "Arabic (Libya)",
        nativeName: "العربية (ليبيا)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: [Ud, Pb],
                decimals: 3,
                symbol: "د.ل.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[JS]);
    a.calendar = a.calendars.standard;
    a = f[KS] = d.extend(c, {}, j, {
        name: KS,
        englishName: "Chinese (Simplified, Singapore)",
        nativeName: "中文(新加坡)",
        language: qv,
        numberFormat: {
            percent: {
                pattern: [K, L]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [Vv, Wv, Xv, Yv, Zv, aw, bw],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                patterns: {
                    d: hf,
                    D: jm,
                    t: uo,
                    T: or,
                    f: "yyyy'年'M'月'd'日' tt h:mm",
                    F: "yyyy'年'M'月'd'日' tt h:mm:ss",
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[KS]);
    a.calendar = a.calendars.standard;
    a = f[LS] = d.extend(c, {}, j, {
        name: LS,
        englishName: "German (Luxembourg)",
        nativeName: "Deutsch (Luxemburg)",
        language: mr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Yr, Zr, as, bs, cs, ds, es],
                    namesAbbr: [mg, rl, zg, Ag, Bg, Cg, ff],
                    namesShort: [mg, rl, zg, Ag, Bg, Cg, ff]
                },
                months: {
                    names: [nr, gp, In, Kl, me, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: [ne, ng, fw, We, me, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: fs,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: gs,
                    t: J,
                    T: I,
                    f: hs,
                    F: is,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[LS]);
    a.calendar = a.calendars.standard;
    a = f[MS] = d.extend(c, {}, j, {
        name: MS,
        englishName: nkb,
        nativeName: nkb,
        numberFormat: {
            currency: {
                pattern: [ud, Pb]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                patterns: {
                    d: G,
                    D: "MMMM-dd-yy",
                    f: "MMMM-dd-yy h:mm tt",
                    F: "MMMM-dd-yy h:mm:ss tt"
                }
            })
        }
    }, f[MS]);
    a.calendar = a.calendars.standard;
    a = f[NS] = d.extend(c, {}, j, {
        name: NS,
        englishName: "Spanish (Guatemala)",
        nativeName: "Español (Guatemala)",
        language: Yf,
        numberFormat: {
            currency: {
                symbol: xo
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[NS]);
    a.calendar = a.calendars.standard;
    a = f[OS] = d.extend(c, {}, j, {
        name: OS,
        englishName: "French (Switzerland)",
        nativeName: "français (Suisse)",
        language: Ad,
        numberFormat: {
            ",": Ig,
            percent: {
                ",": Ig
            },
            currency: {
                pattern: [jc, F],
                ",": Ig,
                symbol: jA
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[OS]);
    a.calendar = a.calendars.standard;
    a = f[PS] = d.extend(c, {}, j, {
        name: PS,
        englishName: "Croatian (Latin, Bosnia and Herzegovina)",
        nativeName: "hrvatski (Bosna i Hercegovina)",
        language: tA,
        numberFormat: {
            pattern: [vw],
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: sx
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Ls, Ms, Em, Ns, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Os, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [TL, UL, VL, WL, XL, YL, ZL, aM, bM, kr, cM, dM, b],
                    namesAbbr: [Ps, Qs, Rs, Ss, Ts, Pn, Us, Vs, Ws, Qn, Xs, Ys, b]
                },
                monthsGenitive: {
                    names: [eM, fM, gM, hM, iM, jM, kM, lM, mM, uw, nM, oM, b],
                    namesAbbr: [Ps, Qs, Rs, Ss, Ts, Pn, Us, Vs, Ws, Qn, Xs, Ys, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: pM,
                    D: qM,
                    t: B,
                    T: z,
                    f: rM,
                    F: sM,
                    M: gc
                }
            })
        }
    }, f[PS]);
    a.calendar = a.calendars.standard;
    a = f[QS] = d.extend(c, {}, j, {
        name: QS,
        englishName: "Sami, Lule (Norway)",
        nativeName: "julevusámegiella (Vuodna)",
        language: WK,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["sådnåbiejvve", RS, SS, TS, US, VS, WS],
                    namesAbbr: ["såd", Dt, AK, "gas", zr, XS, Ar],
                    namesShort: [bg, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [YS, ZS, aT, bT, cT, dT, eT, fT, gT, hT, iT, jT, b],
                    namesAbbr: [tv, hm, uv, vv, wv, xv, yv, zv, Av, Bv, Cv, Dv, b]
                },
                monthsGenitive: {
                    names: [kT, lT, mT, nT, oT, pT, qT, rT, sT, tT, uT, vT, b],
                    namesAbbr: [tv, hm, uv, vv, wv, xv, yv, zv, Av, Bv, Cv, Dv, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f[QS]);
    a.calendar = a.calendars.standard;
    a = f[wT] = d.extend(c, {}, j, {
        name: wT,
        englishName: "Arabic (Algeria)",
        nativeName: "العربية (الجزائر)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "د.ج.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, mc, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: Hd,
                    D: cf,
                    t: B,
                    T: z,
                    f: Uu,
                    F: Vu,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: B,
                    T: z,
                    f: xT,
                    F: yT,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: B,
                    T: z,
                    f: zT,
                    F: AT,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp
                }
            })
        }
    }, f[wT]);
    a.calendar = a.calendars.standard;
    a = f[BT] = d.extend(c, {}, j, {
        name: BT,
        englishName: "Chinese (Traditional, Macao S.A.R.)",
        nativeName: "中文(澳門特別行政區)",
        language: Dr,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                symbol: "MOP"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [jv, kv, lv, mv, nv, ov, pv],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[BT]);
    a.calendar = a.calendars.standard;
    a = f[CT] = d.extend(c, {}, j, {
        name: CT,
        englishName: "German (Liechtenstein)",
        nativeName: "Deutsch (Liechtenstein)",
        language: mr,
        numberFormat: {
            ",": Ig,
            percent: {
                pattern: [K, L],
                ",": Ig
            },
            currency: {
                pattern: [jc, F],
                ",": Ig,
                symbol: "CHF"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Yr, Zr, as, bs, cs, ds, es],
                    namesAbbr: [mg, rl, zg, Ag, Bg, Cg, ff],
                    namesShort: [mg, rl, zg, Ag, Bg, Cg, ff]
                },
                months: {
                    names: [nr, gp, In, Kl, me, xm, Jn, hp, Tk, Ll, nm, Kn, b],
                    namesAbbr: [ne, ng, fw, We, me, gf, dg, Ln, Wl, Bd, Dg, qo, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: fs,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ec,
                    D: gs,
                    t: J,
                    T: I,
                    f: hs,
                    F: is,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[CT]);
    a.calendar = a.calendars.standard;
    a = f[DT] = d.extend(c, {}, j, {
        name: DT,
        englishName: okb,
        nativeName: okb,
        numberFormat: {
            currency: {
                pattern: [ud, Pb]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                patterns: {
                    d: Br,
                    D: js,
                    f: gy,
                    F: hy,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[DT]);
    a.calendar = a.calendars.standard;
    a = f[ET] = d.extend(c, {}, j, {
        name: ET,
        englishName: "Spanish (Costa Rica)",
        nativeName: "Español (Costa Rica)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                ",": i,
                ".": g,
                symbol: "₡"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[ET]);
    a.calendar = a.calendars.standard;
    a = f[FT] = d.extend(c, {}, j, {
        name: FT,
        englishName: "French (Luxembourg)",
        nativeName: "français (Luxembourg)",
        language: Ad,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[FT]);
    a.calendar = a.calendars.standard;
    a = f[GT] = d.extend(c, {}, j, {
        name: GT,
        englishName: "Bosnian (Latin, Bosnia and Herzegovina)",
        nativeName: "bosanski (Bosna i Hercegovina)",
        language: tx,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: sx
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Ls, Ms, Em, Ns, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Os, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, jg, kg, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[GT]);
    a.calendar = a.calendars.standard;
    a = f[HT] = d.extend(c, {}, j, {
        name: HT,
        englishName: "Sami, Lule (Sweden)",
        nativeName: "julevusámegiella (Svierik)",
        language: WK,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ájllek", RS, SS, TS, US, VS, WS],
                    namesAbbr: ["ájl", Dt, AK, "gas", zr, XS, Ar],
                    namesShort: ["á", cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [YS, ZS, aT, bT, cT, dT, eT, fT, gT, hT, iT, jT, b],
                    namesAbbr: [tv, hm, uv, vv, wv, xv, yv, zv, Av, Bv, Cv, Dv, b]
                },
                monthsGenitive: {
                    names: [kT, lT, mT, nT, oT, pT, qT, rT, sT, tT, uT, vT, b],
                    namesAbbr: [tv, hm, uv, vv, wv, xv, yv, zv, Av, Bv, Cv, Dv, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f[HT]);
    a.calendar = a.calendars.standard;
    a = f[IT] = d.extend(c, {}, j, {
        name: IT,
        englishName: "Arabic (Morocco)",
        nativeName: "العربية (المملكة المغربية)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "د.م.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, "ماي", Yb, "يوليوز", "غشت", "شتنبر", mc, "نونبر", "دجنبر", b],
                    namesAbbr: [Wb, Xb, ab, ld, "ماي", Yb, "يوليوز", "غشت", "شتنبر", mc, "نونبر", "دجنبر", b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: Hd,
                    D: cf,
                    t: B,
                    T: z,
                    f: Uu,
                    F: Vu,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: B,
                    T: z,
                    f: xT,
                    F: yT,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: B,
                    T: z,
                    f: zT,
                    F: AT,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp
                }
            })
        }
    }, f[IT]);
    a.calendar = a.calendars.standard;
    a = f[JT] = d.extend(c, {}, j, {
        name: JT,
        englishName: pkb,
        nativeName: pkb,
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                AM: e,
                PM: e,
                patterns: {
                    d: G,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[JT]);
    a.calendar = a.calendars.standard;
    a = f[KT] = d.extend(c, {}, j, {
        name: KT,
        englishName: "Spanish (Panama)",
        nativeName: "Español (Panamá)",
        language: Yf,
        numberFormat: {
            currency: {
                pattern: [sm, F],
                symbol: "B/."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[KT]);
    a.calendar = a.calendars.standard;
    a = f[LT] = d.extend(c, {}, j, {
        name: LT,
        englishName: "French (Monaco)",
        nativeName: "français (Principauté de Monaco)",
        language: Ad,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Gf,
                    t: J,
                    T: I,
                    f: Fg,
                    F: Gg,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[LT]);
    a.calendar = a.calendars.standard;
    a = f[MT] = d.extend(c, {}, j, {
        name: MT,
        englishName: "Serbian (Latin, Bosnia and Herzegovina)",
        nativeName: "srpski (Bosna i Hercegovina)",
        language: hr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: sx
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, rv, Em, Qp, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Rp, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, wb, sb, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: sv,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[MT]);
    a.calendar = a.calendars.standard;
    a = f[NT] = d.extend(c, {}, j, {
        name: NT,
        englishName: "Sami, Southern (Norway)",
        nativeName: "åarjelsaemiengiele (Nöörje)",
        language: XK,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [Jd, nd],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [OT, PT, QT, RT, ST, TT, UT],
                    namesAbbr: ["aej", "måa", "dæj", yr, VT, WT, XT],
                    namesShort: [Cr, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [YT, ZT, aU, bU, cU, dU, eU, fU, gU, hU, iU, jU, b],
                    namesAbbr: [Ev, Fv, Gv, Hv, Iv, Jv, Kv, Lv, Mv, Nv, Ov, Pv, b]
                },
                monthsGenitive: {
                    names: [kU, lU, mU, nU, oU, pU, qU, rU, sU, tU, uU, vU, b],
                    namesAbbr: [Ev, Fv, Gv, Hv, Iv, Jv, Kv, Lv, Mv, Nv, Ov, Pv, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f[NT]);
    a.calendar = a.calendars.standard;
    a = f[wU] = d.extend(c, {}, j, {
        name: wU,
        englishName: "Arabic (Tunisia)",
        nativeName: "العربية (تونس)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: [Ud, F],
                decimals: 3,
                symbol: "د.ت.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, mc, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: Hd,
                    D: cf,
                    t: B,
                    T: z,
                    f: Uu,
                    F: Vu,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: B,
                    T: z,
                    f: xT,
                    F: yT,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: B,
                    T: z,
                    f: zT,
                    F: AT,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: B,
                    T: z,
                    f: bp,
                    F: cp
                }
            })
        }
    }, f[wU]);
    a.calendar = a.calendars.standard;
    a = f[xU] = d.extend(c, {}, j, {
        name: xU,
        englishName: qkb,
        nativeName: qkb,
        numberFormat: {
            ",": n,
            percent: {
                pattern: [K, L],
                ",": n
            },
            currency: {
                pattern: [jc, F],
                ",": n,
                ".": g,
                symbol: pg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                patterns: {
                    d: xg,
                    D: Qb,
                    t: C,
                    T: D,
                    f: yn,
                    F: zn,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[xU]);
    a.calendar = a.calendars.standard;
    a = f[yU] = d.extend(c, {}, j, {
        name: yU,
        englishName: "Spanish (Dominican Republic)",
        nativeName: "Español (República Dominicana)",
        language: Yf,
        numberFormat: {
            currency: {
                symbol: "RD$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[yU]);
    a.calendar = a.calendars.standard;
    a = f[zU] = d.extend(c, {}, j, {
        name: zU,
        englishName: "Serbian (Cyrillic, Bosnia and Herzegovina)",
        nativeName: "српски (Босна и Херцеговина)",
        language: ir,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "КМ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [qx, rx, Er, yo, Fr, Gr, vn],
                    namesAbbr: [bn, cn, Hr, Ir, No, dn, Jr],
                    namesShort: ["н", um, "у", vm, jr, um, vm]
                },
                months: {
                    names: [Kr, Lr, vg, en, rg, Fl, Gl, Pk, Mr, Nr, Or, Pr, b],
                    namesAbbr: [Oo, Qr, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, Rr, Sr, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Tr,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc
                }
            })
        }
    }, f[zU]);
    a.calendar = a.calendars.standard;
    a = f[AU] = d.extend(c, {}, j, {
        name: AU,
        englishName: "Sami, Southern (Sweden)",
        nativeName: "åarjelsaemiengiele (Sveerje)",
        language: XK,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [OT, PT, QT, RT, ST, TT, UT],
                    namesAbbr: ["aej", "måa", "dæj", yr, VT, WT, XT],
                    namesShort: [Cr, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [YT, ZT, aU, bU, cU, dU, eU, fU, gU, hU, iU, jU, b],
                    namesAbbr: [Ev, Fv, Gv, Hv, Iv, Jv, Kv, Lv, Mv, Nv, Ov, Pv, b]
                },
                monthsGenitive: {
                    names: [kU, lU, mU, nU, oU, pU, qU, rU, sU, tU, uU, vU, b],
                    namesAbbr: [Ev, Fv, Gv, Hv, Iv, Jv, Kv, Lv, Mv, Nv, Ov, Pv, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f[AU]);
    a.calendar = a.calendars.standard;
    a = f[BU] = d.extend(c, {}, j, {
        name: BU,
        englishName: "Arabic (Oman)",
        nativeName: "العربية (عمان)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                decimals: 3,
                symbol: "ر.ع.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[BU]);
    a.calendar = a.calendars.standard;
    a = f[CU] = d.extend(c, {}, j, {
        name: CU,
        englishName: rkb,
        nativeName: rkb,
        numberFormat: {
            currency: {
                pattern: [ud, Pb],
                symbol: "J$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                patterns: {
                    d: G,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[CU]);
    a.calendar = a.calendars.standard;
    a = f[DU] = d.extend(c, {}, j, {
        name: DU,
        englishName: "Spanish (Bolivarian Republic of Venezuela)",
        nativeName: "Español (Republica Bolivariana de Venezuela)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": i,
                ".": g,
                symbol: "Bs. F."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[DU]);
    a.calendar = a.calendars.standard;
    a = f[EU] = d.extend(c, {}, j, {
        name: EU,
        englishName: "Bosnian (Cyrillic, Bosnia and Herzegovina)",
        nativeName: "босански (Босна и Херцеговина)",
        language: ux,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "КМ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["недјеља", skb, Er, "сриједа", Fr, Gr, vn],
                    namesAbbr: [bn, cn, Hr, Ir, No, dn, Jr],
                    namesShort: ["н", um, "у", vm, jr, um, vm]
                },
                months: {
                    names: [Kr, Lr, vg, en, rg, Fl, Gl, Pk, Mr, Nr, Or, Pr, b],
                    namesAbbr: [Oo, Qr, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, Rr, Sr, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Tr,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc
                }
            })
        }
    }, f[EU]);
    a.calendar = a.calendars.standard;
    a = f[FU] = d.extend(c, {}, j, {
        name: FU,
        englishName: "Sami, Skolt (Finland)",
        nativeName: "sääm´ǩiõll (Lää´ddjânnam)",
        language: "sms",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [tkb, ukb, vkb, "seärad", wkb, "piâtnâc", "sue´vet"],
                    namesAbbr: ["pâ", YK, "mâ", xn, ke, Kp, Zf],
                    namesShort: [Yk, Qv, cg, bg, yt, Yk, bg]
                },
                months: {
                    names: [xkb, ykb, zkb, Akb, Bkb, Ckb, Dkb, Ekb, Fkb, Gkb, Hkb, Ikb, b],
                    namesAbbr: [ZK, aL, bL, Rv, cL, dL, eL, fL, gL, hL, Sv, iL, b]
                },
                monthsGenitive: {
                    names: [Jkb, Kkb, Lkb, Mkb, Nkb, Okb, Pkb, Qkb, Rkb, Skb, Tkb, Ukb, b],
                    namesAbbr: [ZK, aL, bL, Rv, cL, dL, eL, fL, gL, hL, Sv, iL, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: jL,
                    t: B,
                    T: z,
                    f: kL,
                    F: lL,
                    M: mL,
                    Y: w
                }
            })
        }
    }, f[FU]);
    a.calendar = a.calendars.standard;
    a = f[GU] = d.extend(c, {}, j, {
        name: GU,
        englishName: "Arabic (Yemen)",
        nativeName: "العربية (اليمن)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "ر.ي.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[GU]);
    a.calendar = a.calendars.standard;
    a = f[HU] = d.extend(c, {}, j, {
        name: HU,
        englishName: Vkb,
        nativeName: Vkb,
        numberFormat: {
            currency: {
                pattern: [ud, Pb]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                patterns: {
                    d: zb
                }
            })
        }
    }, f[HU]);
    a.calendar = a.calendars.standard;
    a = f[IU] = d.extend(c, {}, j, {
        name: IU,
        englishName: "Spanish (Colombia)",
        nativeName: "Español (Colombia)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[IU]);
    a.calendar = a.calendars.standard;
    a = f[JU] = d.extend(c, {}, j, {
        name: JU,
        englishName: "Serbian (Latin, Serbia)",
        nativeName: "srpski (Srbija)",
        language: hr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: nK
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, rv, Em, Qp, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Rp, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, wb, sb, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: sv,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[JU]);
    a.calendar = a.calendars.standard;
    a = f[KU] = d.extend(c, {}, j, {
        name: KU,
        englishName: "Sami, Inari (Finland)",
        nativeName: "sämikielâ (Suomâ)",
        language: "smn",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Wkb, Xkb, Ykb, Zkb, alb, blb, clb],
                    namesAbbr: [Zw, YK, Z, nw, "tu", "vá", "lá"],
                    namesShort: [Yk, Qv, cg, oo, "t", Qv, Tm]
                },
                months: {
                    names: [dlb, elb, flb, glb, hlb, ilb, jlb, klb, llb, mlb, nlb, olb, b],
                    namesAbbr: ["uđiv", "kuov", Rv, "cuoŋ", "vyes", "kesi", "syei", "porg", "čoh", "roov", Sv, go, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: jL,
                    t: B,
                    T: z,
                    f: kL,
                    F: lL,
                    M: mL,
                    Y: w
                }
            })
        }
    }, f[KU]);
    a.calendar = a.calendars.standard;
    a = f[LU] = d.extend(c, {}, j, {
        name: LU,
        englishName: "Arabic (Syria)",
        nativeName: "العربية (سوريا)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: GO
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[LU]);
    a.calendar = a.calendars.standard;
    a = f[MU] = d.extend(c, {}, j, {
        name: MU,
        englishName: plb,
        nativeName: plb,
        numberFormat: {
            currency: {
                groupSizes: [3, 0],
                symbol: "BZ$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                patterns: {
                    d: G,
                    D: lD,
                    t: C,
                    T: D,
                    f: qlb,
                    F: rlb,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[MU]);
    a.calendar = a.calendars.standard;
    a = f[NU] = d.extend(c, {}, j, {
        name: NU,
        englishName: "Spanish (Peru)",
        nativeName: "Español (Perú)",
        language: Yf,
        numberFormat: {
            currency: {
                pattern: [Gb, F],
                symbol: "S/."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[NU]);
    a.calendar = a.calendars.standard;
    a = f[OU] = d.extend(c, {}, j, {
        name: OU,
        englishName: "Serbian (Cyrillic, Serbia)",
        nativeName: "српски (Србија)",
        language: ir,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: GS
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [qx, rx, Er, yo, Fr, Gr, vn],
                    namesAbbr: [bn, cn, Hr, Ir, No, dn, Jr],
                    namesShort: [zt, At, UK, tm, Bt, Ct, VK]
                },
                months: {
                    names: [Kr, Lr, vg, en, rg, Fl, Gl, Pk, Mr, Nr, Or, Pr, b],
                    namesAbbr: [Oo, Qr, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, Rr, Sr, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Tr,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[OU]);
    a.calendar = a.calendars.standard;
    a = f[PU] = d.extend(c, {}, j, {
        name: PU,
        englishName: "Arabic (Jordan)",
        nativeName: "العربية (الأردن)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: [Ud, F],
                decimals: 3,
                symbol: "د.ا.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[PU]);
    a.calendar = a.calendars.standard;
    a = f[QU] = d.extend(c, {}, j, {
        name: QU,
        englishName: "English (Trinidad and Tobago)",
        nativeName: "English (Trinidad y Tobago)",
        numberFormat: {
            currency: {
                groupSizes: [3, 0],
                symbol: "TT$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                patterns: {
                    d: G,
                    D: lD,
                    t: C,
                    T: D,
                    f: qlb,
                    F: rlb,
                    M: o,
                    Y: w
                }
            })
        }
    }, f[QU]);
    a.calendar = a.calendars.standard;
    a = f[RU] = d.extend(c, {}, j, {
        name: RU,
        englishName: "Spanish (Argentina)",
        nativeName: "Español (Argentina)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [jc, F],
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[RU]);
    a.calendar = a.calendars.standard;
    a = f[SU] = d.extend(c, {}, j, {
        name: SU,
        englishName: "Serbian (Latin, Montenegro)",
        nativeName: "srpski (Crna Gora)",
        language: hr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, rv, Em, Qp, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Rp, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, wb, sb, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: sv,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[SU]);
    a.calendar = a.calendars.standard;
    a = f[TU] = d.extend(c, {}, j, {
        name: TU,
        englishName: "Arabic (Lebanon)",
        nativeName: "العربية (لبنان)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "ل.ل.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 1,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_TransliteratedEnglish: d.extend(c, {}, h, {
                name: Om,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [mf, em, S, mf, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, af, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 1,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[TU]);
    a.calendar = a.calendars.standard;
    a = f[UU] = d.extend(c, {}, j, {
        name: UU,
        englishName: slb,
        nativeName: slb,
        numberFormat: {
            currency: {
                symbol: "Z$"
            }
        }
    }, f[UU]);
    a.calendar = a.calendars.standard;
    a = f[VU] = d.extend(c, {}, j, {
        name: VU,
        englishName: "Spanish (Ecuador)",
        nativeName: "Español (Ecuador)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[VU]);
    a.calendar = a.calendars.standard;
    a = f[WU] = d.extend(c, {}, j, {
        name: WU,
        englishName: "Serbian (Cyrillic, Montenegro)",
        nativeName: "српски (Црна Гора)",
        language: ir,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [qx, rx, Er, yo, Fr, Gr, vn],
                    namesAbbr: [bn, cn, Hr, Ir, No, dn, Jr],
                    namesShort: [zt, At, UK, tm, Bt, Ct, VK]
                },
                months: {
                    names: [Kr, Lr, vg, en, rg, Fl, Gl, Pk, Mr, Nr, Or, Pr, b],
                    namesAbbr: [Oo, Qr, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, Rr, Sr, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Tr,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[WU]);
    a.calendar = a.calendars.standard;
    a = f[XU] = d.extend(c, {}, j, {
        name: XU,
        englishName: "Arabic (Kuwait)",
        nativeName: "العربية (الكويت)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: [Ud, F],
                decimals: 3,
                symbol: "د.ك.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[XU]);
    a.calendar = a.calendars.standard;
    a = f[YU] = d.extend(c, {}, j, {
        name: YU,
        englishName: "English (Republic of the Philippines)",
        nativeName: "English (Philippines)",
        numberFormat: {
            currency: {
                symbol: "Php"
            }
        }
    }, f[YU]);
    a.calendar = a.calendars.standard;
    a = f[ZU] = d.extend(c, {}, j, {
        name: ZU,
        englishName: "Spanish (Chile)",
        nativeName: "Español (Chile)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [On, F],
                ",": i,
                ".": g
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: Hd,
                    D: Fd,
                    t: B,
                    T: z,
                    f: ro,
                    F: so,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[ZU]);
    a.calendar = a.calendars.standard;
    a = f[aV] = d.extend(c, {}, j, {
        name: aV,
        englishName: "Arabic (U.A.E.)",
        nativeName: "العربية (الإمارات العربية المتحدة)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "د.إ.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[aV]);
    a.calendar = a.calendars.standard;
    a = f[bV] = d.extend(c, {}, j, {
        name: bV,
        englishName: "Spanish (Uruguay)",
        nativeName: "Español (Uruguay)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g,
                symbol: "$U"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[bV]);
    a.calendar = a.calendars.standard;
    a = f[cV] = d.extend(c, {}, j, {
        name: cV,
        englishName: "Arabic (Bahrain)",
        nativeName: "العربية (البحرين)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            decimals: 3,
            percent: {
                decimals: 3
            },
            currency: {
                pattern: [Ud, F],
                decimals: 3,
                symbol: "د.ب.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, qm, cc, Yb, af, rm, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[cV]);
    a.calendar = a.calendars.standard;
    a = f[dV] = d.extend(c, {}, j, {
        name: dV,
        englishName: "Spanish (Paraguay)",
        nativeName: "Español (Paraguay)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g,
                symbol: "Gs"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[dV]);
    a.calendar = a.calendars.standard;
    a = f[eV] = d.extend(c, {}, j, {
        name: eV,
        englishName: "Arabic (Qatar)",
        nativeName: "العربية (قطر)",
        language: gg,
        isRTL: c,
        numberFormat: {
            pattern: [qe],
            currency: {
                pattern: [Ud, F],
                symbol: "ر.ق.‏"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b],
                    namesAbbr: [Wb, Xb, ab, ld, cc, Yb, ug, rd, ob, mc, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                patterns: {
                    d: G,
                    D: cf,
                    t: C,
                    T: D,
                    f: bl,
                    F: cl,
                    M: o
                }
            }),
            UmAlQura: d.extend(c, {}, h, {
                name: Lg,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: Mg,
                    t: C,
                    T: D,
                    f: Ql,
                    F: Rl,
                    M: o
                },
                convert: {
                    _yearInfo: [
                        [Ng, zc],
                        [Og, Pg],
                        [Qg, Rg],
                        [Sg, Tg],
                        [Ug, Vg],
                        [Ac, Wg],
                        [Xg, Yg],
                        [Bc, Zg],
                        [ah, bh],
                        [Cc, ch],
                        [dh, eh],
                        [fh, gh],
                        [Dc, hh],
                        [Ec, ih],
                        [jh, kh],
                        [Bc, lh],
                        [Fc, mh],
                        [Gc, nh],
                        [oh, ph],
                        [qh, rh],
                        [Hc, sh],
                        [Jb, th],
                        [uh, vh],
                        [wh, xh],
                        [Ic, yh],
                        [zh, Ah],
                        [Bh, Ch],
                        [Dh, Eh],
                        [Jc, Fh],
                        [Kb, Gh],
                        [Hh, Ih],
                        [Jh, Kh],
                        [Lh, Mh],
                        [Nh, Oh],
                        [Ph, Qh],
                        [Rh, Sh],
                        [Lb, Th],
                        [Mb, Uh],
                        [Vh, Wh],
                        [Kc, Xh],
                        [Yh, Zh],
                        [ai, bi],
                        [ci, di],
                        [Lc, ei],
                        [Nb, fi],
                        [gi, hi],
                        [ii, ji],
                        [ki, li],
                        [mi, ni],
                        [oi, pi],
                        [qi, ri],
                        [Kb, si],
                        [ti, ui],
                        [Mc, vi],
                        [Ac, wi],
                        [xi, yi],
                        [zi, Ai],
                        [Bi, Ci],
                        [Lb, Di],
                        [Ei, Fi],
                        [Gi, Hi],
                        [Mc, Ii],
                        [Ob, Ji],
                        [Ki, Li],
                        [Mi, Ni],
                        [Oi, Pi],
                        [Qi, Ri],
                        [Si, Ti],
                        [Nc, Ui],
                        [Vi, Wi],
                        [Xi, Yi],
                        [Oc, Zi],
                        [Pc, aj],
                        [bj, cj],
                        [dj, ej],
                        [fj, gj],
                        [Qc, hj],
                        [Rc, ij],
                        [jj, kj],
                        [Oc, lj],
                        [Pc, mj],
                        [Ic, nj],
                        [oj, pj],
                        [Dc, qj],
                        [Ec, rj],
                        [Hc, sj],
                        [tj, uj],
                        [vj, wj],
                        [Sc, xj],
                        [Ob, yj],
                        [Tc, zj],
                        [Aj, Bj],
                        [Jb, Cj],
                        [Dj, Ej],
                        [Fj, Gj],
                        [Hj, Ij],
                        [Cc, Jj],
                        [Kj, Lj],
                        [Tc, Mj],
                        [Nj, Oj],
                        [Kb, Pj],
                        [Nb, Qj],
                        [Rj, Sj],
                        [Tj, Uj],
                        [Vj, Wj],
                        [Qc, Xj],
                        [Rc, Yj],
                        [Zj, ak],
                        [Nb, bk],
                        [Mb, ck],
                        [dk, ek],
                        [Kc, fk],
                        [gk, hk],
                        [ik, jk],
                        [kk, lk],
                        [Lc, mk],
                        [nk, ok],
                        [Sc, pk],
                        [Ob, qk],
                        [rk, sk],
                        [tk, uk],
                        [Jb, vk],
                        [Jc, wk],
                        [xk, yk],
                        [Fc, zk],
                        [Gc, Ak],
                        [Bk, Ck],
                        [Dk, Ek],
                        [Fk, Gk],
                        [Hk, Ik],
                        [Lb, Jk],
                        [Mb, Kk],
                        [Nc, Lk],
                        [0, Mk]
                    ],
                    minDate: zc,
                    maxDate: Nk,
                    toGregorian: function (i, h, j) {
                        var d = j - 1,
                            c = i - xb;
                        if (c < 0 || c >= this._yearInfo.length) return e;
                        var f = this._yearInfo[c],
                            a = new Date(f[1]),
                            b = f[0];
                        a.setMinutes(a.getMinutes() + a.getTimezoneOffset());
                        for (var g = 0; g < h; g++) {
                            d += R + (b & 1);
                            b = b >> 1
                        }
                        a.setDate(a.getDate() + d);
                        return a
                    },
                    fromGregorian: function (i) {
                        var b = this,
                            c = i - i.getTimezoneOffset() * Y;
                        if (c < b.minDate || c > b.maxDate) return e;
                        var a = 0,
                            h = 1;
                        while (c > b._yearInfo[++a][1]);
                        if (c !== b._yearInfo[a][1]) a--;
                        var j = b._yearInfo[a],
                            g = Math.floor((c - j[1]) / y),
                            d = j[0];
                        a += xb;
                        var f = R + (d & 1);
                        while (g >= f) {
                            g -= f;
                            d = d >> 1;
                            f = R + (d & 1);
                            h++
                        }
                        return [a, h - 1, g + 1]
                    }
                }
            }),
            Hijri: d.extend(c, {}, h, {
                name: Vd,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b],
                    namesAbbr: [bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: fc,
                    start: e,
                    offset: 0
                }],
                twoDigitYearMax: bc,
                patterns: {
                    d: Vb,
                    D: G,
                    t: C,
                    T: D,
                    f: Zk,
                    F: al,
                    M: o
                },
                convert: {
                    ticks1970: Wd,
                    monthDays: [0, m, Xd, Yd, Zd, ae, be, ce, de, ee, fe, ge, A],
                    minDate: he,
                    maxDate: ie,
                    hijriAdjustment: 0,
                    toGregorian: function (e, d, f) {
                        var a = this,
                            c = a.daysToYear(e) + a.monthDays[d] + f - 1 - a.hijriAdjustment,
                            b = new Date(c * y - a.ticks1970);
                        b.setMinutes(b.getMinutes() + b.getTimezoneOffset());
                        return b
                    },
                    fromGregorian: function (g) {
                        var a = this;
                        if (g < a.minDate || g > a.maxDate) return e;
                        var k = a.ticks1970 + (g - 0) - g.getTimezoneOffset() * Y,
                            f = Math.floor(k / y) + 1 + a.hijriAdjustment,
                            j, c, d = Math.floor((f - O) * m / P) + 1,
                            b = a.daysToYear(d),
                            h = a.isLeapYear(d) ? A : Q;
                        if (f < b) {
                            d--;
                            b -= h
                        } else if (f === b) {
                            d--;
                            b = a.daysToYear(d)
                        } else if (f > b + h) {
                            b += h;
                            d++
                        }
                        c = 0;
                        var i = f - b;
                        while (c <= x && i > a.monthDays[c]) c++;
                        c--;
                        j = i - a.monthDays[c];
                        return [d, c, j]
                    },
                    daysToYear: function (d) {
                        var b = Math.floor((d - 1) / m) * m,
                            a = d - b - 1,
                            c = Math.floor(b * P / m) + O;
                        while (a > 0) {
                            c += this.isLeapYear(a) ? A : Q;
                            a--
                        }
                        return c
                    },
                    isLeapYear: function (a) {
                        return (a * x + Fb) % m < x
                    }
                }
            }),
            Gregorian_MiddleEastFrench: d.extend(c, {}, h, {
                name: Ok,
                firstDay: 6,
                days: {
                    names: [re, se, Kd, te, ue, ve, we],
                    namesAbbr: [Ld, vd, kc, Md, xe, wd, ye],
                    namesShort: [Uc, Bb, Z, wc, ze, lc, ic]
                },
                months: {
                    names: [Ae, Be, tb, Ce, nb, Hb, De, Ib, Ee, Nd, kd, Fe, b],
                    namesAbbr: [Ge, He, tb, Ie, nb, Hb, Je, Ib, Ke, od, Vc, Le, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: Me,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb,
                    M: o
                }
            }),
            Gregorian_Arabic: d.extend(c, {}, h, {
                name: im,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b],
                    namesAbbr: [Wc, Xc, Yc, Zc, ad, bd, cd, dd, ed, fd, gd, hd, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            }),
            Gregorian_TransliteratedFrench: d.extend(c, {}, h, {
                name: dl,
                firstDay: 6,
                days: {
                    names: [p, q, r, s, t, u, v],
                    namesAbbr: [p, q, r, s, t, u, v],
                    namesShort: [V, W, S, X, T, M, N]
                },
                months: {
                    names: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b],
                    namesAbbr: [pc, qc, ab, rc, sc, tc, uc, vc, ob, ac, pb, qb, b]
                },
                AM: [l, l, l],
                PM: [k, k, k],
                eras: [{
                    name: k,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zb,
                    t: C,
                    T: D,
                    f: Sb,
                    F: Tb
                }
            })
        }
    }, f[eV]);
    a.calendar = a.calendars.standard;
    a = f[fV] = d.extend(c, {}, j, {
        name: fV,
        englishName: tlb,
        nativeName: tlb,
        numberFormat: {
            groupSizes: [3, 2],
            percent: {
                groupSizes: [3, 2]
            },
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 2],
                symbol: "Rs."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                patterns: {
                    d: Hd,
                    D: Qb,
                    t: J,
                    T: I,
                    f: If,
                    F: bf,
                    M: o
                }
            })
        }
    }, f[fV]);
    a.calendar = a.calendars.standard;
    a = f[gV] = d.extend(c, {}, j, {
        name: gV,
        englishName: "Spanish (Bolivia)",
        nativeName: "Español (Bolivia)",
        language: Yf,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [sm, F],
                ",": i,
                ".": g,
                symbol: "$b"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[gV]);
    a.calendar = a.calendars.standard;
    a = f[hV] = d.extend(c, {}, j, {
        name: hV,
        englishName: ulb,
        nativeName: ulb,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                symbol: "RM"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    namesShort: [Eb, ag, md, Yu, md, Iq, Eb]
                },
                patterns: {
                    d: hf,
                    D: vlb,
                    f: wlb,
                    F: xlb,
                    M: Rb
                }
            })
        }
    }, f[hV]);
    a.calendar = a.calendars.standard;
    a = f[iV] = d.extend(c, {}, j, {
        name: iV,
        englishName: "Spanish (El Salvador)",
        nativeName: "Español (El Salvador)",
        language: Yf,
        numberFormat: {
            currency: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[iV]);
    a.calendar = a.calendars.standard;
    a = f[jV] = d.extend(c, {}, j, {
        name: jV,
        englishName: ylb,
        nativeName: ylb,
        numberFormat: {
            percent: {
                pattern: [K, L]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    namesShort: [Eb, ag, md, Yu, md, Iq, Eb]
                },
                patterns: {
                    d: hf,
                    D: vlb,
                    f: wlb,
                    F: xlb,
                    M: Rb
                }
            })
        }
    }, f[jV]);
    a.calendar = a.calendars.standard;
    a = f[kV] = d.extend(c, {}, j, {
        name: kV,
        englishName: "Spanish (Honduras)",
        nativeName: "Español (Honduras)",
        language: Yf,
        numberFormat: {
            currency: {
                pattern: [Gb, F],
                groupSizes: [3, 0],
                symbol: "L."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[kV]);
    a.calendar = a.calendars.standard;
    a = f[lV] = d.extend(c, {}, j, {
        name: lV,
        englishName: "Spanish (Nicaragua)",
        nativeName: "Español (Nicaragua)",
        language: Yf,
        numberFormat: {
            currency: {
                pattern: [sm, F],
                groupSizes: [3, 0],
                symbol: "C$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[lV]);
    a.calendar = a.calendars.standard;
    a = f[mV] = d.extend(c, {}, j, {
        name: mV,
        englishName: "Spanish (Puerto Rico)",
        nativeName: "Español (Puerto Rico)",
        language: Yf,
        numberFormat: {
            currency: {
                pattern: [sm, F],
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, jf]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                AM: [Cb, Cb, Sd],
                PM: [Db, Db, Td],
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: G,
                    D: Fd,
                    t: C,
                    T: D,
                    f: eg,
                    F: fg,
                    M: o,
                    Y: jd
                }
            })
        }
    }, f[mV]);
    a.calendar = a.calendars.standard;
    a = f[nV] = d.extend(c, {}, j, {
        name: nV,
        englishName: "Spanish (United States)",
        nativeName: "Español (Estados Unidos)",
        language: Yf,
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [Od, qf, Xe, rf, sf, tf, Pd],
                    namesAbbr: [td, Pe, U, uf, vf, wf, Qd],
                    namesShort: [id, Bb, Z, Cd, Ye, Qe, ic]
                },
                months: {
                    names: [xf, yf, Rd, sd, zf, Af, Bf, Dd, Cf, Te, Df, Ef, b],
                    namesAbbr: [Ff, ub, U, Gd, pd, wb, sb, Ed, yb, je, vb, Re, b]
                },
                eras: [{
                    name: nc,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    M: SL,
                    Y: jd
                }
            })
        }
    }, f[nV]);
    a.calendar = a.calendars.standard;
    a = f[ux] = d.extend(c, {}, j, {
        name: ux,
        englishName: "Bosnian (Cyrillic)",
        nativeName: "босански",
        language: ux,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: "КМ"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["недјеља", skb, Er, "сриједа", Fr, Gr, vn],
                    namesAbbr: [bn, cn, Hr, Ir, No, dn, Jr],
                    namesShort: ["н", um, "у", vm, jr, um, vm]
                },
                months: {
                    names: [Kr, Lr, vg, en, rg, Fl, Gl, Pk, Mr, Nr, Or, Pr, b],
                    namesAbbr: [Oo, Qr, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, Rr, Sr, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Tr,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc
                }
            })
        }
    }, f[ux]);
    a.calendar = a.calendars.standard;
    a = f[tx] = d.extend(c, {}, j, {
        name: tx,
        englishName: "Bosnian (Latin)",
        nativeName: zlb,
        language: tx,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: sx
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Ls, Ms, Em, Ns, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Os, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, jg, kg, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[tx]);
    a.calendar = a.calendars.standard;
    a = f[ir] = d.extend(c, {}, j, {
        name: ir,
        englishName: "Serbian (Cyrillic)",
        nativeName: "српски",
        language: ir,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: GS
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [qx, rx, Er, yo, Fr, Gr, vn],
                    namesAbbr: [bn, cn, Hr, Ir, No, dn, Jr],
                    namesShort: [zt, At, UK, tm, Bt, Ct, VK]
                },
                months: {
                    names: [Kr, Lr, vg, en, rg, Fl, Gl, Pk, Mr, Nr, Or, Pr, b],
                    namesAbbr: [Oo, Qr, Ol, Qk, rg, Fl, Gl, Rk, Po, Sk, Rr, Sr, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: Tr,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[ir]);
    a.calendar = a.calendars.standard;
    a = f[hr] = d.extend(c, {}, j, {
        name: hr,
        englishName: "Serbian (Latin)",
        nativeName: "srpski",
        language: hr,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: nK
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, rv, Em, Qp, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Rp, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, wb, sb, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: sv,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f[hr]);
    a.calendar = a.calendars.standard;
    a = f.smn = d.extend(c, {}, j, {
        name: "smn",
        englishName: "Sami (Inari)",
        nativeName: "sämikielâ",
        language: "smn",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Wkb, Xkb, Ykb, Zkb, alb, blb, clb],
                    namesAbbr: [Zw, YK, Z, nw, "tu", "vá", "lá"],
                    namesShort: [Yk, Qv, cg, oo, "t", Qv, Tm]
                },
                months: {
                    names: [dlb, elb, flb, glb, hlb, ilb, jlb, klb, llb, mlb, nlb, olb, b],
                    namesAbbr: ["uđiv", "kuov", Rv, "cuoŋ", "vyes", "kesi", "syei", "porg", "čoh", "roov", Sv, go, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: jL,
                    t: B,
                    T: z,
                    f: kL,
                    F: lL,
                    M: mL,
                    Y: w
                }
            })
        }
    }, f.smn);
    a.calendar = a.calendars.standard;
    a = f[lx] = d.extend(c, {}, j, {
        name: lx,
        englishName: "Azeri (Cyrillic)",
        nativeName: "Азәрбајҹан дили",
        language: lx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "ман."
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Базар", Sjb, Tjb, Ujb, Vjb, "Ҹүмә", "Шәнбә"],
                    namesAbbr: ["Б", oK, pK, Pt, qK, "Ҹ", Qt],
                    namesShort: ["Б", oK, pK, Pt, qK, "Ҹ", Qt]
                },
                months: {
                    names: ["Јанвар", tr, om, ur, rK, sK, tK, pm, Wjb, "Октјабр", "Нојабр", vr, b],
                    namesAbbr: [uK, xl, yl, zl, rK, sK, tK, Al, Bl, Cl, Dl, El, b]
                },
                monthsGenitive: {
                    names: ["јанвар", vK, vg, wK, rg, xK, yK, Pk, Xjb, "октјабр", "нојабр", zK, b],
                    namesAbbr: [uK, xl, yl, zl, Jp, xK, yK, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[lx]);
    a.calendar = a.calendars.standard;
    a = f.sms = d.extend(c, {}, j, {
        name: "sms",
        englishName: "Sami (Skolt)",
        nativeName: "sääm´ǩiõll",
        language: "sms",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [tkb, ukb, vkb, "seärad", wkb, "piâtnâc", "sue´vet"],
                    namesAbbr: ["pâ", YK, "mâ", xn, ke, Kp, Zf],
                    namesShort: [Yk, Qv, cg, bg, yt, Yk, bg]
                },
                months: {
                    names: [xkb, ykb, zkb, Akb, Bkb, Ckb, Dkb, Ekb, Fkb, Gkb, Hkb, Ikb, b],
                    namesAbbr: [ZK, aL, bL, Rv, cL, dL, eL, fL, gL, hL, Sv, iL, b]
                },
                monthsGenitive: {
                    names: [Jkb, Kkb, Lkb, Mkb, Nkb, Okb, Pkb, Qkb, Rkb, Skb, Tkb, Ukb, b],
                    namesAbbr: [ZK, aL, bL, Rv, cL, dL, eL, fL, gL, hL, Sv, iL, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: jL,
                    t: B,
                    T: z,
                    f: kL,
                    F: lL,
                    M: mL,
                    Y: w
                }
            })
        }
    }, f.sms);
    a.calendar = a.calendars.standard;
    a = f.zh = d.extend(c, {}, j, {
        name: "zh",
        englishName: "Chinese",
        nativeName: "中文",
        language: "zh",
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [Vv, Wv, Xv, Yv, Zv, aw, bw],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f.zh);
    a.calendar = a.calendars.standard;
    a = f.nn = d.extend(c, {}, j, {
        name: "nn",
        englishName: "Norwegian (Nynorsk)",
        nativeName: "norsk (nynorsk)",
        language: "nn",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [lr, xw, "tysdag", En, Fn, Gn, "laurdag"],
                    namesAbbr: [Vl, Sn, mK, ig, Ne, Ad, Mn],
                    namesShort: [Vl, Sn, mK, ig, Ne, Ad, Mn]
                },
                months: {
                    names: [df, ef, tb, Oe, nb, jg, kg, Jl, le, pf, Ue, to, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.nn);
    a.calendar = a.calendars.standard;
    a = f.bs = d.extend(c, {}, j, {
        name: "bs",
        englishName: "Bosnian",
        nativeName: zlb,
        language: "bs",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: sx
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Ls, Ms, Em, Ns, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Os, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, jg, kg, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.bs);
    a.calendar = a.calendars.standard;
    a = f[gx] = d.extend(c, {}, j, {
        name: gx,
        englishName: "Azeri (Latin)",
        nativeName: hab,
        language: gx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: TM
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [UM, VM, WM, XM, YM, ZM, aN],
                    namesAbbr: [Pm, ut, Op, Xp, Yp, Xn, Zp],
                    namesShort: [Pm, ut, Op, Xp, Yp, Xn, Zp]
                },
                months: {
                    names: [bN, cN, zo, Iw, Vk, Co, Do, dN, eN, fN, gN, Jw, b],
                    namesAbbr: [vt, wr, Se, We, Vk, Co, Do, wt, Wn, Bd, xt, aq, b]
                },
                monthsGenitive: {
                    names: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b],
                    namesAbbr: [vt, wr, Se, We, Vk, Co, Do, wt, Wn, Bd, xt, aq, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    M: Rb,
                    Y: w
                }
            })
        }
    }, f[gx]);
    a.calendar = a.calendars.standard;
    a = f.sma = d.extend(c, {}, j, {
        name: XK,
        englishName: "Sami (Southern)",
        nativeName: "åarjelsaemiengiele",
        language: XK,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: [OT, PT, QT, RT, ST, TT, UT],
                    namesAbbr: ["aej", "måa", "dæj", yr, VT, WT, XT],
                    namesShort: [Cr, cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [YT, ZT, aU, bU, cU, dU, eU, fU, gU, hU, iU, jU, b],
                    namesAbbr: [Ev, Fv, Gv, Hv, Iv, Jv, Kv, Lv, Mv, Nv, Ov, Pv, b]
                },
                monthsGenitive: {
                    names: [kU, lU, mU, nU, oU, pU, qU, rU, sU, tU, uU, vU, b],
                    namesAbbr: [Ev, Fv, Gv, Hv, Iv, Jv, Kv, Lv, Mv, Nv, Ov, Pv, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f.sma);
    a.calendar = a.calendars.standard;
    a = f[mx] = d.extend(c, {}, j, {
        name: mx,
        englishName: "Uzbek (Cyrillic)",
        nativeName: "Ўзбек",
        language: mx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": n,
                ".": g,
                symbol: "сўм"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["якшанба", "душанба", "сешанба", bkb, ckb, "жума", "шанба"],
                    namesAbbr: ["якш", "дш", "сш", "чш", "пш", "ж", "ш"],
                    namesShort: ["я", "д", vm, jr, um, "ж", "ш"]
                },
                months: {
                    names: [Dw, tr, om, ur, Id, Wk, Xk, pm, Ew, Fw, Gw, vr, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                monthsGenitive: {
                    names: ["январ", vK, vg, wK, Sl, Hp, Ip, Pk, "сентябр", "октябр", "ноябр", zK, b],
                    namesAbbr: [Km, xl, yl, zl, Jp, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: dkb,
                    t: J,
                    T: I,
                    f: ekb,
                    F: fkb,
                    M: Ow,
                    Y: w
                }
            })
        }
    }, f[mx]);
    a.calendar = a.calendars.standard;
    a = f[ix] = d.extend(c, {}, j, {
        name: ix,
        englishName: "Mongolian (Cyrillic)",
        nativeName: Kdb,
        language: ix,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Nl, yg],
                ",": n,
                ".": g,
                symbol: "₮"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: ["Ням", XN, YN, ZN, aO, bO, cO],
                    namesAbbr: [ju, ku, lu, mu, nu, ou, pu],
                    namesShort: [ju, ku, lu, mu, nu, ou, pu]
                },
                months: {
                    names: [dO, eO, fO, gO, hO, iO, jO, kO, lO, mO, nO, oO, b],
                    namesAbbr: [oe, qu, ru, su, Xl, tu, uu, vu, wu, xu, yu, zu, b]
                },
                monthsGenitive: {
                    names: [pO, qO, rO, sO, tO, uO, vO, wO, xO, yO, zO, AO, b],
                    namesAbbr: [oe, qu, ru, su, Xl, tu, uu, vu, wu, xu, yu, zu, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: BO,
                    D: CO,
                    t: B,
                    T: z,
                    f: DO,
                    F: EO,
                    M: Rb,
                    Y: FO
                }
            })
        }
    }, f[ix]);
    a.calendar = a.calendars.standard;
    a = f[jx] = d.extend(c, {}, j, {
        name: jx,
        englishName: "Inuktitut (Syllabics)",
        nativeName: "ᐃᓄᒃᑎᑐᑦ",
        language: jx,
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: ["ᓈᑦᑏᖑᔭ", "ᓇᒡᒐᔾᔭᐅ", "ᐊᐃᑉᐱᖅ", "ᐱᖓᑦᓯᖅ", "ᓯᑕᒻᒥᖅ", "ᑕᓪᓕᕐᒥᖅ", gK],
                    namesAbbr: ["ᓈᑦᑏ", "ᓇᒡᒐ", "ᐊᐃᑉᐱ", "ᐱᖓᑦᓯ", "ᓯᑕ", "ᑕᓪᓕ", gK],
                    namesShort: ["ᓈ", "ᓇ", "ᐊ", "ᐱ", "ᓯ", "ᑕ", "ᓯ"]
                },
                months: {
                    names: ["ᔮᓐᓄᐊᕆ", "ᕖᕝᕗᐊᕆ", hK, iK, jK, kK, lK, "ᐋᒡᒌᓯ", "ᓯᑎᐱᕆ", "ᐅᑐᐱᕆ", "ᓄᕕᐱᕆ", "ᑎᓯᐱᕆ", b],
                    namesAbbr: ["ᔮᓐᓄ", "ᕖᕝᕗ", hK, iK, jK, kK, lK, "ᐋᒡᒌ", "ᓯᑎᐱ", "ᐅᑐᐱ", "ᓄᕕᐱ", "ᑎᓯᐱ", b]
                },
                patterns: {
                    d: hf,
                    D: Jjb,
                    f: Kjb,
                    F: Ljb,
                    Y: iH
                }
            })
        }
    }, f[jx]);
    a.calendar = a.calendars.standard;
    a = f[nL] = d.extend(c, {}, j, {
        name: nL,
        englishName: "Chinese (Traditional)",
        nativeName: "中文(繁體)",
        language: nL,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                symbol: "HK$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [jv, kv, lv, mv, nv, ov, pv],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[nL]);
    a.calendar = a.calendars.standard;
    a = f.nb = d.extend(c, {}, j, {
        name: "nb",
        englishName: "Norwegian (Bokmål)",
        nativeName: "norsk (bokmål)",
        language: "nb",
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [Gb, F],
                ",": n,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [lr, cw, dw, En, Fn, Gn, ew],
                    namesAbbr: [Vl, Z, hg, ig, Ne, Ad, Hn],
                    namesShort: [Vl, Z, hg, ig, Ne, Ad, Hn]
                },
                months: {
                    names: [df, ef, tb, Oe, nb, jg, kg, Jl, le, pf, Ue, to, b],
                    namesAbbr: [hc, ub, U, Ub, nb, wb, sb, Ve, yb, dc, vb, fn, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: ec,
                    D: xc,
                    t: J,
                    T: I,
                    f: lm,
                    F: mm,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.nb);
    a.calendar = a.calendars.standard;
    a = f.sr = d.extend(c, {}, j, {
        name: vl,
        englishName: "Serbian",
        nativeName: "srpski",
        language: vl,
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: nK
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                firstDay: 1,
                days: {
                    names: [Pp, rv, Em, Qp, Fm, Gm, Hm],
                    namesAbbr: [Yl, tl, Im, Rp, Zl, am, Jm],
                    namesShort: [ke, Vf, ul, vl, bm, Eg, Zf]
                },
                months: {
                    names: [df, ef, Kg, Oe, Zb, wb, sb, qg, Xo, Yo, Zo, ap, b],
                    namesAbbr: [hc, ub, U, Ub, Zb, wb, sb, wn, yb, dc, vb, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: sv,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: zd,
                    D: xc,
                    t: B,
                    T: z,
                    f: Wf,
                    F: Xf,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.sr);
    a.calendar = a.calendars.standard;
    a = f[fx] = d.extend(c, {}, j, {
        name: fx,
        englishName: "Tajik (Cyrillic)",
        nativeName: "Тоҷикӣ",
        language: fx,
        numberFormat: {
            ",": n,
            ".": g,
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                groupSizes: [3, 0],
                ",": n,
                ".": ";",
                symbol: BM
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": i,
                days: {
                    names: [Ao, CM, DM, EM, FM, GM, HM],
                    namesAbbr: [Ao, fm, ot, pt, qt, rt, st],
                    namesShort: [Ao, fm, ot, pt, qt, rt, st]
                },
                months: {
                    names: [Dw, tr, om, ur, Id, Wk, Xk, pm, Ew, Fw, Gw, vr, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                monthsGenitive: {
                    names: [IM, JM, KM, LM, "маи", MM, NM, OM, PM, QM, RM, SM, b],
                    namesAbbr: [Km, xl, yl, zl, Id, Wk, Xk, Al, Bl, Cl, Dl, El, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Bo,
                    D: Hf,
                    t: B,
                    T: z,
                    f: cm,
                    F: dm,
                    Y: w
                }
            })
        }
    }, f[fx]);
    a.calendar = a.calendars.standard;
    a = f.dsb = d.extend(c, {}, j, {
        name: "dsb",
        englishName: "Lower Sorbian",
        nativeName: "dolnoserbšćina",
        language: "dsb",
        numberFormat: {
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Ab
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": Zs,
                firstDay: 1,
                days: {
                    names: ["njeźela", Yjb, "wałtora", "srjoda", "stwortk", "pětk", wm],
                    namesAbbr: [SC, tl, "wał", TC, "stw", "pět", kt],
                    namesShort: [yt, Yk, "w", bg, bg, Yk, bg]
                },
                months: {
                    names: [df, ef, UC, VC, Zb, lt, mt, WC, le, pf, XC, lg, b],
                    namesAbbr: [hc, ub, bq, Ub, Zb, wb, sb, cq, yb, dc, dq, oc, b]
                },
                monthsGenitive: {
                    names: [ZC, aD, bD, cD, dA, dD, eD, fD, at, gD, hD, bt, b],
                    namesAbbr: [hc, ub, bq, Ub, Zb, wb, sb, cq, yb, dc, dq, oc, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: iD,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: ct,
                    D: jD,
                    t: Zjb,
                    T: z,
                    f: akb,
                    F: kD,
                    M: gc,
                    Y: w
                }
            })
        }
    }, f.dsb);
    a.calendar = a.calendars.standard;
    a = f.smj = d.extend(c, {}, j, {
        name: WK,
        englishName: "Sami (Lule)",
        nativeName: "julevusámegiella",
        language: WK,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                ",": i,
                ".": g,
                symbol: Hg
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 1,
                days: {
                    names: ["ájllek", RS, SS, TS, US, VS, WS],
                    namesAbbr: ["ájl", Dt, AK, "gas", zr, XS, Ar],
                    namesShort: ["á", cg, pe, fo, pe, gm, Tm]
                },
                months: {
                    names: [YS, ZS, aT, bT, cT, dT, eT, fT, gT, hT, iT, jT, b],
                    namesAbbr: [tv, hm, uv, vv, wv, xv, yv, zv, Av, Bv, Cv, Dv, b]
                },
                monthsGenitive: {
                    names: [kT, lT, mT, nT, oT, pT, qT, rT, sT, tT, uT, vT, b],
                    namesAbbr: [tv, hm, uv, vv, wv, xv, yv, zv, Av, Bv, Cv, Dv, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: og,
                    D: ho,
                    t: J,
                    T: I,
                    f: Qo,
                    F: Ro,
                    M: io,
                    Y: w
                }
            })
        }
    }, f.smj);
    a.calendar = a.calendars.standard;
    a = f[hx] = d.extend(c, {}, j, {
        name: hx,
        englishName: "Uzbek (Latin)",
        nativeName: "U'zbek",
        language: hx,
        numberFormat: {
            ",": n,
            ".": g,
            percent: {
                pattern: [K, L],
                ",": n,
                ".": g
            },
            currency: {
                pattern: [H, E],
                decimals: 0,
                ",": n,
                ".": g,
                symbol: lN
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [mN, nN, oN, pN, qN, rN, sN],
                    namesAbbr: [tN, uN, vN, wN, xN, "jm.", "sh."],
                    namesShort: ["ya", pe, bg, Hw, Yk, "j", "sh"]
                },
                months: {
                    names: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b],
                    namesAbbr: [Eo, Fo, Kg, Go, pd, Ho, Io, qg, Jo, Ko, Lo, Mo, b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: yN,
                    D: zN,
                    t: J,
                    T: I,
                    f: AN,
                    F: BN,
                    M: Ow,
                    Y: w
                }
            })
        }
    }, f[hx]);
    a.calendar = a.calendars.standard;
    a = f[nx] = d.extend(c, {}, j, {
        name: nx,
        englishName: "Mongolian (Traditional Mongolian)",
        nativeName: "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ",
        language: nx,
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                pattern: [K, L],
                groupSizes: [3, 0]
            },
            currency: {
                pattern: [jc, Pb],
                groupSizes: [3, 0],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                firstDay: 1,
                days: {
                    names: [BK, CK, DK, EK, FK, GK, HK],
                    namesAbbr: [BK, CK, DK, EK, FK, GK, HK],
                    namesShort: ["ᠡ‍", "ᠨᠢ‍", "ᠬᠣ‍", "ᠭᠤ‍", "ᠳᠥ‍", "ᠲᠠ‍", "ᠵᠢ‍"]
                },
                months: {
                    names: [IK, JK, KK, LK, MK, NK, OK, PK, QK, RK, SK, TK, b],
                    namesAbbr: [IK, JK, KK, LK, MK, NK, OK, PK, QK, RK, SK, TK, b]
                },
                AM: e,
                PM: e,
                eras: [{
                    name: gkb,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: hkb,
                    t: B,
                    T: z,
                    f: ikb,
                    F: jkb,
                    M: kkb,
                    Y: lkb
                }
            })
        }
    }, f[nx]);
    a.calendar = a.calendars.standard;
    a = f[ox] = d.extend(c, {}, j, {
        name: ox,
        englishName: "Inuktitut (Latin)",
        nativeName: HO,
        language: ox,
        numberFormat: {
            groupSizes: [3, 0],
            percent: {
                groupSizes: [3, 0]
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [IO, JO, KO, LO, MO, NO, OO],
                    namesAbbr: ["Nat", "Nag", "Aip", "Pi", "Sit", Lu, "Siv"],
                    namesShort: [Ze, Ze, qd, Uk, Eb, md, Eb]
                },
                months: {
                    names: [PO, QO, RO, SO, me, TO, xq, UO, VO, WO, XO, YO, b],
                    namesAbbr: [ne, "Viv", "Mas", "Ipu", me, gf, dg, "Agi", "Sii", "Uut", "Nuv", "Tis", b]
                },
                patterns: {
                    d: Br,
                    D: ZO,
                    f: aP,
                    F: bP
                }
            })
        }
    }, f[ox]);
    a.calendar = a.calendars.standard;
    a = f[px] = d.extend(c, {}, j, {
        name: px,
        englishName: "Tamazight (Latin)",
        nativeName: cP,
        language: px,
        numberFormat: {
            pattern: [qe],
            ",": i,
            ".": g,
            percent: {
                ",": i,
                ".": g
            },
            currency: {
                pattern: [H, E],
                symbol: "DZD"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                "/": rb,
                firstDay: 6,
                days: {
                    names: [dP, eP, fP, To, gP, Ou, hP],
                    namesAbbr: ["Ace", "Ari", yw, "Aha", "Amh", Ou, "Sed"],
                    namesShort: ["Ac", Pu, Pu, "Ah", "Am", Qu, Qu]
                },
                months: {
                    names: [iP, jP, kP, lP, Ru, mP, nP, oP, pP, qP, rP, sP, b],
                    namesAbbr: ["Yen", "Fur", "Mag", "Yeb", Vk, Su, Tu, "Ghu", "Cut", "Ktu", "Wam", "Duj", b]
                },
                AM: e,
                PM: e,
                patterns: {
                    d: Hd,
                    D: cf,
                    t: B,
                    T: z,
                    f: Uu,
                    F: Vu,
                    M: o
                }
            })
        }
    }, f[px]);
    a.calendar = a.calendars.standard;
    a = f[kx] = d.extend(c, {}, j, {
        name: kx,
        englishName: "Hausa (Latin)",
        nativeName: vP,
        language: kx,
        numberFormat: {
            currency: {
                pattern: [jc, F],
                symbol: Ze
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [wP, xP, yP, zP, AP, BP, CP],
                    namesAbbr: ["Lah", "Lit", Lu, "Lar", "Alh", "Jum", "Asa"],
                    namesShort: [yc, yc, md, yc, qd, Cm, qd]
                },
                months: {
                    names: [DP, EP, FP, GP, Ru, HP, IP, JP, KP, LP, MP, NP, b],
                    namesAbbr: [ne, ng, Se, "Afr", Vk, Su, Tu, "Agu", xr, Bd, "Nuw", yq, b]
                },
                AM: [OP, PP, QP],
                PM: [RP, SP, TP],
                eras: [{
                    name: Wo,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf
                }
            })
        }
    }, f[kx]);
    a.calendar = a.calendars.standard;
    a = f[qv] = d.extend(c, {}, j, {
        name: qv,
        englishName: "Chinese (Simplified) Legacy",
        nativeName: "中文(简体) 旧版",
        language: qv,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                pattern: [jc, Pb],
                symbol: Tl
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [Vv, Wv, Xv, Yv, Zv, aw, bw],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: el,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[qv]);
    a.calendar = a.calendars.standard;
    a = f[Dr] = d.extend(c, {}, j, {
        name: Dr,
        englishName: "Chinese (Traditional) Legacy",
        nativeName: "中文(繁體) 舊版",
        language: Dr,
        numberFormat: {
            percent: {
                pattern: [K, L]
            },
            currency: {
                symbol: "HK$"
            }
        },
        calendars: {
            standard: d.extend(c, {}, h, {
                days: {
                    names: [gn, hn, jn, kn, ln, mn, nn],
                    namesAbbr: [jv, kv, lv, mv, nv, ov, pv],
                    namesShort: [wg, on, pn, qn, rn, sn, tn]
                },
                months: {
                    names: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b],
                    namesAbbr: [Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, b]
                },
                AM: [xd, xd, xd],
                PM: [yd, yd, yd],
                eras: [{
                    name: dp,
                    start: e,
                    offset: 0
                }],
                patterns: {
                    d: hf,
                    D: jm,
                    t: B,
                    T: z,
                    f: Cn,
                    F: Dn,
                    M: Il,
                    Y: km
                }
            })
        }
    }, f[Dr]);
    a.calendar = a.calendars.standard
})(jQuery)